from flask import Response, request
from flask_restx import Resource, fields
from ..database.models import Client, Test

class ClientApi(Resource):
    
    def get(self, client_id):
        client = Client.objects.get(id=client_id).to_json()
        return Response(client, mimetype="application/json", status=200)

    def put(self, client_id):
        body = request.get_json()
        Client.objects.get(id=client_id).update(**body)
        return '', 200

class CreateClientApi(Resource):
    
    def post(self):
        body = request.get_json()
        client = Client(**body)
        client.save()
        id = client.id
        return { "id" : str(id) }, 200