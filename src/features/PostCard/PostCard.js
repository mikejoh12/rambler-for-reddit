import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const PostCard = (props) => {
    const { post } = props;
    return (
        <Card style={{margin: '8px'}}>
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    {post.title}
                </Typography>
                <Typography>
                    {post.msg}
                </Typography>
                <Typography>
                    {post.author}
                </Typography>
            </CardContent>
        </Card>
    )
}