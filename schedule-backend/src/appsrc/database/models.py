from .db import db

class Time(db.EmbeddedDocument):
    date = db.StringField(required=True)
    date_time = db.DateTimeField(required=True)
    time_zone = db.StringField(required=True)

class Appointment(db.EmbeddedDocument):
    appointment_id = db.StringField(required=True)
    start = db.EmbeddedDocumentField(Time)
    end = db.EmbeddedDocumentField(Time)

class Address(db.EmbeddedDocument):
    address_line_1 = db.StringField(required=True)
    address_line_2 = db.StringField()
    address_line_3 = db.StringField()
    city = db.StringField(required=True)
    state = db.StringField(required=True)
    zip = db.StringField(min_length=5, max_length=5, required=True)

class User(db.EmbeddedDocument):
    user_type = db.StringField(required=True, choices=('client', 'worker'))
    name = db.StringField(required=True)
    email = db.EmailField(unique=True, required=True)
    password = db.StringField(min_length=15)
    appointments = db.ListField(db.EmbeddedDocumentField(Appointment))

    meta = {'allow_inheritance': True}

class Worker(User):
    is_admin = db.BooleanField(required=True)
    worker_type = db.StringField(required=True)

class Client(User):
    dob = db.DateTimeField()
    pref_worker = db.ReferenceField('Worker')

class Business(db.Document):
    name = db.StringField(required=True)
    workers = db.ListField(db.EmbeddedDocumentField(Worker))
    location = db.EmbeddedDocumentField(Address)
    admin = db.StringField(required=True)
    password = db.StringField(required=True)



