from flask import Flask, render_template, request, redirect
from flask.views import MethodView
from flask_mail import Mail, Message

app = Flask(__name__, template_folder='Templates')
app.debug = False

app.config.update(
    MAIL_SERVER='smtp.mail.ru',
    MAIL_PORT=587,
    MAIL_USE_SSL=False,
    MAIL_USE_TLS=True,
    MAIL_USERNAME='prtfl@dj.ama1.ru',
    MAIL_DEFAULT_SENDER='prtfl@dj.ama1.ru',
    MAIL_PASSWORD=''
)

mail = Mail(app)


class BaseView(MethodView):
    template_name = None
    redirect_to = None

    def get(self):
        return render_template(self.template_name)

    def post(self):
        try:
            full_name = request.form.get('name') or ''
            phone = request.form.get('phone') or ''
            email = request.form.get('email') or ''
            sender = 'prtfl@dj.ama1.ru'
            recipients = sender
            body = request.form.get('message') or ''
            subject = f"{email}, {full_name}: {phone}"
            send_message(subject, sender, recipients, body)
        except Exception as exc:
            print(f"[Error] {exc}")
        finally:
            return redirect(self.redirect_to)


class IndexView(BaseView):
    template_name = 'index.html'
    redirect_to = '/'


class RuView(BaseView):
    template_name = 'ru.html'
    redirect_to = '/ru'


class SitemapView(MethodView):
    def get(self):
        return render_template('sitemap.xml')


def send_message(subject, sender, recipients, body):
    msg = Message(subject, sender=sender, recipients=[recipients], body=body)
    mail.send(msg)


app.add_url_rule('/', view_func=IndexView.as_view('index'))
app.add_url_rule('/ru', view_func=RuView.as_view('ru'))
app.add_url_rule('/sitemap.xml', view_func=SitemapView.as_view('sitemap'))

if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=443)
    app.run(host='0.0.0.0', port=8080)
