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

var categories_geologi_seb_diyjateng = function(){ return {"Aluvial": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(55,230,189,1.0)"}),
zIndex: 0
                            })
                            ],
"Batuan Gunungapi Tak Terpisahkan": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(100,96,219,1.0)"}),
zIndex: 0
                            })
                            ],
"Batuan Gunungapi Telomoyo": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(150,74,238,1.0)"}),
zIndex: 0
                            })
                            ],
"Batuan Vulkanik Andong dan Kendil": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(217,21,155,1.0)"}),
zIndex: 0
                            })
                            ],
"Endapan Gunungapi Merapi Tua": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(24,93,204,1.0)"}),
zIndex: 0
                            })
                            ],
"Endapan Gunungapi Muda Merapi": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(59,233,40,1.0)"}),
zIndex: 0
                            })
                            ],
"Endapan Kerucut Abu": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(196,107,206,1.0)"}),
zIndex: 0
                            })
                            ],
"Endapan Longsoran (Ladu) dari Awan Panas": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(203,114,136,1.0)"}),
zIndex: 0
                            })
                            ],
"Formasi Kaligetas": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(133,216,234,1.0)"}),
zIndex: 0
                            })
                            ],
"Formasi Payung": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(130,235,17,1.0)"}),
zIndex: 0
                            })
                            ],
"Gunungapi Gilipetung": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(41,224,102,1.0)"}),
zIndex: 0
                            })
                            ],
"Kubah Lava dan Leleran": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(196,204,30,1.0)"}),
zIndex: 0
                            })
                            ],
"Lava Sumbing": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(232,61,22,1.0)"}),
zIndex: 0
                            })
                            ],
"": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(223,183,118,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_geologi_seb_diyjateng = {"Aluvial": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Batuan Gunungapi Tak Terpisahkan": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Batuan Gunungapi Telomoyo": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Batuan Vulkanik Andong dan Kendil": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Endapan Gunungapi Merapi Tua": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Endapan Gunungapi Muda Merapi": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Endapan Kerucut Abu": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Endapan Longsoran (Ladu) dari Awan Panas": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Formasi Kaligetas": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Formasi Payung": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Gunungapi Gilipetung": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Kubah Lava dan Leleran": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Lava Sumbing": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_geologi_seb_diyjateng={}
                    var clusterStyleCache_geologi_seb_diyjateng={}
                    var style_geologi_seb_diyjateng = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_geologi_seb_diyjateng'
        };
                        
                        var value = feature.get("NAME");
                        var style = categories_geologi_seb_diyjateng()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_geologi_seb_diyjateng = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_geologi_seb_diyjateng'
        };
                        var value = feature.get("NAME");
                        var style = categoriesSelected_geologi_seb_diyjateng[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_sebagian_kab_diyjateng={}
                    var clusterStyleCache_sebagian_kab_diyjateng={}
                    var style_sebagian_kab_diyjateng = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_sebagian_kab_diyjateng'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.46)}),
                            fill: new ol.style.Fill({color: "rgba(96,132,135,0.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
            var labelContext = {
                feature: feature,
                variables: {},
                layer: 'lyr_sebagian_kab_diyjateng'
            };
            if (getFeatureAttribute(feature, "KABKOT") !== null) {
                var labelText = String(getFeatureAttribute(feature, "KABKOT"));
            } else {
                var labelText = " ";
            }
            var key = value + "_" + labelText + "_" + String(resolution);
            if (!textStyleCache_sebagian_kab_diyjateng[key]){
                var size = 8.25 * 2;
                var font = 'normal normal ' + String(size) + 'px "MS Shell Dlg 2",sans-serif'
                var text = new ol.style.Text({
                      font: font,
                      text: labelText,
                      fill: new ol.style.Fill({
                        color: "rgba(0, 0, 0, 255)"
                      }),
                      textBaseline: "middle",
                      textAlign: "center",
                      rotation: -0.0,
                      offsetX: 0.0,
                      offsetY: 0.0 
                    });
                textStyleCache_sebagian_kab_diyjateng[key] = new ol.style.Style({zIndex: 1000, text: text});
            }
            allStyles.push(textStyleCache_sebagian_kab_diyjateng[key]);
            
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_sebagian_kab_diyjateng = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_sebagian_kab_diyjateng'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.46)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
            var labelContext = {
                feature: feature,
                variables: {},
                layer: 'lyr_sebagian_kab_diyjateng'
            };
            if (getFeatureAttribute(feature, "KABKOT") !== null) {
                var labelText = String(getFeatureAttribute(feature, "KABKOT"));
            } else {
                var labelText = " ";
            }
            var key = value + "_" + labelText + "_" + String(resolution);
            if (!textStyleCache_sebagian_kab_diyjateng[key]){
                var size = 8.25 * 2;
                var font = 'normal normal ' + String(size) + 'px "MS Shell Dlg 2",sans-serif'
                var text = new ol.style.Text({
                      font: font,
                      text: labelText,
                      fill: new ol.style.Fill({
                        color: "rgba(0, 0, 0, 255)"
                      }),
                      textBaseline: "middle",
                      textAlign: "center",
                      rotation: -0.0,
                      offsetX: 0.0,
                      offsetY: 0.0 
                    });
                textStyleCache_sebagian_kab_diyjateng[key] = new ol.style.Style({zIndex: 1000, text: text});
            }
            allStyles.push(textStyleCache_sebagian_kab_diyjateng[key]);
            
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_edit4delineasi={}
                    var clusterStyleCache_edit4delineasi={}
                    var style_edit4delineasi = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_edit4delineasi'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.247058823529)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(214,14,0,0.247058823529)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_edit4delineasi = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_edit4delineasi'
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
                    'isGroupExpanded': true, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [new ol.layer.Tile({
    type: 'base-overlay',
    title: 'RedCyan Anaglyph Imagery',
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/versitani/cj8e4t2z89ram2spv5hcde8ki/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc2l0YW5pIiwiYSI6ImNpeGI5aXZ6bjAwNXcyb2tscWp4eWJxdHkifQ.YYiF2JhBC05mgzVaL-LGfw',
attribution: [new ol.Attribution({ html: ['Map data &copy; <a href="http://spasialkan.com/">Spasialkan.com</a>, <a href="https://www.mapbox.com/about/maps">Mapbox</a>, <a href="https://www.digitalglobe.com">DigitalGlobe</a> contributors']})],
    }),
    projection: 'EPSG:3857'
}),new ol.layer.Tile({
    type: 'base-overlay',
    title: 'AmberBlue Anaglyph Imagery',
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/versitani/cj8e4uabl9qbp2qmnowwpp8af/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc2l0YW5pIiwiYSI6ImNpeGI5aXZ6bjAwNXcyb2tscWp4eWJxdHkifQ.YYiF2JhBC05mgzVaL-LGfw',
attribution: [new ol.Attribution({ html: ['Map data &copy; <a href="http://spasialkan.com/">Spasialkan.com</a>, <a href="https://www.mapbox.com/about/maps">Mapbox</a>, <a href="https://www.digitalglobe.com">DigitalGlobe</a> contributors']})],
    }),
    projection: 'EPSG:3857'
})];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': true, 'title': 'Overlays', layers: overlayLayers});
var lyr_geologi_seb_diyjateng = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_geologi_seb_diyjateng,
                    selectedStyle: selectionStyle_geologi_seb_diyjateng,
                    title: "Geologi_Seb_DIY-JaTeng",
                    id: "Geologi_Seb_DIY_JaTeng20171005172126786",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["SYMBOLS", "NM_LEMBAR", "NO_LEMBAR", "PROJECT", "REGION", "NAME", "FORMATION", "GROUP", "DEPO_BLOCK", "CLASS_LITH", "T_CLASS_EN", "B_CLASS_EN", "CLASS_TECT", "B_ERA", "B_PERIOD", "B_EPOCH", "B_SUB", "B_AGE", "B_EVID", "T_ERA", "T_PERIOD", "T_EPOCH", "T_SUB", "T_AGE", "T_EVID", "DESCRIP1", "DESCRIP2"],
                    geometryType: "Polygon"
                });
