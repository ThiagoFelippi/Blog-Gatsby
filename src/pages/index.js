import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Welcome from '../components/welcome/'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
  </Layout>
)

export default IndexPage
