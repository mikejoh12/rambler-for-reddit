import React, { useEffect } from 'react'
import { PostCard } from './PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts, fetchPosts } from '../reddit/redditSlice'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'

export const PostList = () => {
    
    let { subreddit } = useParams()

    //Fetch new posts
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPosts(subreddit))
    }, [subreddit, dispatch])
    
    const posts = useSelector(selectPosts);
    const postsList = posts.map(post => {
        return <PostCard 
                    post={post}
                    key={post.id} />
    })
    
    return (
        <div>
            <Typography variant="h6" color="textPrimary">
                {`r/${subreddit}`}
            </Typography>
            {postsList}
        </div>
    )
}