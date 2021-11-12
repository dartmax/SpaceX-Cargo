import Company from '../../../interface/Company'
import Types from './types'

export type Actions =
  | { type: Types.SET_COMPANIES; companies: Company[] }
  | { type: Types.UPDATE_BOXES; id: string; boxes: string }
  | { type: Types.UPDATE_QUERY; query: string }

export const setCompanies = (companies: Company[]): Actions => ({
  type: Types.SET_COMPANIES,
  companies: companies,
})
export const updateQuery = (query: string): Actions => ({
  type: Types.UPDATE_QUERY,
  query: query,
})
export const updateBoxes = (id: string, boxes: string): Actions => ({
  type: Types.UPDATE_BOXES,
  id: id,
  boxes: boxes,
})
