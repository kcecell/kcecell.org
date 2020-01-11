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
        path: `./data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/members.json`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
}
