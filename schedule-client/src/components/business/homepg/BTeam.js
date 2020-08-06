import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import BMember from './BMember';
import { members } from './BMembers';
import { SectionTitle, TeamSubTitle } from '../../../styled-components/homeStyles';

const BTeam = () => (
  <Container>
    <SectionTitle>OUR TEAM</SectionTitle>
    <TeamSubTitle>The dream team who developed the app.</TeamSubTitle>
    <Grid columns={2} stackable>
      {
        members.map( m => 
          <Grid.Column>
            <BMember {...m} />
            <br />
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