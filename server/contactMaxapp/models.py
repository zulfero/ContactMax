from django.db import models

class Contact(models.Model):
      def __str__(self):
         return self.firstname + " " + self.lastname

      firstname=models.CharField(max_length=50)
      lastname=models.CharField(max_length=50)
      email=models.EmailField(max_length=200,null=True,blank=True,unique=True)
      phonenumber=models.IntegerField()
      address=models.TextField(null=True,blank=True)
      birthday=models.DateField(null=True,blank=True)






# Create your models here.
