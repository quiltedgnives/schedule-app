import React, { Component } from 'react';
import { Button, Form, Segment, Header, Grid } from 'semantic-ui-react';
import { ContactConsumer } from '../../providers/ContactProvider';

class Help extends Component {
  state = { name: '', email: '', message: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleHelp(this.state, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, message } = this.state;
    return(
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Need Help? Send Us A Message
          </Header>
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
                icon='user' 
                iconPosition='left' 
              />
              <Form.TextArea
                label='Message:'
                required
                name='message'
                value={message}
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

const ConnectedHelp = (props) => (
  <ContactConsumer>
    { values => <Help {...props} {...values}/>}
  </ContactConsumer>
)

export default ConnectedHelp;