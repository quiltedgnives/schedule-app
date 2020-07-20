import React, { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom/';

class Login extends Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.auth.handleLogin(this.state, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Log-in
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input
                autoFocus
                required         
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
                fluid 
                icon='user' 
                iconPosition='left' 
              />
              <Form.Input
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
                fluid
                icon='lock'
                iconPosition='left'
              />
              <Button primary type='submit' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/register'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default class ConnectedLogin extends Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}