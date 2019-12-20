import React from "react"
import img from "../images/idea.png"
import styles from "../styles/whatwedo.module.css"
import Header from "./Header"

const Card = () => {
  return (
    <section className={styles.card}>
      <img className={styles.cardImage} src={img} alt="data" />
      <section>
        <p>CONDUCTING WORKSHOPS</p>
        <p className={styles.cardContent}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos
          maiores delectus voluptatibus nobis ratione, laudantium corporis
        </p>
      </section>
    </section>
  )
}

const WhatWeDo = () => {
  return (
    <section className={styles.main}>
      <section>
        <Header headerText={"What We Do"} />
      </section>
      <section className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  )
}

export default WhatWeDo
