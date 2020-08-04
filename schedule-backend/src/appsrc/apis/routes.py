from .businessApi import WorkerApi, WorkersApi, BusinessApi, CreateBusinessApi
from .clientApi import ClientApi, CreateClientApi
from .authApi import SignupApi, LoginApi

def initialize_routes(api):
    api.add_resource(WorkerApi, '/api/business/<bus_id>/workers/<worker_id>')
    api.add_resource(WorkersApi, '/api/business/<bus_id>/workers')
    api.add_resource(BusinessApi, '/api/business/<bus_id>')
    api.add_resource(CreateBusinessApi, '/api/business')

    api.add_resource(ClientApi, '/api/client/<client_id>')
    api.add_resource(CreateClientApi, '/api/client')

    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')