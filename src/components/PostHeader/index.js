import React from 'react'

import { DateTime } from 'luxon'

import './postHeader.scss'

export default function({ pageContext }) {



    return (
        <div className='articleHeader'>
            <h1>{ pageContext.frontmatter.title }</h1>
            <div className='articleDate'>{ DateTime.fromISO(pageContext.frontmatter.date).toFormat('DDDD') }</div>
        </div>
    )
}