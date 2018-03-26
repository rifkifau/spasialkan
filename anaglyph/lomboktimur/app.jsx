import React from 'react';
import ReactDOM from 'react-dom';
import ol from 'openlayers';
import {IntlProvider} from 'react-intl';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Button from '@boundlessgeo/sdk/components/Button';
import Header from '@boundlessgeo/sdk/components/Header';
import enMessages from '@boundlessgeo/sdk/locale/en';
import InfoPopup from '@boundlessgeo/sdk/components/InfoPopup';
import MapPanel from '@boundlessgeo/sdk/components/MapPanel';
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

import FeatureTable from '@boundlessgeo/sdk/components/FeatureTable';
import QueryBuilder from '@boundlessgeo/sdk/components/QueryBuilder';
import LayerList from '@boundlessgeo/sdk/components/LayerList';
import Geolocation from '@boundlessgeo/sdk/components/Geolocation';
import LoadingPanel from '@boundlessgeo/sdk/components/LoadingPanel';
import ZoomSlider from '@boundlessgeo/sdk/components/ZoomSlider';
import Rotate from '@boundlessgeo/sdk/components/Rotate';
import Select from '@boundlessgeo/sdk/components/Select';
import Navigation from '@boundlessgeo/sdk/components/Navigation';
import DrawFeature from '@boundlessgeo/sdk/components/DrawFeature';
import EditPopup from '@boundlessgeo/sdk/components/EditPopup';
import QGISLegend from '@boundlessgeo/sdk/components/QGISLegend';
import Measure from '@boundlessgeo/sdk/components/Measure';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
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



                    var textStyleCache_editforbl={}
                    var clusterStyleCache_editforbl={}
                    var style_editforbl = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_editforbl'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(227,26,28,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(222,78,62,0.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_editforbl = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_editforbl'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_sungai_line_utm={}
                    var clusterStyleCache_sungai_line_utm={}
                    var style_sungai_line_utm = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_sungai_line_utm'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(1,94,255,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_sungai_line_utm = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_sungai_line_utm'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
zIndex: 0
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
    title: 'Anaglyph Imagery',
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/versitani/cj6enneua1qjs2rp8k4smi6md/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc2l0YW5pIiwiYSI6ImNpeGI5aXZ6bjAwNXcyb2tscWp4eWJxdHkifQ.YYiF2JhBC05mgzVaL-LGfw',
attribution: [new ol.Attribution({ html: ['Map data &copy; <a href="http://spasialkan.com/">Spasialkan.com</a>, <a href="https://www.mapbox.com/about/maps">Mapbox</a>, <a href="https://www.digitalglobe.com">DigitalGlobe</a> contributors,\ DataSource <a href="http://tanahair.indonesia.go.id/home">InaGeoportal</a>']})],
    }),
    projection: 'EPSG:3857'
})
];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_editforbl = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_editforbl.json'
                            }),
                     
                    style: style_editforbl,
                    selectedStyle: selectionStyle_editforbl,
                    title: "EditForBL",
                    id: "EditForBL20170816143939620",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>OBJECTID</td><td style='text-align:right'>[OBJECTID]</td></tr><tr><td>PROVINSI</td><td style='text-align:right'>[PROVINSI]</td></tr><tr><td>AsalBL</td><td style='text-align:right'>[AsalBL]</td></tr><tr><td>SatuanBL</td><td style='text-align:right'>[SatuanBL]</td></tr></table>",
                    attributes: ["OBJECTID", "PROVINSI", "AsalBL", "SatuanBL"],
                    geometryType: "Polygon"
                });
var lyr_editforbl_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_editforbl.json'
                            }),
                     
                    style: style_editforbl});
