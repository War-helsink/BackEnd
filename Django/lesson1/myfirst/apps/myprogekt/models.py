from django.db import models

# Create your models here.
class Myprogekt(models.Model):
    article_title = models.CharField('Названия стати', max_length = 200)
    article_title = models.TextField('Текст статти')
    pupb_day = models.DateTimeField('Дата публикации')
    def __srt__(self):
        return self.article_title

    class Meta:
        verbose_name = 'Стаття'
        verbose_name_plural = 'Статти'

class Comment(models.Model):
    article = models.ForeignKey(Myprogekt, on_delete = models.CASCADE)
    autor_name = models.CharField('Имя автора', max_length=50)
    comment_test = models.CharField('Текст комента', max_length=200)
    class Meta:
        verbose_name = 'Коментарий'
        verbose_name_plural = 'Коментарии'