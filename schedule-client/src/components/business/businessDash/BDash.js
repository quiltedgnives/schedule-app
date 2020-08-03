import React from 'react';
import Appt from '../appt/Appt';

const Bdash = (props) => (
  <>
    <h1 className='blue-txt'>BDash</h1>
    <Appt id={props.match.params.business_id}/>
  </>
)

export default Bdash;