import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { TimeAgo } from './TimeAgo'
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      margin: 10,
      backgroundColor: '#D3E3F0'
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
                        

                    <Typography variant="body1" color="textPrimary">
                        {post.body}
                    </Typography>
                </CardContent>
        </Card>
    )
}