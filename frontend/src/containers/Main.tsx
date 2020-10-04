import React from "react";

import { MainComponent } from "../components/Main";

interface worksDataType {
  tagName: JSX.Element;
  title: string;
  body: string;
}

interface worksType {
  key: string;
  value: string;
  data: Array<worksDataType>;
}

interface skillsContensType {
  key: string;
  value: string;
  data: Array<string>;
}

interface researchContensType {
  key: string;
  value: string;
  data: Array<string>;
}

class Main extends React.Component {
  makeATag = (link: string, body: string): JSX.Element => (
    <a href={link} target="_blank" rel="noreferrer noopener">
      {body}
    </a>
  );
  render() {
    const works: worksType = {
      key: "works",
      value: "Works",
      data: [
        {
          tagName: this.makeATag(
            "https://www.miraikikin.osaka-u.ac.jp/donation/application",
            "大阪大学未来基金"
          ),
          title: "大阪大学に寄付をするためのシステム",
          body:
            "HTML, CSS, TypeScript, Angular, Python, Django Rest Frameworkで作成",
        },
        {
          tagName: this.makeATag("https://www.hk-41.work/", "Portfolio"),
          title: "私のポートフォリオ(このページ)",
          body:
            "React, Ant Design, EC2, Route53, Elastic IP, Docker, docker-compose で自作",
        },
        {
          tagName: this.makeATag(
            "https://dilmnqvovpnmlib.github.io/dilmnqvovpnmlib/",
            "Portfolio"
          ),
          title: "私のポートフォリオ(このページ)",
          body: "React, Ant Design, GitHub Pagesで作成",
        },
        {
          tagName: this.makeATag("https://store.artill.jp/", "Artill ECサイト"),
          title: "アート作品を売買するためのECサイト",
          body: "React, Reduxで作成中",
        },
        {
          tagName: this.makeATag(
            "https://baseball-data-park.com/",
            "Baseball Data Park"
          ),
          title: "野球に関する情報情報を集めたサイト",
          body: "React, Redux, Firebase, Python + Scrapingで作成中",
        },
      ],
    };
    const skillsContens: skillsContensType = {
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
    const researchContens: researchContensType = {
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
        researchContens={researchContens}
      />
    );
  }
}

export default Main;
