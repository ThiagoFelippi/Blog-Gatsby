import styled from 'styled-components';

export const Posts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`

export const Container = styled.div`
  width: 400px;
  height: 150px;
  box-shadow: 1px 1px 4px #0006;
  padding: 45px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 30px;
`;

export const Content = styled.div`
  bottom: 10px;
  padding: 20px;
`

export const Title = styled.h1`
  color: #991155;
  margin-bottom: 5px;
`

export const  Paragraph = styled.p`
  margin-top: 10px;
`
export const Button = styled.a`
  width: 30%;
  position: absolute;
  top: 5px;
  right: 10px;
  padding: 5px;
  border: none;
  border-radius: 30px;
  color: white;
  background: #991155;
  cursor: pointer;
  box-shadow: 1px 1px 4px #0006;
  outline: none;
  text-decoration: none;
  transition: all .3s ease-in-out;

  &:hover{
    background: white;
    color: #991155;
    padding: 10px;

  }
`