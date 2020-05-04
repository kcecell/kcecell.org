import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import SEO from "../components/SEO"
import githubLogo from "../images/githubLogo.svg"
import linkedinLogo from "../images/linkedinLogo.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/members.module.css"
import Mentors from "../components/Mentors"

function Card({ name, profilePic, linkedin, github, position }) {
  let githubComp = null
  if (github === "#") {
    githubComp = null
  } else {
    githubComp = (
      <a href={github} target="_blank" rel="noopener noreferrer">
        <img className={styles.logo} src={githubLogo} alt="Github" />
      </a>
    )
  }

  return (
    <section className={styles.card}>
      <Img className={styles.cardImage} fixed={profilePic} alt={name} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardContent}>{position}</p>
      {githubComp}
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img className={styles.logo} src={linkedinLogo} alt="Linkedin" />
      </a>
    </section>
  )
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "member" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              position
              linkedIn
              gitHub
              thumbnail {
                childImageSharp {
                  fixed(width: 130, height: 130) {
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
    <Layout>
        <SEO
          title={"Team - KC Entrepreneurship Cell"}
          name={"description"}
          content={"Team of KC E-cell Thane."}
        />
      <section style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <Mentors />
        <Header headerText={"Ecell Team"} />
        <section className={styles.cardContainer}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card
              key={node.id}
              name={node.frontmatter.name}
              position={node.frontmatter.position}
              profilePic={node.frontmatter.thumbnail.childImageSharp.fixed}
              github={node.frontmatter.gitHub}
              linkedin={node.frontmatter.linkedIn}
            />
          ))}
        </section>
      </section>
    </Layout>
  )
}
