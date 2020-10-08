import React from "react";

import { MainComponent } from "../components/Main";
import {
  getExperiencesAction,
  getWorksAction,
  getSkillsAction,
  getArticlesAction,
  getResearchContentsAction,
} from "../application-actions";
import { useActionDispatch } from "../hooks/use-action-dispatch";
import { useSkillsGetter } from "../stores/skills/skills-query";
import { useExperiencesGetter } from "../stores/experiences/experiences-query";
import { useWorksGetter } from "../stores/works/works-query";
import { useArticlesGetter } from "../stores/articles/articles-query";
import { useResearchContentsGetter } from "../stores/research/research-contents-query";

export const Main = (): JSX.Element => {
  // Get stores
  const experiences = useExperiencesGetter();
  const works = useWorksGetter();
  const skills = useSkillsGetter();
  const articles = useArticlesGetter();
  const researchContens = useResearchContentsGetter();

  // Actions
  const dispatchGetExperiencesAction = useActionDispatch(getExperiencesAction);
  const dispatchGetWorksAction = useActionDispatch(getWorksAction);
  const dispatchGetSkillsAction = useActionDispatch(getSkillsAction);
  const dispatchGetArticlesAction = useActionDispatch(getArticlesAction);
  const dispatchGetResearchContentsAction = useActionDispatch(
    getResearchContentsAction
  );
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
      onGetResearchContentsAction={dispatchGetResearchContentsAction}
    />
  );
};

export default Main;
