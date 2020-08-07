import React from 'react';
import { List, Button, Grid } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Day, MonthDay, CApptDetails } from '../../../styled-components/DashStyles';

const CApptList = ({ appts, setShownAppt}) => (
  <>
    <List divided relaxed className='blue-txt'>
      { appts.map( a => 
        <List.Item onClick={() => setShownAppt(a)}>
          <Grid padded>
            <Grid.Row>
              <Grid.Column>
                <Day>{moment(a.dateTime).format('DD')}</Day>
              </Grid.Column>
              <Grid.Column>
                <MonthDay>
                  {moment(a.dateTime).format('MMM')}, {moment(a.dateTime).format('ddd')}
                </MonthDay>
              </Grid.Column>
              <CApptDetails>
                <List.Content>
                  <Grid.Column>
                    <List.Header className='blue-txt'>{a.service} appointment with {a.worker}</List.Header>
                    <List.Description className='blue-txt'>{moment(a.dateTime).format('h:mm a')} - {moment(a.dateTime).add(1, 'hours').format('h:mm a')}</List.Description>
                  </Grid.Column>
                </List.Content>
              </CApptDetails>
            </Grid.Row>
          </Grid>
        </List.Item>
      )}
    </List>
    <Link to='/1/cal'>
      <Button color='blue' inverted>Calendar View</Button>
    </Link>
  </>
)

export default CApptList;