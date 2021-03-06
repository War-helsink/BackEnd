# Generated by Django 2.2.4 on 2020-02-02 13:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('index', '0004_auto_20200202_1336'),
    ]

    operations = [
        migrations.CreateModel(
            name='Articles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('articeles_title', models.CharField(max_length=100, verbose_name='Заголовок')),
                ('articles_name_autor', models.CharField(max_length=100, verbose_name='Автор')),
                ('articles_text', models.TextField(verbose_name='Текст')),
                ('articles_int', models.IntegerField(verbose_name='Просмотри')),
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
                ('name_title', models.CharField(max_length=100, verbose_name='Тема')),
            ],
            options={
                'verbose_name': 'Тема',
                'verbose_name_plural': 'Темы',
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_name', models.CharField(max_length=50, verbose_name='Имя автора коментария')),
                ('comment_text', models.TextField(verbose_name='Комметнтарий')),
                ('Articles', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='index.Articles')),
            ],
            options={
                'verbose_name': 'Коментарий',
                'verbose_name_plural': 'Коментрии',
            },
        ),
        migrations.AddField(
            model_name='articles',
            name='Temp_Articles',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='index.Temp_Articles'),
        ),
    ]
