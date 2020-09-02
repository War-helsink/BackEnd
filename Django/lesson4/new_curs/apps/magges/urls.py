from django.urls import path
from . import views


app_name = 'magges'
urlpatterns = [
    path('', views.index,name="index"),
    path('product/<int:id_product>/', views.product, name="product"),
    path('tema/<int:id_tema>/', views.tema, name="tema"),
]