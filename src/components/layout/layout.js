import React from "react"
import PropTypes from "prop-types"

import Header from "../header/"
import "./layout.css"

import { Container, Content } from './style'

const Layout = ({ children }) => {

  return (
    <Container>
      <Header/>
      <Content>
        <main>{children}</main>
      </Content>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
