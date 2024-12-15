"use client"
import React, {useState} from 'react'
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useGetExchangesQuery } from '@/api/cryptoApi';

const Exchanges = () => {

  const [expanded, setExpanded] =  useState(false);
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  //console.log("exchangesList", useGetExchangesQuery())
 // Note: To access this endpoint you need premium plan
  if (isFetching) return 'Loading...';


  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <div>
    Crypto- Exchanges
    {exchangesList.map((exchange) => (      
    <Accordion key={exchange.uuid} expanded={expanded === exchange.uuid} onChange={handleChange(exchange.uuid)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id={exchange.uuid}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
        <p><strong>{exchange.rank}</strong></p>
        <img className="exchange-image" src={exchange.iconUrl} alt='img' height={20} width={40}/>
        <p><strong>{exchange.name}</strong></p>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
          
        <Typography sx={{ color: 'text.secondary' }}>
        <p span={6}>${millify(exchange.Volume)}</p>
                    <p span={6}>{millify(exchange.numberOfMarkets)}</p>
                    <p span={6}>{millify(exchange.price)}%</p>
        </Typography>
        </AccordionDetails>
    </Accordion>
    ))}
    </div>
  )
}

export default Exchanges

