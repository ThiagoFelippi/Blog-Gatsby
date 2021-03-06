import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import About from '../components/about/index'

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
)

export default IndexPage
