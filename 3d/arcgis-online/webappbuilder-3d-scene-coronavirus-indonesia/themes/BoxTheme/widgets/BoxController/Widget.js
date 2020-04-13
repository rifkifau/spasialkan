// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/BoxTheme/widgets/BoxController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/BoxTheme/widgets/BoxController/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"boxMenu box-bgcolor jimu-main-background" data-dojo-attach-point\x3d"menuNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"box-controller-inner" data-dojo-attach-point\x3d"innerNode"\x3e\r\n    \x3cdiv class\x3d"boxMain box-bgcolor jimu-main-background" data-dojo-attach-point\x3d"mainNode"\x3e\r\n      \x3cdiv class\x3d"boxTitle" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"boxTitle" data-dojo-attach-point\x3d"labelNode" style\x3d"display: none;"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"boxToggle" data-dojo-attach-point\x3d"toggleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"boxBar"\x3e\r\n        \x3cdiv class\x3d"boxBarInner"\x3e\r\n          \x3cdiv class\x3d"boxContainer" data-dojo-attach-point\x3d"containerNode"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"boxNav" data-dojo-attach-point\x3d"navNode"\x3e\r\n        \x3cul id\x3d"pages" class\x3d"navigation"\x3e\x3c/ul\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"boxPanel" data-dojo-attach-point\x3d"panelNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/BoxTheme/widgets/BoxController/css/style.css":".box-controller {width: 340px !important; height: 160px !important; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s;}.box-controller-open {height: 98.5% !important;}.box-controller-widget {width: 60px !important; height: 60px !important; cursor: pointer;}.box-controller-inner {position: absolute; left: 10px; right: 10px; top: 10px; bottom: 10px; background-color: #fff; display: block; -webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.35); -moz-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.35); box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.35);}.box-controller-widget .box-controller-inner {display: none;}.boxMenu {margin: 10px; width: 40px; height: 40px; background-image: url('images/menu.png'); background-repeat: no-repeat; background-position: center center;}.boxMain {position: absolute; width: 100%; height: 140px; overflow: hidden; font-size: 16px; padding: 10px;}.boxToggle {position: absolute; left: 50%; top: 0px; width: 30px; height: 20px; margin-left: -15px; cursor: pointer; background-image: url('images/toggle.png'); background-repeat: no-repeat; background-position: center center; display: none;}.boxTitle {position: absolute; left: 10px; right: 10px; top: 10px; color: #fff; height: 40px; text-align: center; padding: 0px; font-size: 20px; line-height: 40px; font-weight: normal; overflow: hidden; text-overflow: ellipsis; font-family: helveticaneue;}.boxBar {position: absolute; bottom: 30px; height: 50px; left: 10px; right: 10px; overflow: hidden;}.boxBarInner {width: 300px; height: 50px; margin: 0 auto; overflow: hidden;}.boxContainer {position: relative; left: 0px; top: 0px; height: 50px; width: auto; overflow: visible; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s;}.jimu-rtl .boxContainer {position: relative; right: 0px; top: 0px; height: 50px; width: auto; overflow: visible; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s;}.icon-node {float: left; width: 50px; height: 50px; cursor: pointer;}.jimu-rtl .icon-node {float: right; width: 50px; height: 50px; cursor: pointer;}.icon-node-active,.icon-node:active,.icon-node:focus,.icon-node:hover {background-color: rgba(0, 0, 0, 0.2); border-radius: 25px;}.icon-node img {margin: 13px; width: 24px; height: 24px;}.boxNav {position: absolute; bottom: 10px; height: 20px; left: 10px; right: 10px; overflow: hidden;}.box-controller .navigation {list-style-type: none; text-align: center; width: 100%; height: 20px; margin: auto; padding: 0px; display: block; cursor: pointer;}.box-controller .navigation li {width: 20px; height: 20px; display: inline-block; background: url(images/dot.png);}.box-controller .navigation li:hover {background: url(images/doton.png);}.box-controller .navigation li.active {background: url(images/doton.png);}.boxPanel {position: absolute; left: 0px; right: 0px; top: 150px; bottom: 0px; overflow: hidden;}.box-controller-open .boxPanel {overflow: auto;}@media only screen and (max-width: 500px) {.box-controller {width: 100% !important; margin: 0px !important; height: 130px !important;} .box-controller-open {height: 60% !important;} .box-controller-widget {width: 70px !important; height: 70px !important;} .box-controller-inner {position: absolute; display: block; left: 0px; right: 0px; top: 0px; bottom: 0px;} .box-controller-widget .box-controller-inner {display: none;} .boxMain {height: 130px;}}",
"*now":function(k){k(['dojo/i18n!*preload*themes/BoxTheme/widgets/BoxController/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","uk","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/query dojo/on dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/Deferred jimu/BaseWidget jimu/PoolControllerMixin jimu/utils".split(" "),function(k,n,e,f,g,h,p,c,l,q,d,r,t,u,m){return k([t,u],{baseClass:"box-controller",height:50,postCreate:function(){this.inherited(arguments);this.titleNode.innerHTML=m.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");h(this.toggleNode,"click",
e.hitch(this,this._toggleBox));h(this.menuNode,"click",e.hitch(this,this._closeMenu))},startup:function(){this.inherited(arguments);this._createIconNodes();g(".jimu-widget-zoomslider").forEach(function(a){c.add(a,"jimu-main-background")})},onAction:function(a,b){"highLight"===a&&b&&(b=g('div[settingid\x3d"'+b.widgetId+'"]',this.domNode)[0],this._highLight(b));"removeHighLight"===a&&this._removeHighLight()},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=
null);g(".jimu-widget-zoomslider").forEach(function(a){c.remove(a,"jimu-main-background")});this.inherited(arguments)},onAppConfigChanged:function(a,b,c){switch(b){case "attributeChange":this._onAttributeChange(a,c);break;case "layoutChange":this.openedId&&""!==this.openedId&&setTimeout(e.hitch(this,this._switchNodeToOpen),1E3,this.openedId)}},getOpenedIds:function(){this.inherited(arguments);var a=[];this.openedId&&""!==this.openedId&&a.push(this.openedId);return a},setOpenedIds:function(a){console.log("SETTING OPEN IDS",
a);this._closeMenu();0<a.length&&(this.openedId=a=a[0],this._switchNodeToOpen(a))},_getWidgetPosition:function(){console.log(jimuConfig);var a={bottom:80,right:10};"16px"!==d.get(this.domNode,"bottom")&&(a={bottom:16,right:10});return a},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var b=q.getMarginBox(a);this.hlDiv=l.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&
(l.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(a,b){void 0!==b.title&&b.title!==this.appConfig.title&&(this.titleNode.innerHTML=m.sanitizeHTML(b.title?b.title:""))},_createIconNodes:function(){f.empty(this.containerNode);var a,b,c=this.getAllConfigs();f.setStyle(this.containerNode,{width:c.length*this.height+"px"});var d;for(a=0;a<c.length;a++){b=c[a];var e=this._createIconNode(b);b.openAtStart&&(d=e)}this._createPages(c.length);d&&!this.openAtStartWidget&&(this._onIconClick(d),
this.openAtStartWidget=d.config.name,this.openedId=d.config.id)},_createIconNode:function(a){var b,c;c=a.icon;b=f.create("div",{"class":"icon-node",title:a.label,settingId:a.id,style:{width:this.height+"px",height:this.height+"px"}},this.containerNode);f.create("img",{src:c},b);h(b,"click",e.hitch(this,function(){this._onIconClick(b)}));b.config=a;return b},_createPages:function(a){this.pageCount=Math.ceil(a*this.height/300);a=p.byId("pages");a.innerHTML="";if(1<this.pageCount){for(var b=0;b<this.pageCount;b++){var d=
l.create("li",{id:"page"+b},a);this.own(h(d,"click",e.hitch(this,this._setPage,b)))}c.add("page0","active")}this.page=0},_setPage:function(a){c.remove("page"+this.page,"active");this.page=a;c.add("page"+this.page,"active");var b="left";window.isRTL&&(b="right");d.set(this.containerNode,b,0-300*a+"px")},_toggleBox:function(){c.toggle(this.domNode,"box-controller-open")},switchNode:function(a){if(a=this._getIconNodeById(a))this._closeMenu(),this._onIconClick(a)},_onIconClick:function(a){this.openedId&&
(this._lastOpenId=this.openedId);this.openedId&&this.openedId===a.config.id?(this.openedId="",this._switchNodeToClose(this._lastOpenId)):(this.openedId&&this._switchNodeToClose(this.openedId),this.openedId=a.config.id,this._switchNodeToOpen(a.config.id))},_switchNodeToOpen:function(a){a=this._getIconNodeById(a);c.add(a,"icon-node-active");this.labelNode.innerHTML=m.sanitizeHTML(a.config.label?a.config.label:"");d.set(this.titleNode,"display","none");d.set(this.labelNode,"display","block");this._showIconContent(a.config)},
_switchNodeToClose:function(a){var b=this._getIconNodeById(a);c.remove(this.domNode,"box-controller-open");c.remove(b,"icon-node-active");d.set(this.toggleNode,"display","none");d.set(this.titleNode,"display","block");d.set(this.labelNode,"display","none");return!1===b.config.inPanel?(this.widgetManager.closeWidget(a),this.openedId="",a=new r,a.resolve(),a):"Measurement"===b.config.name?this.panelManager.destroyPanel(a+"_panel"):this.panelManager.closePanel(a+"_panel")},_getIconNodeById:function(a){a=
g('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_showIconContent:function(a){!1===a.inPanel?(c.add(this.domNode,"box-controller-widget"),this.widgetManager.loadWidget(a).then(e.hitch(this,function(b){this.openedId=a.id;f.setStyle(b.domNode,"zIndex",101);b.setPosition(this._getWidgetPosition(),this.sceneView.map.id);this.widgetManager.openWidget(b);d.set(b.domNode,"display",null)}))):(d.set(this.toggleNode,"display","block"),c.add(this.domNode,"box-controller-open"),
this.panelManager.showPanel(a).then(e.hitch(this,function(b){b.setPosition(b.position,this.panelNode);"Measurement"===a.name&&setTimeout(e.hitch(this,this._restartMeasurement),1E3);this.openedId=a.id})))},_restartMeasurement:function(){n.forEach(this.widgetManager.loaded,function(a){"Measurement"===a.name&&a.startup()})},_closeMenu:function(){this.openedId&&""!==this.openedId&&(this._switchNodeToClose(this.openedId),this.openedId="");c.remove(this.domNode,"box-controller-widget")}})});