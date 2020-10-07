import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const Footer = styled(Layout.Footer)`
  text-align: center;
`;

export const FooterElement = (): JSX.Element => {
  return <Footer>©2020 Created by dilmnqvovpnmlib</Footer>;
};
