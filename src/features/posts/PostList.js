import React, { useEffect } from 'react'
import { PostCard } from './PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts, fetchPosts, selectPostsStatus, searchTargetUpdated } from '../reddit/redditSlice'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'

export const PostList = () => {
    
    let { subreddit } = useParams()

    //Fetch new posts
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(searchTargetUpdated('posts'))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchPosts(subreddit))
    }, [subreddit, dispatch])
    
    const posts = useSelector(selectPosts)
    const postsStatus = useSelector(selectPostsStatus)

    return (
        <div>
            <Typography variant="h4" color="textPrimary">
                {`r/${subreddit}`}
            </Typography>
            {(posts && postsStatus === 'succeeded') && posts.map(post => {
                return <PostCard 
                        post={post}
                        key={post.id} />
                })
            }       
        </div>
    )
}