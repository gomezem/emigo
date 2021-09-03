import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import snake from '../img/snake-game.jpg';
import Dialog from './Dialog';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Projects() {
    const classes = useStyles();

    return(
        <div>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={snake}
            title="Snake Game 2021"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Snake Game
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                2021
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Dialog></Dialog>
        </CardActions>
        </Card>
        </div>
      );

};