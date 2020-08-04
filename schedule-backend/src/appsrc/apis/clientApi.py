from flask import Response, request
from flask_restx import Resource, fields
from ..database.models import Client

class ClientApi(Resource):
    
    def get(self, client_id):
        # Call method to get client out of DB using client_id
        return { client_id: "This will be the client info" }

    def put(self, client_id):
        # Call method to update business.
        return { client_id: 'This will confirm a client update in the DB'}

class CreateClientApi(Resource):
    
    def post(self):
        body = request.get_json()
        client = Client(**body).save()
        id = client.id
        return { "id" : str(id) }, 200