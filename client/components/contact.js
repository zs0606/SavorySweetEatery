import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      laseName: '',
      email: '',
      phone: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }

  render () {
    return (<form>
            <label htmlFor=''>First Name:</label>
            <input name='firstname' type='text' onChange={this.handleChange} />
            <label htmlFor=''>Last Name:</label>
            <input name='' type='' onChange={this.handleChange} />
            <label htmlFor=''>Phone Number:</label>
            <input name='' type='' onChange={this.handleChange} />
            <label htmlFor=''>Date of Event:</label>
            <input name='' type='' onChange={this.handleChange} />
            <label htmlFor=''>Time of Event:</label>
            <input name='' type='' onChange={this.handleChange} />
            <label htmlFor=''>NUmber of Guests:</label>
            <input name='' type='' onChange={this.handleChange} />
            <label htmlFor=''>Type of Event:</label>
            <input name='' type='' onChange={this.handleChange} />
            <label htmlFor=''>Venue/Location:</label>
            <input name='' type='' onChange={this.handleChange} />
            <button>Submit</button>
            </form>)
  }
}

export default withRouter(connect()(Contact))
//export default Contact
