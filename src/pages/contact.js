import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import Background from "../images/particles.jpg"
import SEO from "../components/SEO"

export default () => {
  return (
    <section style={{ backgroundImage: `url(${Background})`, color: "#fff" }}>
      <Layout>
        <SEO title={"Contact - KC Enterpreneurship Cell"} />
        <Contact />
      </Layout>
    </section>
  )
}
