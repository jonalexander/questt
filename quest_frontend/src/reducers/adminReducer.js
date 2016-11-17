export default function adminReducer(state = {adminData: []}, action) {
  switch(action.type) {
    case 'ADD_ADMIN':
      return Object.assign({}, state, {adminData: action.payload})
    case 'FETCH_ADMIN':
      return Object.assign({}, state, {adminData: action.payload})
    case 'ADD_ADMIN_QUESTIONNAIRE':
      return Object.assign({}, state, {adminData: action.payload})
    default:
      return state
  }
}
