import React, { Component } from 'react'
import { userLogin, userReg, adminLogin, adminReg } from '../../assets/ViewConstants'

class LandingFooterLink extends Component {

  render() {
    return(
      <div className="landing-footer-link"
           onClick={this.handleClick.bind(this)}
           >

        { this.displayLink(this.props.type, this.props.view) }

      </div>
    )
  }


  handleClick(event) {
    event.preventDefault()
    this.props.handleViewChange(event, this.props.type)
  }


  displayLink(type, view) {

    switch(type) {
      case userLogin:
      return (view !== userLogin
                       ? <a href=""> User Login </a>
                       : '')

      case adminLogin:
      return (view !== adminLogin
                       ? <a href=""> Admin Login </a>
                       : '')

      default:
      return ''
    }

  }
  //
}

export default LandingFooterLink

//
// const adminLoginLink = this.props.view !== adminLogin
//                        ? <div className="landing-footer-link"> Login </div>
//                        : ''
// const adminRegLink = this.props.view !== adminReg
//                       ? <div className="landing-footer-link"> Register</div>
//                       : ''
// const userLoginLink = this.props.view !== userLogin
//                       ? <div className="landing-footer-link"> Login </div>
//                       : ''
// const userRegLink = this.props.view !== userReg
//                     ? <div className="landing-footer-link"> Not a user? Sign up here. </div>
//                     : ''

//
// displayRegistrationForm(view) {
//   switch(view) {
//     case userLogin:
//     return (<div> New User Registration </div>)
//
//     case adminReg:
//     return 'New Admin Registration'
//
//     default:
//     return ''
//   }
