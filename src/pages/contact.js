import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import Background from "../images/particles.jpg"

export default () => {
  return (
    <section style={{ backgroundImage: `url(${Background})`, color: "#fff" }}>
      <Layout>
        <Contact />
      </Layout>
    </section>
  )
}
