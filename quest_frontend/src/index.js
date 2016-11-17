import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import rootReducer from './reducers/rootReducer'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import ConnectedQuestionnaireList from './components/questionnaire/ConnectedQuestionnaireList'
import ConnectedUserQuestionnaireDisplay from './components/questionnaire/ConnectedUserQuestionnaireDisplay'
import ConnectedQuestionnaireForm from './components/questionnaire/ConnectedQuestionnaireForm'
import LandingContainer from './components/landing/LandingContainer'
import './assets/App.css'

const storeWithMiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={storeWithMiddleware}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Router path="/login" component={LandingContainer}/>
          <Route path="users/:userId" component={ConnectedQuestionnaireList}/>
          <Route path="admins/:adminId" component={ConnectedQuestionnaireList}/>
          <Route path="questionnaires/new" component={ConnectedQuestionnaireForm}/>
          <Route path="questionnaires/:questionnaireId" component={ConnectedUserQuestionnaireDisplay}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('root')
);
