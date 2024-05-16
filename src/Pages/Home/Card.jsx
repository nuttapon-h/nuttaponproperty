import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import getImage from "../../CommonFunction/CommonFunction";

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    borderRadius: "20px",
    textAlign: "center",
    minHeight: "400px",
    "background-image":
      'url("https://www.transparenttextures.com/patterns/batthern.png")',
    "box-shadow": "0 4px 25px #676767",
  },
  media: {
    height: 200,
  },
  font: {
    color: "white",
  },
  textColor: {
    color: "white",
    padding: "10px",
    width: "80%",
    fontSize: "25px",
    borderRadius: "10px",
    marginTop: "30px",
    boxShadow: "10px 5px #D6EADF",
    fontFamily: "Antonio, sans-serif",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textDecor: {
    textDecoration: "none",
  },
  status: {
    color: "white",
    padding: "10px",
    width: "80%",
    fontSize: "25px",
    borderRadius: "10px",
    marginTop: "10px",
    fontFamily: "Antonio, sans-serif",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <a href={props.link} style={{ textDecoration: "none" }}>
      <Card
        className={classes.root}
        style={{ backgroundColor: props.backgroundColor, marginTop: "40px" }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={getImage(props.image)}
            title="Contemplative Reptile"
          />
          <CardContent>
            <h1
              className={classes.font}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {props.name}
            </h1>
            <h1
              className={classes.textColor}
              gutterBottom
              variant="h5"
              component="h2"
              style={{ backgroundColor: props.backgroundBedroom }}
            >
              {props.bedroom}
            </h1>
          </CardContent>
        </CardActionArea>
      </Card>
      {props.status === "available" && (
        <h1
          className={classes.status}
          gutterBottom
          variant="h5"
          component="h2"
          style={{ backgroundColor: "#6BAA75", width: "50%" }}
        >
          Available
        </h1>
      )}
      {props.status === "unavailable" && (
        <div
          className={classes.status}
          gutterBottom
          variant="h5"
          component="h2"
          style={{ backgroundColor: "#69747C", width: "80%" }}
        >
          <h3 style={{color : "#ffec7a"}}>
            <b>Unavailable</b>
          </h3>
          <h3>
            until
          </h3>
          <h3>
            {props.contractEndDate}
          </h3>
        </div>
      )}
    </a>
  );
}
