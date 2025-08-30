import { GraphQLClient } from 'graphql-request';

const url = 'https://brzuza.us-east-a.ibm.stepzen.net/api/garish-quetzal/graphql';

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

console.log('🔑 apiKey carregada:', apiKey?.slice(0, 10) + '...');
console.log('📡 header final:', `apikey ${apiKey}`);

const client = new GraphQLClient(url, {
    headers:{
        Authorization: `apikey ${apiKey}`,
    },
});

export default client;
