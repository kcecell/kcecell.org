import React from "react"
import Header from "./Header"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/mentors.module.css"

const Card = ({ image, title, description, position }) => {
  return (
    <section className={styles.card}>
      <section className={styles.imageContainer}>
        <Img className={styles.cardImage} fixed={image} />
        <h1 className={styles.cardHeader}>{title}</h1>
      </section>
      <section className={styles.infoContainer}>
        <h4 className={styles.subHeader}> - {position} </h4>
        <p className={styles.description}> {description} </p>
      </section>
    </section>
  )
}

const Mentors = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "mentor" } } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              position
              description
              order
              thumbnail {
                childImageSharp {
                  fixed(height: 250, width: 250, quality: 100) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section>
      <Header headerText={`Ecell Mentors`} />
      <section className={styles.container}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Card
              key={node.id}
              title={node.frontmatter.name}
              image={node.frontmatter.thumbnail.childImageSharp.fixed}
              position={node.frontmatter.position}
              description={node.frontmatter.description}
            />
          )
        })}
      </section>
    </section>
  )
}

export default Mentors
