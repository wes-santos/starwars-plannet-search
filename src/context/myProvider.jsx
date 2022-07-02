import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';
import fetchApi from '../services/fetchApi';

function Provider({ children }) {
  const INITIAL_STATE = {
    data: {},
    filterByName: {
      name: '',
      filteredResults: {},
    },
    filterByNumericValues: {
      actualFilter: {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
      allFilters: [],
      numericResults: [],
      filtersIndex: [],
    },
    columns: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  };

  const [state, setState] = useState(INITIAL_STATE);

  const contextValue = {
    state,
    setState,
  };

  useEffect(() => {
    fetchApi(setState);
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

// Validação de children com auxílio da documentação do React:
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
