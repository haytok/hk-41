import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import "antd/es/menu/style";
import "../App.css";

import { Experiences } from "../domain/experiences-domain";
import { Works } from "../domain/works-model";
import { Skills } from "../domain/skills-model";
import { Articles } from "../domain/articles-model";
import { ResearchContents } from "../domain/research-model";

import { HeaderElement } from "../components/HeaderElemet";
import { AboutElement } from "../components/AboutElement";
import { ExperiencesElement } from "../components/ExperiencesElement";
import { WorksElement } from "../components/WorksElement";
import { ProgramminElement } from "./ProgramminElement";
import { FooterElement } from "./FooterElement";
import { BackTopElement } from "../components/BackTopElement";
import { ArticleElement } from "./ArticlesElement";
import { TagsElement } from "./TagsElement";
import "../static/css/main.css";

interface Props {
  experiences: Experiences;
  works: Works;
  skills: Skills;
  articles: Articles;
  researchContens: ResearchContents;
  // Actions
  onGetExperiencesAction: () => void;
  onGetWorksAction: () => void;
  onGetSkillsAction: () => void;
  onGetArticlesAction: () => void;
  onGetResearchContentsAction: () => void;
}

export const MainComponent = ({
  experiences,
  works,
  skills,
  articles,
  researchContens,
  // Actions
  onGetExperiencesAction,
  onGetWorksAction,
  onGetSkillsAction,
  onGetArticlesAction,
  onGetResearchContentsAction,
}: Props) => {
  // hooks
  useEffect(() => {
    onGetExperiencesAction();
    onGetWorksAction();
    onGetSkillsAction();
    onGetArticlesAction();
    onGetResearchContentsAction();
    // eslint-disable-next-line
  }, []);

  const [current, handleClick] = useState("about");
  const toggle = (e: any): void => {
    handleClick(e.key);
    const element: any = document.getElementById(e.key);
    const rect = element.getBoundingClientRect();
    const elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop - 75;
  };

  return (
    <React.Fragment>
      <Layout>
        <HeaderElement toggle={toggle} current={current} />
        <Layout
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <AboutElement />
          <ExperiencesElement experiences={experiences} />
          <WorksElement works={works} />
          {TagsElement<Skills>(skills)}
          <ArticleElement articles={articles} />
          {TagsElement<ResearchContents>(researchContens)}
          <ProgramminElement />
          <FooterElement />
        </Layout>
      </Layout>
      <BackTopElement />
    </React.Fragment>
  );
};
