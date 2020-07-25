import React, { Component } from 'react';
import ApptForm from './ApptForm';
import BAppCal from './BApptCal';

class Appt extends Component {
  state = { appts: [{ 
    id: 1,
    dateTime: 'Wed Jul 15 2020 00:00:00 GMT-0600 (Mountain Daylight Time)',
    worker: 'Jamie',
    service: 'Half Set',
    notes: 'none',
    business_id: 1,
  },], 
  workers: [
    { id: 1, name: 'Syd' },
    { id: 2, name: 'Mike' },
    { id: 3, name: 'Jamie' },
    { id: 4, name: 'Rose' },
  ], events: [] };
  
  componentDidMount() {
    this.calEvents()
  }
  
  calEvents = () => {
    let events = []
    this.state.appts.map( a => 
      events.push({
        title: a.service,
        start: a.dateTime,
        end: a.dateTime,
        allDay: false
      })
    )
    this.setState({ events })
  }
  
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
        <BAppCal appts={this.state.events} />
        <ApptForm addAppt={this.addAppt} business_id={id} workers={this.state.workers} />
      </>
    )
  }
}

export default Appt;