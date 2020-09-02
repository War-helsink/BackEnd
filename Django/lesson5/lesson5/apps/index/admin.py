from django.contrib import admin
from .models import Articles,Comment,Temp_Articles,User_acaunt

admin.site.register(Temp_Articles)
admin.site.register(Articles)
admin.site.register(Comment)
admin.site.register(User_acaunt)