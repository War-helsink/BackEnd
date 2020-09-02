from django.shortcuts import render
from django.urls import reverse
from django.utils import timezone
from django.http import HttpResponse, Http404, HttpResponseRedirect, JsonResponse
from .models import Temp_Articles, Articles, Comment, User_acaunt
from django.db.utils import IntegrityError
import json
# Create your views here.


# 
def index(request):
    return render(request, 'index/index.html')



#
def like(request, like):
    obj = {}
    try:
        if request.session['login']:
            articles = Articles.objects.get(id=like)
            articles.articles_like = articles.articles_like + 1
            articles.save()
            obj['ok'] = True
            obj['text'] = "Everything went well"
        else:
            obj['ok'] = False
            obj['text'] = "You need to log in"
    except:
        obj['ok'] = False
        obj['text'] = "Everything went wrong"
    return JsonResponse(obj)


#
def dislike(request, dislike):
    obj = {}
    try:
        if request.session['login']:
            articles = Articles.objects.get(id=dislike)
            articles.articles_unlike = articles.articles_like + 1
            articles.save()
            obj['ok'] = True
            obj['text'] = "Everything went well"
        else:
            obj['ok'] = False
            obj['text'] = "You need to log in"
    except:
        obj['ok'] = False
        obj['text'] = "Everything went wrong"
    return JsonResponse(obj)





#
def coments(request, id_coments):
    comments = Articles.objects.get(id=id_coments).comment_set.all()
    obj = {}
    i = 0
    for comment in comments:
        obj[i] = {
            'id': comment.id,
            'User_acaunt':comment.User_acaunt.name_acaunt,
            'comment_text': comment.comment_text,
            'Articles': comment.Articles.id, 
            'articles_like': comment.articles_like,
            'articles_unlike': comment.articles_unlike,
            'pub_date':comment.pub_date,
        }
        i = i+1
    obj['length'] = i
    return JsonResponse(obj)



#
def sitebar(request):
    tema_name = Temp_Articles.objects.all()
    obj = {}
    i = 0
    for tema in tema_name:
        obj[i] = {
            'name_title': tema.name_title,
            'id':tema.id,
        }
        i = i+1
    obj['length'] = i
    return JsonResponse(obj)


#
def article(request, id_tema=None,id_name=None):
    if id_tema:
        articles = Temp_Articles.objects.get(id=id_tema).articles_set.all()
    elif id_name:
        articles = Articles.objects.get(id=id_name)
        articles.articles_int = articles.articles_int + 1
        articles.save()
        obj = {
            'id':articles.id,
            'User_acaunt': articles.User_acaunt.name_acaunt,
            'Temp_Articles': articles.Temp_Articles.name_title,
            'Tema_Id_Articles':articles.Temp_Articles.id,
            'articeles_title': articles.articeles_title,
            'articles_text': articles.articles_text,
            'articles_int': articles.articles_int,
            'articles_like': articles.articles_like,
            'articles_unlike':articles.articles_unlike,
            'pub_date':articles.pub_date,
        }
        return  JsonResponse(obj)
    else:
        articles = Articles.objects.order_by('-pub_date')

    obj = {}
    i = 0
    for articl in articles:
        obj[i] = {
            'id':articl.id,
            'User_acaunt': articl.User_acaunt.name_acaunt,
            'Temp_Articles': articl.Temp_Articles.name_title,
            'Tema_Id_Articles':articl.Temp_Articles.id,
            'articeles_title': articl.articeles_title,
            'articles_text': articl.articles_text,
            'articles_int': articl.articles_int,
            'articles_like': articl.articles_like,
            'articles_unlike':articl.articles_unlike,
            'pub_date':articl.pub_date,
        }
        i = i+1
    obj['length'] = i
    return  JsonResponse(obj)




#
def avtorizet(request):
    json_requst = {}
    if not request.session['login']:
        try:
            if (request.method == 'POST'):
                data_json = json.loads(request.body)
                user = User_acaunt.objects.get(login_acaunt=data_json['login'])
                if user.password_acaunt == data_json['passwd']:
                    request.session['login'] = user.id
                    json_requst['ok'] = True
                    json_requst['name'] = user.name_acaunt
                    json_requst['login'] = user.login_acaunt
                    json_requst['email'] = user.email
                    json_requst['text'] = "You have successfully signed in" 
                else:
                    json_requst['ok'] = False
                    json_requst['text'] = "Error you are not logged in"
        except:
            json_requst['ok'] = False
            json_requst['text'] = "Error you are not logged in"
    else:
        json_requst['ok'] = True
        json_requst['text'] = "You are authorized"

    return JsonResponse(json_requst)


#
def registret(request):
    json_requst = {}
    if not request.session['login']:
        try:
            if (request.method == 'POST'):
                data_json = json.loads(request.body)
                new_user = User_acaunt(
                    name_acaunt=data_json['name'],
                    admin=False, login_acaunt=data_json['login'],
                    password_acaunt=data_json['passwd-first'],
                    email=data_json['email'],
                    number=data_json['number'],
                    pub_date=timezone.now()
                )
                new_user.save()
                request.session['login'] = new_user.id

                json_requst['ok'] = True
                json_requst['text'] = "Registration completed successfully!"
            else:
                json_requst['ok'] = False
                json_requst['text'] = "Registration was not successful"
        except:
            json_requst['ok'] = False
            json_requst['text'] = "Registration was not successful"
    else:
        json_requst['ok'] = False
        json_requst['text'] = "You are authorized"
    return JsonResponse(json_requst)







# 
def redirect(request, test):
    return HttpResponseRedirect(reverse('index:index'))