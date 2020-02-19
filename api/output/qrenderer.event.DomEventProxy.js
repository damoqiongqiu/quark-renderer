Ext.data.JsonP.qrenderer_event_DomEventProxy({"tagname":"class","name":"qrenderer.event.DomEventProxy","autodetected":{},"files":[{"filename":"DomEventProxy.js","href":"DomEventProxy.html#qrenderer-event-DomEventProxy"}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-","meta":{}},{"name":"_globalHandlerScope","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-_globalHandlerScope","meta":{"private":true}},{"name":"_localHandlerScope","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-_localHandlerScope","meta":{"private":true}},{"name":"_pageEventEnabled","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-_pageEventEnabled","meta":{"private":true}},{"name":"dom","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-dom","meta":{}},{"name":"globalDOMHandlers","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-globalDOMHandlers","meta":{}},{"name":"localDOMHandlers","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-localDOMHandlers","meta":{}},{"name":"localNativeListenerNames","tagname":"property","owner":"qrenderer.event.DomEventProxy","id":"property-localNativeListenerNames","meta":{}},{"name":"constructor","tagname":"method","owner":"qrenderer.event.DomEventProxy","id":"method-constructor","meta":{}},{"name":"dispose","tagname":"method","owner":"qrenderer.event.DomEventProxy","id":"method-dispose","meta":{"private":true}},{"name":"mountDOMEventListeners","tagname":"method","owner":"qrenderer.event.DomEventProxy","id":"method-mountDOMEventListeners","meta":{"private":true}},{"name":"setCursor","tagname":"method","owner":"qrenderer.event.DomEventProxy","id":"method-setCursor","meta":{"private":true}},{"name":"setTouchTimer","tagname":"method","owner":"qrenderer.event.DomEventProxy","id":"method-setTouchTimer","meta":{}},{"name":"togglePageEvent","tagname":"method","owner":"qrenderer.event.DomEventProxy","id":"method-togglePageEvent","meta":{"private":true}},{"name":"unmountDOMEventListeners","tagname":"method","owner":"qrenderer.event.DomEventProxy","id":"method-unmountDOMEventListeners","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-qrenderer.event.DomEventProxy","short_doc":"DomEventProxy 的主要功能是：把原生的 DOM 事件代理（转发）到 QuarkRender 实例上，\n在 QuarkRendererEventHandler 类中会把事件进一步分发给 canvas 中绘制的元素。 ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy' target='_blank'>DomEventProxy.js</a></div></pre><div class='doc-contents'><p>DomEventProxy 的主要功能是：把原生的 DOM 事件代理（转发）到 QuarkRender 实例上，\n在 QuarkRendererEventHandler 类中会把事件进一步分发给 canvas 中绘制的元素。\n需要转发的大部分 DOM 事件挂载在 canvas 的外层容器 div 上面，例如：click, dbclick ；\n少部分 DOM 事件挂载在 document 对象上，例如：mousemove, mouseout。因为在实现拖拽和\n键盘交互的过程中，鼠标指针可能已经脱离了 canvas 所在的区域。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-' class='name expandable'></a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Othere DOM UI Event handlers for qr dom. ...</div><div class='long'><p>Othere DOM UI Event handlers for qr dom.\nQuarkRender 内部的 DOM 结构默认支持以下7个事件。\n@this {DomEventProxy}</p>\n</div></div></div><div id='property-_globalHandlerScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-_globalHandlerScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-_globalHandlerScope' class='name expandable'>_globalHandlerScope</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_localHandlerScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-_localHandlerScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-_localHandlerScope' class='name expandable'>_localHandlerScope</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_pageEventEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-_pageEventEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-_pageEventEnabled' class='name expandable'>_pageEventEnabled</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-dom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-dom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-dom' class='name expandable'>dom</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-globalDOMHandlers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-globalDOMHandlers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-globalDOMHandlers' class='name expandable'>globalDOMHandlers</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>这里用来监听外层 HTML 里面的 DOM 事件。监听这些事件的目的是为了方便实现拖拽功能，因为\n一旦鼠标离开 Canvas 的区域，就无法触发 Canvas 内部的 mousemove 和 mouseup 事件，这里直接\n监听外层 ...</div><div class='long'><p>这里用来监听外层 HTML 里面的 DOM 事件。监听这些事件的目的是为了方便实现拖拽功能，因为\n一旦鼠标离开 Canvas 的区域，就无法触发 Canvas 内部的 mousemove 和 mouseup 事件，这里直接\n监听外层 HTML 上的 mousemove 和 mouseup，绕开这种问题。</p>\n\n<p>Page DOM UI Event handlers for global page.\n@this {DomEventProxy}</p>\n</div></div></div><div id='property-localDOMHandlers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-localDOMHandlers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-localDOMHandlers' class='name expandable'>localDOMHandlers</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Local 指的是 Canvas 内部的区域。 ...</div><div class='long'><p>Local 指的是 Canvas 内部的区域。\nLocal DOM Handlers\n@this {DomEventProxy}</p>\n</div></div></div><div id='property-localNativeListenerNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-property-localNativeListenerNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-property-localNativeListenerNames' class='name expandable'>localNativeListenerNames</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>[Page Event]\n\"page events\" are pagemousemove and pagemouseup. ...</div><div class='long'><p>[Page Event]\n\"page events\" are <code>pagemousemove</code> and <code>pagemouseup</code>.\nThey are triggered when a user pointer interacts on the whole webpage\nrather than only inside the qrenderer area.</p>\n\n<p>The use case of page events can be, for example, if we are implementing a dragging feature:\n```js\nqr.on('mousedown', function (event) {\n    let dragging = true;</p>\n\n<pre><code>// Listen to `pagemousemove` and `pagemouseup` rather than `mousemove` and `mouseup`,\n// because `mousemove` and `mouseup` will not be triggered when the pointer is out\n// of the qrenderer area.\nqr.on('pagemousemove', handleMouseMove);\nqr.on('pagemouseup', handleMouseUp);\n\nfunction handleMouseMove(event) {\n    if (dragging) { ... }\n}\nfunction handleMouseUp(event) {\n    dragging = false; ...\n    qr.off('pagemousemove', handleMouseMove);\n    qr.off('pagemouseup', handleMouseUp);\n}\n</code></pre>\n\n<p>});\n```</p>\n\n<p>(1) There are cases that <code>pagemousexxx</code> will not be triggered when the pointer is out of\nqrenderer area:\n\"document.eventUtil.addEventListener\" is not available in the current runtime environment,\nor there is any <code>stopPropagation</code> called at some user defined listeners on the ancestors\nof the qrenderer dom.\n(2) Although those bad cases exist, users do not need to worry about that. That is, if you\nlisten to <code>pagemousexxx</code>, you do not need to listen to the correspoinding event <code>mousexxx</code>\nany more.\nBecuase inside qrenderer area, <code>pagemousexxx</code> will always be triggered, where they are\ntriggered just after <code>mousexxx</code> triggered and sharing the same event object. Those bad\ncases only happen when the pointer is out of qrenderer area.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/qrenderer.event.DomEventProxy-method-constructor' class='name expandable'>qrenderer.event.DomEventProxy</a>( <span class='pre'>dom</span> ) : <a href=\"#!/api/qrenderer.event.DomEventProxy\" rel=\"qrenderer.event.DomEventProxy\" class=\"docClass\">qrenderer.event.DomEventProxy</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dom</span> : Object<div class='sub-desc'><p>被代理的 DOM 节点</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/qrenderer.event.DomEventProxy\" rel=\"qrenderer.event.DomEventProxy\" class=\"docClass\">qrenderer.event.DomEventProxy</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dispose' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-method-dispose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-method-dispose' class='name expandable'>dispose</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-mountDOMEventListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-method-mountDOMEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-method-mountDOMEventListeners' class='name expandable'>mountDOMEventListeners</a>( <span class='pre'>domEventProxy, domHandlerScope, nativeListenerNames, localOrGlobal</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>domEventProxy</span> : DomEventProxy<div class='sub-desc'>\n</div></li><li><span class='pre'>domHandlerScope</span> : DOMHandlerScope<div class='sub-desc'>\n</div></li><li><span class='pre'>nativeListenerNames</span> : Object<div class='sub-desc'><p>{mouse: Array<String>, touch: Array<String>, poiner: Array<String>}</String></String></String></p>\n</div></li><li><span class='pre'>localOrGlobal</span> : Boolean<div class='sub-desc'><p><code>true</code>: target local, <code>false</code>: target global.</p>\n</div></li></ul></div></div></div><div id='method-setCursor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-method-setCursor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-method-setCursor' class='name expandable'>setCursor</a>( <span class='pre'>cursorStyle</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cursorStyle</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setTouchTimer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-method-setTouchTimer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-method-setTouchTimer' class='name expandable'>setTouchTimer</a>( <span class='pre'>scope</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Prevent mouse event from being dispatched after Touch Events action\n@see https://github.com/deltakosh/handjs/blob/mas...</div><div class='long'><p>Prevent mouse event from being dispatched after Touch Events action\n@see <a href=\"https://github.com/deltakosh/handjs/blob/master/src/hand.base.js\">https://github.com/deltakosh/handjs/blob/master/src/hand.base.js</a>\n1. Mobile browsers dispatch mouse events 300ms after touchend.\n2. Chrome for Android dispatch mousedown for long-touch about 650ms\nResult: Blocking Mouse Events for 700ms.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : DOMHandlerScope<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-togglePageEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-method-togglePageEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-method-togglePageEvent' class='name expandable'>togglePageEvent</a>( <span class='pre'>enableOrDisable</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The implementation of page event depends on listening to document. ...</div><div class='long'><p>The implementation of page event depends on listening to document.\nSo we should better only listen to that on needed, and remove the\nlisteners when do not need them to escape unexpected side-effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>enableOrDisable</span> : Boolean<div class='sub-desc'><p><code>true</code>: enable page event. <code>false</code>: disable page event.</p>\n</div></li></ul></div></div></div><div id='method-unmountDOMEventListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.DomEventProxy'>qrenderer.event.DomEventProxy</span><br/><a href='source/DomEventProxy.html#qrenderer-event-DomEventProxy-method-unmountDOMEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.DomEventProxy-method-unmountDOMEventListeners' class='name expandable'>unmountDOMEventListeners</a>( <span class='pre'>scope</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});