import React from "react"

import '../styles/default.scss'

import Link from 'components/Link'
import { graphql } from 'gatsby'
import { DateTime } from "luxon"
import Img from 'gatsby-image'
import SEO from 'components/SEO'
export default function ({ data }) {

	const { allMdx } = data

    return (
		<>
			<SEO title="Blog"  />
			<header className='headerWrapper headerWrapper--small'>

				<div className='headerContainer'>

					<h1>
						<Link to='/'>
							<span>D</span>
							<span>A</span>
							<span>N</span>
							<span>E</span>
							<span></span>
							<span>S</span>
							<span>T</span>
							<span>E</span>
							<span>V</span>
							<span>E</span>
							<span>N</span>
							<span>S</span>
						</Link>
					</h1>

					<nav>
						<ul>
							{/* <li><Link to='/lessons/'>Lessons</Link></li> */}
							<li><Link to='/blog/'>Blog</Link></li>
							<li><Link to='/reading-list/'>Reading</Link></li>
							<li><Link to='/about/'>About</Link></li>
						</ul>
					</nav>

				</div>

			</header>

            <div className='contentContainer contentContainer--blog'>
                {
                    allMdx.edges.map(({ node }) => {
                        return <Link key={node.id} className='card' to={`/blog${ node.frontmatter.path }`}><Img fluid={ node.frontmatter.banner.childImageSharp.fluid } /><div className='post--card'><div>{ node.frontmatter.title }</div><div>{ DateTime.fromISO(node.frontmatter.date).setZone('UTC').toFormat('DDD') }</div></div></Link>
                    })
                }
            </div>

		</>
	)
}

export const query = graphql`
    query {
        allMdx(filter: {slug: {regex: "/^blog/"}} sort: { fields: frontmatter___date, order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        date
						banner {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
                    }
                }
            }
        }
    }
`
