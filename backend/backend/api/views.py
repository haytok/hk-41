from django.http import HttpResponse
from django.views.generic import TemplateView

import json

class WorksView(TemplateView):
    def get(self, request, *args, **kwargs):
        work_contens = {
          "key": "works",
          "value": "Works",
          "data": [
            {
              "url": "https://www.miraikikin.osaka-u.ac.jp/donation/application",
              "content": "大阪大学未来基金",
              "title": "大阪大学に寄付をするためのシステム",
              "body": "HTML, CSS, TypeScript, Angular, Python, Django Rest Frameworkで作成",
            },
            {
              "url": "https://www.hk-41.work/",
              "content": "Portfolio",
              "title": "私のポートフォリオ(このページ)",
              "body": "React, Ant Design, EC2, Route53, Elastic IP, Docker, docker-compose で自作",
            },
            {
              "url": "https://dilmnqvovpnmlib.github.io/dilmnqvovpnmlib/",
              "content": "Portfolio",
              "title": "私のポートフォリオ(このページ)",
              "body": "React, Ant Design, GitHub Pagesで作成",
            },
            {
              "url": "https://store.artill.jp/",
              "content": "Artill ECサイト",
              "title": "アート作品を売買するためのECサイト",
              "body": "React, Reduxで作成中",
            },
            {
              "url": "https://baseball-data-park.com/",
              "content": "Baseball Data Park",
              "title": "野球に関する情報情報を集めたサイト",
              "body": "React, Redux, Firebase, Python + Scrapingで作成中",
            },
          ],
        }
        json_work_contens = json.dumps(work_contens, ensure_ascii=False, indent=2)
        return HttpResponse(json_work_contens)

class SkillsVeiw(TemplateView):
    def get(self, request, *args, **kwargs):
        skill_contens = {
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
        json_skill_contens = json.dumps(skill_contens, ensure_ascii=False, indent=2)
        return HttpResponse(json_skill_contens)


class ArticlesView(TemplateView):
    def get(self, request, *args, **kwargs):
        article_contens = {
          "key": "articles",
          "value": "Articles",
          "data": [
            {
              "url": "https://dilmnqvo.hatenablog.com/entry/2020/09/11/182152",
              "content": "はてなインターン2020 に参加してきた",
            },
            {
              "url": "https://qiita.com/HK-41/items/6f9ddf5978359779bb57",
              "content": "RaspberryPiにDockerを使ってNginxでリバースプロキシを動かしてみた"
            },
            {
              "url": "https://qiita.com/HK-41/items/72fd3f4d2b0b05e024c9",
              "content": "Raspberry Pi 3 Model B+にNginxとuWSGIを使ってFlaskを動かしてみた"
            },
          ],
        }
        json_article_contens = json.dumps(article_contens, ensure_ascii=False, indent=2)
        return HttpResponse(json_article_contens)


class ResearchView(TemplateView):
    def get(self, request, *args, **kwargs):
        research_contens = {
          "key": "research",
          "value": "Research Keywords",
          "data": [
            "光ファイバー通信",
            "ディジタル信号処理",
            "半導体レーザ",
            "FPGA",
            "ネットワーク",
          ],
        };
        json_research_contens = json.dumps(research_contens, ensure_ascii=False, indent=2)
        return HttpResponse(json_research_contens)
