import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

// Styles
import { Container, List, Li } from './style'

const Header = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(
    <Container>
      <div>
        <h1 id="title">
          <Link to="/" className="link">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
      <List>
        <Li>
          <Link to="/" className="link"> Posts </Link>
        </Li>
        <Li>
          <Link to="/" className="link"> Sobre mim </Link>
        </Li>
      </List>
   </Container>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
