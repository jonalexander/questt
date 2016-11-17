import axios from 'axios';

export default function fetchAdmin(adminEmail) {
  // clean email to send in GET request
  var cleanEmail = adminEmail.split(".").join("&")

  return axios.get(`http://localhost:3000/api/v1/admins/${cleanEmail}`)
  .then( (response) => {
    return {
      type: 'FETCH_ADMIN',
      payload: response.data
    }
  })
}
