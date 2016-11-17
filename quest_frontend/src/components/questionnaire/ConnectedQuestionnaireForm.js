import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import addQuestionnaire from '../../actions/addQuestionnaire'

class QuestionnaireForm extends Component {

  constructor() {
    super()
    this.state = {
      inputCount: 1,
      questions: {},
      name: ''
    }
  }

  displayInputFields() {
    var inputCount = this.state.inputCount
    var inputTags = []

    for (var i = 1; i <= inputCount; i++) {
      inputTags.push(
        <div>
          <label>
            {`question #${i}`}
          </label>
          <input type="text"
                 id={i}
                 className="questionnaire-form-input"
                 onChange={this.handleQuestionFormValueChanges.bind(this)}
                 />
        </div>
      )
    }

    return inputTags
  }


  handleFormInputIncrease(event) {
    event.preventDefault()
    this.setState( {inputCount: this.state.inputCount + 1})
  }

  handleNameFormValueChange(event) {
    var name = event.target.value
    this.setState( {name: name} )
    console.log('state.name= ' + this.state.name)
  }

  handleQuestionFormValueChanges(event) {
    var returnObj = this.state.questions
    returnObj[parseInt(event.target.id)] = event.target.value
    this.setState( {questions: returnObj} )
  }


  handleSubmit(event) {
    event.preventDefault()
    var name = this.state.name
    var adminId = this.props.adminData.adminData.admin.id
    var questions = this.state.questions

    this.props.addQuestionnaire(
      {
        admin_id: adminId,
        name: name,
        questions: questions
      }
    ).then( () => {
      browserHistory.push(`/admins/${adminId}`)
    })

  }


  render() {
    return(
      <div id="new-questionnaire-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> questionnaire name </label>
          <input type="text"
                 id="questionnaire-name"
                 className="questionnaire-form-input"
                 onChange={this.handleNameFormValueChange.bind(this)}
                 />

          { this.displayInputFields() }

          <a href="" onClick={ this.handleFormInputIncrease.bind(this)}> +add question </a>
          <input type="submit"
                 className="submit"
                 />
        </form>

      </div>
    )
  }

}


const ConnectedQuestionnaireForm= connect(mapStateToProps, mapDispatchToProps)(QuestionnaireForm)

function mapStateToProps(state) {
  return { adminData: state.adminData}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
          addQuestionnaire
          }, dispatch)
}

export default ConnectedQuestionnaireForm
