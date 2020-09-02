# Generated by Django 3.0.7 on 2020-06-04 16:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Myprogekt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('article_title', models.TextField(verbose_name='Текст статти')),
                ('pupb_day', models.DateTimeField(verbose_name='Дата публикации')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('autor_name', models.CharField(max_length=50, verbose_name='Имя автора')),
                ('comment_test', models.CharField(max_length=200, verbose_name='Текст комента')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myprogekt.Myprogekt')),
            ],
        ),
    ]