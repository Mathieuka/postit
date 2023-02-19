const awsmobile = {
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_API_URL,
  aws_appsync_region: process.env.NEXT_PUBLIC_REGION,
  aws_appsync_authenticationType: process.env.NEXT_PUBLIC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_API_KEY,
} as Record<string, string>;

export default awsmobile;
