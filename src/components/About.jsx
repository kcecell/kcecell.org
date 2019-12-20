import React from "react"
import aboutStyles from "../styles/about.module.css"
import Header from "./Header"

const About = () => {
  return (
    <section className={aboutStyles.main}>
      <Header headerText={"Ecell"} />
      <p className={aboutStyles.content}>
        We believe that entrepreneurship is not just about starting companies,
        but a pathway towards India’s socioeconomic development. Our vision is
        to make students entrepreneurial in every work that they do. We hope to
        enable them to solve global challenges as we see students as the
        greatest capital and intend to nurture and guide them.
      </p>
    </section>
  )
}

export default About
