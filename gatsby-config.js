module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yqgd.tk`,
    title: `一 灯 大 师`,
    description: `渔 樵 耕 读`,
    menuLinks:[
       {
         name:'首  页',
         link:'/'
        },
       {
         name:'关 于',
         link:'/about'
       },
       {
         name:'文 章',
         link: '/posts'
       },
       {
         name: '演 讲',
         link: '/talks'
        },
        {
          name: '联 系',
          link: '/contact'
        },
      ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/data`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/pages/`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `posts`,
              path: `${__dirname}/src/posts/`,
            },
          },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1PT1YW053L", // Google Analytics / GA
         // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
         // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
