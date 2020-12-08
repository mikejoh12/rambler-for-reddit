import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DiscussionCard } from './DiscussionCard'
import { selectDiscussion, fetchDiscussion } from '../reddit/redditSlice'
import { Typography } from '@material-ui/core'

export const DiscussionList = () => {

    let { id, subreddit } = useParams()
    
    const discussion = useSelector(selectDiscussion);
    const dispatch = useDispatch()

    //Fetch new posts
    useEffect(() => {
        dispatch(fetchDiscussion(`r/${subreddit}/${id}.json`))
    }, [subreddit, id, dispatch])
 
    return (
            <div>
                <Typography variant="h6" color="textPrimary">
                    {`r/${subreddit}`}
                </Typography>
                {discussion && discussion.map(post => {
                    return <DiscussionCard 
                        post={post}
                        key={post.id} />
                    })
                }
            </div>
    )
}