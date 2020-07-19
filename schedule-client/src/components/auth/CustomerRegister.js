import React, { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom/';

class CustomerRegister extends Component {
  state = { email: '', password: '', passwordConfirmation: '' };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister }, history } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  render() {
    const { email, password, passwordConfirmation } = this.state;
    
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Register
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
              <Form.Input
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                placeholder='Password Confirmation'
                type='password'
                onChange={this.handleChange}
                fluid
                icon='lock'
                iconPosition='left'
              />
              <Button primary type='submit' fluid size='large'>Register</Button>
            </Segment>
          </Form>
          <Message>
            Already A User? <Link to='/login'>Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default class ConnectedRegister extends Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <CustomerRegister { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}