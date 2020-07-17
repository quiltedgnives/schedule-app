import React, { Component } from 'react'
import { AuthConsumer } from "../providers/AuthProvider";
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout } } = this.props;
    
    if (user) {
      return (
        <>
          <li
            onClick={ () => handleLogout(this.props.history) }
          >
            Logout
          </li>
        </>
      )
    } else {
      return (
        <>
          <Link to='/login'>
            <li>Login</li>
          </Link>
          <Link to='/register'>
            <li>Register</li>
          </Link>
        </>
      )
    }
  }
  
  render() {
    return (
      <div>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
            { this.rightNavItems() }
        </ul>
      </div>
    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navbar { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar);