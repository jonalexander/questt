export default function currentViewReducer(state = {currentView: ''}, action) {
  switch(action.type) {
    case 'ADD_CURRENT_VIEW':
      return Object.assign({}, state, {currentView: action.payload})
    default:
      return state
  }
}
