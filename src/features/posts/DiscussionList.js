import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DiscussionCard } from './DiscussionCard'
import { selectDiscussion, fetchDiscussion, searchTargetUpdated, selectDiscussionStatus } from '../reddit/redditSlice'
import { Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

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
                <Typography variant="h5" color="textPrimary">
                    {`r/${subreddit}`}
                </Typography>

                { (discussionStatus === 'loading') && <CircularProgress style={{marginTop: 30}} /> }

                { (discussion && discussionStatus === 'succeeded') && discussion.map(post => {
                    return <DiscussionCard 
                        post={post}
                        key={post.id} />
                    }) }
                
                { (!discussion.length && discussionStatus === 'succeeded') &&
                <Typography variant="h6" color="textPrimary">
                    No replies found.
                </Typography> }
            </div>
    )
}