import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      margin: 10
    },
    media: {
        maxWidth: 140
    },
  });

export const PostCard = (props) => {
    const { post } = props;
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={`/discussion/${post.subreddit}/${post.id}`}>
                <CardMedia
                    component="img"
                    alt=""
                    image={post.imgUrl}
                    title={post.title}
                />

                {post.videoUrl && <CardMedia 
                    component="video"
                    height="200"
                    autoPlay
                    controls
                    image={post.videoUrl}
                    title={post.title}
                />}

                <CardContent>
                    <Typography variant="h6" color="textSecondary">
                        {post.title}
                    </Typography>
                    <Typography>
                        Posted by {post.author}
                    </Typography>
                    <Typography>
                        {`r/${post.subreddit}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}