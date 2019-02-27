var petaku = L.map('kartogram').setView([-8.404913, 115.072245],10);

var latarpeta = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(petaku);


let petabali = L.layerGroup().addTo(petaku);
let contiguous = L.layerGroup();
let noncontiguous = L.layerGroup();
let dorling = L.layerGroup();


$.getJSON('data/bali.geojson', function(bali2010) {
  bali = L.geoJson(bali2010, {
      style: stylebali,
      onEachFeature: onEachFeature1
  }).addTo(petaku);
});

$.getJSON('data/contiguous.geojson', function(cont) {
  kartogramcont = L.geoJson(cont, {
      style: stylecarto,
      onEachFeature: onEachFeature2
  })
});

$.getJSON('data/noncontiguous.geojson', function(noncont) {
  kartogramnoncont = L.geoJson(noncont, {
      style: stylecarto,
      onEachFeature: onEachFeature3
  })
});

$.getJSON('data/dorling.geojson', function(dorl) {
  kartogramdorl = L.geoJson(dorl, {
      style: stylecarto,
      onEachFeature: onEachFeature4
  })
});

function onEachFeature1(feature, layer) {
  petabali.addLayer(layer),
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight1,
    click: zoomToFeature
  })
};

function onEachFeature2(feature, layer) {
  contiguous.addLayer(layer),
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight2,
    click: zoomToFeature
  });
};

function onEachFeature3(feature, layer) {
  noncontiguous.addLayer(layer),
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight3,
    click: zoomToFeature
  });
};

function onEachFeature4(feature, layer) {
  dorling.addLayer(layer),
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight4,
    click: zoomToFeature
  });
};

var latar = {
  "Basemaps" : latarpeta,
}
var petaoverlay = {
  "Choropleth" : petabali,
  "Contiguous" : contiguous,
  "Non-Contiguous" : noncontiguous,
  "Dorling" : dorling
};

L.control.layers(petaoverlay, latar, {
  collapsed: false
}).addTo(petaku);

function getColor(warna) {
    return warna > 500000  ? '#E31A1C' :
        warna > 400000  ? '#FC4E2A' :
        warna > 300000   ? '#FD8D3C' :
        warna > 200000   ? '#FEB24C' :
                '#FFEDA0';
  }
  
  function stylebali(feature) {
    return {
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.Jumlah_Pen)
    };
  }
  
  function stylecarto(feature) {
    return {
      weight: 2,
      opacity: 1,
      color: 'black',
      dashArray: '3',
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.Jumlah_Pen)
    };
  }


  var info = L.control();

  info.onAdd = function (petaku) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };

  info.update = function (props) {
    this._div.innerHTML = (props ?
      '<b>' + props.Kabupaten + '</b><br />' + 'Jumlah Penduduk: ' + props.Jumlah_Pen + ' jiwa' + '<br/>' +
      'Penduduk Laki-laki: ' + props.Laki_laki + ' jiwa' +  '<br/>' +
      'Penduduk Perempuan: ' + props.Perempuan + ' jiwa'
      : '');
  };

  info.addTo(petaku);

  function zoomToFeature(e) {
    petaku.fitBounds(e.target.getBounds());
  }

  function highlightFeature(e) {
    var layer = e.target;
  
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });
  
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  
    info.update(layer.feature.properties);
  }
  
  var bali;
  var kartogramcont;
  var kartogramnoncont;
  var kartogramdorl;
  
  function resetHighlight1(e) {
    bali.resetStyle(e.target);
    info.update();
  }
  function resetHighlight2(e) {
    kartogramcont.resetStyle(e.target);
    info.update();
  }
  function resetHighlight3(e) {
    kartogramnoncont.resetStyle(e.target);
    info.update();
  }
  function resetHighlight4(e) {
    kartogramdorl.resetStyle(e.target);
    info.update();
  }
