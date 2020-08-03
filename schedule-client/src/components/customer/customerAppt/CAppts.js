import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CApptList from './CApptList';
import CApptShow from './CApptShow';

class CAppts extends Component {
  state = { appts: [{ 
    id: 1,
    dateTime: 'Wed Aug 12 2020 02:15:00 GMT-0600 (Mountain Daylight Time)',
    worker: 'Jamie',
    service: 'Half Set',
    notes: 'none',
    business_id: 1,
  }, 
  { 
    id: 2,
    dateTime: 'Wed Jul 31 2020 12:10:00 GMT-0600 (Mountain Daylight Time)',
    worker: 'Rose',
    service: 'Full Set',
    notes: 'Allergic to paint',
    business_id: 1,
  },
  { 
    id: 3,
    dateTime: 'Wed Aug 1 2020 01:10:00 GMT-0600 (Mountain Daylight Time)',
    worker: 'Mike',
    service: 'Hybrid',
    notes: 'none',
    business_id: 1,
  },
  ], 
  workers: [
    { id: 1, name: 'Syd' },
    { id: 2, name: 'Mike' },
    { id: 3, name: 'Jamie' },
    { id: 4, name: 'Rose' },
  ], events: [], shownAppt: {} };
  
  componentDidMount() {
    this.calEvents()
  }

  setShownAppt = (appt) => this.setState({ shownAppt: appt })
  
  calEvents = () => {
    let newEvents = []
    this.state.appts.map( a => 
      newEvents.push({
        title: a.service,
        start: String(a.dateTime),
        end: String(a.dateTime),
        allDay: false, 
        id: a.id,
        worker: a.worker,
        notes: a.notes,
      })
    )
    this.setState({ events: newEvents })
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since db not connected
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addAppt = (id, appointment) => {
    const { appts } = this.state
    const newAppt = { id: this.getUniqId(), ...appointment }
    this.setState({ appts: [ ...appts, newAppt]}, () => { this.calEvents() })
  }

  updateAppt = (id, appointment, history) => {
    const appts = this.state.appts.map( a => {
      if (a.id === id) {
        return { ...appointment, business_id: a.business_id }
      }
      return a
    })
    this.setState({ appts, shownAppt: {...appointment, id, } }, () => { this.calEvents() })
  }

  deleteAppt = (id, history) => {
    const { appts } = this.state
    this.setState({ appts: appts.filter( a => a.id !== id ), shownAppt: {} }, () => { this.calEvents() })
    // history.push(`${id}/admin-dash`)
  }
  render() {
    const { appts, shownAppt, workers } = this.state
    return(
      <Grid divided>
        <Grid.Column width={10}>
          <CApptList appts={appts} setShownAppt={this.setShownAppt} />
        </Grid.Column>
        <Grid.Column width={6}>
          <CApptShow 
            shownAppt={shownAppt} 
            addAppt={this.addAppt} 
            workers={workers} 
            deleteAppt={this.deleteAppt}
            updateAppt={this.updateAppt}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default CAppts;