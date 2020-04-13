//>>built
define(["dojo/_base/declare","../support/fx3dUtils"],function(e,d){var f=0;return e(null,{declaredClass:"esri.views.3d.webgl-engine-extensions.GLVerTexture",constructor:function(a){this.id=f++;this._gl=a;this._ready=!1;this._pixelDataType=null;this._gl&&(this._textureHandle=this._gl.createTexture())},_initParams:function(){this._gl.texParameteri(3553,10242,33071);this._gl.texParameteri(3553,10243,33071);this._gl.texParameteri(3553,10240,9728);this._gl.texParameteri(3553,10241,9728)},_reset:function(a,
b){this._width=a;this._height=b;this._pixelSize=window.parseInt(this._width*this._height*4);(this._isPowerOfTwo=d.isPowerOfTwo(a)&&d.isPowerOfTwo(b))||console.warn("Width and height are not power of 2, and the rendering may be incorrect.")},setData:function(a,b,c){if(this._textureHandle){if(c instanceof Uint8Array)this._pixelDataType=5121;else{if(!(c instanceof Float32Array))return;this._pixelDataType=5126}if(this._reset(a,b),isNaN(this._pixelSize)||this._pixelSize!==c.length)return void console.warn("The pixel size is invalid.");
a=this._gl.getParameter(32873);this._gl.bindTexture(3553,this._textureHandle);this._initParams();this._gl.texImage2D(3553,0,window.WebGLRenderingContext&&this._gl instanceof window.WebGLRenderingContext?this._gl.RGBA:this._gl.RGBA32F,this._width,this._height,0,this._gl.RGBA,this._pixelDataType,c);this._gl.bindTexture(3553,a)}},bind:function(a){this._textureHandle&&("number"==typeof a&&this._gl.activeTexture(33984+a),this._gl.bindTexture(3553,this._textureHandle))},unbind:function(){this._gl.bindTexture(3553,
null)},release:function(){this._gl.bindTexture(3553,null)},getTextureHandle:function(){return this._textureHandle},dispose:function(){this._textureHandle.__deleted__=!0;this._gl.deleteTexture(this._textureHandle)}})});