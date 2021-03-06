# Generated by Django 2.2.4 on 2020-01-22 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.CharField(max_length=40, verbose_name='Логин')),
                ('password', models.CharField(max_length=40, verbose_name='Пароль')),
                ('phone', models.CharField(max_length=20, verbose_name='Номер')),
                ('email', models.CharField(max_length=20, verbose_name='Електрона почта')),
                ('text', models.TextField(verbose_name='Кратко о себе')),
            ],
            options={
                'verbose_name': 'Пользователь',
                'verbose_name_plural': 'Пользователи',
            },
        ),
    ]
