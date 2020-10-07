import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

interface StyledCardProps {
  border?: number;
  textAlign?: string;
}

const BackTopContent = styled.div<StyledCardProps>`
  height: 40px;
  width: 40px;
  lineheight: 40px;
  border-radius: 50%;
  background-color: white;
  color: #1890ff;
  text-align: center;
  font-size: 24px;
  border-color: #1890ff;
`;

export const BackTopElement = (): JSX.Element => {
  return (
    <BackTop>
      <BackTopContent>
        <VerticalAlignTopOutlined />
      </BackTopContent>
    </BackTop>
  );
};
