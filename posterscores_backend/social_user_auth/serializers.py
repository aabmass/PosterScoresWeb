from rest_social_auth.serializers import UserSerializer, TokenSerializer

from rest_framework_jwt.settings import api_settings

class JWTTokenSerializer(TokenSerializer):
    """JWTTokenSerializer

    Serialize a django user model instance into a JWT to be sent
    back to the user after a successful auth
    """

    def get_token(self, obj):
        """get_token

        :param obj: the actual django user model instance
        """
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        
        payload = jwt_payload_handler(obj)  # obj is the user instance
        token = jwt_encode_handler(payload)

        return token


class UserJWTTokenSerializer(JWTTokenSerializer, UserSerializer):
    """UserJWTTokenSerializer
    
    Serialize a user into JWT with the user info, also
    """
    pass

