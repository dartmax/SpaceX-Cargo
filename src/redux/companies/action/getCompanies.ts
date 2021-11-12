import {setCompanies} from './creators'
import {storageGetCompanies} from '../../../utils/storage'
import resetCompanies from './resetCompanies'

const getCompanies = () => (dispatch) => {
  const getData = storageGetCompanies()
  if (getData) {
    const getCompanies = JSON.parse(getData)
    dispatch(setCompanies(getCompanies))
  } else {
    dispatch(resetCompanies())
  }
}

export default getCompanies
