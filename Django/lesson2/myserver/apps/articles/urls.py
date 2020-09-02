from django.urls import path, include
from . import views 


app_name = 'articles'
urlpatterns = [
	path('', views.articles, name="articles"),
	path('<int:article_id>/', views.detail, name="detail"),
	path('<int:article_id>/leave_comment/', views.leave_comment, name="leave_comment"),
]
