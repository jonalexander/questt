import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import fetchCurrentUser from '../../actions/fetchCurrentUser'
import fetchAllQuestionnaires from '../../actions/fetchAllQuestionnaires'
import fetchAdmin from '../../actions/fetchAdmin'
import addCurrentView from '../../actions/addCurrentView'
import { userLogin, adminLogin } from '../../assets/ViewConstants'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {emailFormValue: ''}
  }


  render() {
    var viewer = this.props.view.split('L')[0].charAt(0).toUpperCase() + this.props.view.split('L')[0].slice(1)

    return(
      <div id="login-form">

        <div> { `${viewer} Login` } </div>

        <form className="landing-form"
              onSubmit={this.handleSubmit.bind(this)}
              >
          <input type="text"
                 className="landing-form-input"
                 id="landing-form-email"
                 placeholder="email"
                 onChange={this.handleEmailFormChange.bind(this)}
                 />
         <input type="password"
                className="landing-form-input"
                id="landing-form-password"
                placeholder="password"
                />
          <input type="submit"
                 className="submit"
                 hidden="true"
                 />
        </form>

      </div>
    )
  }


  handleEmailFormChange(event) {
    // update local state for form value -- only concerned w/ email in this app
    this.setState({emailFormValue: event.target.value})
  }


  handleSubmit(event) {
    // form submission will hit API endpoint for either user or admin
    event.preventDefault()

    // set view in Store
    this.props.addCurrentView(this.props.view)

    // hit proper action creator to populate Store
    if (this.props.view === userLogin) {
      // return user data & all questionnaires
      this.props.fetchCurrentUser(this.state.emailFormValue)
      .then( (response) => {
        // also fetch the questionnaire index for the user to browse
        this.props.fetchAllQuestionnaires().then( ()=> {
          // change router using react-router
          const userId = response.payload.user.id
          browserHistory.push(`/users/${userId}`)
        })
      })
    } else if (this.props.view === adminLogin) {
      this.props.fetchAdmin(this.state.emailFormValue)
      .then( (response) => {
        // change router using react-router
        const adminId = response.payload.admin.id
        browserHistory.push(`/admins/${adminId}`)
      })
    }
  }
  //
}

const ConnectedLoginForm = connect(null, mapDispatchToProps)(LoginForm)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
          fetchCurrentUser,
          fetchAdmin,
          fetchAllQuestionnaires,
          addCurrentView
          }, dispatch)
}

export default ConnectedLoginForm
