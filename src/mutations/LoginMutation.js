import { commitMutation, graphql } from 'react-relay';
import environment from '../constants/Environment';

const mutation = graphql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default (email, password, callback) => {
  const variables = {
    email,
    password
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      const token = response.login.token;
      callback(null, token);
    },
    onError: err => console.error(err)
  });
};
