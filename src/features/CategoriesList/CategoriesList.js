import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../reddit/redditSlice'

export const CategoriesList = () => {
    const categories = useSelector(selectCategories);
    return (
        <div>
            <h4>{categories[0]}</h4>
            <h4>{categories[1]}</h4>
            <h4>{categories[2]}</h4>
            <h4>{categories[3]}</h4>
        </div>
    )
}