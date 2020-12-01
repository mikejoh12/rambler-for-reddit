import React from 'react'
import { PostCard } from '../PostCard/PostCard'
import { useSelector } from 'react-redux'
import { selectPosts } from '../reddit/redditSlice'

export const PostList = () => {
    const posts = useSelector(selectPosts);
    const postsList = posts.map(post => {
        return <PostCard post={post} />
    })
    
    return (
        <div>
            {postsList}
        </div>
    )
}