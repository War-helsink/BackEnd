# Generated by Django 3.1 on 2020-08-27 19:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Articles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('articeles_title', models.CharField(max_length=100, unique=True, verbose_name='Заголовок')),
                ('articles_text', models.TextField(verbose_name='Текст')),
                ('articles_int', models.IntegerField(verbose_name='Просмотри')),
                ('articles_like', models.IntegerField(verbose_name='Лайки')),
                ('articles_unlike', models.IntegerField(verbose_name='Дизлайк')),
                ('pub_date', models.DateTimeField(verbose_name='Дата публикации')),
            ],
            options={
                'verbose_name': 'Статя',
                'verbose_name_plural': 'Статии',
            },
        ),
        migrations.CreateModel(
            name='Temp_Articles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_title', models.CharField(max_length=100, unique=True, verbose_name='Тема')),
            ],
            options={
                'verbose_name': 'Тема',
                'verbose_name_plural': 'Темы',
            },
        ),
        migrations.CreateModel(
            name='User_acaunt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_acaunt', models.CharField(max_length=100, unique=True, verbose_name='Имя')),
                ('login_acaunt', models.CharField(max_length=100, unique=True, verbose_name='Логин')),
                ('password_acaunt', models.CharField(max_length=100, verbose_name='Пароль')),
                ('admin', models.BooleanField(blank=True, verbose_name='Аминка')),
                ('email', models.CharField(max_length=100, verbose_name='Електрона почта')),
                ('number', models.IntegerField(verbose_name='Номер')),
                ('pub_date', models.DateTimeField(verbose_name='Дата публикации')),
            ],
            options={
                'verbose_name': 'Пользователь',
                'verbose_name_plural': 'Пользователи',
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_text', models.TextField(verbose_name='Комметнтарий')),
                ('articles_like', models.IntegerField(verbose_name='Лайки')),
                ('articles_unlike', models.IntegerField(verbose_name='Дизлайк')),
                ('pub_date', models.DateTimeField(verbose_name='Дата публикации')),
                ('Articles', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='index.articles')),
                ('User_acaunt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='index.user_acaunt')),
            ],
            options={
                'verbose_name': 'Коментарий',
                'verbose_name_plural': 'Коментрии',
            },
        ),
        migrations.AddField(
            model_name='articles',
            name='Temp_Articles',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='index.temp_articles'),
        ),
        migrations.AddField(
            model_name='articles',
            name='User_acaunt',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='index.user_acaunt'),
        ),
    ]
