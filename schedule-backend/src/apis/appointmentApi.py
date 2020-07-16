from flask_restx import Namespace, Resource, fields

api = Namespace('appointments', descriptions='Appointment operations')

apts = api.model('Appointment', {
    # TODO need to create and add model for appointments
})

@api.route('/<int:apt_id>')
class Appointments(Resource):
    def get(self, apt_id):
        # TODO method to get apt details
        return { apt_id: "With apt details"}

    def put(self, apt_id):
        # TODO method to update apt
        return { apt_id: 'Confiramtion' }

@api.route('/')
class CreateAppointments(Resource):

    def post(self):
        # TODO Method to create apt in DB
        return { 'confirmation': 'Confiramtion message' }