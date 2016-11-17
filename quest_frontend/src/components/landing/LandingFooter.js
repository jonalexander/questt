import React, { Component } from 'react'
import { userLogin, adminLogin } from '../../assets/ViewConstants'
import LandingFooterLink from './LandingFooterLink'

class LandingFooter extends Component {
  // handleViewChange(event, newView) is passed down as prop from App

  render() {
    // produce series of links that toggle the forms
    return(
      <div id="landing-footer">
        <LandingFooterLink type={userLogin}
                           view={this.props.view}
                           handleViewChange={this.props.handleViewChange}
                           />
        <LandingFooterLink type={adminLogin}
                           view={this.props.view}
                           handleViewChange={this.props.handleViewChange}
                           />
    </div>
    )
  }
}

export default LandingFooter
