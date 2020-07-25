import React, { Component } from 'react';
import ApptForm from './ApptForm';
import BAppCal from './BApptCal';
import { Container, Grid, Modal, Button, Header } from 'semantic-ui-react';

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
  ], events: [], modalOpen: false };
  
  componentDidMount() {
    this.calEvents()
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  
  calEvents = () => {
    let events = []
    this.state.appts.map( a => 
      events.push({
        title: a.service,
        start: String(a.dateTime),
        end: String(a.dateTime),
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
        <Container>
          <Grid stackable>
            <Grid.Column width={14}>
              <BAppCal appts={this.state.events} />
            </Grid.Column>
            <Grid.Column width={2}>
            <Modal
              trigger={<Button onClick={this.handleOpen}>New Appointment</Button>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              size='small'
            >
              <Header icon='browser' content='Add Appointment' />
              <Modal.Content>
                <ApptForm addAppt={this.addAppt} business_id={id} workers={this.state.workers} />
              </Modal.Content>
            </Modal>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default Appt;