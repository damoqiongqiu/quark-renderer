import guid from '../core/utils/guid';
import Eventful from '../event/Eventful';
import Transformable from './transform/Transformable';
import Animatable from '../animation/Animatable';
import * as dataUtil from '../core/utils/data_structure_util';
import * as classUtil from '../core/utils/class_util';
/**
 * @class qrenderer.graphic.Element
 * 
 * Root class, everything in QuarkRenderer is an Element. 
 * This is an abstract class, please don't creat an instance directly.
 * 
 * 根类，QRenderer 中所有对象都是 Element 的子类。这是一个抽象类，请不要直接创建这个类的实例。
 * 
 * @docauthor 大漠穷秋 <damoqiongqiu@126.com>
 */
class Element{
    /**
     * @method constructor Element
     */
    constructor(options){
        /**
         * @protected
         * @property options 配置项
         */
        this.options=options;
    
        /**
         * @property {String} id
         */
        this.id = this.options.id || guid();

        /**
         * @property {String} type 元素类型
         */
        this.type='element';
    
        /**
         * @property {String} name 元素名字
         */
        this.name='';
    
        /**
         * @private
         * @property {QuarkRenderer} __qr
         * 
         * QuarkRenderer instance will be assigned when element is associated with qrenderer
         * 
         * QuarkRenderer 实例对象，会在 element 添加到 qrenderer 实例中后自动赋值
         */
        this.__qr=null;
    
        /**
         * @private
         * @property {Boolean} __dirty
         * 
         * Dirty flag. From which painter will determine if this displayable object needs to be repainted.
         * 
         * 这是一个非常重要的标志位，在绘制大量对象的时候，把 __dirty 标记为 false 可以节省大量操作。
         */
        this.__dirty=true;
    
        /**
         * @private
         * @property  _rect
         */
        this._rect=null;
    
        /**
         * @property {Boolean} ignore
         * 
         * Whether ignore drawing and events of this object.
         * 
         * 为 true 时忽略图形的绘制以及事件触发
         */
        this.ignore=false;
    
        /**
         * @property {Path} clipPath
         * 
         * This is used for clipping path, all the paths inside Group will be clipped by this path, 
         * which will inherit the transformation of the clipped object.
         * 
         * 用于裁剪的路径，所有 Group 内的路径在绘制时都会被这个路径裁剪，该路径会继承被裁减对象的变换。
         * 
         * @readOnly
         * @see http://www.w3.org/TR/2dcontext/#clipping-region
         */
        this.clipPath=null;
    
        /**
         * @property {Boolean} isGroup
         * 
         * Whether this object is a Group.
         * 
         * 是否是 Group
         */
        this.isGroup=false;

        classUtil.inheritProperties(this,Transformable,this.options);
        classUtil.inheritProperties(this,Eventful,this.options);
        classUtil.inheritProperties(this,Animatable,this.options);
        classUtil.copyOwnProperties(this,this.options);
    }

    /**
     * @method
     * 
     * Drift element
     * 
     * 移动元素
     * 
     * @param  {Number} dx dx on the global space
     * @param  {Number} dy dy on the global space
     */
    drift(dx, dy) {
        switch (this.draggable) {
            case 'horizontal':
                dy = 0;
                break;
            case 'vertical':
                dx = 0;
                break;
        }

        let m = this.transform;
        if (!m) {
            m = this.transform = [1, 0, 0, 1, 0, 0];
        }
        m[4] += dx;
        m[5] += dy;

        this.decomposeTransform();
        this.dirty(false);
    }

    /**
     * @property {Function} beforeUpdate
     * 
     * Hook before update.
     * 
     * 刷新之前回调。
     */
    beforeUpdate() {}

    /**
     * @property {Function} update
     * 
     * Update each frame.
     * 
     * 刷新，每一帧回调。
     */
    update() {
        this.updateTransform();
    }

    /**
     * @property {Function} afterUpdate
     * 
     * Hook after update.
     * 
     * 刷新之后回调。
     */
    afterUpdate() {}
    
    /**
     * @property {Function} traverse
     * @param  {Function} cb
     * @param  {Object}   context
     */
    traverse(cb, context) {}

    /**
     * @protected
     * @method attrKV
     * @param {String} key
     * @param {Object} value
     */
    attrKV(key, value) {
        if (key === 'position' || key === 'scale' || key === 'origin') {
            // Copy the array
            if (value) {
                let target = this[key];
                if (!target) {
                    target = this[key] = [];
                }
                target[0] = value[0];
                target[1] = value[1];
            }
        }else {
            this[key] = value;
        }
    }

