import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DiscussionCard } from '../DiscussionCard/DiscussionCard'
import { selectDiscussion, fetchDiscussion } from '../reddit/redditSlice'

export const DiscussionList = () => {

    let { id, subreddit } = useParams()
    
    const discussion = useSelector(selectDiscussion);
    const dispatch = useDispatch()

    //Fetch new posts
    useEffect(() => {
        dispatch(fetchDiscussion(`r/${subreddit}/${id}.json`))
    }, [subreddit, id, dispatch])

    let discussionList
    if (discussion) {
        discussionList = discussion.map(post => {
            return <DiscussionCard 
                        post={post}
                        key={post.id} />
        })
    }
        
    return (
            <div>
                {discussionList}
            </div>
    )
}