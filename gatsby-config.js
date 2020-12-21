/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');


module.exports = {
  siteMetadata: {
    siteUrl: 'https://danestevens.dev',
    title: 'Dane Stevens',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/posts/`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/Layout/default-page-layout.js"),
          default: require.resolve("./src/components/Layout/default-page-layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dane Stevens`,
        short_name: `Dane Stevens`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#002146`,
        display: `standalone`,
        icon: 'favicon.png'
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://danestevens.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `danestevens.dev`,
        customDomain: 'stats.danestevens.dev'
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-force-trailing-slashes`,
  ],
}
