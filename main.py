from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message

app = Flask(__name__)
app.debug = True
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'vsjxgxxy@gmail.com'
app.config['MAIL_DEFAULT_SENDER'] = 'vsjxgxxy@gmail.com'
app.config['MAIL_PASSWORD'] = 'tdcehjumzkbxnhdo'
mail = Mail(app)


@app.route('/', methods=['post', 'get'])
def main():
    if request.method == 'POST':
        full_name = request.form.get('name') or ""
        phone = request.form.get('phone') or ""
        recipients = "vsjxgxxy@gmail.com"
        sender = request.form.get('email') or ""
        body = request.form.get('message') or ""
        send_message(sender + ", " + full_name + ": " + phone, sender=sender, recipients=recipients, body=body)
        return redirect('/')
    return render_template('index.html')


def send_message(subject, sender, recipients, body):
    msg = Message(subject, sender=sender, recipients=[recipients], body=body)
    mail.send(msg)


if __name__ == '__main__':
    app.run()
