import axios from 'axios';

export default function fetchQuestionnaire(questionnaire_id) {
  return axios.get(`http://localhost:3000/api/v1/questionnaires/${questionnaire_id}`)
  .then( (response) => {

    return {
      type: 'FETCH_QUESTIONNAIRE',
      payload: response.data
    }
  })
}
