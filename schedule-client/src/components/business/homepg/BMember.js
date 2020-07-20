import React from 'react';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';

const BMember = ({ img, name, title, txt, fb, li, gh }) => (
  <Grid columns={2}>
    <Grid.Column>
      <Image src={img} size='medium' circular verticalAlign='top' />
    </Grid.Column>
    <Grid.Column>
      <Header>{name}</Header>
      <Header as='h3'>{title}</Header>
      <p>
        {txt}
      </p>
      <div>
        <a href={fb} target='_blank' rel="noopener noreferrer">
          <Icon name='facebook' size='big' />
        </a>
        <a href={li} target='_blank' rel="noopener noreferrer">
          <Icon name='linkedin'  size='big' />
        </a>
        <a href={gh} target='_blank' rel="noopener noreferrer">
          <Icon name='github square' size='big' />
        </a>
      </div>
    </Grid.Column>
  </Grid>
)

export default BMember;