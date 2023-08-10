from flask import Flask, render_template
from flask.views import MethodView

app = Flask(__name__, template_folder='Templates')
app.debug = False


class BaseView(MethodView):
    template_name = None
    redirect_to = None

    def get(self):
        return render_template(self.template_name)


class IndexView(BaseView):
    template_name = 'index.html'
    redirect_to = '/'


class RuView(BaseView):
    template_name = 'ru.html'
    redirect_to = '/ru'


class SitemapView(MethodView):
    def get(self):
        return render_template('sitemap.xml')


app.add_url_rule('/', view_func=IndexView.as_view('index'))
app.add_url_rule('/ru', view_func=RuView.as_view('ru'))
app.add_url_rule('/sitemap.xml', view_func=SitemapView.as_view('sitemap'))

if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=443)
    app.run(host='0.0.0.0', port=8080)
