from flask_restx import Resource, fields

class Client(Resource):
    
    def get(self, client_id):
        # Call method to get client out of DB using client_id
        return { client_id: "This will be the client info" }

    def put(self, client_id):
        # Call method to update business.
        return { client_id: 'This will confirm a client update in the DB'}

class CreateClient(Resource):
    
    def post(self):
        # Call method to add client
        return { 'confirmation': "This will send a confirmation message"}