from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash

class Time(db.Document):
    date = db.StringField(required=True)
    date_time = db.DateTimeField(required=True)
    time_zone = db.StringField(required=True)

class Appointment(db.Document):
    appointment_id = db.StringField(required=True)
    start = db.ReferenceField(Time)
    end = db.ReferenceField(Time)

class Address(db.Document):
    address_line_1 = db.StringField(required=True)
    address_line_2 = db.StringField()
    address_line_3 = db.StringField()
    city = db.StringField(required=True)
    state = db.StringField(required=True)
    zip = db.StringField(min_length=5, max_length=5, required=True)

class User(db.Document):
    user_type = db.StringField(required=True, choices=('client', 'worker'))
    name = db.StringField(required=True)
    email = db.EmailField(unique=True, required=True)
    password = db.StringField(min_length=15)
    appointments = db.ListField(db.ReferenceField(Appointment))

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self):
        return check_password_hash(self.password, password)

    meta = {'allow_inheritance': True}

class Worker(User):
    is_admin = db.BooleanField(required=True)
    worker_type = db.StringField(required=True)

class Client(User):
    dob = db.StringField()
    pref_worker = db.ReferenceField('Worker')

class Business(db.Document):
    name = db.StringField(required=True)
    workers = db.ListField(db.ReferenceField(Worker))
    location = db.ReferenceField(Address)
    admin = db.StringField(required=True)
    password = db.StringField(required=True)


