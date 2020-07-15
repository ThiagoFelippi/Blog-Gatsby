import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Introduction from '../components/introduction/index'

const Pages = () => (
  <Layout style={{background: 'red'}}>
    <SEO title="About" />
    <Introduction />
  </Layout>
)

export default Pages
