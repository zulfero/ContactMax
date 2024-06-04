from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser





class Category(models.Model):
      name=models.CharField(max_length=200)
    

      def __str__(self):
        return self.name


    





class CustomUserManager(BaseUserManager):
      def create_user(self,email,password=None,**extra_fields):
            if not email:
                  raise ValueError("email required")
            email=self.normalize_email(email)
            user=self.model(email=email,**extra_fields)
            user.set_password(password)
            user.save(using=self._db)
            return user  


      
      def create_superuser(self,email,password=None,**extra_fields):
            extra_fields.setdefault("is_staff",True)
            extra_fields.setdefault("is_superuser",True)
            if extra_fields.get("is_staff") is not True:
                  raise ValueError("superuser must set is_staff to true")

            if extra_fields.get("is_superuser") is not True:
                  raise ValueError("superuser must set is_superuser to true")
            return self.create_user(email,password,**extra_fields)  



            
class CustomUser(AbstractBaseUser):    
      firstname=models.CharField(max_length=50)
      lastname=models.CharField(max_length=50)   
      email=models.EmailField(max_length=50 ,unique=True)    
      is_active=models.BooleanField(default=True)

      objects=CustomUserManager
      USERNAME_FIELD="email"  
      REQUIRED_FIELDS=["firstname","lastname"] 
      def __str__(self):
       return self.firstname
        



class Contact(models.Model):
      def __str__(self):
         return self.firstname + " " + self.lastname

      firstname=models.CharField(max_length=50)
      lastname=models.CharField(max_length=50)
      email=models.EmailField(max_length=200,null=True,blank=True,unique=True)
      phonenumber=models.IntegerField()
      address=models.TextField(null=True,blank=True)
      birthday=models.DateField(null=True,blank=True)
      owner=models.ForeignKey(CustomUser,on_delete=models.CASCADE,default=None)
      category=models.ManyToManyField(Category)








class SubscriptionPlan(models.Model):
      name=models.CharField(max_length=200)
      maximumcontacts=models.IntegerField()
    
      def __str__(self):
        return self.name




class UserProfile(models.Model):
      user=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
      subscriptionplan=models.ForeignKey(SubscriptionPlan,on_delete=models.SET_NULL, null=True)

      def __str__(self):
            return f"{self.user.firstname}'s profile"
              














         

# Create your models here.
