import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function Article({ article }) {
  const classes = useStyles();
  const { name, slug, images, extras } = article;

  return (
    // <div style={{ margin: "3vw" }}>
    <Card
      className={classes.root}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "3vh",
        marginTop: "3vh",
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={images[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {extras}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/blog/${slug}`}>আরও পড়ুন</Link>
        </Button>
      </CardActions>
    </Card>
    // </div>
  );
}
