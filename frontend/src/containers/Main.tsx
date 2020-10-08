import React from "react";

import { MainComponent } from "../components/Main";
import { ResarchContents } from "../domain/research-model";
import {
  getExperiencesAction,
  getWorksAction,
  getSkillsAction,
  getArticlesAction,
} from "../application-actions";
import { useActionDispatch } from "../hooks/use-action-dispatch";
import { useSkillsGetter } from "../stores/skills/skills-query";
import { useExperiencesGetter } from "../stores/experiences/experiences-query";
import { useWorksGetter } from "../stores/works/works-query";
import { useArticlesGetter } from "../stores/articles/articles-query";

export const Main = (): JSX.Element => {
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
  const articles = useArticlesGetter();

  // Actions
  const dispatchGetExperiencesAction = useActionDispatch(getExperiencesAction);
  const dispatchGetWorksAction = useActionDispatch(getWorksAction);
  const dispatchGetSkillsAction = useActionDispatch(getSkillsAction);
  const dispatchGetArticlesAction = useActionDispatch(getArticlesAction);
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
      onGetArticlesAction={dispatchGetArticlesAction}
    />
  );
};

export default Main;
