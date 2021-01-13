import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../reddit/redditSlice'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
//import { Grid } from '@material-ui/core'

const CategoriesListItem = ({ category, icon_img }) => {

    const useStyles = makeStyles({
        root: {
          margin: 10,
          backgroundColor: '#D3E3F0',
          color: '#181EE3',
        }
      });
 
    const classes = useStyles()

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={`/r/${category}`} onClick={handleClick}>
            <CardContent>
                <img src={icon_img} height="25" alt=""></img>
                <Typography variant="body1">
                    {category}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export const CategoriesList = () => {
    const categories = useSelector(selectCategories);

    return (
            <div>
                <Typography variant="h5" color="textPrimary">
                    Subreddits
                </Typography>
                    {
                        categories && categories.map(item => {
                            return <CategoriesListItem 
                                category={item.subreddit}
                                key={item.subreddit}
                                icon_img={item.icon_img} />
                        })
                    }
            </div>
    )
}