/*global define */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  //Default configuration settings for the application. This is where you'll define things like a bing maps key,
  //default web scene, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
  //Langsung setting appid atau taruh saja webscene id terus setting tampilannya langsung di script ini.
  "appid": "",
  "webscene": "6673c2171fb346898931fe241ac657ea", //"51c67be4a5ea4da6948a40210ddfab1a", //"f10712b32f1a420aa4938cedd1ec2fdd",
  "oauthappid": "arcgisWebApps", //"AFTKRmv16wj14N3z",
  //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
  //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  "proxyurl": "",
  //Example of a template specific property. If your template had several color schemes
  //you could define the default here and setup configuration settings to allow users to choose a different
  //color theme.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "units": null,
  "helperServices": {
    "geometry": {
      "url": null
    },
    "printTask": {
      "url": null
    },
    "elevationSync": {
      "url": null
    },
    "geocode": [{
      "url": null
    }]
  },
  // Template configuration settings
  // Template UI settings
  "title": "Scene Tutorial Spasialkan.COM",
  "subtitle": "by spasialkan.com",
  "color": "#80ab00",
  "colorText": "",
  "reverse": 1,
  // Template tool settings
  "showLayers": true,
  "showBasemaps": true,
  // Template scene settings
  "directShadows": true,
  "atmosphere": true,
  "stars": true
});
