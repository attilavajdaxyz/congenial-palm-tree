from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]

# Path: django-project/mysite/polls/urls.py
# Compare this snippet from django-project/mysite/polls/views.py:

# Just look at structure