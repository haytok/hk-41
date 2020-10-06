from django.urls import path

from .views import WorksView, SkillsVeiw, ArticlesView, ResearchView

urlpatterns = [
    path('works/', WorksView.as_view()),
    path('skills/', SkillsVeiw.as_view()),
    path('articles/', ArticlesView.as_view()),
    path('research/', ResearchView.as_view()),
]
