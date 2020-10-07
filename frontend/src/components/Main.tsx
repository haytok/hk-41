import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import "antd/es/menu/style";
import "../App.css";

import { Experiences } from "../domain/experiences-domain";
import { WorkContents } from "../domain/works-model";
import { SkillContents } from "../domain/skills-model";
import { ArticleContents } from "../domain/articles-model";
import { ResarchContents } from "../domain/research-model";

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
  works: WorkContents;
  skillsContens: SkillContents;
  articles: ArticleContents;
  researchContens: ResarchContents;
  onGetSkillsAction: () => void;
}

export const MainComponent = ({
  experiences,
  works,
  skillsContens,
  articles,
  researchContens,
  onGetSkillsAction,
}: Props) => {
  // hooks
  useEffect(() => {
    onGetSkillsAction();
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
          {TagsElement<SkillContents>(skillsContens)}
          <ArticleElement articles={articles} />
          {TagsElement<ResarchContents>(researchContens)}
          <ProgramminElement />
          <FooterElement />
        </Layout>
      </Layout>
      <BackTopElement />
    </React.Fragment>
  );
};
