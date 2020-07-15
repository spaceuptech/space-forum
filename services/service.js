import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import gql from "graphql-tag";
//import { setContext } from 'apollo-link-context';
function initClient(projectId, url) {
  const httpLink = new HttpLink({
    uri: `${url}/v1/api/${projectId}/graphql`

  });

  /*// Middleware to pass token in each HTTP request
      const httpAuthLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        // replace the below implementation to get token from wherever you might have stored it.
        const token = localStorage.getItem("token")
      
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : ""
          }
        }
      });*/

  // Instantiate client
  const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),


    link: httpLink

  });
  return client;
}

export default class Service {
  constructor(projectId, url) {
    this.client = initClient(projectId, url);
  }


 getAllPosts() {
    return new Promise((resolve, reject) => {
      this.client
        .query({
          query: gql`
        query{
          post @postgres{
            id
            title
            category
            content
            ts
            views
            author{
              id
              name
            }
            replies{
              author{
                id
                name
              }
            }

          }
        } @backend{
          status
          error
        }`
        })
        .then(({ status, data }) => {
          console.log(data.post);
          if (status !== 200) {
            reject("Error in fetching data");
            return;
          }
          resolve(data);
        })
        .catch((ex) => reject(ex));
    });
  }

}
