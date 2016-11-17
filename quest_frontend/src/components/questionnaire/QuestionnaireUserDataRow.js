import React, { Component } from 'react'

class QuestionnaireUserDataRow extends Component {

  render() {
    var questionnaireName = this.props.questionnaire.name
    var userName = this.props.user.user_obj.name
    var dateCompleted = this.props.user.user_responses[0]
                        .user_response_obj.created_at.split('T')[0]
    return(
      <div className="questionnaire-user-data-row">
        <li> user: { userName } </li>
        { this.displayResponses() }
        <li> submitted: { dateCompleted } </li>
        <br />
      </div>
    )
  }

  // display the user's responses for given questionnaire
  displayResponses() {
    var responses = this.props.user.user_responses
    var counter = 0

    var responsesOutput = responses.map( (response) => {
      return(
        <div key={counter++}>
          <li> answer: { response.user_response_obj.value } </li>
        </div>
      )
    })
    return responsesOutput
  }




}

export default QuestionnaireUserDataRow
