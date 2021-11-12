import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import colors from '../assets/colors'
import {useSelector} from 'react-redux'
import {selectCompanies, selectQueries} from '../redux/companies/selectors'
import './CompaniesMobileMenu.css'
import Media from '../utils/media'
import Logo from "./Header/Logo";


const ShipmentList = styled.li`
  color: ${colors.greyFont};
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  margin: 0 0 0 20px;
`

const Container = styled.div`
  ${Media({
    display: ['contents', 'none'],
  })}
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
  padding: 8px 20px;
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

const CompaniesMobileMenu: React.FunctionComponent = () => {
  const companies = useSelector(selectCompanies)
  const query = useSelector(selectQueries)
  return (
    <Container>
      <header>
        <input className='burg' id="burger" type="checkbox"/>
        <label htmlFor="burger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </label>
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <ShipmentList>SHIPMENT LIST</ShipmentList>
      {companies
        .filter(company => company.name.toLowerCase().includes(query.toLowerCase()))
        .map(({id, name}) => (
          <li key={id}>
            <StyledLink to={`/companies/${id}`}>{name}</StyledLink>
          </li>
        ))}
        </nav>
      </header>
    </Container>
  )
}

export default CompaniesMobileMenu;