    /**
     * @method hide
     * 
     * Hide the element.
     * 
     * 隐藏元素。
     */
    hide() {
        this.ignore = true;
        this.__qr && this.__qr.refresh();
    }

    /**
     * @method show
     * 
     * Show the element.
     * 
     * 显示元素。
     */
    show() {
        this.ignore = false;
        this.__qr && this.__qr.refresh();
    }

    /**
     * @method attr
     * 
     * Modify attribute.
     * 
     * 修改对象上的属性。
     * 
     * @param {String|Object} key
     * @param {*} value
     */
    attr(key, value) {
        if (typeof key === 'String') {
            this.attrKV(key, value);
        }else if (dataUtil.isObject(key)) {
            for (let name in key) {
                if (key.hasOwnProperty(name)) {
                    this.attrKV(name, key[name]);
                }
            }
        }
        this.dirty(false);
        return this;
    }

    /**
     * @method setClipPath
     * 
     * Set the clip path.
     * 
     * 设置剪裁路径。
     * 
     * @param {Path} clipPath
     */
    setClipPath(clipPath) {
        let qr = this.__qr;
        if (qr) {
            clipPath.addSelfToQr(qr);
        }

        // Remove previous clip path
        if (this.clipPath && this.clipPath !== clipPath) {
            this.removeClipPath();
        }

        this.clipPath = clipPath;
        clipPath.__qr = qr;
        clipPath.__clipTarget = this;

        //TODO: FIX this，需要重写一下，考虑把 Element 类和 Displayable 类合并起来。
        //dirty() 方法定义在子类 Displayable 中，这里似乎不应该直接调用，作为父类的 Element 不应该了解子类的实现，否则不易理解和维护。
        //另，Displayable 中的 dirty() 方法没有参数，而孙类 Path 中的 dirty() 方法有参数。
        this.dirty(false);
    }

    /**
     * @method removeClipPath
     * 
     * Remove the clip path.
     * 
     * 删除剪裁路径。
     * 
     */
    removeClipPath() {
        let clipPath = this.clipPath;
        if (clipPath) {
            if (clipPath.__qr) {
                clipPath.removeSelfFromQr(clipPath.__qr);
            }

            clipPath.__qr = null;
            clipPath.__clipTarget = null;
            this.clipPath = null;

            this.dirty(false);
        }
    }

    /**
     * @protected
     * @method dirty
     * 
     * Mark displayable element dirty and refresh next frame.
     * 
     * 把元素标记成脏的，在下一帧中刷新。
     */
    dirty() {
        this.__dirty = this.__dirtyText = true;
        this._rect = null;
        this.__qr && this.__qr.refresh();
    }

    /**
     * @method addSelfToQr
     * Add self to qrenderer instance.
     * Not recursively because it will be invoked when element added to storage.
     * 
     * 把当前对象添加到 qrenderer 实例中去。
     * 不会递归添加，因为当元素被添加到 storage 中的时候会执行递归操作。
     * 
     * @param {QuarkRenderer} qr
     */
    addSelfToQr(qr) {
        this.__qr = qr;
        // 添加动画
        let animationProcessList = this.animationProcessList;
        if (animationProcessList) {
            for (let i = 0; i < animationProcessList.length; i++) {
                qr.globalAnimationMgr.addAnimationProcess(animationProcessList[i]);
            }
        }

        if (this.clipPath) {
            this.clipPath.addSelfToQr(qr);
        }
    }

    /**
     * @method removeSelfFromQr
     * Remove self from qrenderer instance.
     * 
     * 把当前对象从 qrenderer 实例中删除。
     * 
     * @param {QuarkRenderer} qr
     */
    removeSelfFromQr(qr) {
        this.__qr = null;
        // 移除动画
        let animationProcessList = this.animationProcessList;
        if (animationProcessList) {
            for (let i = 0; i < animationProcessList.length; i++) {
                qr.globalAnimationMgr.removeAnimationProcess(animationProcessList[i]);
            }
        }

        if (this.clipPath) {
            this.clipPath.removeSelfFromQr(qr);
        }
    }
}

classUtil.mixin(Element, Animatable);
classUtil.mixin(Element, Transformable);
classUtil.mixin(Element, Eventful);

export default Element;