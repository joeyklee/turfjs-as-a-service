# Turfjs as a service
Node/Express API to run Turfjs on Glitch

**Work in progress**



# API

Base URL: `https://joeyklee-turfjs-as-a-service.glitch.me/`

## POST: `/api/v1/turf/collect`

Send JSON with the following:

```json
{
  "inPoints": <GeoJSON Feature Collection of Points | URL to GeoJSON>,
  "inPolygons": <GeoJSON Feature Collection of Polygons | URL to GeoJSON>,
  "inProperty":<String - property name in your inPoints>, 
  "outProperty": <String - property name of the array of collected data to be added to your inPolygons>
  }
```

To: 

```
https://joeyklee-turfjs-as-a-service.glitch.me/api/v1/turf/collect
```

### Examples 

In the commandline:
```sh
curl -X POST --header "Content-Type: application/json" -d '{"inPoints":"https://cdn.jsdelivr.net/gh/joeyklee/turfjs-as-a-service@master/examples/data/point-nyc.geojson","inPolygons": "https://cdn.jsdelivr.net/gh/joeyklee/turfjs-as-a-service@master/examples/data/polygon-nyc.geojson","inProperty":"counts", "outProperty": "joined"}' http://localhost:3000/api/v1/turf/collect
```

In the browser: 
* [examples/turf-collect.html](./examples/turf-collect.html);

## POST: `/api/v1/turf/buffer`

Send JSON with the following:

```json
{
  "inPoints": <GeoJSON Feature Collection of Points | URL to GeoJSON>,
  "inPolygons": <GeoJSON Feature Collection of Polygons | URL to GeoJSON>,
  "inProperty":<String - property name in your inPoints>, 
  "outProperty": <String - property name of the array of collected data to be added to your inPolygons>
  }
```

To: 

```
https://joeyklee-turfjs-as-a-service.glitch.me/api/v1/turf/collect
```

### Examples 

In the commandline:
```sh
curl -X POST --header "Content-Type: application/json" -d '{"geojson":"https://cdn.jsdelivr.net/gh/joeyklee/turfjs-as-a-service@master/examples/data/point-nyc.geojson", "radius":500, "options":{ "units":"meters", "steps": 32}}' http://localhost:3000/api/v1/turf/buffer
```