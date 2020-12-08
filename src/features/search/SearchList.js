import React from 'react'
import { PostCard } from '../posts/PostCard'
import { DiscussionCard } from '../posts/DiscussionCard'
import { useSelector } from 'react-redux'
import { selectPosts, selectDiscussion, selectSearchTarget } from '../reddit/redditSlice'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'

export const SearchList = () => {
    
    let { searchTerm } = useParams()
    
    const posts = useSelector(selectPosts)
    const discussion = useSelector(selectDiscussion)
    const searchTarget = useSelector(selectSearchTarget)

    let results
    if (posts && searchTarget === 'posts') {
        results = posts
            .filter(post => {
                if (post.title) {
                    return post.title.toLowerCase().includes(searchTerm.toLowerCase())
                }
                return false
            })
            .map(post => {
                return <PostCard 
                            post={post}
                            key={post.id} />
            })
    } else if (discussion && searchTarget === 'discussion') {
        results = discussion
            .filter(post => {
                if (post.body) {
                    return post.body.toLowerCase().includes(searchTerm.toLowerCase())
                }
                return false
            })
            .map(post => {
                return <DiscussionCard 
                    post={post}
                    key={post.id} />
            })
    }

    return (
        <div>
            { (results.length) ? results :
                        <Typography variant="h6" color="textPrimary">
                            No results on this page ({searchTerm}):
                        </Typography>
            
            }
        </div>
    )
}