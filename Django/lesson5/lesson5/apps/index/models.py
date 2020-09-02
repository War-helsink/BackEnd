from django.db import models

# Create your models here.


class User_acaunt(models.Model):
	#добавить акаунт админ или нет
	#картинку для пользоватиля 
	name_acaunt = models.CharField('Имя',max_length=100, unique=True)
	login_acaunt = models.CharField('Логин',max_length=100, unique=True)
	password_acaunt = models.CharField('Пароль',max_length=100)
	admin = models.BooleanField('Аминка', blank=True)
	email = models.CharField('Електрона почта',max_length=100)
	number = models.IntegerField('Номер')
	pub_date = models.DateTimeField('Дата публикации')
	def __str__(self):
		return self.name_acaunt
	class Meta:
		verbose_name = 'Пользователь'
		verbose_name_plural = 'Пользователи'


class Temp_Articles(models.Model):
	name_title = models.CharField('Тема',max_length=100, unique=True)
	def __str__(self):
		return self.name_title
	class Meta:
		verbose_name = 'Тема'
		verbose_name_plural = 'Темы'

class Articles(models.Model):
	# катинку добавить
	# адекватно зделать обзор c первязкой акаунтов 
	User_acaunt = models.ForeignKey(User_acaunt,on_delete = models.CASCADE)
	Temp_Articles = models.ForeignKey(Temp_Articles,on_delete = models.CASCADE)
	articeles_title = models.CharField('Заголовок', max_length=100,unique=True)
	articles_text = models.TextField('Текст')
	articles_int = models.IntegerField('Просмотри')
	articles_like = models.IntegerField('Лайки')
	articles_unlike = models.IntegerField('Дизлайк')
	pub_date = models.DateTimeField('Дата публикации')
	def __str__(self):
		return self.articeles_title

	class Meta:
		verbose_name = 'Статя'
		verbose_name_plural = 'Статии'

class Comment(models.Model):
	User_acaunt = models.ForeignKey(User_acaunt,on_delete = models.CASCADE)
	Articles = models.ForeignKey(Articles,on_delete = models.CASCADE)
	comment_text = models.TextField("Комметнтарий")
	articles_like = models.IntegerField('Лайки')
	articles_unlike = models.IntegerField('Дизлайк')
	pub_date = models.DateTimeField('Дата публикации')
	def __str__(self):
		return self.User_acaunt.name_acaunt

	class Meta:
		verbose_name = 'Коментарий'
		verbose_name_plural = 'Коментрии'

