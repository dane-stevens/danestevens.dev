import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function SEO({ title, path, description, banner }) {

    const data = useStaticQuery(graphql`
        query SiteData {
            site {
                siteMetadata {
                    title
                    siteUrl
                }
            }
        }
    `)

    const pageTitle = `${ title } - ${ data.site.siteMetadata.title }`

    return (
        <Helmet>
            <title>{ pageTitle }</title>
            <meta property='og:title' content={ pageTitle } />
            <meta property='twitter:title' content={ pageTitle } />
            <meta property='og:image' content={ data.site.siteMetadata.siteUrl + (banner ? banner.replace('./','/') : '/danestevens.png')} />
            <meta property='og:image:secure_url' content={ data.site.siteMetadata.siteUrl + (banner ? banner.replace('./','/') : '/danestevens.png')} />
            <meta property='twitter:image:src' content={ data.site.siteMetadata.siteUrl + (banner ? banner.replace('./','/') : '/danestevens.png')} />
            <meta property='og:image:alt' content={ pageTitle } />
            <meta property='og:url' content={ data.site.siteMetadata.siteUrl + (banner ? '/blog' + path : path ? path : '') } />
            <meta name='description' content={ description } />
            <meta name='og:description' content={ description } />
        </Helmet>
    )
}