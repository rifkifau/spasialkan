// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_SingleFilterParameter.html":'\x3cdiv\x3e\r\n  \x3ctable style\x3d"width:100%;"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr class\x3d"first-tr"\x3e\r\n        \x3ctd\x3e\r\n          \x3cdiv class\x3d"prompt" data-dojo-attach-point\x3d"promptNode"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"second-tr"\x3e\r\n        \x3ctd data-dojo-attach-point\x3d"valueProviderTd"\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"third-tr"\x3e\r\n        \x3ctd\x3e\r\n          \x3cdiv class\x3d"hint" data-dojo-attach-point\x3d"hintNode"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/Deferred dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_SingleFilterParameter.html dojo/_base/lang ../utils".split(" "),function(b,f,g,h,k,l,m,n,d,e){return h([k,l,m,f],{baseClass:"jimu-single-filter-parameter",templateString:n,valueProvider:null,nls:null,url:null,layerDefinition:null,fieldInfo:null,part:null,valueProviderFactory:null,postCreate:function(){this.inherited(arguments);this.valueProvider=
this.valueProviderFactory.getValueProvider(this.part,!0);this.valueProvider.placeAt(this.valueProviderTd);this.own(b(this.valueProvider,"change",d.hitch(this,this._onValueProviderChanged)));this.own(b(this.valueProvider,"enter",d.hitch(this,this._onValueProviderEnter)));this.valueProvider.bindChangeEvents()},getValueObject:function(){return this.valueProvider.getValueObject()},init:function(){return this.build(this.fieldInfo,this.part)},build:function(a,b){var c=null;this.fieldInfo=a;this.part=b;
if(a=b.interactiveObj)this.promptNode.innerHTML=e.sanitizeHTML(a.prompt||""),this.hintNode.innerHTML=e.sanitizeHTML(a.hint||"");(a=this.valueProvider.setValueObject(this.part.valueObj))&&"function"===typeof a.then?c=a:(c=new g,c.resolve(this.valueProvider));return c},disable:function(){this.valueProvider.disable()},enable:function(){this.valueProvider.enable()},isEnabled:function(){return this.valueProvider.isEnabled()},getStatus:function(){return this.valueProvider.getStatus()},_showValidationErrorTip:function(a){!a.validate()&&
a.domNode&&a.focusNode&&(a.focusNode.focus(),a.focusNode.blur())},_onValueProviderEnter:function(){this.emit("enter")},_onValueProviderChanged:function(){this.emit("change")}})});