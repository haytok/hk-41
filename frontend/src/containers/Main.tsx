import React from "react";

import { WorkContents } from "../domain/works-model";
import { SkillContents } from "../domain/skills-model";
import { ResarchContents } from "../domain/research-model";
import { ArticleContents } from "../domain/articles-model";
import { MainComponent } from "../components/Main";

export const Main = () => {
  const makeATag = (link: string, body: string): JSX.Element => (
    <a href={link} target="_blank" rel="noreferrer noopener">
      {body}
    </a>
  );
  const works: WorkContents = {
    key: "works",
    value: "Works",
    data: [
      {
        tagName: makeATag(
          "https://www.miraikikin.osaka-u.ac.jp/donation/application",
          "大阪大学未来基金"
        ),
        title: "大阪大学に寄付をするためのシステム",
        body:
          "HTML, CSS, TypeScript, Angular, Python, Django Rest Frameworkで作成",
      },
      {
        tagName: makeATag("https://www.hk-41.work/", "Portfolio"),
        title: "私のポートフォリオ(このページ)",
        body:
          "React, Ant Design, EC2, Route53, Elastic IP, Docker, docker-compose で自作",
      },
      {
        tagName: makeATag(
          "https://dilmnqvovpnmlib.github.io/dilmnqvovpnmlib/",
          "Portfolio"
        ),
        title: "私のポートフォリオ(このページ)",
        body: "React, Ant Design, GitHub Pagesで作成",
      },
      {
        tagName: makeATag("https://store.artill.jp/", "Artill ECサイト"),
        title: "アート作品を売買するためのECサイト",
        body: "React, Reduxで作成中",
      },
      {
        tagName: makeATag(
          "https://baseball-data-park.com/",
          "Baseball Data Park"
        ),
        title: "野球に関する情報情報を集めたサイト",
        body: "React, Redux, Firebase, Python + Scrapingで作成中",
      },
    ],
  };
  const skillsContens: SkillContents = {
    key: "skills",
    value: "Skills",
    data: [
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
  };
  const articles: ArticleContents = {
    key: "articles",
    value: "Articles",
    data: [
      {
        tagName: makeATag(
          "https://dilmnqvo.hatenablog.com/entry/2020/09/11/182152",
          "はてなインターン2020 に参加してきた"
        ),
      },
      {
        tagName: makeATag(
          "https://qiita.com/HK-41/items/6f9ddf5978359779bb57",
          "RaspberryPiにDockerを使ってNginxでリバースプロキシを動かしてみた"
        ),
      },
      {
        tagName: makeATag(
          "https://qiita.com/HK-41/items/72fd3f4d2b0b05e024c9",
          "Raspberry Pi 3 Model B+にNginxとuWSGIを使ってFlaskを動かしてみた"
        ),
      },
    ],
  };
  const researchContens: ResarchContents = {
    key: "research",
    value: "Research Keywords",
    data: [
      "光ファイバー通信",
      "ディジタル信号処理",
      "半導体レーザ",
      "FPGA",
      "ネットワーク",
    ],
  };
  return (
    <MainComponent
      works={works}
      skillsContens={skillsContens}
      articles={articles}
      researchContens={researchContens}
    />
  );
};

export default Main;
