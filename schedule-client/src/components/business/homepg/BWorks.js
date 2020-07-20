import React from 'react';
import { Step } from 'semantic-ui-react';
import { BWorksWrapper, SectionTitle, StepIcon } from '../../../styled-components/homeStyles';

const BWorks = () => (
  <BWorksWrapper>
    <SectionTitle>How It Works</SectionTitle>
    <Step.Group style={{ marginTop: '50px' }}>
      <Step style={{ height: '250px' }}>
        <Step.Content>
          <StepIcon name='clipboard outline' size='huge' />
          <Step.Title>Sign Up</Step.Title>
          <Step.Description>Register your business account</Step.Description>
        </Step.Content>
      </Step>

      <Step active style={{ height: '250px' }}>
        <Step.Content>
          <StepIcon name='calendar alternate outline' size='huge' />
          <Step.Title>Appointments</Step.Title>
          <Step.Description>Create and fullfill appointments</Step.Description>
        </Step.Content>
      </Step>

      <Step style={{ height: '250px' }}>
        <Step.Content>
          <StepIcon name='payment' size='huge'/>
          <Step.Title>Payment</Step.Title>
          <Step.Description>New feature to accept payments</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  </BWorksWrapper>
)

export default BWorks;