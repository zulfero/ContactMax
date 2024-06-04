from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact,Category,UserProfile,SubscriptionPlan,CustomUser
from .serializers import ContactSerializer,SubscriptionPlanSerializer,UserProfileSerializer,CategorySerializer,UserRegistrationSerializer,UsserLoginSerializer


# Create your views here.

def index(request):
    return HttpResponse("yolo")

class ContactView(APIView):
    def get(self,request,format=None):
        all_contacts=Contact.objects.all()
        serializer=ContactSerializer(all_contacts,many=True)
        return Response(serializer.data)


class CategoryView(APIView):
    def get(self,request,format=None):
        all_categories=Category.objects.all()
        serializer=CategorySerializer(all_categories,many=True)
        return Response(serializer.data)  


class SubscriptionPlanView(APIView):
    def get(self,request,format=None):
        all_subscriptionplans=SubscriptionPlan.objects.all()
        serializer=SubscriptionPlanSerializer(all_subscriptionplans,many=True)
        return Response(serializer.data)


class UserProfileView(APIView):
    def get(self,request,format=None):
        all_userprofiles=UserProfile.objects.all()
        serializer=UserProfileSerializer(all_userprofiles,many=True)
        return Response(serializer.data) 




class UserRegistrationView(APIView):
    def post(self,request,format=None):
        serializer=UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)

        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  



class UserLoginView(APIView):
    def post(self,request,format=None):
        serializer=UsserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data.get("email")
            print(email)
            password =serializer.validated_data.get("password")
            print(password)
            try:
                user=CustomUser.objects.get(email=email)
                print(user)
            except CustomUser.DoesNotExist:
                user=None
            if user is not None:
                if check_password(password,user.password):
                    login(request,user)
                    return Response({"message":"login Successful"},status=status.HTTP_200_OK)
                else:
                    return Response({"message":"incorrect password"},status=status.HTTP_401_ANAUTHORIZED)   
            else:
                return Response({"message":"No user with this email address"},status=status.HTTP_400_BAD_REQUEST)    

        else:
          return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)                    
   


      
