from django.db import models

import datetime

from django.db import models
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(max_length=255)
    publish_date = models.DateTimeField('date published', default=timezone.now)
    visible = models.BooleanField(default=False)
    # image = models.ImageField()
    content = models.TextField(blank=True)
    last_edited = models.DateTimeField(auto_now=True)
    upvotes = models.IntegerField(blank=True, default=0)

    def __str__(self):
        return self.title


