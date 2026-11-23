"""Sintesi con Google Cloud Text-to-Speech (voci Chirp 3 HD, comprese nel piano gratuito).
Tiene il conto dei caratteri inviati in chars_used e si rifiuta di superare LIMIT nel mese.
"""
import base64, json, os, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
LIMIT = 300_000  # tetto prudenziale: il piano gratuito Chirp 3 HD è 1.000.000 di caratteri al mese
KEY = open(os.path.join(HERE, "key")).read().strip()
LEDGER = os.path.join(HERE, "chars_used")


def used():
    return int(open(LEDGER).read().strip() or 0)


def synth(text, voice, out_path, rate=1.0):
    n = len(text)
    if used() + n > LIMIT:
        raise SystemExit(f"STOP: supererei il tetto di {LIMIT} caratteri (usati {used()})")
    body = {
        "input": {"text": text},
        "voice": {"languageCode": "it-IT", "name": f"it-IT-Chirp3-HD-{voice}"},
        "audioConfig": {"audioEncoding": "MP3", "speakingRate": rate},
    }
    req = urllib.request.Request(
        f"https://texttospeech.googleapis.com/v1/text:synthesize?key={KEY}",
        data=json.dumps(body).encode(), headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=120) as r:
        data = json.load(r)
    # conta i caratteri solo dopo una risposta valida (le richieste rifiutate non vengono fatturate)
    total = used() + n
    with open(LEDGER, "w") as f:
        f.write(str(total))
    open(out_path, "wb").write(base64.b64decode(data["audioContent"]))
    return n
