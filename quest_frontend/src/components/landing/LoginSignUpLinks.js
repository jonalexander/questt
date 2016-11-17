import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'

class LoginSignUpLinks extends Component {
  constructor() {
    super()
    this.state = {visible: true}
  }

  handleClick() {
    this.setState( {visible: !this.state.visible} )
  }

  displayLinks() {
    if (this.state.visible === true) {
      return(
        <div>
          <Link to="/login" onClick={this.handleClick.bind(this)}> Login </Link>
          <div/>
          <Link to="/login" onClick={this.handleClick.bind(this)}> Sign Up </Link>
        </div>
      )
    } else {
      return ''
    }
  }

  render() {
    return(
      <div>
      { this.displayLinks() }
      </div>
    )
  }
}


export default LoginSignUpLinks
