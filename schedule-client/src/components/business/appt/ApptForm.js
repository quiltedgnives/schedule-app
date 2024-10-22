import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/src/DateTimePicker.less';

class ApptForm extends Component {
  state = { dateTime: '', worker: '', service: '', notes: '' }

  componentDidMount() {
    if (this.props.id) {
      const { start, worker, notes, title } = this.props
      this.setState({ dateTime: start, worker, service: title, notes })
    }
  }

  handleDateTimeChange = (date) => {
    this.setState({ dateTime: date });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { id, updateAppt, handleClose } = this.props
      updateAppt(id, this.state)
      handleClose()
    } else {
      this.props.addAppt(parseInt(this.props.business_id), this.state)
      this.props.handleClose()
    }
    this.setState({ dateTime: '', worker: '', service: '', notes: '' })
  }

  workerOpt = () => {
    let workersOpt = []
    this.props.workers.map( w => 
      workersOpt.push({ key: w.id, text: w.name, value: w.name })
    )
    return workersOpt
  }

  onChange = date => this.setState({ date });

  render() {
    const { dateTime, worker, service, notes } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <DateTimePicker
          onChange={this.handleDateTimeChange}
          value={dateTime}
        />
        <br />
        <br />
        <br />
        <Form.Group widths='equal'>
          <Form.Select
            label="Worker:"
            name="worker"
            value={worker}
            onChange={this.handleChange}
            options={this.workerOpt()}
          />
          <Form.Select
            label="Service:"
            name="service"
            value={service}
            onChange={this.handleChange}
            options={servicesOpt}
          />
        </Form.Group>
        <Form.TextArea
          label="Notes:" 
          name='notes'
          value={notes}
          onChange={this.handleChange}
        />
        <Form.Button color='blue' inverted type='submit'>Submit</Form.Button>
      </Form>
    )
  }
}

const servicesOpt = [
  { key: 'hs', text: 'Half Set', value: 'Half Set' },
  { key: 'fs', text: 'Full Set', value: 'Full Set' },
  { key: 'w', text: 'Wax', value: 'Wax' },
  { key: 'v', text: 'Volume', value: 'Volume' },
  { key: 'h', text: 'Hybrid', value: 'Hybrid' },
  { key: 'c', text: 'Classic', value: 'Classic' },
  { key: '', text: 'Retouch', value: 'Retouch' },
]

export default ApptForm;