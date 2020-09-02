from django.contrib import admin

from .models import Hello, User_password, Comment

admin.site.register(Hello)
admin.site.register(User_password)
admin.site.register(Comment)
