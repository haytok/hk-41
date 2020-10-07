import React from "react";

import { MainComponent } from "../components/Main";
import { Experience } from "../domain/experiences-domain";
import { WorkContents } from "../domain/works-model";
import { ResarchContents } from "../domain/research-model";
import { ArticleContents } from "../domain/articles-model";
import { getSkillsAction } from "../application-actions";
import { useActionDispatch } from "../hooks/use-action-dispatch";
import { useSkillsGetter } from "../stores/skills-query";

export const Main = (): JSX.Element => {
  const experiences: Array<Experience> = [
    {
      key: "bachelor",
      date: "April  2016 - March 2020",
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      title: "大阪大学 工学部 電子情報工学科 入学",
    },
    {
      key: "coop",
      date: "May 2017 - April 2019",
      title: "大阪大学 生活協同組合 エンジニア アルバイト",
      body: (
        <>
          TypeScript + Angular, Python + Django Rest Framework を用いて
          <a
            href="https://www.miraikikin.osaka-u.ac.jp/donation/application"
            target="_blank"
            rel="noreferrer noopener"
          >
            大学の寄付システム
          </a>
          の開発に2年間携わっていました。
        </>
      ),
    },
    {
      key: "icpc",
      date: "July 2019",
      title: (
        <>
          <a
            href="https://icpc.iisf.or.jp/2019-yokohama/first-round-result/"
            target="_blank"
            rel="noreferrer noopener"
          >
            ICPC 国内予選&nbsp;
          </a>
          参加
        </>
      ),
      body:
        "予選参加チーム全体で、495チーム中75位、大学中では7チーム中2位でした。チーム名はContrabassでした。",
    },
    {
      key: "eseikatsu",
      date: "August 2019",
      title: "いい生活 エンジニア サマーインターン 参加",
      body: "自然言語処理を使って不動産のビッグデータ処理を行いました。",
    },
    {
      key: "gmo",
      date: "September 2019",
      title:
        "GMOインターネット サマーインターン Webエンジニアリングコース 参加",
      body:
        "Webアプリケーションのデプロイ、保守、運用、監視、自動化、パフォーマンス測定、脆弱性診断を行いました。",
    },
    {
      key: "necp",
      date: "December 2019",
      title: "NECプラットフォームズ 研究開発インターン参加",
      body:
        "半導体レーザの位相雑音を測定するためにFPGAを用いた自作データ集録装置を開発しました。",
    },
    {
      key: "artill",
      date: "October 2019 - present",
      title: "Artill エンジニア アルバイト",
      body: (
        <>
          React, Redux を用いてアート作品の
          <a
            href="http://store.artill.jp/"
            target="_blank"
            rel="noreferrer noopener"
          >
            ECサイト
          </a>
          のフロントエンドの開発を行っています。
        </>
      ),
    },
    {
      key: "recruit",
      date: "September 2020",
      title: "RECRUIT SPEED HACKATHON 参加",
      body:
        "HOT PEPPER Beautyの一部のフロントエンドを高速化するハッカソンに参加しました。",
    },
    {
      key: "master",
      date: "April 2020 -",
      title: "大阪大学大学院 工学研究科 電気電子情報通信工学専攻 入学",
      body: "光ファイバー通信の研究を行っています。",
    },
    {
      key: "nikkei",
      date: "August 2020",
      title: "日本経済新聞 サマーインターン 参加",
      body:
        "日経の記事データなど各種 API や膨大なアクセスログデータを使ってデータ解析を行いました",
    },
    {
      key: "chatwork",
      date: "August 2020 ~ September 2020",
      title: "Chatwork サマーインターン 参加",
      body:
        "React + Redux + TypeScript を使ったフロントエンドの開発をチームで行いました。",
    },
    {
      key: "hatena",
      date: "September 2020",
      title: "はてな サマーインターン 参加",
      body: (
        <>
          GO + gRPC + minikube + Docker を使ってブログサービスを実装しました。
          <a
            href="https://dilmnqvo.hatenablog.com/entry/2020/09/11/182152"
            target="_blank"
            rel="noreferrer noopener"
          >
            参加記
          </a>
          はこちらからご覧になれます。
        </>
      ),
    },
    {
      key: "aws",
      date: "September 2020",
      title: "Amazom Web Services サマーインターン 参加",
      body: "Web アプリケーションのトラブルシューティングを行いました。",
    },
    {
      key: "howtelevision",
      date: "September 2020",
      title: "ハウテレビジョン サマーインターン 参加",
      body: (
        <>
          React + Redux + Golang + Docker を使って
          <a
            href="https://gaishishukatsu.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            外資就活
          </a>
          の追加機能の開発をチームで行いました。
        </>
      ),
    },
  ];
  const works: WorkContents = {
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
  // hooks
  const skillsContens = useSkillsGetter();
  const dispatchGetSkillsAction = useActionDispatch(getSkillsAction);
  return (
    <MainComponent
      experiences={experiences}
      works={works}
      skillsContens={skillsContens}
      articles={articles}
      researchContens={researchContens}
      // hooks
      onGetSkillsAction={dispatchGetSkillsAction}
    />
  );
};

export default Main;
