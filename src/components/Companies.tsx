import CompaniesMenu from './CompaniesMenu'
import CompaniesMobileMenu from './CompaniesMobileMenu'
import CompaniesDetails from './ComapnyDetails'
import styled from 'styled-components'
import React from 'react'
import colors from '../assets/colors'
import Media from '../utils/media'

const Container = styled.div`
  background-color: ${colors.black};
  display: flex;
  height: 90%;
  flex-direction: row;
  ul:first-child {
    ${Media({
      display: ['none', 'flex'],
    })}
  div:last-child {
    ${Media({
      display: ['flex', 'none'],
    })}
  }
`


const Companies: React.FunctionComponent = () => {
  return (
    <Container>
      <CompaniesMenu/>
      <CompaniesDetails/>
      <CompaniesMobileMenu/>
    </Container>
  )
}

export default Companies

