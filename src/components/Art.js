import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import soummy from "../img/soummy.jpg";
import rose from "../img/pink_rose.jpg";
import hokusai from "../img/hokusai.jpg";
import madonna from "../img/madonna-drawing.jpg";
import delft from "../img/delft.jpg";
import mixed from "../img/mixed-media.jpg";
import grandma from "../img/grandma.jpg";
import bottles from "../img/bottles_pencil.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
  },
}));

const imageLayout = [
  {
    img: soummy,
    title: "Charcoal Portrait",
    cols: 1,
  },
  {
    img: bottles,
    title: "Bottles Drawing",
    cols: 1,
  },
  {
    img: grandma,
    title: "Grandmother Drawing",
    cols: 1,
  },
  {
    img: rose,
    title: "Rose Oil Painting",
    cols: 3,
  },
  {
    img: hokusai,
    title: "Hokusai Color Theory",
    cols: 3,
  },
  {
    img: madonna,
    title: "Madonna Drawing",
    cols: 1,
  },
  {
    img: delft,
    title: "Madonna Drawing",
    cols: 2,
  },
  {
    img: mixed,
    title: "Mixed Media",
    cols: 3,
  },
];

export default function Art() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={700} className={classes.imageList} cols={3}>
        {imageLayout.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
