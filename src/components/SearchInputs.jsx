import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import MyContext from '../context/myContext';
import './searchInput.css';

// let columnOptions = [
//   'population',
//   'orbital_period',
//   'diameter',
//   'rotation_period',
//   'surface_water',
// ];

function SearchInput() {
  const {
    state: {
      data: { results },
      filterByName: { name },
      filterByNumericValues: { actualFilter, allFilters, numericResults },
      columns,
    },
    setState,
  } = useContext(MyContext);

  const handleSearchChange = ({ target: { value } }) => {
    const filteredResults = results.filter((obj) => (
      obj.name.includes(value)
    ));

    setState((prevState) => ({
      ...prevState,
      filterByName: { name: value, filteredResults },
    }));
  };

  const handleFiltersChange = ({ target: { id, value } }) => {
    if (id === 'column-filter') {
      setState((prevState) => ({
        ...prevState,
        filterByNumericValues: {
          ...prevState.filterByNumericValues,
          actualFilter: { ...prevState.filterByNumericValues.actualFilter,
            column: value },
        },
      }));
    } else if (id === 'comparison-filter') {
      setState((prevState) => ({
        ...prevState,
        filterByNumericValues: {
          ...prevState.filterByNumericValues,
          actualFilter: { ...prevState.filterByNumericValues.actualFilter,
            comparison: value },
        },
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        filterByNumericValues: {
          ...prevState.filterByNumericValues,
          actualFilter: { ...prevState.filterByNumericValues.actualFilter, value },
        },
      }));
    }
  };

  const saveValuesToState = (valueToSave) => (
    setState((prevState) => ({
      ...prevState,
      filterByNumericValues: {
        ...prevState.filterByNumericValues,
        allFilters: [...prevState.filterByNumericValues.allFilters,
          prevState.filterByNumericValues.actualFilter],
        numericResults: [
          ...prevState.filterByNumericValues.numericResults,
          valueToSave],
      },
    }))
  );

  const compareValues = (arrToCompare) => {
    const newFilteredResult = arrToCompare.filter((obj) => {
      switch (actualFilter.comparison) {
      case 'maior que':
        return Number(obj[actualFilter.column]) > Number(actualFilter.value);
      case 'menor que':
        return Number(obj[actualFilter.column]) < Number(actualFilter.value);
      case 'igual a':
        return Number(obj[actualFilter.column]) === Number(actualFilter.value);
      default: return results;
      }
    });
    saveValuesToState(newFilteredResult);
  };

  // const setFiltersIndex = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     filterByNumericValues: {
  //       ...prevState.filterByNumericValues,
  //       filtersIndex: [
  //         ...prevState.filterByNumericValues.filtersIndex,
  //         prevState.filterByNumericValues.filtersIndex.length,
  //       ],
  //     },
  //   }));
  // };

  const abaaaba = () => {
    if (allFilters.length > 0) {
      const ababa = columns
        .filter((e) => e !== actualFilter.column);
      setState((prevState) => ({
        ...prevState,
        columns: ababa,
      }));
    } else {
      const ababa2 = columns
        .filter((e2) => e2 !== actualFilter.column);
      setState((prevState) => ({
        ...prevState,
        columns: ababa2,
      }));
    }
  };

  const handleClick = () => {
    // Filtrar os resultados com os valores passados e salvá-los no estado
    if (numericResults.length === 0) {
      compareValues(results);
      // setFiltersIndex();
    } else {
      compareValues(numericResults[numericResults.length - 1]);
      // setFiltersIndex();
    }
    abaaaba();
  };

  const removeFilterOnClick = ({ target }) => {
    if (target.id === 'removeAllFilters') {
      return (
        setState((prevState) => ({
          ...prevState,
          filterByNumericValues: {
            actualFilter: {
              column: 'population',
              comparison: 'maior que',
              value: 0,
            },
            allFilters: [],
            numericResults: [],
          },
          columns: [
            'population',
            'orbital_period',
            'diameter',
            'rotation_period',
            'surface_water',
          ],
        }))
      );
    }
    const selectedColumn = target.parentElement.innerText.split(' ')[0];
    console.log(numericResults.indexOf({ column: selectedColumn }));
  };

  return (
    <div>
      <form className="colum-filter-form">
        <label htmlFor="name-filter">
          <span className="select-label-text">Pesquisar</span>
          <input
            type="text"
            data-testid="name-filter"
            id="name-filter"
            value={ name }
            onChange={ handleSearchChange }
            placeholder="Pesquisar..."
          />
        </label>
        <label htmlFor="column-filter">
          <span className="select-label-text">Coluna</span>
          <select
            id="column-filter"
            data-testid="column-filter"
            onChange={ handleFiltersChange }
          >
            { columns.map((option) => (
              <option key={ nanoid() } value={ option }>{ option }</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            id="comparison-filter"
            data-testid="comparison-filter"
            onChange={ handleFiltersChange }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            type="number"
            data-testid="value-filter"
            placeholder="Digite um valor"
            min="0"
            value={ actualFilter.value }
            onChange={ handleFiltersChange }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>

      { allFilters.length > 0 && allFilters.map(
        (e) => (
          <div key={ nanoid() }>
            {`${e.column} ${e.comparison} ${e.value}`}
            <button
              type="button"
              data-testid="filter"
              onClick={ removeFilterOnClick }
            >
              X
            </button>
          </div>
        ),
      ) }
      <button
        type="button"
        id="removeAllFilters"
        data-testid="button-remove-filters"
        onClick={ removeFilterOnClick }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default SearchInput;
