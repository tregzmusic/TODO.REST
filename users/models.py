from django.db import models


# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=128)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.CharField(
        ("email address"),
        max_length=256,
        unique=True,
        error_messages={
            "unique": ("A user with that email address already exists."),
        },
    )


    def __str__(self):
        return f'{self.last_name} - {self.first_name}'