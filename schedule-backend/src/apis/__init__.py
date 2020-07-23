from flask_restx import Api


# Import API namespaces
from .businessApi import api as busApi
from .clientApi import api as clientApi

api = Api(
    version='1.0', 
    title='Schedule App API',
    description='API for all backend interaction for the Schedule App frontend',
)

api.add_namespace(busApi)
api.add_namespace(clientApi)