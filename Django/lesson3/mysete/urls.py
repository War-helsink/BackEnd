from django.contrib import admin
from django.urls import path,include 

urlpatterns = [
	path('Hello/', include('Hello.urls')),
	path('articles/', include('articles.urls')),
    path('admin/', admin.site.urls),

    
]
