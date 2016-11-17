export default function allQuestionnairesReducer(state = {questionnaireListData: []}, action) {
  switch(action.type) {
    case 'FETCH_ALL_QUESTIONNAIRES':
      return Object.assign({}, state, {questionnaireListData: action.payload})
    default:
      return state
  }
}
