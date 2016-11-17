import { combineReducers } from 'redux'
import adminReducer from './adminReducer'
import userReducer from './userReducer'
import questionnaireReducer from './questionnaireReducer'
import allQuestionnairesReducer from './allQuestionnairesReducer'
import currentViewReducer from './currentViewReducer'


// assign keys to our reducer return values
const reducers = {
  adminData: adminReducer,
  userData: userReducer,
  questionnaireDisplayData: questionnaireReducer,
  questionnaireListData: allQuestionnairesReducer,
  currentView: currentViewReducer
}

// product a rootReducer that will be listening for all action types
const rootReducer = combineReducers(reducers)

export default rootReducer
