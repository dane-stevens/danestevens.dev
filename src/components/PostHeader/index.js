import React from 'react'

import { DateTime } from 'luxon'

import './postHeader.scss'

export default function(props) {

    const { pageContext } = props

    return (
        <div className='articleHeader'>
            <h1>{ pageContext.frontmatter.title }</h1>
            { pageContext.frontmatter.date && <div className='articleDate'>{ DateTime.fromISO(pageContext.frontmatter.date).setZone('UTC').toFormat('DDDD') }</div> }
        </div>
    )
}