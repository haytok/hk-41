import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
import { SiPython, SiHatenabookmark, SiAmazonaws } from "react-icons/si";
import { BsNewspaper, BsChat } from "react-icons/bs";
import { MdWebAsset, MdComputer } from "react-icons/md";
import { FaDonate, FaServer, FaShoppingCart } from "react-icons/fa";

import { Experience, Experiences } from "../domain/experiences-domain";
import {
  BACHELOR,
  MASTER,
  COOP,
  ARTILL,
  ICPC,
  ESEIKATSU,
  GMO,
  NECP,
  RECRUIT,
  NIKKEI,
  CHATWORK,
  HATENA,
  AWS,
  HOWTELEVISION,
} from "../constants/experience-names";

const Content = styled(Layout.Content)`
  margin: "24px 16px 0";
  overflow: "initial";
`;

const Title = styled.h1`
  text-align: center;
`;

const getIconColor = (key: string): any => {
  switch (key) {
    case BACHELOR:
    case MASTER:
      return { background: "rgb(33, 150, 243)", color: "#fff" };
    case COOP:
    case ARTILL:
      return { background: "rgb(233, 30, 99)", color: "#fff" };
    case ICPC:
    case ESEIKATSU:
    case GMO:
    case NECP:
    case RECRUIT:
    case NIKKEI:
    case CHATWORK:
    case HATENA:
    case AWS:
    case HOWTELEVISION:
      return { background: "rgb(16, 204, 82)", color: "#fff" };
    default:
      return { background: "rgb(33, 150, 243)", color: "#fff" };
  }
};

const getIcon = (key: string): JSX.Element => {
  switch (key) {
    case "bachelor":
    case MASTER:
      return <IoMdSchool />;
    case COOP:
      return <FaDonate />;
    case ICPC:
      return <SiPython />;
    case ESEIKATSU:
    case RECRUIT:
    case HOWTELEVISION:
      return <MdWebAsset />;
    case GMO:
      return <FaServer />;
    case NECP:
      return <MdComputer />;
    case ARTILL:
      return <FaShoppingCart />;
    case NIKKEI:
      return <BsNewspaper />;
    case CHATWORK:
      return <BsChat />;
    case HATENA:
      return <SiHatenabookmark />;
    case AWS:
      return <SiAmazonaws />;
    default:
      return <></>;
  }
};

interface TimelineElementProps {
  experience: Experience;
}

interface Props {
  experiences: Experiences;
}

const TimelineElement = ({ experience }: TimelineElementProps): JSX.Element => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      key={experience.key}
      date={experience.date}
      iconStyle={getIconColor(experience.key)}
      icon={getIcon(experience.key)}
    >
      <h2
        className="vertical-timeline-element-title"
        style={{ textAlign: "left" }}
      >
        {experience.title}
      </h2>
      {experience.body && (
        <p style={{ textAlign: "left" }}>{experience.body}</p>
      )}
    </VerticalTimelineElement>
  );
};

export const ExperiencesElement = ({ experiences }: Props): JSX.Element => {
  return (
    <Content
      id={experiences.key}
      style={{ margin: "24px 16px 0", overflow: "initial" }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: "center" }}
      >
        <Title>{experiences.value}</Title>
        <VerticalTimeline>
          {experiences.data.map((experience: Experience) => (
            <TimelineElement experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Content>
  );
};
