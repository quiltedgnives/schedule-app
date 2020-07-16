from flask_restx import Namespace, Resource, fields

api = Namespace('client', description='Client related operations')

client = api.model('Client', {
    # TODO need to create and add model for client
})

@api.route('/<int:client_id>')
class Client(Resource):
    
    def get(self, client_id):
        # Call method to get client out of DB using client_id
        return { client_id: "This will be the client info" }

    def put(self, client_id):
        # Call method to update business.
        return { client_id: 'This will confirm a client update in the DB'}

@api.route('/')
class CreateClient(Resource):
    
    def post(self):
        # Call method to add client
        return { 'confirmation': "This will send a confirmation message"}