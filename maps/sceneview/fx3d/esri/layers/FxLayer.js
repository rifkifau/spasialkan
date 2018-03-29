/**
 * Copyright @ 2017 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["dojo/_base/lang","dojo/_base/array","dojo/Deferred","esri/core/declare","esri/request","esri/PopupTemplate","esri/core/lang","esri/core/MultiOriginJSONSupport","esri/tasks/support/Query","esri/layers/Layer","esri/layers/mixins/PortalLayer","esri/layers/support/arcgisLayerUrl","esri/layers/graphics/sources/FeatureLayerSource","esri/geometry/SpatialReference","../views/3d/support/fx3dUtils"],function(e,i,t,s,r,a,n,o,l,p,u,d,h,c,y){function f(i,t){return r(i,{query:e.mixin({f:"json"},null),responseType:"json",callbackParamName:"callback"}).then(function(s){if(s._ssl&&(delete s._ssl,i=i.replace(/^http:/i,"https:")),"Feature Layer"===s.data.type){var r={};r.availableVizTypes=y.availableVizTypes(s.data.geometryType,s.data.timeInfo),e.mixin(r,v(s.data.fields)),t(null,r)}else t("FxLayer can only accecpt a feature service.")})}function v(e){var t=[],s=[],r=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a=["lat","latitude","y","ycenter","latitude83","latdecdeg","POINT-Y","lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","POINT-X","alt","altitude","z","POINT-Z","zcenter","altitude83","altdecdeg"];return i.forEach(e,function(e){t.push(e.name);var i=e.name.toLowerCase();r.indexOf(e.type)>-1&&a.indexOf(i)===-1&&s.push(e.name)}),{displayFields:t,vizFields:s}}var g={esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"},m=p.createSubclass([u,o],{declaredClass:"esri.layers.FxLayer",viewModulePaths:{"3d":"fx3d/views/3d/layers/FxLayerView3D"},properties:{renderingInfo:{value:null,set:function(i){var t=this._get("renderingInfo");e.isObject(i)&&!y.isEqual(i,t)&&this._set("renderingInfo",i)}},vizType:{value:null,set:function(i){var t=this._get("vizType");e.isString(i)&&!y.isEqual(i,t)&&this._set("vizType",i)}},displayField:{value:null,json:{ignore:!0},set:function(i){var t=this._get("displayField");e.isString(i)&&!y.isEqual(i,t)&&this._set("displayField",i)}},vizFields:{value:null,set:function(i){i=e.isString(i)?[i]:i;var t=this._get("vizFields");e.isArray(i)&&!y.isEqual(i,t)&&this._set("vizFields",i)}},spinTag:{value:!1,set:function(e){var i=this._get("spinTag");"boolean"==typeof e&&e!==i&&this._set("spinTag",e)}},pauseTag:{value:!1,set:function(e){var i=this._get("pauseTag");"boolean"==typeof e&&e!==i&&this._set("pauseTag",e)}},capabilities:{json:{origins:{service:{read:{source:["advancedQueryCapabilities","supportsStatistics","supportsAdvancedQueries","hasAttachments","hasM","hasZ","supportsCalculate","supportsTruncate","supportsValidateSql","supportsCoordinatesQuantization","useStandardizedQueries","ownershipBasedAccessControlForFeatures","allowGeometryUpdates","supportsApplyEditsWithGlobalIds","supportsRollbackOnFailureParameter","allowUpdateWithoutMValues","supportsAttachmentsByUploadId","capabilities"],reader:function(e,i){return this._readCapabilities(e,i)}}}},read:{source:["layerDefinition.capabilities","layerDefinition.advancedQueryCapabilities","layerDefinition.supportsStatistics","layerDefinition.supportsAdvancedQueries","layerDefinition.hasAttachments","layerDefinition.hasM","layerDefinition.hasZ","layerDefinition.supportsCalculate","layerDefinition.supportsTruncate","layerDefinition.supportsValidateSql","layerDefinition.supportsCoordinatesQuantization","layerDefinition.useStandardizedQueries","layerDefinition.ownershipBasedAccessControlForFeatures","layerDefinition.allowGeometryUpdates","layerDefinition.supportsApplyEditsWithGlobalIds","layerDefinition.supportsRollbackOnFailureParameter","layerDefinition.allowUpdateWithoutMValues","layerDefinition.supportsAttachmentsByUploadId"],reader:function(e,i){return this._readCapabilities(i.layerDefinition.capabilities,i.layerDefinition)}}},dependsOn:["loaded"],get:function(){var e=this._get("capabilities");return!e&&this.loaded&&this._hasMemorySource()&&(e={data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!0,supportsDelete:!0,supportsEditing:!0,supportsQuery:!0,supportsUpdate:!0},query:{supportsStatistics:!1,supportsCentroid:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!0,supportsGeometryProperties:!1,supportsOrderBy:!1,supportsPagination:!1,supportsQuantization:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsQueryByOthers:!1},queryRelated:{supportsPagination:!1,supportsCount:!1,supportsOrderBy:!1}}),e}},advancedQueryCapabilities:{json:{origins:{service:{read:{source:["advancedQueryCapabilities","supportsStatistics","supportsAdvancedQueries"],reader:function(e,i){return this._readAdvancedQueryCapabilities(i)}}}},read:{source:["layerDefinition.supportsAdvancedQueries","layerDefinition.supportsStatistics"],reader:function(e,i){return this._readAdvancedQueryCapabilities(i.layerDefinition)}}}}},constructor:function(){this.listMode="hide"},normalizeCtorArgs:function(i,t){if(e.isString(i)&&y.isUrl(i)){var s=d.parse(i);return s&&null!=s.sublayer&&null==this.layerId&&(this.layerId=s.sublayer),e.mixin({},{url:s.url.path},t)}return console.warn("Data source must be a FeatureService url."),null},getDefaults:function(){return e.mixin(this.inherited(arguments),{visible:!0,outFields:["*"],type:"3dfx",disablePopup:!0})},remove:function(){this.pauseAnimation(),this.pauseSpinning(),this.emit("destroy-fxlayer")},load:function(){var e=this.loadFromPortal({supportedTypes:["Feature Service"]}).always(function(){if(this.url&&null==this.layerId&&/FeatureServer\/\d\/*$/i.test(this.url))return this._fetchFirstLayerId().then(function(e){null!=e&&(this.layerId=e)}.bind(this))}.bind(this)).then(function(){if(!this.url)throw new EsriError("FxLayer:missing-url","Fxlayer must be created with a url");return this._createGraphicsSource().then(this._initLayerProperties.bind(this))}.bind(this));this.addResolvingPromise(e)},_createGraphicsSource:function(){var i=new t;if(this.url){var s=new h({layer:this});s.then(e.hitch(this,function(){this.emit("graphics-source-create",{graphicsSource:s}),i.resolve(s)}),function(e){i.reject(e)})}else console.warn("No url data source is specified."),i.resolve();return i.promise},_fetchFirstLayerId:function(){return r(this.url,{query:{f:"json"},callbackParamName:"callback",responseType:"json"}).then(function(e){if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id})},_readAdvancedQueryCapabilities:function(e){return e.advancedQueryCapabilities||{supportsPagination:!1,supportsQueryWithDistance:!1,supportsReturningQueryExtent:!1,supportsStatistics:e.supportsStatistics,supportsOrderBy:e.supportsAdvancedQueries,supportsDistinct:e.supportsAdvancedQueries}},_readCapabilities:function(e,i){return{data:this._readDataCapabilities(i),operations:this._readOperationsCapabilities(e,i),query:this._readQueryCapabilities(i),queryRelated:this._readQueryRelatedCapabilities(i)}},_readBoolean:function(e,i,t){return!!(e&&e.hasOwnProperty(i)?e[i]:t)},_readDataCapabilities:function(e){return{supportsAttachment:this._readBoolean(e,"hasAttachments",!1),supportsM:this._readBoolean(e,"hasM",!1),supportsZ:this._readBoolean(e,"hasZ",!1)}},_readOperationsCapabilities:function(e,i){e=e?e.toLowerCase().split(",").map(function(e){return e.trim()}):[];var t=e.indexOf("editing")!==-1,s=t&&e.indexOf("create")!==-1,r=t&&e.indexOf("delete")!==-1,a=t&&e.indexOf("update")!==-1;return t&&!(s||r||a)&&(s=r=a=!0),{supportsCalculate:this._readBoolean(i,"supportsCalculate",!1),supportsTruncate:this._readBoolean(i,"supportsTruncate",!1),supportsValidateSql:this._readBoolean(i,"supportsValidateSql",!1),supportsAdd:s,supportsDelete:r,supportsEditing:t,supportsQuery:this.__originalCapabilities__&&this.__originalCapabilities__.indexOf("Query")!==-1,supportsUpdate:a}},_readQueryCapabilities:function(e){var i=e.advancedQueryCapabilities,t=e.ownershipBasedAccessControlForFeatures;return{supportsStatistics:this._readBoolean(i,"supportsStatistics",e.supportsStatistics),supportsCentroid:this._readBoolean(i,"supportsReturningGeometryCentroid",!1),supportsDistance:this._readBoolean(i,"supportsQueryWithDistance",!1),supportsDistinct:this._readBoolean(i,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:this._readBoolean(i,"supportsReturningQueryExtent",!1),supportsGeometryProperties:this._readBoolean(i,"supportsReturningGeometryProperties",!1),supportsOrderBy:this._readBoolean(i,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:this._readBoolean(i,"supportsPagination",!1),supportsQuantization:this._readBoolean(e,"supportsCoordinatesQuantization",!1),supportsResultType:this._readBoolean(i,"supportsQueryWithResultType",!1),supportsSqlExpression:this._readBoolean(i,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:this._readBoolean(e,"useStandardizedQueries",!1),supportsQueryByOthers:this._readBoolean(t,"allowOthersToQuery",!0)}},_readQueryRelatedCapabilities:function(e){var i=e.advancedQueryCapabilities,t=this._readBoolean(i,"supportsAdvancedQueryRelated",!1);return{supportsPagination:this._readBoolean(i,"supportsQueryRelatedPagination",!1),supportsCount:t,supportsOrderBy:t}},_initLayerProperties:function(t){if(this.source||(this.source=t),t.url&&(this.url=t.url),t.layerDefinition&&(delete t.layerDefinition.visible,delete t.layerDefinition.outFields,delete t.layerDefinition.type,delete t.layerDefinition.id,delete t.layerDefinition.disablePopup,delete t.layerDefinition.displayField,delete t.layerDefinition.vizFields,delete t.layerDefinition.renderingInfo,delete t.layerDefinition.vizType,this.__originalCapabilities__=t.layerDefinition.capabilities,delete t.layerDefinition.capabilities,this.read(t.layerDefinition,{origin:"service",url:this.parsedUrl})),e.mixin(this,t.layerDefinition),this.geometryType=g[this.geometryType],this.title=this.name,this.listMode="hide",!e.isArray(this.fields))return void console.warn("Fileds from source is invalid.");var s=v(this.fields),r=s.vizFields,n=s.displayFields,o=null,l=null;if(e.isString(this.displayField)&&0!==this.displayField.length?(l=null,o=i.some(n,function(e){if(e.toLowerCase()===this.displayField.toLowerCase())return l=e,!0}.bind(this)),o?this.set("displayField",l):this.set("displayField",n[0])):this.set("displayField",n[0]),e.isArray(this.vizFields)&&0!==this.vizFields.length){var p=[];i.forEach(r,function(e){p.push(e.toLowerCase())}),o=[],i.forEach(this.vizFields,function(e){var i=p.indexOf(e.toLowerCase());i>-1&&o.push(r[i])}.bind(this)),o.length>0?this.set("vizFields",o):this.set("vizFields",r[0])}else this.set("vizFields",r[0]);return this.availableVizTypes=y.availableVizTypes(this.geometryType,this.timeInfo),e.isString(this.vizType)&&0!==this.vizType.length?(l=null,o=i.some(this.availableVizTypes,function(e){if(e.name.toLowerCase()===this.vizType.toLowerCase())return l=e.name,!0}.bind(this)),o?this.vizType=l:this.vizType=this.availableVizTypes[0]?this.availableVizTypes[0].name:null):this.vizType=this.availableVizTypes[0]?this.availableVizTypes[0].name:null,this.popupTemplate||(this.popupTemplate=new a({title:this.name,fieldInfos:this.fields?i.map(this.fields,function(e){return{fieldName:e.name,label:e.name,visible:!0}}):[],content:"{*}"})),this.vizType&&0!=this.vizType.length&&this.displayField&&0!=this.displayField.length&&e.isArray(this.vizFields)&&0!=this.vizFields.length?void this.set("visible",!0):(this.set("visible",!1),this.set("loaded",!1),this.emit("fxlayer-error",{msg:"Properties of vizType, displayField, vizFields, renderingInfo, or popupTemplate is missing."}),void console.warn("Properties of vizType, displayField, vizFields, renderingInfo, or popupTemplate is missing."))},createQuery:function(){var e=new l,i=this.get("capabilities.data");return e.returnGeometry=!0,e.returnZ=i&&i.supportsZ&&this.returnZ||null,e.returnM=i&&i.supportsM&&this.returnM||null,e.outFields=this.outFields,e.where=this.definitionExpression||"1=1",e.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null,e},createQueryParameters:function(){var e=new l;return e.outSpatialReference=c.WGS84,Object.defineProperty(e,"outSpatialReference",{configurable:!0,writable:!1}),e.returnGeometry=!0,e.returnZ=this.hasZ&&this.returnZ||null,e.returnM=this.hasM&&this.returnM||null,e.outFields=this.outFields,e.where=this.definitionExpression||"1=1",e.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null,e},showLabel:function(e){e&&this.emit("show-feature-label",{feature:e})},hideLabel:function(){this.emit("hide-feature-label")},startAnimation:function(){return this.visible?void(this.pauseTag=!1):void console.warn("The FxLayer is invisible now.")},pauseAnimation:function(){this.pauseTag=!0},startSpinning:function(){return this.visible?void(this.spinTag=!0):void console.warn("The FxLayer is invisible now.")},pauseSpinning:function(){this.spinTag=!1},switchVizField:function(t,s){function r(e){e>-1&&e<a.vizFields.length?(a.emit("hide-feature-label"),a.emit("fx3d-active-viz-field",{currentVizPage:e,newRenderingInfo:s})):console.warn("invalid viz page in switchVizField(vizField).")}if(!this.visible)return void console.warn("The FxLayer is invisible now.");var a=this;if(e.isString(t)){var n=[];i.forEach(this.vizFields,function(e){n.push(e.toLowerCase())});var o=n.indexOf(t.toLowerCase());r(o)}else"number"==typeof t?r(t):console.warn("switchVizField(vizField) needs a integer id or string name as parameter.")}});return e.mixin(m,{getFieldsAndVizTypes:function(i){var s=new t;return e.isString(i)?y.isUrl(i)&&f(i,function(e,i){e?s.reject(e):s.resolve(i)}):s.reject("FxLayer can only accecpt a feature service url now."),s}}),e.mixin(m,y.EffectType),m});