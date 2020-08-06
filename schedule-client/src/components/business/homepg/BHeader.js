import React from 'react';
import { Grid, Header, Button, Embed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { HeaderP, HeaderTxt, BHeaderContainer } from '../../../styled-components/homeStyles';


const BHeader = () => (
  <BHeaderContainer>
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
            <Header as='h1'>Welcome to Schedule Magic!</Header>
            <HeaderP>
              Schedule Magic is a all in one platform for businesses to have full functionally with their appointments and customers to keep track of appointments with different businesses.
            </HeaderP>
            <Link to='/help'>
              <Button color='blue' inverted>Need Help?</Button>
            </Link>
          </HeaderTxt>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </BHeaderContainer>
)

export default BHeader;