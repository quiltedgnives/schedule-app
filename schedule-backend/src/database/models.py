
from .db import db

class Business(db.Document):
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
