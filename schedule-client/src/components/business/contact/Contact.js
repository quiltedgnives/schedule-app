import React, { Component } from 'react';
import { ContactConsumer } from '../../../providers/ContactProvider';
import BContact from './BContact';
import { ContactHeader } from '../../../styled-components/homeStyles';

class Contact extends Component {
  componentDidMount() {
    const { getContact, match } = this.props
    getContact(match.params.business_id)
  }

  render() {
    const { contact, history, contactSubmit, match } = this.props
    return(
      <>
        <ContactHeader>Contact Us!</ContactHeader>
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