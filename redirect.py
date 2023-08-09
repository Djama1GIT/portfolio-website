from flask import Flask, request, redirect

app = Flask(__name__, template_folder='Templates')


@app.route('/ru', methods=['post', 'get'])
@app.route('/', methods=['post', 'get'])
def main():
    return redirect(request.url.replace('http://', 'https://', 1))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
