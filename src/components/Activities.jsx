import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import activityStyles from "../styles/activities.module.css"

const Card = ({ image, title, date, slug }) => {
  return (
    <section className={activityStyles.card}>
      <Img className={activityStyles.cardImage} fixed={image} />
      <section>
        <h4 className={activityStyles.cardHeader}>{title}</h4>
        <p className={activityStyles.date}>Date: {date}</p>
      </section>
      <section>
        <Link style={{ color: "#30336B" }} to={`${slug}`}>
          Read More
        </Link>
      </section>
    </section>
  )
}

const Activities = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allEventsJson(sort: { fields: eventNum, order: DESC }, limit: 4) {
          edges {
            node {
              title
              date
              slug
              image {
                childImageSharp {
                  fixed(width: 288, height: 266) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <section className={activityStyles.campusActivities}>
      <Header headerText={"Campus Activities"} />
      <section className={activityStyles.cardContainer}>
        {data.allEventsJson.edges.map(({ node }) => (
          <Card
            key={node.slug}
            title={node.title}
            date={node.date}
            slug={node.slug}
            image={node.image.childImageSharp.fixed}
          />
        ))}
      </section>
    </section>
  )
}

export default Activities
