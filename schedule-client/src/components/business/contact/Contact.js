import React, { Component } from 'react';
import { ContactConsumer } from '../../../providers/ContactProvider';
import BContact from './BContact';

class Contact extends Component {
  componentDidMount() {
    const { getContact, match } = this.props
    getContact(match.params.business_id)
  }

  render() {
    const { contact, history, contactSubmit } = this.props
    return(
      <>
        <BContact {...contact} history={history} contactSubmit={contactSubmit} />
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