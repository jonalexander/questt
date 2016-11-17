import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import QuestionnaireRow from './QuestionnaireRow'
import fetchAllQuestionnaires from '../../actions/fetchAllQuestionnaires'

class QuestionnaireList extends Component {
  // QuestionnaireIndex is a reusable component for both a User & Admin
  render() {
      return(
        <div className="questionnaire-index">
          <h2> { this.displayHeader() } </h2>
          { this.displayQuestionnaireRows() }
        </div>
      )
    }

    displayHeader() {
      const currentView = this.props.currentView.currentView

      if (currentView === 'adminLogin') {
        return <Link to='/questionnaires/new'> + add questionnaire </Link>
      } else if (currentView ==='userLogin') {
        return 'browse questionnaires'
      }
    }


  // pass questionnaire data object to function to generate rows
  // QuestinnaireRow contains logic to render rows for both User and Admin views
  displayQuestionnaireRows() {
    const currentView = this.props.currentView.currentView
    var questionnaires = currentView === 'userLogin'
                         ? this.props.questionnaireListData.questionnaireListData
                         : this.props.adminData.adminData.questionnaires
    var counter = 0
    // iterate over each questionnaire in Store and return a questionnaire row
    // check for undefined var for debugging flow, avoid throwing errors
    if (questionnaires) {
      var questionnairesOutput =  questionnaires.map( (questionnaire)=> {
        return (<QuestionnaireRow key={counter++}
                                 questionnaire={questionnaire}
                                 type={currentView}
                                 />
        )
      })
      return questionnairesOutput
    }
  }

}


const ConnectedQuestionnaireList = connect(mapStateToProps, null)(QuestionnaireList)

function mapStateToProps(state) {
  return {
           questionnaireListData: state.questionnaireListData,
           adminData: state.adminData,
           currentView: state.currentView
         }
}

export default ConnectedQuestionnaireList
