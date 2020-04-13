// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/Coordinates.html":'\x3cdiv style\x3d"max-height: 445px;padding: 0 5px;"\x3e\r\n  \x3cdiv class\x3d"esriCTCoordinateWidth" data-dojo-attach-point\x3d"coordianteDijitMainWrapper"\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper" data-dojo-attach-point\x3d"groupInfoNode1"\x3e\r\n      \x3cdiv class\x3d"esriCTCoordinatePopUpLabel"\x3e${nls.intersectionPage.groupNameLabel}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTCoordinatePopupdijitWrapper"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"groupNameTextBoxNode"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n      \x3cdiv class\x3d"esriCTCoordinatePopUpLabel" title\x3d"${nls.coordinatesPage.coordinatesSelectTitle}"\x3e${nls.coordinatesPage.coordinatesSelectTitle}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTCoordinatePopupdijitWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTCoordinatePopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"selectCoordinateNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n      \x3cdiv class\x3d"esriCTCoordinatePopUpLabel" title\x3d"${nls.coordinatesPage.coordinatesAttributeTitle}"\x3e${nls.coordinatesPage.coordinatesAttributeTitle}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTCoordinatePopupdijitWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTCoordinatePopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"selectAttributeNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTWrapper" data-dojo-attach-point\x3d"groupInfoNode2"\x3e\r\n    \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n      \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.intersectionPage.layerAndFieldsApplyLabel}\x3c/legend\x3e\r\n      \x3cdiv class\x3d"esriCTTableParentContainer" data-dojo-attach-point\x3d"tableParentContainer"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/text!./Coordinates.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup dijit/form/Select dijit/form/ValidationTextBox ./layersAndFieldsApplyOn dojo/dom-class".split(" "),function(p,q,d,e,f,m,r,t,u,v,n,w,x,g){return p([u,q,t],{baseClass:"jimu-widget-smartEditor-setting-coordinates",templateString:r,groupNameTextBox:null,postCreate:function(){this.inherited(arguments);this.fieldSelector=
this.groupNameTextBox=null;this._initControls();this._createLayersAndFields();this.isDelete||this.showDialog()},showDialog:function(){var b,c,a,h,e,k,l;c=!1;b=675;l=!1;this._fieldValues&&this._fieldValues.Coordinates&&this._fieldValues.Coordinates.hasOwnProperty("enabled")&&(c=this._fieldValues.Coordinates.enabled,a=this._fieldValues.Coordinates.coordinatesSystem,h=this._fieldValues.Coordinates.field);e=new n({style:{width:"99%"},options:this._createCoordinatesOptions()},f.create("div",{},this.selectCoordinateNode));
this.own(m(e,"change",d.hitch(this,function(b){this.fieldSelector.set("options",this._getFieldsOptionsObj(b));0<this.fieldSelector.options.length&&this.fieldSelector.set("value",this.fieldSelector.options[0].value)})));a&&e.set("value",a,!1);this.fieldSelector=new n({style:{width:"99%"},options:this._getFieldsOptionsObj(e.getValue())},f.create("div",{},this.selectAttributeNode));h&&(this.fieldSelector.set("value",h),"MGRS"===h&&this._createLayersAndFields());this.own(m(this.fieldSelector,"change",
d.hitch(this,function(){this._createLayersAndFields()})));this.isGroup||(g.add(this.groupInfoNode1,"esriCTHidden"),g.add(this.groupInfoNode2,"esriCTHidden"),g.remove(this.coordianteDijitMainWrapper,"esriCTCoordinateWidth"),g.add(this.coordianteDijitMainWrapper,"esriCTFullWidth"),l=!0,b=420);k=new v({titleLabel:this.nls.coordinatesPage.popupTitle,width:b,maxHeight:500,autoHeight:l,content:this,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){var b={},a={};b.enabled=c;b.coordinatesSystem=
e.get("value");b.field=this.fieldSelector.get("value");if(this.isGroup){if(!this.groupNameTextBox.isValid()){this.groupNameTextBox.focus();return}}else delete this._fieldValues.Coordinates.attributeActionGroupName;this._fieldValues.Coordinates||(this._fieldValues.Coordinates={actionName:"Coordinates"});d.mixin(this._fieldValues.Coordinates,b);this.isGroup?(a.name=this.groupNameTextBox.get("value"),a.dataType=this.fieldSelector._getSelectedOptionsAttr().label,a.attributeInfo=b,a.appliedOn=this._layerAndFieldsApplyOnObj.getCheckedFields(a),
this.emit("groupInfoUpdated",a)):this.emit("attributeActionUpdated");k.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){k.close()})}],onClose:d.hitch(this,function(){})})},_initControls:function(){this.groupNameTextBox=new w({style:{width:"99%"},required:!0,trim:!0},f.create("div",{},this.groupNameTextBoxNode));this.groupNameTextBox.validator=d.hitch(this,function(b){return b?b!==this.prevName&&this.editUtils.isDuplicateGroupName(b,this.existingGroupNames)?
(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.uniqueGroupNameMsg),!1):!0:(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.requiredGroupNameMsg),!1)});this.name&&this.groupNameTextBox.set("value",this.name)},_createCoordinatesOptions:function(){var b=[];this.isGroup?(0<this.coordinatesSavedDataTypes.MapSpatialReference.length&&b.push({label:this.nls.coordinatesPage.mapSpatialReference,value:"MapSpatialReference"}),0<this.coordinatesSavedDataTypes.LatLong.length&&
b.push({label:this.nls.coordinatesPage.latlong,value:"LatLong"}),0<this.coordinatesSavedDataTypes.MGRS.length&&b.push({label:this.nls.coordinatesPage.MGRS,value:"MGRS"})):b.push({label:this.nls.coordinatesPage.mapSpatialReference,value:"MapSpatialReference"},{label:this.nls.coordinatesPage.latlong,value:"LatLong"},{label:this.nls.coordinatesPage.MGRS,value:"MGRS"});return b},_getFieldsOptionsObj:function(b){var c=[],a=[],a=this._getCoordinateSystemOptions(b);e.forEach(a,d.hitch(this,function(a){this.isGroup?
-1===this.coordinatesSavedDataTypes[b].indexOf(a.alias)&&-1===this.coordinatesSavedDataTypes.LatLong.indexOf(a.alias)||c.push({label:a.alias||a.name,value:a.name}):("xy"!==a.name||"xy"===a.name&&"esriFieldTypeString"===this._fieldType)&&c.push({label:a.alias||a.name,value:a.name})}));return c},_getCoordinateSystemOptions:function(b){var c;switch(b){case "LatLong":c=[{name:"y",alias:"Latitude"},{name:"x",alias:"Longitude"},{name:"xy",alias:"Latitude Longitude"}];break;case "MapSpatialReference":c=
[{name:"x",alias:"X"},{name:"y",alias:"Y"},{name:"xy",alias:"X Y"}];break;case "MGRS":c=[{name:"MGRS",alias:"MGRS"}]}return c},_createLayerFieldsFilter:function(){var b={};!this.fieldSelector||"xy"!==this.fieldSelector.value&&"MGRS"!==this.fieldSelector.value?e.forEach(this._totalLayers,d.hitch(this,function(c){c.isTable||e.forEach(c.layerObject.fields,d.hitch(this,function(a){if("esriFieldTypeString"===a.type||"esriFieldTypeSmallInteger"===a.type||"esriFieldTypeInteger"===a.type||"esriFieldTypeSingle"===
a.type||"esriFieldTypeDouble"===a.type&&a.editable)b[c.id]||(b[c.id]={}),b[c.id][a.name]=a}))})):e.forEach(this._totalLayers,d.hitch(this,function(c){c.isTable||(b[c.id]={},e.forEach(c.layerObject.fields,d.hitch(this,function(a){"esriFieldTypeString"===a.type&&(b[c.id]||(b[c.id]={}),b[c.id][a.name]=a)})))}));return b},_createLayersAndFields:function(){this._layerAndFieldsApplyOnObj=new x({map:this.map,layerInfos:this.layerInfos,_configInfos:this._configInfos,actionName:"Coordinates",nls:this.nls,
prevName:this.prevName,existingGroups:this.existingGroups,layerDetails:this._createLayerFieldsFilter(),appliedOn:this.appliedOn});f.empty(this.tableParentContainer);this._layerAndFieldsApplyOnObj.placeAt(this.tableParentContainer);this._layerAndFieldsApplyOnObj.startup()},deleteGroup:function(){this._layerAndFieldsApplyOnObj.deleteGroup()}})});