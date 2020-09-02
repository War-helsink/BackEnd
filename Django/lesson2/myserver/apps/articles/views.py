from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.urls import reverse
from .models import Articles,Comment

def articles(request):
	lets_bet_get = Articles.objects.order_by('-pug_date')
	return render(request, 'articles/list.html',{"lets_bet_get":lets_bet_get})

def detail(request, article_id):
	try:
		a = Articles.objects.get(id = article_id)
	except:
		raise Http404("Статья не найдена!")

	latest_comment_list = a.comment_set.order_by('-id')[:10]
	return render(request, 'articles/detail.html',{"article":a, "comment":latest_comment_list})

def leave_comment(request, article_id):
	try:
		a = Articles.objects.get(id = article_id)
	except:
		raise Http404("Статья не найдена!")

	a.comment_set.create(author_name = request.POST['name'],comment_text = request.POST['text'])
	return HttpResponseRedirect( reverse('articles:detail',args= (a.id,)) )