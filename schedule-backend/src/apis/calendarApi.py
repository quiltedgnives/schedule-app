from flask_restx import Namespace, Resource, fields

api = Namespace('calendar', description='Calendar operations')

calendar = api.model('Calendar', {
    #TODO Define calendar model
})

@api.route('/<int:calendar_id>')
class Calendar(Resource):
    def get(self, calendar_id):
        # TODO Method to get calendar from DB
        return { calendar_id : 'Calendar details' }
