from flask import Response, request
from flask_jwt_extended import create_access_token
from database.models import Client, Worker, Business
from flask_restx import Resource
import datetime


class SignupApi(Resource):
    def post(self):
        body = request.get_json()
        if (body.type == "business"):
            Business(
                name=busName,
                workers = (worker),
                location = (location)
            )
        
        elif (body.type == "worker"):
            print("PLACEHOLDER")
        
        elif (body.type == "client"):
            print("PLACEHOLDER")
        
        else:
            print("PANIC!!!")
    



class LoginApi(Resource):
    def post(self):
        body = request.get_json()
        if (body.type == "worker"):
            print("PLACEHOLDER")
        elif (body.type == "client"):
            print("PLACEHOLDER")
        else:
            print("PANIC!!!")
        