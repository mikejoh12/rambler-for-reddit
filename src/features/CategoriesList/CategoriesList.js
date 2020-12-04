import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../reddit/redditSlice'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

const CategoriesListItem = ({ category }) => {

    return <ListItem  
                    button
                    component={Link}
                    to={`/r/${category}`}>
                <ListItemText primary={`r/${category}`} />
            </ListItem>
}

export const CategoriesList = () => {
    const categories = useSelector(selectCategories);

    const categoriesList = categories.map(category => {
        return <CategoriesListItem 
            category={category}
            key={category} />
    })

    return (
        <List>
            {categoriesList}
        </List>
    )
}