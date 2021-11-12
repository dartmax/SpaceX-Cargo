import React from 'react'
import Logo from './Logo'
import Search from './Search'
import styled from 'styled-components'
import colors from '../../assets/colors'
import Media from '../../utils/media'

const Container = styled.div`
  ${Media({
  flexDirection: ['column', 'row'],
})}
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: ${colors.black};
`

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo/>
      <Search/>
    </Container>
  )
}

export default Header

