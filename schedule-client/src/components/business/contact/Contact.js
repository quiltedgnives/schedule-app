import React, { Component } from 'react';
import { ContactConsumer } from '../../../providers/ContactProvider';
import BContact from './BContact';
import { Header } from 'semantic-ui-react';

class Contact extends Component {
  componentDidMount() {
    const { getContact, match } = this.props
    getContact(match.params.business_id)
  }

  render() {
    const { contact, history, contactSubmit, match } = this.props
    return(
      <>
        <Header as='h1' textAlign='center'>Contact Us!</Header>
        <BContact 
          {...contact} 
          history={history} 
          contactSubmit={contactSubmit} 
          id={match.params.business_id} 
        />
      </>
    )
  }
}

const ConnectedContact = (props) => (
  <ContactConsumer>
    { values => <Contact {...props} {...values} /> }
  </ContactConsumer>
)

export default ConnectedContact;