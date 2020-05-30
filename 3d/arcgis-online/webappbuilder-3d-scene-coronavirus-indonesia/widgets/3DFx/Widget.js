// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"dijit/_WidgetsInTemplateMixin":function(){define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser"],function(q,r,m,e,d){return m("dijit._WidgetsInTemplateMixin",null,{_earlyTemplatedStartup:!1,contextRequire:null,_beforeFillContent:function(){if(/dojoType|data-dojo-type/i.test(this.domNode.innerHTML)){var c=this.domNode;this.containerNode&&!this.searchContainerNode&&(this.containerNode.stopParser=!0);d.parse(c,{noStart:!this._earlyTemplatedStartup,
template:!0,inherited:{dir:this.dir,lang:this.lang,textDir:this.textDir},propsThis:this,contextRequire:this.contextRequire,scope:"dojo"}).then(e.hitch(this,function(c){this._startupWidgets=c;for(var d=0;d<c.length;d++)this._processTemplateNode(c[d],function(c,d){return c[d]},function(c,d,l){return d in c?c.connect(c,d,l):c.on(d,l,!0)});this.containerNode&&this.containerNode.stopParser&&delete this.containerNode.stopParser}));if(!this._startupWidgets)throw Error(this.declaredClass+": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
}},_processTemplateNode:function(c,d,l){return d(c,"dojoType")||d(c,"data-dojo-type")?!0:this.inherited(arguments)},startup:function(){q.forEach(this._startupWidgets,function(c){c&&!c._started&&c.startup&&c.startup()});this._startupWidgets=null;this.inherited(arguments)}})})},"dojo/parser":function(){define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "),function(q,
r,m,e,d,c,g,l,f,k,p,w,C,E,I,b){function h(a){return eval("("+a+")")}function a(a){var b=a._nameCaseMap,c=a.prototype;if(!b||b._extendCnt<z){var b=a._nameCaseMap={},t;for(t in c)"_"!==t.charAt(0)&&(b[t.toLowerCase()]=t);b._extendCnt=z}return b}function x(a,b){b||(b=q);var c=b._dojoParserCtorMap||(b._dojoParserCtorMap={}),t=a.join();if(!c[t]){for(var d=[],B=0,x=a.length;B<x;B++){var h=a[B];d[d.length]=c[h]=c[h]||m.getObject(h)||~h.indexOf("/")&&b(h)}a=d.shift();c[t]=d.length?a.createSubclass?a.createSubclass(d):
a.extend.apply(a,d):a}return c[t]}new Date("X");var z=0;f.after(m,"extend",function(){z++},!0);C={_clearCache:function(){z++;_ctorMap={}},_functionFromScript:function(a,b){var c="",d="",t=a.getAttribute(b+"args")||a.getAttribute("args");b=a.getAttribute("with");t=(t||"").split(/\s*,\s*/);b&&b.length&&e.forEach(b.split(/\s*,\s*/),function(a){c+="with("+a+"){";d+="}"});return new Function(t,c+a.innerHTML+d)},instantiate:function(a,b,c){b=b||{};c=c||{};var d=(c.scope||r._scopeName)+"Type",t="data-"+
(c.scope||r._scopeName)+"-",x=t+"type",h=t+"mixins",B=[];e.forEach(a,function(a){var c=d in b?b[d]:a.getAttribute(x)||a.getAttribute(d);if(c){var t=a.getAttribute(h),c=t?[c].concat(t.split(/\s*,\s*/)):[c];B.push({node:a,types:c})}});return this._instantiate(B,b,c)},_instantiate:function(a,b,c,d){function t(a){b._started||c.noStart||e.forEach(a,function(a){"function"!==typeof a.startup||a._started||a.startup()});return a}a=e.map(a,function(a){var d=a.ctor||x(a.types,c.contextRequire);if(!d)throw Error("Unable to resolve constructor for: '"+
a.types.join()+"'");return this.construct(d,a.node,b,c,a.scripts,a.inherited)},this);return d?k(a).then(t):t(a)},construct:function(b,c,d,x,e,z){function t(a){D&&m.setObject(D,a);for(u=0;u<H.length;u++)f[H[u].advice||"after"](a,H[u].method,m.hitch(a,H[u].func),!0);for(u=0;u<L.length;u++)L[u].call(a);for(u=0;u<q.length;u++)a.watch(q[u].prop,q[u].func);for(u=0;u<J.length;u++)I(a,J[u].event,J[u].func);return a}var B=b&&b.prototype;x=x||{};var g={};x.defaults&&m.mixin(g,x.defaults);z&&m.mixin(g,z);var k;
k=c.attributes;var F=x.scope||r._scopeName;z="data-"+F+"-";var v={};"dojo"!==F&&(v[z+"props"]="data-dojo-props",v[z+"type"]="data-dojo-type",v[z+"mixins"]="data-dojo-mixins",v[F+"type"]="dojotype",v[z+"id"]="data-dojo-id");for(var u=0,n,F=[],D,A;n=k[u++];){var y=n.name,G=y.toLowerCase();n=n.value;switch(v[G]||G){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;case "data-dojo-props":A=n;break;case "data-dojo-id":case "jsid":D=n;break;case "data-dojo-attach-point":case "dojoattachpoint":g.dojoAttachPoint=
n;break;case "data-dojo-attach-event":case "dojoattachevent":g.dojoAttachEvent=n;break;case "class":g["class"]=c.className;break;case "style":g.style=c.style&&c.style.cssText;break;default:if(y in B||(y=a(b)[G]||y),y in B)switch(typeof B[y]){case "string":g[y]=n;break;case "number":g[y]=n.length?Number(n):NaN;break;case "boolean":g[y]="false"!=n.toLowerCase();break;case "function":""===n||-1!=n.search(/[^\w\.]+/i)?g[y]=new Function(n):g[y]=m.getObject(n,!1)||new Function(n);F.push(y);break;default:G=
B[y],g[y]=G&&"length"in G?n?n.split(/\s*,\s*/):[]:G instanceof Date?""==n?new Date(""):"now"==n?new Date:p.fromISOString(n):G instanceof l?r.baseUrl+n:h(n)}else g[y]=n}}for(k=0;k<F.length;k++)v=F[k].toLowerCase(),c.removeAttribute(v),c[v]=null;if(A)try{A=h.call(x.propsThis,"{"+A+"}"),m.mixin(g,A)}catch(O){throw Error(O.toString()+" in data-dojo-props\x3d'"+A+"'");}m.mixin(g,d);e||(e=b&&(b._noScript||B._noScript)?[]:E("\x3e script[type^\x3d'dojo/']",c));var H=[],L=[],q=[],J=[];if(e)for(u=0;u<e.length;u++)v=
e[u],c.removeChild(v),d=v.getAttribute(z+"event")||v.getAttribute("event"),x=v.getAttribute(z+"prop"),A=v.getAttribute(z+"method"),F=v.getAttribute(z+"advice"),k=v.getAttribute("type"),v=this._functionFromScript(v,z),d?"dojo/connect"==k?H.push({method:d,func:v}):"dojo/on"==k?J.push({event:d,func:v}):g[d]=v:"dojo/aspect"==k?H.push({method:A,advice:F,func:v}):"dojo/watch"==k?q.push({prop:x,func:v}):L.push(v);b=(e=b.markupFactory||B.markupFactory)?e(g,c,b):new b(g,c);return b.then?b.then(t):t(b)},scan:function(a,
b){function c(a){if(!a.inherited){a.inherited={};var b=a.node,n=c(a.parent),b={dir:b.getAttribute("dir")||n.dir,lang:b.getAttribute("lang")||n.lang,textDir:b.getAttribute(B)||n.textDir},d;for(d in b)b[d]&&(a.inherited[d]=b[d])}return a.inherited}var d=[],h=[],t={},z=(b.scope||r._scopeName)+"Type",g="data-"+(b.scope||r._scopeName)+"-",l=g+"type",B=g+"textdir",g=g+"mixins",f=a.firstChild,k=b.inherited;if(!k){var m=function(a,b){return a.getAttribute&&a.getAttribute(b)||a.parentNode&&m(a.parentNode,
b)},k={dir:m(a,"dir"),lang:m(a,"lang"),textDir:m(a,B)},n;for(n in k)k[n]||delete k[n]}n={inherited:k};for(var D,A;;)if(f)if(1!=f.nodeType)f=f.nextSibling;else if(D&&"script"==f.nodeName.toLowerCase())(k=f.getAttribute("type"))&&/^dojo\/\w/i.test(k)&&D.push(f),f=f.nextSibling;else if(A)f=f.nextSibling;else if(k=f.getAttribute(l)||f.getAttribute(z),a=f.firstChild,k||a&&(3!=a.nodeType||a.nextSibling)){A=null;if(k){var y=f.getAttribute(g);D=y?[k].concat(y.split(/\s*,\s*/)):[k];try{A=x(D,b.contextRequire)}catch(H){}A||
e.forEach(D,function(a){~a.indexOf("/")&&!t[a]&&(t[a]=!0,h[h.length]=a)});y=A&&!A.prototype._noScript?[]:null;n={types:D,ctor:A,parent:n,node:f,scripts:y};n.inherited=c(n);d.push(n)}else n={node:f,scripts:D,parent:n};D=y;A=f.stopParser||A&&A.prototype.stopParser&&!b.template;f=a}else f=f.nextSibling;else{if(!n||!n.node)break;f=n.node.nextSibling;A=!1;n=n.parent;D=n.scripts}var p=new w;h.length?(b.contextRequire||q)(h,function(){p.resolve(e.filter(d,function(a){if(!a.ctor)try{a.ctor=x(a.types,b.contextRequire)}catch(S){}for(var c=
a.parent;c&&!c.types;)c=c.parent;var n=a.ctor&&a.ctor.prototype;a.instantiateChildren=!(n&&n.stopParser&&!b.template);a.instantiate=!c||c.instantiate&&c.instantiateChildren;return a.instantiate}))}):p.resolve(d);return p.promise},_require:function(a,b){a=h("{"+a.innerHTML+"}");var c=[],d=[],x=new w;b=b&&b.contextRequire||q;for(var f in a)c.push(f),d.push(a[f]);b(d,function(){for(var a=0;a<c.length;a++)m.setObject(c[a],arguments[a]);x.resolve(arguments)});return x.promise},_scanAmd:function(a,b){var c=
new w,d=c.promise;c.resolve(!0);var x=this;E("script[type\x3d'dojo/require']",a).forEach(function(a){d=d.then(function(){return x._require(a,b)});a.parentNode.removeChild(a)});return d},parse:function(a,b){!a||"string"==typeof a||"nodeType"in a||(b=a,a=b.rootNode);var d=a?c.byId(a):g.body();b=b||{};var x=b.template?{template:!0}:{},f=[],h=this;a=this._scanAmd(d,b).then(function(){return h.scan(d,b)}).then(function(a){return h._instantiate(a,x,b,!0)}).then(function(a){return f=f.concat(a)}).otherwise(function(a){console.error("dojo/parser::parse() error",
a);throw a;});m.mixin(f,a);return f}};r.parser=C;d.parseOnLoad&&b(100,C,"parse");return C})},"dojo/_base/url":function(){define(["./kernel"],function(q){var r=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,m=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,e=function(){for(var d=arguments,c=[d[0]],g=1;g<d.length;g++)if(d[g]){var l=new e(d[g]+""),c=new e(c[0]+"");if(""==l.path&&!l.scheme&&!l.authority&&!l.query)null!=l.fragment&&(c.fragment=l.fragment),l=c;else if(!l.scheme&&
(l.scheme=c.scheme,!l.authority&&(l.authority=c.authority,"/"!=l.path.charAt(0)))){for(var c=(c.path.substring(0,c.path.lastIndexOf("/")+1)+l.path).split("/"),f=0;f<c.length;f++)"."==c[f]?f==c.length-1?c[f]="":(c.splice(f,1),f--):0<f&&(1!=f||""!=c[0])&&".."==c[f]&&".."!=c[f-1]&&(f==c.length-1?(c.splice(f,1),c[f-1]=""):(c.splice(f-1,2),f-=2));l.path=c.join("/")}c=[];l.scheme&&c.push(l.scheme,":");l.authority&&c.push("//",l.authority);c.push(l.path);l.query&&c.push("?",l.query);l.fragment&&c.push("#",
l.fragment)}this.uri=c.join("");d=this.uri.match(r);this.scheme=d[2]||(d[1]?"":null);this.authority=d[4]||(d[3]?"":null);this.path=d[5];this.query=d[7]||(d[6]?"":null);this.fragment=d[9]||(d[8]?"":null);null!=this.authority&&(d=this.authority.match(m),this.user=d[3]||null,this.password=d[4]||null,this.host=d[6]||d[7],this.port=d[9]||null)};e.prototype.toString=function(){return this.uri};return q._Url=e})},"dojo/date/stamp":function(){define(["../_base/lang","../_base/array"],function(q,r){var m=
{};q.setObject("dojo.date.stamp",m);m.fromISOString=function(e,d){m._isoRegExp||(m._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var c=m._isoRegExp.exec(e);e=null;if(c){c.shift();c[1]&&c[1]--;c[6]&&(c[6]*=1E3);d&&(d=new Date(d),r.forEach(r.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "),function(c){return d["get"+c]()}),function(d,g){c[g]=c[g]||d}));e=new Date(c[0]||1970,c[1]||0,c[2]||1,c[3]||0,c[4]||
0,c[5]||0,c[6]||0);100>c[0]&&e.setFullYear(c[0]||1970);var g=0,l=c[7]&&c[7].charAt(0);"Z"!=l&&(g=60*(c[8]||0)+(Number(c[9])||0),"-"!=l&&(g*=-1));l&&(g-=e.getTimezoneOffset());g&&e.setTime(e.getTime()+6E4*g)}return e};m.toISOString=function(e,d){var c=function(c){return 10>c?"0"+c:c};d=d||{};var g=[],l=d.zulu?"getUTC":"get",f="";"time"!=d.selector&&(f=e[l+"FullYear"](),f=["0000".substr((f+"").length)+f,c(e[l+"Month"]()+1),c(e[l+"Date"]())].join("-"));g.push(f);"date"!=d.selector&&(f=[c(e[l+"Hours"]()),
c(e[l+"Minutes"]()),c(e[l+"Seconds"]())].join(":"),l=e[l+"Milliseconds"](),d.milliseconds&&(f+="."+(100>l?"0":"")+c(l)),d.zulu?f+="Z":"time"!=d.selector&&(e=e.getTimezoneOffset(),d=Math.abs(e),f+=(0<e?"-":"+")+c(Math.floor(d/60))+":"+c(d%60)),g.push(f));return g.join("T")};return m})},"widgets/3DFx/VizCards/VizCards":function(){define("dojo/Evented dojo/_base/declare dojo/_base/array dojo/_base/Color dojo/_base/lang dojo/_base/html dojo/dom-class dojo/dom-construct dojo/dom-style dojo/number dojo/on dojo/query dojox/gfx jimu/utils dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/VizCards.html".split(" "),
function(q,r,m,e,d,c,g,l,f,k,p,w,C,E,I,b,h){q=r("VizCards",[I,b,q],{declaredClass:"esri.widgets.VizCards",templateString:h,css:{root:"esri-viz-cards",content:"content"},constructor:function(a,b){this.rtl=!1;this.options={view:null,features:[],vizField:null,displayField:null,color:"#ff0000",showPercent:!1};d.mixin(this.options,a);this.domNode=b;this._currentSelectedCardNode=null},postCreate:function(){this.inherited(arguments);0<w(".dj_rtl").length&&(this.rtl=!0);this.own(p(this.contentNode,"click",
d.hitch(this,this._clickCard)))},startup:function(){this.inherited(arguments);this._updateCards()},destroy:function(){this.view=null;this.inherited(arguments)},clear:function(){this.containerNode.innerHTML=""},update:function(a){d.mixin(this.options,a);this._updateCards()},selectCard:function(a){var b=this.domNode.id+"_card_"+a;this.unselectCards();if(b=w("#"+b,this.domNode)[0])g.add(b,"selected"),this._currentSelectedCardNode=b;var b=c.getContentBox(this.containerNode).w,d=180*a-b/2+90;this.rtl&&
(d=180*(this.options.features.length-a)-b/2-90);0>d&&(d=0);this.containerNode.scrollLeft=d},unselectCards:function(){this._currentSelectedCardNode&&(g.remove(this._currentSelectedCardNode,"selected"),this._currentSelectedCardNode=null)},_getTotal:function(){var a=this.options.vizField,b=0;m.forEach(this.options.features,function(c){b+=c.attributes[a]});return b},_updateCards:function(){var a=this.contentNode;f.set(a,"color",VizCards.CONTENT_COLOR);var b=this.options.features,c=this._getTotal();a.innerHTML=
"";var d=0;this.rtl&&(d=180*b.length);this.containerNode.scrollLeft=d;f.set(a,"width",180*b.length+"px");for(var d=b.length,h=null,e,m,p=null,r=this.options.showPercent&&400>=d,q=0;q<d;q++){h=b[q];e=h.attributes;h=e[this.options.vizField];m=k.format(h);p||(p=Math.floor(150/m.length+3),10>p&&(p=10),60<p&&(p=60));var w=e[this.options.displayField];null!==h&&(e=l.create("div",{id:this.domNode.id+"_card_"+q},a),g.add(e,"card"),w=l.create("div",{innerHTML:E.sanitizeHTML(q+1+". "+w)},e),g.add(w,"header"),
m=l.create("div",{innerHTML:E.sanitizeHTML(m)},e),r?(g.add(m,"value"),m=parseInt(h/c*100,10),w=m+"%",0<h&&1>m&&(w="\x3c1%"),e=l.create("div",{},e),g.add(e,"area"),h=l.create("div",{},e),g.add(h,"chart"),e=l.create("div",{innerHTML:E.sanitizeHTML(w)},e),g.add(e,"pct"),this._createChart(h,m)):(g.add(m,"valueBig"),f.set(m,"fontSize",p+"px")))}},_createChart:function(a,b){var d=c.getContentBox(a),h=Math.min(d.w,d.h),d=h/2,f=h/2,g=d-3;a=C.createSurface(a,h,h);a.clear();a.createCircle({cx:d,cy:f,r:g}).setStroke({width:6,
color:e.fromArray([255,255,255,.15]),cap:"round"});0<b&&(100<=b&&(b=99),h=360*b/100,b=!1,180<=h&&(b=!0),h=this._getEndPoint(g,h,d,f),f-=g,a.createPath().moveTo(d,f).arcTo(g,g,0,b,!0,h.x,h.y).setStroke({width:6,color:this.options.color,cap:"round"}))},_getEndPoint:function(a,b,c,d){var h=b;0<b&&90>b?h+=270:90<b&&(h=b-90);b=h*Math.PI/180;return{x:c+Math.cos(b)*a,y:d+Math.sin(b)*a}},_clickCard:function(a){a=a.target||a.srcElement;if(!g.contains(a,"card"))for(;a&&a.parentNode&&(a=a.parentNode,!g.contains(a,
"card")););if(a){var b=a.id.replace(this.domNode.id+"_card_",""),b=parseInt(b,10);isNaN(b)||null==b||(g.contains(a,"selected")?(this.unselectCards(),this.emit("selection",{})):(this.unselectCards(),g.add(a,"selected"),this._currentSelectedCardNode=a,this.emit("selection",{data:this.options.features[b]})))}}});q.CONTENT_COLOR="#FFF";return q})},"dojox/gfx":function(){define(["dojo/_base/lang","./gfx/_base","./gfx/renderer!"],function(q,r,m){r.switchTo(m);return r})},"dojox/gfx/_base":function(){define("dojo/_base/kernel dojo/_base/lang dojo/_base/Color dojo/_base/sniff dojo/_base/window dojo/_base/array dojo/dom dojo/dom-construct dojo/dom-geometry".split(" "),
function(q,r,m,e,d,c,g,l,f){var k=r.getObject("dojox.gfx",!0),p=k._base={};k._hasClass=function(b,c){return(b=b.getAttribute("className"))&&0<=(" "+b+" ").indexOf(" "+c+" ")};k._addClass=function(b,c){var a=b.getAttribute("className")||"";(!a||0>(" "+a+" ").indexOf(" "+c+" "))&&b.setAttribute("className",a+(a?" ":"")+c)};k._removeClass=function(b,c){var a=b.getAttribute("className");a&&b.setAttribute("className",a.replace(new RegExp("(^|\\s+)"+c+"(\\s+|$)"),"$1$2"))};p._getFontMeasurements=function(){var b=
{"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,"xx-small":0,"x-small":0,small:0,medium:0,large:0,"x-large":0,"xx-large":0},c,a;e("ie")&&(a=d.doc.documentElement.style.fontSize||"",a||(d.doc.documentElement.style.fontSize="100%"));var f=l.create("div",{style:{position:"absolute",left:"0",top:"-100px",width:"30px",height:"1000em",borderWidth:"0",margin:"0",padding:"0",outline:"none",lineHeight:"1",overflow:"hidden"}},d.body());for(c in b)f.style.fontSize=c,b[c]=16*Math.round(12*f.offsetHeight/16)/12/1E3;
e("ie")&&(d.doc.documentElement.style.fontSize=a);d.body().removeChild(f);return b};var w=null;p._getCachedFontMeasurements=function(b){if(b||!w)w=p._getFontMeasurements();return w};var C=null,E={};p._getTextBox=function(b,c,a){var h,e,g=arguments.length,k;C||(C=l.create("div",{style:{position:"absolute",top:"-10000px",left:"0",visibility:"hidden"}},d.body()));h=C;h.className="";e=h.style;e.borderWidth="0";e.margin="0";e.padding="0";e.outline="0";if(1<g&&c)for(k in c)k in E||(e[k]=c[k]);2<g&&a&&(h.className=
a);h.innerHTML=b;h.getBoundingClientRect?(e=h.getBoundingClientRect(),e={l:e.left,t:e.top,w:e.width||e.right-e.left,h:e.height||e.bottom-e.top}):e=f.getMarginBox(h);h.innerHTML="";return e};p._computeTextLocation=function(b,c,a,d){var h={};switch(b.align){case "end":h.x=b.x-c;break;case "middle":h.x=b.x-c/2;break;default:h.x=b.x}h.y=b.y-a*(d?.75:1);return h};p._computeTextBoundingBox=function(b){if(!k._base._isRendered(b))return{x:0,y:0,width:0,height:0};var c;c=b.getShape();var a=b.getFont()||k.defaultFont;
b=b.getTextWidth();a=k.normalizedLength(a.size);c=p._computeTextLocation(c,b,a,!0);return{x:c.x,y:c.y,width:b,height:a}};p._isRendered=function(b){for(b=b.parent;b&&b.getParent;)b=b.parent;return null!==b};var I=0;p._getUniqueId=function(){var b;do b=q._scopeName+"xUnique"+ ++I;while(g.byId(b));return b};p._fixMsTouchAction=function(b){b.rawNode.style.touchAction="none"};r.mixin(k,{defaultPath:{type:"path",path:""},defaultPolyline:{type:"polyline",points:[]},defaultRect:{type:"rect",x:0,y:0,width:100,
height:100,r:0},defaultEllipse:{type:"ellipse",cx:0,cy:0,rx:200,ry:100},defaultCircle:{type:"circle",cx:0,cy:0,r:100},defaultLine:{type:"line",x1:0,y1:0,x2:100,y2:100},defaultImage:{type:"image",x:0,y:0,width:0,height:0,src:""},defaultText:{type:"text",x:0,y:0,text:"",align:"start",decoration:"none",rotated:!1,kerning:!0},defaultTextPath:{type:"textpath",text:"",align:"start",decoration:"none",rotated:!1,kerning:!0},defaultStroke:{type:"stroke",color:"black",style:"solid",width:1,cap:"butt",join:4},
defaultLinearGradient:{type:"linear",x1:0,y1:0,x2:100,y2:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultRadialGradient:{type:"radial",cx:0,cy:0,r:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultPattern:{type:"pattern",x:0,y:0,width:0,height:0,src:""},defaultFont:{type:"font",style:"normal",variant:"normal",weight:"normal",size:"10pt",family:"serif"},getDefault:function(){var b={};return function(c){var a=b[c];if(a)return new a;a=b[c]=new Function;a.prototype=
k["default"+c];return new a}}(),normalizeColor:function(b){return b instanceof m?b:new m(b)},normalizeParameters:function(b,c){var a;if(c){var d={};for(a in b)a in c&&!(a in d)&&(b[a]=c[a])}return b},makeParameters:function(b,c){var a=null;if(!c)return r.delegate(b);var d={};for(a in b)a in d||(d[a]=r.clone(a in c?c[a]:b[a]));return d},formatNumber:function(b,c){var a=b.toString();if(0<=a.indexOf("e"))a=b.toFixed(4);else{var d=a.indexOf(".");0<=d&&5<a.length-d&&(a=b.toFixed(4))}return 0>b?a:c?" "+
a:a},makeFontString:function(b){return b.style+" "+b.variant+" "+b.weight+" "+b.size+" "+b.family},splitFontString:function(b){var c=k.getDefault("Font");b=b.split(/\s+/);if(!(5>b.length)){c.style=b[0];c.variant=b[1];c.weight=b[2];var a=b[3].indexOf("/");c.size=0>a?b[3]:b[3].substring(0,a);var d=4;0>a&&("/"==b[4]?d=6:"/"==b[4].charAt(0)&&(d=5));d<b.length&&(c.family=b.slice(d).join(" "))}return c},cm_in_pt:72/2.54,mm_in_pt:7.2/2.54,px_in_pt:function(){return k._base._getCachedFontMeasurements()["12pt"]/
12},pt2px:function(b){return b*k.px_in_pt()},px2pt:function(b){return b/k.px_in_pt()},normalizedLength:function(b){if(0===b.length)return 0;if(2<b.length){var c=k.px_in_pt(),a=parseFloat(b);switch(b.slice(-2)){case "px":return a;case "pt":return a*c;case "in":return 72*a*c;case "pc":return 12*a*c;case "mm":return a*k.mm_in_pt*c;case "cm":return a*k.cm_in_pt*c}}return parseFloat(b)},pathVmlRegExp:/([A-Za-z]+)|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,pathSvgRegExp:/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g,
equalSources:function(b,c){return b&&c&&b===c},switchTo:function(b){var d="string"==typeof b?k[b]:b;d&&(c.forEach("Group Rect Ellipse Circle Line Polyline Image Text Path TextPath Surface createSurface fixTarget".split(" "),function(a){k[a]=d[a]}),"string"==typeof b?k.renderer=b:c.some(["svg","vml","canvas","canvasWithEvents","silverlight"],function(a){return k.renderer=k[a]&&k[a].Surface===k.Surface?a:null}))}});return k})},"dojox/gfx/renderer":function(){define(["./_base","dojo/_base/lang","dojo/_base/sniff",
"dojo/_base/window","dojo/_base/config"],function(q,r,m,e,d){var c=null;m.add("vml",function(c,d,e){e.innerHTML='\x3cv:shape adj\x3d"1"/\x3e';c="adj"in e.firstChild;e.innerHTML="";return c});return{load:function(g,l,f){function k(){l(["dojox/gfx/"+p],function(d){q.renderer=p;c=d;f(d)})}if(c&&"force"!=g)f(c);else{var p=d.forceGfxRenderer;g=!p&&(r.isString(d.gfxRenderer)?d.gfxRenderer:"svg,vml,canvas,silverlight").split(",");for(var w,C;!p&&g.length;)switch(g.shift()){case "svg":"SVGAngle"in e.global&&
(p="svg");break;case "vml":m("vml")&&(p="vml");break;case "silverlight":try{m("ie")?(w=new ActiveXObject("AgControl.AgControl"),w.IsVersionSupported("1.0"))&&(C=!0):navigator.plugins["Silverlight Plug-In"]&&(C=!0)}catch(E){C=!1}finally{w=null}C&&(p="silverlight");break;case "canvas":e.global.CanvasRenderingContext2D&&(p="canvas")}"canvas"===p&&!1!==d.canvasEvents&&(p="canvasWithEvents");d.isDebug&&console.log("gfx renderer \x3d "+p);"svg"==p&&"undefined"!=typeof window.svgweb?window.svgweb.addOnLoad(k):
k()}}}})},"widgets/3DFx/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/3DFx/VizCards/templates/VizCards.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"${css.root}" role\x3d"presentation"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"contentNode" class\x3d"${css.content}"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/3DFx/Widget.html":'\x3cdiv\x3e\r\n  \x3ccanvas class\x3d"labelCanvas" data-dojo-attach-point\x3d"labelCanvas"\x3e\x3c/canvas\x3e\r\n  \x3cdiv class\x3d"panelBottom"\x3e\r\n    \x3c!--Panel Container --\x3e\r\n    \x3cdiv class\x3d"panelContainer"\x3e\r\n      \x3c!-- Panel Inner --\x3e\r\n      \x3cdiv class\x3d"panelInner"\x3e\r\n        \x3c!-- Panel Content --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"panelMsgBlock"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"panelContent" class\x3d"panelContent"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Footer --\x3e\r\n    \x3cdiv class\x3d"panelFooter" data-dojo-attach-point\x3d"footerNode" class\x3d"jimu-main-background"\x3e\r\n      \x3cdiv class\x3d"panelFooterContent"\x3e\r\n        \x3cdiv class\x3d"btnPlay" data-dojo-attach-point\x3d"btnPlay" data-dojo-attach-event\x3d"onclick:_toggleVizTimer"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"panelTitle" data-dojo-attach-point\x3d"titleNode"\x3eTitle\x3c/div\x3e\r\n        \x3cdiv class\x3d"panelPages"\x3e\r\n          \x3cul class\x3d"pages" data-dojo-attach-point\x3d"pages"\x3e\r\n          \x3c/ul\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"btnClose" data-dojo-attach-point\x3d"btnClose" data-dojo-attach-event\x3d"onclick:_close"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/3DFx/css/style.css":".esri-viz-cards {position: absolute; width: 100%; height: 100%; overflow-x: auto; overflow-y: hidden;}.esri-viz-cards .content {margin: 0; padding: 0; width: auto; height: 100%; white-space: nowrap; overflow: visible;}.esri-viz-cards .card {position: relative; float: left; width: 150px; height: 100%; margin-left: 10px; margin-right: 20px; overflow: hidden; text-overflow: ellipsis; cursor: pointer; display: block;}.dj_rtl .esri-viz-cards .card {float: right;}.esri-viz-cards .card.selected {color: #ffffff;}.esri-viz-cards .header {position: absolute; width: 100%; height: 20px; line-height: 20px; font-size: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.25); overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards .card.selected .header {border-bottom: 1px solid #ffffff;}.esri-viz-cards .value {position: absolute; top: 20px; width: 100%; height: 17px; line-height: 17px; font-size: 12px; overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards .valueBig {position: absolute; top: 20px; width: 100%; height: 60px; line-height: 60px; font-size: 20px; overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards .area {position: absolute; left: 30px; top: 37px; width: 80px; height: 70px; display: block;}.esri-viz-cards .chart {position: absolute; width: 100%; height: 100%; display: block;}.esri-viz-cards .pct {position: absolute; top: 50%; margin-top: -15px; width: 100%; height: 30px; line-height: 30px; font-size: 20px; text-align: center; overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards::-webkit-scrollbar {width: 6px; height: 6px; background-color: rgba(255, 255, 255, 0.25);}.esri-viz-cards::-webkit-scrollbar-thumb {background-color: rgba(255, 255, 255, 0.5);}.esri-viz-cards {scrollbar-base-color: #000000; scrollbar-3dlight-color: #000000; scrollbar-highlight-color: #000000; scrollbar-track-color: #707070; scrollbar-arrow-color: #606060; scrollbar-shadow-color: #000000; scrollbar-dark-shadow-color: #000000; scrollbar-face-color: #606060;}.jimu-widget-viz {color: #ffffff; background-color: rgba(0,0,0,0.8); left: 0px !important; right: 0px !important; bottom: 0px; height: 160px !important; display: block; z-index: 100 !important; overflow: hidden;}.jimu-widget-viz .labelCanvas {position: absolute; top: -50px; height: 50px;}.jimu-widget-viz .panelBottom {position: absolute; width: 100%; height: 160px; left: 0px; top: 0px; color: #ffffff; padding: 0px;}.jimu-widget-viz .panelFooter {position: absolute; bottom: 0px; left: 0px; right: 0px; height: 40px; line-height: 40px; overflow: hidden; background-color: #393939; background-color: rgba(0, 0, 0, 0.25); border-bottom: 1px solid #353535; border-bottom: 1px solid rgba(0, 0, 0, 0.3);}.jimu-widget-viz .panelFooterContent {position: absolute; left: 10px; right: 24px; top: 8px; height: 24px; line-height: 24px; overflow-x: hidden; overflow-y: hidden; display: inline-block; white-space: nowrap; width: auto;}.jimu-rtl .jimu-widget-viz .panelFooterContent {position: absolute; left: 24px; right: 10px;}.jimu-widget-viz .panelTitle {float: left; margin-left: 10px; font-size: 14px;}.jimu-rtl .jimu-widget-viz .panelTitle {float: right; margin-right: 10px;}.jimu-widget-viz .panelPages {float: right;}.jimu-rtl .jimu-widget-viz .panelPages {float: left;}.jimu-widget-viz .pages {list-style-type: none; height: 24px; margin: auto; padding: 2px; display: block; cursor: pointer;}.jimu-widget-viz .pages li {width: 20px; height: 20px; display: inline-block; background: url(images/dot.png); margin: 0;}.jimu-widget-viz .pages li:hover {background: url(images/doton.png);}.jimu-widget-viz .pages li.active {background: url(images/doton.png);}.jimu-widget-viz .btnPlay {float: left; width: 24px; height: 24px; display: block; cursor: pointer; background-image: url('images/play.png'); background-repeat: no-repeat; background-position: center center; background-size: 24px;}.jimu-rtl .jimu-widget-viz .btnPlay {float: right;}.jimu-widget-viz .playing {background-image: url('images/pause.png'); background-repeat: no-repeat; background-position: center center; background-size: 24px;}.jimu-widget-viz .btnClose {position: absolute; left: auto; right: 0px; width: 24px; height: 40px; line-height: 40px; text-align: center; display: block; cursor: pointer; background-image: url('images/x.png'); background-repeat: no-repeat; background-position: center center; background-size: 18px;}.jimu-rtl .jimu-widget-viz .btnClose {position: absolute; left: 0px; right: auto;}.jimu-widget-viz .panelContainer {position: absolute; width: 100%; height: 120px; overflow: hidden; display: block;}.jimu-widget-viz .panelInner {position: absolute; top: 3px; left: 0px; right: 0px; height: 117px; display: block; overflow: hidden;}.jimu-widget-viz .loading {background-image: url('images/loading.gif'); background-repeat: no-repeat; background-position: center 10px;}",
"*now":function(q){q(['dojo/i18n!*preload*widgets/3DFx/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","uk","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/Color dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/xhr dojo/Deferred dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/number dojo/on dojo/query dojo/json dijit/_WidgetsInTemplateMixin esri/request esri/Graphic esri/layers/GraphicsLayer esri/geometry/Point esri/geometry/support/webMercatorUtils esri/symbols/PictureMarkerSymbol esri/symbols/PointSymbol3D esri/symbols/ObjectSymbol3DLayer esri/tasks/QueryTask esri/tasks/support/Query jimu/BaseWidget jimu/dijit/Message jimu/utils jimu/dijit/LoadingShelter fx3d/layers/FxLayer ./VizCards/VizCards dojo/domReady!".split(" "),function(q,
r,m,e,d,c,g,l,f,k,p,w,C,E,I,b,h,a,x,z,t,B,F,G,J,P,Q,M,R,K,N,v,u){return q([M,h],{baseClass:"jimu-widget-viz",name:"3DFx",postCreate:function(){this.inherited(arguments);this.vizFeatures=[];this.vizMax=0;this.vizCards=null;this.vizPage=0;this._featuresLoadedDfd=new g;this._sortedFeatures={}},startup:function(){this.inherited(arguments);this.loadingCover=new N({hidden:!0});this.loadingCover.placeAt(this.sceneView.map.id);this.loadingCover.startup();this._getStyleColor();var b=this._getStyleColor();
this.panelMsgBlock.innerHTML="";b.then(e.hitch(this,function(b){b&&(this.config.color=b);this.config.vizLayer&&0!==this.config.vizFields.length?(this.loadingCover.show(),a(this.config.vizLayer.url+"/query",{query:{f:"json",returnGeometry:!1,returnCountOnly:!0,where:"1\x3d1"},callbackParamName:"callback"}).then(e.hitch(this,function(a){a.data.count?400<a.data.count?this.config.showPercent=!1:this.panelMsgBlock.innerHTML="":this.panelMsgBlock.innerHTML="";this._initUI();this._initLayers();this._initViz()}))):
this.panelMsgBlock.innerHTML=K.sanitizeHTML("\x3cp align\x3d'center'\x3e"+this.nls.viz_error+"\x3c/p\x3e")}))},onOpen:function(){this.inherited(arguments);this.loadingCover.hidden&&this.loadingCover.show();this._styleSync();this._showLayers()},onClose:function(){this._hideLayers();this._stopVizTimer();this.loadingCover.hide();this.vizCards&&this.vizCards.unselectCards();this.inherited(arguments)},onDeActive:function(){},destroy:function(){this._stopVizTimer();this._removeFxLayer();this._sortedFeatures=
{};this._featuresLoadedDfd=null;this.loadingCover.destroy();this.inherited(arguments)},_close:function(){this.widgetManager.closeWidget(this.id)},_styleSync:function(){this._getStyleColor().then(e.hitch(this,function(a){w.set(this.footerNode,"backgroundColor",a);this.vizCards&&w.set(this.vizCards.contentNode,"color",u.CONTENT_COLOR);this.config.color=a;this._updatePath();this.fxLayer&&this.fxLayer.set("renderingInfo",this._getRenderingInfo())}))},onAppConfigChanged:function(a,b){this.appConfig=a;
if("closed"!==this.state)switch(b){case "styleChange":this._styleSync()}},setPosition:function(a,b){if("BoxTheme"===this.appConfig.theme.name||"DartTheme"===this.appConfig.theme.name||"LaunchpadTheme"===this.appConfig.theme.name)this.inherited(arguments);else{this.position={left:"0px",right:"0px",bottom:"0px",height:"140px"};var c=K.getPositionStyle(this.position);c.position="absolute";b=this.sceneView.map.id;m.place(this.domNode,b);m.setStyle(this.domNode,c);this.started&&this.resize();"TabTheme"===
this.appConfig.theme.name&&(c=this.widgetManager.getControllerWidgets()[0],this.widgetManager.minimizeWidget(c.id))}},_updatePath:function(){this.vizCards&&this.vizCards.update({color:this._getColor()})},_getStyleColor:function(a){return K.getStyleColorInTheme(a)},_initUI:function(){this.vizCards=new u({view:this.sceneView,showPercent:this.config.showPercent},this.panelContent);this.vizCards.on("selection",e.hitch(this,this._featureSelection));this.vizCards.startup();"global"===this.sceneView.viewingMode?
w.set(this.btnPlay,"display","block"):w.set(this.btnPlay,"display","none")},_initLayers:function(){this.sceneView.map.findLayerById(this.config.vizLayer.id).when().then(e.hitch(this,function(a){this.vizLayer=a;this.vizLayerVisibility=a.visible;this.vizLayer.visible=!1;this._addFxLayer()}))},_getColor:function(){if(this.config.cycleColors){var a=this.vizPage,b=this.config.colors.length;return this.config.colors[a-Math.floor(a/b)*b]}return this.config.color},_getColors:function(){var a=this._getColor(),
b=r.fromString("#ffffff"),a=r.fromString(a),c=r.blendColors(a,b,.3),b=r.blendColors(a,b,.8);return[a.toRgb(),c.toRgb(),b.toRgb()]},_getRenderingInfo:function(){var a=this._getColors(),b;switch(this.config.vizType){case "PointExtrude":b={visible:!0,repeat:1,animationInterval:this.config.interval/1E3,shapeType:"Cylinder",radius:this.config.maxWidth,height:this.config.maxHeight,transparency:100,bottomColor:a[0],topColors:[a[0],a[1]]};break;case "Pulse":b={visible:!0,repeat:1E3,animationInterval:this.config.interval/
1E3,shapeType:"Circle",radius:this.config.maxWidth,transparency:80,solidColor:a[0],haloColor:a[1]};break;case "Bounce":b={visible:!0,repeat:1E3,animationInterval:this.config.interval/1E3,dashHeight:this.config.maxHeight,radius:100,transparency:100,haloColors:a};break;case "GridSurface":b={visible:!0,repeat:1,animationInterval:this.config.interval/1E3,width:this.config.maxWidth,height:this.config.maxHeight,transparency:60,colors:[a[0],a[1],a[2]]};break;case "Fireball":case "JetTrail":b={visible:!0,
repeat:1E3,animationInterval:this.config.interval/1E3,radius:30,transparency:90,colors:[a[0],a[0]]};break;case "AreaExtrude":b={visible:!0,repeat:1,animationInterval:this.config.interval/1E3,height:this.config.maxHeight,transparency:100,bottomColor:a[0],topColors:[a[0],a[1]]}}"JetTrail"===this.config.vizType&&(b.showEndPoints=this.config.showJetTrailEndPoints);return b},_removeFxLayer:function(){this.fxLayer&&(this.fxLayer.remove(),this.fxLayer=null)},_addFxLayer:function(){this._removeFxLayer();
var a=this._getRenderingInfo(),b=[];d.forEach(this.config.vizFields,function(a){b.push(a.field)});this.fxLayer=new v(this.config.vizLayer.url,{view:this.sceneView,vizType:this.config.vizType,vizFields:b,displayField:this.config.displayField,renderingInfo:a});this.fxLayer.on("all-features-loaded",e.hitch(this,this._allFeaturesLoaded));this.fxLayer.on("selected-feature-from-globe",e.hitch(this,this._selectedFeatureFromGlobe));this.fxLayer.on("abandon-selected-feature",e.hitch(this,this._abandonSelectedFeature));
this.fxLayer.on("fx3d-ready",function(){this.loadingCover.hide()}.bind(this));this.fxLayer.watch("visible",e.hitch(this,function(a){!1===a&&this._stopVizTimer()}));this.sceneView.map.add(this.fxLayer)},_selectedFeatureFromGlobe:function(a){this.fxLayer&&this.fxLayer.hideLabel();this._featuresLoadedDfd.then(function(){if(a.selectedFeature){var b=this._getFeatureIndex(a.selectedFeature);this.vizCards&&this.vizCards.selectCard(b)}}.bind(this))},_abandonSelectedFeature:function(){this.vizCards&&this.vizCards.unselectCards()},
_allFeaturesLoaded:function(a){this._featuresLoadedDfd.resolve();this.vizFeatures=a.graphics;this._setVizPage(0,!0)},_showLayers:function(){this.vizLayer&&(this.vizLayer.visible=!1);this.fxLayer&&(this.fxLayer.visible=!0);this.loadingCover.hide()},_hideLayers:function(){this.vizLayer&&(this.vizLayer.visible=this.vizLayerVisibility);this.fxLayer&&(this.fxLayer.visible=!1)},_initViz:function(){this._initVizPages()},_initVizPages:function(){var a=this.pages;a.innerHTML="";if(1<this.config.vizFields.length){for(var b=
0;b<this.config.vizFields.length;b++){var c=this.config.vizFields[b],c=k.create("li",{id:this.id+"-page"+b,title:c.label||c.alias},a);E(c,"click",e.hitch(this,this._setVizPage,b))}f.add("page0","active")}this.vizPage=0},_setVizPage:function(a,b){this.loadingCover.hidden&&this.loadingCover.show();this._featuresLoadedDfd.then(function(){var c=this.id+"-page"+this.vizPage,d=this.id+"-page"+a;l.byId(c)&&f.remove(c,"active");this.vizPage=a;l.byId(d)&&f.add(d,"active");setTimeout(function(){this._processViz(b)}.bind(this),
300)}.bind(this))},_toggleVizTimer:function(){this.playing?this._stopVizTimer():this._startVizTimer()},_startVizTimer:function(){this._stopVizTimer();this.vizTimer=setInterval(e.hitch(this,this._doViz),10*this.config.interval);this.fxLayer&&(this.fxLayer.visible=!0,this.fxLayer.startSpinning());this.playing=!0;f.add(this.btnPlay,"playing")},_stopVizTimer:function(){this.vizTimer&&(clearInterval(this.vizTimer),this.vizTimer=null);this.fxLayer&&this.fxLayer.pauseSpinning();this.playing=!1;this.btnPlay&&
f.remove(this.btnPlay,"playing")},_doViz:function(){var a=this.vizPage+1;a>=this.config.vizFields.length&&(a=0);this._setVizPage(a)},_processViz:function(a){var b=this.config.vizFields[this.vizPage],c=b.field,e=this.config.displayField;this.titleNode.innerHTML=K.sanitizeHTML(b.label||b.alias);if(this.fxLayer&&!0!==a){var f=this._getRenderingInfo();this.fxLayer.when().then(function(){this.fxLayer.switchVizField(c,f)}.bind(this))}a=this._sortedFeatures[c];a||(a=d.filter(this.vizFeatures,function(a){return null!==
a.attributes[c]?!0:!1}),0<a.length&&(a.sort(function(a,b){return a.attributes[c]<b.attributes[c]?1:a.attributes[c]>b.attributes[c]?-1:0}),d.forEach(a,function(a,b){a.attributes.index=b}),this.vizMax=a[0].attributes[c]),this._sortedFeatures[c]=a);this.filteredFeatures=a;e={features:a,vizField:c,displayField:e,color:this._getColor()};this.vizCards.update(e);this.loadingCover.hide()},_featureSelection:function(a){a.data?(a=a.data,this.playing&&this._stopVizTimer(),this.fxLayer&&this.fxLayer.showLabel(a)):
this.fxLayer&&this.fxLayer.hideLabel()},_getFeatureIndex:function(a){var b=this.config.displayField,c=a.attributes[b],e=0;d.some(this.filteredFeatures,function(a){if(a.attributes[b]===c)return!0;e+=1});return e}})});