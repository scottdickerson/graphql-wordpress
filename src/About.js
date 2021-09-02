import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
    {
  users {
    id
    name
  }
}

`;

function About() {
    const {loading, data, error} = useQuery(GET_USERS);

    if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

    return (
        <select name="user" >
      {data.users.map(user => (
        <option key={user.id} value={user.name}>
          {user.name}
        </option>
      ))}
    </select>
    )
}

export default About
