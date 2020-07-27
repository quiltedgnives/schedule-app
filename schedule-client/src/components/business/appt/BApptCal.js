import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Icon } from 'semantic-ui-react';

const localizer = momentLocalizer(moment) 

class EventShow extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { title, worker, notes, start, id } = this.props.event
    return (
      <Modal
        trigger={<p onClick={this.handleOpen}>{title}</p>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
        closeIcon
      >
        <Modal.Header>{moment(start).format('MMMM Do YYYY, h:mm a')}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>Worker: { worker } </p>
            <p>Service: { title }</p>
            <p>Notes: { notes }</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => this.props.deleteAppt(id)}>
            <Icon name='remove' /> Delete
          </Button>
          <Button color='yellow'>
            <Icon name='pencil' /> Edit
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const BAppCal = ({ appts, deleteAppt }) => (
  <Calendar
    localizer={localizer}
    events={appts}
    popup
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
    components={{ 
      event: (event) => <EventShow deleteAppt={deleteAppt} {...event} />  
    }}
  />
)

export default BAppCal;