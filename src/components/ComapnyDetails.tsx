import {useParams} from 'react-router-dom'
import React, {ChangeEvent, useCallback} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {selectCompanyById} from '../redux/companies/selectors'
import {calculateCargoBays} from '../utils/calculations'
import {Actions, updateBoxes} from '../redux/companies/action/creators'
import colors from '../assets/colors'
import Media from '../utils/media'

interface ParamType {
  id: string
}

const Container = styled.div`
  background-color: ${colors.black};
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 0 30px 0 30px;
  position: relative;
  height: 90%;

  & > div {
    border-radius: 20px;
    background: linear-gradient(124.01deg, #2D3038 0%, rgba(45, 48, 56, 0) 100%);
    padding: 20px;
    height: 90%;

  }

  & span {
    color: ${colors.white};
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.lightGrey};
  }

  & h1 {
    margin-top: 5px;
    margin-bottom: 5px;
    color: ${colors.white};
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 74px;
    ${Media({
  fontSize: ["28px", '64px'],
})}
  }

  & h2 {
    color: ${colors.greyFont};
    font-family: Roboto, sans-serif;
    margin-bottom: 5px;
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 44px;
    ${Media({
  textAlign: ["center", 'left'],
  fontSize: ["20px", '34px'],
})}
  }

  & h3 {
    color: ${colors.white};
    font-family: Roboto, sans-serif;
    margin-bottom: 5px;
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 44px;
    ${Media({
  textAlign: ["center", 'left'],
  fontSize: ["44px", '60px'],
})}
  }
`
const TextInput = styled.input`
  ${Media({
  width: ["100%", '320px'],
})}
  display: block;
  box-sizing: border-box;
  border: 2px solid ${colors.lightGrey};
  border-radius: 10px;
  font-size: 16px;
  background-color: ${colors.white};
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px;
`

const CompaniesDetails: React.FunctionComponent = () => {
  const {id} = useParams<ParamType>()
  const dispatch = useDispatch()
  const company = useSelector(selectCompanyById(id))
  const onChangeBoxesValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>): Actions => dispatch(updateBoxes(id, event.target.value)),
    [dispatch, id]
  )
  return (
    <Container>
      {company ? (
        <>
          <div>
            <h1>{company.name}</h1>
            <span>{company.email}</span>
            <br/>
            <br/>
            <br/>
            <span>
              CARGO BOXES
            </span>
            <TextInput value={company.boxes || ''} onChange={onChangeBoxesValue}/>
            <h2>Number of required cargo bays</h2>
            <h3>{isNaN(calculateCargoBays(company.boxes)) ? '🔴 Please enter number. ex. - (9.2, 4.6 ...)' : calculateCargoBays(company.boxes)}</h3>
          </div>
        </>
      ) : (
        <div>
          <h1>Please select a company</h1>
        </div>
      )}
    </Container>
  )
}

export default CompaniesDetails
