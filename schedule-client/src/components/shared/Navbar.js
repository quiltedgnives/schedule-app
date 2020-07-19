import React, { Component } from 'react'
import { AuthConsumer } from "../../providers/AuthProvider";
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout }, location } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={this.props.location.pathname === '/'}
          />
        </Link>
          { this.rightNavItems() }
      </Menu>
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