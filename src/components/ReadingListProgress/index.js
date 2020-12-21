import React from 'react'
import './readingListProgress.scss'

export default function ReadingListProgress({ total, read }) {
    return (
        <div className='readingListProgressContainer'>
            <div className='readingListProgress'
                style={{
                    width: `${(read / total) * 100}%`
                }}
            />
        </div>
    )
}