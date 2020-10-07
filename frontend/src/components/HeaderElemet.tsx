import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";

const Header = styled(Layout.Header)`
  position: "fixed";
  zindex: 1;
  width: "100%";
`;

interface Props {
  toggle: (e: any) => void;
  current: string;
}

export const HeaderElement = ({ toggle, current }: Props): JSX.Element => {
  return (
    <Header>
      <Menu
        onClick={toggle}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="about">
          <HomeOutlined />
          <a href="#about">About</a>
        </Menu.Item>
        <Menu.Item key="experiences">
          <AppstoreOutlined />
          <a href="#experience">Experiences</a>
        </Menu.Item>
        <Menu.Item key="works">
          <AppstoreOutlined />
          <a href="#works">Works</a>
        </Menu.Item>
        <Menu.Item key="skills">
          <AppstoreOutlined />
          <a href="#skills">Skills</a>
        </Menu.Item>
        <Menu.Item key="articles">
          <AppstoreOutlined />
          <a href="#articles">Articles</a>
        </Menu.Item>
        <Menu.Item key="research">
          <AppstoreOutlined />
          <a href="#research">Research Keywords</a>
        </Menu.Item>
        <Menu.Item key="programming">
          <AppstoreOutlined />
          <a href="#programming">Competition Programming</a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