var lyr_sungai_line_utm = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_sungai_line_utm.json'
                            }),
                     
                    style: style_sungai_line_utm,
                    selectedStyle: selectionStyle_sungai_line_utm,
                    title: "sungai_line_UTM",
                    id: "sungai_line_UTM20170816144318047",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>NAMOBJ</td><td style='text-align:right'>[NAMOBJ]</td></tr><tr><td>TIPSNG</td><td style='text-align:right'>[TIPSNG]</td></tr><tr><td>KLSSNG</td><td style='text-align:right'>[KLSSNG]</td></tr><tr><td>FCODE</td><td style='text-align:right'>[FCODE]</td></tr><tr><td>REMARK</td><td style='text-align:right'>[REMARK]</td></tr><tr><td>SRS_ID</td><td style='text-align:right'>[SRS_ID]</td></tr><tr><td>SHAPE_LEN</td><td style='text-align:right'>[SHAPE_LEN]</td></tr></table>",
                    attributes: ["NAMOBJ", "TIPSNG", "KLSSNG", "FCODE", "REMARK", "SRS_ID", "SHAPE_LEN"],
                    geometryType: "Line"
                });
var lyr_sungai_line_utm_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_sungai_line_utm.json'
                            }),
                     
                    style: style_sungai_line_utm});

lyr_editforbl.setVisible(true);
lyr_sungai_line_utm.setVisible(false);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_editforbl,lyr_sungai_line_utm];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var layersMap  = {'lyr_editforbl':lyr_editforbl,'lyr_sungai_line_utm':lyr_sungai_line_utm};
var legendData = {"sungai_line_UTM20170816144318047": [{"href": "1_0.png", "title": ""}], "EditForBL20170816143939620": [{"href": "0_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [12880747.642504, -1003171.619730, 13009502.296309, -915021.943506];
var unitsConversion = 111325.0;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.ScaleLine({"minWidth": 64, "units": "metric"}),
new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)})]
});



class BasicApp extends React.Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }
  componentDidMount() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_editforbl_overview,lyr_sungai_line_utm_overview]}));
  }
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  }
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  }
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  }
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  }
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  }
  _hideAboutPanel(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  }
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  }
  render() {
    var toolbarOptions = {title:"Anaglyph Sebagian Lombok Timur"};
    return React.createElement("article", null,
      React.createElement(Header, toolbarOptions ,
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-table', tooltip: 'Table', onTouchTap: this._toggleTable.bind(this)}),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons fa fa-filter', tooltip: 'Query', onTouchTap: this._toggleQuery.bind(this)}),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-help', tooltip: 'Help', onTouchTap: function(){window.open('help/help.html','_blank')}}),
React.createElement(Select, {toggleGroup: 'navigation', map:map}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true}),
React.createElement(DrawFeature, {toggleGroup: 'navigation', map: map}),
React.createElement(Measure, {toggleGroup:'navigation', map:map, geodesic:true})),
      React.createElement("div", {id: 'content'},
        React.createElement(MapPanel, {id: 'map', map: map, extent: originalExtent, useHistory: true}
          ,
React.createElement("div", {id: 'query-panel', className:'query-panel'},
                                          React.createElement(QueryBuilder, {map: map})
                                        ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
        )
        ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {allowEdit:true, toggleGroup: 'navigation',
                                                              ref: 'table', pointZoom:16, map: map,
                                                              sortable:true, pageSize:20})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:true,
                                        showZoomTo:true, allowReordering:true,
                                        allowFiltering:true, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', showUpload:true, map:map,
                                        includeLegend:true, allowStyling:true, showTable:true})),
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement(LoadingPanel, {map:map}),
React.createElement("div", {id:'zoom-slider'},
                                    React.createElement(ZoomSlider, {map:map, refreshRate:100})
                                  ),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:false,
                                    duration:250,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id: 'editpopup', className: 'ol-popup'},
                                React.createElement(EditPopup, {toggleGroup: 'navigation', map: map})
                            ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
      )
    );
  }
}

BasicApp.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDOM.render(<IntlProvider locale='en' messages={enMessages}><BasicApp /></IntlProvider>, document.getElementById('main'));
