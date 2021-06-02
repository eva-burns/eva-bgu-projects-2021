from rest_framework import serializers
from .models import Winner

class WinnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Winner
        fields = ('id', 'name')