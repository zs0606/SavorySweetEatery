import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Contact extends Component {
  constructor (prop) {
    super(prop)
    this.state = {
      firstName: '',
      laseName: '',
      email: '',
      phone: '',
      content: ''
    }
  }

  render () {
    return (<div>
            <h1>This is a form</h1>
            </div>)
  }
}

export default withRouter(connect()(Contact))
//export default Contact
