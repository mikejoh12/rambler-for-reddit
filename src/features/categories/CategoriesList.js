import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../reddit/redditSlice'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const CategoriesListItem = ({ category, icon_img }) => {

    const useStyles = makeStyles({
        root: {
          margin: 10
        }
      });
    
        const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={`/r/${category}`} onClick={() => window.scrollTo(0, 0)}>
            <CardContent>
                <img src={icon_img} height="25" alt=""></img>
                <Typography variant="body2" color="textPrimary">
                    {category}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export const CategoriesList = () => {
    const categories = useSelector(selectCategories);

    const categoriesList = categories.map(item => {
        return <CategoriesListItem 
            category={item.subreddit}
            key={item.subreddit}
            icon_img={item.icon_img} />
    })

    return (
            <div>
                <Typography variant="h6" color="textPrimary">
                    Subreddits
                </Typography>
                {categoriesList}
            </div>
    )
}