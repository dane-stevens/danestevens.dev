import React from "react"

import '../styles/default.scss'

import Link from 'components/Link'
import { graphql } from 'gatsby'

export default function ({ data }) {

    const { allMdx } = data

    return (
		<>

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

            <div className='contentContainer'>
                {
                    allMdx.edges.map(({ node }) => {
                        return <Link to={`/blog${ node.frontmatter.path }`}>{ node.frontmatter.title }</Link>
                    })
                }
            </div>

		</>
	)
}

export const query = graphql`
    query {
        allMdx(filter: {slug: {regex: "/^blog/"}}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }
    }
`
