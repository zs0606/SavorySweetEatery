import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>WELCOME TO SAVORY SWEET EATERY</h1>
    <nav>
      <Link to='/home'>HOME</Link>
      <Link to='/menus'>MENUS</Link>
      <Link to='/catering'>CATERING</Link>
      <Link to='/policies'>POLICIES</Link>
      <Link to='/gallery'>GALLERY</Link>
      <Link to='/event_partner'>EVENT PARTNERS</Link>
      <Link to='/contact'>CONTACT US</Link>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
