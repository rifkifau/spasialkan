// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistanceAndDirection/setting/templates/ColorPickerEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/Color dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ColorPickerEditor.html jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),function(c,d,e,f,g,h,k){return c([e,f,g],{_defaultColor:"#485566",templateString:h,nls:null,postCreate:function(){this.colorPicker=new k({color:this._defaultColor,width:this._defaultWidth},this.colorPicker);this.colorPicker.startup();this.inherited(arguments)},startup:function(){this.inherited(arguments)},
_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},getValues:function(){var a=null,b=this.colorPicker.getColor();b&&(a=b);return a},setValues:function(a){if("object"===typeof a||"string"===typeof a)a=this._rgbToHex(a.color),this.colorPicker.setColor(new d(a))},_hexToRgb:function(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},_componentToHex:function(a){a=a.toString(16);return 1===a.length?
"0"+a:a},_rgbToHex:function(a){return"#"+this._componentToHex(a.r)+this._componentToHex(a.g)+this._componentToHex(a.b)}})});