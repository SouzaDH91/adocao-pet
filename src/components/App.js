import React from 'react';

import { Query } from 'react-apollo';
import { GET_ALL_PETS } from '../queries';

const App = () => (
  <div className="App">
    <h1>Home</h1>
    <Query query={GET_ALL_PETS}>
      {({ data, loading, error }) => {
        if(loading) return <div>Loading</div>
        if(error) return <div>Error</div>
        console.log(data);
        return (
          <p>Pets</p>
        )
      }}
    </Query>
  </div>
);

export default App;
