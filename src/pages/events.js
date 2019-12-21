import React from "react"
import { Link } from "gatsby"
import img from "../images/dummy.png"
import Layout from "../components/Layout"
import Header from "../components/Header"
import SEO from "../components/SEO"
import activityStyles from "../styles/activities.module.css"

const Card = () => {
  return (
    <section className={activityStyles.card}>
      <img className={activityStyles.cardImage} src={img} alt="data" />
      <section>
        <p>SEMINAR/WORKSHOP ON “AI AND CYBERSECURITY”</p>
        <p className={activityStyles.date}>October 18, 2019</p>
      </section>
      <section>
        <Link to="/events">Read More</Link>
      </section>
    </section>
  )
}

export default () => {
  return (
    <Layout>
      <SEO title={"Events - KC Entrepreneurship Cell"} />
      <Header headerText={"Events"} />
      <section className={activityStyles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Layout>
  )
}
