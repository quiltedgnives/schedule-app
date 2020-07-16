from flask_restx import Namespace, Resource, fields

api = Namespace('worker', description='Worker related operations')

worker = api.model('Worker', {
    # TODO need to create and add model for worker
})

@api.route('/<int:worker_id>')
class Worker(Resource):
    
    def get(self, worker_id):
        # Call method to get worker out of DB using worker_id
        return { worker_id: "This will be the business info" }
    
    def put(self, worker_id):
        # Call method to update a worker
        return { worker_id: "This will confirm a business update in the DB" }

@api.route('/')
class CreateWorker(Resource):

    def post(self):
        # Call method to add worker
        return { 'confirmation': "This will send a confirmation message"}