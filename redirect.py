from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message

app = Flask(__name__, template_folder='Templates')


@app.route('/', methods=['post', 'get'])
def main():
    render_template('index.html')
    return redirect(request.url.replace('http://', 'https://', 1))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
