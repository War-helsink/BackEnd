from django.urls import path

from . import views

app_name = "myprogekt"
urlpatterns = [
    path('', views.index , name="index" ),
]
