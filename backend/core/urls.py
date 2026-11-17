from django.urls import path
from .views import health, overview
urlpatterns = [path("health/",health),path("overview/",overview)]
