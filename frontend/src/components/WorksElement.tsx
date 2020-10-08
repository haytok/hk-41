import React from "react";
import styled from "styled-components";
import { Layout, Tag, Popover } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

import { Work, Works } from "../domain/works-model";
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

const content = (body: string) => (
  <div style={{ textAlign: "center" }}>{body}</div>
);

interface Props {
  works: Works;
}

export const WorksElement = ({ works }: Props): JSX.Element => {
  return (
    <Content id={works.key}>
      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: "center" }}
      >
        <Title>{works.value}</Title>
      </div>
      <Body>
        {works.data.map((work: Work) => (
          <Popover
            content={content(work.body)}
            title={work.title}
            color="processing"
            style={{ textAlign: "center" }}
          >
            <Tag color="processing">
              {makeATag(work.url, work.content)}&nbsp;
              <IconFont type="icon-tuichu" />
            </Tag>
          </Popover>
        ))}
      </Body>
    </Content>
  );
};
