import React, { Component } from 'react';
import axios from 'axios';

export const ContactContext = React.createContext();
export const ContactConsumer = ContactContext.Consumer;

class ContactProvider extends Component {
  state = { contact: {
    address: '123 street',
    email: 'apples@apple.com',
    phone: '123-123-1234', 
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768741.4841754775!2d-113.04034005926903!3d41.18042629164514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875335b1dff77dc7%3A0xe4f87e4c6ef796fb!2sGreat%20Salt%20Lake!5e0!3m2!1sen!2sus!4v1595539908724!5m2!1sen!2sus",
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