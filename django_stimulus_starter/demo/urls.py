from django.urls import path

from . import views

app_name = 'demo'
urlpatterns = [
  # ex. /demo/
  path('', views.index, name='index'),
]
