import React, { useState, useEffect } from 'react';

import { Container, Paragraph, Content, Title, Posts, Button } from './styles';

// Assets temprary
import { useStaticQuery, graphql } from 'gatsby';

function Introduction() {
  const [posts, setPosts] = useState([])
  const [ loading , setLoading] = useState(true)

  const data = useStaticQuery(graphql`
    query getAllPosts{
      allMarkdownRemark{
        nodes {
          fields {
            slug
          }
        frontmatter {
          title
          description
        }
      }
    }
    }
  `)

  useEffect(() => {
    if(data.allMarkdownRemark.nodes.length){
      setPosts(data.allMarkdownRemark.nodes)
      setLoading(false)
    }
  }, [data])
  console.log(posts)


  return loading?
    <h1> Loading ... </h1>
    :
    <Posts>
      {posts.map(post => {
        const direction = `http://localhost:8000${post.fields.slug}`
        return <Container>
          <Content>
            <Title> {post.frontmatter.title} </Title>
            <hr/>
            <Paragraph>
              {post.frontmatter.description}
            </Paragraph>
            <Button href={direction}> 
              Saiba Mais
            </Button>
          </Content>
        </Container>
      })}
    </Posts>
}

export default Introduction;