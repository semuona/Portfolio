import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./post.scss";
/* -------Images------------ */
import Cow from "../images/BullsShot.png";
import Grid from "../images/grid.png";
import Bootstrap from "../images/bootstrap.png";
import Lego from "../images/lego.png";
import Animation from "../images/animation.png";
import Portfolio from "../images/portfolio.png";
import Table from "../images/table.png";
import Layout from "../images/layout.png";
import HungryMe from "../images/hungryme.png";

export default function Post({ curHover }) {
  const [currCard, setCurrCard] = useState({});
  const [left, setLeft] = useState({ left: "100px" });
  const [right, setRight] = useState({ right: "100px" });
  const [position, setPosition] = useState({});
  const grid = {
    title: "Grid Layout",
    tools: "HTML, CSS",
    photo: Grid,
    link: "https://semuona.github.io/gridlayout/",
  };

  const lego = {
    title: "Lego",
    tools: "HTML, CSS",
    photo: Lego,
    link: "https://semuona.github.io/lego/",
  };
  const bootstrap = {
    title: "Bootstrap",
    tools: "HTML, CSS, Bootstrap",
    photo: Bootstrap,
    link: "https://semuona.github.io/bootstrap/",
  };
  const animation = {
    title: "Animation",
    tools: "HTML, CSS",
    photo: Animation,
    link: "https://semuona.github.io/animation/",
  };
  const portfolio = {
    title: "Animated Portfolio",
    tools: "HTML, CSS",
    photo: Portfolio,
    link: "https://semuona.github.io/animated-portfolio/",
  };
  const table = {
    title: "Table",
    tools: "HTML, CSS",
    photo: Table,
    link: "https://semuona.github.io/table/",
  };
  const layout = {
    title: "Layout",
    tools: "HTML, CSS",
    photo: Layout,
    link: "https://semuona.github.io/layout/",
  };
  const bulls = {
    title: "Bulls",
    tools: "HTML, CSS",
    photo: Cow,
    link: "https://semuona.github.io/Bulls-Cows/main.html",
  };
  const hungryMe = {
    title: "HungryMe",
    tools: "HTML, SCSS, React, MongoDb, Express, Node",
    photo: HungryMe,
    link: "https://semuona.github.io/hungryMe/",
  };

  useEffect(() => {
    switch (curHover) {
      case "grid":
        setCurrCard(grid);
        setPosition(left);
        break;
      case "bulls":
        setCurrCard(bulls);
        setPosition(right);
        break;
      case "lego":
        setCurrCard(lego);
        setPosition(right);
        break;
      case "bootstrap":
        setCurrCard(bootstrap);
        break;
      case "animation":
        setCurrCard(animation);
        setPosition(right);
        break;
      case "portfolio":
        setCurrCard(portfolio);
        break;
      case "table":
        setCurrCard(table);
        setPosition(right);
        break;
      case "layout":
        setCurrCard(layout);
        setPosition(left);
        break;
      case "hungryMe":
        setCurrCard(hungryMe);
        setPosition(left);
        break;
      default:
        setCurrCard({});
        break;
    }
  }, [curHover]);

  return (
    <div>
      <Card className="postContainer" style={position}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={currCard?.photo}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            color="whiteSmoke"
          >
            {currCard?.title}
          </Typography>
          <Typography variant="body2" color="whiteSmoke">
            {currCard?.tools}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
