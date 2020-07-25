import React, { Component } from 'react';
import axios from 'axios';

export const ApptContext = React.createContext();
export const ApptConsumer = ApptContext.Consumer;

class ApptProvider extends Component {
  state = { appts: [] };

  getAllAppts = (id) => {
    axios.get(`/api/business/${id}/appts`)
      .then( res => {
        this.setState({ appts: res.data })
      })
      .catch( err => console.log(err) )
  }

  addAppt= (id, appointment) => {
    axios.post(`/api/business/${id}/appts`, { appointment } )
      .then( res => {
        const { appts } = this.state
        this.setState({ appts: [ ...appts, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  updateAppt = (id, appointment, history) => {
    axios.put(`/api/business/${id}/appts`, { appointment } )
    .then( res => {
      const appts = this.state.appts.map( a => {
        if (a.id === id) {
          return res.data
        }
        return a
      })
      this.setState({ appts })
      history.push(`${id}/admin-dash`)
    })
    .catch( err => console.log(err) )
  }

  deleteAppt = (id, history) => {
    const { appts } = this.state
    this.setState({ appts: appts.filter( a => a.id !== id )})
    history.push(`${id}/admin-dash`)
  }
  
  render() {
    return (
      <ApptContext.Provider value={{
        ...this.state,
        getAllAppts: this.getAllAppts,
        addAppt: this.addAppt,
        updateAppt: this.updateAppt,
        deleteAppt: this.deleteAppt,
      }}>
        { this.props.children }
      </ApptContext.Provider>
    )
  }
};

export default ApptProvider;