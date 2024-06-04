from django.urls import path
from . import views



urlpatterns=[
    path('index',views.index, name="index"),
    path('contact/',views.ContactView.as_view(),name='contact'),
    path('category/',views.CategoryView.as_view(),name='category'),
    path('subscriptionplan/',views.SubscriptionPlanView.as_view(),name='subscription'),
    path('userprofile/',views.UserProfileView.as_view(),name='userprofile'),
    path('userregistration/',views.UserRegistrationView.as_view(),name='userregistration'),
    path('login/',views.UserLoginView.as_view(),name='login'),


    




]