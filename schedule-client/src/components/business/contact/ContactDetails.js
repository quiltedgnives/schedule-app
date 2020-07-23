import React from 'react';

const ContactDetails = ({ address, email, phone, map }) => (
  <>
    <iframe 
      src={map} 
      width="600" 
      height="450" 
      frameborder="0" 
      style="border:0;" 
      allowfullscreen="" 
      aria-hidden="false" 
      tabindex="0">
    </iframe>
    <p>{address}</p>
    <p>{email}</p>
    <p>{phone}</p>
  </>
)

export default ContactDetails;