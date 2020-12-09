import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { TimeAgo } from './TimeAgo'
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      margin: 10,
      backgroundColor: '#D3E3F0',
    }
  });

export const PostCard = (props) => {
    const { post } = props;
    const classes = useStyles()

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
    <Grid item>
    <Card className={classes.root}>                 
            {post.videoUrl && <CardMedia 
                component="video"
                height="200"
                autoPlay
                controls
                image={post.videoUrl}
                title={post.title}
            />}
             <CardActionArea component={Link} to={`/discussion/${post.subreddit}/${post.id}`} onClick={handleClick}>
                {post.post_hint === 'image' && <CardMedia
                    component="img"
                    alt=""
                    height="auto"
                    image={post.url}
                    title={post.title}
                    />
                }
            <CardContent>
                <Grid container direction="row" alignItems="center">
                    <SwapVertOutlinedIcon fontSize="small" />
                    <Typography variant="caption" align="left">
                            {post.ups}
                    </Typography>
                </Grid>
                
                <Typography variant="body1" color="textSecondary">
                    Posted by {post.author}
                    <TimeAgo timestamp={post.created_utc} />
                </Typography>
                <Typography variant="h6" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography>
                    {`r/${post.subreddit}`}
                </Typography>

                <Grid container direction="row" alignItems="center">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <Typography variant="caption" align="left">
                            {post.num_comments}
                    </Typography>
                </Grid>
            </CardContent>
        </CardActionArea>
    </Card>
    </Grid> 
    )
}