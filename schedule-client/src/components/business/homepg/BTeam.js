import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import BMember from './BMember';
import { members } from './BMembers';
import { SectionTitle, TeamSubTitle } from '../../../styled-components/homeStyles';

const BTeam = () => (
  <Container>
    <SectionTitle>OUR TEAM</SectionTitle>
    <TeamSubTitle>Bacon ipsum dolor amet alcatra cupim leberkas kevin</TeamSubTitle>
    <Grid columns={2} stackable>
      {
        members.map( m => 
          <Grid.Column>
            <BMember {...m} />
          </Grid.Column>
        ) 
      }
    </Grid>
    <br />
    <br />
    <br />
  </Container>
)

export default BTeam;