import React, { Component } from 'react'
import ConnectedQuestionnaireList from '../questionnaire/ConnectedQuestionnaireList'

class MainContainer extends Component {
  render() {
    return(
      <div className="container">
          <h1> quest. </h1>
          <h2> questionnaires </h2>

        { this.props.children }

      </div>
    )
  }
}

export default MainContainer
