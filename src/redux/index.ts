import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import companies, {State as CompaniesRootState, initialState as companiesInitialState} from './companies'

export interface RootState {
  companies: CompaniesRootState
}

export const initialState: RootState = {
  companies: companiesInitialState,
}

const rootReducer = combineReducers({
  companies,
})


const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose

const store = createStore<RootState, any, any, any>(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, thunk)))

export default store
