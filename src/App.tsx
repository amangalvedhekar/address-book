import React from 'react';
import './App.css';
import styled from 'styled-components';
const Header = styled.h1`
  border: 2px solid #61dafb;
`;
function App() {
  return (
    <div className="App">
      <Header>Address Book</Header>
    </div>
  );
}

export default App;
