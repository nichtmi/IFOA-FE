import React from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBox = () => {
  const handleSearch = () => {
    // Implementa la logica di ricerca qui
    console.log('Ricerca eseguita!');
  };

  return (
    <Container>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Inserisci la tua ricerca"
          aria-label="Inserisci la tua ricerca"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleSearch}>
            Cerca
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default SearchBox;
