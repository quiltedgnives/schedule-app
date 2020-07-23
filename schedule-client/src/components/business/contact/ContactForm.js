import React, { Component } from 'react';
import { Button, Form, Segment, Grid } from 'semantic-ui-react';

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
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked textAlign='left'>
              <Form.Input
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
              <Button primary type='submit' fluid size='large'>Send</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ContactForm;