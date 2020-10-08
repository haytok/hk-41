import React from "react";

import { MainComponent } from "../components/Main";
import { Works } from "../domain/works-model";
import { ResarchContents } from "../domain/research-model";
import { ArticleContents } from "../domain/articles-model";
import { getSkillsAction } from "../application-actions";
import { useActionDispatch } from "../hooks/use-action-dispatch";
import { useSkillsGetter } from "../stores/skills-query";
import { getExperiencesAction } from "../application-actions/experiences-actions";
import { useExperiencesGetter } from "../stores/experiences-query";

export const Main = (): JSX.Element => {
  const works: Works = {
    key: "works",
    value: "Works",
    data: [
      {
        url: "https://www.miraikikin.osaka-u.ac.jp/donation/application",
        content: "大阪大学未来基金",
        title: "大阪大学に寄付をするためのシステム",
        body:
          "HTML, CSS, TypeScript, Angular, Python, Django Rest Frameworkで作成",
      },
      {
        url: "https://www.hk-41.work/",
        content: "Portfolio",
        title: "私のポートフォリオ(このページ)",
        body:
          "React, Ant Design, EC2, Route53, Elastic IP, Docker, docker-compose で自作",
      },
      {
        url: "https://dilmnqvovpnmlib.github.io/dilmnqvovpnmlib/",
        content: "Portfolio",
        title: "私のポートフォリオ(このページ)",
        body: "React, Ant Design, GitHub Pagesで作成",
      },
      {
        url: "https://store.artill.jp/",
        content: "Artill ECサイト",
        title: "アート作品を売買するためのECサイト",
        body: "React, Reduxで作成中",
      },
      {
        url: "https://baseball-data-park.com/",
        content: "Baseball Data Park",
        title: "野球に関する情報情報を集めたサイト",
        body: "React, Redux, Firebase, Python + Scrapingで作成中",
      },
    ],
  };
  const articles: ArticleContents = {
    key: "articles",
    value: "Articles",
    data: [
      {
        url: "https://dilmnqvo.hatenablog.com/entry/2020/09/11/182152",
        content: "はてなインターン2020 に参加してきた",
      },
      {
        url: "https://qiita.com/HK-41/items/6f9ddf5978359779bb57",
        content:
          "RaspberryPiにDockerを使ってNginxでリバースプロキシを動かしてみた",
      },
      {
        url: "https://qiita.com/HK-41/items/72fd3f4d2b0b05e024c9",
        content:
          "Raspberry Pi 3 Model B+にNginxとuWSGIを使ってFlaskを動かしてみた",
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
  // Get stores
  const skills = useSkillsGetter();
  const experiences = useExperiencesGetter();

  // Actions
  const dispatchGetSkillsAction = useActionDispatch(getSkillsAction);
  const dispatchGetExperiencesAction = useActionDispatch(getExperiencesAction);
  return (
    <MainComponent
      experiences={experiences}
      works={works}
      skills={skills}
      articles={articles}
      researchContens={researchContens}
      // Actions
      onGetExperiencesAction={dispatchGetExperiencesAction}
      onGetSkillsAction={dispatchGetSkillsAction}
    />
  );
};

export default Main;
