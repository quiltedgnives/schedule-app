import React, { Component } from 'react';
import axios from 'axios';

export const ContactContext = React.createContext();
export const ContactConsumer = ContactContext.Consumer;

class ContactProvider extends Component {

  handleHelp = (help, history) => {
    axios.post("/api/help", help)
      .then( res => {
        history.push("/thank-you");
      })
    .catch( res => {
      console.log(res);
    })
  }
  
  
  render() {
    return (
      <ContactContext.Provider value={{
        handleHelp: this.handleHelp,
      }}>
        { this.props.children }
      </ContactContext.Provider>
    )
  }
};

export default ContactProvider;