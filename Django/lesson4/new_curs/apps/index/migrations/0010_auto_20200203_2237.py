# Generated by Django 2.2.4 on 2020-02-03 22:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0009_auto_20200203_1429'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='Articles',
        ),
        migrations.DeleteModel(
            name='Articles',
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.DeleteModel(
            name='Temp_Articles',
        ),
        migrations.DeleteModel(
            name='User_acaunt',
        ),
    ]
