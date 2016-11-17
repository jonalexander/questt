import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import LandingFooter from './components/landing/LandingFooter'
import ConnectedLoginForm from './components/landing/ConnectedLoginForm'
import LoginSignUpLinks from './components/landing/LoginSignUpLinks'
import { userLogin, adminLogin } from './assets/ViewConstants'
import './assets/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {view: userLogin}
    this.handleViewChange = this.handleViewChange.bind(this)
    // options - userReg, userLogin, adminReg, adminLogin
    }

  // handles the toggle between registraion and login views for both user & admin
  handleViewChange(event, newView) {
    event.preventDefault()
    this.setState( {view: newView} )
  }

  render() {
    return (
      <div className="container">
        <h1> quest. </h1>
        <LoginSignUpLinks/>
        { this.props.children }
      </div>
    )
  }
}

export default App;




    // <div id='landing-wrapper'>
    //
    //   <ConnectedLoginForm view={this.state.view}/>
    //   <LandingFooter view={this.state.view}
    //                  handleViewChange={this.handleViewChange.bind(this)}/>
    // </div>
