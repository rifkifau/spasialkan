
mapboxgl.accessToken = 'pk.eyJ1IjoidmVyc2l0YW5pIiwiYSI6ImNpeGI5aXZ6bjAwNXcyb2tscWp4eWJxdHkifQ.YYiF2JhBC05mgzVaL-LGfw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/versitani/cj5qkd1me1xw22spgdzlk0z9c',
  center: [108.991388,-7.640613],
  zoom: 15,
  minZoom: 10,     //restrict map zoom - buildings not visible beyond 13
  maxZoom: 19,
  pitch: 60,      //tilt camera
  bearing: 17.5   //adjust angle we're looking (17.5 degrees from north)
});

var features=[];

var layers = [
    //Color     Height threshold   Label
    ['#feb24c',       10,         '10 Meters'],
    ['#fd8d3c',       20,         '20 Meters'],
    ['#fc4e2a',       30,         '30 Meters'],
    ['#e31a1c',       40,         '40 Meters'],
    ['#bd0026',       50,         '50 Meters']
];

//create a popup object and give it some properties. we'll generate/overwrite a new popup each time we click.
var popup = null;

map.on('style.load', function(){
  var legend = document.getElementById('legend'); //get the legend from the HTML document
  map.addSource('building_source', {
    'type': 'vector',
    'url': 'mapbox://versitani.4n6g5esk'
  });

  layers.forEach(function(layer, i){
    map.addLayer({
        'id': 'building_layer-' + i,
        'type': 'fill',
        'source': 'building_source',
        'paint': {
            'fill-color': layer[0],
            'fill-opacity': 0.6,
            'fill-extrude-height': { //grab the height from the 'EleZ' attribute from building data
              'type': 'identity',
              'property': 'elev'
            },
            'fill-extrude-base': 0
        },
        'source-layer': 'bangunan-5fk1y3' //name of the source layer of buildings found on mapbox studio
      });
      // Build out legends
      //***********//
       var item = document.createElement('div');//each layer gets a 'row' - this isn't in the legend yet, we do this later
       var key = document.createElement('span');//add a 'key' to the row. A key will be the color circle
       var value = document.createElement('span');//add a value variable to the 'row' in the legend

       key.className = 'legend-key'; //the key will take on the shape and style properties defined here, in the HTML
       key.style.backgroundColor = layer[0]; // the background color is retreived from teh layers array

       value.id = 'legend-value-' + i; //give the value variable an id that we can access and change

       item.appendChild(key); //add the key (color cirlce) to the legend row
       item.appendChild(value);//add the value to the legend row

       legend.appendChild(item); // Add row to the legend

    });

  layers.forEach(function(layer, i) {
    var filters = ['all',['<=', 'elev', layer[1]]];
    if (i !== 0) filters.push(['>', 'elev', layers[i - 1][1]]);
    map.setFilter('building_layer-' + i, filters);
    document.getElementById('legend-value-' + i).textContent = layer[2];//.toLocaleString(); //as we iterate through the layers
                                                                                          //get the correct row, and add the appropriate text                                                                     //get the correct row, and add the appropriate text
  });
});

//create an array that has the name of all layers created above
var all_added_layers = []
layers.forEach(function(layer,i){
  all_added_layers.push('building_layer-'+i);
})

map.on('mousemove', function(e){
   features = map.queryRenderedFeatures(e.point, {all_added_layers}); //get features that are in building layers
  if (features.length > 0){
    console.log(features[0].id);
    //use the following code to change the cursor to a pointer ('pointer') instead of the default ('')
    map.getCanvas().style.cursor = (features[0].properties.elev != null) ? 'pointer' : '';
  }
  //if there are no provinces under our mouse, then change the cursor back to the default
  else {
    map.getCanvas().style.cursor = '';
  }
});

//an event where when there is a mouse click, send the event data (represented by e) to a function that does something
map.on('click', function(e) {
  popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
  });

  //get the spatial features where your mouse is currently located. note we use the pixel location (e.point) and not lat/lon here.
  //also specify the feature we want to pay attention to - 'provinces_base'
  var features = map.queryRenderedFeatures(e.point, {layers: all_added_layers});
  if (features.length > 0 && features[0].properties.elev != null){ //if there is a feature in our features array then proceed. otherwise, we don't have anything to work with
    //center at click locations
    map.panTo(e.lngLat, {'duration': 1000});
    //set the location of our popup to the lnglat of our click (note we use e.lnglat here and NOT e.point)
    popup.setLngLat(e.lngLat);
    //give the popup content
    popup.setHTML(
	  '<center>Jenis Bangunan: <b>' + (features[0].properties.ttpn_lahan) + '</b>'+
	  '<center>Tinggi bangunan kira-kira: <b>' + Math.round(features[0].properties.elev) + '</b> meters.' +
	  '<center>Jumlah lantai bangunan: <b>' + Math.round(features[0].properties.tinggi) + '</b> lantai.' +
	  '<center>Luas lahan: <b>' + Math.round(features[0].properties.luas_m2) + '</b> m2.'
    );
    //finally add the popup to the map
    popup.addTo(map);
  }

  //if there are no features that we're interested in, reset the filter for provinces_hover and remove any popup.
  else{
    //map.setFilter('provinces_hover',['==','PRVNAME','']);
    popup.remove();
  }

});



// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat);
});

document.getElementById('fit').addEventListener('click', function() {
    map.fitBounds([[
        108.96709,
        -7.64899
    ], [
		109.020695,
        -7.623341
    ]]);
});