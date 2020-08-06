from flask import Response, request
from flask_restx import Resource, fields
from ..database.models import Worker, Business
import random

class WorkerApi(Resource):

    def get(self, worker_id):
        worker = Worker.objects.get(id=worker_id).to_json()
        return Response(worker, mimetype="application/json", status=200)

    def put(self, bus_id, worker_id):
        body = request.get_json()
        Worker.objects.get(id=worker_id).update(**body)
        return '', 200

class WorkersApi(Resource):

    def get(self, bus_id):
        workers = Business.objects.get(id=bus_id).objects(workers__all='').to_json()
        return Response(workers, mimetype="application/json", status=200)

    def post(self, bus_id):
        body = request.get_json()
        worker = Worker(is_admin = body["isAdmin"], worker_type = body['workerType'], user_type=body["userType"], name=body["name"], email=body["email"])
        worker.save()
        id = worker.id
        return { 'id' : str(id) }, 200


class BusinessApi(Resource):
    
    def get(self, bus_id):
        # Call method to get business out of DB using bus_id
        return { bus_id: "This will be the business info" }
    
    def put(self, bus_id):
        # Call method to update a business
        return { bus_id: "This will confirm a business update in the DB" }

class CreateBusinessApi(Resource):

    def post(self):
        body = request.get_json()
        business = Business(**body).save()
        id = business.id
        return { 'id' : str(id)}, 200