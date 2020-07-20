import React from 'react';
import { Grid, Header, Button, Embed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { HeaderP, HeaderTxt } from '../../../styled-components/homeStyles';


const BHeader = () => (
  <Grid container style={{ padding: '5em 0em' }} columns={2} stackable>
    <Grid.Row>
      <Grid.Column>
        <Embed
          aspectRatio='4:3'
          id='O6Xo21L0ybE'
          source='youtube'
        />
      </Grid.Column>
      <Grid.Column>
        <HeaderTxt>
          <Header as='h4'>About Us</Header>
          <Header as='h1'>Welcome to the schduling app!</Header>
          <HeaderP>
            Bacon ipsum dolor amet alcatra cupim leberkas kevin, pork chop pork belly corned beef sirloin. Tongue sausage brisket cupim andouille, buffalo shankle pork chop short loin ribeye pig sirloin salami doner fatback. 
          </HeaderP>
          <Link to='/help'>
            <Button color='blue' inverted>Need Help?</Button>
          </Link>
        </HeaderTxt>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default BHeader;