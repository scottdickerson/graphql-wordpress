import logo from "./logo.svg";
import "./App.css";
// import gql from "fake-tag";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const SPACE_MISSION_URL = "https://api.spacex.land/graphql/";

const client = new ApolloClient({
  uri: SPACE_MISSION_URL,
  cache: new InMemoryCache(),
});

const MISSION_QUERY = `
{
  launches {
    mission_name
  }
}`;

/**
 * query response from the GraphQL Endpoint: https://api.spacex.land/graphql/
 {
  "data": {
    "launches": [
      {
        "mission_name": "Thaicom 6"
      },
      {
        "mission_name": "AsiaSat 6"
      },
*/

// const client = ...

// Start the network call
client
  .query({
    query: gql`
      ${MISSION_QUERY}
    `,
  })
  .then(
    // once the network call finishes, this callback is called
    (result) => console.log(result) // callback function
  );

//This already runs the first
function App() {
  // move the client call here to force rerender of the app with the network response:
  // www.apollographql.com/docs/react/get-started/ OR Use the traditional React way to call an backend API

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
