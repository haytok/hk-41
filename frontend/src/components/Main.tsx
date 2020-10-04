import React from "react";
import styled from "styled-components";

import "../App.css";
import { Menu, Layout, Tag, Avatar, Popover } from "antd";
import "antd/es/menu/style";
import {
  HomeOutlined,
  AppstoreOutlined,
  GithubOutlined,
  GitlabOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { createFromIconfontCN } from "@ant-design/icons";

import Icon from "../static/images/images.jpg";
import "../static/css/main.css";

const { Content, Footer, Header } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

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

interface stateType {
  current: string;
}

interface Props {
  works: worksType;
  skillsContens: skillsContensType;
  researchContens: researchContensType;
}

interface StyledCardProps {
  border?: number;
  textAlign?: string;
}

const Title = styled.table<StyledCardProps>`
  border: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const MainComponent = ({
  works,
  skillsContens,
  researchContens,
}: Props) => {
  const makeHeader = () => {
    return (
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Menu
          // onClick={this.handleClick}
          // selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="about">
            <HomeOutlined />
            <a href="/">About</a>
          </Menu.Item>
          <Menu.Item key="experiences">
            <AppstoreOutlined />
            <a href="/">Experiences</a>
          </Menu.Item>
          <Menu.Item key="works">
            <AppstoreOutlined />
            <a href="/">Works</a>
          </Menu.Item>
          <Menu.Item key="skills">
            <AppstoreOutlined />
            <a href="/">Skills</a>
          </Menu.Item>
          <Menu.Item key="research">
            <AppstoreOutlined />
            <a href="/">Research Keywords</a>
          </Menu.Item>
          <Menu.Item key="programming">
            <AppstoreOutlined />
            <a href="/">Competition Programming</a>
          </Menu.Item>
        </Menu>
      </Header>
    );
  };
  const makeAbout = () => {
    return (
      <Content
        id="about"
        style={{ margin: "24px 16px 0", overflow: "initial" }}
      >
        <h1 style={{ textAlign: "center" }}>About</h1>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Avatar src={Icon} size={128} />
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Title>
            <tr>
              <th align="left">Name</th>
              <td align="left">Kiwata Hayato</td>
            </tr>
            <tr>
              <th align="left">University</th>
              <td align="left">
                <a
                  href="http://www1b.comm.eng.osaka-u.ac.jp/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  大阪大学大学院 M1&nbsp;
                  <IconFont type="icon-tuichu" />
                </a>
              </td>
            </tr>
            <tr>
              <th align="left">
                <TwitterOutlined />
              </th>
              <td align="left">
                <a
                  href="https://twitter.com/bilmnpvovqnmlid"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  bilmnpvovqnmlid &nbsp;
                  <IconFont type="icon-tuichu" />
                </a>
              </td>
            </tr>
            <tr>
              <th align="left">
                <GithubOutlined />
              </th>
              <td align="left">
                <a
                  href="https://github.com/dilmnqvovpnmlib"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  dilmnqvovpnmlib &nbsp;
                  <IconFont type="icon-tuichu" />
                </a>
              </td>
            </tr>
            <tr>
              <th align="left">
                <GitlabOutlined />
              </th>
              <td align="left">
                <a
                  href="https://gitlab.com/dilmnqvovpnmlib"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  dilmnqvovpnmlib &nbsp;
                  <IconFont type="icon-tuichu" />
                </a>
              </td>
            </tr>
          </Title>
        </div>
      </Content>
    );
  };
  const makeExperiences = () => {
    return (
      <Content
        id="experiences"
        style={{ margin: "24px 16px 0", overflow: "initial" }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <h1 style={{ textAlign: "center" }}>Experiences</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="April  2016 - March 2020"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                大阪大学 工学部 電子情報工学科 入学
              </h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="May 2017 - April 2019"
              iconStyle={{
                background: "rgb(233, 30, 99)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                大阪大学 生活協同組合 エンジニア アルバイト
              </h2>
              <p style={{ textAlign: "left" }}>
                TypeScript + Angular, Python + Django Rest Framework を用いて
                <a
                  href="https://www.miraikikin.osaka-u.ac.jp/donation/application"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  大学の寄付システム
                </a>
                の開発に2年間携わっていました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="July 2019"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                <a
                  href="https://icpc.iisf.or.jp/2019-yokohama/first-round-result/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ICPC 国内予選&nbsp;
                </a>
                参加
              </h2>
              <p style={{ textAlign: "left" }}>
                予選参加チーム全体で、495チーム中75位、大学中では7チーム中2位でした。
                チーム名はContrabassでした。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="August 2019"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                いい生活 エンジニア サマーインターン 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                自然言語処理を使って不動産のビッグデータ処理を行いました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="September 2019"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                GMOインターネット Webエンジニアリングコース 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                Webアプリケーションのデプロイ、保守、
                運用、監視、自動化、パフォーマンス測定、脆弱性診断を行いました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="December 2019"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                NECプラットフォームズ 研究開発インターンシップ参加
              </h2>
              <p style={{ textAlign: "left" }}>
                半導体レーザの位相雑音を測定するためにFPGAを用いた自作データ集録装置を開発しました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="October 2019 - present"
              iconStyle={{
                background: "rgb(233, 30, 99)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Artill エンジニア アルバイト
              </h2>
              <p style={{ textAlign: "left" }}>
                React, Redux を用いてアート作品の
                <a
                  href="http://store.artill.jp/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ECサイト
                </a>
                のフロントエンドの開発を行っています。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="September 2019"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                RECRUIT SPEED HACKATHON 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                HOT PEPPER
                Beautyの一部のフロントエンドを高速化するハッカソンに参加しました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="April 2020 -"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                大阪大学大学院 工学研究科 電気電子情報通信工学専攻 入学
              </h2>
              <p style={{ textAlign: "left" }}>
                光ファイバー通信の研究を行っています。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2020"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                日本経済新聞 サマーインターン 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                日経の記事データなど各種 API
                や膨大なアクセスログデータを使ってデータ解析を行いました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2020 ~ September 2020"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Chatwork サマーインターン 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                React + Redux + TypeScript
                を使ったフロントエンドの開発をチームで行いました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="September 2020"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                はてな サマーインターン 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                GO + gRPC + minikube + Docker
                を使ってブログサービスを実装しました。
                <a
                  href="https://dilmnqvo.hatenablog.com/entry/2020/09/11/182152"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  参加記
                </a>
                はこちらからご覧になれます。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="September 2020"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Amazom Web Services サマーインターン 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                Web アプリケーションのトラブルシューティングを行いました。
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="September 2020"
              iconStyle={{
                background: "rgb(16, 204, 82)",
                color: "#fff",
              }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                ハウテレビジョン サマーインターン 参加
              </h2>
              <p style={{ textAlign: "left" }}>
                React + Redux + Golang + Docker を使って
                <a
                  href="https://gaishishukatsu.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  外資就活
                </a>
                の追加機能の開発をチームで行いました。
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </Content>
    );
  };
  const content = (body: any) => (
    <div style={{ textAlign: "center" }}>{body}</div>
  );
  const makeWorks = (item: any) => {
    return (
      <Content
        id={item.key}
        style={{ margin: "24px 16px 0", overflow: "initial" }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <h1 style={{ textAlign: "center" }}>{item.value}</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          {item.data.map((item: any) => (
            <Popover
              content={content(item.body)}
              title={item.title}
              color="processing"
              style={{ textAlign: "center" }}
            >
              <Tag color="processing">
                {item.tagName}&nbsp;
                <IconFont type="icon-tuichu" />
              </Tag>
            </Popover>
          ))}
        </div>
      </Content>
    );
  };
  const makeTagContents = (item: any) => {
    return (
      <Content
        id={item.key}
        style={{ margin: "24px 16px 0", overflow: "initial" }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <h1 style={{ textAlign: "center" }}>{item.value}</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          {item.data.map((item: any) => (
            <Tag color="processing">{item}</Tag>
          ))}
        </div>
      </Content>
    );
  };
  const makeProgramming = () => {
    return (
      <Content
        id="programming"
        style={{ margin: "24px 16px 0", overflow: "initial" }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <h1 style={{ textAlign: "center" }}>Competition Programming</h1>
          <div style={{ textAlign: "center" }}>
            <Tag color="success">
              <a
                href="https://atcoder.jp/users/dilmnqvovpnmlib?lang=ja"
                target="_blank"
                rel="noreferrer noopener"
              >
                AtCoder Rate : 854 &nbsp;
                <IconFont type="icon-tuichu" />
              </a>
            </Tag>
          </div>
        </div>
      </Content>
    );
  };
  const makeFooter = () => {
    return (
      <Footer style={{ textAlign: "center" }}>
        ©2020 Created by dilmnqvovpnmlib
      </Footer>
    );
  };
  return (
    <React.Fragment>
      <Layout>
        {makeHeader()}
        <Layout
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          {makeAbout()}
          {makeExperiences()}
          {makeWorks(works)}
          {makeTagContents(skillsContens)}
          {makeTagContents(researchContens)}
          {makeProgramming()}
          {makeFooter()}
        </Layout>
      </Layout>
    </React.Fragment>
  );
};
