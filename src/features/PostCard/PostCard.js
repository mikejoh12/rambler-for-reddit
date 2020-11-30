import React from 'react'

export const PostCard = (props) => {
    const { post } = props;
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.msg}</p>
            <p>{post.author}</p>
        </div>
    )
}