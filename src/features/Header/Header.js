import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentTopic } from '../reddit/redditSlice'

export const Header = () => {
    const currentTopic = useSelector(selectCurrentTopic)
    return (
        <div>
            <h1>Rambler for Reddit</h1>
            <h2>Topic: {currentTopic}</h2>
        </div>
    )
}