import React from "react"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import Activities from "../components/Activities"
import About from "../components/About"
import WhatWeDo from "../components/WhatWeDo"

export default () => {
  return (
    <Layout>
      <Carousel />
      <About />
      <WhatWeDo />
      <Activities />
    </Layout>
  )
}
