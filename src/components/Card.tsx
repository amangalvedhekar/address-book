import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(Link)`
  border: 1px solid aquamarine;
  min-height: 20px;
`;
export default function Card({firstName, id}: {firstName: string; id: string}) {
  return <StyledLink to={`/contact-details/${id}`}>{firstName}</StyledLink>;
}
