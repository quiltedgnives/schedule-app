import React, { Component } from 'react';
import axios from 'axios';

export const ContactContext = React.createContext();
export const ContactConsumer = ContactContext.Consumer;

class ContactProvider extends Component {
  state = { contact: {
    address: '1033 E. 2100 S., Suite 200 Salt Lake City, UT 84106',
    email: 'solasalonstudios.com',
    phone: '801-901-3576', 
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6486064755286!2d-111.86358468448434!3d40.72575144471104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528aa6b86a5103%3A0xf2a29d21befee015!2sSola%20Salon%20Studios!5e0!3m2!1sen!2sus!4v1596754128535!5m2!1sen!2sus",
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