from flask_restx import Api


# Import API namespaces
from .businessApi import api as busApi
from .workerApi import api as workerApi
from .clientApi import api as clientApi
from .appointmentApi import api as aptApi
from .calendarApi import api as calApi

api = Api(
    version='1.0', 
    title='Schedule App API',
    description='API for all backend interaction for the Schedule App frontend',
)

api.add_namespace(busApi)
api.add_namespace(workerApi)
api.add_namespace(clientApi)
api.add_namespace(aptApi)
api.add_namespace(calApi)