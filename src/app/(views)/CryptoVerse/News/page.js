"use client"
import React, { useState } from 'react';
import { useGetCryptosQuery } from '@/api/cryptoApi'
import { useGetCryptoNewsQuery } from '@/api/cryptoNewsApi'
import { Box, Card, Container, CardActions, CardActionArea, Typography, CardHeader, Avatar, CardContent,Collapse, IconButton, CardMedia, Grid, Divider } from '@mui/material'
import Link from 'next/link';
import moment from 'moment';
import MyCard from '@/components/MyCard'
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const News = () => {

  const simplified = true
  const count = 6

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const [expanded, setExpanded] = useState(false);
  
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 10 : 15 });
  const { data } = useGetCryptosQuery(100);
  //console.log("cryptoNews", cryptoNews)

  if (!cryptoNews?.value) return 'Loading...'

  const handleExpandClick = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false)
  };

  return (
    <div>
    Crypto - News
    <Container maxWidth='lg'>
    <select
            //showSearch
            className="my-4"
            placeholder="Select a Crypto"            
            onChange={(e) => setNewsCategory(e.target.value)}
            //filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <option value="Cryptocurency">Cryptocurrency</option>
            {data?.data?.coins?.map((currency, index) => <option key={index} value={currency.name}>{currency.name}</option>)}
          </select>
    <Grid container spacing={2}>
    {cryptoNews.value.map((news,index) => (
      <Grid key={index} item xs={12} sm={6} md={4}>  
         
            <Card sx={{ maxHeight: 550 }}> 
            <Link href={news.url} alt='click link'>
                <CardHeader
                avatar={
                  <Image loader={() => news.provider[0]?.image?.thumbnail?.contentUrl} src={news.provider[0]?.image?.thumbnail?.contentUrl} height={30} width={30} className='rounded-full bg-slate-500 border'/>
                }
                title={news.provider[0].name}
                subheader={moment(news.datePublished).startOf('ss').fromNow()}
              />            
              <CardActionArea>
                <CardMedia
                  className='border hover:scale-105'
                  component="img"
                  height="140"
                  image={news?.image?.thumbnail?.contentUrl}
                  alt="card img"
                />
                <CardContent>   
                  <p className='text-sm font-semibold'>{news.name}</p>                  
                </CardContent>
              </CardActionArea>
              </Link>
              <CardActions disableSpacing>
                <IconButton aria-label="visit website">
                  <OpenInNewIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>     
                <IconButton aria-label="show more">                
                    <ExpandMoreIcon expand={expanded == index}
                    onClick={handleExpandClick(index)}
                    aria-expanded={expanded == index}
                    /> 
                </IconButton>                  
              </CardActions>
            </Card>        

           {/* <Collapse in={expanded==index} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              {news.description.length > 100 ? 
                `${news.description.substring(0, 100)}...` 
                : news.description}
              </Typography>
            </CardContent>
              </Collapse>  */}

          

          <Card sx={{ display: 'flex' }}>
         
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid container>
            <Grid item xs={8}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="b" variant="subtitle">
                  {news.name}
                  </Typography>                  
                </CardContent>
            </Grid>
            <Grid item xs={4}>
                <CardMedia
                  component="img"
                  sx={{ width: 180 }}
                  image={news?.image?.thumbnail?.contentUrl}
                  alt="bit coin news"
                />
            </Grid>
            <Grid item xs={12}>
                <CardActions disableSpacing>
                <IconButton aria-label="visit website">
                  <OpenInNewIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>     
                <IconButton aria-label="show more">                
                    <ExpandMoreIcon expand={expanded == index}
                    onClick={handleExpandClick(index)}
                    aria-expanded={expanded == index}
                    /> 
                </IconButton>                  
              </CardActions>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {news.description.length > 100 ? 
                  `${news.description.substring(0, 100)}...` 
                  : news.description}
              </Typography>
            </Grid>
           </Grid>           
          </Box>
        </Card>   
      </Grid>
      ))}
    </Grid>
  </Container>
    </div>
  )
}

export default News

{/* 


      <MyCard 
            href={news.url}
            imageSrc={news?.image?.thumbnail?.contentUrl}
            cardHeader={news.name}
            iconImg={news.provider[0]?.image?.thumbnail?.contentUrl}
            iconDescription={news.provider[0].name}
            cardBody={news.description.length > 100 ? 
              `${news.description.substring(0, 100)}...` 
              : news.description}
            cardFooter={news.provider[0].name}
            timeStampLeft={moment(news.datePublished).startOf('ss').fromNow()}
            /> 

*/}