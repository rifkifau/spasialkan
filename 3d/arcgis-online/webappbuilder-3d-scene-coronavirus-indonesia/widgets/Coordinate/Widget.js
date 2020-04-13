// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"dijit/_WidgetsInTemplateMixin":function(){define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser"],function(v,d,n,f,c){return n("dijit._WidgetsInTemplateMixin",null,{_earlyTemplatedStartup:!1,contextRequire:null,_beforeFillContent:function(){if(/dojoType|data-dojo-type/i.test(this.domNode.innerHTML)){var a=this.domNode;this.containerNode&&!this.searchContainerNode&&(this.containerNode.stopParser=!0);c.parse(a,{noStart:!this._earlyTemplatedStartup,
template:!0,inherited:{dir:this.dir,lang:this.lang,textDir:this.textDir},propsThis:this,contextRequire:this.contextRequire,scope:"dojo"}).then(f.hitch(this,function(a){this._startupWidgets=a;for(var c=0;c<a.length;c++)this._processTemplateNode(a[c],function(a,c){return a[c]},function(a,c,d){return c in a?a.connect(a,c,d):a.on(c,d,!0)});this.containerNode&&this.containerNode.stopParser&&delete this.containerNode.stopParser}));if(!this._startupWidgets)throw Error(this.declaredClass+": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
}},_processTemplateNode:function(a,c,d){return c(a,"dojoType")||c(a,"data-dojo-type")?!0:this.inherited(arguments)},startup:function(){v.forEach(this._startupWidgets,function(a){a&&!a._started&&a.startup&&a.startup()});this._startupWidgets=null;this.inherited(arguments)}})})},"dojo/parser":function(){define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "),function(v,
d,n,f,c,a,q,g,e,B,M,H,E,K,L,N){function I(a){return eval("("+a+")")}function O(a){var p=a._nameCaseMap,t=a.prototype;if(!p||p._extendCnt<F){var p=a._nameCaseMap={},c;for(c in t)"_"!==c.charAt(0)&&(p[c.toLowerCase()]=c);p._extendCnt=F}return p}function J(a,c){c||(c=v);var p=c._dojoParserCtorMap||(c._dojoParserCtorMap={}),t=a.join();if(!p[t]){for(var e=[],d=0,g=a.length;d<g;d++){var f=a[d];e[e.length]=p[f]=p[f]||n.getObject(f)||~f.indexOf("/")&&c(f)}a=e.shift();p[t]=e.length?a.createSubclass?a.createSubclass(e):
a.extend.apply(a,e):a}return p[t]}new Date("X");var F=0;e.after(n,"extend",function(){F++},!0);E={_clearCache:function(){F++;_ctorMap={}},_functionFromScript:function(a,c){var e="",p="",t=a.getAttribute(c+"args")||a.getAttribute("args");c=a.getAttribute("with");t=(t||"").split(/\s*,\s*/);c&&c.length&&f.forEach(c.split(/\s*,\s*/),function(a){e+="with("+a+"){";p+="}"});return new Function(t,e+a.innerHTML+p)},instantiate:function(a,c,e){c=c||{};e=e||{};var t=(e.scope||d._scopeName)+"Type",p="data-"+
(e.scope||d._scopeName)+"-",g=p+"type",n=p+"mixins",C=[];f.forEach(a,function(b){var k=t in c?c[t]:b.getAttribute(g)||b.getAttribute(t);if(k){var a=b.getAttribute(n),k=a?[k].concat(a.split(/\s*,\s*/)):[k];C.push({node:b,types:k})}});return this._instantiate(C,c,e)},_instantiate:function(a,c,e,d){function p(a){c._started||e.noStart||f.forEach(a,function(a){"function"!==typeof a.startup||a._started||a.startup()});return a}a=f.map(a,function(a){var p=a.ctor||J(a.types,e.contextRequire);if(!p)throw Error("Unable to resolve constructor for: '"+
a.types.join()+"'");return this.construct(p,a.node,c,e,a.scripts,a.inherited)},this);return d?B(a).then(p):p(a)},construct:function(a,c,f,A,z,x){function p(b){y&&n.setObject(y,b);for(r=0;r<D.length;r++)e[D[r].advice||"after"](b,D[r].method,n.hitch(b,D[r].func),!0);for(r=0;r<P.length;r++)P[r].call(b);for(r=0;r<C.length;r++)b.watch(C[r].prop,C[r].func);for(r=0;r<v.length;r++)L(b,v[r].event,v[r].func);return b}var t=a&&a.prototype;A=A||{};var b={};A.defaults&&n.mixin(b,A.defaults);x&&n.mixin(b,x);var k;
k=c.attributes;var h=A.scope||d._scopeName;x="data-"+h+"-";var l={};"dojo"!==h&&(l[x+"props"]="data-dojo-props",l[x+"type"]="data-dojo-type",l[x+"mixins"]="data-dojo-mixins",l[h+"type"]="dojotype",l[x+"id"]="data-dojo-id");for(var r=0,m,h=[],y,w;m=k[r++];){var u=m.name,q=u.toLowerCase();m=m.value;switch(l[q]||q){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;case "data-dojo-props":w=m;break;case "data-dojo-id":case "jsid":y=m;break;case "data-dojo-attach-point":case "dojoattachpoint":b.dojoAttachPoint=
m;break;case "data-dojo-attach-event":case "dojoattachevent":b.dojoAttachEvent=m;break;case "class":b["class"]=c.className;break;case "style":b.style=c.style&&c.style.cssText;break;default:if(u in t||(u=O(a)[q]||u),u in t)switch(typeof t[u]){case "string":b[u]=m;break;case "number":b[u]=m.length?Number(m):NaN;break;case "boolean":b[u]="false"!=m.toLowerCase();break;case "function":""===m||-1!=m.search(/[^\w\.]+/i)?b[u]=new Function(m):b[u]=n.getObject(m,!1)||new Function(m);h.push(u);break;default:q=
t[u],b[u]=q&&"length"in q?m?m.split(/\s*,\s*/):[]:q instanceof Date?""==m?new Date(""):"now"==m?new Date:M.fromISOString(m):q instanceof g?d.baseUrl+m:I(m)}else b[u]=m}}for(k=0;k<h.length;k++)l=h[k].toLowerCase(),c.removeAttribute(l),c[l]=null;if(w)try{w=I.call(A.propsThis,"{"+w+"}"),n.mixin(b,w)}catch(R){throw Error(R.toString()+" in data-dojo-props\x3d'"+w+"'");}n.mixin(b,f);z||(z=a&&(a._noScript||t._noScript)?[]:K("\x3e script[type^\x3d'dojo/']",c));var D=[],P=[],C=[],v=[];if(z)for(r=0;r<z.length;r++)l=
z[r],c.removeChild(l),f=l.getAttribute(x+"event")||l.getAttribute("event"),A=l.getAttribute(x+"prop"),w=l.getAttribute(x+"method"),h=l.getAttribute(x+"advice"),k=l.getAttribute("type"),l=this._functionFromScript(l,x),f?"dojo/connect"==k?D.push({method:f,func:l}):"dojo/on"==k?v.push({event:f,func:l}):b[f]=l:"dojo/aspect"==k?D.push({method:w,advice:h,func:l}):"dojo/watch"==k?C.push({prop:A,func:l}):P.push(l);a=(z=a.markupFactory||t.markupFactory)?z(b,c,a):new a(b,c);return a.then?a.then(p):p(a)},scan:function(a,
c){function e(b){if(!b.inherited){b.inherited={};var a=b.node,c=e(b.parent),a={dir:a.getAttribute("dir")||c.dir,lang:a.getAttribute("lang")||c.lang,textDir:a.getAttribute(k)||c.textDir},h;for(h in a)a[h]&&(b.inherited[h]=a[h])}return b.inherited}var g=[],p=[],t={},q=(c.scope||d._scopeName)+"Type",n="data-"+(c.scope||d._scopeName)+"-",b=n+"type",k=n+"textdir",n=n+"mixins",h=a.firstChild,l=c.inherited;if(!l){var r=function(b,a){return b.getAttribute&&b.getAttribute(a)||b.parentNode&&r(b.parentNode,
a)},l={dir:r(a,"dir"),lang:r(a,"lang"),textDir:r(a,k)},m;for(m in l)l[m]||delete l[m]}m={inherited:l};for(var y,w;;)if(h)if(1!=h.nodeType)h=h.nextSibling;else if(y&&"script"==h.nodeName.toLowerCase())(l=h.getAttribute("type"))&&/^dojo\/\w/i.test(l)&&y.push(h),h=h.nextSibling;else if(w)h=h.nextSibling;else if(l=h.getAttribute(b)||h.getAttribute(q),a=h.firstChild,l||a&&(3!=a.nodeType||a.nextSibling)){w=null;if(l){var u=h.getAttribute(n);y=u?[l].concat(u.split(/\s*,\s*/)):[l];try{w=J(y,c.contextRequire)}catch(D){}w||
f.forEach(y,function(b){~b.indexOf("/")&&!t[b]&&(t[b]=!0,p[p.length]=b)});u=w&&!w.prototype._noScript?[]:null;m={types:y,ctor:w,parent:m,node:h,scripts:u};m.inherited=e(m);g.push(m)}else m={node:h,scripts:y,parent:m};y=u;w=h.stopParser||w&&w.prototype.stopParser&&!c.template;h=a}else h=h.nextSibling;else{if(!m||!m.node)break;h=m.node.nextSibling;w=!1;m=m.parent;y=m.scripts}var B=new H;p.length?(c.contextRequire||v)(p,function(){B.resolve(f.filter(g,function(b){if(!b.ctor)try{b.ctor=J(b.types,c.contextRequire)}catch(S){}for(var a=
b.parent;a&&!a.types;)a=a.parent;var k=b.ctor&&b.ctor.prototype;b.instantiateChildren=!(k&&k.stopParser&&!c.template);b.instantiate=!a||a.instantiate&&a.instantiateChildren;return b.instantiate}))}):B.resolve(g);return B.promise},_require:function(a,c){a=I("{"+a.innerHTML+"}");var e=[],d=[],g=new H;c=c&&c.contextRequire||v;for(var f in a)e.push(f),d.push(a[f]);c(d,function(){for(var a=0;a<e.length;a++)n.setObject(e[a],arguments[a]);g.resolve(arguments)});return g.promise},_scanAmd:function(a,c){var e=
new H,d=e.promise;e.resolve(!0);var g=this;K("script[type\x3d'dojo/require']",a).forEach(function(a){d=d.then(function(){return g._require(a,c)});a.parentNode.removeChild(a)});return d},parse:function(c,e){!c||"string"==typeof c||"nodeType"in c||(e=c,c=e.rootNode);var d=c?a.byId(c):q.body();e=e||{};var g=e.template?{template:!0}:{},f=[],p=this;c=this._scanAmd(d,e).then(function(){return p.scan(d,e)}).then(function(a){return p._instantiate(a,g,e,!0)}).then(function(a){return f=f.concat(a)}).otherwise(function(a){console.error("dojo/parser::parse() error",
a);throw a;});n.mixin(f,c);return f}};d.parser=E;c.parseOnLoad&&N(100,E,"parse");return E})},"dojo/_base/url":function(){define(["./kernel"],function(v){var d=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,n=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,f=function(){for(var c=arguments,a=[c[0]],q=1;q<c.length;q++)if(c[q]){var g=new f(c[q]+""),a=new f(a[0]+"");if(""==g.path&&!g.scheme&&!g.authority&&!g.query)null!=g.fragment&&(a.fragment=g.fragment),g=a;else if(!g.scheme&&
(g.scheme=a.scheme,!g.authority&&(g.authority=a.authority,"/"!=g.path.charAt(0)))){for(var a=(a.path.substring(0,a.path.lastIndexOf("/")+1)+g.path).split("/"),e=0;e<a.length;e++)"."==a[e]?e==a.length-1?a[e]="":(a.splice(e,1),e--):0<e&&(1!=e||""!=a[0])&&".."==a[e]&&".."!=a[e-1]&&(e==a.length-1?(a.splice(e,1),a[e-1]=""):(a.splice(e-1,2),e-=2));g.path=a.join("/")}a=[];g.scheme&&a.push(g.scheme,":");g.authority&&a.push("//",g.authority);a.push(g.path);g.query&&a.push("?",g.query);g.fragment&&a.push("#",
g.fragment)}this.uri=a.join("");c=this.uri.match(d);this.scheme=c[2]||(c[1]?"":null);this.authority=c[4]||(c[3]?"":null);this.path=c[5];this.query=c[7]||(c[6]?"":null);this.fragment=c[9]||(c[8]?"":null);null!=this.authority&&(c=this.authority.match(n),this.user=c[3]||null,this.password=c[4]||null,this.host=c[6]||c[7],this.port=c[9]||null)};f.prototype.toString=function(){return this.uri};return v._Url=f})},"dojo/date/stamp":function(){define(["../_base/lang","../_base/array"],function(v,d){var n=
{};v.setObject("dojo.date.stamp",n);n.fromISOString=function(f,c){n._isoRegExp||(n._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var a=n._isoRegExp.exec(f);f=null;if(a){a.shift();a[1]&&a[1]--;a[6]&&(a[6]*=1E3);c&&(c=new Date(c),d.forEach(d.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "),function(a){return c["get"+a]()}),function(c,d){a[d]=a[d]||c}));f=new Date(a[0]||1970,a[1]||0,a[2]||1,a[3]||0,a[4]||
0,a[5]||0,a[6]||0);100>a[0]&&f.setFullYear(a[0]||1970);var q=0,g=a[7]&&a[7].charAt(0);"Z"!=g&&(q=60*(a[8]||0)+(Number(a[9])||0),"-"!=g&&(q*=-1));g&&(q-=f.getTimezoneOffset());q&&f.setTime(f.getTime()+6E4*q)}return f};n.toISOString=function(d,c){var a=function(a){return 10>a?"0"+a:a};c=c||{};var f=[],g=c.zulu?"getUTC":"get",e="";"time"!=c.selector&&(e=d[g+"FullYear"](),e=["0000".substr((e+"").length)+e,a(d[g+"Month"]()+1),a(d[g+"Date"]())].join("-"));f.push(e);"date"!=c.selector&&(e=[a(d[g+"Hours"]()),
a(d[g+"Minutes"]()),a(d[g+"Seconds"]())].join(":"),g=d[g+"Milliseconds"](),c.milliseconds&&(e+="."+(100>g?"0":"")+a(g)),c.zulu?e+="Z":"time"!=c.selector&&(d=d.getTimezoneOffset(),c=Math.abs(d),e+=(0<d?"-":"+")+a(Math.floor(c/60))+":"+a(c%60)),f.push(e));return f.join("T")};return n})},"dojo/throttle":function(){define([],function(){return function(v,d){var n=!0;return function(){n&&(n=!1,v.apply(this,arguments),setTimeout(function(){n=!0},d))}}})},"widgets/Coordinate/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Coordinate/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"coordinateBackground"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateMenuContainer" style\x3d"display:none"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateMenu"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateInfoMenu" class\x3d"coordinate-background coordinate-info-menu jimu-float-leading jimu-align-leading"\x3e\r\n      \x3cdiv class\x3d"jimu-float-leading coordinate-locate-container" data-dojo-attach-point\x3d"locateContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"locateButton" class\x3d"coordinate-locate jimu-float-leading"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateInfo" class\x3d"coordinate-info jimu-float-leading jimu-align-leading"\x3e\r\n        ${nls.loading}\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"elevInfo" class\x3d"coordinate-info jimu-float-leading jimu-align-leading"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"eyeInfo" class\x3d"coordinate-info jimu-float-leading jimu-align-leading"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-float-trailing coordinate-foldable-container" data-dojo-attach-point\x3d"foldContainer"\x3e\r\n      \x3cdiv class\x3d"coordinate-foldable jimu-float-trailing" data-dojo-attach-point\x3d"foldableNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Coordinate/css/style.css":".jimu-widget-coordinate .coordinate-background{line-height: 17px; overflow: hidden; font-size: 10px; color: #fff; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.5);}.jimu-widget-coordinate .display-coordinate-menu{display: block !important; border-bottom: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate{width: 17px; height: 17px; background: url(images/locate.png) center no-repeat;}.jimu-widget-coordinate .coordinate-locate-container{width: 18px; height: 17px; border-right: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate{background: url(images/locate-hover.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background: url(images/locate-active.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-info{margin: 0 4px; font-size: 11px !important; color: #fff !important; max-height: 17px;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-info{margin: 0;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-locate-container {border-style: none !important;}.jimu-widget-coordinate .coordinate-foldable-container {border-left: 1px solid rgba(255,255,255,0.4); height: 17px;}.jimu-widget-coordinate .coordinate-foldable{background: url(images/more.png) center no-repeat; cursor: pointer; width: 17px; height: 15px; margin: 1px 0;}.jimu-widget-coordinate:hover .coordinate-foldable{background-image: url(images/more-hover.png);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container{border-right-style: none; border-left: 1px solid rgba(255,255,255,0.4);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate,.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background-position: right center;}.jimu-rtl .jimu-widget-coordinate .coordinate-foldable-container{border-left-style: none; border-right: 1px solid rgba(255,255,255,0.4);}.claro .jimu-widget-coordinate .dijitMenuTable {background: transparent; border-style: none; width: 100%;}.claro .jimu-widget-coordinate .dijitMenuItem {color: #fff;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{border-style: none; text-align: left; padding: 4px 2px;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem.selected-item{font-weight: bold; background: #000;}.jimu-rtl .claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{text-align: right;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover {color: #fff; background: #000; border-style: none;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected td{background: #000; color: #fff;}",
"*now":function(v){v(['dojo/i18n!*preload*widgets/Coordinate/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","uk","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetsInTemplateMixin esri/geometry/Point esri/geometry/SpatialReference jimu/BaseWidget jimu/utils jimu/dijit/Message dojo/_base/lang dojo/on dojo/dom-class dijit/DropDownMenu dijit/MenuItem dojo/aspect dojo/Deferred esri/request esri/Graphic esri/layers/GraphicsLayer esri/tasks/support/ProjectParameters esri/geometry/support/webMercatorUtils esri/symbols/PictureMarkerSymbol jimu/portalUtils esri/config libs/usng/usng jimu/SpatialReference/unitUtils dojo/throttle".split(" "),function(v,
d,n,f,c,a,q,g,e,B,M,H,E,K,L,N,I,O,J,F,t,p,C,A,z,x){var Q={INCHES:"Inches",FOOT:"Foot",FEET:"Foot",YARDS:"Yards",MILES:"Miles",NAUTICAL_MILES:"Nautical_Miles",MILLIMETERS:"Millimeters",CENTIMETERS:"Centimeters",METER:"Meter",METERS:"Meter",KILOMETERS:"Kilometers",DECIMETERS:"Decimeters",DEGREE:"Decimal_Degrees",DECIMAL_DEGREES:"Decimal_Degrees",DEGREE_MINUTE_SECONDS:"Degree_Minutes_Seconds",MGRS:"MGRS",USNG:"USNG"},G={esriCentimeters:"CENTIMETERS",esriDecimalDegrees:"DECIMAL_DEGREES",esriDegreeMinuteSeconds:"DEGREE_MINUTE_SECONDS",
esriDecimeters:"DECIMETERS",esriFeet:"FOOT",esriInches:"INCHES",esriKilometers:"KILOMETERS",esriMeters:"METER",esriMiles:"MILES",esriMillimeters:"MILLIMETERS",esriNauticalMiles:"NAUTICAL_MILES",esriPoints:"POINTS",esriUnknownUnits:"UNKNOWN",esriYards:"YARDS"};return v([a,n],{baseClass:"jimu-widget-coordinate",name:"Coordinate",_cache:{_container:null,_mouseX:null,_mouseY:null},postMixInProperties:function(){this.nls.enableClick=this.nls.enableClick||"Click to enable clicking map to get coordinates";
this.nls.disableClick=this.nls.disableClick||"Click to disable clicking map to get coordinates"},postCreate:function(){this.inherited(arguments);this._cache._container=this.sceneView.container;M.add(this.coordinateBackground,"coordinate-background");this.own(B(this.sceneView,"click",e.hitch(this,this.onMapClick)));this.own(B(this.locateButton,"click",e.hitch(this,this.onLocateButtonClick)));this.own(B(this.foldContainer,"click",e.hitch(this,this.onFoldContainerClick)));this.graphicsLayer=new O;this.sceneView.map.add(this.graphicsLayer);
this.own(this.sceneView.watch("viewpoint",x(e.hitch(this,this.onWatchViewpoint),50)));this.own(B(this._cache._container,"mousemove",x(e.hitch(this,this.onMouseMove),100)))},startup:function(){this.inherited(arguments);this.config.spatialReferences&&1<this.config.spatialReferences.length?d.setStyle(this.foldableNode,"display","inline-block"):d.setStyle(this.foldableNode,"display","none")},onOpen:function(){this.sceneView.when(e.hitch(this,function(){try{this.sceneView.spatialReference&&(this.sceneView.spatialReference.isWebMercator?
this._mapWkid=3857:this.sceneView.spatialReference.wkid&&(this._mapWkid=this.sceneView.spatialReference.wkid)),this.selectedWkid=this._mapWkid}catch(b){console.error(b)}this._processData().then(e.hitch(this,function(b){this.domNode&&(this.initPopMenu(b),1>=this.popMenu.getChildren().length&&d.setStyle(this.foldContainer,"display","none"))}),e.hitch(this,function(b){console.error(b)}))}),e.hitch(this,function(b){console.error(b)}))},_processData:function(){var b=new L,a=this.sceneView.map.itemInfo.itemData.baseMap.baseMapLayers[0];
this.config.spatialReferences&&this.config.spatialReferences.length?(this._configured=!0,b.resolve(this.config.spatialReferences)):p.getUnits(this.appConfig.portalUrl).then(e.hitch(this,function(c){a||(a=this.sceneView.map.layers.items[0]);var k=a&&("BingMapsRoad"===a.layerType||"BingMapsHybrid"===a.layerType||"BingMapsAerial"===a.layerType),h=a&&"WebTiledLayer"===a.layerType,d=a&&"VectorTileLayer"===a.layerType;a&&a.url?N(a.url,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(e.hitch(this,
function(a){this._processMapUnits(a).then(e.hitch(this,function(a){var k=this._getUnconfiguredUnitOptions(a.data.units,c),h=a.data.spatialReference,l=a.data.fullExtent,h={wkid:h&&(h.latestWkid||h.wkid)||l&&l.spatialReference&&l.spatialReference.wkid,label:"",outputUnit:k.outputUnit};h.options={sameSRWithMap:!0,defaultUnit:G[a.data.units]||a.data.units,isGeographicUnit:k.isGeographicUnit,isGeographicCS:k.isGeographicCS,isProjectUnit:k.isProjectUnit,isProjectedCS:k.isProjectedCS,unitRate:k.unitRate};
this._configured=!1;b.resolve(h)}))}),e.hitch(this,function(a){console.error(a);b.reject(a)})):a&&("OpenStreetMap"===a.layerType||k||h||d)?(k=this._getUnconfiguredUnitOptions("esriMeters",c),h={wkid:3857,label:"",outputUnit:k.outputUnit},h.options={sameSRWithMap:!0,defaultUnit:G.esriMeters,isGeographicUnit:k.isGeographicUnit,isGeographicCS:k.isGeographicCS,isProjectUnit:k.isProjectUnit,isProjectedCS:k.isProjectedCS,unitRate:k.unitRate},this._configured=!1,b.resolve(h)):b.reject(Error("no baseMap"))}));
return b},_processMapUnits:function(b){var a=new L;if(b.data.units)a.resolve(b);else{var c=b.spatialReference||e.exists("tileInfo.spatialReference",b)&&b.tileInfo.spatialReference,l=b.extent||b.initialExtent||b.fullExtent,d=c&&(c.latestWkid||c.wkid)||l&&l.spatialReference&&l.spatialReference.wkid,g=this;require(["jimu/SpatialReference/srUtils"],function(c){c.loadResource().then(e.hitch(g,function(){var k=c.getCSUnit(d);b.data={};b.data.units=k;a.resolve(b)}))})}return a},_getUnconfiguredUnitOptions:function(b,
a){b=G[b]||b;var c="",k=1,e="",d="",g="",f="";z.isProjectUnit(b)?(g=f=!0,e=d=!1,c="english"===a?G.esriFeet.toUpperCase():G.esriMeters.toUpperCase(),k=z.getUnitRate(b.toUpperCase(),c)):z.isGeographicUnit(b)&&(g=f=!1,e=d=!0,c=b.toUpperCase());this.sceneView.spatialReference.isWebMercator&&(c=G.esriDecimalDegrees,d=!0,f=!1,k=1);return{outputUnit:c,unitRate:k,isGeographicUnit:d,isGeographicCS:e,isProjectUnit:f,isProjectedCS:g}},initPopMenu:function(b){this.popMenu=new H({},this.coordinateMenu);K.after(this.popMenu,
"onItemClick",e.hitch(this,this.onClickMenu),!0);"[object Array]"!==Object.prototype.toString.call(b)?(this.selectedWkid=parseInt(b.wkid,10),this.addMenuItem("",this.selectedWkid,b.outputUnit,b.elevationUnit,b.eyeAltUnit,null,null,b.options),this.selectedItem=this.popMenu.getChildren()[0]):(this.selectedWkid=parseInt(b[0].wkid,10),this.selectedTfWkid=b[0].transformationWkid&&parseInt(b[0].transformationWkid,10),this._addAllMenuItems(),this.selectedItem=this.popMenu.getChildren()[0],this.selectedItem.set({label:this.getStatusString(!0,
this.selectedItem.params.name,this.selectedItem.params.wkid)}),d.addClass(this.selectedItem.domNode,"selected-item"));this._adjustCoordinateInfoUI(this.selectedWkid);this.popMenu.startup()},_addAllMenuItems:function(){for(var b=this.config.spatialReferences.length,a=0;a<b;a++)this.addMenuItem(this.config.spatialReferences[a].label,this.config.spatialReferences[a].wkid,this.config.spatialReferences[a].outputUnit,this.config.spatialReferences[a].elevationUnit,this.config.spatialReferences[a].eyeAltUnit,
this.config.spatialReferences[a].transformationWkid,this.config.spatialReferences[a].transformForward,this.config.spatialReferences[a].options)},_isWebMercator:function(a){return c.prototype._isWebMercator?c.prototype._isWebMercator.apply({wkid:parseInt(a,10)},[]):(new c(parseInt(a,10))).isWebMercator},canShowInClient:function(a){a=4326===this._mapWkid&&this._isWebMercator(a)||this._isWebMercator(this._mapWkid)&&4326===parseInt(a,10);var b=this.selectedItem.get("options");return b&&b.sameSRWithMap||
a?!0:!1},onClickMenu:function(a){this._setElevInfo();d.removeClass(this.selectedItem.domNode,"selected-item");this.selectedItem.set({label:this.getStatusString(!1,this.selectedItem.params.name,this.selectedItem.params.wkid)});this.selectedWkid=parseInt(a.params.wkid,10);this.selectedTfWkid=a.params.tfWkid;this.forward=a.params.forward;a.set({label:this.getStatusString(!0,a.params.name,a.params.wkid)});d.addClass(a.domNode,"selected-item");this.selectedItem=a;this._adjustCoordinateInfoUI(this.selectedWkid);
d.removeClass(this.coordinateMenuContainer,"display-coordinate-menu")},_adjustCoordinateInfoUI:function(a){d.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");this._markerGraphic&&this.graphicsLayer.remove(this._markerGraphic);this._markerGraphic=null;this.canShowInClient(a)?(this.enableRealtime=!0,this._getDefaultPlaceHolder()):(this.enableRealtime=!1,this._clearCoordinateInfo(),d.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"));d.setAttr(this.locateButton,"title",
this.nls.enableClick);d.removeClass(this.locateContainer,"coordinate-locate-container-active");this.enableWebMapPopup();this.onExtentChange({extent:this.sceneView.map.extent})},disableWebMapPopup:function(){},enableWebMapPopup:function(){},onLocateButtonClick:function(){if(d.hasClass(this.coordinateMenuContainer,"display-coordinate-menu"))this.onFoldContainerClick();d.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");d.toggleClass(this.locateContainer,"coordinate-locate-container-active");
this._markerGraphic&&this.graphicsLayer.remove(this._markerGraphic);this._markerGraphic=null;this.canShowInClient(this.selectedWkid)?this.enableRealtime?(this.enableRealtime=!1,this._setCoordinateInnerHTML(this.nls.hintMessage),d.setAttr(this.locateButton,"title",this.nls.disableClick),this.disableWebMapPopup()):(this.enableRealtime=!0,this._getDefaultPlaceHolder(),d.setAttr(this.locateButton,"title",this.nls.enableClick),this.enableWebMapPopup()):d.hasClass(this.locateContainer,"coordinate-locate-container-active")?
(this._setCoordinateInnerHTML(this.nls.hintMessage),this.disableWebMapPopup(),d.setAttr(this.locateButton,"title",this.nls.disableClick)):(this._clearCoordinateInfo(),d.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"),this.enableWebMapPopup(),d.setAttr(this.locateButton,"title",this.nls.enableClick))},onDeActive:function(){if(d.hasClass(this.locateContainer,"coordinate-locate-container-active"))this.onLocateButtonClick();if(d.hasClass(this.coordinateMenuContainer,"display-coordinate-menu"))this.onFoldContainerClick()},
getStatusString:function(a,c,h){var b="",k=this._mapWkid;h=parseInt(h,10);b=a?"\x3cb\x3e"+b+c+"\x3c/b\x3e\x26nbsp;"+this._rtlTheBrackets(h)+"\x26nbsp;":b+c+"\x26nbsp;\x26nbsp;"+this._rtlTheBrackets(h)+"\x26nbsp;";h===k&&(b+=this.nls.defaultLabel);return b},_rtlTheBrackets:function(a){return window.isRTL?"\x26rlm;("+a+")":"("+a+")"},_getEyeInfoUnitRate:function(a){return z.getUnitRate("METER","english"===a?"FOOT":"METER")},addMenuItem:function(a,c,h,e,d,g,f,n){a={label:this.getStatusString(!1,a,c)||
"",name:a||"",wkid:c||"",outputUnit:h||"",tfWkid:g||"",options:n,elevationUnitRate:this._getEyeInfoUnitRate(e),eyeAltUnitRate:this._getEyeInfoUnitRate(d)};a.tfWkid&&(a.forward=f);this.popMenu.addChild(new E(a))},_toFormat:function(a){return q.localizeNumberByFieldInfo(a,{format:{places:this.config.latLonDecimalPlaces,digitSeparator:this.config.addSeparator}})},onProjectComplete:function(a,c){if(this.selectedWkid&&a===this.selectedWkid&&this.domNode){c=c[0];a=c.x;c=c.y;var b=this.selectedItem.get("outputUnit"),
k=this.selectedItem.get("options");!0===isNaN(a)&&!0===isNaN(c)?this._clearCoordinateInfo():"MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,c,a):k.isGeographicUnit?this._displayDegOrDms(b,c,a):this._displayProject(b,c,a)}},_unitToNls:function(a){var b=Q[a.toUpperCase()];return this.nls[b]||this.nls[a]||a},onProjectError:function(a){new g({message:a.message||a.toString()});this._setCoordinateInnerHTML(this.nls.hintMessage);this._setElevInfo()},onExtentChange:function(){this.selectedItem&&(d.setStyle(this.locateContainer,
"display","block"),1<this.popMenu.getChildren().length?d.setStyle(this.foldContainer,"display","block"):d.setStyle(this.foldContainer,"display","none"))},_getMarkerGraphic:function(a){var b=new t(this.folderUrl+"css/images/esriGreenPin16x26.png",16,26);b.setXoffset=0;b.setYoffset=12;return new I(a,b)},onMapClick:function(a){if(!this.enableRealtime&&this.selectedItem){if(this.canShowInClient(this.selectedWkid)||d.hasClass(this.locateContainer,"coordinate-locate-container-active"))this._markerGraphic&&
this.graphicsLayer.remove(this._markerGraphic),this._markerGraphic=this._getMarkerGraphic(a.mapPoint),this.graphicsLayer.add(this._markerGraphic);this.canShowInClient(this.selectedWkid)?this._setCoordinateInfo():d.hasClass(this.locateContainer,"coordinate-locate-container-active")&&a.mapPoint&&a.mapPoint.x&&a.mapPoint.y&&(this._setCoordinateInfo(!0),a=new f(a.mapPoint.x,a.mapPoint.y,this.sceneView.spatialReference),this._projectMapPoint(a))}},_projectMapPoint:function(a){var b=new J,h=null,d=this.selectedItem.get("options");
b.geometries=[a];d.isProjectedCS?h=d.isProjectUnit?this.selectedWkid:d.spheroidCS:d.isGeographicCS&&(h=this.selectedWkid);this.selectedTfWkid&&(b.transformation=new c(parseInt(this.selectedTfWkid,10)),b.transformForward=JSON.parse(this.forward));b.outSpatialReference=new c(parseInt(h,10));this._setCoordinateInnerHTML(this.nls.computing);C.geometryService.project(b).then(e.hitch(this,this.onProjectComplete,this.selectedWkid),e.hitch(this,this.onProjectError))},_displayOnClient:function(a){var b=this.selectedItem.get("outputUnit"),
c=a.x,d=a.y,e=null,g=4326===this._mapWkid&&this._isWebMercator(this.selectedWkid)||this._isWebMercator(this._mapWkid)&&4326===this.selectedWkid,f=this.selectedItem.get("options"),e=a.normalize();f.isGeographicUnit&&(c=e.longitude||c);f.isGeographicUnit&&(d=e.latitude||d);g?4326===a.spatialReference.wkid&&this._isWebMercator(this.selectedWkid)?"MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,e.latitude,e.longitude):f.isGeographicUnit?this._displayDegOrDms(b,d,c):f.isProjectUnit&&(a=F.lngLatToXY(c,
d),this._displayProject(b,a[1],a[0])):a.spatialReference.isWebMercator&&4326===this.selectedWkid&&("MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,e.latitude,e.longitude):f.isGeographicUnit&&this._displayDegOrDms(b,d,c)):f.defaultUnit===b?(this._displayCoordinatesByOrder(this._toFormat(c),this._toFormat(d)),this._setCoordinateInnerHTML(this.coordinateInfo.innerHTML+=" "+this._unitToNls(b))):4326===a.spatialReference.wkid||a.spatialReference.isWebMercator?"MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,
e.latitude,e.longitude):f.isGeographicUnit?this._displayDegOrDms(b,d,c):f.isProjectedCS&&this._displayProject(b,d,c):f.isProjectedCS?this._displayProject(b,d,c):f.isGeographicCS&&("MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,d,c):f.isGeographicUnit&&this._displayDegOrDms(b,d,c))},destroy:function(){this._markerGraphic&&this.graphicsLayer.remove(this._markerGraphic);this.graphicsLayer&&this.sceneView.map.remove(this.graphicsLayer);this.inherited(arguments)},_displayUsngOrMgrs:function(a,c,d){"MGRS"===
a?this._setCoordinateInnerHTML(A.LLtoMGRS(c,d,5)):"USNG"===a&&this._setCoordinateInnerHTML(A.LLtoUSNG(c,d,5));this._setCoordinateInnerHTML(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a))},_displayDegOrDms:function(a,c,d){var b="",e="",b=this.selectedItem.get("options");d*=b.unitRate;c*=b.unitRate;"DEGREE_MINUTE_SECONDS"===a?(b=this.degToDMS(c,"LAT"),e=this.degToDMS(d,"LON"),this._displayCoordinatesByOrder(b,e)):(this._displayCoordinatesByOrder(this._toFormat(d),this._toFormat(c)),this._setCoordinateInnerHTML(this.coordinateInfo.innerHTML+=
" "+this._unitToNls(a)))},_displayProject:function(a,c,d){var b=this.selectedItem.get("options");d*=b.unitRate;c*=b.unitRate;this._displayCoordinatesByOrder(this._toFormat(d),this._toFormat(c));this._setCoordinateInnerHTML(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a))},_clearCoordinateInfo:function(){this.coordinateInfo.innerHTML=""},_displayCoordinatesByOrder:function(a,c){this.config.displayOrderLonLat?this._setCoordinateInnerHTML(a+"  "+c):this._setCoordinateInnerHTML(c+"  "+a)},onFoldContainerClick:function(){this._configured&&
d.toggleClass(this.coordinateMenuContainer,"display-coordinate-menu")},onWatchViewpoint:function(){this.onMouseMove({x:this._cache._mouseX,y:this._cache._mouseY})},onMouseMove:function(a){a.pageX&&a.pageY&&(this._cache._mouseX=a.pageX,this._cache._mouseY=a.pageY);this._setEyeInfo();this.enableRealtime&&this.selectedItem&&this._setCoordinateInfo()},_setCoordinateInfo:function(a){this._cache._mouseX&&this._cache._mouseY&&this.sceneView.hitTest({x:this._cache._mouseX,y:this._cache._mouseY}).then(e.hitch(this,
function(b){a||this._setLonLat(b);this._setElev(b)}))},_setLonLat:function(a){"undefined"!==typeof a&&a.ground&&null!==a.ground.mapPoint&&(null!==a.ground.mapPoint.latitude&&null!==a.ground.mapPoint.longitude||null!==a.ground.mapPoint.x&&null!==a.ground.mapPoint.y)?this._displayOnClient(a.ground.mapPoint):this._clearCoordinateInfo()},_setElev:function(a){a.results&&a.results[0]&&a.results[0].mapPoint&&a.results[0].mapPoint.z?this._setElevInfo(a.results[0].mapPoint):"undefined"!==typeof a&&a.ground&&
null!==a.ground.mapPoint&&"undefined"!==typeof a.ground.mapPoint.z?this._setElevInfo(a.ground.mapPoint):this._setElevInfo()},_getElev:function(a){var b="";a&&a.z&&(b=" "+this.nls.ELEV+" "+this._trunNumToKmOrM(a.z,!0));return b},_setElevInfo:function(a){var b="";a&&(b=this._getElev(a),b+=" ");this.elevInfo.innerHTML=q.sanitizeHTML(b)},_setEyeInfo:function(){if(this.sceneView.camera&&this.sceneView.camera.position){var a=this.sceneView.camera.position.z,a=this._trunNumToKmOrM(a);this.eyeInfo.innerHTML=
q.sanitizeHTML(this.nls.EYE_ALT+" "+a)}},_trunNumToKmOrM:function(a,c){var b="",b=1,d=1E3;a=parseFloat(a);c&&(d=1E4);this.selectedItem&&this.selectedItem.get&&(b=c?this.selectedItem.get("elevationUnitRate"):this.selectedItem.get("eyeAltUnitRate"));1===parseInt(b,10)?a>=d||a<=-d?(a/=1E3,b=this._unitToNls("KILOMETERS")):b=this._unitToNls("METERS"):(a*=b,b=this._unitToNls("FOOT"));return(a=q.localizeNumberByFieldInfo(a,{format:{places:this.config.eyeDecimalPlaces,digitSeparator:this.config.addSeparator}}))?
a+" "+b:""},degToDMS:function(a,c){var b=Math.abs(a),d=Math.floor(b),b=b-d,e=Math.floor(60*b),b=Math.floor(3600*(b-e/60));60===b&&(e++,b=0);60===e&&(d++,e=0);return d+"\x26deg;"+(10>e?"0"+e:e)+"\x26prime;"+(10>b?"0"+b:b)+"\x26Prime;"+("LAT"===c?0>a?"S":"N":0>a?"W":"E")},_getDefaultPlaceHolder:function(){q.isMobileUa()?this.coordinateInfo.innerHTML="":this.coordinateInfo.innerHTML=this.nls.realtimeLabel},_setCoordinateInnerHTML:function(a){var b=this.coordinateInfo;b&&(b.innerHTML=q.sanitizeHTML(a))}})});