from flask import current_app, Blueprint, request
from flask_restful import Resource, Api
import jwt

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

def hasPermissionByToken(token):                            
    def decorator(fn):                                            
        def decorated(*args,**kwargs): 
            if (token):
                try:
                    decoded = jwt.decode(token, 'welisonmenezes', algorithms=['HS256'])
                    return decoded, 200
                except:
                    return {'message': 'token inválido'}, 403
        return decorated                                          
    return decorator

encoded_jwt = jwt.encode({'user': 'welison', 'permission': 'admin'}, 'welisonmenezes', algorithm='HS256')
print(encoded_jwt)



class TodoItem(Resource):
    #@hasPermission('user')
    @hasPermissionByToken(encoded_jwt)
    def get(self):
        
        return {'task': 'get'}

    def post(self):
        return {'task': 'post'}

    def put(self):
        return {'task': 'put'}

    def delete(self):
        return {'task': 'delete'}

api.add_resource(TodoItem, '/')