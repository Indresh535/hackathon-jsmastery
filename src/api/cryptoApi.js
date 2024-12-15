import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  };

  const baseUrl = 'https://coinranking1.p.rapidapi.com'

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: () => createRequest('/coins'),
      }),
      getCryptoDetails: builder.query({
        query: (coinUuid) => createRequest(`/coin/${coinUuid}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
      }),
      getExchanges: builder.query({
        query: () => createRequest('coin/Qwsogvtv82FCd/exchanges'),
      }),
    }),
  });
    
  export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;