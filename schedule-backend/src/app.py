from flask import Flask
from flask_restx import Api
import sys
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

sys.path.append("../")

app = Flask(__name__)
app.config.from_envvar('./.env') # SHOULD BE ENV_FILE_LOCATION!!!!
api = Api(app)

from appsrc.database.db import initialize_db
from appsrc.apis.routes import initialize_routes

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/schedule-backend'
}

initialize_db(app)
initialize_routes(api)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

if __name__ == '__main__':
    app.run(debug=True)