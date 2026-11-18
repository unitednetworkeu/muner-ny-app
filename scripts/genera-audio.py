"""Genera tutte le tracce delle audioguide con Kokoro.
Uso: python3 genall.py jobs.json out_dir [lingua] [indice_inizio] [indice_fine]
"""
import json, os, re, subprocess, sys, time
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

VOICE = {"it": ("im_nicola", "it"), "en": ("af_heart", "en-us")}
SPEED = 0.95

IT_ORD = {"1": "primo", "79": "settantanovesimo", "80": "ottantesimo", "86": "ottantaseiesimo",
          "102": "centoduesimo", "2": "secondo", "3": "terzo", "4": "quarto"}
IT_SUBS = [
    (r"\bRamses II\b", "Ramses secondo"), (r"\bEnrico VIII\b", "Enrico ottavo"),
    (r"\bIV secolo\b", "quarto secolo"), (r"\bXII secolo\b", "dodicesimo secolo"),
    (r"\bONU\b", "Onu"), (r"\bUNESCO\b", "Unesco"), (r"\bMUN\b", "Mun"), (r"\bNASA\b", "Nasa"),
    (r"\bDNA\b", "di enne a"), (r"\bLED\b", "led"), (r"\bCITES\b", "Cites"), (r"\bDART\b", "Dart"),
]
EN_SUBS = [
    (r"\bRamesses II\b", "Ramesses the Second"), (r"\bThutmose III\b", "Thutmose the Third"),
    (r"\bHenry VIII\b", "Henry the Eighth"), (r"\bBCE\b", "B.C.E."), (r"\bCE\b", "C.E."),
    (r"\bUS\b", "U.S."), (r"\bUN\b", "U.N."), (r"\bMUN\b", "M.U.N."), (r"\bDNA\b", "D.N.A."),
    (r"\bLED\b", "L.E.D."), (r"\bTV\b", "T.V."), (r"\bCITES\b", "Cites"), (r"\bDART\b", "Dart"),
]


def normalize(text, lang):
    t = text.replace("…", ".").replace("“", "").replace("”", "").replace("’", "'").replace("‘", "'")
    if lang == "it":
        t = re.sub(r"\b(\d+)°", lambda m: IT_ORD.get(m.group(1), m.group(1) + "esimo"), t)
        for a, b in IT_SUBS:
            t = re.sub(a, b, t)
    else:
        t = re.sub(r"\b(\d+)°", lambda m: m.group(1) + ("st" if m.group(1).endswith("1") and m.group(1) != "11" else "th"), t)
        for a, b in EN_SUBS:
            t = re.sub(a, b, t)
    return t


def sentences(t):
    parts = re.split(r"(?<=[.!?:;])\s+", t)
    out, cur = [], ""
    for p in parts:  # unisce frasi brevi, tiene ogni blocco sotto ~350 caratteri
        if cur and len(cur) + len(p) > 350:
            out.append(cur)
            cur = p
        else:
            cur = (cur + " " + p).strip()
    if cur:
        out.append(cur)
    return out


def main():
    jobs = json.load(open(sys.argv[1]))
    out_dir = sys.argv[2]
    only = sys.argv[3] if len(sys.argv) > 3 else None
    jobs = [j for j in jobs if not only or j["lang"] == only]
    a = int(sys.argv[4]) if len(sys.argv) > 4 else 0
    b = int(sys.argv[5]) if len(sys.argv) > 5 else len(jobs)
    k = Kokoro("kokoro.onnx", "voices.bin")
    for j in jobs[a:b]:
        lang = j["lang"]
        dest = os.path.join(out_dir, lang, j["key"] + ".mp3")
        if os.path.exists(dest):
            continue
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        voice, code = VOICE[lang]
        t0 = time.time()
        chunks = []
        sr = 24000
        for s in sentences(normalize(j["text"], lang)):
            audio, sr = k.create(s, voice=voice, speed=SPEED, lang=code)
            chunks += [audio, np.zeros(int(sr * 0.35), dtype=audio.dtype)]
        wav = dest[:-4] + ".wav"
        sf.write(wav, np.concatenate([np.zeros(int(sr * 0.3), dtype=chunks[0].dtype)] + chunks), sr)
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", wav, "-ac", "1", "-b:a", "48k", dest], check=True)
        dur = sf.info(wav).duration
        os.remove(wav)
        print(f"{lang} {j['key']} {dur:.0f}s audio in {time.time()-t0:.0f}s", flush=True)


main()
