import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import DateTimePicker from 'react-datetime-picker';

class ApptForm extends Component {
  state = { dateTime: '', worker: '', service: '', notes: '' }

  handleDateTimeChange = (date) => {
    this.setState({ dateTime: date });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addAppt(parseInt(this.props.business_id), this.state)
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
        <Form.TextArea
          label="Notes:" 
          name='notes'
          value={notes}
          onChange={this.handleChange}
        />
        <Form.Button type='submit'>Submit</Form.Button>
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