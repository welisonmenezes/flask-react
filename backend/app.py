from flask import Flask, render_template
from api import api

def create_app():
    app = Flask(__name__, template_folder='frontend', static_folder='frontend/static')
    
    # apply app configurations
    app.config.from_pyfile('config.py')
    #print(app.config)


    # routes all nonexistent route to /
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def index(path):
        return render_template('index.html'), 200

    # initialize the api blueprint
    app.register_blueprint(api.api_bp)

    return app