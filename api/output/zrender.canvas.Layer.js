Ext.data.JsonP.zrender_canvas_Layer({"tagname":"class","name":"zrender.canvas.Layer","autodetected":{},"files":[{"filename":"CanvasLayer.js","href":"CanvasLayer.html#zrender-canvas-Layer"}],"author":[{"tagname":"author","name":"pissang(https://www.github.com/pissang)","email":null}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"Layer","tagname":"property","owner":"zrender.canvas.Layer","id":"property-Layer","meta":{}},{"name":"clearColor","tagname":"property","owner":"zrender.canvas.Layer","id":"property-clearColor","meta":{}},{"name":"lastFrameAlpha","tagname":"property","owner":"zrender.canvas.Layer","id":"property-lastFrameAlpha","meta":{}},{"name":"motionBlur","tagname":"property","owner":"zrender.canvas.Layer","id":"property-motionBlur","meta":{}},{"name":"constructor","tagname":"method","owner":"zrender.canvas.Layer","id":"method-constructor","meta":{}},{"name":"clear","tagname":"method","owner":"zrender.canvas.Layer","id":"method-clear","meta":{}},{"name":"createBackBuffer","tagname":"method","owner":"zrender.canvas.Layer","id":"method-createBackBuffer","meta":{}},{"name":"createDom","tagname":"method","owner":"zrender.canvas.Layer","id":"method-createDom","meta":{"private":true}},{"name":"getElementCount","tagname":"method","owner":"zrender.canvas.Layer","id":"method-getElementCount","meta":{}},{"name":"initContext","tagname":"method","owner":"zrender.canvas.Layer","id":"method-initContext","meta":{}},{"name":"resize","tagname":"method","owner":"zrender.canvas.Layer","id":"method-resize","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-zrender.canvas.Layer","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/CanvasLayer.html#zrender-canvas-Layer' target='_blank'>CanvasLayer.js</a></div></pre><div class='doc-contents'><p>用来创建 canvas 层，在 Painter 类中会引用此类。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Layer' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-property-Layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-property-Layer' class='name expandable'>Layer</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>dpr</p>\n</div><div class='long'><p>dpr</p>\n</div></div></div><div id='property-clearColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-property-clearColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-property-clearColor' class='name expandable'>clearColor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>每次清空画布的颜色 ...</div><div class='long'><p>每次清空画布的颜色</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-lastFrameAlpha' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-property-lastFrameAlpha' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-property-lastFrameAlpha' class='name expandable'>lastFrameAlpha</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显 ...</div><div class='long'><p>在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显</p>\n<p>Defaults to: <code>0.7</code></p></div></div></div><div id='property-motionBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-property-motionBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-property-motionBlur' class='name expandable'>motionBlur</a> : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否开启动态模糊 ...</div><div class='long'><p>是否开启动态模糊</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/zrender.canvas.Layer-method-constructor' class='name expandable'>zrender.canvas.Layer</a>( <span class='pre'>id, painter, [dpr]</span> ) : <a href=\"#!/api/zrender.canvas.Layer\" rel=\"zrender.canvas.Layer\" class=\"docClass\">zrender.canvas.Layer</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Layer ...</div><div class='long'><p>Layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>painter</span> : Painter<div class='sub-desc'>\n</div></li><li><span class='pre'>dpr</span> : Number (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.canvas.Layer\" rel=\"zrender.canvas.Layer\" class=\"docClass\">zrender.canvas.Layer</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-method-clear' class='name expandable'>clear</a>( <span class='pre'>[clearAll], [clearColor]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>清空该层画布 ...</div><div class='long'><p>清空该层画布</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clearAll</span> : boolean (optional)<div class='sub-desc'><p>Clear all with out motion blur</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>clearColor</span> : Color (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createBackBuffer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-method-createBackBuffer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-method-createBackBuffer' class='name expandable'>createBackBuffer</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createDom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-method-createDom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-method-createDom' class='name expandable'>createDom</a>( <span class='pre'>id, painter, number</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>创建dom ...</div><div class='long'><p>创建dom</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>dom id 待用</p>\n</div></li><li><span class='pre'>painter</span> : Painter<div class='sub-desc'><p>painter instance</p>\n</div></li><li><span class='pre'>number</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElementCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-method-getElementCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-method-getElementCount' class='name expandable'>getElementCount</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-method-initContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-method-initContext' class='name expandable'>initContext</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.canvas.Layer'>zrender.canvas.Layer</span><br/><a href='source/CanvasLayer.html#zrender-canvas-Layer-method-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.canvas.Layer-method-resize' class='name expandable'>resize</a>( <span class='pre'>width, height</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});