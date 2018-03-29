injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
  color: 'rgba(255,255,255,0.4)'
});
var defaultStroke = new ol.style.Stroke({
  color: '#3399CC',
  width: 1.25
});
var defaultSelectionFill = new ol.style.Fill({
  color: 'rgba(255,255,0,0.4)'
});
var defaultSelectionStroke = new ol.style.Stroke({
  color: '#FFFF00',
  width: 1.25
});

var ranges_kab_indonesiadata = function(){ return [[0.000000, 0.000000,
 [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,255,255,1.0)"}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]],
[0.000000, 10.000000,
 [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(254,216,164,1.0)"}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]],
[10.000000, 20.000000,
 [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(253,183,122,1.0)"}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]],
[20.000000, 30.000000,
 [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(252,141,89,1.0)"}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]],
[30.000000, 40.000000,
 [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(236,96,63,1.0)"}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]],
[40.000000, 50.000000,
 [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(211,49,34,1.0)"}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]],
[50.000000, 62.000000,
 [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(179,0,0,1.0)"}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]]];};
                    var textStyleCache_kab_indonesiadata={}
                    var clusterStyleCache_kab_indonesiadata={}
                    var style_kab_indonesiadata = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_kab_indonesiadata'
        };
                        
                        var value = feature.get("TotalMurid");
                        var style = ranges_kab_indonesiadata()[0][2];
                            var ranges = ranges_kab_indonesiadata();
                            for (var i = 0, ii = ranges.length; i < ii; i++){
                                var range = ranges[i];
                                if (value > range[0] && value<=range[1]){
                                    style = range[2];
                                    break;
                                }
                            }
                            
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_kab_indonesiadata = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_kab_indonesiadata'
        };
                        var value = feature.get("TotalMurid");
                        var style = ranges_kab_indonesiadata[0][3];
                            for (var i = 0; i < ranges_kab_indonesiadata.length; i++){
                                var range = ranges_kab_indonesiadata[i];
                                if (value > range[0] && value<=range[1]){
                                    style = range[3];
                                    break;
                                }
                            }
                            
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world imagery',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [new ol.layer.Tile({
	type: 'base-overlay',
	title: 'Hydda roads and labels',
	source: new ol.source.XYZ({
		url: 'http://s.tile.openstreetmap.se/hydda/roads_and_labels/{z}/{x}/{y}.png'
	}),
    projection: 'EPSG:3857'
})
];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_kab_indonesiadata = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_kab_indonesiadata,
                    selectedStyle: selectionStyle_kab_indonesiadata,
                    title: "Kelas Jumlah Pelajar Hilang & Membolos",
                    id: "Kab_Indonesia_Data20170921171934671",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Provinsi</td><td style='text-align:right'>[PROVINSI]</td></tr><tr><td>Kab./kota</td><td style='text-align:right'>[kabuKota]</td></tr><tr><td>Berita Bolos</td><td style='text-align:right'>[infoBolos]</td></tr><tr><td>Jumlah Bolos</td><td style='text-align:right'>[jmlhBolos]</td></tr><tr><td>Berita Hilang</td><td style='text-align:right'>[infoHilang]</td></tr><tr><td>Jumlah Hilang</td><td style='text-align:right'>[jmlhHilang]</td></tr></table>",
                    attributes: ["PROVINSI", "KABKOT", "infoBolos", "jmlhBolos", "infoHilang", "jmlhHilang", "TotalMurid", "kabuKota"],
                    geometryType: "Polygon"
                });
kab_indonesiadata_geojson_callback = function(geojson) {
                              lyr_kab_indonesiadata.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              
                        };

lyr_kab_indonesiadata.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_kab_indonesiadata];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var layersMap  = {'lyr_kab_indonesiadata':lyr_kab_indonesiadata};
var charts = [{"categoryField": "kabuKota", "layer": "Kab_Indonesia_Data20170921171934671", "title": "Jumlah Pelajar Membolos dan Hilang", "displayMode": 1, "valueFields": ["TotalMurid"], "operation": 2}];
var bookmarks = [{"name": "BANTEN", "extent": [11699661.39489974, -783064.0676124963, 11886685.771543007, -647588.6382664193], "description": "Ditemukan berita puluhan pelajar membolos sekolah di Kabupaten/Kota Lebak dan Tangerang Selatan serta 1 pelajar hilang di Tangerang"}, {"name": "JAMBI", "extent": [11257584.552466717, -308482.75662828237, 11632659.26408043, -81632.2156994026], "description": "Ditemukan berita 26 pelajar membolos sekolah di Merangin, Tebo, dan Bungo"}, {"name": "JAWA BARAT", "extent": [11841111.008569261, -873615.5397098329, 12115325.374887174, -659489.8625832066], "description": "Ditemukan berita lebih dari 60 pelajar membolos sekolah di Bogor, Sukabumi, Cirebon, Indramayu, Karawang, dan Bekasi serta 10 pelajar hilang di Bogor, Cianjur, Bandung, Garut, Cirebon, dan Depok"}, {"name": "JAWA TENGAH", "extent": [12084382.483320432, -917297.3629428401, 12433431.108972317, -638445.3083038797], "description": "Ditemukan berita 93 pelajar membolos sekolah di Cilacap, Klaten, Sragen, Grobogan, Jepara, Batang, dan Pekalongan serta 3 pelajar hilang di Wonogiri, Sragen, dan Kudus"}, {"name": "JAWA TIMUR", "extent": [12345189.014200032, -981273.5263038417, 12943138.223007958, -562764.9883271718], "description": "Ditemukan berita lebih dari 160 pelajar membolos sekolah di Pacitan, Ponorogo, Tulungagung, Kediri, Malang, Banyuwangi, Pasuruan, Mojokerto, Jombang, Bojonegoro, Lamongan, Sampang, Pamekasan, dan Sumenep serta 6 pelajar hilang di Kediri, Jember, dan Mojokerto"}, {"name": "KALIMANTAN TENGAH", "extent": [12326656.333362982, -394724.5117464361, 12896053.580472857, 88307.70999383411], "description": "Ditemukan berita 5 pelajar membolos sekolah di Gunung Mas dan Murung Raya"}, {"name": "LAMPUNG", "extent": [11529499.274707425, -688011.1784049295, 11823402.630011974, -414826.1816738718], "description": "Ditemukan berita 3 pelajar membolos sekolah di Lampung Utara serta 1 pelajar hilang di Pasewaran"}, {"name": "NANGGROE ACEH DARUSSALAM", "extent": [10576432.172498584, 223587.23679795206, 10941152.760906111, 677753.8042091392], "description": "Ditemukan berita lebih dari 70 pelajar membolos sekolah di Aceh Timur, Aceh Barat, dan Lhokseumawe"}, {"name": "NUSA TENGGARA BARAT", "extent": [12893132.94872003, -1018381.9913452434, 13284401.491303973, -902463.8205126524], "description": "Ditemukan berita 37 pelajar membolos sekolah di Sumbawa dan Mataram serta 1 pelajar hilang di Mataram"}, {"name": "RIAU", "extent": [11134715.239342958, -124938.82827858801, 11556589.625479298, 325096.51719183795], "description": "Ditemukan berita lebih dari 60 pelajar membolos sekolah di Pelalawan, Rokan Hulu, dan Rokan Hilir serta 2 pelajar hilang di Indragiri Hilir dan Pekanbaru"}, {"name": "SULAWESI SELATAN", "extent": [13028664.321810558, -866373.3780584652, 13563190.178326027, -211015.14329554772], "description": "Ditemukan berita lebih dari 82 pelajar membolos sekolah di Jeneponto, Pangkajene & Kepulauan, Bone, dan Luwu Timur serta 5 pelajar hilang di Takalar, Pangkajene & Kepulauan, dan Bone"}, {"name": "SULAWESI UTARA", "extent": [13704637.247947572, 32456.447773475946, 14155827.411348801, 620560.5101811623], "description": "Ditemukan berita lebih dari 17 pelajar membolos sekolah di Kep. Sangihe dan Bitung"}, {"name": "SUMATERA BARAT", "extent": [10975732.189658668, -373133.2078231507, 11342667.691189833, 101014.32388081725], "description": "Ditemukan berita 54 pelajar membolos sekolah di Pesisir Selatan, Agam, Padang, dan Payakumbuh"}, {"name": "SUMATERA SELATAN", "extent": [11362096.465674747, -548964.1739559615, 11820955.071849732, -180967.5591735058], "description": "Ditemukan berita 62 pelajar membolos sekolah di Lahat dan Palembang serta 2 pelajar hilang di Palembang"}, {"name": "SUMATERA UTARA", "extent": [10804567.588521337, -71107.96530675572, 11179346.858597806, 479287.38706752274], "description": "Ditemukan berita lebih dari 232 pelajar membolos sekolah di Tapanuli Tengah, Tapanuli Utara, Asahan, Simalungun, Karo, Deli Serdang, Serdang Bedagai, Kota Tanjungbalai, Kota Medan, dan Kota Binjai serta 1 pelajar hilang di Asahan"}, {"name": "BALI", "extent": [12738482.644404095, -989035.3150565781, 12881004.777224138, -900410.7868326225], "description": "Ditemukan berita 1 pelajar hilang di Kabupaten/Kota Tabanan"}, {"name": "BANTEN", "extent": [11699661.39489974, -783064.0676124963, 11886685.771543007, -647588.6382664193], "description": "Ditemukan berita puluhan pelajar membolos sekolah di Kabupaten/Kota Lebak dan Tangerang Selatan serta 1 pelajar hilang di Tangerang"}, {"name": "BENGKULU", "extent": [11561750.243624467, -552849.3881378539, 11569669.438707339, -544986.0148990911], "description": "Ditemukan berita 20 pelajar membolos sekolah di Kabupaten/Kota Bengkulu Selatan"}, {"name": "DAERAH ISTIMEWA YOGYAKARTA", "extent": [12246696.034994027, -916402.9870931356, 12338054.893082079, -841994.8977117371], "description": "Ditemukan berita 1 pelajar hilang di Kota Yogyakarta"}, {"name": "DKI JAKARTA", "extent": [11842515.428271718, -710663.8462964585, 11908160.448349427, -577905.2363505408], "description": "Ditemukan berita 3 pelajar membolos sekolah di Jakarta Selatan"}, {"name": "GORONTALO", "extent": [13487608.124860693, 34060.25336551732, 13753778.515708126, 115891.1955342425], "description": "Ditemukan berita 9 pelajar membolos sekolah di Bone Bolango"}, {"name": "JAMBI", "extent": [11257584.552466717, -308482.75662828237, 11632659.26408043, -81632.2156994026], "description": "Ditemukan berita 26 pelajar membolos sekolah di Merangin, Tebo, dan Bungo"}, {"name": "JAWA BARAT", "extent": [11841111.008569261, -873615.5397098329, 12115325.374887174, -659489.8625832066], "description": "Ditemukan berita lebih dari 60 pelajar membolos sekolah di Bogor, Sukabumi, Cirebon, Indramayu, Karawang, dan Bekasi serta 10 pelajar hilang di Bogor, Cianjur, Bandung, Garut, Cirebon, dan Depok"}, {"name": "JAWA TENGAH", "extent": [12084382.483320432, -917297.3629428401, 12433431.108972317, -638445.3083038797], "description": "Ditemukan berita 93 pelajar membolos sekolah di Cilacap, Klaten, Sragen, Grobogan, Jepara, Batang, dan Pekalongan serta 3 pelajar hilang di Wonogiri, Sragen, dan Kudus"}, {"name": "JAWA TIMUR", "extent": [12345189.014200032, -981273.5263038417, 12943138.223007958, -562764.9883271718], "description": "Ditemukan berita lebih dari 160 pelajar membolos sekolah di Pacitan, Ponorogo, Tulungagung, Kediri, Malang, Banyuwangi, Pasuruan, Mojokerto, Jombang, Bojonegoro, Lamongan, Sampang, Pamekasan, dan Sumenep serta 6 pelajar hilang di Kediri, Jember, dan Mojo"}, {"name": "KALIMANTAN SELATAN", "extent": [12728922.799266525, -528794.9190737179, 12974818.219039315, -146402.11986590043], "description": "Ditemukan berita 1 pelajar hilang di Banjarmasin"}, {"name": "KALIMANTAN TENGAH", "extent": [12326656.333362982, -394724.5117464361, 12896053.580472857, 88307.70999383411], "description": "Ditemukan berita 5 pelajar membolos sekolah di Gunung Mas dan Murung Raya"}, {"name": "KALIMANTAN TIMUR", "extent": [12672238.430648433, -268292.3463163063, 13245849.273042008, 491059.9295154372], "description": "Ditemukan berita lebih dari 10 pelajar membolos sekolah di Kutai Kartanegara dan Bontang"}, {"name": "LAMPUNG", "extent": [11529499.274707425, -688011.1784049295, 11823402.630011974, -414826.1816738718], "description": "Ditemukan berita 3 pelajar membolos sekolah di Lampung Utara serta 1 pelajar hilang di Pasewaran"}, {"name": "NANGGROE ACEH DARUSSALAM", "extent": [10576432.172498584, 223587.23679795206, 10941152.760906111, 677753.8042091392], "description": "Ditemukan berita lebih dari 70 pelajar membolos sekolah di Aceh Timur, Aceh Barat, dan Lhokseumawe"}, {"name": "NUSA TENGGARA BARAT", "extent": [12893132.94872003, -1018381.9913452434, 13284401.491303973, -902463.8205126524], "description": "Ditemukan berita 37 pelajar membolos sekolah di Sumbawa dan Mataram serta 1 pelajar hilang di Mataram"}, {"name": "NUSA TENGGARA TIMUR", "extent": [13238893.298853783, -1232970.3872713402, 13936458.062955346, -900586.5279410217], "description": "Ditemukan berita belasan pelajar membolos sekolah di Manggarai Barat"}, {"name": "RIAU", "extent": [11134715.239342958, -124938.82827858801, 11556589.625479298, 325096.51719183795], "description": "Ditemukan berita lebih dari 60 pelajar membolos sekolah di Pelalawan, Rokan Hulu, dan Rokan Hilir serta 2 pelajar hilang di Indragiri Hilir dan Pekanbaru"}, {"name": "SULAWESI SELATAN", "extent": [13028664.321810558, -866373.3780584652, 13563190.178326027, -211015.14329554772], "description": "Ditemukan berita lebih dari 82 pelajar membolos sekolah di Jeneponto, Pangkajene & Kepulauan, Bone, dan Luwu Timur serta 5 pelajar hilang di Takalar, Pangkajene & Kepulauan, dan Bone"}, {"name": "SULAWESI UTARA", "extent": [13704637.247947572, 32456.447773475946, 14155827.411348801, 620560.5101811623], "description": "Ditemukan berita lebih dari 17 pelajar membolos sekolah di Kep. Sangihe dan Bitung"}, {"name": "SUMATERA BARAT", "extent": [10975732.189658668, -373133.2078231507, 11342667.691189833, 101014.32388081725], "description": "Ditemukan berita 54 pelajar membolos sekolah di Pesisir Selatan, Agam, Padang, dan Payakumbuh"}, {"name": "SUMATERA SELATAN", "extent": [11362096.465674747, -548964.1739559615, 11820955.071849732, -180967.5591735058], "description": "Ditemukan berita 62 pelajar membolos sekolah di Lahat dan Palembang serta 2 pelajar hilang di Palembang"}, {"name": "SUMATERA UTARA", "extent": [10804567.588521337, -71107.96530675572, 11179346.858597806, 479287.38706752274], "description": "Ditemukan berita lebih dari 232 pelajar membolos sekolah di Tapanuli Tengah, Tapanuli Utara, Asahan, Simalungun, Karo, Deli Serdang, Serdang Bedagai, Kota Tanjungbalai, Kota Medan, dan Kota Binjai serta 1 pelajar hilang di Asahan"}]
var legendData = {"Kab_Indonesia_Data20170921171934671": [{"href": "0_0.png", "title": "No Data"}, {"href": "0_1.png", "title": "0-10 Pelajar"}, {"href": "0_2.png", "title": "11-20 Pelajar"}, {"href": "0_3.png", "title": "21-30 Pelajar"}, {"href": "0_4.png", "title": "31-40 Pelajar"}, {"href": "0_5.png", "title": "41-50 Pelajar"}, {"href": "0_6.png", "title": ">50 Pelajar"}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [10448387.781840, -1939808.681478, 15826252.189487, 1372161.163904];
var unitsConversion = 111325.0;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)}),
new ol.control.Attribution({collapsible: false}),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"})]
});



var BasicApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: getMuiTheme()
    };
  },
  componentDidMount: function() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, ]}));
  },
  _toggle: function(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable: function() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST: function() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery: function() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit: function() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _hideAboutPanel: function(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  },
  _toggleChartPanel: function(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  render: function() {
    var toolbarOptions = {title:"Peta Sebaran Berita Pelajar Hilang dan Membolos Sekolah 2017"};
    return React.createElement("div", {id: 'content'},
      React.createElement(Header, toolbarOptions ,
React.createElement("div", {id:'geocoding'},
                                        React.createElement(Geocoding, {maxResults:5})),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-bar-chart', tooltip: 'Charts', onTouchTap: this._toggleChartPanel.bind(this)}),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-help', tooltip: 'Help', onTouchTap: function(){window.open('help/help.html','_blank')}}),
React.createElement(Select, {toggleGroup: 'navigation', map:map}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true}),
React.createElement(DrawFeature, {toggleGroup: 'navigation', map: map}),
React.createElement(Measure, {toggleGroup:'navigation', map:map, geodesic:true})),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id:'geocoding-results', className:'geocoding-results-panel'},
                                    React.createElement(GeocodingResults, {map:map, zoom:10})
                                  ),
React.createElement("div", {id: 'bookmarks-panel'},
                                        React.createElement(Bookmarks, {introTitle:'Data Berita per Provinsi', introDescription:'Geser untuk melihat data berita per provinsi. Detail beritanya silakan klik langsung pada kabupaten di Peta. Adapun untuk melihat visualisasi data berita dalam bentuk chart, jangan lupa lakukan select features terlebih dahulu. Selebihnya cek HELP.', dots:false,
                                            animatePanZoom:true, menu: false, map: map, bookmarks: bookmarks,
                                            width:'400px' })
                                      ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
      )
      ,
React.createElement("div", {id: 'chart-panel', className: 'chart-panel'},
                                       React.createElement(Chart, {charts: charts, onClose: this._toggleChartPanel.bind(this)})
                                        ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:true,
                                        showZoomTo:true, allowReordering:true,
                                        allowFiltering:true, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', showUpload:true, map:map,
                                        includeLegend:true, allowStyling:true, showTable:true})),
React.createElement(LoadingPanel, {map:map}),
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:false,
                                    duration:250,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id: 'editpopup', className: 'ol-popup'},
                                React.createElement(EditPopup, {toggleGroup: 'navigation', map: map})
                            ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
