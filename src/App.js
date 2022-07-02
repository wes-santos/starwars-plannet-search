import React from 'react';
import Provider from './context/myProvider';
import './App.css';
import Table from './components/Table';
import SearchInput from './components/SearchInputs';

function App() {
  return (
    <Provider>
      <h1>Projeto Star Wars - Trybe</h1>
      <SearchInput />
      <Table />
    </Provider>
  );
}

export default App;
