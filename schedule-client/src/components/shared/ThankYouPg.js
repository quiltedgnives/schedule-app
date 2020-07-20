import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ThankYouPg = () => (
  <Container text textAlign='center'>
    <Header as='h1'>
      Thank You <br />For Your Submission
    </Header>
    <Header
      as='h2'
      content='We Will Get In Touch With You Soon!'
    />
    <Link to="/" className="btn btn-primary btn-white">
      <Button primary size='huge'>
        Take Me Home
      </Button>
    </Link>
  </Container>
)

export default ThankYouPg;