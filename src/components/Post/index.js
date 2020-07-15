import React from 'react';

import { Container, Title, Content } from './styles';

function Post({title, dangerouslySetInnerHTML}) {
  return (
    <Container>
      <Title> {title} </Title>
      <Content dangerouslySetInnerHTML={dangerouslySetInnerHTML}></Content>
    </Container>
  )
}

export default Post;