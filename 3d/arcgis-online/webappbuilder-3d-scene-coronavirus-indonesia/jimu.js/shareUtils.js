// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/lang esri/request dojo/promise/all jimu/shared/basePortalUrlUtils dojo/Deferred jimu/portalUtils jimu/utils esri/core/urlUtils".split(" "),function(e,k,r,l,g,n,h,p){var m={getBaseHrefUrl:function(b){var a="";window.isXT?a=window.location.protocol+"//"+window.location.host+window.appInfo.appPath:(a=h.urlToObject(window.location.href).query||{},a=a.appid?b+"apps/webappviewer3d/index.html?appid\x3d"+a.appid:a.id?b+"apps/webappviewer3d/index.html?id\x3d"+a.id:h.getAppHref());return a},
addQueryParamToUrl:function(b,a,d,c){b=p.urlToObject(b);b.query||(b.query={});b.query[a]=d;a=b.path;for(var f in b.query)d=b.query[f],!0===c&&(d=encodeURIComponent(d)),a=a===b.path?a+"?"+f+"\x3d"+d:a+"\x26"+f+"\x3d"+d;return a},removeQueryParamFromUrl:function(b,a,d){b=p.urlToObject(b);b.query&&delete b.query[a];a=b.path;for(var c in b.query){var f=b.query[c];!0===d&&(f=encodeURIComponent(f));a=a===b.path?a+"?"+c+"\x3d"+f:a+"\x26"+c+"\x3d"+f}return a},getShareUrlContent:function(b){return"\x3cdiv class\x3d'marker-feature-action-popup'\x3e\x3cdiv class\x3d'item'\x3e\x3cspan class\x3d'sub-title jimu-float-leading'\x3e"+
window.jimuNls.common.url+"\x3c/span\x3e\x3cinput type\x3d'text' class\x3d'jimu-float-leading' readonly\x3d'readonly' value\x3d"+b+"\x3e\x3c/input\x3e\x3c/div\x3e\x3c/div\x3e"},getShareUrl:function(b,a,d){var c=m.getBaseHrefUrl(window.portalUrl),f="",q,e,g,h,k;a&&(a.longitude&&a.latitude?(q=a.longitude,e=a.latitude,f=a.longitude+","+a.latitude+","):a.x&&a.y&&a.spatialReference&&a.spatialReference.wkid&&(g=a.x,h=a.y,k=a.spatialReference.wkid,f=a.x+","+a.y+","+a.spatialReference.wkid));c=m.addQueryParamToUrl(c,
"marker",f,!0);c=m.addQueryParamToUrl(c+",,,","markertemplate",encodeURIComponent(JSON.stringify({title:a.title,x:g,y:h,wkid:k,longitude:q,latitude:e,isIncludeShareUrl:d})));a=b.getLevel();return c="number"===typeof a&&-1!==a?m.addQueryParamToUrl(c,"level",b.getLevel(),!0):m.addQueryParamToUrl(c,"scale",b.getScale(),!0)},getXyContent:function(b){var a="\x3cdiv class\x3d'marker-feature-action-popup'\x3e";b.longitude&&b.latitude?a+="\x3cdiv class\x3d'item clearFix'\x3e\x3cspan class\x3d'sub-title'\x3e"+
window.jimuNls.common.longitude+"\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+h.localizeNumber(parseFloat(b.longitude).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'item clearFix'\x3e\x3cspan class\x3d'sub-title'\x3e"+window.jimuNls.common.latitude+"\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+h.localizeNumber(parseFloat(b.latitude).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e":b.x&&b.y&&(a+="\x3cdiv class\x3d'item clearFix'\x3e\x3cspan class\x3d'sub-title'\x3ex\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+
h.localizeNumber(parseFloat(b.x).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'item'\x3e\x3cspan class\x3d'sub-title'\x3ey\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+h.localizeNumber(parseFloat(b.y).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e");return a+"\x3c/div\x3e"},_isUserOwnTheApp:function(b){return b&&b.username&&b.username===window.appInfo.appOwner?!0:!1},getItemByUserAndItemId:function(b,a,d,c){var f=new g;c=l.getStandardPortalUrl(c);c=c+"/sharing/rest/content/users/"+(a?a.username?a.username:
a.email:d.email);if(void 0!==b.folderId&&null!==b.folderId&&"/"!==b.folderId||void 0!==b.ownerFolder&&null!==b.ownerFolder&&"/"!==b.ownerFolder)c+="/"+(b.folderId||b.ownerFolder);c+="/items/"+b.id;k({url:c,handleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,function(a){f.resolve(a)}),e.hitch(this,function(a){console.error(a);f.reject(a)}));return f},_getProfile:function(b,a){var d=new g;b=l.getUserUrl(a,b.owner);k({url:b,handleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,
function(a){d.resolve(a)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));return d},_unshareItemById:function(b,a,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/items/"+a+"/unshare";a={f:"json"};a=e.mixin(a,b);k({url:d,handleAs:"json",content:a,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},canSharePublic:function(b){return!b.selfUrl||!0!==b.canSharePublic&&
!1!==b.canSharePublic?!0:b.canSharePublic},unshareItemsByUser:function(b,a,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+b+"/unshareItems";b={f:"json"};b=e.mixin(b,a);k({url:d,handleAs:"json",content:b,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},unshareItems:function(b,a,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+(a.owner||
b.email)+"/unshareItems";b={f:"json"};b=e.mixin(b,a);k({url:d,handleAs:"json",content:b,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},shareItemsByUser:function(b,a,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+b+"/shareItems";b={f:"json"};b=e.mixin(b,a);k({url:d,handleAs:"json",content:b,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),
e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},shareItems:function(b,a,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+(a.owner||b.email)+"/shareItems";b={f:"json"};b=e.mixin(b,a);k({url:d,handleAs:"json",content:b,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},getItemsGroups:function(b,a){var d=new g;a=l.getStandardPortalUrl(a);a+="/sharing/rest/content/items/"+
b.id+"/groups";k({url:a,handleAs:"json",content:{f:"json"},callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){d.resolve(a)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));return d},isSharedToPublic:function(b){return window.isXT?!1:null===b?!0:"undefined"!==typeof b&&"undefined"!==typeof b.item&&"undefined"!==typeof b.item.access&&"public"===b.item.access?!0:!1},isShowSocialMediaLinks:function(b){return window.isXT?!0:null===b?!0:"undefined"!==typeof b&&"undefined"!==
typeof b.item&&"undefined"!==typeof b.item.access&&"private"===b.item.access?!1:!0},getItemShareInfo:function(b){var a=new g,d="";if(window.isXT)return a.resolve(null);d=h.urlToObject(h.getAppHref()).query||{};d=d.id||d.appid;if("undefined"===typeof d||""===d)return a.resolve(null);n.getPortal(b).getItemById(d).then(e.hitch(this,function(b){var d={};d.item=b;d.item&&"undefined"===typeof d.item.sharing&&d.item.access&&(d.item.sharing={access:d.item.access});a.resolve(d)}),e.hitch(this,function(b){console.log(b);
a.resolve(null)}));return a},getShareInfo:function(b){var a=n.getPortal(b),d=new g,c="";if(window.isXT)return d.resolve(null);c=h.urlToObject(h.getAppHref()).query||{};c=c.id||c.appid;if("undefined"===typeof c||""===c)return d.resolve(null);r({getUser:a.getUser(),loadSelfInfo:a.loadSelfInfo(),getItem:a.getItemById(c)}).then(e.hitch(this,function(a){var c={};c.item=a.getItem;c.item&&c.item.ownerFolder&&c.item.ownerFolder.length&&"/"!==c.item.ownerFolder&&(c.item.folderId=c.item.ownerFolder);"undefined"===
typeof c.item.sharing&&c.item.access&&(c.item.sharing={access:c.item.access});c.user=a.getUser;m._setUserRole(a.loadSelfInfo,c);c.currentUser=c.user;c.isAdmin=!1;c.userRole&&(c.userRole.isAdmin()||c.userRole.isCustom()&&c.userRole.canUpdateOrgItems())?(c.isAdmin=!0,c.item.owner!==c.currentUser.name?m._getProfile(c.item,b).then(e.hitch(this,function(a){c.itemUser=a;c.itemUser.orgId!==c.currentUser.orgId&&(c.isAdmin=!1);d.resolve(c)})):(c.itemUser=c.currentUser,d.resolve(c))):(c.currentUser&&(c.itemUser=
c.currentUser),d.resolve(c))}),e.hitch(this,function(a){console.log(a);d.resolve(null)}));return d},_setUserRole:function(b,a){a.userPortalUrl=b.urlKey?b.urlKey+"."+b.customBaseUrl:this.portalUrl;!b||b.code||b.message||(a.organization=b);if(b&&b.user)a.userRole=new Role({id:b.user.roleId?b.user.roleId:b.user.role,role:b.user.role}),a._isCustomRole=a.userRole.isCustom(),a._roleCanShareToGroup=a._isCustomRole&&a.userRole.canShareItemToGroup(),a._roleCanShareToOrg=a._isCustomRole&&a.userRole.canShareItemToOrg(),
a._roleCanSharePublic=a._isCustomRole&&a.userRole.canShareItemToPublic(),a._roleCanShare=a._roleCanShareToGroup||a._roleCanShareToOrg||a._roleCanShareToPublic,a._roleCanUpdateItems=a._isCustomRole&&a.userRole.canUpdateOrgItems(),a._roleCanShareOthersItemsToGroup=a._isCustomRole&&a.userRole.canShareOthersItemsToGroup(),a._roleCanShareOthersItemsToOrg=a._isCustomRole&&a.userRole.canShareOthersItemsToOrg(),a._roleCanShareOthersItemsToPublic=a._isCustomRole&&a.userRole.canShareOthersItemsToPublic(),a._roleCanShareOthersItems=
a._isCustomRole&&(a.userRole.canShareOthersItemsToGroup()||a.userRole.canShareOthersItemsToOrg()||a._roleCanShareOthersItemsToPublic),a._orgUserCanSharePublicOrOverride=a.organization&&(!0===a.organization.canSharePublic&&(!a._isCustomRole||a._roleCanSharePublic||a._roleCanShareOthersItemsToPublic)||a.userRole.isAdmin());else return!1},getItemById:function(b,a){var d=new g;a=l.getStandardPortalUrl(a);a+="/sharing/rest/content/items/"+b.id;k({url:a,handleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,
function(a){d.resolve(a)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));return d},disableWebMapPopup:function(b){b&&b.setInfoWindowOnClick&&b.setInfoWindowOnClick(!1)},enableWebMapPopup:function(b){b&&b.setInfoWindowOnClick&&b.setInfoWindowOnClick(!0)}};return m});