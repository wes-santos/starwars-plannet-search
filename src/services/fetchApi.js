const FETCH_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = async (setState) => {
  const response = await fetch(FETCH_URL);
  const json = await response.json();
  return setState((prevState) => ({ ...prevState, data: json }));
};

export default fetchApi;
