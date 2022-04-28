import * as React from "react";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Tooltip from "@mui/material/Tooltip";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./timeline.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
/* --------------------------------Hover */

import styled, { ThemeProvider } from "styled-components";
import NoSsr from "@mui/material/NoSsr";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

/* --------Post-------------- */
import Post from "../Post/Post";
const customTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

export default function TimeLine() {
  const [isHovering, setIsHovering] = useState(false);
  const [curHover, setCurHover] = useState("");
  /*   const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  }; */

  return (
    <div
      className="timeLineContainer"
      id="timeline"
      style={{ position: "relative", marginTop: "150px" }}
    >
      <div
        className="developer"
        id="skillText"
        style={{
          position: "absolute",
          top: "-100px",
          left: "0",
          fontSize: "2.5rem",
          width: "100%",
          fontStyle: "italic",
        }}
      >
        Journey
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Tooltip title="Go to Github Repository">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://semuona.github.io/gridlayout/"
              >
                {" "}
                <GitHubIcon />
              </a>
            </Tooltip>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("grid")}
            onMouseOut={() => setCurHover("")}
          >
            <Tooltip title="Preview" placement="top">
              <TimelineDot />
            </Tooltip>
            {/*   <NoSsr>
              <MuiThemeProvider theme={customTheme}>
                <ThemeProvider theme={customTheme}>
                  <StyledAvatar>Grid</StyledAvatar>
                </ThemeProvider>
              </MuiThemeProvider>
            </NoSsr> */}

            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent> 07/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://semuona.github.io/lego/"
            >
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("lego")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> 07/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {" "}
          <div>
            <TimelineOppositeContent color="text.secondary">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://semuona.github.io/bootstrap/"
              >
                {" "}
                <GitHubIcon />
              </a>
            </TimelineOppositeContent>
          </div>
          <TimelineSeparator
            onMouseOver={() => setCurHover("bootstrap")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>08/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://semuona.github.io/animation/"
            >
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("animation")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>09/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://semuona.github.io/animated-portfolio/"
            >
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("portfolio")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>10/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://semuona.github.io/table/"
            >
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("table")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>11/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://semuona.github.io/layout/"
            >
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("layout")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>12/2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://semuona.github.io/hungryMe/"
            >
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("bulls")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>01/2022</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://semuona.github.io/Bulls-Cows/main.html"
            >
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("hungryMe")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>02/2022</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a rel="noreferrer" target="_blank" href="https://www.google.com/">
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("lego")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>03/2022</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a rel="noreferrer" target="_blank" href="https://www.google.com/">
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("lego")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>04/2022</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <a rel="noreferrer" target="_blank" href="https://www.google.com/">
              {" "}
              <GitHubIcon />
            </a>
          </TimelineOppositeContent>
          <TimelineSeparator
            onMouseOver={() => setCurHover("lego")}
            onMouseOut={() => setCurHover("")}
          >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>05/2022</TimelineContent>
        </TimelineItem>
      </Timeline>
      <div style={{ width: "100%" }} className="right">
        {" "}
        {/*  {isHovering && <Post  />} */}
        {curHover && <Post curHover={curHover} />}
      </div>
    </div>
  );
}
