import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, name, content }) => {
  const defaultData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          content
        }
      }
    }
  `)

  const defaultTitle = defaultData.site.siteMetadata.title
  const defaultContent = defaultData.site.siteMetadata.content

  return (
    <Helmet>
      <html lang="en" />
      <title>{title || defaultTitle}</title>
      <meta name={name || "Description"} content={content || defaultContent} />
    </Helmet>
  )
}

export default SEO
