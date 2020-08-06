import React from 'react';
import CAppts from '../customerAppt/CAppts';
import { Container, Header } from 'semantic-ui-react';

const Cdash = () => (
  <Container>
    <br />
    <br />
    <Header className='blue-txt' textAlign='center' size='huge'>DashBoard</Header>
    <CAppts />
  </Container>
)

export default Cdash;