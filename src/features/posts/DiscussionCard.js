import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { TimeAgo } from './TimeAgo'

const useStyles = makeStyles({
    root: {
      margin: 10
    },
    media: {
        maxWidth: 140
    },
  });

export const DiscussionCard = (props) => {
    const { post } = props;
    const classes = useStyles()

    return (
        <Card className={classes.root}>
                <CardContent>
                        <Typography variant="body1" align="left">
                            {post.ups} 
                        </Typography>
                        <Typography variant="body1" fontStyle="italic">
                            {post.author}
                            <TimeAgo timestamp={post.created_utc} />
                        </Typography>
                        

                    <Typography variant="p" color="textSecondary">
                        {post.body}
                    </Typography>
                </CardContent>
        </Card>
    )
}