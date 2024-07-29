from rest_framework import serializers
from .models import Contact,UserProfile,SubscriptionPlan,Category,CustomUser

class ContactSerializer(serializers.ModelSerializer):
   category=serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), many=True)


   class Meta:
      model=Contact
      fields=("id","firstname","lastname","email","phonenumber","address","birthday","category","owner")    



class CategorySerializer(serializers.ModelSerializer):
   class Meta:
      model=Category
      fields=("id","name")   


class   SubscriptionPlanSerializer(serializers.ModelSerializer):
   class Meta:
       model=SubscriptionPlan
       fields=("id","name","maximumcontacts")



class UserProfileSerializer(serializers.ModelSerializer):
   class Meta:
      model=UserProfile
      fields=("id","subscriptionplan","user")


class UserRegistrationSerializer(serializers.ModelSerializer):

   class Meta:
      model=CustomUser
      fields=("id","firstname","lastname","email","password")
      extra_fields={"password":{"write_only":True}}

   def create(self,validated_data):
      password=validated_data.pop("password")
      user=self.Meta.model(**validated_data)
      user.set_password(password)
      user.save()
      return user



class UsserLoginSerializer(serializers.Serializer):
   email=serializers.EmailField()
   password=serializers.CharField()





  
          