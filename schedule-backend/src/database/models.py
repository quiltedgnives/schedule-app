from .db import db

class Business(db.Document):
    bus_name = db.StringField(required=True)

class Worker(db.Document):
    worker_name = db.StringField(required=True)

class Client(db.Document):
    client_name = db.StringField(required=True)
