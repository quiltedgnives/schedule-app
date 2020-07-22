import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { TeamHead, TeamSubHead, TeamP, TeamImg } from '../../../styled-components/homeStyles';

const BMember = ({ img, name, title, txt, fb, li, gh }) => (
  <Grid columns={2} stackable>
    <Grid.Column>
      <TeamImg src={img} size='medium' circular verticalAlign='top' width='260px' height='260px' />
    </Grid.Column>
    <Grid.Column>
      <TeamHead>{name}</TeamHead>
      <TeamSubHead>{title}</TeamSubHead>
      <TeamP>{txt}</TeamP>
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