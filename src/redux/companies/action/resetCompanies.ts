import {Dispatch} from 'redux'
import companies from '../../../data/companies.json'
import {setCompanies} from './creators'
import {storageDeleteCompanies} from '../../../utils/storage'

export default () => (dispatch: Dispatch): void => {
  storageDeleteCompanies()
  dispatch(setCompanies(companies))
}
