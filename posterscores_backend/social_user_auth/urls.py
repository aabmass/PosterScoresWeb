from django.conf.urls import include, url
from social_user_auth import views

urlpatterns = [
    url(r'^social/jwt_user/$', views.SocialJWTTokenUserAuthView.as_view(),
        name = 'login_social_jwt_user'),
]
