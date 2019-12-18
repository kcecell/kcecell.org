import React from "react"
import img from "../images/idea.png"
import styles from "../styles/whatwedo.module.css"

const Card = () => {
  return (
    <section className={styles.card}>
      <img className={styles.cardImage} src={img} alt="data" />
      <section className={styles.info}>
        <p className={styles.cardHeader}>ELEVATING NEW IDEAS</p>
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
        <h2 className={styles.header}>What We Do</h2>
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
