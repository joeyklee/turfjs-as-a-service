const express = require("express");
const api = express.Router();
const turf = require("@turf/turf");
const axios = require("axios").default;

/**
 * POST
 * calls turf.collect()
 */
api.post("/collect", async (req, res) => {
  try {
    const { inPoints, inPolygons, inProperty, outProperty } = req.body;

    let points;
    let polygons;

    if (typeof inPoints !== "object") {
      console.log(inPoints)
      points = await axios.get(inPoints);
      points = await points.data;
    } else {
      points = Object.assign({...inPoints});
    }

    if (typeof inPolygons !== "object") {
      polygons = await axios.get(inPolygons);
      polygons = await polygons.data;
    } else {
      polygons = Object.assign({...inPolygons});
    }

    // spatial join
    const collected = turf.collect(polygons, points, inProperty, outProperty);

    res.status(201).json({ data: collected });
  } catch (error) {
    res.json(error);
  }
});

/**
 * POST
 * calls turf.collect()
 */
api.post("/buffer", async (req, res) => {
  try {
    const { geojson, radius, options} = req.body;

    console.log(req.body);
    let input;

    if (typeof geojson !== "object") {
      input = await axios.get(geojson);
      input = await input.data;
    } else {
      input = Object.assign({...geojson});
    }

    // spatial join
    const buffered = turf.buffer(input, radius, options);

    res.status(201).json({ data: buffered });
  } catch (error) {
    res.json(error);
  }
});

module.exports = api;
