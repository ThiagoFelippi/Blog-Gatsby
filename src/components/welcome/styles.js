import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const  Header = styled.header`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222;
  margin-top: 50px;
  border-radius: 30px;
  padding: 35px;
  color: white;
  text-align: center;
  box-shadow: 1px 1px 3px #0006;
`

export const  Title  = styled.h1`
  font-size: 50px;
  margin-bottom: 30px;
`

export const Content  = styled.p``

export const Body = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Ul = styled.ul`
  list-style: none;
  font-size: 20px;
  text-align: center;
`

export const List = styled.li`
  margin-top: 20px;
`