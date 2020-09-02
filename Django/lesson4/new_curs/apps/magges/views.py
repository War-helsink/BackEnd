from django.shortcuts import render
#from .models import Temp_Articles, Articles,Comment,User_acaunt
from django.http import HttpResponse,Http404,HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
from django.db.utils import IntegrityError
from .models import Product,ClassProduct



def index(request):
    tema = ClassProduct.objects.all()
    product = Product.objects.all()[:10]
    return render(request,'magges/index.html', {'tema':tema, 'product':product})


def product(request, id_product):
    tema = ClassProduct.objects.all()
    product = Product.objects.all()[:10]
    return render(request,'magges/index.html', {'tema':tema, 'product':product})


def tema(request, id_tema):
    temas = ClassProduct.objects.all()
    tema = ClassProduct.objects.get(id = id_tema)
    product = tema.product_set.all()[:8]
    return render(request,'magges/tema.html', {'temas':temas, 'tema':tema, 'product':product})