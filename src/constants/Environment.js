import { GC_AUTH_TOKEN } from './constants';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// For development.
const { installRelayDevTools } = require('relay-devtools');
installRelayDevTools();

const authToken = localStorage.getItem(GC_AUTH_TOKEN);
// console.log('authToken', authToken);

function fetchQuery(operation, variables) {
  return fetch('https://graphql.sunnyface.com/graphql', {
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

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;

  const subscriptionClient = new SubscriptionClient(
    'wss://subscriptions.graph.cool/v1/__SERVICE_ID__',
    { reconnect: true }
  );
  subscriptionClient.subscribe({ query, variables }, (error, result) => {
    observer.onNext({ data: result });
  });
};

const network = Network.create(fetchQuery, setupSubscription);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store
});

export default environment;
