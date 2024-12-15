"use client"
import React from 'react'
import { useGetCryptosQuery } from '@/api/cryptoApi'
import axios from 'axios'
import { Card, Container, CardMedia, CardActionArea, CardContent, Grid } from '@mui/material'
import MyCard from '@/components/MyCard'

const Cryptoverse = () => {
  const { data, isFetching } = useGetCryptosQuery()
  
  const globalStatus = data?.data?.stats
  if (isFetching) return 'Loading...'

  return (
    <div>
    Cryptoverse-Home
    <Container maxWidth='lg'>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={3}>
        <MyCard 
            imageSrc='/images/avatar/chatbot.png'
            cardHeader='Total'
            cardFooter={globalStatus.total}
            />     
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <MyCard 
          imageSrc='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg'
          cardHeader='Total Coins'
          cardFooter={globalStatus.totalCoins}
          />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <MyCard 
            imageSrc='/images/avatar/chatbot.png'
            cardHeader='Total Markets'
            cardBody={globalStatus.totalMarkets}
            />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
      <MyCard 
            imageSrc='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg'
            cardHeader='Total Exchanges'
            cardBody={globalStatus.totalExchanges}
            />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
      <MyCard 
            imageSrc='/images/avatar/chatbot.png'
            cardHeader='Total Market Cap'
            cardBody={globalStatus.totalMarketCap}
            />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
      <MyCard 
            imageSrc='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg'
            cardHeader='Total 24h Volume'
            cardBody={globalStatus.total24hVolume} 
            />
      </Grid>
    </Grid>
    </Container>
    </div>
  )
}

export default Cryptoverse
