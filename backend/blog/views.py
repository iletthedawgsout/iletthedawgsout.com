from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all().order_by('-publish_date')
    serializer_class = PostSerializer
