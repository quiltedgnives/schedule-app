from app import api
from flask import json

with api.test_client as c:
    rv = c.post('/business', json={})
    json_data = rv.get_json()
    assert { 'confirmation': "This will send a confirmation message"}