var lyr_geologi_seb_diyjateng_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_geologi_seb_diyjateng});
geologi_seb_diyjateng_geojson_callback = function(geojson) {
                              lyr_geologi_seb_diyjateng.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_geologi_seb_diyjateng_overview.setSource(lyr_geologi_seb_diyjateng.getSource());
                        };
var lyr_sebagian_kab_diyjateng = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_sebagian_kab_diyjateng,
                    selectedStyle: selectionStyle_sebagian_kab_diyjateng,
                    title: "Sebagian_Kab_DIY-JaTeng",
                    id: "Sebagian_Kab_DIY_JaTeng20171005151933052",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Provinsi</td><td style='text-align:right'>[PROVINSI]</td></tr><tr><td>Kab./Kota</td><td style='text-align:right'>[KABKOT]</td></tr></table>",
                    attributes: ["OBJECTID", "PROVINSI", "KABKOT", "Shape_Leng", "Shape_Area"],
                    geometryType: "Polygon"
                });
var lyr_sebagian_kab_diyjateng_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_sebagian_kab_diyjateng});
sebagian_kab_diyjateng_geojson_callback = function(geojson) {
                              lyr_sebagian_kab_diyjateng.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_sebagian_kab_diyjateng_overview.setSource(lyr_sebagian_kab_diyjateng.getSource());
                        };
var lyr_edit4delineasi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_edit4delineasi,
                    selectedStyle: selectionStyle_edit4delineasi,
                    title: "Edit4Delineasi",
                    id: "Edit4Delineasi20171005151933757",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["Id", "Relief", "Kelas"],
                    geometryType: "Polygon"
                });
var lyr_edit4delineasi_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_edit4delineasi});
edit4delineasi_geojson_callback = function(geojson) {
                              lyr_edit4delineasi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_edit4delineasi_overview.setSource(lyr_edit4delineasi.getSource());
                        };

lyr_geologi_seb_diyjateng.setVisible(true);
lyr_sebagian_kab_diyjateng.setVisible(true);
lyr_edit4delineasi.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_geologi_seb_diyjateng,lyr_sebagian_kab_diyjateng,lyr_edit4delineasi];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var layersMap  = {'lyr_geologi_seb_diyjateng':lyr_geologi_seb_diyjateng,'lyr_sebagian_kab_diyjateng':lyr_sebagian_kab_diyjateng,'lyr_edit4delineasi':lyr_edit4delineasi};
var legendData = {"Sebagian_Kab_DIY_JaTeng20171005151933052": [{"href": "1_0.png", "title": ""}], "Edit4Delineasi20171005151933757": [{"href": "2_0.png", "title": ""}], "Geologi_Seb_DIY_JaTeng20171005172126786": [{"href": "0_0.png", "title": "Aluvial"}, {"href": "0_1.png", "title": "Batuan Gunungapi Tak Terpisahkan"}, {"href": "0_2.png", "title": "Batuan Gunungapi Telomoyo"}, {"href": "0_3.png", "title": "Batuan Vulkanik Andong dan Kendil"}, {"href": "0_4.png", "title": "Endapan Gunungapi Merapi Tua"}, {"href": "0_5.png", "title": "Endapan Gunungapi Muda Merapi"}, {"href": "0_6.png", "title": "Endapan Kerucut Abu"}, {"href": "0_7.png", "title": "Endapan Longsoran (Ladu) dari Awan Panas"}, {"href": "0_8.png", "title": "Formasi Kaligetas"}, {"href": "0_9.png", "title": "Formasi Payung"}, {"href": "0_10.png", "title": "Gunungapi Gilipetung"}, {"href": "0_11.png", "title": "Kubah Lava dan Leleran"}, {"href": "0_12.png", "title": "Lava Sumbing"}, {"href": "0_13.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [12221180.755192, -877598.450096, 12368312.809799, -787739.720710];
var unitsConversion = 1;

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
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_geologi_seb_diyjateng_overview,lyr_sebagian_kab_diyjateng_overview,lyr_edit4delineasi_overview]}));
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
    var toolbarOptions = {title:"Visualisasi Anaglyph Gunung Merbabu"};
    return React.createElement("div", {id: 'content'},
      React.createElement(Header, toolbarOptions ,
React.createElement("div", {id:'geocoding'},
                                        React.createElement(Geocoding, {maxResults:5})),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-table', tooltip: 'Table', onTouchTap: this._toggleTable.bind(this)}),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons fa fa-filter', tooltip: 'Query', onTouchTap: this._toggleQuery.bind(this)}),
