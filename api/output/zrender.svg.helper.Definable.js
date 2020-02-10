Ext.data.JsonP.zrender_svg_helper_Definable({"tagname":"class","name":"zrender.svg.helper.Definable","autodetected":{},"files":[{"filename":"Definable.js","href":"Definable.html#zrender-svg-helper-Definable"}],"author":[{"tagname":"author","name":"Zhang Wenli","email":null}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋 damoqiongqiu@126.com","email":null}],"members":[{"name":"constructor","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-constructor","meta":{}},{"name":"addDom","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-addDom","meta":{}},{"name":"getDefs","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-getDefs","meta":{}},{"name":"getDoms","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-getDoms","meta":{}},{"name":"getSvgElement","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-getSvgElement","meta":{}},{"name":"getSvgProxy","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-getSvgProxy","meta":{}},{"name":"getTextSvgElement","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-getTextSvgElement","meta":{}},{"name":"markAllUnused","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-markAllUnused","meta":{}},{"name":"markUsed","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-markUsed","meta":{}},{"name":"removeDom","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-removeDom","meta":{}},{"name":"removeUnused","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-removeUnused","meta":{}},{"name":"update","tagname":"method","owner":"zrender.svg.helper.Definable","id":"method-update","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-zrender.svg.helper.Definable","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Definable.html#zrender-svg-helper-Definable' target='_blank'>Definable.js</a></div></pre><div class='doc-contents'><p>Manages elements that can be defined in <defs> in SVG,\n      e.g., gradients, clip path, etc.</defs></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/zrender.svg.helper.Definable-method-constructor' class='name expandable'>zrender.svg.helper.Definable</a>( <span class='pre'>zrId, svgRoot, tagNames, markLabel</span> ) : <a href=\"#!/api/zrender.svg.helper.Definable\" rel=\"zrender.svg.helper.Definable\" class=\"docClass\">zrender.svg.helper.Definable</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Definable\n\nManages elements that can be defined in  in SVG,\ne.g., gradients, clip path, etc. ...</div><div class='long'><p>Definable</p>\n\n<p>Manages elements that can be defined in <defs> in SVG,\ne.g., gradients, clip path, etc.</defs></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zrId</span> : Number<div class='sub-desc'><p>zrender instance id</p>\n</div></li><li><span class='pre'>svgRoot</span> : SVGElement<div class='sub-desc'><p>root of SVG document</p>\n</div></li><li><span class='pre'>tagNames</span> : String|String[]<div class='sub-desc'><p>possible tag names</p>\n</div></li><li><span class='pre'>markLabel</span> : String<div class='sub-desc'><p>label name to make if the element\n                                   is used</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.svg.helper.Definable\" rel=\"zrender.svg.helper.Definable\" class=\"docClass\">zrender.svg.helper.Definable</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addDom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-addDom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-addDom' class='name expandable'>addDom</a>( <span class='pre'>dom</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add gradient dom to defs ...</div><div class='long'><p>Add gradient dom to defs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dom</span> : SVGElement<div class='sub-desc'><p>DOM to be added to <defs></defs></p>\n</div></li></ul></div></div></div><div id='method-getDefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-getDefs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-getDefs' class='name expandable'>getDefs</a>( <span class='pre'>isForceCreating</span> ) : SVGDefsElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the  tag for svgRoot; optionally creates one if not exists. ...</div><div class='long'><p>Get the <defs> tag for svgRoot; optionally creates one if not exists.</defs></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isForceCreating</span> : Boolean<div class='sub-desc'><p>if need to create when not exists</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>SVGDefsElement</span><div class='sub-desc'><p>SVG <defs> element, null if it doesn't exist and isForceCreating is false</defs></p>\n</div></li></ul></div></div></div><div id='method-getDoms' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-getDoms' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-getDoms' class='name expandable'>getDoms</a>( <span class='pre'></span> ) : HTMLDomElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Get DOMs of this element. ...</div><div class='long'><p>Get DOMs of this element.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLDomElement</span><div class='sub-desc'><p>doms of this defineable elements in <defs></defs></p>\n</div></li></ul></div></div></div><div id='method-getSvgElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-getSvgElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-getSvgElement' class='name expandable'>getSvgElement</a>( <span class='pre'>displayable</span> ) : SVGElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Get SVG element. ...</div><div class='long'><p>Get SVG element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayable</span> : Displayable<div class='sub-desc'><p>displayable element</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>SVGElement</span><div class='sub-desc'><p>SVG element</p>\n</div></li></ul></div></div></div><div id='method-getSvgProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-getSvgProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-getSvgProxy' class='name expandable'>getSvgProxy</a>( <span class='pre'>displayable</span> ) : Path|Image|Text<span class=\"signature\"></span></div><div class='description'><div class='short'>Get SVG proxy. ...</div><div class='long'><p>Get SVG proxy.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayable</span> : Displayable<div class='sub-desc'><p>displayable element</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Path|Image|Text</span><div class='sub-desc'><p>svg proxy of given element</p>\n</div></li></ul></div></div></div><div id='method-getTextSvgElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-getTextSvgElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-getTextSvgElement' class='name expandable'>getTextSvgElement</a>( <span class='pre'>displayable</span> ) : SVGElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Get text SVG element. ...</div><div class='long'><p>Get text SVG element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayable</span> : Displayable<div class='sub-desc'><p>displayable element</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>SVGElement</span><div class='sub-desc'><p>SVG element of text</p>\n</div></li></ul></div></div></div><div id='method-markAllUnused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-markAllUnused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-markAllUnused' class='name expandable'>markAllUnused</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Mark DOMs to be unused before painting, and clear unused ones at the end\nof the painting. ...</div><div class='long'><p>Mark DOMs to be unused before painting, and clear unused ones at the end\nof the painting.</p>\n</div></div></div><div id='method-markUsed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-markUsed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-markUsed' class='name expandable'>markUsed</a>( <span class='pre'>dom</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Mark a single DOM to be used. ...</div><div class='long'><p>Mark a single DOM to be used.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dom</span> : SVGElement<div class='sub-desc'><p>DOM to mark</p>\n</div></li></ul></div></div></div><div id='method-removeDom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-removeDom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-removeDom' class='name expandable'>removeDom</a>( <span class='pre'>element</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove DOM of a given element. ...</div><div class='long'><p>Remove DOM of a given element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : SVGElement<div class='sub-desc'><p>element to remove dom</p>\n</div></li></ul></div></div></div><div id='method-removeUnused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-removeUnused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-removeUnused' class='name expandable'>removeUnused</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove unused DOMs defined in ...</div><div class='long'><p>Remove unused DOMs defined in <defs></defs></p>\n</div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.helper.Definable'>zrender.svg.helper.Definable</span><br/><a href='source/Definable.html#zrender-svg-helper-Definable-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.helper.Definable-method-update' class='name expandable'>update</a>( <span class='pre'>element, onUpdate</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Update DOM element if necessary. ...</div><div class='long'><p>Update DOM element if necessary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object|String<div class='sub-desc'><p>style element. e.g., for gradient,\n                               it may be '#ccc' or {type: 'linear', ...}</p>\n</div></li><li><span class='pre'>onUpdate</span> : Function|undefined<div class='sub-desc'><p>update callback</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});