import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';
import {fetch} from 'isomorphic-fetch';
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql',
  }),
});
client.query({
  query: gql`
{
  patients {
    patientID
    patientName
    patientSex
    patientBirthDate
    specificCharacterSet
  }
}
  `,
})
  .then(data => console.log(data))
  .catch(error => console.error(error));