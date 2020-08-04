from flask import Response, request
from flask_restx import Resource, fields
from ..database.models import Worker, Business
import random

class WorkerApi(Resource):

    def get(self, bus_id, worker_id):
        # call method to get single worker
        return { bus_id: "Workers" , worker_id: "Specific worker"}

    def put(self, bus_id, worker_id):
        # call method to update a worker
        return '', 200

class WorkersApi(Resource):

    def get(self, bus_id):
        # call method to get all the workers
        return { bus_id: "Return list of workers"}

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