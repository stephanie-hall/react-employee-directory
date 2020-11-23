import React from 'react';
import NavBar from './components/NavBar';
import Table from './components/Table';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <>
      <NavBar />
      <Container fixed>
        <Table />
      </Container>
    </>
  );
}

export default App;