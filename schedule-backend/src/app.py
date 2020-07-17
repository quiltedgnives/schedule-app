from flask import Flask
from apis import api
from database.db import initialize_db

app = Flask(__name__)
api.init_app(app)

initialize_db(api)

if __name__ == '__main__':
    app.run(debug=True)