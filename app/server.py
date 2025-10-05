import os, datetime, requests
from flask import Flask, request, send_file, render_template, redirect, jsonify, Response

app = Flask(__name__, template_folder="templates", static_folder="static")

BASE_URL         = os.getenv("BASE_URL", "http://localhost:8080")
LEAD_WEBHOOK_URL = os.getenv("LEAD_WEBHOOK_URL", "")
COMPANY_NAME     = os.getenv("COMPANY_NAME", "Your Company")
WHATSAPP_NUMBER  = os.getenv("WHATSAPP_NUMBER", "")
CONTACT_NAME     = os.getenv("CONTACT_NAME", "Your Name")
CONTACT_EMAIL    = os.getenv("CONTACT_EMAIL", "you@example.com")
CONTACT_PHONE    = os.getenv("CONTACT_PHONE", "+9715xxxxxxxx")
CONTACT_TITLE    = os.getenv("CONTACT_TITLE", "Title")
CONTACT_ORG      = os.getenv("CONTACT_ORG", COMPANY_NAME)

VCF_FILENAME = "contact.vcf"

def generate_vcard():
    vcard = f"""BEGIN:VCARD
VERSION:3.0
N:{CONTACT_NAME.split()[-1]};{CONTACT_NAME.replace(CONTACT_NAME.split()[-1],'').strip()};
FN:{CONTACT_NAME}
ORG:{CONTACT_ORG}
TITLE:{CONTACT_TITLE}
TEL;TYPE=CELL:{CONTACT_PHONE}
EMAIL;TYPE=WORK:{CONTACT_EMAIL}
URL:{BASE_URL}
END:VCARD
"""
    return vcard.encode("utf-8")

@app.route("/")
def index():
    return render_template("index.html",
        company=COMPANY_NAME,
        whatsapp=WHATSAPP_NUMBER,
        base_url=BASE_URL
    )

@app.route("/contact.vcf")
def vcf():
    data = generate_vcard()
    return Response(
        data,
        mimetype="text/vcard",
        headers={"Content-Disposition": f'attachment; filename="{VCF_FILENAME}"'}
    )

@app.route("/whatsapp")
def whatsapp():
    number = WHATSAPP_NUMBER.replace("+","").replace(" ","")
    return redirect(f"https://wa.me/{number}")

@app.route("/lead", methods=["POST"])
def lead():
    payload = {
        "ts": datetime.datetime.utcnow().isoformat()+"Z",
        "name": request.form.get("name","").strip(),
        "company": request.form.get("company","").strip(),
        "email": request.form.get("email","").strip(),
        "phone": request.form.get("phone","").strip(),
        "notes": request.form.get("notes","").strip(),
        "source": "expo-qr"
    }

    if LEAD_WEBHOOK_URL:
        try:
            r = requests.post(LEAD_WEBHOOK_URL, json=payload, timeout=6)
            r.raise_for_status()
        except Exception as e:
            app.logger.error(f"Webhook error: {e}")
    else:
        app.logger.info(f"Lead received: {payload}")

    return jsonify({"ok": True})

@app.route("/health")
def health():
    return {"ok": True}, 200

if __name__ == "__main__":
    app.run(host=os.getenv("HOST","0.0.0.0"), port=int(os.getenv("PORT","8080")))
