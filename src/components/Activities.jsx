import React from "react"
import img from "../images/dummy.png"
import { Link } from "gatsby"
import activityStyles from "../styles/activities.module.css"

const Card = () => {
  return (
    <section className={activityStyles.card}>
      <img className={activityStyles.cardImage} src={img} alt="data" />
      <section className={activityStyles.info}>
        <p className={activityStyles.cardHeader}>
          SEMINAR/WORKSHOP ON “AI AND CYBERSECURITY”
        </p>
        <p className={activityStyles.date}>October 18, 2019</p>
      </section>
      <section>
        <Link to="/events">Read More</Link>
      </section>
    </section>
  )
}

const Activities = () => {
  return (
    <section className={activityStyles.campusActivities}>
      <h2>Campus Activities</h2>
      <section className={activityStyles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  )
}

export default Activities
