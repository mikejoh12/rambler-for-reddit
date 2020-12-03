import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

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
                    <Typography variant="h6" fontStyle="italic" color="textSecondary">
                        {post.author}
                    </Typography>
                    <Typography variant="p" color="textSecondary">
                        {post.body}
                    </Typography>
                </CardContent>
        </Card>
    )
}