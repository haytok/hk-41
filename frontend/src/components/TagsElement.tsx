import React from "react";
import styled from "styled-components";
import { Layout, Tag } from "antd";

import { Skills } from "../domain/skills-model";
import { ResarchContents } from "../domain/research-model";

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

export const TagsElement = <T extends Skills | ResarchContents>(
  tags: T
): JSX.Element => {
  return (
    <Content id={tags.key}>
      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: "center" }}
      >
        <Title>{tags.value}</Title>
      </div>
      <Body>
        {tags.data.map((tag: string) => (
          <Tag color="processing">{tag}</Tag>
        ))}
      </Body>
    </Content>
  );
};
