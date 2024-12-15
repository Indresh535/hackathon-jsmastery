"use client"
import React, { useState } from 'react'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '@/api/cryptoApi'
import AddCardIcon from '@mui/icons-material/AddCard';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { Box, Card, Container, Stack, Grid } from '@mui/material';
import LineChart from './LineChart'

const CryptoCurrencyDetails = ({ params } ) => {

  const coinId = params.coinUuid
  const {data, isFetching} = useGetCryptoDetailsQuery(coinId)
  const [timePeriod, setTimePeriod] = useState('7d');
  const cryptoDetails = data?.data?.coin;
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
  if (isFetching) return 'Loader...'

  //console.log("coinHistory?.data?.history", coinHistory)
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <AddCardIcon /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <AddCardIcon /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <AddCardIcon /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <AddCardIcon /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <AddCardIcon /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <AddCardIcon /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <AddCardIcon /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <AddCardIcon /> : <AddCardIcon />, icon: <AddCardIcon /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <AddCardIcon /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <AddCardIcon /> },
  ];

  console.log("id data", data)

  return (
    <div>
    <Container maxWidth='lg'>
    <Stack>
      <Stack item>    
        CryptoCurrencyDetails of Post: {coinId}
          <h2> {data?.data?.coin.name} ({data?.data?.coin.symbol}) h2rice </h2>
          <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
          <select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
          {time.map((date, index) => <option key={index}>{date}</option>)}
        </select>
      </Stack>
    </Stack>
<Box>
      <Grid container spacing={2}>
          <Grid item sm={12} lg={6}>
            <b className="coin-details-heading">{cryptoDetails.name} Value Statistics</b>
              <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
                {stats.map(({ icon, title, value, index }) => (
                  <div key={index}>
                    <Card>
                      <p>{icon} {title} <b>{value}</b> </p>
                    </Card>   
                  </div>
                ))}
          </Grid>
          <Grid item sm={12} lg={6}>
              <div className="other-stats-info">        
                <b className="coin-details-heading">Other Stats Info</b>
                <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>         
              {genericStats.map(({ icon, title, value, index }) => (
                <Card key={index}>
                  <p>{icon} {title} <b>{value}</b> </p>
                </Card>   
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
          <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/>   
          </Grid>
          <Grid item xs={12}>      
            <Card className="coin-desc-link">       
                <p level={3} className="coin-details-heading">What is {cryptoDetails.name}?</p>
                {HTMLReactParser(cryptoDetails.description)}        
            </Card>
          </Grid>
          <Grid item xs={12}>      
              <div className="coin-links">
                <b level={3} className="coin-details-heading">{cryptoDetails.name} Links</b>
                {cryptoDetails.links?.map((link,index) => (
                  <Card className="coin-link m-2" key={index}>
                    <p level={5} className="link-name">{link.type}</p>
                    <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                  </Card>
                ))}
              </div>
          </Grid>
      </Grid>
        </Box>
        </Container>
    </div>

  )
}

export default CryptoCurrencyDetails
