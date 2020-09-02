import datetime
from django.db import models
from django.utils import timezone


class Articles(models.Model):
	articles_title = models.CharField('Названия',max_length = 200)
	articles_text = models.TextField('Текст')
	articles_avtor = models.CharField('Имя автора', max_length=100)
	pug_date = models.DateTimeField('Дата публикации')
	def __str__(self):
		return self.articles_title

	class Meta:
		verbose_name = 'Статя'
		verbose_name_plural = 'Статии'

class User(models.Model):
	login = models.CharField('Логин',max_length=40)
	password =  models.CharField('Пароль', max_length=40)
	phone = models.CharField('Номер',max_length=20)
	email = models.CharField('Електрона почта',max_length=20)
	text = models.TextField('Кратко о себе')
	def __str__(self):
		return self.text

	class Meta:
		verbose_name = 'Пользователь'
		verbose_name_plural = 'Пользователи'


class Comment(models.Model):
	Articles = models.ForeignKey(Articles,on_delete = models.CASCADE)
	author_name = models.CharField('Имя автора',max_length = 50)
	comment_text = models.CharField('Текст комент',max_length = 200)
	def __str__(self):
		return self.author_name

	class Meta:
		verbose_name = 'Коментарий'
		verbose_name_plural = 'Коментрии'