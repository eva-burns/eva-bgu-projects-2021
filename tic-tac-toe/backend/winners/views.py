from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WinnerSerializer
from .models import Winner

# Create your views here.

class WinnerView(viewsets.ModelViewSet):
    serializer_class = WinnerSerializer
    queryset = Winner.objects.all()