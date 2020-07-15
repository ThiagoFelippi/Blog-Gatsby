import React from 'react';
import { useStaticQuery , graphql } from 'gatsby'

import { Container, Header, Title, Content, Body, BodyContent, Ul, List } from './styles';
import Image from '../image'

function Welcome() {

  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <Container>
      <Header>
        <Title> Seja Bem-Vindo </Title>
        <Content>
          {data.site.siteMetadata.description}
        </Content>
      </Header>
      <Body>
        <div  style={{
          width: 200,
          display: "block"
        }}>
          <Image />
        </div>
        <BodyContent>
          <h1 style={{color: "#672799"}}> Tecnologias utiliadas </h1>
          <Ul>
            <List> GatsbyJS </List>
            <List> GraphQL </List>
            <List> ReactJS </List>
          </Ul>
        </BodyContent>
      </Body>
    </Container>
  )
}

export default Welcome;