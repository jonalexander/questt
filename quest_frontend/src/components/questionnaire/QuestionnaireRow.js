import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchQuestionnaire from '../../actions/fetchQuestionnaire'
import QuestionnaireUserDataRow from './QuestionnaireUserDataRow'

class QuestionnaireRow extends Component {

  render() {
    return(
        <div>
          { this.displayRow() }
        </div>
    )
  }


  displayRow() {
    const view = this.props.type
    // houses logic to determine what sort of row to display based of the type prop
    switch(view) {
      case 'userLogin':
        return this.displayUserView()
      case 'adminLogin':
        return this.displayAdminView()
      default:
        return ''
    }
  }

  // generates a simple Link for each Questionnaire that takes user to questionnaire #show view
  displayUserView() {
    const questionnaire = this.props.questionnaire

    return(
      <div className="questionnaire-row">
        <Link to={`/questionnaires/${questionnaire.id}`}
              onClick={ () => { this.props.fetchQuestionnaire(questionnaire.id) }}
              >
          <h3>
            { questionnaire.attributes.name }
          </h3>
        </Link>
      </div>
    )
  }


  // generates a more dynamic object that includes the questionnaire's users and their user_response data
  displayAdminView() {
    var questionnaire = this.props.questionnaire.questionnaire_obj
    var questions = this.props.questionnaire.questions ? this.props.questionnaire.questions : []
    var users = this.props.questionnaire.users ? this.props.questionnaire.users : []
    var counter = 0

    return(
      <div>
        <div>
          <h3> {questionnaire.name} </h3>
        </div>

        <div>
          { // display questionnaire's questions at the top
            questions.map( (question) => {
              return(
                <div key={counter++}>
                  <li> {`${counter}.`} {question.label} </li>
                </div>
              )
            })
          }
        </div>

        <div>
          { // generate a row for each user who has completed questionnaire
            users.map( (user) => {
              return(
                <QuestionnaireUserDataRow questionnaire={questionnaire}
                                          questions={questions}
                                          user={user}
                                          key={counter++}
                                          />
              )
            })
          }
        </div>
      </div>
    )
  }

}


const ConnectedQuestionnaireRow = connect(null, mapDispatchToProps)(QuestionnaireRow)

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchQuestionnaire}, dispatch )
}

export default ConnectedQuestionnaireRow


/*
this.props.questionnaire ==> Object {id: "1", type: "questionnaires", attributes: Object, relationships: Object}
*/
