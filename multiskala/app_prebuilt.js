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


                    var textStyleCache_kab_diy_project={}
                    var clusterStyleCache_kab_diy_project={}
                    var style_kab_diy_project = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(12,195,140,0.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_kab_diy_project = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'Digital Globe imagery',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html: '&copy; <a href="https://www.mapbox.com/about/maps">Mapbox</a>, <a href="https://www.digitalglobe.com">DigitalGlobe</a> contributors'})],
        url: 'http://api.tiles.mapbox.com/v4/digitalglobe.nal0g75k/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6ImNpdjZuamY5eDAwMXYydHA4NmczdDlnMDYifQ.urroGlfAKc8nSsmYr5cm4Q'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [new ol.layer.Tile({
	type: 'base-overlay',
	title: 'Peta Luas Wilayah Multiskala',
	id: 'legenda_multiskala',
	source: new ol.source.XYZ({
		url: 'https://api.mapbox.com/styles/v1/versitani/cj0codgly00bc2sqpqxxmnfir/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc2l0YW5pIiwiYSI6ImNpeGI5aXZ6bjAwNXcyb2tscWp4eWJxdHkifQ.YYiF2JhBC05mgzVaL-LGfw'
	}),
    projection: 'EPSG:3857'
})
];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_kab_diy_project = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_kab_diy_project,
                    selectedStyle: selectionStyle_kab_diy_project,
                    title: "Kab_DIY_Project",
                    id: "Kab_DIY_Project20170317012106787",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
kab_diy_project_geojson_callback = function(geojson) {
                              lyr_kab_diy_project.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_kab_diy_project.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_kab_diy_project];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var bookmarks = [{"name": "BANTUL", "extent": [12267838.293133179, -896596.52435866, 12303186.075581197, -867405.1836946914], "description": "Kabupaten Bantul dengan ibu kota Bantul mempunyai luas wilayah sekitar 50.685 ha, terdiri dari 17 kecamatan, 74 desa, dan 933 padukuhan."}, {"name": "GUNUNG KIDUL", "extent": [12281757.996979157, -916344.2482333201, 12338073.13018624, -869005.8228460129], "description": "Kabupaten Gunungkidul memiliki lluas wilayah 148.536 ha, terdiri dari 18 kecamtan dan 144 desa/kelurahan. Kecamtan Semanu merupakan kecamatan terluas dengan luas sekitar 7.3% luas Kabupaten Gunungkidul"}, {"name": "KOTA YOGYAKARTA", "extent": [12283499.621172389, -875490.3498833673, 12290247.769308433, -867214.6523991845], "description": "Kota Yogyakarta memiliki luas 3.250 haatau 1,02% dari luas Provinsi DIY. Secara administratif Kota Yogyakarta terdiri dari 14 kecamatan dan 45 kelurahan."}, {"name": "KULON PROGO", "extent": [12246671.225461088, -891672.1993435954, 12275732.322692772, -853244.5996838164], "description": "Kabupaten Kulon Progo dengan ibu kota Wates memiliki luas wilayah 58.627 ha, terdiri dari 12 kecamatan 87 desa, 1 kelurahan dan 917 dukuh. Kabupaten Kulon Porgo terletak paling barat di DIY"}, {"name": "SLEMAN", "extent": [12269171.500482745, -875165.7907697271, 12306013.542929975, -842007.9169300458], "description": "Kabupaten Sleman mempunyai luas wilayah sekitar 57.482 ha, terdiri dari 17 kecamatan, 86 desa, dan 1212 padukuhan."}]
var legendData = {"Kab_DIY_Project20170317012106787": [{"href": "0_0.png", "title": "Batas kabupaten"}],"legenda_multiskala":[{"href": "sangatsempit.png", "title": "Sangat Sempit"},{"href": "sempit.png", "title": "Sempit"},{"href": "sedang.png", "title": "Sedang"},{"href": "luas.png", "title": "Luas"},{"href": "sangatluas.png", "title": "Sangat Luas"}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [12244308.441534, -923338.910129, 12340368.305973, -834969.202201];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.Attribution({collapsible: false}),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"}),
new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)})]
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
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_kab_diy_project]}));
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
  _toggleAboutPanel: function() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel: function(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  render: function() {
    var toolbarOptions = {style: {height: 71}, showMenuIconButton: false, title:"Peta Kelas Luas Wilayah Multiskala"};
    return React.createElement("div", {id: 'content'},
      React.createElement(AppBar, toolbarOptions ,React.createElement("div", {id:'geocoding', className:'pull-right'},
                                        React.createElement(Geocoding, {})),
React.createElement(Measure, {toggleGroup:'navigation', map:map}),
React.createElement(IconMenu, {iconButtonElement: React.createElement(Button, {label: "Detail Legenda"})},
                                        React.createElement(MenuItem, {primaryText: "Nilai Kelas Data", href:"javascript:window.open('resources/legend/kelasluas.jpg', 'Detail Kelas Luas Data', 'width=180,height=360')"})
                                    )
      ),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id:'geocoding-results', className:'geocoding-results-panel'},
                                    React.createElement(GeocodingResults, {map:map})
                                  ),
React.createElement("div", {id: 'bookmarks-panel'},
                                        React.createElement(Bookmarks, {introTitle:'Daerah Istimewa Yogyakarta (DIY)', introDescription:'Posisi D.I. Yogyakarta yang memiliki luas 3.185,80 km² atau 0,17 persen dari luas Indonesia (1.860.359,67 km²), merupakan provinsi terkecil setelah Provinsi DKI Jakarta. DIY terdiri dari 5 kabupaten, antara lain Kulon Progo, Bantul, Gunungkidul, Sleman, dan Kota Yogyakarata.', dots:true,
                                            animatePanZoom:false, menu: false, map: map, bookmarks: bookmarks })
                                      ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
      )
      ,
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement(LoadingPanel, {map:map}),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:true,
                                    map: map})
                                  ),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
