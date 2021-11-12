import React from 'react'
import {Provider} from 'react-redux'
import './App.css'
import store from './redux'
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import browserHistory from './browserHistory'
import Header from './components/Header'
import getCompanies from './redux/companies/action/getCompanies'
import Companies from "./components/Companies";
import colors from './assets/colors'
import styled from 'styled-components'

const App: React.FunctionComponent = () => (
  <Container>
    <Provider store={store}>
      <Header/>
      <Router history={browserHistory}>
        <Switch>
          <Route path="/companies/:id?" component={Companies}/>
          <Route exact path="/">
            <Redirect to="/companies"/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  </Container>
)

export default App

const Container = styled.div`
  background-color: ${colors.black};
  min-height: 100%;
  height: 100%;
  position: absolute;
  width: 100%;
`

store.dispatch(getCompanies())
