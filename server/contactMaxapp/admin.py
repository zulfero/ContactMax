from django.contrib import admin
from .models import Contact
from .models import CustomUser
from .models import Category
from .models import SubscriptionPlan

admin.site.register(Contact)
admin.site.register(CustomUser)
admin.site.register(Category)
admin.site.register(SubscriptionPlan)

# Register your models here.
