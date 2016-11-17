import axios from 'axios';

export default function fetchCurrentUser(userEmail) {
  //clean email to send in HTTP request
  var cleanEmail = userEmail.split(".").join("&")

  return axios.get(`http://localhost:3000/api/v1/users/${cleanEmail}`, {})
  .then( (response) => {
    return {
      type: 'FETCH_CURRENT_USER',
      payload: response.data
    }
  })
}
