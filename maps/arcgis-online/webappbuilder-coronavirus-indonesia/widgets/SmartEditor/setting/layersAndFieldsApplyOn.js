// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/layerAndFieldsApplyOn.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTSearchFieldNode" data-dojo-attach-point \x3d "searchNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point \x3d "layerAndFieldsMainDiv"\x3e\x3c/div\x3e\r\n  \x3cdiv style\x3d"margin-top: 5px;" class\x3d"esriCTHidden" data-dojo-attach-point \x3d "domainFieldHintMsg"\x3e\r\n    \x3cdiv class\x3d"esriCTDomainlistDiv"\x3e*\x3c/div\x3e\r\n    \x3cdiv\x3e${nls.actionPage.domainListTitle}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on jimu/BaseWidgetSetting dijit/_TemplatedMixin jimu/dijit/CheckBox jimu/utils dojo/dom-attr dojo/dom-class dojo/query dojo/string dojo/dom-style dijit/form/ValidationTextBox dojo/text!./layerAndFieldsApplyOn.html dijit/form/CheckBox dijit/registry".split(" "),function(u,v,k,l,h,m,w,x,r,y,n,p,g,z,A,B,C,t,D){return u([w,v,x],{baseClass:"jimu-widget-smartEditor-setting-layersAndFieldsApplyOn",templateString:C,
checkBoxNodes:null,layerCheckBoxNodes:null,showDomainFieldIndicator:!1,searchTextBox:null,defalutFieldInfos:[{actionName:"Intersection",enabled:!1,fields:[]},{actionName:"Address",enabled:!1},{actionName:"Coordinates",enabled:!1,coordinatesSystem:"MapSpatialReference",field:"x"},{actionName:"Preset",enabled:!1}],nlsActionName:{Intersection:"Intersection1",Address:"Address1",Coordinates:"Coordinates1",Preset:"Preset1"},postCreate:function(){this.inherited(arguments);this.nlsActionName={Intersection:this.nls.actionPage.copyAction.intersection,
Address:this.nls.actionPage.copyAction.address,Coordinates:this.nls.actionPage.copyAction.coordinates,Preset:this.nls.actionPage.copyAction.preset};this.layerCheckBoxNodes={};this.checkBoxNodes={};this._prevAppliedOnLayers=[];this.appliedOn&&(this._prevAppliedOnLayers=k.clone(Object.keys(this.appliedOn)));this._addSearchControl();this._addLayerAndFields(!0)},_addSearchControl:function(){this.searchTextBox=new B({trim:!0,placeHolder:this.nls.actionPage.searchPlaceHolder,intermediateChanges:!0},h.create("div",
{},this.searchNode));A.set(this.searchTextBox.domNode,"width","350px");this.own(m(this.searchTextBox,"change",k.hitch(this,this._searchTextUpdated)));var c=h.create("div",{"class":"esriCTExpandAllNode"},this.searchNode),b=h.create("div",{"class":"esriCTExpandAllNode"},this.searchNode);this._expandAllCheckBox=new t({"class":"switch-toggle",checked:!1},h.create("div",{},c));h.create("label",{innerHTML:this.nls.actionPage.expandAllLabel,"class":"esriCTDojoCheckBoxLabel"},c);this._checkAllFieldsCheckBox=
new t({checked:!1},h.create("div",{},b));h.create("label",{innerHTML:this.nls.actionPage.selectAllLabel,"class":"esriCTDojoCheckBoxLabel"},b);this.own(m(this._expandAllCheckBox,"change",k.hitch(this,function(a){a?(a=g(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed.esriCTToggleLayerExpanded",this.layerAndFieldsMainDiv))&&0<a.length&&l.forEach(a,function(a){a.click()}):(a=g(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",this.layerAndFieldsMainDiv))&&0<a.length&&l.forEach(a,function(a){p.contains(a,
"esriCTToggleLayerExpanded")||a.click()})})));this.own(m(this._checkAllFieldsCheckBox,"change",k.hitch(this,function(a){var c,b;c=""!==this.searchTextBox.get("value")?g("div[searchstring^\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.layerAndFieldsMainDiv):g(".esriCTFieldsDiv",this.layerAndFieldsMainDiv);l.forEach(c,k.hitch(this,function(c){b=D.byNode(g(".esriCTFieldsCheckBox",c)[0]);a?b.check(!0):b.uncheck(!0)}));this.emit("layerFieldsUpdated",!1)})))},_searchTextUpdated:function(c){var b;
b=c.toLowerCase();if(""!==b){c=g("[searchstring]",this.layerAndFieldsMainDiv);b=g("div[searchstring^\x3d'"+b+"']",this.layerAndFieldsMainDiv);c.style("display","none");c.removeClass("esriCTNotFilteredBySearch");c.addClass("esriCTFilteredBySearch");b.style("display","");b.replaceClass("esriCTNotFilteredBySearch","esriCTFilteredBySearch");c=this.layerDetails;for(var a in c){var d,e,f;if(0<Object.keys(c[a]).length){b=g("[layermaindivid \x3d '"+a+"']",this.layerAndFieldsMainDiv);d=g("[layerid\x3d'"+a+
"']",this.layerAndFieldsMainDiv);e=!0;for(f=0;f<d.length;f++)if(p.contains(d[f],"esriCTNotFilteredBySearch")){e=!1;break}e?b.style("display","none"):b.style("display","")}}}else g("[layermaindivid]",this.layerAndFieldsMainDiv).style("display",""),g("[searchstring]",this.layerAndFieldsMainDiv).style("display",""),g("[searchstring]",this.layerAndFieldsMainDiv).removeClass("esriCTFilteredBySearch"),g("[searchstring]",this.layerAndFieldsMainDiv).addClass("esriCTNotFilteredBySearch");this._handleHeaderCheckBoxState()},
_addLayerAndFields:function(){var c,b=[],a;c=this.layerDetails;for(var d in c)if(0<Object.keys(c[d]).length){a=h.create("div",{"class":"esriCTLayerMainDiv"},this.layerAndFieldsMainDiv);n.set(a,"layermaindivid",d);this._createLayerName(a,d);a=this._getLayersFieldValues(d);this.appliedOn&&this.appliedOn.hasOwnProperty(d)&&0<this.appliedOn[d].length&&b.push(d);for(var e in c[d])if(c[d][e].editable){var f=!1,m=h.create("div",{"class":"esriCTFieldsDiv  esriCTHidden"},this.layerAndFieldsMainDiv);n.set(m,
"layerid",d);if(a&&a.hasOwnProperty(e)){var q;l.some(a[e],function(a){if(a.actionName===this.actionName&&a.enabled&&(!a.hasOwnProperty("attributeActionGroupName")||a.hasOwnProperty("attributeActionGroupName")&&a.attributeActionGroupName!==this.prevName))return q=a,f=!0},this);"Preset"!==this.actionName||!f||!q||q.hasOwnProperty("attributeActionGroupName")&&""!==q.attributeActionGroupName||(f=!1)}this._createFieldName(c[d][e],d,m,f)}}0<b.length&&setTimeout(k.hitch(this,function(){this._applyPrevSettings();
l.forEach(b,k.hitch(this,function(a){var c=g('[rootnodelayerid\x3d"'+a+'"]');c&&0<c.length&&p.contains(c[0],"esriCTToggleLayerExpanded")&&(g('[rootnodelayerid\x3d"'+a+'"]').toggleClass("esriCTToggleLayerExpanded"),g('[layerid\x3d"'+a+'"]').toggleClass("esriCTHidden"))}));this.emit("layerFieldsUpdated",!0)}),100)},_createLayerName:function(c,b){var a,d,e;this.layerCheckBoxNodes[b]=[];this.checkBoxNodes[b]=[];this.layerInfos.getLayerOrTableInfoById(b)&&(a=this.layerInfos.getLayerOrTableInfoById(b).layerObject.name,
d=h.create("div",{"class":"esriCTToggleLayerIcon esriCTToggleLayerCollapsed esriCTToggleLayerExpanded"},c),n.set(d,"rootnodelayerid",b),this.own(m(d,"click",k.hitch(this,function(a){p.toggle(a.currentTarget,"esriCTToggleLayerExpanded");p.contains(a.currentTarget,"esriCTToggleLayerExpanded")&&this._expandAllCheckBox.set("checked",!1,!1);e=n.get(a.currentTarget,"rootnodelayerid");g('[layerid\x3d"'+e+'"]').toggleClass("esriCTHidden")}))),c=h.create("div",{"class":"esriCTLayercheckBox"},c),h.create("div",
{innerHTML:a},c),a=new r({label:a,checked:!1}),this.layerCheckBoxNodes[b].push(a),n.set(a.domNode,"LayerCheckBoxId",b),m(a.domNode,"click",k.hitch(this,this._parentNodeStateChanged)))},_getLayersFieldValues:function(c){var b;l.some(this._configInfos,function(a){if(a.featureLayer&&a.featureLayer.id===c)return a.fieldValues?b=a.fieldValues:a.fieldValues={},!0},this);return b},_getAllLayersFieldValues:function(c,b,a){l.forEach(b,function(b){b.featureLayer&&b.featureLayer.id===a&&(b.fieldValues?c||(c=
[]):b.fieldValues={},c.push(b.fieldValues));b.relationshipInfos&&(c=this._getAllLayersFieldValues(c,b.relationshipInfos,a))},this);return c},_createFieldName:function(c,b,a,d){var e;e=y.getDefaultPortalFieldInfo(c);var f=z.substitute(this.nls.attributeActionsPage.alreadyAppliedActionMsg,{action:this.nlsActionName[this.actionName]}),f=h.create("div",{"class":"esriCTExistingExpressionDiv esriCTVisibilityHidden",title:f},a);d&&p.remove(f,"esriCTVisibilityHidden");this.showDomainFieldIndicator&&(d=h.create("div",
{"class":"esriCTDomainlistDiv esriCTVisibilityHidden",innerHTML:"*",title:this.nls.actionPage.domainListTitle},a),c.domain&&c.domain.codedValues&&(p.remove(d,"esriCTVisibilityHidden"),p.remove(this.domainFieldHintMsg,"esriCTHidden")));c=h.create("div",{"class":"esriCTFieldsCheckBox"},a);c=new r({label:e.label,value:e.fieldName,checked:!1},c);this.checkBoxNodes[b].push(c);n.set(a,"searchstring",e.label.toLowerCase());n.set(c.domNode,"fieldsCheckBoxId",b);m(c.domNode,"click",k.hitch(this,this._childNodeStateChanged));
m(c,"change",k.hitch(this,function(){this._handleHeaderCheckBoxState()}))},_handleHeaderCheckBoxState:function(){var c,b=!0;c=""!==this.searchTextBox.get("value")?g("[searchstring^\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.layerAndFieldsMainDiv):g(".esriCTFieldsDiv",this.layerAndFieldsMainDiv);0<c.length?l.some(c,k.hitch(this,function(a){a=g(".checkbox",a)[0];if(!p.contains(a,"jimu-icon-checked"))return b=!1,!0})):b=!1;b?this._checkAllFieldsCheckBox.set("checked",!0,!1):this._checkAllFieldsCheckBox.set("checked",
!1,!1)},_parentNodeStateChanged:function(c){var b,a;b=n.get(c.currentTarget,"LayerCheckBoxId");c=this.layerCheckBoxNodes[b];b=this.checkBoxNodes[b];a=c[0].getValue();l.forEach(b,k.hitch(this,function(b){a?b.setValue(!0):b.setValue(!1)}))},_childNodeStateChanged:function(c){var b,a;b=n.get(c.currentTarget,"fieldsCheckBoxId");c=this.layerCheckBoxNodes[b];b=this.checkBoxNodes[b];a=!0;l.some(b,k.hitch(this,function(b){if(!b.getValue())return a=!1,!0}));c[0].setValue(a);this.emit("layerFieldsUpdated",
!1)},getOnlyCheckedFields:function(){var c={},b;for(b in this.checkBoxNodes){c[b]=[];for(var a in this.checkBoxNodes[b])this.checkBoxNodes[b][a].checked&&c[b].push(this.checkBoxNodes[b][a].get("value"))}return c},getCheckedFields:function(c){var b={},a;for(a in this.checkBoxNodes){b[a]=[];for(var d in this.checkBoxNodes[a])this.checkBoxNodes[a][d].checked&&b[a].push(this.checkBoxNodes[a][d].get("value"))}this._applySettingsInLayer(c,b);return b},_removeSettingsFromOtherGroups:function(c,b,a){var d;
if(this.existingGroups)for(var e in this.existingGroups)if(e!==c&&e!==this.prevName&&(d=this.existingGroups[e].appliedOn)&&d.hasOwnProperty(b)&&-1<d[b].indexOf(a)){var f=d[b].indexOf(a);d[b].splice(f,1)}},_removePrevSettingsFromLayerFields:function(c){var b=[];if((b=this._getAllLayersFieldValues(b,this._configInfos,c))&&0<b.length)for(var a=0;a<b.length;a++)if(c=b[a])for(var d in c)for(var e=c[d],f=0;f<e.length;f++)e[f].actionName===this.actionName&&e[f].hasOwnProperty("attributeActionGroupName")&&
e[f].attributeActionGroupName===this.prevName&&(e[f].enabled=!1,delete e[f].attributeActionGroupName,"Intersection"===this.actionName?(e[f].fields=[],e[f].ignoreLayerRanking=!1):"Address"===this.actionName?delete e[f].field:"Coordinates"===this.actionName&&(e[f].coordinatesSystem="MapSpatialReference",e[f].field="x"))},_applysettingsToField:function(c,b,a){var d,e=[];if((e=this._getAllLayersFieldValues(e,this._configInfos,c))&&0<e.length){for(var f=0;f<e.length;f++)if(d=e[f],this.appliedOn&&this.appliedOn.hasOwnProperty(c)){var g=
this.appliedOn[c];g&&0<g.length&&l.forEach(g,function(a){if(-1===b.indexOf(a)&&d.hasOwnProperty(a)){a=d[a];for(var c=0;c<a.length;c++)a[c].actionName===this.actionName&&(a[c].enabled=!1,delete a[c].attributeActionGroupName,"Intersection"===this.actionName?(a[c].fields=[],a[c].ignoreLayerRanking=!1):"Address"===this.actionName?delete a[c].field:"Coordinates"===this.actionName&&(a[c].coordinatesSystem="MapSpatialReference",a[c].field="x"))}},this)}l.forEach(b,function(b){for(var f=0;f<e.length;f++){var g;
d=e[f];d.hasOwnProperty(b)||(d[b]=k.clone(this.defalutFieldInfos));g=d[b];for(var h=0;h<g.length;h++)g[h].actionName===this.actionName&&(a.attributeInfo&&(g[h]=k.mixin(g[h],a.attributeInfo)),g[h].enabled=!0,g[h].attributeActionGroupName=a.name,this._removeSettingsFromOtherGroups(a.name,c,b))}},this)}},_applySettingsInLayer:function(c,b){for(var a in b){var d;this._prevAppliedOnLayers&&-1<this._prevAppliedOnLayers.indexOf(a)&&(d=this._prevAppliedOnLayers.indexOf(a),this._prevAppliedOnLayers.splice(d,
1));this._applysettingsToField(a,b[a],c)}this.deleteGroup()},deleteGroup:function(){this._prevAppliedOnLayers&&l.forEach(this._prevAppliedOnLayers,function(c){this._removePrevSettingsFromLayerFields(c)},this)},_applyPrevSettings:function(){if(this.appliedOn)for(var c in this.appliedOn)if(this.appliedOn.hasOwnProperty(c)){var b=this.appliedOn[c];if(b&&0<b.length){var a=this.layerCheckBoxNodes[c],d=!0;l.forEach(this.checkBoxNodes[c],k.hitch(this,function(a){-1<b.indexOf(a.value)?a.setValue(!0):a.getValue()||
(d=!1)}));d&&a&&a[0]&&a[0].setValue(d)}}}})});