from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    message = models.CharField(max_length=255)
    status= models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'tblcontact'












