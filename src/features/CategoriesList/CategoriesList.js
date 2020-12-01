import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../reddit/redditSlice'
import { List, ListItem, ListItemText } from '@material-ui/core'

export const CategoriesList = () => {
    const categories = useSelector(selectCategories);
    const categoriesList = categories.map(category => {
        return <ListItem button>
                    <ListItemText primary={category} />
                </ListItem>
    })
    return (
        <List>
            {categoriesList}
        </List>
    )
}