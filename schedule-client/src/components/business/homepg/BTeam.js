import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import BMember from './BMember';
import { members } from './BMembers';

const BTeam = () => (
  <>
    <Header textAlign='center'>Our Team</Header>
    <p>Bacon ipsum dolor amet alcatra cupim leberkas kevin</p>
    <Grid columns={2}>
      {
        members.map( m => 
          <Grid.Column>
            <BMember {...m} />
          </Grid.Column>
        ) 
      }
    </Grid>
  </>
)

export default BTeam;