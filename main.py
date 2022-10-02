from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message

app = Flask(__name__, template_folder='Templates')
app.debug = False
app.config['MAIL_SERVER'] = 'smtp.mail.ru'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'prtfl@dj.ama1.ru'
app.config['MAIL_DEFAULT_SENDER'] = 'prtfl@dj.ama1.ru'
app.config['MAIL_PASSWORD'] = ''
mail = Mail(app)


@app.route('/', methods=['post', 'get'])
def main():
    if request.method == 'POST':
        full_name = request.form.get('name') or ""
        phone = request.form.get('phone') or ""
        sender = "prtfl@dj.ama1.ru"
        recipients = sender
        body = request.form.get('message') or ""
        send_message(request.form.get('email') or "" + ", " + full_name + ": " + phone, sender=sender, recipients=recipients, body=body)
        return redirect('/')
    return render_template('index.html')


def send_message(subject, sender, recipients, body):
    msg = Message(subject, sender=sender, recipients=[recipients], body=body)
    mail.send(msg)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
