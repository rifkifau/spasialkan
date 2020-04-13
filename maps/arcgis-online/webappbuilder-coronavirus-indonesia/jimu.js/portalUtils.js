// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/config dojo/Deferred dojo/topic dojo/json dojo/request/xhr esri/request ./Role ./utils ./portalUrlUtils ./tokenUtils ./ServiceDefinitionManager".split(" "),function(p,c,l,q,g,y,u,z,h,v,w,f,k,A){var D=p([],{declaredClass:"jimu.Portal",selfUrl:null,user:null,selfInfo:null,portalUrl:null,credential:null,constructor:function(a){this.portalUrl=f.getStandardPortalUrl(a);this.selfUrl=f.getPortalSelfInfoUrl(a)},loadSelfInfo:function(){var a=
this.selfUrl;this.isValidCredential()&&(a=-1<a.indexOf("?")?a+("\x26token\x3d"+this.credential.token):a+("?token\x3d"+this.credential.token));return A.getInstance().getServiceDefinition(a).then(c.hitch(this,function(a){var b=a.user;delete a.user;c.mixin(this,a);a.user=b;return a}))},_checkCredential:function(){var a=k.isValidCredential(this.credential);a||this.clearCredentialAndUser();return a},isValidCredential:function(){this.updateCredential();return this._checkCredential()},updateCredential:function(){this._checkCredential()||
(this.credential=k.getPortalCredential(this.portalUrl))},signIn:function(){var a=new g;this.updateCredential();this.isValidCredential()?setTimeout(c.hitch(this,function(){a.resolve(this.credential)}),0):a=k.signInPortal(this.portalUrl);return a},haveSignIn:function(){return k.userHaveSignInPortal(this.portalUrl)},clearCredentialAndUser:function(){this.user=this.credential=null},getUser:function(){this.updateCredential();var a=new g;this.user&&"jimu.PortalUser"===this.user.declaredClass?setTimeout(c.hitch(this,
function(){this.user.updateCredential();a.resolve(this.user)}),0):this.isValidCredential()?this.credential.userId?this._getUser(this.credential.userId).then(c.hitch(this,function(b){this.user=b;a.resolve(this.user)}),c.hitch(this,function(b){console.error(b);a.reject(b)})):k.getUserIdByToken(this.credential.token,this.portalUrl).then(c.hitch(this,function(b){this.credential.userId=b;this._getUser(this.credential.userId).then(c.hitch(this,function(b){this.user=b;a.resolve(this.user)}),c.hitch(this,
function(b){console.error(b);a.reject(b)}))}),c.hitch(this,function(b){console.error(b);a.reject(b)})):setTimeout(c.hitch(this,function(){a.reject("credential is null.")}),0);return a},queryItems:function(a){this.updateCredential();var b=new g,d=f.getBaseSearchUrl(this.portalUrl),e={f:"json"};a&&(e=c.mixin(e,a));this.isValidCredential()&&(e.token=this.credential.token);e.sortField||e.sortOrder||(e.sortField="title",e.sortOrder="asc");h({url:d,handleAs:"json",content:e,callbackParamName:"callback"}).then(c.hitch(this,
function(a){a.results=l.map(a.results,c.hitch(this,function(a){a.portalUrl=this.portalUrl;a.credential=this.credential;a.portal=this;return new r(a)}));b.resolve(a)}),c.hitch(this,function(a){console.error(a);b.reject(a)}));return b},getItemData:function(a){this.updateCredential();a={url:f.getItemDataUrl(this.portalUrl,a),handleAs:"json",content:{f:"json"},callbackParamName:"callback"};return h(a)},_getItemById:function(a,b){a={url:f.getItemUrl(this.portalUrl,a),handleAs:"json",content:{f:"json"},
callbackParamName:"callback"};b&&(a.content.token=b);return h(a).then(c.hitch(this,function(a){a.portalUrl=this.portalUrl;a.credential=this.credential;a.portal=this;return new r(a)}))},getItemById:function(a,b){this.updateCredential();return this._getItemById(a).then(c.hitch(this,function(d){return b&&d.owner&&this.isValidCredential()&&this.credential&&this.credential.userId===d.owner?this._getItemById(a,this.credential.token):d}))},getAppById:function(a){var b=new g;this.updateCredential();this.isValidCredential()?
(a=f.getAppIdUrl(this.portalUrl,a),b=h({url:a,handleAs:"json",content:{f:"json",token:this.credential.token}})):setTimeout(c.hitch(this,function(){b.reject("token is null.")}),0);return b},queryGroups:function(a){this.updateCredential();var b=new g,d=f.getBaseGroupUrl(this.portalUrl),e={f:"json"};a&&(e=c.mixin(e,a));this.isValidCredential()&&(e.token=this.credential.token);h({url:d,handleAs:"json",content:e,callbackParamName:"callback"}).then(c.hitch(this,function(a){a.results=l.map(a.results,c.hitch(this,
function(a){a.portalUrl=this.portalUrl;a.credential=this.credential;a.portal=this;return new t(a)}));b.resolve(a)}),c.hitch(this,function(a){console.error(a);b.reject(a)}));return b},registerApp:function(a,b,d){var e=new g;this.updateCredential();if(this.isValidCredential())var m=this.credential&&this.credential.token,B=f.getOAuth2Url(this.portalUrl),e=h({url:B+"/registerApp",content:{itemId:a,appType:b,redirect_uris:u.stringify(d),token:m,f:"json"},handleAs:"json"},{usePost:!0});else setTimeout(c.hitch(this,
function(){e.reject("token is null.")}),0);return e},createAndRegisterApp:function(a){var b=new g;this.updateCredential();this.isValidCredential()?this.getUser().then(c.hitch(this,function(d){d.addItem({title:"Web AppBuilder for ArcGIS",type:"Web Mapping Application",text:"",snippet:"",tags:"Registered App for OAuth"},"").then(c.hitch(this,function(d){d.success?this.registerApp(d.id,"browser",a).then(c.hitch(this,function(a){b.resolve(a)}),c.hitch(this,function(a){console.error(a);b.reject(a)})):
b.reject("create app failed")}),c.hitch(this,function(a){console.error(a);b.reject(a)}))}),c.hitch(this,function(a){console.error(a);b.reject(a)})):setTimeout(c.hitch(this,function(){b.reject("token is null.")}),0);return b},_getUser:function(a){this.updateCredential();var b=new g;a={url:f.getUserUrl(this.portalUrl,a),content:{f:"json"},handleAs:"json",callbackParamName:"callback"};this.isValidCredential()&&(a.content.token=this.credential&&this.credential.token);h(a).then(c.hitch(this,function(a){a.portalUrl=
this.portalUrl;a.credential=this.credential;a.portal=this;this.user=new C(a);b.resolve(this.user)}),c.hitch(this,function(a){console.error(a);b.reject(a)}));return b},getHelpMap:function(){this.updateCredential();var a={url:f.getPortalHelpMapUrl(this.portalUrl),handleAs:"json",content:{f:"json"},callbackParamName:"callback"};return h(a)}}),C=p([],{declaredClass:"jimu.PortalUser",portalUrl:null,credential:null,portal:null,constructor:function(a){a&&c.mixin(this,a)},_checkCredential:function(){var a=
k.isValidCredential(this.credential);a||(this.credential=null);return a},isValidCredential:function(){this.updateCredential();return this._checkCredential()},updateCredential:function(){this._checkCredential()||(this.portal.updateCredential(),this.credential=this.portal.credential)},canCreateItem:function(){var a=new v({id:this.roleId?this.roleId:this.role,role:this.role});this.privileges&&a.setPrivileges(this.privileges);return a.canCreateItem()},canCreateNotebooks:function(){var a=new v({id:this.roleId?
this.roleId:this.role,role:this.role});this.privileges&&a.setPrivileges(this.privileges);return a.canCreateNotebooks()},getGroups:function(){var a=[];this.groups&&(a=l.map(this.groups,c.hitch(this,function(a){a.portalUrl=this.portalUrl;a.credential=this.credential;a.portal=this.portal;return new t(a)})));return a},getItemsByKeywords:function(a,b){return this.portal.queryItems({start:b||1,num:100,q:"owner:"+this.username+' AND typekeywords:"'+a+'"'})},getContent:function(){this.updateCredential();
var a={url:f.getUserContentUrl(this.portalUrl,this.username),handleAs:"json",content:{f:"json"},callbackParamName:"callback"};this.isValidCredential&&(a.content.token=this.credential.token);return h(a)},getTags:function(){this.updateCredential();var a={url:f.getUserTagsUrl(this.portalUrl,this.username),handleAs:"json",content:{f:"json"},callbackParamName:"callback"};this.isValidCredential()&&(a.content.token=this.credential.token);return h(a)},addItem:function(a,b){this.updateCredential();var d=new g;
if(this.isValidCredential()){var e={f:"json",token:this.credential.token};a&&(e=c.mixin(e,a));h({url:f.getAddItemUrl(this.portalUrl,this.username,b),handleAs:"json",callbackParamName:"callback",content:e},{usePost:!0}).then(c.hitch(this,function(a){d.resolve(a)}),c.hitch(this,function(a){console.error(a);d.reject(a)}))}else setTimeout(c.hitch(this,function(){d.reject("token is null.")}),0);return d},deleteItem:function(a){this.updateCredential();var b=new g;this.isValidCredential()?(a=f.getDeleteItemUrl(this.portalUrl,
this.username,a),b=h({url:a,content:{token:this.credential.token,f:"json"},handleAs:"json"},{usePost:!0})):setTimeout(c.hitch(this,function(){b.reject("token is null.")}),0);return b},getItemById:function(a,b){this.updateCredential();var d=new g;a={url:f.getUserItemsUrl(this.portalUrl,this.username,b)+"/"+a,handleAs:"json",content:{f:"json"},callbackParamName:"callback"};h(a).then(c.hitch(this,function(a){a.portalUrl=this.portalUrl;a.credential=this.credential;a.portal=this;a=new r(a);d.resolve(a)}),
c.hitch(this,function(a){console.error(a);d.reject(a)}));return d},shareItem:function(a,b,d){this.updateCredential();var e=new g;this.isValidCredential()?(b={url:f.shareItemUrl(this.portalUrl,this.username,b,d),handleAs:"json",callbackParamName:"callback",content:{f:"json",token:this.credential.token}},a&&(b.content=c.mixin(b.content,a)),h(b,{usePost:!0}).then(c.hitch(this,function(a){e.resolve(a)}),c.hitch(this,function(a){console.error(a);e.reject(a)}))):setTimeout(c.hitch(this,function(){e.reject("token is null.")}),
0);return e},updateItem:function(a,b){this.updateCredential();var d=new g;this.isValidCredential()?this.portal.getItemById(a).then(c.hitch(this,function(e){var m={f:"json",token:this.credential.token};b&&(m=c.mixin(m,b));h({url:f.getUpdateItemUrl(this.portalUrl,e.owner,a,e.ownerFolder),handleAs:"json",callbackParamName:"callback",timeout:1E5,content:m},{usePost:!0}).then(c.hitch(this,function(a){d.resolve(a)}),c.hitch(this,function(a){console.error(a);d.reject(a)}))}),c.hitch(this,function(a){console.error(a);
d.reject(a)})):setTimeout(c.hitch(this,function(){d.reject("token is null.")}),0);return d},isAdminRole:function(){return"org_admin"===this.role||"account_admin"===this.role},isPublisherRole:function(){return"org_publisher"===this.role||"account_publisher"===this.role},isUserRole:function(){return"org_user"===this.role||"account_user"===this.role},getRegisteredAppInfo:function(a,b){var d=new g;this.updateCredential();b=f.getUserItemsUrl(this.portalUrl,this.username,b);return d=h({url:b+"/"+a+"/registeredAppInfo",
content:{token:this.credential.token,f:"json"},handleAs:"json"},{usePost:!0})},getRegisteredAppInfoWithXhr:function(a,b){var d=new g;this.updateCredential();b=f.getUserItemsUrl(this.portalUrl,this.username,b);return d=z(b+"/"+a+"/registeredAppInfo",{data:{token:this.credential.token,f:"json"},method:"POST",handleAs:"json"})}}),t=p([],{declaredClass:"jimu.PortalGroup",portalUrl:null,credential:null,portal:null,constructor:function(a){a&&c.mixin(this,a)},_checkCredential:function(){var a=k.isValidCredential(this.credential);
a||(this.credential=null);return a},isValidCredential:function(){this.updateCredential();return this._checkCredential()},updateCredential:function(){this._checkCredential()||(this.portal.updateCredential(),this.credential=this.portal.credential)},queryItems:function(a){a.q="group:"+this.id+" AND "+a.q;return this.portal.queryItems(a)}}),r=p([],{declaredClass:"jimu.PortalItem",itemUrl:null,detailsPageUrl:null,ownerPageUrl:null,portalUrl:null,credential:null,portal:null,token:null,constructor:function(a){a&&
c.mixin(this,a);this.itemUrl=f.getItemUrl(this.portalUrl,this.id);!this.thumbnailUrl&&this.thumbnail&&this.itemUrl&&(this.thumbnailUrl=this.itemUrl+"/info/"+this.thumbnail);this.token=this.credential&&this.credential.token;this.thumbnailUrl&&this.token&&(this.thumbnailUrl+="?token\x3d"+this.token);this.portalUrl&&this.id&&(this.detailsPageUrl=f.getItemDetailsPageUrl(this.portalUrl,this.id));this.portalUrl&&this.owner&&(this.ownerPageUrl=f.getUserProfilePageUrl(this.portalUrl,this.owner))},_checkCredential:function(){var a=
k.isValidCredential(this.credential);a||(this.credential=null);return a},isValidCredential:function(){this.updateCredential();return this._checkCredential()},updateCredential:function(){this._checkCredential()||(this.portal.updateCredential(),this.credential=this.portal.credential)},getItemData:function(){return this.portal.getItemData(this.id)},getItemGroups:function(){this.updateCredential();var a={url:f.getItemGroupsUrl(this.portalUrl,this.id),handleAs:"json",content:{f:"json"},callbackParamName:"callback"};
this.isValidCredential()&&(a.content.token=this.credential.token);return h(a)}}),x={portals:[],webMapQueryStr:" "+w.getItemQueryStringByTypes(["Web Map"])+" ",webSceneQueryStr:" "+w.getItemQueryStringByTypes(["Web Scene"])+" ",_findPortal:function(a){for(var b=0;b<this.portals.length;b++){var d=this.portals[b];if(f.isSamePortalUrl(a,d.portalUrl))return d.updateCredential(),d}return null},getPortal:function(a){if(!a||"string"!==typeof a||!c.trim(a))return null;a=f.getStandardPortalUrl(a);var b=this._findPortal(a);
b||(b=new D(a),b.credential=k.getPortalCredential(b.portalUrl),b.updateCredential(),this.portals.push(b));return b},getPortalSelfInfo:function(a){return this.getPortal(a).loadSelfInfo()},getBasemapGalleryGroup:function(a){return this._getPortalSelfGroup(a,"basemapGalleryGroupQuery")},getTemplatesGroup:function(a){return this._getPortalSelfGroup(a,"templatesGroupQuery")},getUnits:function(a){var b="english",d="",e=new g;this.getPortal(a).getUser().then(c.hitch(this,function(a){a&&a.units?b=a.units:
(d=q.locale,b=d.startWith("en")?"english":"metric");e.resolve(b)}),c.hitch(this,function(m){console.warn(m);this.getPortalSelfInfo(a).then(c.hitch(this,function(a){var b=null;a&&a.units?b=a.units:(d=a&&a.culture||q.locale,b=d.startWith("en")?"english":"metric");e.resolve(b)}),c.hitch(this,function(a){console.warn(a);d=q.locale;b=d.startWith("en")?"english":"metric";e.resolve(b)}))}));return e.promise},_getPortalSelfGroup:function(a,b){var d=new g,e=this.getPortal(a);e||setTimeout(c.hitch(this,function(){d.reject()}),
0);this.getPortalSelfInfo(a).then(c.hitch(this,function(a){e.queryGroups({f:"json",q:a[b]}).then(c.hitch(this,function(a){0<a.results.length?(a=a.results[0],a.portalUrl=e.portalUrl,a.credential=e.credential,a.portal=e,a=new t(a),d.resolve(a)):d.reject("Can't find portal self group.")}),c.hitch(this,function(a){console.error(a);d.reject(a)}))}),c.hitch(this,function(a){console.error(a);d.reject(a)}));return d},getWebMapsFromBasemapGalleryGroup:function(a){var b=new g;this.getBasemapGalleryGroup(a).then(c.hitch(this,
function(a){a?a.queryItems({start:1,num:100,f:"json",q:this.webMapQueryStr}).then(c.hitch(this,function(a){b.resolve(a)}),c.hitch(this,function(a){console.error(a);b.reject(a)})):b.reject()}),c.hitch(this,function(a){console.error(a);b.reject(a)}));return b},getDefaultWebScene:function(a){var b=f.getStandardPortalUrl(a);return this._searchWABDefaultWebScene(b).then(c.hitch(this,function(a){return a?a:this._createWABDefaultWebScene(b).then(c.hitch(this,function(a){return this.getPortal(b).getUser().then(c.hitch(this,
function(b){var d=!1;b&&b.privileges&&0<b.privileges.length&&(d=l.some(b.privileges,function(a){return 0<=a.indexOf("shareToPublic")}));return d?b.shareItem({everyone:!0},a).then(c.hitch(this,function(){return a}),c.hitch(this,function(){return a})):a}),c.hitch(this,function(b){console.error(b);return a}))}))}))},_searchWABDefaultWebScene:function(a){var b=new g;a=f.getStandardPortalUrl(a);a=this.getPortal(a);a.queryItems({q:'typekeywords:"WABDefaultWebScene" orgid:'+a.user.orgId+" access:public "+
this.webSceneQueryStr}).then(c.hitch(this,function(a){a&&a.results&&0<a.results.length?b.resolve(a.results[0].id):b.resolve(null)}),c.hitch(this,function(a){console.error("_searchWABDefaultWebScene error:",a);b.reject(a)}));return b},_createWABDefaultWebScene:function(a){var b=new g;a=f.getStandardPortalUrl(a);this.getPortal(a).getUser().then(c.hitch(this,function(a){var d={title:"Default Web Scene",type:"Web Scene",typeKeywords:"WABDefaultWebScene",tags:"default",text:u.stringify({operationalLayers:[],
baseMap:{baseMapLayers:[{id:"World_Hillshade_3689",title:"World Hillshade",url:"https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer"},{id:"VectorTile_6451",title:"World Topographic Map",layerType:"VectorTileLayer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json"}],id:"7677a8cc22b7463eac3321e810289ee1",title:"Topographic",elevationLayers:[{id:"globalElevation",
listMode:"hide",title:"Terrain3D",url:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}]},ground:{layers:[{id:"globalElevation",listMode:"hide",title:"Terrain3D",url:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}],transparency:0,navigationConstraint:{type:"stayAbove"}},heightModelInfo:{heightModel:"gravity_related_height",
heightUnit:"meter"},version:"1.19",initialState:{environment:{lighting:{datetime:1584297035E3,displayUTCOffset:-7},atmosphereEnabled:!0,starsEnabled:!0},viewpoint:{camera:{position:{spatialReference:{latestWkid:3857,wkid:102100},x:-1.086995865773382E7,y:4499271.779598768,z:1.1136000213552397E7},heading:0,tilt:.18208338510745917}}},spatialReference:{latestWkid:3857,wkid:102100},viewingMode:"global",authoringApp:"WebAppBuilder",authoringAppVersion:"2.16"}),snippet:""};a.addItem(d,"").then(c.hitch(this,
function(a){a.success?b.resolve(a.id):(console.error("Can't create default web scene:",a),b.reject())}))}),c.hitch(this,function(a){console.error("Can't create default web scene");b.reject(a)}));return b},getDefaultWebMap:function(a){var b=new g;this.getPortalSelfInfo(a).then(c.hitch(this,function(d){var e=d.defaultBasemap&&d.defaultBasemap.id;e?b.resolve(e):this._getDefaultWebMapByBasemapGallery(a,d).then(c.hitch(this,function(d){d?b.resolve(d):this._getMostNumViewsWebMap(a).then(c.hitch(this,function(a){a?
b.resolve(a):b.reject()}),c.hitch(this,function(a){console.error(a);b.reject(a)}))}),c.hitch(this,function(a){console.error(a);b.reject(a)}))}),c.hitch(this,function(a){console.error(a);b.reject(a)}));return b},_getDefaultWebMapByBasemapGallery:function(a,b){var d=new g,e=this.getPortal(a),f=b.defaultBasemap&&b.defaultBasemap.title;e.queryGroups({f:"json",q:b.basemapGalleryGroupQuery}).then(c.hitch(this,function(a){a=a.results;0<a.length?e.queryItems({start:1,num:1,f:"json",q:this.webMapQueryStr+
" AND group:"+a[0].id+" AND title:"+f}).then(c.hitch(this,function(a){a=a.results;a=l.filter(a,c.hitch(this,function(a){return a.type&&"web map"===a.type.toLowerCase()}));0<a.length?d.resolve(a[0].id):(console.log("Can't find web map under basemapGalleryGroupQuery."),e.queryItems({start:1,num:1,f:"json",q:this.webMapQueryStr+" AND title:"+f}).then(c.hitch(this,function(a){a=a.results;a=l.filter(a,c.hitch(this,function(a){return a.type&&"web map"===a.type.toLowerCase()}));if(0<a.length){var b=a[0];
e.getItemData(b.id).then(c.hitch(this,function(a){a&&(a.operationalLayers||a.baseMap||a.version)?d.resolve(b.id):d.resolve(null)}),c.hitch(this,function(){d.resolve(null)}))}else console.log("Can't find web map by defaultBasemap.title."),d.resolve(null)}),c.hitch(this,function(a){console.error(a);d.reject(a)})))}),c.hitch(this,function(a){console.error(a);d.reject(a)})):(console.log("Can't find group by basemapGalleryGroupQuery."),d.resolve(null))}),c.hitch(this,function(a){console.error(a);d.reject(a)}));
return d},_getMostNumViewsWebMap:function(a){var b=new g;this.getPortal(a).queryItems({start:1,num:1,f:"json",q:this.webMapQueryStr+" AND access:public AND owner:esri_en",sortField:"numViews",sortOrder:"desc"}).then(c.hitch(this,function(a){a=a.results;a=l.filter(a,c.hitch(this,function(a){return a.type&&"web map"===a.type.toLowerCase()}));0<a.length?b.resolve(a[0].id):b.reject("Can't find most-num-views web map.")}),c.hitch(this,function(a){console.error(a);b.reject(a)}));return b},comparePortalVersion:function(a,
b){var c=a.split(".");a=parseInt(c[0],10);var c=1<c.length?parseInt(c[1],10):0,e=b.split(".");b=parseInt(e[0],10);e=1<e.length?parseInt(e[1],10):0;return a>b?1:a<b?-1:c>e?1:c<e?-1:0},getItemResources:function(a,b,c){c||(c=100);a=f.getStandardPortalUrl(a);a=f.getItemResourceUrl(a,b);return h({url:a,content:{f:"json",num:c}}).then(function(a){if(a&&a.resources)return a.resources})},addResource:function(a,b,c,e,g){a=f.getStandardPortalUrl(a);var d=this.getPortal(a),n=new FormData;n.append("file",c,e);
n.append("fileName",e);n.append("f","json");var k="";g?(n.append("resourcesPrefix",g),k=g+"/"+e):k=e;return d.getItemById(b,!0).then(function(c){c=f.getUserContentItemUrl(a,c.owner,b);return h({url:c+"/addResources",form:n}).then(function(b){var c="";b&&b.success&&(c=f.getItemResourceUrl(a,"${itemId}",k));return c},function(a){console.error(a.message||a);return a})})},removeResources:function(a,b,c,e){var d={resource:e?e+"/"+c:c,f:"json"};a=f.getStandardPortalUrl(a);return this.getPortal(a).getItemById(b,
!0).then(function(c){c=f.getUserContentItemUrl(a,c.owner,b);return h({url:c+"/removeResources",content:d},{usePost:!0}).then(function(a){return a},function(a){console.error(a.message||a);return a})})}};y.subscribe("userSignOut",function(a){(a=x._findPortal(a))&&a.clearCredentialAndUser()});return x});