import React from 'react';
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';

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
  <Container>
    <Slider {...settings}>
      <div>
        <p>
          "Bacon ipsum dolor amet alcatra cupim leberkas kevin, pork chop pork belly corned beef sirloin."
          <br />
        </p>
        <span >Bob B. - MyGToBarber</span>
      </div>
      <div>
        <p>
          "Bacon ipsum dolor amet alcatra cupim leberkas kevin, pork chop pork belly corned beef sirloin"
          <br />
        </p>
        <span>Joe S. - Harry Hair Salon</span>
      </div>
      <div>
        <p>
          "Bacon ipsum dolor amet alcatra cupim leberkas kevin, pork chop pork belly corned beef sirloin"
          <br />
        </p>
        <span>Jane L. - Nice Nails</span>
      </div>
    </Slider>
  </Container>
)

export default BTests;