from django.db import models

class User_Aceunt(models.Model):
	login_servis = models.CharField('login',max_length=50)
	password = models.CharField('password',max_length =100)
	email = models.CharField('email',max_length=50)

