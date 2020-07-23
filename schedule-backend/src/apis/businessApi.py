from flask_restx import Namespace, Resource, fields

api = Namespace('business', description='business related opperations')

business = api.model('Business', {
    # TODO need to create and add model for business
    "busName" : fields.String,
    "location" : fields.String,
    "admin" : fields.String,
    bus_name = db.StringField(required=True)
    workers_name = db.StringField(required=True)
    location = db.StringField(required=True)
    admin = db.StringField(required=True)
    password = db.StringField(required=True)
})

@api.route('/<string:bus_id>/workers')
class Worker(Resource):

    def get(self, bus_id)

@api.route('/<string:bus_id>')
class Business(Resource):
    
    def get(self, bus_id):
        # Call method to get business out of DB using bus_id
        return { bus_id: "This will be the business info" }
    
    def put(self, bus_id):
        # Call method to update a business
        return { bus_id: "This will confirm a business update in the DB" }

@api.route('/')
class MakeBusiness(Resource):

    def post(self):
        # Call method to add business to DB
        return { 'confirmation': "This will send a confirmation message"}