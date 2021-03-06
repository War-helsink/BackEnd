# Generated by Django 2.2.4 on 2020-02-04 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0013_auto_20200203_2244'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articles',
            name='articles_name_autor',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='comment_name',
        ),
        migrations.RemoveField(
            model_name='user_acaunt',
            name='comments',
        ),
        migrations.AlterField(
            model_name='temp_articles',
            name='name_title',
            field=models.CharField(max_length=100, unique=True, verbose_name='Тема'),
        ),
        migrations.AlterField(
            model_name='user_acaunt',
            name='login_acaunt',
            field=models.CharField(max_length=100, unique=True, verbose_name='Логин'),
        ),
        migrations.AlterField(
            model_name='user_acaunt',
            name='name_acaunt',
            field=models.CharField(max_length=100, unique=True, verbose_name='Имя'),
        ),
    ]
