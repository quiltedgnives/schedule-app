import React from 'react';
import { List, Button } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const CApptList = ({ appts, setShownAppt}) => (
  <>
    <List divided relaxed>
      { appts.map( a => 
        <List.Item onClick={() => setShownAppt(a)} >
          <List.Icon name='github' size='large' verticalAlign='middle' />
          {moment(a.dateTime).format('DD')}
          {moment(a.dateTime).format('MMM')}, {moment(a.dateTime).format('ddd')}
          <List.Content>
            <List.Header>{a.service} appointment with {a.worker} at {a.business_id}</List.Header>
            <List.Description>{moment(a.dateTime).format('h:mm a')} - {moment(a.dateTime).add(1, 'hours').format('h:mm a')}</List.Description>
          </List.Content>
        </List.Item>
      )}
    </List>
    <Link to='/1/cal'>
      <Button>Calendar View</Button>
    </Link>
  </>
)

export default CApptList;