"use client"
import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '@/api/cryptoApi'
import { Card, Container, CardActionArea, CardActions, CardMedia, CardContent, Typography, Grid, Input } from '@mui/material'
import Link from 'next/link'
import millify from 'millify';
import MyCard from '@/components/MyCard'

const CryptoCurrency = () => {

  const { data: cryptoList, isFetching } = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    if (cryptoList && cryptoList.data && cryptoList.data.coins) {
      setCryptos(cryptoList?.data?.coins)
      const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setCryptos(filterData)
    }
  }, [cryptoList,searchTerm]);

  if (isFetching) return 'Loading...'

  return (
    <div>
    CryptoCurrency
    <Container maxWidth='lg'>
    <Input type='search' placeholder='search here' onChange={(e) => setSearchTerm(e.target.value)} />
      <Grid container spacing={2}>
      {cryptos.map((curr, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}> 
          <Link href={`/CryptoVerse/CryptoCurrency/${curr.uuid}`}> {curr.name} 
            <MyCard 
              imageSrc={curr.iconUrl}
              cardHeader={curr.name}
              cardBody={`Rank: ${curr.rank}`}
              cardFooter={`Price: ${millify(curr.price)}`}
              timeStampLeft={`Market Cap: ${millify(curr.marketCap)}`}
              timeStampRight={`Daily Change: ${curr.change}`}
              />     
          </Link>
            {/*<Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="40"
                    image={curr.iconUrl}
                    alt="coins img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    <p>Price: {millify(curr.price)}</p>
                    <p>Market Cap: {millify(curr.marketCap)}</p>
                    <p>Daily Change: {curr.change}%</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Rank: {curr.rank}
                    Name: {curr.name}                      
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Link href={`/CryptoVerse/CryptoCurrency/${curr.uuid}`}>{curr.uuid}link</Link>
                </CardActions>
      </Card>*/}
        </Grid>
      ))}
      </Grid>
    </Container>
    </div>
  )
}

export default CryptoCurrency
