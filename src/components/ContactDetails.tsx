import React from 'react';
import * as Grid from 'src/components/Grid';
export default function ContactDetails({firstName, lastName, phoneNumber}: any) {
  return (
    <Grid.Col>
      <Grid.Row>
        <h6>First Name:</h6>
        <p style={{margin: 'auto'}}>{firstName}</p>
      </Grid.Row>
      <Grid.Row>
        <h6>Last Name:</h6>
        <p style={{margin: 'auto'}}>{lastName}</p>
      </Grid.Row>
      <Grid.Row>
        <h6>Contact Number:</h6>
        <p style={{margin: 'auto'}}>{phoneNumber}</p>
      </Grid.Row>
    </Grid.Col>
  );
}
