from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return HttpResponse("yolo")


def index(request):
    return render(request,'index.html')



