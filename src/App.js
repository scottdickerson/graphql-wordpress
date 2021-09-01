import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
} from "@apollo/client";



export const SPACE_MISSION_URL = "https://api.spacex.land/graphql/";

export const client = new ApolloClient({
  uri: SPACE_MISSION_URL,
  cache: new InMemoryCache(),
});



const MISSION_QUERY = gql`
{
  missions {
    name
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


function App() {
  
  const { loading, error, data } = useQuery(MISSION_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.missions.map((mission, i) => (
    <div key={i}>
      {mission.name}
    </div>
  ));
}

export default App;
