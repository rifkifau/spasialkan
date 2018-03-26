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

var ranges_query = function(){ return [[3.800000, 4.966667,
 [ new ol.style.Style({
                                image: new ol.style.Circle({radius: pixelsFromMm(2/ 2.0), stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.0)}), fill: new ol.style.Fill({color: "rgba(227,26,28,1.0)"})}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                image: new ol.style.Circle({radius: pixelsFromMm(2/ 2.0), stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.0)}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})}),
zIndex: 0
                            })
                            ]],
[4.966667, 6.133333,
 [ new ol.style.Style({
                                image: new ol.style.Circle({radius: pixelsFromMm(4/ 2.0), stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.0)}), fill: new ol.style.Fill({color: "rgba(227,26,28,1.0)"})}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                image: new ol.style.Circle({radius: pixelsFromMm(4/ 2.0), stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.0)}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})}),
zIndex: 0
                            })
                            ]],
[6.133333, 7.300000,
 [ new ol.style.Style({
                                image: new ol.style.Circle({radius: pixelsFromMm(6/ 2.0), stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.0)}), fill: new ol.style.Fill({color: "rgba(227,26,28,1.0)"})}),
zIndex: 0
                            })
                            ], [ new ol.style.Style({
                                image: new ol.style.Circle({radius: pixelsFromMm(6/ 2.0), stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.0)}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})}),
zIndex: 0
                            })
                            ]]];};
                    var textStyleCache_query={}
                    var clusterStyleCache_query={}
                    var style_query = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_query'
        };
                        
                        var value = feature.get("mag");
                        var style = ranges_query()[0][2];
                            var ranges = ranges_query();
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
                    var selectionStyle_query = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_query'
        };
                        var value = feature.get("mag");
                        var style = ranges_query[0][3];
                            for (var i = 0; i < ranges_query.length; i++){
                                var range = ranges_query[i];
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
var lyr_query = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_query,
                    selectedStyle: selectionStyle_query,
                    title: "query",
                    id: "query20170723232718747",
                    filters: [],
                    timeInfo: {start:"time",end:"time-end"},
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>time</td><td style='text-align:right'>[time]</td></tr><tr><td>latitude</td><td style='text-align:right'>[latitude]</td></tr><tr><td>longitude</td><td style='text-align:right'>[longitude]</td></tr><tr><td>depth</td><td style='text-align:right'>[depth]</td></tr><tr><td>mag</td><td style='text-align:right'>[mag]</td></tr><tr><td>magType</td><td style='text-align:right'>[magType]</td></tr><tr><td>nst</td><td style='text-align:right'>[nst]</td></tr><tr><td>gap</td><td style='text-align:right'>[gap]</td></tr><tr><td>dmin</td><td style='text-align:right'>[dmin]</td></tr><tr><td>rms</td><td style='text-align:right'>[rms]</td></tr><tr><td>updated</td><td style='text-align:right'>[updated]</td></tr><tr><td>place</td><td style='text-align:right'>[place]</td></tr><tr><td>type</td><td style='text-align:right'>[type]</td></tr><tr><td>horizontal</td><td style='text-align:right'>[horizontal]</td></tr><tr><td>depthError</td><td style='text-align:right'>[depthError]</td></tr><tr><td>magError</td><td style='text-align:right'>[magError]</td></tr><tr><td>magNst</td><td style='text-align:right'>[magNst]</td></tr></table>",
                    attributes: ["time", "latitude", "longitude", "depth", "mag", "magType", "nst", "gap", "dmin", "rms", "net", "id", "updated", "place", "type", "horizontal", "depthError", "magError", "magNst", "status", "locationSo", "magSource", "time-end"],
                    geometryType: "Point"
                });
var lyr_query_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_query});
query_geojson_callback = function(geojson) {
                              lyr_query.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_query_overview.setSource(lyr_query.getSource());
                        };

lyr_query.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_query];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var layersMap  = {'lyr_query':lyr_query};
var legendData = {"query20170723232718747": [{"href": "0_0.png", "title": "3.8-4.96666666667"}, {"href": "0_1.png", "title": "4.96666666667-6.13333333333"}, {"href": "0_2.png", "title": "6.13333333333-7.3"}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [9811432.034892, -2412277.965311, 15443787.810903, 2309457.415776];
var unitsConversion = 1;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.Attribution({collapsible: false}),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"}),
new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)})]
});



var TabbedApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: getMuiTheme()
    };
  },
  getInitialState: function() {
    return {leftNavOpen: false, addLayerOpen: false};
  },
  componentDidMount: function() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_query_overview]}));
  },
  leftNavClose: function(value) {
    this.setState({
      leftNavOpen: false
    }, function() {
      map.updateSize();
    });
  },
  leftNavOpen: function(value) {
    this.setState({
      leftNavOpen: true
    }, function() {
      map.updateSize();
    });
  },
  layerListOpen: function(value) {
    this.setState({
      addLayerOpen: true
    });
  },
  layerListClose: function(value) {
    this.setState({
      addLayerOpen: false
    });
  },
  _toggle: function(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleEdit: function() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleWFST: function() {
    this._toggle(document.getElementById('wfst'));
  },
  render: function() {
    var leftNavWidth = 360;
    var toolbarOptions = Object.assign({
      style: {left: this.state.leftNavOpen ? leftNavWidth : 0, width: this.state.leftNavOpen ? 'calc(100% - ' + leftNavWidth + 'px)' : '100%'},
      showLeftIcon: !this.state.leftNavOpen,
      onLeftIconTouchTap: this.leftNavOpen
    }, {title:"Gempa Bumi Indonesia Tahun 2017"});
    return React.createElement("div", {id: 'content'},
      React.createElement(LeftNav, {tabList: [React.createElement(Tab,{key:1, value:1, label:"Geocoding"},
                                    React.createElement("div", {id:"geocoding-tab"},
                                        React.createElement(Geocoding, {maxResults:5})
                                    ),
                                    React.createElement("div", {id:"geocoding-results"},
                                        React.createElement(GeocodingResults, {map:map,
                                        zoom:10})
                                    )
                                ),
React.createElement(Tab,{key:2, value:2, label:"Attributes table"},
                                    React.createElement(FeatureTable, {allowEdit:true, toggleGroup: 'navigation',
                                                                    ref:"table", pointZoom:16, map: map,
                                                                    sortable:true, pageSize:20})
                                ),
React.createElement(Tab,{key:3, value:3, label:"Query"},
                                    React.createElement(QueryBuilder, {map: map})
                                ),
React.createElement(Tab,{key:4, value:4, label:'Layers', onActive: this.layerListOpen.bind(this)},
                                 React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:true,
                                        addLayer: {
                                          open: this.state.addLayerOpen,
                                          onRequestClose:this.layerListClose.bind(this)
                                        },
                                        inlineDialogs: true,
                                        icon: React.createElement(Button, {buttonType: "Flat", label: "ADD"}),
                                        showZoomTo:true, allowReordering:true,
                                        allowFiltering:true,
                                        downloadFormat:'GeoJSON', showUpload:true, map:map,
                                        includeLegend:true, allowStyling:true, showTable:true})))], open: this.state.leftNavOpen, onRequestClose: this.leftNavClose}),
      React.createElement("div", undefined,
        React.createElement(Header, toolbarOptions ,
React.createElement(Measure, {toggleGroup:'navigation', map:map, geodesic:true}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true}),
React.createElement(DrawFeature, {toggleGroup: 'navigation', map: map}),
React.createElement(Select, {toggleGroup: 'navigation', map:map})),
        React.createElement("div", {className: 'map', style: {left: this.state.leftNavOpen ? leftNavWidth : 0, width: this.state.leftNavOpen ? 'calc(100% - ' + leftNavWidth + 'px)' : '100%'}},
          React.createElement(MapPanel, {id: 'map', useHistory: true, extent: originalExtent, map: map}
            ,
React.createElement("div", {id: 'timeline'},
                                    React.createElement(Playback, {map: map, minDate:1483229605380, maxDate:1500809923300,
                                    interval:500, numIntervals:100, autoPlay:true})
                                  ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
          )
          ,
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement(LoadingPanel, {map:map}),
React.createElement("div", {id: 'editpopup', className: 'ol-popup'},
                                React.createElement(EditPopup, {toggleGroup: 'navigation', map: map})
                            ),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:false,
                                    duration:250,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(TabbedApp)), document.getElementById('main'));
