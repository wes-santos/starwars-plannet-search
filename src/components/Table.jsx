import React, { useContext } from 'react';
import MyContext from '../context/myContext';
import './table.css';

function Table() {
  const {
    state: {
      data: { results },
      filterByName: { name, filteredResults },
      filterByNumericValues: { numericResults },
    },
  } = useContext(MyContext);
  const tableHeadsList = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  const createTable = (listToRender) => (listToRender.map((obj, i) => (
    <tr key={ i + 1 }>
      <td>{obj.name}</td>
      <td>{obj.rotation_period}</td>
      <td>{obj.orbital_period}</td>
      <td>{obj.diameter}</td>
      <td>{obj.climate}</td>
      <td>{obj.gravity}</td>
      <td>{obj.terrain}</td>
      <td>{obj.surface_water}</td>
      <td>{obj.population}</td>
      <td>{obj.films.map((film) => film)}</td>
      <td>{obj.created}</td>
      <td>{obj.edited}</td>
      <td>{obj.url}</td>
    </tr>)));

  return (
    <table>
      <thead>
        <tr>
          {tableHeadsList.map((item) => <th key={ item }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        { (() => {
          if (name !== '') {
            return createTable(filteredResults);
          } if (results !== undefined && numericResults.length === 0) {
            return createTable(results);
          } if (numericResults.length > 0) {
            return createTable(numericResults[numericResults.length - 1]);
          }
        })() }
      </tbody>
    </table>
  );
}

export default Table;
