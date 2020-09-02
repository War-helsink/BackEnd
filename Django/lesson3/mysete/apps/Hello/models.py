import datetime
from django.db import models
from django.utils import timezone

class Hello(models.Model):
	artical_title = models.CharField('Названия стати',max_length = 200)
	artical_text = models.TextField('Текст стати')
	pub_date = models.DateTimeField('Дата публикации')
	def __str__(self):
		return self.artical_title

	def was_published_recently(self):
		return self.pub_date >= (timezone.now ()- datetime.timedelta(days = 7))

	class Meta:
		verbose_name = 'Статя'
		verbose_name_plural = 'Стати'



class User_password(models.Model):
	user_name = models.CharField('User name', max_length = 50)
	user_password = models.CharField('User password', max_length = 50)
	email = models.CharField('Email', max_length = 20)
	sekret = models.TextField('Секрктный вопрос')
	number_phone = models.CharField('Номер телефона', max_length = 20)
	create_date = models.DateTimeField('Дата регестрации')
	def __str__(self):
		return self.create_date
	class Meta:
		verbose_name = 'Запись'
		verbose_name_plural = 'Записии'

class Comment(models.Model):
	Hello = models.ForeignKey(Hello,on_delete = models.CASCADE)
	author_name = models.CharField('Имя автора',max_length = 50)
	comment_text = models.CharField('Текст комент',max_length = 200)
	def __str__(self):
		return self.author_name

	class Meta:
		verbose_name = 'Коментарий'
		verbose_name_plural = 'Коментрии'


