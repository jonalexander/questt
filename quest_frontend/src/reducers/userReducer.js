export default function userReducer(state = {userData: []}, action) {
  switch(action.type) {
    case 'FETCH_CURRENT_USER':
      return Object.assign({}, state, {userData: action.payload})
    default:
      return state
  }
}
