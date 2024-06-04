from django.contrib import admin
from .models import Contact
from .models import CustomUser
from .models import Category
from .models import SubscriptionPlan
from .models import UserProfile

admin.site.register(Contact)
admin.site.register(CustomUser)
admin.site.register(Category)
admin.site.register(SubscriptionPlan)
admin.site.register(UserProfile)

# Register your models here.
