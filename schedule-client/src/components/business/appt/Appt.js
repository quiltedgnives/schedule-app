import React, { Component } from 'react';
import ApptForm from './ApptForm';

class Appt extends Component {
  state = { appts: [{ 
    dateTime: '',
    worker: '',
    service: '',
    notes: '',
    business_id: 1,
  },], 
  workers: [
    { id: 1, name: 'Syd' },
    { id: 2, name: 'Mike' },
    { id: 3, name: 'Jamie' },
    { id: 4, name: 'Rose' },
  ],};

  addAppt = (id, appointment) => {
    const { appts } = this.state
    this.setState({ appts: [ ...appts, appointment]})
  }

  updateAppt = (id, appointment, history) => {
    const appts = this.state.appts.map( a => {
      if (a.id === id) {
        return appointment
      }
      return a
    })
    this.setState({ appts })
  }

  deleteAppt = (id, history) => {
    const { appts } = this.state
    this.setState({ appts: appts.filter( a => a.id !== id )})
    history.push(`${id}/admin-dash`)
  }

  render() {
    const { id } = this.props
    return(
      <>
        <ApptForm addAppt={this.addAppt} business_id={id} workers={this.state.workers} />
      </>
    )
  }
}

export default Appt;