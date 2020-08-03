import React, { Component } from 'react';
import { Header, Image, Button, Modal, Icon, Grid } from 'semantic-ui-react';
import moment from 'moment';
import ApptForm  from '../../business/appt/ApptForm';
import ApptEdit from '../../business/appt/ApptEdit';

class CApptShow extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { service, dateTime, worker, business_id, id  } = this.props.shownAppt
    const { addAppt, workers, shownAppt, updateAppt, deleteAppt } = this.props
    return(
      <>
        { id ? 
          <>
            <Header className='blue-txt' as='h1' textAlign='center'>Appointment Details</Header>
            <Grid columns={2} stackable>
              <Grid.Column className='blue-txt'>
                <Header as='h3' className='blue-txt'>{service}</Header>
                <p>with</p>
                <Header as='h3' className='blue-txt'>{worker}</Header>
                <p>on</p>
                <Header as='h3' className='blue-txt'>{moment(dateTime).format('MMMM DD')}</Header>
                <p>at</p>
                <Header as='h3' className='blue-txt'>{moment(dateTime).format('h:mm a')}</Header>
              </Grid.Column>
              <Grid.Column>
                <Image src='https://res.cloudinary.com/henry-devpoint-labs/image/upload/v1596047355/DevPoint%20Launch%20Summer%2020/iconfinder_user_1608727_kxs5so.png' rounded size='small' />
                <Header className='blue-txt'>{business_id}</Header>
              </Grid.Column>
            </Grid>
            <br />
            <br />
            <Button color='red' onClick={() => deleteAppt(id)}>
              <Icon name='remove' /> Delete
            </Button>
            <ApptEdit 
              {...shownAppt}
              title={service}
              start={dateTime} 
              workers={workers} 
              updateAppt={updateAppt}
            />
            <br />
            <br />
            <br />
          </>
          :
          ""
        }
        <Modal
          trigger={<center><Button color='blue' inverted onClick={this.handleOpen}>Add Appointment</Button></center>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='small'
          closeIcon
        >
          <Header icon='browser' className='blue-txt' content='Add Appointment' />
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