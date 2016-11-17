import axios from 'axios';

export default function addQuestionnaire(data) {
  // data = Object {admin_id: 1, name: "soccer", questions: Object}
  return axios.post(`http://localhost:3000/api/v1/questionnaires`, {
    questionnaire: {
      admin_id: data.admin_id,
      name: data.name,
      questions: data.questions
    }
  })
  .then( (response) => {
    return {
      type: 'ADD_ADMIN_QUESTIONNAIRE',
      // payload will be entire admin block
      payload: response.data
    }
  })
}
