import React from 'react'
import { formatDistanceToNow } from 'date-fns'


export const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';
    if (timestamp) {
        const unixTimestamp = timestamp
        const milliseconds = unixTimestamp * 1000
        const date = new Date(milliseconds)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
    <span title={timestamp}>
        &nbsp;{timeAgo}
    </span>
    )
}