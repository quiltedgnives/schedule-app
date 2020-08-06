import React from 'react';
import Slider from 'react-slick';
import { Container, Grid, Image, Icon } from 'semantic-ui-react';
import { BTestWrapper, BTestAuthor, TestSlider, BTestP } from '../../../styled-components/homeStyles';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
};

const BTests = () => (
  <BTestWrapper>
    <Container>
      <TestSlider {...settings}>
        <div>
          <Grid stackable>
            <Grid.Column width={2}>
              <Icon name='quote left' size='huge' />
            </Grid.Column>
            <Grid.Column width={4} style={{ margin: '50px 0' }}>
              <Image src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' size='small' style={{ margin: '0 auto' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ margin: '50px 0' }}>
              <BTestP>
                "Great and easy to use system to keep track of a chaotic work environment."
              </BTestP>
              <BTestAuthor>Bob A. - MyGToBarber</BTestAuthor>
            </Grid.Column>
          </Grid>
        </div>
        <div>
          <Grid stackable>
            <Grid.Column width={2}>
              <Icon name='quote left' size='huge' />
            </Grid.Column>
            <Grid.Column width={4} style={{ margin: '50px 0' }}>
              <Image src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' size='small' style={{ margin: '0 auto' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ margin: '50px 0' }}>
              <BTestP>
                "This took over countless binders and excel sheets of information"
              </BTestP>
              <BTestAuthor>John B. - Harry Salon</BTestAuthor>
            </Grid.Column>
          </Grid>
        </div>
        <div>
          <Grid stackable>
            <Grid.Column width={2}>
              <Icon name='quote left' size='huge' />
            </Grid.Column>
            <Grid.Column width={4} style={{ margin: '50px 0' }}>
              <Image src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' size='small' style={{ margin: '0 auto' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ margin: '50px 0' }}>
              <BTestP>
                "Awesome Product! With easy ways to make managing managable."
              </BTestP>
              <BTestAuthor>Jane C. - Nibbles Nails</BTestAuthor>
            </Grid.Column>
          </Grid>
        </div>
      </TestSlider>
    </Container>
  </BTestWrapper>
)

export default BTests;