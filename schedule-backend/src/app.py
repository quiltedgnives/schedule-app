from flask import Flask
from flask_restx import Api
import sys

sys.path.append("../")

app = Flask(__name__)
api = Api(app)

from appsrc.database.db import initialize_db
from appsrc.apis.routes import initialize_routes

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/schedule-backend'
}

initialize_db(app)
initialize_routes(api)

if __name__ == '__main__':
    app.run(debug=True)