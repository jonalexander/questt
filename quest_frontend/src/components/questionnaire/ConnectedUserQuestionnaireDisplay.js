import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

class UserQuestionnaireDisplay extends Component {
  // not using a reducer to POST a new questionnaire submission from a user because
  // QuestionnaireDisplay can handle views for either Admin or User
  // Admin displays all of the questionnaire's data including responses by users
  // Users displays an empty form for submission
  constructor() {
    super()
    this.state = {formValues: {}}
    this.submitQuestionnaire = this.submitQuestionnaire.bind(this)
  }


  render() {
    const questionnaire = this.props.questionnaireDisplayData.questionnaireDisplayData.questionnaire
    return(
      <div>
          <h3> { questionnaire ? questionnaire.name : '' } </h3>
          <form id="questionnaire-form"
                onSubmit={this.submitQuestionnaire.bind(this)}
                ref="form">

            { this.displayQuestionsAndInputs() }

            <input type="submit"
                   className="submit"
                   />
          </form>
      </div>

    )
  }


  displayQuestionsAndInputs() {
    console.log('display questions and inputs')
    const questions = this.props.questionnaireDisplayData.questionnaireDisplayData.questions
    var counter = 0
    // spit out a label and form input for each question
    if (questions) {
      return questions.map( (question) => {
        return(
          <div key={counter++}>
            <label key={counter++}> {question.label} </label>
            <input type="text"
                   id={question.id}
                   key={counter++}
                   onChange={this.handleInputChange.bind(this)}
                   />
          </div>
        )
      })
    }
  }


  // dynamically namespace local state to hold form values
  handleInputChange(event) {
    var returnObj = this.state.formValues

    returnObj[parseInt(event.target.id)] = {
      user_id:this.props.userData.userData.user.id,
      value: event.target.value,
      questionnaire_id: this.props.questionnaireDisplayData.questionnaireDisplayData.questionnaire.id,
      question_id: parseInt(event.target.id)
      }

    this.setState({formValues: returnObj})
  }


  submitQuestionnaire(event, counter) {
    event.preventDefault()
    const userId = this.props.userData.userData.user.id
    const questionnaireId = this.props.questionnaireDisplayData.questionnaireDisplayData.questionnaire.id

    var formattedFormValues = this.formatValues(this.state.formValues)
    this.postRequest(formattedFormValues, userId)
  }


  // clean up data for post request
  formatValues(formValuesObj) {
    var formattedValues = []

    Object.keys(formValuesObj).map( (key) => {
      formattedValues.push(formValuesObj[key])
    })

    return formattedValues
  }


  // post request for User submission of questionnaire
  postRequest(data, userId) {
    axios.post(`http://localhost:3000/api/v1/user_responses/`, {user_responses: data})
     .then( (response) => {console.log(response)} )
     .then( () => {browserHistory.push(`/users/${userId}`)} )
  }

}


const ConnectedUserQuestionnaireDisplay = connect(mapStateToProps, null)(UserQuestionnaireDisplay)

function mapStateToProps(state) {
  return {
          questionnaireDisplayData: state.questionnaireDisplayData,
          userData: state.userData,
          adminData: state.adminData
          }
}

export default ConnectedUserQuestionnaireDisplay


  // // collect and clean up the form values for the post request
  // formatFormValues(userId, questionnaireId) {
  //   // count number of form inputs, iterate over them all and package their values for api endpoint
  //   // var formValuesCount = event.target.length
  //   // var formattedFormValues = []
  //   //
  //   // for (var i = 0; i < formValuesCount - 1; i++) {
  //   //   formattedFormValues.push({
  //   //     user_id: userId,
  //   //     question_id: event.target[i].id,
  //   //     questionnaire_id: questionnaireId,
  //   //     value: event.target[i].value
  //   //   })
  //   // }
  //
  //   var formattedFormValues = []
  //
  // //   for (var response in this.state.formValues) {
  // //
  // //   }
  //
  //   // pass this block to postRequest function
  //   return formattedFormValues
  // }
