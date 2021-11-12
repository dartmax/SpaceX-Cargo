import {RootState} from '../index'
import Company from '../../interface/Company'


export const selectCompanies = (state: RootState): Company[] => {
  return state.companies.data
}

export const selectQueries = (state: RootState): string => {
  return state.companies.query
}

export const selectCompanyById = (id: string) => (state: RootState): Company | undefined => {
  return state.companies.data.find(company => company.id === id)
}
