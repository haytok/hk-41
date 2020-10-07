import React from "react";
import styled from "styled-components";
import { Layout, Tag } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

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

export const ProgramminElement = (): JSX.Element => {
  return (
    <Content id="programming">
      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: "center" }}
      >
        <Title>Competition Programming</Title>
        <Body>
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
        </Body>
      </div>
    </Content>
  );
};
