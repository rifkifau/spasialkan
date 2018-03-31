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


                    var textStyleCache_saranaibadah_diy={}
                    var clusterStyleCache_saranaibadah_diy={}
                    var style_saranaibadah_diy = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(147,235,224,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_saranaibadah_diy = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world imagery',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [new ol.layer.Tile({
	type: 'base-overlay',
	title: 'Hydda roads and labels',
	source: new ol.source.XYZ({
		url: 'http://s.tile.openstreetmap.se/hydda/roads_and_labels/{z}/{x}/{y}.png'
	}),
    projection: 'EPSG:3857'
})
];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_saranaibadah_diy = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_saranaibadah_diy,
                    selectedStyle: selectionStyle_saranaibadah_diy,
                    title: "SARANAIBADAH_DIY",
                    id: "SARANAIBADAH_PT_25K_Clip120170316070820809",
                    filters: [],
                    timeInfo: {start:"startdated",end:"enddated"},
                    isSelectable: true,
                    popupInfo: ""
                });
saranaibadah_diy_geojson_callback = function(geojson) {
                              lyr_saranaibadah_diy.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_saranaibadah_diy.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_saranaibadah_diy];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var charts = [{"categoryField": "REMARK", "layer": "SARANAIBADAH_PT_25K_Clip120170316070820809", "title": "Select by Category", "displayMode": 2, "valueFields": [], "operation": 0}];
var legendData = {"SARANAIBADAH_PT_25K_Clip120170316070820809": [{"href": "0_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [12243341.901146, -917057.955881, 12342141.274671, -844884.588646];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.Attribution({collapsible: false}),
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
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_saranaibadah_diy]}));
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
    var toolbarOptions = {style: {height: 71}, showMenuIconButton: false, title:"Peta Fasilitas Ibadah Multitemporal", iconElementLeft: React.createElement("img", {className:"pull-left", style:{margin:"5px",height:"50px"}, src:"logo.png"})};
    return React.createElement("div", {id: 'content'},
      React.createElement(AppBar, toolbarOptions ,React.createElement(Button, {label: 'Table', onTouchTap: this._toggleTable.bind(this)}),
React.createElement(Chart, {container:'chart-panel', charts:charts}),
React.createElement(Button, {label: 'Query', onTouchTap: this._toggleQuery.bind(this)}),
React.createElement(IconMenu, {iconButtonElement: React.createElement(Button, {label: "Berpartisipasi!"})},
                                        React.createElement(MenuItem, {primaryText: "Kirim Data", href:"https://spasialkan.com/partisipasi"})
                                    ),
React.createElement(Select, {toggleGroup: 'navigation', map:map}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true}),
React.createElement(Measure, {toggleGroup:'navigation', map:map})
      ),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id: 'query-panel', className:'query-panel'},
                                          React.createElement(QueryBuilder, {map: map})
                                        ),
React.createElement("div", {id: 'timeline'},
                                    React.createElement(Playback, {map: map, minDate:1230742800000, maxDate:1489424400000})
                                  ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
      )
      ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {ref: 'table', layer: lyr_saranaibadah_diy, pointZoom:16, map: map})
                                    ),
React.createElement("div", {id: 'chart-panel', className: 'chart-panel'},
                                                React.createElement("a", {href:'#', id:'chart-panel-closer', className:'chart-panel-closer', onClick:this._toggleChartPanel},
                                                                      "X"
                                                                ),
                                                React.createElement("div", {id: 'chart'})
                                        ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {map:map})
                                  ),
React.createElement(LoadingPanel, {map:map}),
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
