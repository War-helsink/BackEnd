from django.contrib import admin
from .models import Articles, User, Comment


admin.site.register(Articles)
admin.site.register(User)
admin.site.register(Comment)