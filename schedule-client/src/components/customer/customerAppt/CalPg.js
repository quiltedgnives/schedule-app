import React, { Component } from 'react';
import ApptForm  from '../../business/appt/ApptForm';
import CAppCal from './CApptCal';
import { Container, Grid, Modal, Button, Header } from 'semantic-ui-react';

class CalPg extends Component {
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
  },], 
  workers: [
    { id: 1, name: 'Syd' },
    { id: 2, name: 'Mike' },
    { id: 3, name: 'Jamie' },
    { id: 4, name: 'Rose' },
  ], events: [], modalOpen: false };
  
  componentDidMount() {
    this.calEvents()
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  
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
        return appointment
      }
      return a
    })
    this.setState({ appts }, () => { this.calEvents() })
  }

  deleteAppt = (id, history) => {
    const { appts } = this.state
    this.setState({ appts: appts.filter( a => a.id !== id )}, () => { this.calEvents() })
    // history.push(`${id}/admin-dash`)
  }

  render() {
    const { id } = this.props
    return(
      <>
        <Container>
          <br />
          <br />
          <Grid stackable>
            <Grid.Column width={15}>
              <CAppCal 
                appts={this.state.events} 
                deleteAppt={this.deleteAppt} 
                workers={this.state.workers}
                updateAppt={this.updateAppt}
              />
            </Grid.Column>
            <Grid.Column width={1}>
              <Modal
                trigger={<Button color='blue' inverted onClick={this.handleOpen}>+</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
                closeIcon
              >
                <Header icon='browser' color='blue' content='Add Appointment' />
                <Modal.Content>
                  <ApptForm 
                    addAppt={this.addAppt} 
                    business_id={id} 
                    workers={this.state.workers} 
                    handleClose={this.handleClose}
                  />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default CalPg;