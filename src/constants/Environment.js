import { GRAPHQL_ENDPOINT } from './constants';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

if (process.env.NODE_ENV === 'production') {
  const { installRelayDevTools } = require('relay-devtools');
  installRelayDevTools();
}

const authToken = null; // localStorage.getItem(GC_AUTH_TOKEN);
// console.log('authToken', authToken);

function fetchQuery(operation, variables) {
  return fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(authToken != null ? { Authorization: `Bearer ${authToken}` } : null)
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store
});

export default environment;
