from django.http import HttpResponse
from django.views.generic import TemplateView


class Skills(TemplateView):
    def get(self, request, *args, **kwargs):
        return HttpResponse('hello')
