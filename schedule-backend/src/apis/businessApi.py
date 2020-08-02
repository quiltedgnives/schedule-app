from flask_restx import Resource, fields

class Worker(Resource):

    def get(self, bus_id, worker_id):
        # call method to get single worker
        return { bus_id: "Workers" , worker_id: "Specific worker"}

    def put(self, bus_id, worker_id):
        # call method to update a worker
        return '', 200

class Workers(Resource):

    def get(self, bus_id):
        # call method to get all the workers
        return { bus_id: "Return list of workers"}

    def post(self, bus_id):
        # call method to create worker
        return '', 200


class Business(Resource):
    
    def get(self, bus_id):
        # Call method to get business out of DB using bus_id
        return { bus_id: "This will be the business info" }
    
    def put(self, bus_id):
        # Call method to update a business
        return { bus_id: "This will confirm a business update in the DB" }

class CreateBusiness(Resource):

    def post(self):
        # Call method to add business to DB
        return { 'confirmation': "This will send a confirmation message"}