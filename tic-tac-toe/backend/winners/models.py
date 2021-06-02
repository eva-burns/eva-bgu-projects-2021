from django.db import models

# Create your models here.

class Winner(models.Model):
    name = models.CharField(max_length=5)

    def _str_(self):
        return self.name