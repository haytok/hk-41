import React from "react";
import styled from "styled-components";
import { Layout, Tag } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

import { ArticleContents, ArticleData } from "../domain/articles-model";
import { makeATag } from "../utils/make-a-tag";

const Content = styled(Layout.Content)`
  margin: "24px 16px 0";
  overflow: "initial";
`;

const Title = styled.h1`
  text-align: center;
`;

const Body = styled.div`
  text-align: center;
`;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

interface Props {
  articles: ArticleContents;
}

export const ArticleElement = ({ articles }: Props): JSX.Element => {
  return (
    <Content id={articles.key}>
      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: "center" }}
      >
        <Title>{articles.value}</Title>
      </div>
      <Body>
        {articles.data.map((article: ArticleData) => (
          <Tag color="processing">
            {makeATag(article.url, article.content)}&nbsp;
            <IconFont type="icon-tuichu" />
          </Tag>
        ))}
      </Body>
    </Content>
  );
};
