import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
//import { setContext } from 'apollo-link-context';
function InitClient(projectId, url) {
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
    link: httpLink.concat(httpLink),
  });
  return client;
}

export default class Service {
  constructor(projectId, url) {
    this.client = InitClient(projectId, url);
  }
}
