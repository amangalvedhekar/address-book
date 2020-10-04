import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Theme} from 'src/models/theme';
const StyledLink = styled(Link)`
  border: 1px solid #ed6100;
  min-height: 40px;
  text-decoration: none;
  text-align: center;
  color: ${({theme}: {theme: Theme}) => theme.text};
`;
export default function Card({firstName, id}: {firstName: string; id: string}) {
  return <StyledLink to={`/contact-details/${id}`}>{firstName}</StyledLink>;
}
