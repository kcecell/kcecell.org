import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Mentors from "../components/Mentors"
import Team from "../components/Team"

export default () => (
  <Layout>
    <SEO
      title={"Team - KC Entrepreneurship Cell"}
      name={"description"}
      content={"Team of KC E-cell Thane."}
    />
    <section style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <Mentors />
      <Team />
    </section>
  </Layout>
)
