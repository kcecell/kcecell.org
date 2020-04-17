module.exports = {
  siteMetadata: {
    title: `KC Enterpreneurship Cell`,
    content: `Emerging Enterpreneurship Cell of K.C College of Engineering and Management Studies and Research, Thane.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `./static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 500 },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify-cms",
  ],
}
