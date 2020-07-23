import React, { Component } from 'react';
import { Button, Form, Segment, Grid } from 'semantic-ui-react';
import { ContactFormHead } from '../../../styled-components/homeStyles';
import { Link } from 'react-router-dom';

class ContactForm extends Component {
  state = { name: '', email: '', phone: '', msg: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { contactSubmit, history, id } = this.props
    contactSubmit(id, this.state, history)
  }

  render() {
    const { name, email, phone, msg } = this.state
    return(
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked textAlign='left' style={{ height: '100%' }}>
              <ContactFormHead>Leave us a message!</ContactFormHead>
              <Form.Input
                label='Name:'
                autoFocus
                required         
                name='name'
                value={name}
                placeholder='Full Name'
                onChange={this.handleChange}
                fluid 
                icon='user' 
                iconPosition='left' 
              />
              <Form.Input
                label='Email:'
                required         
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
                fluid 
                icon='mail' 
                iconPosition='left' 
              />
              <Form.Input
                label='Phone:'
                required         
                name='phone'
                value={phone}
                placeholder='phone'
                onChange={this.handleChange}
                fluid 
                icon='phone' 
                iconPosition='left' 
              />
              <Form.TextArea
                label='Message:'
                required
                name='msg'
                value={msg}
                placeholder='Tell us what you need help with'
                onChange={this.handleChange}
                fluid
              />
              <Segment secondary textAlign='center'>
                <Button primary type='submit' size='large'>Send</Button>
                <br />
                <br />
                <Link to='/help'>
                  <Button type='button' size='large'>Need Technical Help?</Button>
                </Link>
              </Segment>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ContactForm;