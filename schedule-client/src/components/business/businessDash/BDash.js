import React from 'react';
import Appt from '../appt/Appt';

const Bdash = (props) => (
  <>
    <Appt id={props.match.params.business_id}/>
  </>
)

export default Bdash;