import React from 'react';

export default function ContactDetails({firstName, lastName, phoneNumber}: any) {
  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{phoneNumber}</div>
    </>
  );
}
