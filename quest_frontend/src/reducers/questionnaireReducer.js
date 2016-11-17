export default function questionnaireReducer(state = {questionnaireDisplayData: []}, action) {

  switch(action.type) {
    case 'FETCH_QUESTIONNAIRE':
      return Object.assign({}, state, {questionnaireDisplayData: action.payload})
    default:
      return state
  }
}
