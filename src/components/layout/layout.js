import React from "react"
import PropTypes from "prop-types"

import Header from "../header/"
import "./layout.css"

import { Content } from './style'

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
      <Content>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
