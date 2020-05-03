import React from "react"
import Header from "./Header"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import mentorStyles from "../styles/mentors.module.css"

const Card = ({ image, title, description, position }) => {
  return (
    <section className={mentorStyles.card}>
      <section className={mentorStyles.imageContainer}>
        <Img className={mentorStyles.cardImage} fixed={image} />
        <h1 className={mentorStyles.cardHeader}>{title}</h1>
      </section>
      <section className={mentorStyles.infoContainer}>
        <h4 className={mentorStyles.cardPosition}> {position} </h4>
        <p className={mentorStyles.description}> {description} </p>
      </section>
    </section>
  )
}

const Mentors = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "mentor" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              position
              description
              thumbnail {
                childImageSharp {
                  fixed(height: 250, width: 250) {
                    ...GatsbyImageSharpFixed
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
      <section className={mentorStyles.mainContainer}>
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
