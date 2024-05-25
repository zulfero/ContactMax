from django.db import models

class Contact(models.model):
    firstname=models.CharField(max_length=50),
    lastname=models.CharField(max_length=50),
    email=models.EmailField(max_length=200,null=True,blank=True,unique=True),
    phonenumber=models.IntegerField(),
    address=models.TextField(null=True,blank=True),
    birthdate=models.DateField(null=True,blank=True)

# Create your models here.
