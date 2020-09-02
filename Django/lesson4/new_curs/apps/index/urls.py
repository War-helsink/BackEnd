from django.urls import path
from . import views


app_name = 'index'
urlpatterns = [
	path('',views.index,name="index"),
	path('articles/<int:id_articles>/', views.article,name="article"),
	path('tema/<int:id_tema>/', views.tema, name="tema"),
	path('comment_save/<int:id_articles>',views.comment_save,name="comment_save"),
	path('authorization/', views.authorization,name="authorization"),
	path('authorization_def/', views.authorization_def,name="authorization_def"),
	path('registration/',views.registration,name="registration"),
	path('registration_def/', views.registration_def,name="registration_def"),
	path('unauthorization/', views.unauthorization,name="unauthorization"),
	path('adminka/',views.adminka, name="adminka"),
]