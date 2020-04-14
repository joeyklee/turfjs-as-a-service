const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {PORT} = require('./config');
const path = require('path');
const turfRoutes = require('./routes/index.js');

const app = express();

if(process.env.NODE_ENV !== 'production' ){
  app.use(morgan('dev'));
} 



app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static( path.resolve(__dirname + '/public')));
app.use('/examples', express.static( path.resolve(__dirname + '/examples')));


app.get('/', (req, res) => {
  res.send(':)');
});

// Turf API endpoints
app.use('/api/v1/turf', turfRoutes);

app.use('*', (req, res) => {
  res.status(404).send('404 - nothing to see here!');
})

app.listen(PORT, ()=>{
  console.log(`see the magic: http://localhost:${PORT}`);
})

