from django.shortcuts import render
from .models import Temp_Articles, Articles,Comment,User_acaunt
from django.http import HttpResponse,Http404,HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
from django.db.utils import IntegrityError

#Админку акаунта для других пользователей 





#Страницы




#Начальная страница
def index(request):
	if sessions_set(request):
		sessions = User_acaunt.objects.get(id = request.session['login'])
	else:
		sessions = None	
	lets_bet_get = Temp_Articles.objects.all()
	articles =  Articles.objects.order_by('-pub_date')[:6]
	popoler =  Articles.objects.order_by('-articles_int')[:6]	
	return render(request, 'index/list.html',{"sessions":sessions,"lets_bet_get":lets_bet_get,"articles":articles,"popoler":popoler })
	

#Страница статти
def article(request, id_articles):
	articles = Articles.objects.get(id=id_articles)
	if sessions_set(request):
		sessions = User_acaunt.objects.get(id = request.session['login'])
		articles.articles_int = articles.articles_int + 1
		articles.save()
	else:
		sessions = None	
	popoler =  Articles.objects.order_by('-articles_int')[:6]
	lets_bet_get = Temp_Articles.objects.all()
	
	comment = articles.comment_set.all()
	autor = articles.User_acaunt
	return render(request, 'index/articles.html',{"sessions":sessions,"comment":comment,"lets_bet_get":lets_bet_get,"popoler":popoler,"articles":articles})
	

#Страница теми
def tema(request, id_tema):
	if sessions_set(request):
		sessions = User_acaunt.objects.get(id = request.session['login'])
	else:
		sessions = None
	lets_bet_get = Temp_Articles.objects.all()
	tema = Temp_Articles.objects.get(id = id_tema)
	articles = tema.articles_set.all()[:6]
	popoler =  Articles.objects.order_by('-articles_int')[:6]
	return render(request, 'index/tema.html',{"sessions":sessions,"tema":tema,"articles":articles,"lets_bet_get":lets_bet_get,"popoler":popoler})
	
	
#Страница регестрации 
def registration(request):
	if sessions_set(request):
		return HttpResponseRedirect(reverse('index:index'))
	lets_bet_get = Temp_Articles.objects.all()
	popoler =  Articles.objects.order_by('-articles_int')[:6]
	return render(request, 'index/registration.html',{"lets_bet_get":lets_bet_get,"popoler":popoler})
	


#Страница входа
def authorization(request):
	if sessions_set(request):
		return HttpResponseRedirect(reverse('index:index'))
	else:
		lets_bet_get = Temp_Articles.objects.all()
		popoler =  Articles.objects.order_by('-articles_int')[:6]
		return render(request, 'index/authorization.html',{"lets_bet_get":lets_bet_get,"popoler":popoler})
	
#Aдминка
def adminka(request):
	if sessions_set(request):
		lets_bet_get = Temp_Articles.objects.all()
		popoler =  Articles.objects.order_by('-articles_int')[:6]
		sessions = User_acaunt.objects.get(id = request.session['login'])
		return render(request, 'index/adminka.html',{"sessions":sessions,"lets_bet_get":lets_bet_get,"popoler":popoler})
	else:
		return HttpResponseRedirect(reverse('index:index'))





#Ниже робочие функции



#Добавления комента
def comment_save(request, id_articles):
	if sessions_set(request):
		try:
			a = Articles.objects.get(id = id_articles)
			b = User_acaunt.objects.get(id = request.session['login'])
		except:
			raise Http404("Статья не найдена!")
		
		a.comment_set.create(User_acaunt=b,articles_like=0,articles_unlike=0,comment_text = request.POST['text'],pub_date = timezone.now())
		return HttpResponseRedirect(reverse('index:article',args = (a.id,)))
	else:
		return HttpResponseRedirect(reverse('index:index'))



#Вход
def authorization_def(request):
	try:
		a = User_acaunt.objects.get(login_acaunt = request.POST['login'])
		if a.password_acaunt == request.POST['pass']:
			request.session['login'] = a.id
		else:
			text = "Не верний логин или пароль"
			lets_bet_get = Temp_Articles.objects.all()
			popoler =  Articles.objects.order_by('-articles_int')[:6]
			return render(request, 'index/authorization.html',{"text":text,"lets_bet_get":lets_bet_get,"popoler":popoler})
	except:
		text = "Не верний логин или пароль"
		lets_bet_get = Temp_Articles.objects.all()
		popoler =  Articles.objects.order_by('-articles_int')[:6]
		return render(request, 'index/authorization.html',{"text":text,"lets_bet_get":lets_bet_get,"popoler":popoler})
	return HttpResponseRedirect(reverse('index:authorization'))
	


#Регистрация
def registration_def(request):
	if request.POST['pass'] == request.POST['pass1']:
		try:
			new_user = User_acaunt(name_acaunt=request.POST['name'],admin=False,login_acaunt=request.POST['login'],password_acaunt=request.POST['pass'],email=request.POST['email'],number=request.POST['number'],pub_date=timezone.now())
			new_user.save()
			request.session['login'] = new_user.id
		except IntegrityError:
			text = "Такое Имя или Логин уже существують"
			lets_bet_get = Temp_Articles.objects.all()
			popoler =  Articles.objects.order_by('-articles_int')[:6]
			return render(request, 'index/registration.html',{"text":text,"lets_bet_get":lets_bet_get,"popoler":popoler})
	else:
		text = "Повторите пароль"
		lets_bet_get = Temp_Articles.objects.all()
		popoler =  Articles.objects.order_by('-articles_int')[:6]
		return render(request, 'index/registration.html',{"text":text,"lets_bet_get":lets_bet_get,"popoler":popoler})
	return HttpResponseRedirect(reverse('index:registration'))
	


#Виход из сесси
def unauthorization(request):
	if sessions_set(request):
		del request.session['login']
		return HttpResponseRedirect(reverse('index:index'))
	else:
		return HttpResponseRedirect(reverse('index:index'))
	


#Проверки сесси
def sessions_set(request):
	if 'login' in request.session:
		return True
	else:
		return False
	


