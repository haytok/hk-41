from django.urls import path

from .views import Skills

urlpatterns = [
    path('', Skills.as_view()),
]
