import axios from 'axios';

export default function fetchAllQuestionnaires() {
  return axios.get('http://localhost:3000/api/v1/questionnaires')
  .then( (response) => {
    return {
      type: 'FETCH_ALL_QUESTIONNAIRES',
      payload: response.data.data
    }
  })
}
