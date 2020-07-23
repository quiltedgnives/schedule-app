from .db import db

class Time(db.EmbeddedDocument):
    date = db.StringField(required=True)
    dateTime = db.DateTimeField(required=True)
    timeZone = db.StringField(required=True)

class Appointment(db.EmbeddedDocument):
    start = db.EmbeddedDocument(Time)
    end = db.EmbeddedDocument(Time)

class Worker(db.EmbeddedDocument):
    worker_name = db.StringField(required=True)
    isAdmin = db.BooleanField(required=True)
    worker_type = db.StringField(required=True)
    appointments = db.EmbeddedDocumentList(Appointment)

class Business(db.Document):
    bus_name = db.StringField(required=True)
    workers = db.EmbeddedDocumentList(Worker)
    location = db.StringField(required=True)
    admin = db.StringField(required=True)
    password = db.StringField(required=True)
     
class Client(db.Document):
    client_name = db.StringField(required=True)
    dob = db.StringField(required=True)
    pref_worker = db.StringField(required=False)
    customer_id = db.StringField(required=True)