React.createElement(Measure, {toggleGroup:'navigation', map:map, geodesic:true}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true}),
React.createElement(IconMenu, {anchorOrigin: {horizontal: 'right', vertical: 'bottom'}, targetOrigin: {horizontal: 'right', vertical: 'top'}, iconButtonElement: React.createElement(Button, {buttonType: 'Icon', iconClassName: "headerIcons ms ms-link", tooltip: "Links"})},
                                        React.createElement(MenuItem, {primaryText: "Anaglyph", href:"http://https://anaglyph.spasialkan.com"}),
React.createElement(MenuItem, {primaryText: "Home", href:"http://https://spasialkan.com"}),
React.createElement(MenuItem, {primaryText: "3D Maps", href:"http://https://3d.spasialkan.com"}),
React.createElement(MenuItem, {primaryText: "Maps", href:"http://https://maps.spasialkan.com"})
                                    ),
React.createElement(Select, {toggleGroup: 'navigation', map:map}),
React.createElement(DrawFeature, {toggleGroup: 'navigation', map: map}),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-help', tooltip: 'Help', onTouchTap: function(){window.open('help/help.html','_blank')}})),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id: 'about-panel', className:'about-panel'},
                                        React.createElement("a", {href:'#', id:'about-panel-closer',
                                            className:'about-panel-closer', onClick:this._hideAboutPanel.bind(this)},
                                              "X"
                                        ),
                                        React.createElement("div", {dangerouslySetInnerHTML:{__html: '<p><b>CATATAN!</b> Untuk mendapatkan kesan tiga dimensi, pengamatan citra visualisasi anaglyph dilakukan dengan menggunakan kacamata anaglyph berfilter warna sesuai dengan yang digunakan pada citra (Red-Cyan/Green-Magenta/Amber-Blue)</p><br><a href="https://spasialkan.com/wp-content/uploads/2017/10/Citra-Visualisasi-Anaglip-Anaglyph-Imagery-Spasialkancom.png"></a><a href="https://spasialkan.com/wp-content/uploads/2017/10/Citra-Visualisasi-Anaglip-Anaglyph-Imagery-Spasialkancom.png"><img class="aligncenter wp-image-728 size-medium" src="https://spasialkan.com/wp-content/uploads/2017/10/Citra-Visualisasi-Anaglip-Anaglyph-Imagery-Spasialkancom-300x96.png" alt="Citra Visualisasi Anaglip - Anaglyph Imagery - Spasialkancom" width="300" height="96" /></a>'}})
                                    ),
React.createElement("div", {id:'geocoding-results', className:'geocoding-results-panel'},
                                    React.createElement(GeocodingResults, {map:map, zoom:10})
                                  ),
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
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement(LoadingPanel, {map:map}),
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
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:true,
                                        showZoomTo:true, allowReordering:true,
                                        allowFiltering:true, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', showUpload:true, map:map,
                                        includeLegend:true, allowStyling:true, showTable:true})),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
