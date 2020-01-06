import React from "react"
import amazingSupportLogo from "../images/amazing-support.svg"
import organisingTalksLogo from "../images/organising-talks.svg"
import elevatingIdeasLogo from "../images/elevating-ideas.svg"
import conductWorkshopLogo from "../images/conduct-workshop.svg"
import styles from "../styles/whatwedo.module.css"
import Header from "./Header"

const Card = ({ title, logo, content }) => {
  return (
    <section className={styles.card}>
      <img className={styles.cardImage} src={logo} alt="data" />
      <section>
        <p>{title}</p>
        <p className={styles.cardContent}>{content}</p>
      </section>
    </section>
  )
}

const WhatWeDo = () => {
  const data = [
    {
      title: "CONDUCT WORKSHOP",
      logo: conductWorkshopLogo,
      content:
        "We understand the potential of the young minds and give our support to the fullest to bring the best of out them.",
    },
    {
      title: "ELEVATING IDEAS",
      logo: elevatingIdeasLogo,
      content:
        "In this competitive world, we need the future generations to be talented enough as the companies crave for talent.",
    },
    {
      title: "ORGANISING TALKS",
      logo: organisingTalksLogo,
      content:
        "Young minds that undergo the process of modification have  many queries. To clear them, talks are the best.",
    },
    {
      title: "AMAZING SUPPORT",
      logo: amazingSupportLogo,
      content:
        "We believe in knowledge increases by sharing, we support the curious  minds and help them nourish.",
    },
  ]

  return (
    <section className={styles.main}>
      <section>
        <Header headerText={"What We Do"} />
      </section>
      <section className={styles.cardContainer}>
        {data.map(item => (
          <Card
            title={item.title}
            content={item.content}
            logo={item.logo}
            key={item.title}
          />
        ))}
      </section>
    </section>
  )
}

export default WhatWeDo
