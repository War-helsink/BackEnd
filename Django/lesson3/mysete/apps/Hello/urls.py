from django.urls import path 
from . import views


app_name = 'Hello'

urlpatterns =[
path('',views.index,name='index'),
path('<int:article_id>', views.detail, name = 'detail'),
path('test/',views.test,name='index'),
path('Hello/',views.index,name='index')

]