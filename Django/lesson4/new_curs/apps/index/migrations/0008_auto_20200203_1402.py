# Generated by Django 2.2.4 on 2020-02-03 14:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0007_auto_20200203_1357'),
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
    ]