const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {PORT} = require('./config');
const turfRoutes = require('./routes/index.js');

const app = express();

if(process.env.NODE_ENV !== 'production' ){
  app.use(morgan('dev'));
} 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', (req, res) => {
  res.send(':)');
})

// Turf API endpoints
app.use('/api/v1/turf', turfRoutes);

app.use('*', (req, res) => {
  res.status(404).send('404 - nothing to see here!');
})

app.listen(PORT, ()=>{
  console.log(`see the magic: http://localhost:${PORT}`);
})

