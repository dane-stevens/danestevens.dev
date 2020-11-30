import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, ...rest }) => {

    const isInternal = /^\/(?!\/)/.test(to);

    if (isInternal) return (
        <GatsbyLink to={to} {...rest}>
            {children}
        </GatsbyLink>
    )

    return (
        <a href={to} {...rest}>
            {children}
        </a>
    );

}

export default Link