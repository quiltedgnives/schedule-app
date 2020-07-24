import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { ContactDetail } from '../../../styled-components/homeStyles';

const ContactDetails = ({ address, email, phone, map }) => (
  <>
    <iframe 
      src={map} 
      width="600" 
      height="450" 
      frameborder="0" 
      style={{border: "0"}} 
      allowfullscreen="" 
      aria-hidden="false" 
      tabindex="0">
    </iframe>
    <Grid stackable columns={3} textAlign='center' padded style={{ color: 'cornflowerblue' }}>
      <Grid.Column>
        <Icon name='map marker alternate' size='huge' />
        <ContactDetail>{address}</ContactDetail>
      </Grid.Column>
      <Grid.Column>
        <Icon name='mail' size='huge' />
        <ContactDetail>{email}</ContactDetail>
      </Grid.Column>
      <Grid.Column>
        <Icon name='phone' size='huge' />
        <ContactDetail>{phone}</ContactDetail>
      </Grid.Column>
    </Grid>
  </>
)

export default ContactDetails;