"use client"
import {useEffect, useState} from "react";
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { axios } from '@/api/axiosInstance';

const Dashboard = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
      (async () => {
          try {
              const response = await axios.get('/getAllregisterd');
              setName(response.data);
              //console.log(response.data)
          } catch (e) {
              console.log('not authorized form dashboard error')
          }
      })();
  }, []);

  return (
    <div>
    <div>
    <Card sx={{ minWidth: 275 }} className='dark:bg-gray-800'>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Logined
      </Typography>
      <Typography variant="h5" component="div">
        Dashboard Page
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Dashboard
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        a benevolent smile
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <div>
  {
    name?.map((c, index) => (

      <div key={index}>      
        {c?.firstName}
      </div>
    ))
  }
  </div>
    </div>
    </div>
  )
}

export default Dashboard


