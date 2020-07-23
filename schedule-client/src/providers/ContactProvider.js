import React, { Component } from 'react';
import axios from 'axios';

export const ContactContext = React.createContext();
export const ContactConsumer = ContactContext.Consumer;

class ContactProvider extends Component {
  state = { contact: {
    address: '',
    email: '',
    phone: '', 
    map: '',
  }, contacts: [] }

  handleHelp = (help, history) => {
    axios.post("/api/help", help)
      .then( res => {
        history.push("/thank-you");
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  getContact = (id) => {
    axios.get(`/api/contact/${id}`)
      .then( res => {
        this.setState({ contact: res.data })
      })
      .catch( res => {
        console.log(res);
      })
  }

  getContacts = (id) => {
    axios.get(`/api/contacts/${id}`)
      .then( res => {
        this.setState({ contacts: res.data })
      })
      .catch( res => {
        console.log(res);
      })
  }

  contactSubmit = (id, contact, history) => {
    axios.post(`/api/contact/${id}`, contact)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push(`/${id}/home`);
      })
    .catch( res => {
      console.log(res);
    })
  }
  
  render() {
    return (
      <ContactContext.Provider value={{
        ...this.state,
        handleHelp: this.handleHelp,
        getContact: this.getContact,
        getContacts: this.getContacts,
        contactSubmit: this.contactSubmit,
      }}>
        { this.props.children }
      </ContactContext.Provider>
    )
  }
};

export default ContactProvider;