//>>built
define("dojo/_base/lang dojo/_base/array esri/core/declare esri/core/lang esri/views/3d/webgl-engine/lib/Util esri/core/libs/gl-matrix-2/vec3f64 esri/core/libs/gl-matrix-2/mat4f64 esri/core/libs/gl-matrix-2/vec3 esri/core/libs/gl-matrix-2/mat4 esri/views/3d/support/projectionUtils ../../webgl-engine-extensions/VertexBufferLayout ../../webgl-engine-extensions/GLXBO ../../webgl-engine-extensions/GLVertexArrayObject ../../support/fx3dUtils ../../support/fx3dUnits ../Effect ./PointExtrudeMaterial".split(" "),
function(v,F,G,w,C,H,I,y,p,J,K,D,L,d,h,E,M){w=H.vec3f64;y=y.vec3;var q=I.mat4f64;p=p.mat4;var k=C.VertexAttrConstants,N=C.setMatrixTranslation3,n=w.create();q.create();tmpTranslationOriginMat=q.create();tmpTransformationRelToOrigin=q.create();tmpInvTranspTransformation=q.create();renderObjectItem=null;tmpViewMat=q.create();return G([E],{declaredClass:"esri.views.3d.effects.PointExtrude.PointExtrudeEffect",effectName:"PointExtrude",constructor:function(b){this.orderId=2;this._sizeInMeters=[];this.localOriginFactory=
E.createLocalOriginFactory();this._renderObjects={}},_initRenderingInfo:function(){this.renderingInfo.radius=6E4;this.renderingInfo.height=8E5;this.renderingInfo.topColors=[d.rgbNames.cadetblue,d.rgbNames.yellowgreen,d.rgbNames.lightpink,d.rgbNames.orangered,d.rgbNames.green,d.rgbNames.indianred];this._colorBarDirty=!0;this.renderingInfo.bottomColor=[0,255,0];this.renderingInfo.shapeType="cylinder";this._renderingInfoDirty=!0;this._segments=32;this._shapeDirty=this._vacDirty=!0;this.inherited(arguments)},
_doRenderingInfoChange:function(b){this.inherited(arguments);for(var a in b)b.hasOwnProperty(a)&&this.renderingInfo.hasOwnProperty(a)&&(d.endsWith(a.toLowerCase(),"info")?d.isInforAttrChanged(this.renderingInfo[a],b[a])&&(this._renderingInfoDirty=!0):d.endsWith(a.toLowerCase(),"color")?b[a]instanceof Array&&3==b[a].length&&(this.renderingInfo[a]=[b[a][0]/255,b[a][1]/255,b[a][2]/255]):d.endsWith(a.toLowerCase(),"colors")?b[a]instanceof Array&&(this.renderingInfo[a]=b[a],this._colorBarDirty=!0,this._renderingInfoDirty=
!0):"shapetype"===a.toLowerCase()?this.renderingInfo[a]!=b[a].toLowerCase()&&(this._vacDirty=!0,this._shapeDirty=!0,this._isAddingGeometry=!1,this._renderingInfoDirty=!0,this.renderingInfo[a]=b[a].toLowerCase(),"cuboid"===this.renderingInfo[a]?this._segments=4:"hexahedron"===this.renderingInfo[a]?this._segments=6:"cylinder"===this.renderingInfo[a]&&(this._segments=32)):"radius"===a.toLowerCase()||"height"===a.toLowerCase()||"transparency"===a.toLowerCase()?(this._clampScope(b,a),"radius"==a&&this._radiusUnit?
this.renderingInfo[a]=h.toMeters(this._radiusUnit,b[a],this._view.viewingMode):"height"==a&&this._heightUnit?(this.renderingInfo[a]=h.toMeters(this._heightUnit,b[a],this._view.viewingMode),this._updateDefaultLabelHeight()):this.renderingInfo[a]=b[a]):typeof b[a]==typeof this.renderingInfo[a]&&(this.renderingInfo[a]=b[a]))},_updateDefaultLabelHeight:function(){this._layer._labelDefaultHeight={flag:1,min:this._scopes.height[0],max:this.renderingInfo.height}},setContext:function(b){this.inherited(arguments);
this._effectConfig&&v.isArray(this._effectConfig.renderingInfo)&&(this._radiusUnit=null,this._heightUnit=null,F.forEach(this._effectConfig.renderingInfo,function(a){"radius"===a.name.toLowerCase()?(this._radiusUnit=a.unit,this.renderingInfo.radius=h.toMeters(this._radiusUnit,this.renderingInfo.radius,this._view.viewingMode)):"height"===a.name.toLowerCase()&&(this._heightUnit=a.unit,this.renderingInfo.height=h.toMeters(this._heightUnit,this.renderingInfo.height,this._view.viewingMode),this._updateDefaultLabelHeight())}.bind(this)))},
destroy:function(){this._resetBuffers()},_resetBuffers:function(){for(var b in this._renderObjects)this._dispose(this._renderObjects[b].vbo),this._dispose(this._renderObjects[b].ibo),this._dispose(this._renderObjects[b].vao);this._renderObjects={}},_initVertexLayout:function(){this._vertexBufferLayout=new K([k.POSITION,k.AUXPOS1,k.NORMAL,k.AUXPOS2],[3,3,3,3],[5126,5126,5126,5126])},_initRenderContext:function(){if(this.inherited(arguments),this._vacDirty)if(this._initVertexLayout(),this._vacDirty=
!1,this._isAddingGeometry)for(var b in this._renderObjects)this._unBindBuffer(this._renderObjects[b].vao,this._renderObjects[b].vbo,this._renderObjects[b].ibo),this._renderObjects[b].vao&&(this._renderObjects[b].vao._initialized=!1);else this._resetBuffers();return this._geometryVertexNum=2*this._segments,this._geometryIndexNum=3*(2*this._segments+(this._segments-2)),this._localBindsCallback||(this._localBindsCallback=this._localBinds.bind(this)),this._buildPolyHedronGeometries()},_buildPolyHedronGeometries:function(){var b=
this._isAddingGeometry?this._addedGraphics:this._allGraphics(),a=this._isAddingGeometry?this._toAddGraphicsIndex:0;if(0<b.length){var u,r,c,f,e,g,l,m,t,h,k,z,A,v=(this._vertexBufferLayout.getStride(),2*Math.PI),w=1/this._segments;for(r=0;r<b.length;r++)if(u=b[r].geometry,null!=u){y.set(n,u.longitude,u.latitude,u.altitude||1);e=q.create();J.computeLinearTransformation(this._wgs84SpatialReference,n,e,this.view.renderSpatialReference);"global"===this._view.viewingMode?d.wgs84ToSphericalEngineCoords(n,
0,n,0):"local"===this._view.viewingMode&&d.wgs84ToWebMerc(n,0,n,0);f=this.localOriginFactory.getOrigin(n);this._renderObjects[f.id]||(this._renderObjects[f.id]={vbo:new D(this._gl,!0,this._vertexBufferLayout),ibo:new D(this._gl,!1),vao:this._vaoExt?new L(this._gl,this._vaoExt):null,offset:0,origin:f.vec3});f=this._renderObjects[f.id];N(tmpTranslationOriginMat,-f.origin[0],-f.origin[1],-f.origin[2]);p.multiply(tmpTransformationRelToOrigin,tmpTranslationOriginMat,e);p.invert(tmpInvTranspTransformation,
tmpTransformationRelToOrigin);p.transpose(tmpInvTranspTransformation,tmpInvTranspTransformation);l=g=0;m=1;k=tmpInvTranspTransformation[0]*g+tmpInvTranspTransformation[4]*l+tmpInvTranspTransformation[8]*m+tmpInvTranspTransformation[12];z=tmpInvTranspTransformation[1]*g+tmpInvTranspTransformation[5]*l+tmpInvTranspTransformation[9]*m+tmpInvTranspTransformation[13];A=tmpInvTranspTransformation[2]*g+tmpInvTranspTransformation[6]*l+tmpInvTranspTransformation[10]*m+tmpInvTranspTransformation[14];var B=
[],x=[];e=f.offset;for(c=0;c<this._segments;c++)t=v*c*w,g=Math.cos(t),l=Math.sin(t),m=0,t=tmpTransformationRelToOrigin[0]*g+tmpTransformationRelToOrigin[4]*l+tmpTransformationRelToOrigin[8]*m,h=tmpTransformationRelToOrigin[1]*g+tmpTransformationRelToOrigin[5]*l+tmpTransformationRelToOrigin[9]*m,g=tmpTransformationRelToOrigin[2]*g+tmpTransformationRelToOrigin[6]*l+tmpTransformationRelToOrigin[10]*m,B.push(t,h,g,tmpTransformationRelToOrigin[12],tmpTransformationRelToOrigin[13],tmpTransformationRelToOrigin[14],
k,z,A,r+a,c,0),B.push(t,h,g,tmpTransformationRelToOrigin[12],tmpTransformationRelToOrigin[13],tmpTransformationRelToOrigin[14],k,z,A,r+a,c,1),c!==this._segments-1?x.push(2*c+e,2*c+2+e,2*c+3+e,2*c+e,2*c+3+e,2*c+1+e):x.push(2*c+e,0+e,1+e,2*c+e,1+e,2*c+1+e);for(c=0;c<this._segments-2;c++)x.push(1+e,2*c+3+e,2*c+5+e);f.vbo.addData(!0,new Float32Array(B));f.offset+=this._geometryVertexNum;f.ibo.addData(!0,new Uint32Array(x));f.vao&&(f.vao._initialized=!1)}return this._resetAddGeometries(),!0}return!1},
_loadShaders:function(){return this.inherited(arguments),this._material||(this._material=new M({pushState:this._pushState.bind(this),restoreState:this._restoreState.bind(this),gl:this._gl,viewingMode:this._view.viewingMode,shaderSnippets:this._shaderSnippets})),this._material.loadShaders()},_initColorBar:function(){if(!this._colorBarDirty)return!0;this._colorBarTexture||(this._colorBarTexture=this._gl.createTexture());var b=this._gl.getParameter(32873);this._gl.bindTexture(3553,this._colorBarTexture);
this._gl.pixelStorei(37440,!0);this._gl.texParameteri(3553,10240,9728);this._gl.texParameteri(3553,10241,9728);this._gl.texParameteri(3553,10242,33071);this._gl.texParameteri(3553,10243,33071);var a=d.createColorBarTexture(32,1,this.renderingInfo.topColors);return this._gl.texImage2D(3553,0,6408,6408,5121,a),this._gl.generateMipmap(3553),this._gl.bindTexture(3553,b),0===this._gl.getError()},_localBinds:function(b,a){b.bind(this._material._program);this._vertexBufferLayout.enableVertexAttribArrays(this._gl,
this._material._program);a.bind()},_bindBuffer:function(b,a,d){b?(b._initialized||b.initialize(this._localBindsCallback,[a,d]),b.bind()):this._localBinds(a,d)},_unBindBuffer:function(b,a,d){b?b.unbind():(a.unbind(),this._vertexBufferLayout.disableVertexAttribArrays(this._gl,this._material._program),d.unbind())},render:function(b,a){if(this.inherited(arguments),this._layer.visible&&this.ready&&this._bindPramsReady()){this._hasSentReady||(this._layer.emit("fx3d-ready"),this._hasSentReady=!0);this._sizeInMeters[0]=
this.renderingInfo.radius;this._sizeInMeters[1]=this._scopes.height[0];this._sizeInMeters[2]=this.renderingInfo.height;this._material.bind(v.mixin({},{so:this._vizFieldVerTextures[this._vizFieldDefault],pl:this._vizFieldVerTextures[this._vizFields[this._currentVizPage]],pi:this._vizFieldVerTextureSize,op:this.renderingInfo.animationInterval,ol:this._sizeInMeters,pe:this.renderingInfo.transparency,oi:this.renderingInfo.bottomColor,si:this._vizFieldMinMaxs[this._vizFieldDefault].min>this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].min?
this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].min:this._vizFieldMinMaxs[this._vizFieldDefault].min,sl:this._vizFieldMinMaxs[this._vizFieldDefault].max>this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].max?this._vizFieldMinMaxs[this._vizFieldDefault].max:this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]].max,ss:1/this._segments,ls:this._colorBarTexture},b),a);for(var d in this._renderObjects)renderObjectItem=this._renderObjects[d],p.translate(tmpViewMat,b.view,renderObjectItem.origin),
this._material.bindMat4("viewMat",tmpViewMat),this._material.bindVec3fv("origin",renderObjectItem.origin),this._material.bindVec3f("camPos",b.viewInvTransp[3]-renderObjectItem.origin[0],b.viewInvTransp[7]-renderObjectItem.origin[1],b.viewInvTransp[11]-renderObjectItem.origin[2]),this._bindBuffer(renderObjectItem.vao,renderObjectItem.vbo,renderObjectItem.ibo),this._gl.drawElements(4,renderObjectItem.ibo.getNum(),5125,0);this._material.release(a);this._unBindBuffer(renderObjectItem.vao,renderObjectItem.vbo,
renderObjectItem.ibo)}}})});