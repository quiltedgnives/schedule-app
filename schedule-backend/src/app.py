from flask import Flask
from flask_restx import Api
from database.db import initialize_db
from apis.routes import initialize_routes

app = Flask(__name__)
api = Api(app)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/schedule-backend'
}

initialize_db(app)
initialize_routes(api)

if __name__ == '__main__':
    app.run(debug=True)