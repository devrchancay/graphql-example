import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const query = gql`
  {
    characters(filter: { status: "Alive" }) {
      results {
        id
        name
      }
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery(query);

  return (
    <div className="App">
      <span>{loading && 'Cargando'}</span>
      {loading === false &&
      !error &&
      data.characters &&
      data.characters.results ? (
        <ul>
          {data.characters.results.map((r) => (
            <li key={r.id}>{r.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
