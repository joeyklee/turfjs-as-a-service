const express = require('express');
const turf = require('@turf/turf');
const morgan = require('morgan');
const {PORT} = require('./config');

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
  console.log(`see the magic: https://localhost:${PORT}`);
})

