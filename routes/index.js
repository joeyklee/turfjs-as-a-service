const express = require('express');
const api = express.Router();
const turf = require('@turf/turf');
const axios = require('axios').default;


/**
 * calls turf.collect()
 */
api.post('/collect', async (req, res) => {
  try {
    const {inPoints, inPolygons, inProperty, outProperty} = req.body;

    // TODO: add ability to send JSON objects
    let points = await axios.get(inPoints);
    points = await points.data;
    let polygons = await axios.get(inPolygons);
    polygons = await polygons.data;


    const collected = turf.collect(polygons, points, inProperty, outProperty);

   
    res.status(201).json({data: collected});
  } catch (error) {
    res.json(error);
  }
});


module.exports = api;

