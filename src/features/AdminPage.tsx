
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import foto from './AvanadeLogo.png'



export const AdminPage = () => {
  return <div className="App-header"> 
    <h1>
    Work Experience
    
    </h1>
    <Card sx={{ maxWidth: 1000,bgcolor:'#7b92c0', color:'' }} >
      <CardContent>
      <Typography>November 2020 - Now</Typography>
      <img src={foto} className="AvanadeLogo" alt="logo" />
      
        <Typography gutterBottom variant="h5" component="div">
           Artificial Intelligence Software developer
        </Typography>
        <Typography variant="h4" color="text.secondary">
 EXPERTISE: C#, Python, Chatbots,  Microsoft Cognitive Services, Back-End, SQL-Server, Microsoft Azure, Javascript, Typescript, React</Typography>
      </CardContent>
    
    </Card>
 
   

    <h1>
   Education
    </h1>
    <Card sx={{ maxWidth: 1000 }} >
      <CardContent   sx={{bgcolor:'#7b92c0', color:''}} >
      <Typography>September 2017 - October 2020</Typography>
        <Typography>Università di Trento</Typography>
        <Typography gutterBottom variant="h5" component="div">
           Laurea Magistrale in fisica
        </Typography>
        <Typography variant="h4" color="text.secondary">
          Tesi dal titolo "Preliminary Measurement of Galactic Halo thickness from the isotopic separation of Beryllium from cosmic rays with AMS02 experiment data" 
        </Typography>
     
      </CardContent>
    
    </Card>
    </div>
};