//>>built
require({cache:{"url:fx3d/views/3d/effects/AreaExtrude/AreaExtrudeMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\x3c!-- Copyright @ 2020 Esri. All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions. --\x3e\x3csnippets\x3e\x3csnippet name\x3d"areaExtrudeFS"\x3e\x3c![CDATA[\r\n#ifdef GL_ES\r\nprecision highp float;\r\n#endif\r\nuniform float ie;uniform vec3 il;uniform vec4 eo;uniform vec4 ms;uniform vec4 os;uniform vec3 es;varying vec4 gh;varying vec3 ch;varying vec3 gg;const vec3 a\x3dvec3(1.0,1.0,1.0);const vec3 b\x3dvec3(1.0,1.0,1.0);const vec3 c\x3dvec3(0.2,0.2,0.2);void main(){vec3 d\x3dnormalize(gg-es);vec3 e\x3dnormalize(ch);vec3 f\x3dnormalize(reflect(d,e));float g\x3dmax(dot(f,il),.001);vec3 h\x3dc*os.rgb*os.w*pow(g,10.0);vec3 i\x3da*ms.rgb*ms.w*clamp(dot(e,il),.0,1.0);vec3 j\x3db*eo.rgb*eo.w;vec3 k\x3dvec3(j+i+h);gl_FragColor.xyz\x3dgh.xyz*k;float l\x3die*0.01;gl_FragColor.w\x3dl;}]]\x3e\x3c/snippet\x3e\x3csnippet name\x3d"areaExtrudeVS"\x3e\x3c![CDATA[attribute vec3 $position;attribute vec2 $auxpos1;attribute vec2 $auxpos2;uniform mat4 pl;uniform mat4 sp;uniform sampler2D oe;uniform sampler2D ls;uniform float om;uniform vec2 is;uniform vec3 ps;uniform sampler2D ll;uniform vec3 mp;uniform float sl;uniform vec2 oo;uniform vec2 ss;uniform bool el;uniform vec4 po;varying vec4 gh;varying vec3 ch;varying vec3 gg; $linearInterpolator  $lonlat2position  $translationMat  $localTrans  $quintEaseOut const float a\x3d1.0;const float b\x3d0.0;vec4 matchPixelCenter(vec4 c,vec2 d){vec2 e\x3dvec2(.500123)+.5*c.xy/c.w;vec2 f\x3dfloor(e*d);vec2 g\x3dvec2(1.0)/d;vec2 h\x3d(((vec2(.5)+f)*g)*2.0-vec2(1.0))*c.w;return vec4(h.x,h.y,c.z,c.w);}void main(void){float i\x3dfract($auxpos1.x/oo.x);float j\x3dfloor($auxpos1.x/oo.y)/oo.y;float k\x3d(texture2D(oe,vec2(i,j))).r;float l\x3d(texture2D(ls,vec2(i,j))).r;float m\x3dmod(sl,om);float n\x3dgetQuintEaseInOutValue(m,k,l,om);if(el){n\x3dl;}float o\x3dgetLinearValue(ss,n);bool p\x3dfalse;if($auxpos1.y\x3d\x3da){p\x3dtrue;}else if($auxpos1.y\x3d\x3db){p\x3dfalse;}vec3 q,r,s;mat4 t\x3dmat4(1.0);\r\n#ifdef GLOBAL\r\nmat4 u\x3dgetTransMat($position);q\x3du[3].xyz;t\x3dtoRotationMat(u);vec4 v\x3dvec4(0.0,0.0,1.0,0.0);s\x3dlonlat2position(vec3($auxpos2,1.0));r\x3d(t*v).xyz;\r\n#else\r\nq\x3dwgs84ToWebMerc($position);s\x3dwgs84ToWebMerc(vec3($auxpos2,1.0));r\x3dvec3(0.0,0.0,1.0);\r\n#endif\r\nr\x3dnormalize(r);if(p){gh\x3dtexture2D(ll,vec2(o,0.5));q+\x3d(r*(getScope(is,o)));}else{gh\x3dvec4(mp,1.0);}vec3 w\x3dvec3(1.0,0.0,0.0);float x\x3d1.0;float y\x3d1.0;float z\x3dabs(dot(r,normalize(ps-q)));float A\x3d0.00001;vec3 B\x3d(sp*vec4(q,1.0)).xyz;if(z\x3e.01){float C\x3dsqrt(1.0-z*z)/z;float D\x3d(1.0-C/po[2]);if(y\x3e0.0){B*\x3dD;}else{B/\x3dD;}}B+\x3dw;vec4 E\x3dpl*vec4(B,1.0);E.z-\x3dy*A*E.w;gl_Position\x3dmatchPixelCenter(E,po.zw);ch\x3dnormalize((r-normalize(s))+normalize(q));gg\x3dq;}]]\x3e\x3c/snippet\x3e\x3c/snippets\x3e'}});
define("dojo/text!./AreaExtrudeMaterial.xml esri/core/declare ../../webgl-engine-extensions/GLSLShader ../../webgl-engine-extensions/GLSLProgramExt ../../support/fx3dUtils ../Materials".split(" "),function(g,h,d,k,m,l){return h([l],{declaredClass:"esri.views.3d.effects.AreaExtrude.AreaExtrudeMaterial",constructor:function(a){this._gl=a.gl;this._shaderSnippets=a.shaderSnippets;this._program=null;this._viewingMode=a.viewingMode;this._pushState=a.pushState;this._restoreState=a.restoreState},destroy:function(){this._program&&
(this._program.dispose(),delete this._program,this._program=null)},_addDefines:function(a,b){var c="";if(null!=b)if(Array.isArray(b))for(var e=0,d=b.length;e<d;e++)var f=b[e],c=c+("#define "+f+"\n");else for(f in b)c+="#define "+f+"\n";return this._shaderSnippets.defines+"\n"+c+a},loadShaders:function(){if(this._shaderSnippets){null!=this._shaderSnippets.areaExtrudeVS&&null!=this._shaderSnippets.areaExtrudeFS||this._shaderSnippets._parse(g);var a=[];"global"==this._viewingMode?a.push("GLOBAL"):a.push("LOCAL");
var a=this._addDefines(this._shaderSnippets.areaExtrudeVS,a),a=new d(35633,a,this._gl),b=new d(35632,this._shaderSnippets.areaExtrudeFS,this._gl);this._program=new k([a,b],this._gl)}return this._initResources()},getProgram:function(){return this._program},_initResources:function(){return!0},bind:function(a,b){this._program.use();this._program.uniformMatrix4fv("pl",a.proj);this._program.uniformMatrix4fv("sp",a.view);this._program.uniform3fv("es",a.camPos);this._program.uniform3fv("ps",a.camPos);this._program.uniform4fv("po",
a.viewport);this._program.uniform3fv("il",a.lightingData.direction);this._program.uniform4fv("eo",a.lightingData.ambient);this._program.uniform4fv("ms",a.lightingData.diffuse);this._program.uniform4fv("os",a.lightingData.specular);this._oldTex=this._gl.getParameter(32873);var c=this.getOldActiveUnit(b);a.oe.bind(c+1);this._program.uniform1i("oe",c+1);a.ls.bind(c+2);this._program.uniform1i("ls",c+2);this._program.uniform2fv("oo",a.oo);this._program.uniform2fv("ss",[a.ss,a.li]);this._program.uniform2fv("is",
a.is);this._gl.activeTexture(33984+c+3);this._gl.bindTexture(3553,a.ll);this._program.uniform1i("ll",c+3);this._program.uniform1f("om",a.om);this._program.uniform1f("ie",a.ie);this._program.uniform3fv("mp",a.mp);this._program.uniform1f("sl",a.time);this._program.uniform1i("el",a.reachedRepeatLimit);1!=b._depthTestEnabled&&(this._pushState(["setDepthTestEnabled",b._depthTestEnabled]),b.setDepthTestEnabled(!0));1!=b._polygonCullingEnabled&&(this._pushState(["setFaceCullingEnabled",b._polygonCullingEnabled]),
b.setFaceCullingEnabled(!0));1!=b._blendEnabled&&(this._pushState(["setBlendingEnabled",b._blendEnabled]),b.setBlendingEnabled(!0))},bindVec3:function(a,b){this._program.uniform3fv(a,b)},release:function(a){this._gl.activeTexture(33984+a._activeTextureUnit+1);this._gl.bindTexture(3553,this._oldTex);this._restoreState(a);this._gl.useProgram(null)}})});