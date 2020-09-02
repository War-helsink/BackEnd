from django.db import models

# Create your models here.
class ClassProduct(models.Model):
    name_class = models.CharField('Класификация продукта',max_length=100, unique=True)
    def __str__(self):
	    return self.name_class
    class Meta:
        verbose_name = 'Класификация продукта'
        verbose_name_plural = 'Класификация продуктов'


class Product(models.Model):
    ClassProduct = models.ForeignKey(ClassProduct,on_delete = models.CASCADE)	 
    name_product = models.CharField('Названя продукта', max_length=100)
    shop = models.CharField('Цена', max_length=100,unique=True)
    opsanie = models.TextField('Характкристика')
    pub_date = models.DateTimeField('Дата выхода продажи')
	
    def __str__(self):
        return self. name_product
    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'