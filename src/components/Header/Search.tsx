import React, {ChangeEvent, useCallback} from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {Actions, updateQuery} from '../../redux/companies/action/creators'
import colors from '../../assets/colors'
import Media from '../../utils/media'

const Container = styled.div`
  display: flex;
  ${Media({
  flex: ['1', '3'],
  width: ["100%", '320px'],
})}
`
const TextInput = styled.input`
  ${Media({
  marginLeft: ['20px', '10px'],
  marginRight: ['20px', null],
  width: ["100%", '320px'],
})}
  box-sizing: border-box;
  border: 2px solid ${colors.lightGrey};
  border-radius: 10px;
  font-size: 16px;
  background-color: ${colors.white};
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px;
`

const Search: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const onChangeQuery = useCallback((event: ChangeEvent<HTMLInputElement>): Actions => {
      return dispatch(updateQuery(event.target.value))
    },
    [dispatch]
  )
  return (
    <Container>
      <TextInput onChange={onChangeQuery} placeholder="Search"/>
    </Container>
  )
}

export default Search;
