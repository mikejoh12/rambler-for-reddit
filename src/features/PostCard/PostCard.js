import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      margin: 10
    },
    media: {
      height: 140,
    },
  });

export const PostCard = (props) => {
    const { post } = props;
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt=""
                image={post.imgUrl}
                title={post.title}
            />

            <CardContent>
                <Typography variant="h6" color="textSecondary">
                    {post.title}
                </Typography>
                <Typography>
                    Posted by {post.author}
                </Typography>
                <Typography>
                    {post.subreddit}
                </Typography>
            </CardContent>
        </Card>
    )
}