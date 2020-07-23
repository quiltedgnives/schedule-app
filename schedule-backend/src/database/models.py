from .db import db

class Business(db.Document):
<<<<<<< HEAD
    bus_name = db.StringField(required=True)
    workers_name = db.StringField(required=True)
    location = db.StringField(required=True)
    admin = db.StringField(required=True)
    password = db.StringField(required=True)
    
class Client(db.Document):
    client_name = db.StringField(required=True)
    dob = db.StringField(required=True)
    pref_worker = db.StringField(required=False)
    customer_id = db.StringField(required=True)
=======
   bus_name = db.StringField(required=True)
   workers_name = db.StringField(required=True)
   location = db.StringField(required=True)
   admin = db.StringField(required=True)
   password = db.StringField(required=True)
    
class Client(db.Document):
   client_name = db.StringField(required=True)
   dob = db.StringField(required=True)
   pref_worker = db.StringField(required=False)
   customer_id = db.StringField(required=True)
>>>>>>> 7bd03d82cf106dc8d8a181267b9ca69a1341b6b1
