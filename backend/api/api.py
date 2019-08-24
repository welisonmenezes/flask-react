from flask import current_app, Blueprint, request
from flask_restful import Resource, Api

api_bp = Blueprint('api', __name__, url_prefix='/api')
api = Api(api_bp)

class TodoItem(Resource):
    def get(self):
        return {'task': 'get'}

    def post(self):
        return {'task': 'post'}

    def put(self):
        return {'task': 'put'}

    def delete(self):
        return {'task': 'delete'}

api.add_resource(TodoItem, '/')