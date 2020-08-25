from django.contrib.auth.models import User, Group
from rest_framework import serializers
from django.db import models
from django.utils import timezone
import datetime

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    list_filter = ['pub_date']
    search_fields = ['question_text']

    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
    was_published_recently.admin_order_field = 'pub_date'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    publish_date = models.DateTimeField('publish date', default=timezone.now)
    last_modified_date = models.DateTimeField('last modified date', auto_now=True)
    description = models.TextField(blank=True)
    upvotes = models.IntegerField(default=0, blank=True)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title
