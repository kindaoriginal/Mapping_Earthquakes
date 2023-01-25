// Add console.log to check to see if ouyr code is working 
console.log('working');


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -100.3790], 4);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [33.18999924, -97.668663992],
    [43.6775, -79.6308333333],
    [40.6441666667, -73.7822222222]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    dashArray: '2, 5'
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

