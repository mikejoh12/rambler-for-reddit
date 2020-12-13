import React, { useEffect } from 'react'
import { PostCard } from './PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts, fetchPosts, selectPostsStatus, searchTargetUpdated } from '../reddit/redditSlice'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

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
            <Typography variant="h5" color="textPrimary">
                {`r/${subreddit}`}
            </Typography>

            {(postsStatus === 'loading') && <CircularProgress style={{marginTop: 30}} />}

            {(posts && postsStatus === 'succeeded') && posts.map(post => {
                return <PostCard 
                        post={post}
                        key={post.id} />
                })
            }       
        </div>
    )
}