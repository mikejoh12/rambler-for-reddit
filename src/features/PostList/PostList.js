import React from 'react'
import { PostCard } from '../PostCard/PostCard'
import { useSelector } from 'react-redux'
import { selectPosts } from '../reddit/redditSlice'

export const PostList = () => {
    const posts = useSelector(selectPosts);
    return (
        <div>
            <PostCard post={posts[0]} />
            <PostCard post={posts[1]} />
            <PostCard post={posts[2]} />
        </div>
    )
}