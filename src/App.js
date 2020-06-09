import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import ReduxTest from '@/pages/ReduxTest'

import NavBar from '@/components/molecules/NavBar'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";


const EXCHANGE_RATES = gql`
  {
    character(id: "1") {
      id
      name
      status
      species
      gender
      type
    }
  }
`;
function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>
    <code className="bg-gray-300 block px-4 py-8 m-4 border-l-4 border-orange-500 rounded-md">
      { JSON.stringify(data.character) }
    </code>
  </div>;
}

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/">
          <ReduxTest />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
