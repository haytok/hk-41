import React from "react";

import { MainComponent } from "../components/Main";
import { ResarchContents } from "../domain/research-model";
import { ArticleContents } from "../domain/articles-model";
import {
  getExperiencesAction,
  getWorksAction,
  getSkillsAction,
} from "../application-actions";
import { useActionDispatch } from "../hooks/use-action-dispatch";
import { useSkillsGetter } from "../stores/skills-query";
import { useExperiencesGetter } from "../stores/experiences-query";
import { useWorksGetter } from "../stores/works/works-query";

export const Main = (): JSX.Element => {
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
  const experiences = useExperiencesGetter();
  const works = useWorksGetter();
  const skills = useSkillsGetter();

  // Actions
  const dispatchGetExperiencesAction = useActionDispatch(getExperiencesAction);
  const dispatchGetWorksAction = useActionDispatch(getWorksAction);
  const dispatchGetSkillsAction = useActionDispatch(getSkillsAction);
  return (
    <MainComponent
      experiences={experiences}
      works={works}
      skills={skills}
      articles={articles}
      researchContens={researchContens}
      // Actions
      onGetExperiencesAction={dispatchGetExperiencesAction}
      onGetWorksAction={dispatchGetWorksAction}
      onGetSkillsAction={dispatchGetSkillsAction}
    />
  );
};

export default Main;
