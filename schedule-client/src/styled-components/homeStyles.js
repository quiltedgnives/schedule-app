import styled from 'styled-components';
import { Icon, Image, Grid } from 'semantic-ui-react';
import Slider from 'react-slick';

export const HeaderP = styled.p`
  font-size: 18px;
  margin: 50px 0 !important;
`

export const HeaderTxt = styled.div`
  width: 400px;
  padding: 0 40px;
`

export const BHeaderContainer = styled.div`
  background: #e6e6e6;
  color: #4A4A4A;
`

export const SectionTitle = styled.h1`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 0;
  margin-top: 80px !important;
  text-align: center;
`

export const TeamSubTitle = styled.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 50px;
  text-align: center;
`

export const TeamHead = styled.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 0;
  margin-top: 20px !important;
`

export const TeamSubHead = styled.h1`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 100;
  margin-top: 0;
  margin-bottom: 0;
`

export const TeamP = styled.p`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 30px;
`
export const TeamImg = styled(Image)`
  width: 260px !important;
  height: 260px !important;
`

export const BWorksWrapper = styled.div`
  font-family: Montserrat;
  text-align: center;
  background: #e6e6e6;
  color: #4A4A4A;
  height: 500px;
  padding: 5px;

  @media (max-width: 768px) {
    height: 1000px;
  }
`

export const StepIcon = styled(Icon)`
  margin-bottom: 20px !important;
`

export const BTestWrapper = styled.div`
  height: 500px;
  background: cornflowerblue;
  padding-top: 50px;
  color: white;
  font-family: Montserrat;
  font-size: 18px;

  @media (max-width: 768px) {
    height: 800px;
  }
`

export const BTestAuthor = styled.span`
  margin-top: 20px;
  padding-left: 240px;

  @media (max-width: 768px) {
    padding-left: 80px;
  }
`

export const BMemberWrapper = styled(Grid)`
  @media (max-width: 768px) {
    text-align: center !important; 
  }
`

export const TestSlider = styled(Slider)`
  width: 800px; 
  margin: 0 auto; 
  height: 300px;
  padding: 60px 30px;

  @media (max-width: 768px) {
    width: 375px !important;
    height: 450px;
  }
`

export const BTestP = styled.p`
  @media (max-width: 768px) {
    text-align: center
  }
`

export const ContactFormHead = styled.h1`
  padding-top: 50px;
  color: cornflowerblue;
  font-family: Montserrat;
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;
`