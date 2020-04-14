import express from 'express';
import turf from '@turf/turf';
import morgan from 'morgan';
import {PORT} from './config';

const app = express();

if(process.env.NODE_ENV !== 'production' ){
  app.use(morgan('dev'));
} 

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.send(':)');
})

app.post('/api/v1/turf-collect', async (req, res) => {
  
  res.json({message:"hello"});
})

// app.post('/api/v1/turf-collect', async (req, res) => {
  
//   res.json({message:"hello"});
// })



app.listen(PORT, ()=>{
  `see the magic: https://localhost:${PORT}`
})

