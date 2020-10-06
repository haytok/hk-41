from django.http import HttpResponse
from django.views.generic import TemplateView

import json

class Skills(TemplateView):
    def get(self, request, *args, **kwargs):
        skills_contens = {
            "key": "skills",
            "value": "Skills",
            "data": [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Python",
            "React",
            "Vue",
            "Angular",
            "Django Rest Framework",
            "Git",
            "Docker",
            ],
        }
        json_skills_contens = json.dumps(skills_contens, ensure_ascii=False, indent=2)
        return HttpResponse(json_skills_contens)
