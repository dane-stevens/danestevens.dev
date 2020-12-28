import React from 'react'

import '../styles/default.scss'

import Link from 'components/Link'
import PostHeader from 'components/PostHeader'
import SEO from '../components/SEO'

export default (props) => {

    const { children, pageContext, path } = props

    if (path === '/reading-list/') pageContext.frontmatter = {
        title: 'Reading list',
        description: `A list of books I have read, or would like to read. I believe in a healthy mix of fiction and non-fiction.`,
        path
    }

    if (path === '/about/') pageContext.frontmatter = {
        title: 'About',
        description: `Christian, husband, father and software-engineer`,
        path
    }

    return (
        <>
            { pageContext.frontmatter && Object.keys(pageContext.frontmatter).length > 0 && <SEO { ...pageContext.frontmatter } /> }
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
                            {/* <li><Link to='/'>Home</Link></li> */}
                            <li><Link to='/blog/'>Blog</Link></li>
                            <li><Link to='/reading-list/'>Reading</Link></li>
                            <li><Link to='/about/'>About</Link></li>
                        </ul>
                    </nav>

                </div>

            </header>
            <div className='contentContainer contentContainer--post'>
                <section>
                    {
                        pageContext.frontmatter && Object.keys(pageContext.frontmatter).length > 0 ? (
                            <article><PostHeader pageContext={ pageContext } />{ children }</article>
                        ) : (
                            children
                        )
                    }                    
                </section>
            </div>
        </>
    )
}