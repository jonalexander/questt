import React, { Component } from 'react';
import LandingFooter from './LandingFooter'
import ConnectedLoginForm from './ConnectedLoginForm'
import { userLogin } from '../../assets/ViewConstants'
import '../../assets/App.css';

class LandingContainer extends Component {
  constructor() {
    super()
    this.state = {view: userLogin}
    this.handleViewChange = this.handleViewChange.bind(this)
    // options - userReg, userLogin, adminReg, adminLogin
    }


  render() {
    return (
      <div id='landing-wrapper'>
        <ConnectedLoginForm view={this.state.view}/>
        <LandingFooter view={this.state.view}
                       handleViewChange={this.handleViewChange.bind(this)}/>
      </div>
    )
  }


  // handles the toggle between registraion and login views for both user & admin
  handleViewChange(event, newView) {
    event.preventDefault()
    this.setState( {view: newView} )
  }
  //
}

export default LandingContainer;
