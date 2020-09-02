from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import render
from .models import Hello, Comment, User_password



def index(requst):
	latest_articales_list = Hello.objects.order_by('-pub_date')[:5]
	return render(requst, 'Hello/list.html', {'latest_articales_list':latest_articales_list})

def detail(requst, article_id):
	try:
		a = Hello.objects.get( id = article_id)
	except:
		raise Http404("Статья не найдена!")
	return render(requst, 'Hello/detail.html',{'Hello':a})

def test(requst):
	return HttpResponse("Hello")