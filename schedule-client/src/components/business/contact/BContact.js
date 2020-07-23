import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

const BContact = ({ address, email, phone, map, history, contactSubmit, id }) => (
  <Container>
    <Grid columns={2} stackable>
      <Grid.Column>
        <ContactForm history={history} contactSubmit={contactSubmit} id={id} />
      </Grid.Column>
      <Grid.Column>
        <ContactDetails 
          address={address} 
          email={email} 
          phone={phone} 
          map={map} 
        />
      </Grid.Column>
    </Grid>
  </Container>
)

export default BContact;