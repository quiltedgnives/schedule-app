import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) 

const BAppCal = ({ appts }) => (
  <Calendar
    localizer={localizer}
    events={appts}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
  />
)

export default BAppCal;