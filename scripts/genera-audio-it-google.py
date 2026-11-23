"""Rigenera le tracce italiane con Google Chirp 3 HD (voce Orus).
Uso: python3 genit.py jobs.json out_dir
"""
import json, os, re, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gtts import synth, used

VOICE = "Orus"
IT_ORD = {"1": "primo", "79": "settantanovesimo", "80": "ottantesimo", "86": "ottantaseiesimo", "102": "centoduesimo"}
SUBS = [
    (r"\bRamses II\b", "Ramses secondo"), (r"\bEnrico VIII\b", "Enrico ottavo"),
    (r"\bIV secolo\b", "quarto secolo"), (r"\bXII secolo\b", "dodicesimo secolo"),
]


def normalize(t):
    t = re.sub(r"\b(\d+)°", lambda m: IT_ORD.get(m.group(1), m.group(1) + "esimo"), t)
    for a, b in SUBS:
        t = re.sub(a, b, t)
    return t


jobs = [j for j in json.load(open(sys.argv[1])) if j["lang"] == "it"]
out = os.path.join(sys.argv[2], "it")
os.makedirs(out, exist_ok=True)
for i, j in enumerate(jobs, 1):
    dest = os.path.join(out, j["key"] + ".mp3")
    if os.path.exists(dest):
        continue
    for attempt in range(3):
        try:
            synth(normalize(j["text"]), VOICE, dest)
            break
        except SystemExit:
            raise
        except Exception as e:  # errore di rete: riprova, la richiesta fallita non viene conteggiata né fatturata
            print("retry", j["key"], e, flush=True)
            time.sleep(5)
    print(f"{i}/{len(jobs)} {j['key']} · caratteri usati {used()}", flush=True)
