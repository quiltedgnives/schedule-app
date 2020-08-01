import React, { Component } from 'react';
import { Header, Image, Button, Modal } from 'semantic-ui-react';
import moment from 'moment';
import ApptForm  from '../../business/appt/ApptForm';

class CApptShow extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { service, dateTime, worker, business_id, id  } = this.props.shownAppt
    const { addAppt, workers } = this.props
    return(
      <>
        { id ? 
          <>
            <Header>Appointment Details</Header>
            <Header>{service}</Header>
            <Header>with</Header>
            <Header>{worker}</Header>
            <Header>on</Header>
            <Header>{moment(dateTime).format('MMMM DD')}</Header>
            <Header>at</Header>
            <Header>{moment(dateTime).format('h:mm a')}</Header>
            <Image src='https://res.cloudinary.com/henry-devpoint-labs/image/upload/v1596047355/DevPoint%20Launch%20Summer%2020/iconfinder_user_1608727_kxs5so.png' rounded size='small' />
            <Header>{business_id}</Header>
          </>
          :
          ""
        }
        <Modal
          trigger={<Button onClick={this.handleOpen}>Add Appointment</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='small'
          closeIcon
        >
          <Header icon='browser' content='Add Appointment' />
          <Modal.Content>
            <ApptForm 
              addAppt={addAppt} 
              business_id={business_id} 
              workers={workers} 
              handleClose={this.handleClose}
            />
          </Modal.Content>
        </Modal>
      </>
    )
  }
}

export default CApptShow;