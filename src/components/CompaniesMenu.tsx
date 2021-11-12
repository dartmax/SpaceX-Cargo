import {Link} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors'
import {useSelector} from 'react-redux'
import {selectCompanies, selectQueries} from '../redux/companies/selectors'


const ShipmentList = styled.div`
  color: ${colors.greyFont};
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  margin: 0 0 0 12px;
`

const Container = styled.ul`
  display: flex;
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${colors.black};
  height: 100%;
  flex-direction: column;
  overflow: auto;
`

const StyledLink = styled(Link)`
  display: block;
  font-family: Roboto, sans-serif;
  color: ${colors.greyFont};
  background-color: ${colors.black};
  padding: 8px 16px;
  text-decoration: none;
  font-size: 16px;
  
  line-height: 24px;
  margin: 6px 0 6px 0;
  height: 80%;

  &:hover {
    background: linear-gradient(90deg, rgba(45, 48, 56, 0) 22.92%, #2D3038 100%);
    color: ${colors.white};
    width: 80%;
    border-radius: 12px;
    margin: 6px 0 6px 0;
    height: 50%;
  }

  &:focus {
    background: linear-gradient(90deg, rgba(45, 48, 56, 0) 22.92%, #2D3038 100%);
    color: ${colors.white};
    width: 80%;
    border-radius: 12px;
    margin: 6px 0 6px 0;
    height: 50%;
  }
`

const CompaniesMenu: React.FunctionComponent = () => {
  const companies = useSelector(selectCompanies)
  const query = useSelector(selectQueries)
  return (
    <Container>
      <ShipmentList>SHIPMENT LIST</ShipmentList>
      {companies
        .filter(company => company.name.toLowerCase().includes(query.toLowerCase()))
        .map(({id, name}) => (
          <li key={id}>
            <StyledLink to={`/companies/${id}`}>{name}</StyledLink>
          </li>
        ))}
    </Container>
  )
}

export default CompaniesMenu

