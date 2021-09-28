import "./App.css";
import React, {useState, useEffect} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";
import Loading from "./components/Loading";
import Home from "./Home";



export const SERVER_URL = "http://localhost/react/graphql";

export const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});


export const DaasQuery = gql`{
  page(id: "cG9zdDoxOA==") {
    banner {
      bannerParagraph
      title
      lightVideo{
        mediaItemUrl
      }
      darkVideo {
        mediaItemUrl
      }
      darkLogo {
        sourceUrl
      }
      lightLogo {
        sourceUrl
      }
    }
    about {
            aboutHeading
            leftpBottom
            leftpMiddle
            leftpTop
            name
            rightp
            aboutImage {
              sourceUrl
            }
          }
          datasets {
      heading
      dataCardNumFour
      dataCardNumOne
      dataCardNumThree
      dataCardNumTwo
      dataCardpFour
      dataCardpHtree
      dataCardpOne
      dataCardpTwo
      dataLeftBottom
      dataLeftHeadBottom
      dataLeftHeadTop
    }
    services {
      heading
      serviceHeadOne
      serviceHeadThree
      serviceHeadTwo
      serviceP
      servicePThree
      servicePTwo
    }
        }
  }
`;


client
  .query({
    query: gql`
      ${DaasQuery}
    `,
  })
  .then(
    (result) => console.log(result) 
  );


function App() {
  const { loading, error } = useQuery(DaasQuery);

  
  const [dark, setDark] = useState();

  useEffect(() => {
    let hour = new Date().getHours();
    if(hour < 6  || hour > 17){
      setDark(true);
    }else{
      setDark(false);
    }
  }, [dark])

  

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;

  return (
    <>
    <Home dark={dark} />
    </>
 )
}

export default App;
