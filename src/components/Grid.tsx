import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
  grid-gap: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;
