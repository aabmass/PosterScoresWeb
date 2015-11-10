from social_user_auth.serializers import UserJWTTokenSerializer
from rest_social_auth.views import SocialTokenUserAuthView

class SocialJWTTokenUserAuthView(SocialTokenUserAuthView):
    """SocialJWTTokenUserAuthView
    
    Send a new JWT and the user info together back to the client
    after a successful auth
    """

    serializer_class = UserJWTTokenSerializer
