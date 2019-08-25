from flask import current_app, Blueprint, request
from flask_restful import Resource, Api

api_bp = Blueprint('api', __name__, url_prefix='/api')
api = Api(api_bp)

# def hasPermission(fn):
#     def wrapper(*args,**kwargs):
#         print(args)
#         if False:
#             return fn(*args,**kwargs)
#         else:
#             return {'message': 'No permission'}
#     return wrapper

def hasPermission(role):                            
    def decorator(fn):                                            
        def decorated(*args,**kwargs): 
            if (role == 'admin'):                         
                return fn(*args,**kwargs)
            else:
                return {'message': 'No permission'}, 403      
        return decorated                                          
    return decorator

class TodoItem(Resource):
    @hasPermission('user')
    def get(self):
        print('xxx')
        return {'task': 'get'}

    def post(self):
        return {'task': 'post'}

    def put(self):
        return {'task': 'put'}

    def delete(self):
        return {'task': 'delete'}

api.add_resource(TodoItem, '/')