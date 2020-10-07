import React from "react";
import styled from "styled-components";
import { Layout, Avatar } from "antd";
import {
  createFromIconfontCN,
  GithubOutlined,
  GitlabOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import Icon from "../static/images/images.jpg";

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

const Table = styled.table`
  border: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutElement = (): JSX.Element => {
  return (
    <Content id="about">
      <Title>About</Title>
      <Body>
        <Avatar src={Icon} size={128} />
      </Body>
      <Body>
        <Table>
          <tr>
            <th align="left">Name</th>
            <td align="left">Hayato Kiwata</td>
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
        </Table>
      </Body>
    </Content>
  );
};
