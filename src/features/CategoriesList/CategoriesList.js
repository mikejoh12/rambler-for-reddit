import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../reddit/redditSlice'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { currentTopicUpdated } from '../reddit/redditSlice'


const CategoriesListItem = ({ category }) => {
    const dispatch = useDispatch()

    const onCategoryChanged = () => {
        console.log('Click')
        dispatch(currentTopicUpdated(category))
    }

    return <ListItem    button
                        onClick={onCategoryChanged}>
                <ListItemText primary={category} />
            </ListItem>
}

export const CategoriesList = () => {
    const categories = useSelector(selectCategories);


    const categoriesList = categories.map(category => {
        return <CategoriesListItem 
            category={category}/>
    })

    return (
        <List>
            {categoriesList}
        </List>
    )
}