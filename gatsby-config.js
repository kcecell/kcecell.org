module.exports = {
  siteMetadata: {
    title: `KCCOE Enterpreneurship Cell`,
    description: `Emerging Enterpreneurship Cell of K.C College of Engineering and Management Studies and Research, Thane.`,
    author: "Ehtesham Siddiqui",
    keywords: ["KC Entrepreneurship Cell", "KC Ecell", "KCCOE Ecell", "Ecell"],
    siteUrl: "https://kcecell.org",
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
