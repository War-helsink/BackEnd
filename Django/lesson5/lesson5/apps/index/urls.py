from django.urls import path
from . import views


app_name = 'index'
urlpatterns = [
	path('', views.index, name="index"),
    path('registret/', views.registret, name="registret"),
    path('avtorizet/', views.avtorizet, name="avtorizet"),
    path('sitebar/', views.sitebar, name="sitebar"),
    path('articles/', views.article, name="articles"),
    path('coments/<int:id_coments>/', views.coments, name="coments"),
    path('articles/<int:id_tema>/', views.article, name="articles_tema"),
    path('article/<int:id_name>/', views.article, name="article"),
    path('like/<int:like>/', views.like, name='like'),
    path('dislike/<int:dislike>/',views.dislike, name='dislike'),
    path('<str:test>/', views.redirect, name="redirect"),
]