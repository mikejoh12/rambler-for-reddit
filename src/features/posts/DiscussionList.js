import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DiscussionCard } from './DiscussionCard'
import { selectDiscussion, fetchDiscussion, searchTargetUpdated, selectDiscussionStatus } from '../reddit/redditSlice'
import { Typography } from '@material-ui/core'

export const DiscussionList = () => {

    let { id, subreddit } = useParams()
    
    const discussionStatus = useSelector(selectDiscussionStatus);
    const discussion = useSelector(selectDiscussion);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchTargetUpdated('discussion'))
    }, [dispatch])

    //Fetch new posts
    useEffect(() => {
        dispatch(fetchDiscussion(`r/${subreddit}/${id}.json`))
    }, [subreddit, id, dispatch])
 
    return (
            <div>
                <Typography variant="h4" color="textPrimary">
                    {`r/${subreddit}`}
                </Typography>
                {(discussion && discussionStatus === 'succeeded') && discussion.map(post => {
                    return <DiscussionCard 
                        post={post}
                        key={post.id} />
                    })
                }
            </div>
    )
}