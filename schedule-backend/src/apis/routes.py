from .businessApi import Worker, Workers, Business, CreateBusiness
from .clientApi import Client, CreateClient
from .authApi import SignupApi, LoginApi

def initialize_routes(api):
    api.add_resource(Worker, '/api/business/<bus_id>/workers/<worker_id>')
    api.add_resource(Workers, '/api/business/<bus_id>/workers')
    api.add_resource(Business, '/api/business/<bus_id>')
    api.add_resource(CreateBusiness, '/api/business')

    api.add_resource(Client, '/api/client/<client_id>')
    api.add_resource(CreateClient, '/api/client')

    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')