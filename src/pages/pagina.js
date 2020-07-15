import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

import Post from '../components/Post/index'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Post title={post.frontmatter.title} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`