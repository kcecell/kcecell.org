import React from "react"
import SEO from "../components/SEO"
import styles from "../styles/events-desc.module.css"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    eventsJson(slug: { eq: $slug }) {
      title
      description
      date
      slug
      image {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const EventsDesc = ({ data }) => {
  const event = data.eventsJson

  return (
    <Layout>
      <SEO title={event.title} />
      <main>
        <h1 className={styles.header}>{event.title}</h1>
        <Img
          className={styles.eventImage}
          fixed={event.image.childImageSharp.fixed}
        />
        <section className={styles.dateContainer}>
          <h4 style={{ display: "inline" }}>Date: </h4>
          <span>{event.date}</span>
        </section>
        <section
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
      </main>
    </Layout>
  )
}

export default EventsDesc
