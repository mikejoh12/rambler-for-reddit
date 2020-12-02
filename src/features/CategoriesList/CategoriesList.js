import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCategories, fetchPosts } from '../reddit/redditSlice'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { currentTopicUpdated } from '../reddit/redditSlice'


const CategoriesListItem = ({ category }) => {
    const dispatch = useDispatch()

    const onCategoryChanged = () => {
        dispatch(currentTopicUpdated(category))
    }

    return <ListItem  
                    button
                    onClick={onCategoryChanged}>
                <ListItemText primary={category} />
            </ListItem>
}

export const CategoriesList = () => {
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch()

    //Fetch new posts
    const currentTopic = useSelector(state => state.reddit.currentTopic)
    useEffect(() => {
        dispatch(fetchPosts(currentTopic))
    }, [currentTopic, dispatch])

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