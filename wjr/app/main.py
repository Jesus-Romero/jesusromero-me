from flask import Flask, render_template

app = Flask(__name__, static_folder='./../static',template_folder='./../public')


@app.route('/', defaults={'path': ''})
def index(path):
     return render_template('index.html');

if __name__ == "__main__":
     app.run(host='0.0.0.0', port=80)
