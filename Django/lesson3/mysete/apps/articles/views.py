from django.http import HttpResponse

def index(requst):
	return HttpResponse('<title>God job</title>')
