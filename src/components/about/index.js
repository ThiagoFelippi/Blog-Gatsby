import React from 'react';
import { useStaticQuery , graphql } from 'gatsby'

import { Container, Image, Content, Name, Description } from './styles';
import Perfil from '../../images/perfil.jpg'

function About() {

  const data = useStaticQuery(graphql`
    query returnUsersInfo{
      site {
        siteMetadata {
          name
        }
      }
    }
  `)

  return (
    <Container>
      <Image src={Perfil} />
      <Content>
        <Name> {data.site.siteMetadata.name} </Name>
        <hr/>
        <Description>
          Meu nome é Thiago e sou desenvolver Full Stack, procuro me especializar cada vez mais, atualmente estou estudando GraphQL e Gatsby, se vocês quiserem saber mais de mim podem acessar o <a href="https://www.linkedin.com/in/thiago-crespo-felippi/" style={{textDecoration: "none"}}> Meu Linkedin </a>
        </Description>
      </Content>
    </Container>
  )
}

export default About;