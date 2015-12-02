from django.conf.urls import include, url
from social_user_auth import views

urlpatterns = [
    # returns token + user_data
    url(r'^social/jwt_user/(?:(?P<provider>[a-zA-Z0-9_-]+)/?)?$', views.SocialJWTTokenUserAuthView.as_view(),
        name='login_social_token_user'),
]
