const production = process.env.NODE_ENV === 'production';

export const GC_USER_ID = 'graphcool-user-id';
export const GC_AUTH_TOKEN = 'graphcool-auth-token';
export const GRAPHQL_ENDPOINT = production
  ? 'https://graphql.sunnyface.com/graphql'
  : 'https://graphql.dev/graphql';
