import React, { Component } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import ApptForm from './ApptForm';

class ApptEdit extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state
    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button color='yellow'>
            <Icon name='pencil' /> Edit
          </Button>
        }
      >
        <Modal.Header>Edit Appointment</Modal.Header>
        <Modal.Content>
          <ApptForm
           {...this.props}
           handleClose={this.close}
          />
        </Modal.Content>
      </Modal>
    )
  }
}

export default ApptEdit;