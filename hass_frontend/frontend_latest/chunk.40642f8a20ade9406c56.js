/*! For license information please see chunk.40642f8a20ade9406c56.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[71,6,7,8,127],{108:function(e,t,i){"use strict";i(5),i(109),i(42);var a=i(57),n=i(6),o=i(3);Object(n.a)({is:"paper-icon-button",_template:o.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[a.a],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var i=this.getAttribute("aria-label");i&&t!=i||this.setAttribute("aria-label",e)}})},109:function(e,t,i){"use strict";i(45),i(47);var a=i(6),n=i(1),o=i(3),s=i(5);Object(a.a)({_template:o.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(n.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(n.a)(this.root).appendChild(this._img))}})},110:function(e,t,i){"use strict";i(5);var a=i(31),n=i(6),o=i(1),s=i(3),r={distance:function(e,t,i,a){var n=e-i,o=t-a;return Math.sqrt(n*n+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function l(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function c(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(o.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}l.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=r.distance(e,t,0,0),a=r.distance(e,t,this.width,0),n=r.distance(e,t,0,this.height),o=r.distance(e,t,this.width,this.height);return Math.max(i,a,n,o)}},c.MAX_RADIUS=300,c.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=r.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?r.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),c.MAX_RADIUS)+5,a=1.1-i/c.MAX_RADIUS*.2,n=this.mouseInteractionSeconds/a,o=i*(1-Math.pow(80,-n));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new l(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=r.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=r.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=r.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=r.now())},remove:function(){Object(o.a)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Object(n.a)({_template:s.a`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[a.a],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=Object(o.a)(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var e=new c(this);return Object(o.a)(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}})},111:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(5);const a={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return Math.min(this.max,Math.max(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Math.round((e-this.min)/this.step);return this.step<1?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}},113:function(e,t,i){"use strict";i(5);var a=i(94),n=i(61),o=i(6),s=i(1),r=i(3);Object(o.a)({_template:r.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[n.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){a.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(s.a)(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(s.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,i=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&i)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(i)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=n.a.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}})},118:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var a=i(9),n=i(18);const o=Object(a.a)(e=>(class extends e{fire(e,t,i){return i=i||{},Object(n.a)(i.node||this,e,t,i)}}))},119:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return s})),i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return l})),i.d(t,"i",(function(){return c})),i.d(t,"f",(function(){return d})),i.d(t,"j",(function(){return p})),i.d(t,"k",(function(){return h})),i.d(t,"c",(function(){return u}));const a="hass:bookmark",n="lovelace",o=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],s=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","timer","updater","vacuum","water_heater","weather"],r=["input_number","input_select","input_text","scene","weblink"],l=["camera","configurator","history_graph","scene"],c=["closed","locked","off"],d=new Set(["fan","input_boolean","light","switch","group","automation"]),p="°C",h="°F",u="group.default_view"},120:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(5);var a=i(55),n=i(35);const o=[a.a,n.a,{hostAttributes:{role:"option",tabindex:"0"}}]},121:function(e,t,i){"use strict";function a(e){return e.substr(0,e.indexOf("."))}i.d(t,"a",(function(){return a}))},122:function(e,t,i){"use strict";i(5);const a={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var a;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(a=e?this.animationConfig[e]:this.animationConfig,Array.isArray(a)||(a=[a]),a)for(var n,o=0;n=a[o];o++)if(n.animatable)n.animatable._getAnimationConfigRecursive(n.type||e,t,i);else if(n.id){var s=t[n.id];s?(s.isClone||(t[n.id]=this._cloneConfig(s),s=t[n.id]),this._copyProperties(s,n)):t[n.id]=n}else i.push(n)},getAnimationConfig:function(e){var t={},i=[];for(var a in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[a]);return i}};i.d(t,"a",(function(){return n}));const n=[a,{_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let o,s=0;o=e[s];s++){let e=document.createElement(o.name);if(e.isNeonAnimation){let t=null;e.configure||(e.configure=function(e){return null}),t=e.configure(o),i.push({result:t,config:o,neonAnimation:e})}else console.warn(this.is+":",o.name,"not found!")}for(var a=0;a<i.length;a++){let e=i[a].result,o=i[a].config,s=i[a].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(n){e=null,console.warn("Couldnt play","(",o.name,").",n)}e&&t.push({neonAnimation:s,config:o,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var a=this._configureAnimations(i);if(0!=a.length){this._active[e]=a;for(var n=0;n<a.length;n++)a[n].animation.onfinish=function(){this._shouldComplete(a)&&(this._complete(a),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}}]},123:function(e,t,i){"use strict";i(5);var a=i(60),n=i(61);const o={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},s=[a.a,n.a,o];var r=i(57),l=i(69);i.d(t,"a",(function(){return d}));const c={_checkedChanged:function(){o._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[r.a,s,c]},126:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(5);const a={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(e,t){return[e||t?"active":"",t?"cooldown":""].join(" ")},__activeChanged:function(e,t){this.__setAriaHidden(!e),this.__coolingDown=!e&&t},__altChanged:function(e){"loading"===e?this.alt=this.getAttribute("aria-label")||e:(this.__setAriaHidden(""===e),this.setAttribute("aria-label",e))},__setAriaHidden:function(e){e?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")},__reset:function(){this.active=!1,this.__coolingDown=!1}}},130:function(e,t,i){var a=i(156),n=["renderMarkdown"];e.exports=function(){var e=new Worker(i.p+"b94069a40c95c1313fad.worker.js",{name:"[hash].worker.js"});return a(e,n),e}},131:function(e,t,i){"use strict";i(108);const a=customElements.get("paper-icon-button");customElements.define("ha-paper-icon-button-arrow-prev",class extends a{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?this.hassio?"hassio:arrow-left":"hass:arrow-left":this.hassio?"hassio:arrow-right":"hass:arrow-right"},100)}})},132:function(e,t,i){"use strict";i(5);var a=i(6);Object(a.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}})},143:function(e,t,i){"use strict";i(5),i(45),i(145);var a=i(6),n=i(3),o=i(120);Object(a.a)({_template:n.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[o.a]})},144:function(e,t,i){"use strict";i(5),i(42);var a=i(125),n=i(6),o=i(3);Object(n.a)({_template:o.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[a.a],hostAttributes:{role:"listbox"}})},145:function(e,t,i){"use strict";i(45),i(68),i(42),i(54);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},146:function(e,t,i){"use strict";i(5),i(31),i(109),i(93),i(147),i(110),i(42),i(148),i(149);var a=i(55),n=i(35),o=i(60),s=i(61),r=i(6),l=i(1),c=i(36),d=i(3);Object(r.a)({_template:d.a`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[a.a,n.a,o.a,s.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){c.c(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}})},147:function(e,t,i){"use strict";i(5);var a=i(31),n=i(35),o=i(87),s=i(122),r=i(6),l=i(1),c=i(3);Object(r.a)({_template:c.a`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[n.a,a.a,o.a,s.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),o.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):o.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):o.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():o.b._applyFocus.apply(this,arguments)}});const d={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,i){for(var a,n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],o=0;a=n[o];o++)e.style[a]=i;e.style[t]=i},complete:function(e){}};Object(r.a)({is:"fade-in-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),Object(r.a)({is:"fade-out-animation",behaviors:[d],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});i(42),i(86);Object(r.a)({is:"paper-menu-grow-height-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(e)),this._effect}}),Object(r.a)({is:"paper-menu-grow-width-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(e)),this._effect}}),Object(r.a)({is:"paper-menu-shrink-width-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(e)),this._effect}}),Object(r.a)({is:"paper-menu-shrink-height-animation",behaviors:[d],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var p={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const h=Object(r.a)({_template:c.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[a.a,n.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:p.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){n.a._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,i=this.$.trigger;Object(l.a)(t).path.indexOf(i)>-1&&e.preventDefault()}});Object.keys(p).forEach((function(e){h[e]=p[e]}))},148:function(e,t,i){"use strict";i(88);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(a.content)},149:function(e,t,i){"use strict";i(42);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},150:function(e,t,i){"use strict";i(5),i(45);var a=i(6),n=i(3);Object(a.a)({_template:n.a`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"})},151:function(e,t,i){"use strict";const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper .circle {\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper .circle {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left .circle {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right .circle {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper .circle {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left .circle {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right .circle {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},153:function(e,t,i){"use strict";i(5),i(42);var a=i(123),n=i(57),o=i(6),s=i(3),r=i(62);const l=s.a`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;l.setAttribute("strip-whitespace",""),Object(o.a)({_template:l,is:"paper-checkbox",behaviors:[a.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(r.a)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),t="px",i=e.match(/[A-Za-z]+$/);null!==i&&(t=i[0]);var a=parseFloat(e),n=8/3*a;"px"===t&&(n=Math.floor(n))%2!=a%2&&n++,this.updateStyles({"--paper-checkbox-ink-size":n+t})}}))},_computeCheckboxClass:function(e,t){var i="";return e&&(i+="checked "),t&&(i+="invalid"),i},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,n.b._createRipple.call(this)}})},154:function(e,t,i){"use strict";var a=i(4),n=i(0),o=i(130),s=i.n(o),r=i(18);let l,c=class extends n.b{constructor(){super(...arguments),this.content="",this.allowSvg=!1,this._resize=()=>Object(r.a)(this,"iron-resize")}update(e){super.update(e),l||(l=s()()),this._render()}async _render(){this.innerHTML=await l.renderMarkdown(this.content,{breaks:!0,gfm:!0,tables:!0},{allowSvg:this.allowSvg}),this._resize();const e=document.createTreeWalker(this,1,null,!1);for(;e.nextNode();){const t=e.currentNode;t instanceof HTMLAnchorElement&&t.host!==document.location.host?(t.target="_blank",t.rel="noreferrer noopener"):t&&t.addEventListener("load",this._resize)}}};Object(a.b)([Object(n.g)()],c.prototype,"content",void 0),Object(a.b)([Object(n.g)({type:Boolean})],c.prototype,"allowSvg",void 0),c=Object(a.b)([Object(n.d)("ha-markdown")],c)},155:function(e,t,i){"use strict";i(5),i(45),i(68);var a=i(111),n=i(6),o=i(3);Object(n.a)({_template:o.a`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[a.a],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){var i="scaleX("+t/100+")";e.style.transform=e.style.webkitTransform=i},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,i,a,n){e=this._clampValue(e),t=this._clampValue(t);var o=100*this._calcRatio(e),s=100*this._calcRatio(t);this._setSecondaryRatio(o),this._transformProgress(this.$.secondaryProgress,o),this._transformProgress(this.$.primaryProgress,s),this.secondaryProgress=e,n?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",a)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}})},156:function(e,t){e.exports=function(e,t){var i=0,a={};e.addEventListener("message",(function(t){var i=t.data;if("RPC"===i.type)if(i.id){var n=a[i.id];n&&(delete a[i.id],i.error?n[1](Object.assign(Error(i.error.message),i.error)):n[0](i.result))}else{var o=document.createEvent("Event");o.initEvent(i.method,!1,!1),o.data=i.params,e.dispatchEvent(o)}})),t.forEach((function(t){e[t]=function(){for(var n=[],o=arguments.length;o--;)n[o]=arguments[o];return new Promise((function(o,s){var r=++i;a[r]=[o,s],e.postMessage({type:"RPC",id:r,method:t,params:n})}))}}))}},157:function(e,t,i){"use strict";i(45),i(93),i(155),i(68);var a=i(31),n=i(60),o=i(111),s=i(57),r=i(6),l=i(36);const c=i(5).c`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;c.setAttribute("strip-whitespace",""),Object(r.a)({_template:c,is:"paper-slider",behaviors:[a.a,n.a,s.a,o.a],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(l.f)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,i,a,n){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",i),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}},_trackStart:function(e){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,i=Math.min(this._maxx,Math.max(this._minx,e.detail.dx*t));this._x=this._startx+i;var a=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(a);var n=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(n+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),i=(e.detail.x-t.left)/this._w*100;this._isRTL&&(i=100-i);var a=this.ratio;this._setTransiting(!0),this._positionKnob(i),a===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,i,a){a||this._setMarkers([]);var n=Math.round((i-t)/this.step);n>e&&(n=e),(n<0||!isFinite(n))&&(n=0),this._setMarkers(new Array(n))},_mergeClasses:function(e){return Object.keys(e).filter((function(t){return e[t]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,s.b._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}})},158:function(e,t,i){"use strict";i(157);const a=customElements.get("paper-slider");customElements.define("ha-paper-slider",class extends a{static get template(){const e=document.createElement("template");e.innerHTML=a.template.innerHTML;const t=document.createElement("style");return t.innerHTML='\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ',e.content.appendChild(t),e}})},175:function(e,t,i){"use strict";var a=i(9);t.a=Object(a.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},176:function(e,t,i){"use strict";var a=i(188);t.a=e=>void 0===e.attributes.friendly_name?Object(a.a)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""},178:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var a=i(119);const n={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function o(e,t){if(e in n)return n[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),a.a}}},179:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(109);const a=customElements.get("iron-icon");let n=!1;class o extends a{listen(e,t,a){super.listen(e,t,a),n||"mdi"!==this._iconsetName||(n=!0,i.e(70).then(i.bind(null,216)))}}customElements.define("ha-icon",o)},180:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var a=i(121);function n(e){return Object(a.a)(e.entity_id)}},182:function(e,t,i){"use strict";i(5);const a=i(3).a`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},184:function(e,t,i){"use strict";var a=i(4),n=i(0),o=(i(179),i(180)),s=i(192);class r extends n.a{render(){const e=this.stateObj;return e?n.f`
      <ha-icon
        id="icon"
        data-domain=${Object(o.a)(e)}
        data-state=${e.state}
        .icon=${this.overrideIcon||Object(s.a)(e)}
      ></ha-icon>
    `:n.f``}updated(e){if(!e.has("stateObj")||!this.stateObj)return;const t=this.stateObj,i={color:"",filter:""},a={backgroundImage:""};if(t)if(t.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){let e=this.overrideImage||t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),a.backgroundImage=`url(${e})`,i.display="none"}else{if(t.attributes.hs_color){const e=t.attributes.hs_color[0],a=t.attributes.hs_color[1];a>10&&(i.color=`hsl(${e}, 100%, ${100-a/2}%)`)}if(t.attributes.brightness){const e=t.attributes.brightness;if("number"!=typeof e){const i=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(i)}i.filter=`brightness(${(e+245)/5}%)`}}Object.assign(this._icon.style,i),Object.assign(this.style,a)}static get styles(){return n.c`
      :host {
        position: relative;
        display: inline-block;
        width: 40px;
        color: var(--paper-item-icon-color, #44739e);
        border-radius: 50%;
        height: 40px;
        text-align: center;
        background-size: cover;
        line-height: 40px;
      }

      ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      /* Color the icon if light or sun is on */
      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      /* Color the icon if unavailable */
      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `}}Object(a.b)([Object(n.g)()],r.prototype,"stateObj",void 0),Object(a.b)([Object(n.g)()],r.prototype,"overrideIcon",void 0),Object(a.b)([Object(n.g)()],r.prototype,"overrideImage",void 0),Object(a.b)([Object(n.h)("ha-icon")],r.prototype,"_icon",void 0),customElements.define("state-badge",r)},186:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return s}));i(5);var a=i(87),n=i(1);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(n.a)(e).path,i=0,a=t.indexOf(this);i<a;i++){var o=t[i];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},s=[a.a,o]},187:function(e,t,i){"use strict";i(5),i(68),i(151);var a=i(6),n=i(3),o=i(126);const s=n.a`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;s.setAttribute("strip-whitespace",""),Object(a.a)({_template:s,is:"paper-spinner",behaviors:[o.a]})},188:function(e,t,i){"use strict";function a(e){return e.substr(e.indexOf(".")+1)}i.d(t,"a",(function(){return a}))},189:function(e,t,i){"use strict";var a=i(3),n=i(30),o=(i(230),i(184),i(176)),s=i(96);customElements.define("state-info",class extends n.a{static get template(){return a.a`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `}static get styleTemplate(){return a.a`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `}static get stateBadgeTemplate(){return a.a`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `}static get infoTemplate(){return a.a`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <ha-relative-time
              hass="[[hass]]"
              datetime="[[stateObj.last_changed]]"
            ></ha-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:()=>!1},rtl:{type:Boolean,reflectToAttribute:!0,computed:"computeRTL(hass)"}}}computeStateName(e){return Object(o.a)(e)}computeRTL(e){return Object(s.a)(e)}})},191:function(e,t,i){"use strict";i(5),i(45),i(42),i(54),i(86);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},192:function(e,t,i){"use strict";var a=i(119),n=i(121),o=i(178);const s={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};i.d(t,"a",(function(){return l}));const r={binary_sensor:function(e){const t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){const t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Object(o.a)("cover",e.state)}},sensor:function(e){const t=e.attributes.device_class;if(t&&t in s)return s[t];if("battery"===t){const t=Number(e.state);if(isNaN(t))return"hass:battery-unknown";const i=10*Math.round(t/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":`hass:battery-${i}`}const i=e.attributes.unit_of_measurement;return i===a.j||i===a.k?"hass:thermometer":Object(o.a)("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Object(o.a)("input_datetime"):"hass:calendar":"hass:clock"}};function l(e){if(!e)return a.a;if(e.attributes.icon)return e.attributes.icon;const t=Object(n.a)(e.entity_id);return t in r?r[t](e):Object(o.a)(t,e.state)}},196:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a=(e,t,i=!1)=>{let a;return function(...n){const o=this,s=i&&!a;clearTimeout(a),a=setTimeout(()=>{a=null,i||e.apply(o,n)},t),s&&e.apply(o,n)}}},197:function(e,t,i){"use strict";var a={},n=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,o="[^\\s]+",s=/\[([^]*?)\]/gm,r=function(){};function l(e,t){for(var i=[],a=0,n=e.length;a<n;a++)i.push(e[a].substr(0,t));return i}function c(e){return function(t,i,a){var n=a[e].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~n&&(t.month=n)}}function d(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=["January","February","March","April","May","June","July","August","September","October","November","December"],u=l(h,3),m=l(p,3);a.i18n={dayNamesShort:m,dayNames:p,monthNamesShort:u,monthNames:h,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var b={D:function(e){return e.getDate()},DD:function(e){return d(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return d(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return d(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return d(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return d(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return d(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return d(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return d(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return d(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return d(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return d(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+d(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},g={D:["\\d\\d?",function(e,t){e.day=t}],Do:["\\d\\d?"+o,function(e,t){e.day=parseInt(t,10)}],M:["\\d\\d?",function(e,t){e.month=t-1}],YY:["\\d\\d?",function(e,t){var i=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?i-1:i)+t}],h:["\\d\\d?",function(e,t){e.hour=t}],m:["\\d\\d?",function(e,t){e.minute=t}],s:["\\d\\d?",function(e,t){e.second=t}],YYYY:["\\d{4}",function(e,t){e.year=t}],S:["\\d",function(e,t){e.millisecond=100*t}],SS:["\\d{2}",function(e,t){e.millisecond=10*t}],SSS:["\\d{3}",function(e,t){e.millisecond=t}],d:["\\d\\d?",r],ddd:[o,r],MMM:[o,c("monthNamesShort")],MMMM:[o,c("monthNames")],a:[o,function(e,t,i){var a=t.toLowerCase();a===i.amPm[0]?e.isPm=!1:a===i.amPm[1]&&(e.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(e,t){var i,a=(t+"").match(/([+-]|\d\d)/gi);a&&(i=60*a[1]+parseInt(a[2],10),e.timezoneOffset="+"===a[0]?i:-i)}]};g.dd=g.d,g.dddd=g.ddd,g.DD=g.D,g.mm=g.m,g.hh=g.H=g.HH=g.h,g.MM=g.M,g.ss=g.s,g.A=g.a,a.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},a.format=function(e,t,i){var o=i||a.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");t=a.masks[t]||t||a.masks.default;var r=[];return(t=(t=t.replace(s,(function(e,t){return r.push(t),"@@@"}))).replace(n,(function(t){return t in b?b[t](e,o):t.slice(1,t.length-1)}))).replace(/@@@/g,(function(){return r.shift()}))},a.parse=function(e,t,i){var o=i||a.i18n;if("string"!=typeof t)throw new Error("Invalid format in fecha.parse");if(t=a.masks[t]||t,e.length>1e3)return null;var r={},l=[],c=[];t=t.replace(s,(function(e,t){return c.push(t),"@@@"}));var d,p=(d=t,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(n,(function(e){if(g[e]){var t=g[e];return l.push(t[1]),"("+t[0]+")"}return e}));p=p.replace(/@@@/g,(function(){return c.shift()}));var h=e.match(new RegExp(p,"i"));if(!h)return null;for(var u=1;u<h.length;u++)l[u-1](r,h[u],o);var m,b=new Date;return!0===r.isPm&&null!=r.hour&&12!=+r.hour?r.hour=+r.hour+12:!1===r.isPm&&12==+r.hour&&(r.hour=0),null!=r.timezoneOffset?(r.minute=+(r.minute||0)-+r.timezoneOffset,m=new Date(Date.UTC(r.year||b.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0))):m=new Date(r.year||b.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0),m},t.a=a},200:function(e,t,i){"use strict";var a=i(197);t.a=function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()?(e,t)=>e.toLocaleString(t,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}):e=>a.a.format(e,"haDateTime")},207:function(e,t,i){"use strict";i(5),i(45),i(68),i(42);var a=i(123),n=i(69),o=i(6),s=i(36),r=i(3),l=i(62);const c=r.a`

    <style>
      :host {
        display: inline-block;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-common-base;
      }

      :host([disabled]) {
        pointer-events: none;
      }

      :host(:focus) {
        outline:none;
      }

      .toggle-bar {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        pointer-events: none;
        opacity: 0.4;
        transition: background-color linear .08s;
        background-color: var(--paper-toggle-button-unchecked-bar-color, #000000);

        @apply --paper-toggle-button-unchecked-bar;
      }

      .toggle-button {
        position: absolute;
        top: -3px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
        transition: -webkit-transform linear .08s, background-color linear .08s;
        transition: transform linear .08s, background-color linear .08s;
        will-change: transform;
        background-color: var(--paper-toggle-button-unchecked-button-color, var(--paper-grey-50));

        @apply --paper-toggle-button-unchecked-button;
      }

      .toggle-button.dragging {
        -webkit-transition: none;
        transition: none;
      }

      :host([checked]:not([disabled])) .toggle-bar {
        opacity: 0.5;
        background-color: var(--paper-toggle-button-checked-bar-color, var(--primary-color));

        @apply --paper-toggle-button-checked-bar;
      }

      :host([disabled]) .toggle-bar {
        background-color: #000;
        opacity: 0.12;
      }

      :host([checked]) .toggle-button {
        -webkit-transform: translate(16px, 0);
        transform: translate(16px, 0);
      }

      :host([checked]:not([disabled])) .toggle-button {
        background-color: var(--paper-toggle-button-checked-button-color, var(--primary-color));

        @apply --paper-toggle-button-checked-button;
      }

      :host([disabled]) .toggle-button {
        background-color: #bdbdbd;
        opacity: 1;
      }

      .toggle-ink {
        position: absolute;
        top: -14px;
        left: -14px;
        right: auto;
        bottom: auto;
        width: 48px;
        height: 48px;
        opacity: 0.5;
        pointer-events: none;
        color: var(--paper-toggle-button-unchecked-ink-color, var(--primary-text-color));

        @apply --paper-toggle-button-unchecked-ink;
      }

      :host([checked]) .toggle-ink {
        color: var(--paper-toggle-button-checked-ink-color, var(--primary-color));

        @apply --paper-toggle-button-checked-ink;
      }

      .toggle-container {
        display: inline-block;
        position: relative;
        width: 36px;
        height: 14px;
        /* The toggle button has an absolute position of -3px; The extra 1px
        /* accounts for the toggle button shadow box. */
        margin: 4px 1px;
      }

      .toggle-label {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding-left: var(--paper-toggle-button-label-spacing, 8px);
        pointer-events: none;
        color: var(--paper-toggle-button-label-color, var(--primary-text-color));
      }

      /* invalid state */
      :host([invalid]) .toggle-bar {
        background-color: var(--paper-toggle-button-invalid-bar-color, var(--error-color));
      }

      :host([invalid]) .toggle-button {
        background-color: var(--paper-toggle-button-invalid-button-color, var(--error-color));
      }

      :host([invalid]) .toggle-ink {
        color: var(--paper-toggle-button-invalid-ink-color, var(--error-color));
      }
    </style>

    <div class="toggle-container">
      <div id="toggleBar" class="toggle-bar"></div>
      <div id="toggleButton" class="toggle-button"></div>
    </div>

    <div class="toggle-label"><slot></slot></div>

  `;c.setAttribute("strip-whitespace",""),Object(o.a)({_template:c,is:"paper-toggle-button",behaviors:[a.a],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Object(l.a)(this,(function(){Object(s.f)(this,"pan-y")}))},_ontrack:function(e){var t=e.detail;"start"===t.state?this._trackStart(t):"track"===t.state?this._trackMove(t):"end"===t.state&&this._trackEnd(t)},_trackStart:function(e){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(e){var t=e.dx;this._x=Math.min(this._width,Math.max(0,this._trackChecked?this._width+t:t)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(e){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var e=n.a._createRipple();return e.id="ink",e.setAttribute("recenters",""),e.classList.add("circle","toggle-ink"),e}})},208:function(e,t,i){"use strict";i(5),i(45),i(42);var a=i(186),n=i(6),o=i(3);Object(n.a)({_template:o.a`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(a.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},214:function(e,t,i){"use strict";var a=i(197);t.a=function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}return!1}()?(e,t)=>e.toLocaleTimeString(t,{hour:"numeric",minute:"2-digit"}):e=>a.a.format(e,"shortTime")},217:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a=(e,t)=>0!=(e.attributes.supported_features&t)},221:function(e,t,i){"use strict";function a(e,t){return e&&-1!==e.config.components.indexOf(t)}i.d(t,"a",(function(){return a}))},223:function(e,t,i){"use strict";var a=i(180),n=i(200),o=i(240),s=i(214);t.a=(e,t,i)=>{let r;const l=Object(a.a)(t);if("binary_sensor"===l)t.attributes.device_class&&(r=e(`state.${l}.${t.attributes.device_class}.${t.state}`)),r||(r=e(`state.${l}.default.${t.state}`));else if(t.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(t.state))r=t.state+" "+t.attributes.unit_of_measurement;else if("input_datetime"===l){let e;if(t.attributes.has_time)if(t.attributes.has_date)e=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),r=Object(n.a)(e,i);else{const a=new Date;e=new Date(a.getFullYear(),a.getMonth(),a.getDay(),t.attributes.hour,t.attributes.minute),r=Object(s.a)(e,i)}else e=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),r=Object(o.a)(e,i)}else r="zwave"===l?["initializing","dead"].includes(t.state)?e(`state.zwave.query_stage.${t.state}`,"query_stage",t.attributes.query_stage):e(`state.zwave.default.${t.state}`):e(`state.${l}.${t.state}`);return r||(r=e(`state.default.${t.state}`)||e(`component.${l}.state.${t.state}`)||t.state),r}},224:function(e,t,i){"use strict";i(146);const a=customElements.get("paper-dropdown-menu");customElements.define("ha-paper-dropdown-menu",class extends a{ready(){super.ready(),setTimeout(()=>{"rtl"===window.getComputedStyle(this).direction&&(this.style.textAlign="right")},100)}})},228:function(e,t,i){"use strict";i(5),i(31),i(109),i(147),i(42),i(148),i(149);var a=i(55),n=i(35),o=i(60),s=i(61),r=i(69),l=i(6),c=i(1),d=i(36),p=i(3);Object(l.a)({_template:p.a`
    <style include="paper-dropdown-menu-shared-styles">
      :host(:focus) {
        outline: none;
      }

      :host {
        width: 200px;  /* Default size of an <input> */
      }

      /**
       * All of these styles below are for styling the fake-input display
       */
      [slot="dropdown-trigger"] {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 16px 0 8px 0;
      }

      :host([disabled]) [slot="dropdown-trigger"] {
        pointer-events: none;
        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);
      }

      :host([no-label-float]) [slot="dropdown-trigger"] {
        padding-top: 8px;   /* If there's no label, we need less space up top. */
      }

      #input {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        line-height: 1.5;
        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));
        color: var(--paper-dropdown-menu-color, var(--primary-text-color));
        width: 100%;
        box-sizing: border-box;
        padding: 12px 20px 0 0;   /* Right padding so that text doesn't overlap the icon */
        outline: none;
        @apply --paper-dropdown-menu-input;
      }

      #input:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([disabled]) #input {
        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));
      }

      :host([invalid]) #input {
        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) #input {
        padding-top: 0;   /* If there's no label, we need less space up top. */
      }

      label {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /**
         * The container has a 16px top padding, and there's 12px of padding
         * between the input and the label (from the input's padding-top)
         */
        top: 28px;
        box-sizing: border-box;
        width: 100%;
        padding-right: 20px;    /* Right padding so that text doesn't overlap the icon */
        text-align: left;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));
        @apply --paper-dropdown-menu-label;
      }

      label:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([no-label-float]) label {
        top: 8px;
        /* Since the label doesn't need to float, remove the animation duration
        which slows down visibility changes (i.e. when a selection is made) */
        transition-duration: 0s;
      }

      label.label-is-floating {
        font-size: 12px;
        top: 8px;
      }

      label.label-is-hidden {
        visibility: hidden;
      }

      :host([focused]) label.label-is-floating {
        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
      }

      :host([invalid]) label.label-is-floating {
        color: var(--paper-dropdown-error-color, var(--error-color));
      }

      /**
       * Sets up the focused underline. It's initially hidden, and becomes
       * visible when it's focused.
       */
      label:after {
        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
        bottom: 7px;    /* The container has an 8px bottom padding */
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 8px;
        z-index: 10;
      }

      :host([invalid]) label:after {
        background-color: var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) label:after {
        bottom: 7px;    /* The container has a 8px bottom padding */
      }

      :host([focused]:not([disabled])) label:after {
        left: 0;
        visibility: visible;
        width: 100%;
      }

      iron-icon {
        position: absolute;
        right: 0px;
        bottom: 8px;    /* The container has an 8px bottom padding */
        @apply --paper-font-subhead;
        color: var(--disabled-text-color);
        @apply --paper-dropdown-menu-icon;
      }

      iron-icon:dir(rtl) {
        left: 0;
        right: auto;
      }

      :host([no-label-float]) iron-icon {
        margin-top: 0px;
      }

      .error {
        display: inline-block;
        visibility: hidden;
        color: var(--paper-dropdown-error-color, var(--error-color));
        @apply --paper-font-caption;
        position: absolute;
        left:0;
        right:0;
        bottom: -12px;
      }

      :host([invalid]) .error {
        visibility: visible;
      }
    </style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <label class\$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">
          [[label]]
        </label>
        <div id="input" tabindex="-1">&nbsp;</div>
        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>
        <span class="error">[[errorMessage]]</span>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu-light",behaviors:[a.a,n.a,r.a,o.a,s.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0,observer:"_valueChanged"},label:{type:String},placeholder:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,hasContent:{type:Boolean,readOnly:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{tabindex:0,role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=Object(c.a)(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){d.c(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)},_computeLabelClass:function(e,t,i){var a="";return!0===e?i?"label-is-hidden":"":((i||!0===t)&&(a+=" label-is-floating"),a)},_valueChanged:function(){this.$.input&&this.$.input.textContent!==this.value&&(this.$.input.textContent=this.value),this._setHasContent(!!this.value)}})},230:function(e,t,i){"use strict";var a=i(1),n=i(30),o=i(235),s=i(175);customElements.define("ha-relative-time",class extends(Object(s.a)(n.a)){static get properties(){return{hass:Object,datetime:{type:String,observer:"datetimeChanged"},datetimeObj:{type:Object,observer:"datetimeObjChanged"},parsedDateTime:Object}}constructor(){super(),this.updateRelative=this.updateRelative.bind(this)}connectedCallback(){super.connectedCallback(),this.updateInterval=setInterval(this.updateRelative,6e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.updateInterval)}datetimeChanged(e){this.parsedDateTime=e?new Date(e):null,this.updateRelative()}datetimeObjChanged(e){this.parsedDateTime=e,this.updateRelative()}updateRelative(){const e=Object(a.a)(this);this.parsedDateTime?e.innerHTML=Object(o.a)(this.parsedDateTime,this.localize):e.innerHTML=this.localize("ui.components.relative_time.never")}})},231:function(e,t,i){"use strict";var a=i(4),n=(i(108),i(207),i(119)),o=i(180),s=i(0),r=i(103),l=i(176);const c=e=>void 0!==e&&!n.i.includes(e.state);class d extends s.a{constructor(){super(...arguments),this._isOn=!1}render(){return this.stateObj?this.stateObj.attributes.assumed_state?s.f`
        <paper-icon-button
          aria-label=${`Turn ${Object(l.a)(this.stateObj)} off`}
          icon="hass:flash-off"
          @click=${this._turnOff}
          ?state-active=${!this._isOn}
        ></paper-icon-button>
        <paper-icon-button
          aria-label=${`Turn ${Object(l.a)(this.stateObj)} on`}
          icon="hass:flash"
          @click=${this._turnOn}
          ?state-active=${this._isOn}
        ></paper-icon-button>
      `:s.f`
      <paper-toggle-button
        aria-label=${`Toggle ${Object(l.a)(this.stateObj)} ${this._isOn?"off":"on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></paper-toggle-button>
    `:s.f`
        <paper-toggle-button disabled></paper-toggle-button>
      `}firstUpdated(e){super.firstUpdated(e),this.addEventListener("click",e=>e.stopPropagation())}updated(e){e.has("stateObj")&&(this._isOn=c(this.stateObj))}_toggleChanged(e){const t=e.target.checked;t!==this._isOn&&this._callService(t)}_turnOn(){this._callService(!0)}_turnOff(){this._callService(!1)}async _callService(e){if(!this.hass||!this.stateObj)return;Object(r.a)("light");const t=Object(o.a)(this.stateObj);let i,a;"lock"===t?(i="lock",a=e?"unlock":"lock"):"cover"===t?(i="cover",a=e?"open_cover":"close_cover"):"group"===t?(i="homeassistant",a=e?"turn_on":"turn_off"):(i=t,a=e?"turn_on":"turn_off");const n=this.stateObj;this._isOn=e,await this.hass.callService(i,a,{entity_id:this.stateObj.entity_id}),setTimeout(async()=>{this.stateObj===n&&(this._isOn=c(this.stateObj))},2e3)}static get styles(){return s.c`
      :host {
        white-space: nowrap;
        min-width: 38px;
      }
      paper-icon-button {
        color: var(
          --paper-icon-button-inactive-color,
          var(--primary-text-color)
        );
        transition: color 0.5s;
      }
      paper-icon-button[state-active] {
        color: var(--paper-icon-button-active-color, var(--primary-color));
      }
      paper-toggle-button {
        cursor: pointer;
        --paper-toggle-button-label-spacing: 0;
        padding: 13px 5px;
        margin: -4px -5px;
      }
    `}}Object(a.b)([Object(s.g)()],d.prototype,"stateObj",void 0),Object(a.b)([Object(s.g)()],d.prototype,"_isOn",void 0),customElements.define("ha-entity-toggle",d)},233:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return p}));var a=i(217);class n{constructor(e,t){this.hass=e,this.stateObj=t,this._attr=t.attributes,this._feat=this._attr.supported_features}get isFullyOpen(){return void 0!==this._attr.current_position?100===this._attr.current_position:"open"===this.stateObj.state}get isFullyClosed(){return void 0!==this._attr.current_position?0===this._attr.current_position:"closed"===this.stateObj.state}get isFullyOpenTilt(){return 100===this._attr.current_tilt_position}get isFullyClosedTilt(){return 0===this._attr.current_tilt_position}get isOpening(){return"opening"===this.stateObj.state}get isClosing(){return"closing"===this.stateObj.state}get supportsOpen(){return Object(a.a)(this.stateObj,1)}get supportsClose(){return Object(a.a)(this.stateObj,2)}get supportsSetPosition(){return Object(a.a)(this.stateObj,4)}get supportsStop(){return Object(a.a)(this.stateObj,8)}get supportsOpenTilt(){return Object(a.a)(this.stateObj,16)}get supportsCloseTilt(){return Object(a.a)(this.stateObj,32)}get supportsStopTilt(){return Object(a.a)(this.stateObj,64)}get supportsSetTiltPosition(){return Object(a.a)(this.stateObj,128)}get isTiltOnly(){const e=this.supportsOpen||this.supportsClose||this.supportsStop;return(this.supportsOpenTilt||this.supportsCloseTilt||this.supportsStopTilt)&&!e}openCover(){this.callService("open_cover")}closeCover(){this.callService("close_cover")}stopCover(){this.callService("stop_cover")}openCoverTilt(){this.callService("open_cover_tilt")}closeCoverTilt(){this.callService("close_cover_tilt")}stopCoverTilt(){this.callService("stop_cover_tilt")}setCoverPosition(e){this.callService("set_cover_position",{position:e})}setCoverTiltPosition(e){this.callService("set_cover_tilt_position",{tilt_position:e})}callService(e,t={}){t.entity_id=this.stateObj.entity_id,this.hass.callService("cover",e,t)}}const o=e=>Object(a.a)(e,1),s=e=>Object(a.a)(e,2),r=e=>Object(a.a)(e,8),l=e=>Object(a.a)(e,16),c=e=>Object(a.a)(e,32),d=e=>Object(a.a)(e,64);function p(e){const t=o(e)||s(e)||r(e);return(l(e)||c(e)||d(e))&&!t}},235:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));const a=[60,60,24,7],n=["second","minute","hour","day"];function o(e,t,i={}){let o=((i.compareTime||new Date).getTime()-e.getTime())/1e3;const s=o>=0?"past":"future";let r;o=Math.abs(o);for(let l=0;l<a.length;l++){if(o<a[l]){o=Math.floor(o),r=t(`ui.components.relative_time.duration.${n[l]}`,"count",o);break}o/=a[l]}return void 0===r&&(r=t("ui.components.relative_time.duration.week","count",o=Math.floor(o))),!1===i.includeTense?r:t(`ui.components.relative_time.${s}`,"time",r)}},236:function(e,t,i){"use strict";i.d(t,"c",(function(){return l})),i.d(t,"b",(function(){return c})),i.d(t,"a",(function(){return p}));var a=i(176),n=i(180),o=i(223);const s=["climate","water_heater"],r=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action"],l=(e,t,i,a,n=!1)=>{let o="history/period";return i&&(o+="/"+i.toISOString()),o+="?filter_entity_id="+t,a&&(o+="&end_time="+a.toISOString()),n&&(o+="&skip_initial_state"),e.callApi("GET",o)},c=(e,t,i)=>e.callApi("GET",`history/period/${t.toISOString()}?end_time=${i.toISOString()}`),d=(e,t)=>e.state===t.state&&(!e.attributes||r.every(i=>e.attributes[i]===t.attributes[i])),p=(e,t,i,l)=>{const c={},p=[];return t?(t.forEach(t=>{if(0===t.length)return;const s=t.find(e=>"unit_of_measurement"in e.attributes);let r;s?r=s.attributes.unit_of_measurement:"climate"===Object(n.a)(t[0])?r=e.config.unit_system.temperature:"water_heater"===Object(n.a)(t[0])&&(r=e.config.unit_system.temperature),r?r in c?c[r].push(t):c[r]=[t]:p.push(((e,t,i)=>{const n=[];for(const a of i)n.length>0&&a.state===n[n.length-1].state||n.push({state_localize:Object(o.a)(e,a,t),state:a.state,last_changed:a.last_changed});return{name:Object(a.a)(i[0]),entity_id:i[0].entity_id,data:n}})(i,l,t))}),{line:Object.keys(c).map(e=>((e,t)=>{const i=[];for(const o of t){const e=o[o.length-1],t=Object(n.a)(e),l=[];for(const i of o){let e;if(s.includes(t)){e={state:i.state,last_changed:i.last_updated,attributes:{}};for(const t of r)t in i.attributes&&(e.attributes[t]=i.attributes[t])}else e=i;l.length>1&&d(e,l[l.length-1])&&d(e,l[l.length-2])||l.push(e)}i.push({domain:t,name:Object(a.a)(e),entity_id:e.entity_id,states:l})}return{unit:e,identifier:t.map(e=>e[0].entity_id).join(""),data:i}})(e,c[e])),timeline:p}):{line:[],timeline:[]}}},240:function(e,t,i){"use strict";var a=i(197);t.a=function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}return!1}()?(e,t)=>e.toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"}):e=>a.a.format(e,"mediumDate")},245:function(e,t,i){"use strict";i(5),i(86);const a=i(3).a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},255:function(e,t,i){"use strict";i(5);var a=i(6),n=i(3),o=i(20);Object(a.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var i=this._resolveSrc(e);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=Object(o.c)(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}})},262:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const a=e=>e<10?`0${e}`:e;function n(e){const t=Math.floor(e/3600),i=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return t>0?`${t}:${a(i)}:${a(n)}`:i>0?`${i}:${a(n)}`:n>0?""+n:null}},263:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a=async(e,t,i,a,n,...o)=>{let s=a[e];s||(s=a[e]={});const r=s[n];if(r)return r;const l=i(a,n,...o);return s[n]=l,l.then(()=>setTimeout(()=>{s[n]=void 0},t),()=>{s[n]=void 0}),l}},264:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var a=i(217);class n{constructor(e,t){this.hass=e,this.stateObj=t,this._attr=t.attributes,this._feat=this._attr.supported_features}get isOff(){return"off"===this.stateObj.state}get isIdle(){return"idle"===this.stateObj.state}get isMuted(){return this._attr.is_volume_muted}get isPaused(){return"paused"===this.stateObj.state}get isPlaying(){return"playing"===this.stateObj.state}get isMusic(){return"music"===this._attr.media_content_type}get isTVShow(){return"tvshow"===this._attr.media_content_type}get hasMediaControl(){return-1!==["playing","paused","unknown","on"].indexOf(this.stateObj.state)}get volumeSliderValue(){return 100*this._attr.volume_level}get showProgress(){return(this.isPlaying||this.isPaused)&&"media_duration"in this.stateObj.attributes&&"media_position"in this.stateObj.attributes&&"media_position_updated_at"in this.stateObj.attributes}get currentProgress(){var e=this._attr.media_position;return this.isPlaying&&(e+=(Date.now()-new Date(this._attr.media_position_updated_at).getTime())/1e3),e}get supportsPause(){return Object(a.a)(this.stateObj,1)}get supportsVolumeSet(){return Object(a.a)(this.stateObj,4)}get supportsVolumeMute(){return Object(a.a)(this.stateObj,8)}get supportsPreviousTrack(){return Object(a.a)(this.stateObj,16)}get supportsNextTrack(){return Object(a.a)(this.stateObj,32)}get supportsTurnOn(){return Object(a.a)(this.stateObj,128)}get supportsTurnOff(){return Object(a.a)(this.stateObj,256)}get supportsPlayMedia(){return Object(a.a)(this.stateObj,512)}get supportsVolumeButtons(){return Object(a.a)(this.stateObj,1024)}get supportsSelectSource(){return Object(a.a)(this.stateObj,2048)}get supportsSelectSoundMode(){return Object(a.a)(this.stateObj,65536)}get supportsPlay(){return Object(a.a)(this.stateObj,16384)}get primaryTitle(){return this._attr.media_title}get secondaryTitle(){if(this.isMusic)return this._attr.media_artist;if(this.isTVShow){var e=this._attr.media_series_title;return this._attr.media_season&&(e+=" S"+this._attr.media_season,this._attr.media_episode&&(e+="E"+this._attr.media_episode)),e}return this._attr.app_name?this._attr.app_name:""}get source(){return this._attr.source}get sourceList(){return this._attr.source_list}get soundMode(){return this._attr.sound_mode}get soundModeList(){return this._attr.sound_mode_list}mediaPlayPause(){this.callService("media_play_pause")}nextTrack(){this.callService("media_next_track")}playbackControl(){this.callService("media_play_pause")}previousTrack(){this.callService("media_previous_track")}setVolume(e){this.callService("volume_set",{volume_level:e})}togglePower(){this.isOff?this.turnOn():this.turnOff()}turnOff(){this.callService("turn_off")}turnOn(){this.callService("turn_on")}volumeDown(){this.callService("volume_down")}volumeMute(e){if(!this.supportsVolumeMute)throw new Error("Muting volume not supported");this.callService("volume_mute",{is_volume_muted:e})}volumeUp(){this.callService("volume_up")}selectSource(e){this.callService("select_source",{source:e})}selectSoundMode(e){this.callService("select_sound_mode",{sound_mode:e})}callService(e,t={}){t.entity_id=this.stateObj.entity_id,this.hass.callService("media_player",e,t)}}},265:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"d",(function(){return r})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return p}));var a=i(13),n=i(176),o=i(196);const s=(e,t)=>{if(t.name)return t.name;const i=e.states[t.entity_id];return i?Object(n.a)(i):null},r=(e,t,i)=>e.callWS(Object.assign({type:"config/entity_registry/update",entity_id:t},i)),l=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),c=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),d=(e,t)=>e.subscribeEvents(Object(o.a)(()=>c(e).then(e=>t.setState(e,!0)),500,!0),"entity_registry_updated"),p=(e,t)=>Object(a.d)("_entityRegistry",c,d,e,t)},267:function(e,t,i){"use strict";i(187);var a=i(3),n=i(30),o=i(22),s=i(98),r=(i(108),i(12)),l=i(72),c=i(214);let d=null;customElements.define("ha-chart-base",class extends(Object(l.b)([s.a],n.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `}get chart(){return this._chart}static get properties(){return{data:Object,identifier:String,rendered:{type:Boolean,notify:!0,value:!1,readOnly:!0},metas:{type:Array,value:()=>[]},tooltip:{type:Object,value:()=>({opacity:"0",left:"0",top:"0",xPadding:"5",yPadding:"3"})},unit:Object,rtl:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["onPropsChange(data)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.onPropsChange(),this._resizeListener=()=>{this._debouncer=o.a.debounce(this._debouncer,r.d.after(10),()=>{this._isAttached&&this.resizeChart()})},"function"==typeof ResizeObserver?(this.resizeObserver=new ResizeObserver(e=>{e.forEach(()=>{this._resizeListener()})}),this.resizeObserver.observe(this.$.chartTarget)):this.addEventListener("iron-resize",this._resizeListener),null===d&&(d=Promise.all([i.e(11),i.e(126),i.e(68)]).then(i.bind(null,687))),d.then(e=>{this.ChartClass=e.default,this.onPropsChange()})}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1,this.resizeObserver&&this.resizeObserver.unobserve(this.$.chartTarget),this.removeEventListener("iron-resize",this._resizeListener),void 0!==this._resizeTimer&&(clearInterval(this._resizeTimer),this._resizeTimer=void 0)}onPropsChange(){this._isAttached&&this.ChartClass&&this.data&&this.drawChart()}_customTooltips(e){if(0===e.opacity)return void this.set(["tooltip","opacity"],0);e.yAlign?this.set(["tooltip","yAlign"],e.yAlign):this.set(["tooltip","yAlign"],"no-transform");const t=e.title&&e.title[0]||"";this.set(["tooltip","title"],t);const i=e.body.map(e=>e.lines);e.body&&this.set(["tooltip","lines"],i.map((t,i)=>{const a=e.labelColors[i];return{color:a.borderColor,bgColor:a.backgroundColor,text:t.join("\n")}}));const a=this.$.chartTarget.clientWidth;let n=e.caretX;const o=this._chart.canvas.offsetTop+e.caretY;e.caretX+100>a?n=a-100:e.caretX<100&&(n=100),n+=this._chart.canvas.offsetLeft,this.tooltip={...this.tooltip,opacity:1,left:`${n}px`,top:`${o}px`}}_legendClick(e){(e=e||window.event).stopPropagation();let t=e.target||e.srcElement;for(;"LI"!==t.nodeName;)t=t.parentElement;const i=e.model.itemsIndex,a=this._chart.getDatasetMeta(i);a.hidden=null===a.hidden?!this._chart.data.datasets[i].hidden:null,this.set(["metas",i,"hidden"],this._chart.isDatasetVisible(i)?null:"hidden"),this._chart.update()}_drawLegend(){const e=this._chart,t=this._oldIdentifier&&this.identifier===this._oldIdentifier;this._oldIdentifier=this.identifier,this.set("metas",this._chart.data.datasets.map((i,a)=>({label:i.label,color:i.color,bgColor:i.backgroundColor,hidden:t&&a<this.metas.length?this.metas[a].hidden:!e.isDatasetVisible(a)})));let i=!1;if(t)for(let a=0;a<this.metas.length;a++){const t=e.getDatasetMeta(a);!!t.hidden!=!!this.metas[a].hidden&&(i=!0),t.hidden=!!this.metas[a].hidden||null}i&&e.update(),this.unit=this.data.unit}_formatTickValue(e,t,i){if(0===i.length)return e;const a=new Date(i[t].value);return Object(c.a)(a)}drawChart(){const e=this.data.data,t=this.$.chartCanvas;if(e.datasets&&e.datasets.length||this._chart){if("timeline"!==this.data.type&&e.datasets.length>0){const t=e.datasets.length,i=this.constructor.getColorList(t);for(let a=0;a<t;a++)e.datasets[a].borderColor=i[a].rgbString(),e.datasets[a].backgroundColor=i[a].alpha(.6).rgbaString()}if(this._chart)this._customTooltips({opacity:0}),this._chart.data=e,this._chart.update({duration:0}),this.isTimeline?this._chart.options.scales.yAxes[0].gridLines.display=e.length>1:!0===this.data.legend&&this._drawLegend(),this.resizeChart();else{if(!e.datasets)return;this._customTooltips({opacity:0});const i=[{afterRender:()=>this._setRendered(!0)}];let a={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,tooltips:{enabled:!1,custom:this._customTooltips.bind(this)},legend:{display:!1},line:{spanGaps:!0},elements:{font:"12px 'Roboto', 'sans-serif'"},ticks:{fontFamily:"'Roboto', 'sans-serif'"}};(a=Chart.helpers.merge(a,this.data.options)).scales.xAxes[0].ticks.callback=this._formatTickValue,"timeline"===this.data.type?(this.set("isTimeline",!0),void 0!==this.data.colors&&(this._colorFunc=this.constructor.getColorGenerator(this.data.colors.staticColors,this.data.colors.staticColorIndex)),void 0!==this._colorFunc&&(a.elements.colorFunction=this._colorFunc),1===e.datasets.length&&(a.scales.yAxes[0].ticks?a.scales.yAxes[0].ticks.display=!1:a.scales.yAxes[0].ticks={display:!1},a.scales.yAxes[0].gridLines?a.scales.yAxes[0].gridLines.display=!1:a.scales.yAxes[0].gridLines={display:!1}),this.$.chartTarget.style.height="50px"):this.$.chartTarget.style.height="160px";const n={type:this.data.type,data:this.data.data,options:a,plugins:i};this._chart=new this.ChartClass(t,n),!0!==this.isTimeline&&!0===this.data.legend&&this._drawLegend(),this.resizeChart()}}}resizeChart(){this._chart&&(void 0!==this._resizeTimer?(clearInterval(this._resizeTimer),this._resizeTimer=void 0,this._resizeChart()):this._resizeTimer=setInterval(this.resizeChart.bind(this),10))}_resizeChart(){const e=this.$.chartTarget,t=this.data.data;if(0===t.datasets.length)return;if(!this.isTimeline)return void this._chart.resize();const i=this._chart.chartArea.top,a=this._chart.chartArea.bottom,n=this._chart.canvas.clientHeight;if(a>0&&(this._axisHeight=n-a+i),!this._axisHeight)return e.style.height="50px",this._chart.resize(),void this.resizeChart();if(this._axisHeight){const i=30*t.datasets.length+this._axisHeight+"px";e.style.height!==i&&(e.style.height=i),this._chart.resize()}}static getColorList(e){let t=!1;e>10&&(t=!0,e=Math.ceil(e/2));const i=360/e,a=[];for(let n=0;n<e;n++)a[n]=Color().hsl(i*n,80,38),t&&(a[n+e]=Color().hsl(i*n,80,62));return a}static getColorGenerator(e,t){const i=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"];function a(e){return Color("#"+i[e%i.length])}const n={};let o=0;return t>0&&(o=t),e&&Object.keys(e).forEach(t=>{const i=e[t];isFinite(i)?n[t.toLowerCase()]=a(i):n[t.toLowerCase()]=Color(e[t])}),function(e,t){let i;const s=t[3];if(null===s)return Color().hsl(0,40,38);if(void 0===s)return Color().hsl(120,40,38);const r=s.toLowerCase();return void 0===i&&(i=n[r]),void 0===i&&(i=a(o),o++,n[r]=i),i}}});var p=i(175),h=i(200);customElements.define("state-history-chart-line",class extends(Object(p.a)(n.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `}static get properties(){return{chartData:Object,data:Object,names:Object,unit:String,identifier:String,isSingleDevice:{type:Boolean,value:!1},endTime:Object,rendered:{type:Boolean,value:!1,observer:"_onRenderedChanged"}}}static get observers(){return["dataChanged(data, endTime, isSingleDevice)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}_onRenderedChanged(e){e&&this.animateHeight()}animateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{this.style.height=this.$.chart.scrollHeight+"px"}))}drawChart(){const e=this.unit,t=this.data,i=[];let a;if(!this._isAttached)return;if(0===t.length)return;function n(e){const t=parseFloat(e);return isFinite(t)?t:null}(a=this.endTime||new Date(Math.max.apply(null,t.map(e=>new Date(e.states[e.states.length-1].last_changed)))))>new Date&&(a=new Date);const o=this.names||{};t.forEach(t=>{const s=t.domain,r=o[t.entity_id]||t.name;let l;const c=[];function d(e,t){t&&(e>a||(c.forEach((i,a)=>{i.data.push({x:e,y:t[a]})}),l=t))}function p(t,i,a){let n=!1,o=!1;a&&(n="origin"),i&&(o="before"),c.push({label:t,fill:n,steppedLine:o,pointRadius:0,data:[],unitText:e})}if("thermostat"===s||"climate"===s||"water_heater"===s){const e="climate"===s?e=>"heating"===e.attributes.hvac_action:e=>"heat"===e.state,i="climate"===s?e=>"cooling"===e.attributes.hvac_action:e=>"cool"===e.state,a=t.states.some(e=>e.attributes&&e.attributes.target_temp_high!==e.attributes.target_temp_low),o=t.states.some(e),l=t.states.some(i);p(r+" current temperature",!0),o&&p(r+" heating",!0,!0),l&&p(r+" cooling",!0,!0),a?(p(r+" target temperature high",!0),p(r+" target temperature low",!0)):p(r+" target temperature",!0),t.states.forEach(t=>{if(!t.attributes)return;const s=n(t.attributes.current_temperature),r=[s];if(o&&r.push(e(t)?s:null),l&&r.push(i(t)?s:null),a){const e=n(t.attributes.target_temp_high),i=n(t.attributes.target_temp_low);r.push(e,i),d(new Date(t.last_changed),r)}else{const e=n(t.attributes.temperature);r.push(e),d(new Date(t.last_changed),r)}})}else{p(r,"sensor"===s);let e=null,i=null,a=null;t.states.forEach(t=>{const o=n(t.state),s=new Date(t.last_changed);if(null!==o&&null!==a){const t=s.getTime(),n=a.getTime(),r=i.getTime();d(a,[(n-r)/(t-r)*(o-e)+e]),d(new Date(n+1),[null]),d(s,[o]),i=s,e=o,a=null}else null!==o&&null===a?(d(s,[o]),i=s,e=o):null===o&&null===a&&null!==e&&(a=s)})}d(a,l),Array.prototype.push.apply(i,c)});const s={type:"line",unit:e,legend:!this.isSingleDevice,options:{scales:{xAxes:[{type:"time",ticks:{major:{fontStyle:"bold"}}}],yAxes:[{ticks:{maxTicksLimit:7}}]},tooltips:{mode:"neareach",callbacks:{title:(e,t)=>{const i=e[0],a=t.datasets[i.datasetIndex].data[i.index].x;return Object(h.a)(a,this.hass.language)}}},hover:{mode:"neareach"},layout:{padding:{top:5}},elements:{line:{tension:.1,pointRadius:0,borderWidth:1.5},point:{hitRadius:5}},plugins:{filler:{propagate:!0}}},data:{labels:[],datasets:i}};this.chartData=s}});var u=i(96);customElements.define("state-history-chart-timeline",class extends(Object(p.a)(n.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:{type:Object,observer:"dataChanged"},names:Object,noSingle:Boolean,endTime:Date,rendered:{type:Boolean,value:!1,reflectToAttribute:!0},rtl:{reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}static get observers(){return["dataChanged(data, endTime, localize, language)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}drawChart(){let e=this.data;if(!this._isAttached)return;e||(e=[]);const t=new Date(e.reduce((e,t)=>Math.min(e,new Date(t.data[0].last_changed)),new Date));let i=this.endTime||new Date(e.reduce((e,t)=>Math.max(e,new Date(t.data[t.data.length-1].last_changed)),t));i>new Date&&(i=new Date);const a=[],n=[],o=this.names||{};e.forEach(e=>{let s,r=null,l=null,c=t;const d=o[e.entity_id]||e.name,p=[];e.data.forEach(e=>{let t=e.state;void 0!==t&&""!==t||(t=null),new Date(e.last_changed)>i||(null!==r&&t!==r?(s=new Date(e.last_changed),p.push([c,s,l,r]),r=t,l=e.state_localize,c=s):null===r&&(r=t,l=e.state_localize,c=new Date(e.last_changed)))}),null!==r&&p.push([c,i,l,r]),n.push({data:p}),a.push(d)});const s={type:"timeline",options:{tooltips:{callbacks:{label:(e,t)=>{const i=t.datasets[e.datasetIndex].data[e.index],a=Object(h.a)(i[0],this.hass.language),n=Object(h.a)(i[1],this.hass.language);return[i[2],a,n]}}},scales:{xAxes:[{ticks:{major:{fontStyle:"bold"}}}],yAxes:[{afterSetDimensions:e=>{e.maxWidth=.18*e.chart.width},position:this._computeRTL?"right":"left"}]}},data:{labels:a,datasets:n},colors:{staticColors:{on:1,off:0,unavailable:"#a0a0a0",unknown:"#606060",idle:2},staticColorIndex:3}};this.chartData=s}_computeRTL(e){return Object(u.a)(e)}});customElements.define("state-history-charts",class extends(Object(p.a)(n.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `}static get properties(){return{hass:Object,historyData:{type:Object,value:null},names:Object,isLoadingData:Boolean,endTime:{type:Object},upToNow:Boolean,noSingle:Boolean}}_computeIsSingleLineChart(e,t){return!t&&e&&1===e.length}_computeIsEmpty(e,t){const i=!t||!t.timeline||!t.line||0===t.timeline.length&&0===t.line.length;return!e&&i}_computeIsLoading(e){return e&&!this.historyData}_computeEndTime(e,t){return t?new Date:e}})},268:function(e,t,i){"use strict";var a=i(12),n=i(22),o=i(30),s=i(175),r=i(236);const l={},c={},d=(e,t,i,a,n,o)=>{const s=t,c=l[s];if(c&&Date.now()-c.created<6e4&&c.language===o)return c.data;const d=Object(r.c)(e,t,i,a).then(t=>Object(r.a)(e,t,n,o),e=>{throw delete l[t],e});return l[s]={created:Date.now(),language:o,data:d},d};const p=(e,t,i,a,n)=>{const o=i.cacheKey,s=new Date,l=new Date(s);l.setHours(l.getHours()-i.hoursToShow);let d=l,p=!1,m=c[o];if(m&&d>=m.startTime&&d<=m.endTime&&m.language===n){if(d=m.endTime,p=!0,s<=m.endTime)return m.prom}else m=c[o]=function(e,t,i){return{prom:Promise.resolve({line:[],timeline:[]}),language:e,startTime:t,endTime:i,data:{line:[],timeline:[]}}}(n,l,s);const g=m.prom;return m.prom=(async()=>{let i;try{i=(await Promise.all([g,Object(r.c)(e,t,d,s,p)]))[1]}catch(v){throw delete c[o],v}const f=Object(r.a)(e,i,a,n);return p?(h(f.line,m.data.line),u(f.timeline,m.data.timeline),b(l,m.data)):m.data=f,m.data})(),m.startTime=l,m.endTime=s,m.prom},h=(e,t)=>{e.forEach(e=>{const i=e.unit,a=t.find(e=>e.unit===i);a?e.data.forEach(e=>{const t=a.data.find(t=>e.entity_id===t.entity_id);t?t.states=t.states.concat(e.states):a.data.push(e)}):t.push(e)})},u=(e,t)=>{e.forEach(e=>{const i=t.find(t=>t.entity_id===e.entity_id);i?i.data=i.data.concat(e.data):t.push(e)})},m=(e,t)=>{if(0===t.length)return t;const i=t.findIndex(t=>new Date(t.last_changed)>e);if(0===i)return t;const a=-1===i?t.length-1:i-1;return t[a].last_changed=e,t.slice(a)},b=(e,t)=>{t.line.forEach(t=>{t.data.forEach(t=>{t.states=m(e,t.states)})}),t.timeline.forEach(t=>{t.data=m(e,t.data)})};customElements.define("ha-state-history-data",class extends(Object(s.a)(o.a)){static get properties(){return{hass:{type:Object,observer:"hassChanged"},filterType:String,cacheConfig:Object,startTime:Date,endTime:Date,entityId:String,isLoading:{type:Boolean,value:!0,readOnly:!0,notify:!0},data:{type:Object,value:null,readOnly:!0,notify:!0}}}static get observers(){return["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"]}connectedCallback(){super.connectedCallback(),this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}disconnectedCallback(){this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),super.disconnectedCallback()}hassChanged(e,t){t||this._madeFirstCall||this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}filterChangedDebouncer(...e){this._debounceFilterChanged=n.a.debounce(this._debounceFilterChanged,a.d.after(0),()=>{this.filterChanged(...e)})}filterChanged(e,t,i,a,n,o){if(!this.hass)return;if(n&&!n.cacheKey)return;if(!o)return;this._madeFirstCall=!0;const s=this.hass.language;let l;if("date"===e){if(!i||!a)return;l=Object(r.b)(this.hass,i,a).then(e=>Object(r.a)(this.hass,e,o,s))}else{if("recent-entity"!==e)return;if(!t)return;l=n?this.getRecentWithCacheRefresh(t,n,o,s):d(this.hass,t,i,a,o,s)}this._setIsLoading(!0),l.then(e=>{this._setData(e),this._setIsLoading(!1)})}getRecentWithCacheRefresh(e,t,i,a){return this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),t.refresh&&(this._refreshTimeoutId=window.setInterval(()=>{p(this.hass,e,t,i,a).then(e=>{this._setData({...e})})},1e3*t.refresh)),p(this.hass,e,t,i,a)}})},269:function(e,t,i){"use strict";function a(e){let t=function(e){const t=e.split(":").map(Number);return 3600*t[0]+60*t[1]+t[2]}(e.attributes.remaining);if("active"===e.state){const i=(new Date).getTime(),a=new Date(e.last_changed).getTime();t=Math.max(t-(i-a)/1e3,0)}return t}i.d(t,"a",(function(){return a}))},272:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"g",(function(){return n})),i.d(t,"h",(function(){return o})),i.d(t,"f",(function(){return s})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return c})),i.d(t,"b",(function(){return d})),i.d(t,"i",(function(){return h}));const a="none",n=1,o=2,s=4,r=8,l=16,c=32,d=64,p={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},h=(e,t)=>p[e]-p[t]},273:function(e,t,i){"use strict";function a(e,t){return e?t.map(t=>t in e.attributes?"has-"+t:"").filter(e=>""!==e).join(" "):""}i.d(t,"a",(function(){return a}))},274:function(e,t,i){"use strict";function a(e,t,i){const a=e;let n;a.lastChild&&a.lastChild.tagName===t?n=a.lastChild:(a.lastChild&&a.removeChild(a.lastChild),n=document.createElement(t.toLowerCase())),n.setProperties?n.setProperties(i):Object.keys(i).forEach(e=>{n[e]=i[e]}),null===n.parentNode&&a.appendChild(n)}i.d(t,"a",(function(){return a}))},281:function(e,t,i){"use strict";i(182),i(108);var a=i(3),n=i(30),o=i(233);customElements.define("ha-cover-tilt-controls",class extends n.a{static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        aria-label="Open cover tilt"
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Stop cover from moving"
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Close cover tilt"
        icon="hass:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(e,t){return new o.a(e,t)}computeOpenDisabled(e,t){var i=!0===e.attributes.assumed_state;return t.isFullyOpenTilt&&!i}computeClosedDisabled(e,t){var i=!0===e.attributes.assumed_state;return t.isFullyClosedTilt&&!i}onOpenTiltTap(e){e.stopPropagation(),this.entityObj.openCoverTilt()}onCloseTiltTap(e){e.stopPropagation(),this.entityObj.closeCoverTilt()}onStopTiltTap(e){e.stopPropagation(),this.entityObj.stopCoverTilt()}})},282:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return s})),i.d(t,"e",(function(){return r})),i.d(t,"d",(function(){return c})),i.d(t,"c",(function(){return d})),i.d(t,"f",(function(){return p}));var a=i(263),n=i(66);const o=2,s=e=>`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`,r=(e,t)=>Object(a.a)("_cameraTmbUrl",9e3,l,e,t),l=async(e,t)=>{const i=await Object(n.b)(e,`/api/camera_proxy/${t}`);return e.hassUrl(i.path)},c=async(e,t,i)=>{const a={type:"camera/stream",entity_id:t};i&&(a.format=i);const n=await e.callWS(a);return n.url=e.hassUrl(n.url),n},d=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),p=(e,t,i)=>e.callWS(Object.assign({type:"camera/update_prefs",entity_id:t},i))},288:function(e,t,i){"use strict";var a=i(3),n=i(30),o=i(175),s=i(272);customElements.define("ha-climate-state",class extends(Object(o.a)(n.a)){static get template(){return a.a`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj)]]
            <template is="dom-if" if="[[_renderPreset(stateObj.attributes)]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(hass, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `}static get properties(){return{hass:Object,stateObj:Object,currentStatus:{type:String,computed:"computeCurrentStatus(hass, stateObj)"}}}computeCurrentStatus(e,t){return e&&t?null!=t.attributes.current_temperature?`${t.attributes.current_temperature} ${e.config.unit_system.temperature}`:null!=t.attributes.current_humidity?`${t.attributes.current_humidity} %`:null:null}computeTarget(e,t){return e&&t?null!=t.attributes.target_temp_low&&null!=t.attributes.target_temp_high?`${t.attributes.target_temp_low}-${t.attributes.target_temp_high} ${e.config.unit_system.temperature}`:null!=t.attributes.temperature?`${t.attributes.temperature} ${e.config.unit_system.temperature}`:null!=t.attributes.target_humidity_low&&null!=t.attributes.target_humidity_high?`${t.attributes.target_humidity_low}-${t.attributes.target_humidity_high}%`:null!=t.attributes.humidity?`${t.attributes.humidity} %`:"":null}_hasKnownState(e){return"unknown"!==e}_localizeState(e,t){const i=e(`state.climate.${t.state}`);return t.attributes.hvac_action?`${e(`state_attributes.climate.hvac_action.${t.attributes.hvac_action}`)} (${i})`:i}_localizePreset(e,t){return e(`state_attributes.climate.preset_mode.${t}`)||t}_renderPreset(e){return e.preset_mode&&e.preset_mode!==s.a}})},289:function(e,t,i){"use strict";i(108);var a=i(3),n=i(30),o=i(233);customElements.define("ha-cover-controls",class extends n.a{static get template(){return a.a`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          aria-label="Open cover"
          icon="hass:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Stop the cover from moving"
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Close cover"
          icon="hass:arrow-down"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(e,t){return new o.a(e,t)}computeOpenDisabled(e,t){var i=!0===e.attributes.assumed_state;return(t.isFullyOpen||t.isOpening)&&!i}computeClosedDisabled(e,t){var i=!0===e.attributes.assumed_state;return(t.isFullyClosed||t.isClosing)&&!i}onOpenTap(e){e.stopPropagation(),this.entityObj.openCover()}onCloseTap(e){e.stopPropagation(),this.entityObj.closeCover()}onStopTap(e){e.stopPropagation(),this.entityObj.stopCover()}})},290:function(e,t,i){"use strict";i(157);const a=customElements.get("paper-slider");let n;customElements.define("ha-slider",class extends a{static get template(){if(!n){(n=a.template.cloneNode(!0)).content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        '))}return n}_calcStep(e){if(!this.step)return parseFloat(e);const t=Math.round((e-this.min)/this.step),i=this.step.toString(),a=i.indexOf(".");if(-1!==a){const e=10**(i.length-a-1);return Math.round((t*this.step+this.min)*e)/e}return t*this.step+this.min}})},291:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a=(e,t,i)=>e.callService("input_select","select_option",{option:i,entity_id:t})},292:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a=e=>e.stopPropagation()},296:function(e,t,i){"use strict";i(5),i(45),i(255),i(245),i(42);var a=i(6),n=i(3);Object(a.a)({_template:n.a`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(e){return e?"false":"true"},_headingChanged:function(e){var t=this.getAttribute("heading"),i=this.getAttribute("aria-label");"string"==typeof i&&i!==t||this.setAttribute("aria-label",e)},_computeHeadingClass:function(e){return e?" over-image":""},_computeAnimated:function(e){return e}})},301:function(e,t,i){"use strict";var a=i(180),n=i(217);function o(e,t){const i=Object(a.a)(t);return"group"===i?"on"===t.state||"off"===t.state:"climate"===i?Object(n.a)(t,4096):function(e,t){const i=e.services[t];return!!i&&("lock"===t?"lock"in i:"cover"===t?"open_cover"in i:"turn_on"in i)}(e,i)}i.d(t,"a",(function(){return o}))},313:function(e,t,i){"use strict";var a=i(30),n=(i(182),i(3));i(189),i(288);customElements.define("state-card-climate",class extends a.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-climate-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-climate-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-climate-state>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});i(85);var o=i(175);customElements.define("state-card-configurator",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button hidden$="[[inDialog]]"
          >[[_localizeState(stateObj.state)]]</mwc-button
        >
      </div>

      <!-- pre load the image so the dialog is rendered the proper size -->
      <template is="dom-if" if="[[stateObj.attributes.description_image]]">
        <img hidden="" src="[[stateObj.attributes.description_image]]" />
      </template>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}_localizeState(e){return this.localize(`state.configurator.${e}`)}});i(289),i(281);var s=i(233);customElements.define("state-card-cover",class extends a.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="horizontal layout">
          <ha-cover-controls
            hidden$="[[entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-controls>
          <ha-cover-tilt-controls
            hidden$="[[!entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-tilt-controls>
        </div>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(e,t){return new s.a(e,t)}});var r=i(223),l=i(273),c=i(96);customElements.define("state-card-display",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-justified;
          @apply --layout-baseline;
        }

        :host([rtl]) {
          direction: rtl;
          text-align: right;
        }

        state-info {
          flex: 1 1 auto;
          min-width: 0;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);
          margin-left: 16px;
          text-align: right;
          max-width: 40%;
          flex: 0 0 auto;
        }
        :host([rtl]) .state {
          margin-right: 16px;
          margin-left: 0;
          text-align: left;
        }

        .state.has-unit_of_measurement {
          white-space: nowrap;
        }
      </style>

      ${this.stateInfoTemplate}
      <div class$="[[computeClassNames(stateObj)]]">
        [[computeStateDisplay(localize, stateObj, language)]]
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}computeStateDisplay(e,t,i){return Object(r.a)(e,t,i)}computeClassNames(e){return["state",Object(l.a)(e,["unit_of_measurement"])].join(" ")}_computeRTL(e){return Object(c.a)(e)}});var d=i(98),p=(i(93),i(72));i(290);customElements.define("state-card-input_number",class extends(Object(p.b)([d.a],a.a)){static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        paper-input {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="input_number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin=""
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <paper-input
          no-label-float=""
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          type="number"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          hidden="[[hiddenbox]]"
        >
        </paper-input>
        <div class="state" hidden="[[hiddenbox]]">
          [[stateObj.attributes.unit_of_measurement]]
        </div>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[value]] [[stateObj.attributes.unit_of_measurement]]
        </div>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}ready(){if(super.ready(),"function"==typeof ResizeObserver){new ResizeObserver(e=>{e.forEach(()=>{this.hiddenState()})}).observe(this.$.input_number_card)}else this.addEventListener("iron-resize",this.hiddenState)}static get properties(){return{hass:Object,hiddenbox:{type:Boolean,value:!0},hiddenslider:{type:Boolean,value:!0},inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},min:{type:Number,value:0},max:{type:Number,value:100},maxlength:{type:Number,value:3},step:Number,value:Number,mode:String}}hiddenState(){if("slider"!==this.mode)return;const e=this.$.slider.offsetWidth;e<100?this.$.sliderstate.hidden=!0:e>=145&&(this.$.sliderstate.hidden=!1)}stateObjectChanged(e){const t=this.mode;this.setProperties({min:Number(e.attributes.min),max:Number(e.attributes.max),step:Number(e.attributes.step),value:Number(e.state),mode:String(e.attributes.mode),maxlength:String(e.attributes.max).length,hiddenbox:"box"!==e.attributes.mode,hiddenslider:"slider"!==e.attributes.mode}),"slider"===this.mode&&"slider"!==t&&this.hiddenState()}selectedValueChanged(){this.value!==Number(this.stateObj.state)&&this.hass.callService("input_number","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(e){e.stopPropagation()}});var h=i(4),u=i(0),m=(i(228),i(143),i(144),i(184),i(176)),b=i(291),g=i(292);let f=class extends u.a{render(){return u.f`
      <state-badge .stateObj=${this.stateObj}></state-badge>
      <paper-dropdown-menu-light
        .label=${Object(m.a)(this.stateObj)}
        .value="${this.stateObj.state}"
        @iron-select=${this._selectedOptionChanged}
        @click=${g.a}
      >
        <paper-listbox slot="dropdown-content">
          ${this.stateObj.attributes.options.map(e=>u.f`
              <paper-item>${e}</paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu-light>
    `}updated(e){super.updated(e),this.shadowRoot.querySelector("paper-listbox").selected=this.stateObj.attributes.options.indexOf(this.stateObj.state)}async _selectedOptionChanged(e){const t=e.detail.item.innerText.trim();t!==this.stateObj.state&&await Object(b.a)(this.hass,this.stateObj.entity_id,t)}static get styles(){return u.c`
      :host {
        display: block;
      }

      state-badge {
        float: left;
        margin-top: 10px;
      }

      paper-dropdown-menu-light {
        display: block;
        margin-left: 53px;
      }

      paper-item {
        cursor: pointer;
        min-width: 200px;
      }
    `}};Object(h.b)([Object(u.g)()],f.prototype,"hass",void 0),Object(h.b)([Object(u.g)()],f.prototype,"stateObj",void 0),f=Object(h.b)([Object(u.d)("state-card-input_select")],f);customElements.define("state-card-input_text",class extends a.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        paper-input {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <paper-input
          no-label-float=""
          minlength="[[stateObj.attributes.min]]"
          maxlength="[[stateObj.attributes.max]]"
          value="{{value}}"
          auto-validate="[[stateObj.attributes.pattern]]"
          pattern="[[stateObj.attributes.pattern]]"
          type="[[stateObj.attributes.mode]]"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          placeholder="(empty value)"
        >
        </paper-input>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},pattern:String,value:String}}stateObjectChanged(e){this.value=e.state}selectedValueChanged(){this.value!==this.stateObj.state&&this.hass.callService("input_text","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(e){e.stopPropagation()}});customElements.define("state-card-lock",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button
          on-click="_callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="_callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},inDialog:{type:Boolean,value:!1},isLocked:Boolean}}_stateObjChanged(e){e&&(this.isLocked="locked"===e.state)}_callService(e){e.stopPropagation();const t=e.target.dataset.service,i={entity_id:this.stateObj.entity_id};this.hass.callService("lock",t,i)}});var v=i(264);customElements.define("state-card-media_player",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }

        .state {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          margin-left: 16px;
          text-align: right;
        }

        .main-text {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          text-transform: capitalize;
        }

        .main-text[take-height] {
          line-height: 40px;
        }

        .secondary-text {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">
          <div class="main-text" take-height$="[[!playerObj.secondaryTitle]]">
            [[computePrimaryText(localize, playerObj)]]
          </div>
          <div class="secondary-text">[[playerObj.secondaryTitle]]</div>
        </div>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)"}}}computePlayerObj(e,t){return new v.a(e,t)}computePrimaryText(e,t){return t.primaryTitle||e(`state.media_player.${t.stateObj.state}`)||e(`state.default.${t.stateObj.state}`)||t.stateObj.state}});customElements.define("state-card-scene",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button on-click="activateScene"
          >[[localize('ui.card.scene.activate')]]</mwc-button
        >
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}activateScene(e){e.stopPropagation(),this.hass.callService("scene","turn_on",{entity_id:this.stateObj.entity_id})}});i(231);customElements.define("state-card-script",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }

        ha-entity-toggle {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <template is="dom-if" if="[[stateObj.attributes.can_cancel]]">
          <ha-entity-toggle
            state-obj="[[stateObj]]"
            hass="[[hass]]"
          ></ha-entity-toggle>
        </template>
        <template is="dom-if" if="[[!stateObj.attributes.can_cancel]]">
          <mwc-button on-click="fireScript"
            >[[localize('ui.card.script.execute')]]</mwc-button
          >
        </template>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}fireScript(e){e.stopPropagation(),this.hass.callService("script","turn_on",{entity_id:this.stateObj.entity_id})}});var y=i(269),_=i(262);customElements.define("state-card-timer",class extends a.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          margin-left: 16px;
          text-align: right;
          line-height: 40px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">[[_secondsToDuration(timeRemaining)]]</div>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},timeRemaining:Number,inDialog:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback(),this.startInterval(this.stateObj)}disconnectedCallback(){super.disconnectedCallback(),this.clearInterval()}stateObjChanged(e){this.startInterval(e)}clearInterval(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=null)}startInterval(e){this.clearInterval(),this.calculateRemaining(e),"active"===e.state&&(this._updateRemaining=setInterval(()=>this.calculateRemaining(this.stateObj),1e3))}calculateRemaining(e){this.timeRemaining=Object(y.a)(e)}_secondsToDuration(e){return Object(_.a)(e)}});customElements.define("state-card-toggle",class extends a.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-entity-toggle {
          margin: -4px -16px -4px 0;
          padding: 4px 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-entity-toggle
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></ha-entity-toggle>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});const w={cleaning:{action:"return_to_base",service:"return_to_base"},docked:{action:"start_cleaning",service:"start"},idle:{action:"start_cleaning",service:"start"},off:{action:"turn_on",service:"turn_on"},on:{action:"turn_off",service:"turn_off"},paused:{action:"resume_cleaning",service:"start"}};customElements.define("ha-vacuum-state",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
        mwc-button[disabled] {
          background-color: transparent;
          color: var(--secondary-text-color);
        }
      </style>

      <mwc-button on-click="_callService" disabled="[[!_interceptable]]"
        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button
      >
    `}static get properties(){return{hass:Object,stateObj:Object,_interceptable:{type:Boolean,computed:"_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"}}}_computeInterceptable(e,t){return e in w&&0!==t}_computeLabel(e,t){return t?this.localize(`ui.card.vacuum.actions.${w[e].action}`):this.localize(`state.vacuum.${e}`)}_callService(e){e.stopPropagation();const t=this.stateObj,i=w[t.state].service;this.hass.callService("vacuum",i,{entity_id:t.entity_id})}});customElements.define("state-card-vacuum",class extends a.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-vacuum-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-vacuum-state>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});customElements.define("ha-water_heater-state",class extends(Object(o.a)(a.a)){static get template(){return n.a`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }
      </style>

      <div class="target">
        <span class="state-label"> [[_localizeState(stateObj.state)]] </span>
        [[computeTarget(hass, stateObj)]]
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]
        </div>
      </template>
    `}static get properties(){return{hass:Object,stateObj:Object}}computeTarget(e,t){return e&&t?null!=t.attributes.target_temp_low&&null!=t.attributes.target_temp_high?`${t.attributes.target_temp_low} - ${t.attributes.target_temp_high} ${e.config.unit_system.temperature}`:null!=t.attributes.temperature?`${t.attributes.temperature} ${e.config.unit_system.temperature}`:"":null}_localizeState(e){return this.localize(`state.water_heater.${e}`)||e}});customElements.define("state-card-water_heater",class extends a.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-water_heater-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-water_heater-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-water_heater-state>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});customElements.define("state-card-weblink",class extends a.a{static get template(){return n.a`
      <style>
        :host {
          display: block;
        }
        .name {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          color: var(--primary-color);

          text-transform: capitalize;
          line-height: 40px;
          margin-left: 16px;
        }
      </style>

      ${this.stateBadgeTemplate}
      <a href$="[[stateObj.state]]" target="_blank" class="name" id="link"
        >[[_computeStateName(stateObj)]]</a
      >
    `}static get stateBadgeTemplate(){return n.a`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `}static get properties(){return{stateObj:Object,inDialog:{type:Boolean,value:!1}}}ready(){super.ready(),this.addEventListener("click",e=>this.onTap(e))}_computeStateName(e){return Object(m.a)(e)}onTap(e){e.stopPropagation(),e.preventDefault(),window.open(this.stateObj.state,"_blank")}});var x=i(301),k=i(180),O=i(119);var j=i(274);customElements.define("state-card-content",class extends a.a{static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}static get observers(){return["inputChanged(hass, inDialog, stateObj)"]}inputChanged(e,t,i){let a;i&&e&&(a=i.attributes&&"custom_ui_state_card"in i.attributes?i.attributes.custom_ui_state_card:"state-card-"+function(e,t){if("unavailable"===t.state)return"display";const i=Object(k.a)(t);return O.g.includes(i)?i:Object(x.a)(e,t)&&"hidden"!==t.attributes.control?"toggle":"display"}(e,i),Object(j.a)(this,a.toUpperCase(),{hass:e,stateObj:i,inDialog:t}))}})},330:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var a=i(180),n=i(119);function o(e){const t=Object(a.a)(e);return n.h.includes(t)?t:n.d.includes(t)?"hidden":"default"}},331:function(e,t,i){"use strict";i(296);var a=i(3),n=i(30),o=(i(267),i(268),i(176)),s=i(118);customElements.define("ha-history_graph-card",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        paper-card:not([dialog]) .content {
          padding: 0 16px 16px;
        }
        paper-card[dialog] {
          padding-top: 16px;
          background-color: transparent;
        }
        paper-card {
          width: 100%;
          /* prevent new stacking context, chart tooltip needs to overflow */
          position: static;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 20px 16px 12px;
          @apply --paper-font-common-nowrap;
        }
        paper-card[dialog] .header {
          display: none;
        }
      </style>
      <ha-state-history-data
        hass="[[hass]]"
        filter-type="recent-entity"
        entity-id="[[computeHistoryEntities(stateObj)]]"
        data="{{stateHistory}}"
        is-loading="{{stateHistoryLoading}}"
        cache-config="[[cacheConfig]]"
      ></ha-state-history-data>
      <paper-card
        dialog$="[[inDialog]]"
        on-click="cardTapped"
        elevation="[[computeElevation(inDialog)]]"
      >
        <div class="header">[[computeTitle(stateObj)]]</div>
        <div class="content">
          <state-history-charts
            hass="[[hass]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[stateHistoryLoading]]"
            up-to-now
            no-single
          >
          </state-history-charts>
        </div>
      </paper-card>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjObserver"},inDialog:{type:Boolean,value:!1},stateHistory:Object,stateHistoryLoading:Boolean,cacheConfig:{type:Object,value:{refresh:0,cacheKey:null,hoursToShow:24}}}}stateObjObserver(e){e&&(this.cacheConfig.cacheKey===e.entity_id&&this.cacheConfig.refresh===(e.attributes.refresh||0)&&this.cacheConfig.hoursToShow===(e.attributes.hours_to_show||24)||(this.cacheConfig={refresh:e.attributes.refresh||0,cacheKey:e.entity_id,hoursToShow:e.attributes.hours_to_show||24}))}computeTitle(e){return Object(o.a)(e)}computeContentClass(e){return e?"":"content"}computeHistoryEntities(e){return e.attributes.entity_id}computeElevation(e){return e?0:1}cardTapped(e){window.matchMedia("(min-width: 610px) and (min-height: 550px)").matches&&(e.stopPropagation(),this.fire("hass-more-info",{entityId:this.stateObj.entity_id}))}})},341:function(e,t,i){"use strict";i(219),i(201),i(297);var a=i(3);const n=a.a`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);i(209),i(202),i(225);const o=a.a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var s=i(30),r=i(46),l=i(204);const c=e=>(class extends((e=>(class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}}))(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this._focus(e):-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity=0,e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(e){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}});var d=i(12),p=i(22),h=i(24);const u=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,m=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function b(e,t){if("function"!=typeof e)return;const i=u.exec(e.toString());if(i)try{e=new Function(i[1])}catch(a){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",a)}return e(t)}window.Vaadin=window.Vaadin||{};const g=function(e,t){if(window.Vaadin.developmentMode)return b(e,t)};function f(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(m?!function(){if(m){if(Object.keys(m).map(e=>m[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!b((function(){return!0})))}catch(e){return!1}}());const v=function(){return g(f)};let y;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){v&&v()};const _=e=>(class extends e{static _finalizeClass(){super._finalizeClass(),this.is&&(window.Vaadin.registrations.push(this),window.Vaadin.developmentModeCallback&&(y=p.a.debounce(y,d.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(h.a)(y)))}ready(){super.ready(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}});var w=i(36);class x extends(_(c(Object(l.a)(Object(r.a)(s.a))))){static get template(){return a.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.1"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(w.b)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(w.b)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(x.is,x);const k=a.a`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      /* Today and Cancel buttons */

      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */
      [part="toolbar"] [part\$="button"] {
        background-color: transparent;
        margin: 0;
        min-width: 0;
        padding: 0 0.75em;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(k.content);const O=a.a`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild(O.content);i(246);const j=document.createElement("template");j.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(j.content);const C=document.createElement("template");C.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(C.content);const S=a.a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(S.content);const D=document.createElement("template");D.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(D.content);const T={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},E={DEFAULT:"default",ACCESSIBLE:"accessible"},A=e=>(class extends(c(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:String,_errorId:String,_inputId:String}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+T.default.join(", ")+")","_hostAccessiblePropsChanged("+T.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)"]}constructor(){super(),this._createMethodObserver("__constraintsChanged(required, minlength, maxlength, pattern, min, max, step)")}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=p.a.debounce(this._inputDebouncer,d.d.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value}_stateChanged(e,t,i,a){!e&&!t&&i&&a?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput?this.__userInput=!1:(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(E).map(e=>E[e]).forEach(e=>this._propagateHostAttributes(T[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,E.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,E.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const i=this.inputElement,a=T[t];"accessible"===t?a.forEach((t,a)=>{this._setOrToggleAttribute(t,e[a],i),this._setOrToggleAttribute(`aria-${t}`,e[a],i)}):a.forEach((t,a)=>{this._setOrToggleAttribute(t,e[a],i)})}_setOrToggleAttribute(e,t,i){e&&i&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}__constraintsChanged(e,t,i,a,n,o,s){if(!this.invalid)return;const r=e=>!e&&0!==e;e||t||i||a||!r(n)||!r(o)?this.validate():this.invalid=!1}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=A._uniqueId=1+A._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(i)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,i){this._setOrToggleAttribute("aria-describedby",t&&e?i:void 0,this.focusElement)}_getActiveLabelId(e,t,i){let a=i;e&&(a=`${t} ${i}`),this.focusElement.setAttribute("aria-labelledby",a)}_getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const i="__previous"+e;void 0!==this[i]&&this[i]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0})),this[i]=t}__observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}});class I extends(_(A(Object(l.a)(s.a)))){static get template(){return a.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.4.11"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(I.is,I);const $=a.a`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($.content);i(132);var z=i(256),M=i(258),P=i(298);class L extends(Object(P.a)(M.a)){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(L.is,L);var R=i(31),B=i(94);i(89);const N=class{static _getISOWeekNumber(e){var t=e.getDay();0===t&&(t=7);var i=4-t,a=new Date(e.getTime()+24*i*3600*1e3),n=new Date(0,0);n.setFullYear(a.getFullYear());var o=a.getTime()-n.getTime(),s=Math.round(o/864e5);return Math.floor(s/7+1)}static _dateEquals(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static _dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}static _getClosestDate(e,t){return t.filter(e=>void 0!==e).reduce((t,i)=>{return i?t?Math.abs(e.getTime()-i.getTime())<Math.abs(t.getTime()-e.getTime())?i:t:i:t})}static _extractDateParts(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}};class F extends(Object(l.a)(Object(r.a)(s.a))){static get template(){return a.a`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(e,t){return N._dateEquals(e,t)}_dateAllowed(e,t,i){return N._dateAllowed(e,t,i)}_isDisabled(e,t,i){var a=new Date(0,0);a.setFullYear(e.getFullYear()),a.setMonth(e.getMonth()),a.setDate(1);var n=new Date(0,0);return n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()+1),n.setDate(-1),!(t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0)&&(!this._dateAllowed(a,t,i)&&!this._dateAllowed(n,t,i))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,i,a){if(void 0!==e&&void 0!==t&&void 0!==i&&void 0!==a)return e=this._applyFirstDayOfWeek(e,a),t=this._applyFirstDayOfWeek(t,a),e=e.map((e,i)=>({weekDay:e,weekDayShort:t[i]}))}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return this._dateEquals(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t;)this._dateAdd(i,-1);for(var a=[],n=i.getMonth(),o=e.getMonth();i.getMonth()===o||i.getMonth()===n;)a.push(i.getMonth()===o?new Date(i.getTime()):null),this._dateAdd(i,1);return a}}_getWeekNumber(e,t){if(void 0!==e&&void 0!==t)return e||(e=t.reduce((e,t)=>!e&&t?t:e)),N._getISOWeekNumber(e)}_getWeekNumbers(e){return e.map(t=>this._getWeekNumber(t,e)).filter((e,t,i)=>i.indexOf(e)===t)}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}_getRole(e){return e?"button":"presentation"}_getAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}_getAriaDisabled(e,t,i){if(void 0!==e&&void 0!==t&&void 0!==i)return this._dateAllowed(e,t,i)?"false":"true"}}customElements.define(F.is,F);var V=i(32),H=i(62);class Y extends s.a{static get template(){return a.a`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var e=this.querySelector("template");this._TemplateClass=Object(V.b)(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach(i=>{[].forEach.call(i.children,i=>{i._itemWrapper.instance[e]=t})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){var t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var t=this.root.querySelector(".buffer").offsetTop,i=e>this._buffers[1].translateY+this.itemHeight+t,a=e<this._buffers[0].translateY+this.itemHeight+t;(i||a)&&(this._translateBuffer(a),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=p.a.debounce(this._debouncerScrollFinish,d.d.after(200),()=>{var e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();const e=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=p.a.debounce(this._debouncerUpdateClones,d.d.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var e=this.getBoundingClientRect();this._buffers.forEach(t=>{for(var i=0;i<this.bufferSize;i++){const i=document.createElement("div");i.style.height=this.itemHeight+"px",i.instance={};const a="vaadin-infinite-scroller-item-content-"+(Y._contentIndex=Y._contentIndex+1||0),n=document.createElement("slot");n.setAttribute("name",a),n._itemWrapper=i,t.appendChild(n),i.setAttribute("slot",a),this.appendChild(i),Object(h.b)(),setTimeout(()=>{this._isVisible(i,e)&&this._ensureStampedInstance(i)},1)}},this),setTimeout(()=>{Object(H.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(i=>{e.instance.set(i,t[i])})}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,a)=>{if(!i.updated){var n=this._firstIndex+this.bufferSize*a;[].forEach.call(i.children,(i,a)=>{const o=i._itemWrapper;e&&!this._isVisible(o,t)||(o.instance.index=n+a)}),i.updated=!0}},this)}_isVisible(e,t){var i=e.getBoundingClientRect();return i.bottom>t.top&&i.top<t.bottom}}customElements.define(Y.is,Y);i(75);const q=document.createElement("template");q.innerHTML='<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir="rtl"]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(q.content);class K extends(Object(l.a)(Object(z.a)(Object(r.a)(s.a)))){static get template(){return a.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Object(w.b)(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(w.f)(this.$.scrollers,"pan-y"),B.a.requestAvailability()}announceFocusedDate(){var e=this._currentlyFocusedDate(),t=[];N._dateEquals(e,new Date)&&t.push(this.i18n.today),t=t.concat([this.i18n.weekdays[e.getDay()],e.getDate(),this.i18n.monthNames[e.getMonth()],e.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(t.push(this.i18n.week),t.push(N._getISOWeekNumber(e))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e){if(e){var t=this._differenceInMonths(e,this._originDate),i=this.$.monthScroller.position>t,a=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,n=this.$.monthScroller.position+a-1<t;i?this._scrollToPosition(t,!0):n&&this._scrollToPosition(t-a+1,!0)}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=p.a.debounce(this._debouncer,d.d.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,i){return e?t(N._extractDateParts(e)):i}_onTodayTap(){var e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this.selectedDate=e,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=e;var i=t?300:0,a=0,n=this.$.monthScroller.position,o=e=>{var t=e-(a=a||e);if(t<i){var s=((e,t,i,a)=>(e/=a/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t)(t,n,this._targetPosition-n,i);this.$.monthScroller.position=s,window.requestAnimationFrame(o)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:n}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(o)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this.selectedDate=""}_close(){const e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0;i<t.length;i++){var a=t[i];if(R.a.keyboardEventMatchesKeys(e,a))return a}}_onKeydown(e){var t=this._currentlyFocusedDate();const i=e.composedPath().indexOf(this.$.todayButton)>=0,a=e.composedPath().indexOf(this.$.cancelButton)>=0,n=!i&&!a;var o=this._eventKey(e);if("tab"===o){e.stopPropagation();const t=this.hasAttribute("fullscreen"),o=e.shiftKey;t?e.preventDefault():o&&n||!o&&a?(e.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):o&&i?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(o)switch(e.preventDefault(),e.stopPropagation(),o){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":n&&this._moveFocusByDays(1);break;case"left":n&&this._moveFocusByDays(-1);break;case"enter":n||a?this._close():i&&this._onTodayTap();break;case"space":if(a)this._close();else if(i)this._onTodayTap();else{var s=this.focusedDate;N._dateEquals(s,this.selectedDate)?(this.selectedDate="",this.focusedDate=s):this.selectedDate=s}break;case"home":this._moveFocusInsideMonth(t,"minDate");break;case"end":this._moveFocusInsideMonth(t,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(e){this.focusedDate=e,this._focusedMonthDate=e.getDate()}_focusClosestDate(e){this._focusDate(N._getClosestDate(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(t.getDate()+e),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+e);var a=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),i.getMonth()!==a&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusedDate=i:this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){var i=new Date(0,0);i.setFullYear(e.getFullYear()),"minDate"===t?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?this._focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){var i=new Date,a=new Date(0,0);return a.setFullYear(i.getFullYear()),a.setMonth(i.getMonth()),a.setDate(i.getDate()),this._dateAllowed(a,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(K.is,K);var W=i(98),U=i(72);const X=e=>(class extends(Object(U.b)([W.a],e)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:e=>{const t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{const t=e.split("/"),i=new Date;let a,n=i.getMonth(),o=i.getFullYear();if(3===t.length?(o=parseInt(t[2]),t[2].length<3&&o>=0&&(o+=o<50?2e3:1900),n=parseInt(t[0])-1,a=parseInt(t[1])):2===t.length?(n=parseInt(t[0])-1,a=parseInt(t[1])):1===t.length&&(a=parseInt(t[0])),void 0!==a)return{day:a,month:n,year:o}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_validateInput(_selectedDate, _minDate, _maxDate)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this),Object(w.b)(this,"tap",this.open),this.addEventListener("touchend",this._preventDefault.bind(this)),this.addEventListener("keydown",this._onKeydown.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",e=>this._noInput&&e.target.blur())}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._overlayInitialized&&this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.opened=!0)}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}close(){this._overlayInitialized&&this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(e){var t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(t){var i=new Date(0,0);return i.setFullYear(parseInt(t[1],10)),i.setMonth(parseInt(t[2],10)-1),i.setDate(parseInt(t[3],10)),i}}_isNoInput(e,t,i){return!this._inputElement||e||t||!i.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const t=(e,t="00")=>(t+e).substr((t+e).length-t.length);let i="",a="0000",n=e.getFullYear();return n<0?(n=-n,i="-",a="000000"):e.getFullYear()>=1e4&&(i="+",a="000000"),[i+t(n,a),t(e.getMonth()+1),t(e.getDate())].join("-")}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),e&&this._updateAlignmentAndPosition()}_selectedDateChanged(e,t){if(void 0===e||void 0===t)return;this.__userInputOccurred&&(this.__dispatchChange=!0);const i=e&&t(N._extractDateParts(e)),a=this._formatISO(e);a!==this.value&&(this.validate(i),this.value=a),this.__userInputOccurred=!1,this.__dispatchChange=!1,this._focusedDate=e,this._inputValue=e?i:""}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this.__userInputOccurred=!0,this._ignoreFocusedDateChange||this._noInput||(this._inputValue=e?t(N._extractDateParts(e)):""))}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,i){if(t){var a=this._parseDate(t);a?N._dateEquals(this[e],a)||(this[e]=a):this.value=i}else this[e]=""}_valueChanged(e,t){this.__dispatchChange&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._handleDateChange("_selectedDate",e,t)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_updateAlignmentAndPosition(){if(this._overlayInitialized){if(!this._fullscreen){const e=this._inputElement.getBoundingClientRect(),t=e.top>window.innerHeight/2;if(e.left+this.clientWidth/2>window.innerWidth/2){const t=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=t-e.right+"px"}else this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=e.left+"px";if(t){const t=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=t-e.top+"px"}else this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=e.bottom+"px"}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction")),this._overlayContent._repositionYearScroller()}}_fullscreenChanged(){this._overlayInitialized&&this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||N._dateAllowed(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=N._getClosestDate(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(e){for(var t=[];e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){var i=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:i})}e=e.parentElement}return t}_onOverlayClosed(){if(this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var e=this._inputValue||"";const t=this.i18n.parseDate(e),i=t&&this._parseDate(`${t.year}-${t.month+1}-${t.day}`);this._isValidDate(i)?this._selectedDate=i:(this._selectedDate=null,this._inputValue=e)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1,this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.validate()}validate(e){return this.invalid=!1,e=void 0!==e?e:this._inputValue,!(this.invalid=!this.checkValidity(e))}checkValidity(e){var t=!e||this._selectedDate&&e===this.i18n.formatDate(N._extractDateParts(this._selectedDate)),i=!this._selectedDate||N._dateAllowed(this._selectedDate,this._minDate,this._maxDate),a=!0;return this._inputElement&&(this._inputElement.checkValidity?a=this._inputElement.checkValidity(e):this._inputElement.validate&&(a=this._inputElement.validate(e))),t&&i&&a}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","enter","esc","tab"],i=0;i<t.length;i++){var a=t[i];if(R.a.keyboardEventMatchesKeys(e,a))return a}}_isValidDate(e){return e&&!isNaN(e.getTime())}_onKeydown(e){if(this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(this._eventKey(e)){case"down":case"up":e.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(e)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":{const e=this.i18n.parseDate(this._inputValue),t=e&&this._parseDate(e.year+"-"+(e.month+1)+"-"+e.day);this._overlayContent.focusedDate&&this._isValidDate(t)&&(this._selectedDate=this._overlayContent.focusedDate),this.close();break}case"esc":this._focusedDate=this._selectedDate,this._close();break;case"tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_validateInput(e,t,i){e&&(t||i)&&(this.invalid=!N._dateAllowed(e,t,i))}_onUserInput(e){this.opened||this.open(),this._userInputValueChanged()}_userInputValueChanged(e){if(this.opened&&this._inputValue){const e=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),t=e&&this._parseDate(`${e.year}-${e.month+1}-${e.day}`);this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,N._dateEquals(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(e,t,i){t&&!i&&this._overlayContent.announceFocusedDate()}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}});class Z extends(_(c(Object(l.a)(Object(z.a)(X(Object(r.a)(s.a))))))){static get template(){return a.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }

      :host([disabled]) [part="clear-button"],
      :host([readonly]) [part="clear-button"],
      :host(:not([has-value])) [part="clear-button"] {
        display: none;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label\$="[[i18n.clear]]"></div>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"3.3.4"}static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)"]}ready(){super.ready(),Object(H.a)(this,()=>this._inputElement.validate=()=>{})}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_clear(){this.__dispatchChange=!0,this.value="",this.validate(),this.focus(),Object(w.d)("tap"),this.__dispatchChange=!1}_clearTouchend(e){this._clear(),e.preventDefault(),Object(w.d)("tap")}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(e){this._inputElement.value=e}get _inputValue(){return this._inputElement.value}_getAriaExpanded(e){return Boolean(e).toString()}get focusElement(){return this._input()||this}}customElements.define(Z.is,Z)},360:function(e,t,i){"use strict";const a={DOMAIN_DEVICE_CLASS:{binary_sensor:["battery","cold","connectivity","door","garage_door","gas","heat","light","lock","moisture","motion","moving","occupancy","opening","plug","power","presence","problem","safety","smoke","sound","vibration","window"],cover:["awning","blind","curtain","damper","door","garage","shade","shutter","window"],sensor:["battery","humidity","illuminance","temperature","pressure","power","signal_strength"],switch:["switch","outlet"]},UNKNOWN_TYPE:"json",ADD_TYPE:"key-value",TYPE_TO_TAG:{string:"ha-customize-string",json:"ha-customize-string",icon:"ha-customize-icon",boolean:"ha-customize-boolean",array:"ha-customize-array","key-value":"ha-customize-key-value"}};a.LOGIC_STATE_ATTRIBUTES=a.LOGIC_STATE_ATTRIBUTES||{entity_picture:void 0,friendly_name:{type:"string",description:"Name"},icon:{type:"icon"},emulated_hue:{type:"boolean",domains:["emulated_hue"]},emulated_hue_name:{type:"string",domains:["emulated_hue"]},haaska_hidden:void 0,haaska_name:void 0,homebridge_hidden:{type:"boolean"},homebridge_name:{type:"string"},supported_features:void 0,attribution:void 0,custom_ui_more_info:{type:"string"},custom_ui_state_card:{type:"string"},device_class:{type:"array",options:a.DOMAIN_DEVICE_CLASS,description:"Device class",domains:["binary_sensor","cover","sensor","switch"]},hidden:{type:"boolean",description:"Hide from UI"},assumed_state:{type:"boolean",domains:["switch","light","cover","climate","fan","group","water_heater"]},initial_state:{type:"string",domains:["automation"]},unit_of_measurement:{type:"string"}},t.a=a},400:function(e,t,i){"use strict";i(93),i(144),i(143),i(146);var a=i(3),n=i(30);customElements.define("paper-time-input",class extends n.a{static get template(){return a.a`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          on-change="_shouldFormatHour"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          on-change="_formatMin"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="59"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `}static get properties(){return{label:{type:String,value:"Time"},autoValidate:{type:Boolean,value:!0},hideLabel:{type:Boolean,value:!1},format:{type:Number,value:12},disabled:{type:Boolean,value:!1},hour:{type:String,notify:!0},min:{type:String,notify:!0},amPm:{type:String,notify:!0,value:"AM"},value:{type:String,notify:!0,readOnly:!0,computed:"_computeTime(min, hour, amPm)"}}}validate(){var e=!0;return!this.$.hour.validate()|!this.$.min.validate()&&(e=!1),12!==this.format||this.$.dropdown.validate()||(e=!1),e}_computeTime(e,t,i){if(t&&e)return 24===this.format&&(i=""),t+":"+e+" "+i}_formatMin(){1===this.min.toString().length&&(this.min=this.min<10?"0"+this.min:this.min)}_shouldFormatHour(){24===this.format&&1===this.hour.toString().length&&(this.hour=this.hour<10?"0"+this.hour:this.hour)}_computeHourMax(e){return 12===e?e:23}_equal(e,t){return e===t}})},406:function(e,t,i){"use strict";var a=i(9),n=i(186),o=i(72),s=i(118);t.a=Object(a.a)(e=>(class extends(Object(o.b)([s.a,n.a],e)){static get properties(){return{withBackdrop:{type:Boolean,value:!0}}}}))},55:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return s}));i(5),i(35);var a=i(31),n=i(1);const o={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=Object(n.a)(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=Object(n.a)(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},s=[a.a,o]},57:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return r}));i(5);var a=i(55),n=i(35),o=i(69);const s={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=o.a._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},r=[a.a,n.a,o.a,s]},66:function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return o}));const a=`${location.protocol}//${location.host}`,n=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),o=()=>fetch("/auth/providers",{credentials:"same-origin"})},69:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(5),i(110);var a=i(55),n=i(1);const o={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){a.b._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Object(n.a)(t).appendChild(this._ripple),e){var i=Object(n.a)(this._rippleContainer||this),a=Object(n.a)(e).rootTarget;i.deepContains(a)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}},716:function(e,t,i){"use strict";i.r(t);i(191),i(208);var a=i(3),n=i(30),o=(i(95),i(150),i(108),i(267),i(268),i(313),i(0)),s=(i(182),i(85),i(93),i(175)),r=i(18);customElements.define("more-info-alarm_control_panel",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        paper-input {
          margin: auto;
          max-width: 200px;
        }
        .pad {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .pad div {
          display: flex;
          flex-direction: column;
        }
        .pad mwc-button {
          width: 80px;
        }
        .actions mwc-button {
          min-width: 160px;
          margin-bottom: 16px;
        }
        mwc-button.disarm {
          color: var(--google-red-500);
        }
      </style>

      <template is="dom-if" if="[[_codeFormat]]">
        <paper-input
          label="[[localize('ui.card.alarm_control_panel.code')]]"
          value="{{_enteredCode}}"
          type="password"
          disabled="[[!_inputEnabled]]"
        ></paper-input>

        <template is="dom-if" if="[[_isNumber(_codeFormat)]]">
          <div class="pad">
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="1"
                raised
                >1</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="4"
                raised
                >4</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="7"
                raised
                >7</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="2"
                raised
                >2</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="5"
                raised
                >5</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="8"
                raised
                >8</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="0"
                raised
                >0</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="3"
                raised
                >3</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="6"
                raised
                >6</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="9"
                raised
                >9</mwc-button
              >
              <mwc-button
                on-click="_clearEnteredCode"
                disabled="[[!_inputEnabled]]"
                raised
              >
                [[localize('ui.card.alarm_control_panel.clear_code')]]
              </mwc-button>
            </div>
          </div>
        </template>
      </template>

      <div class="layout horizontal center-justified actions">
        <template is="dom-if" if="[[_disarmVisible]]">
          <mwc-button
            raised
            class="disarm"
            on-click="_callService"
            data-service="alarm_disarm"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.disarm')]]
          </mwc-button>
        </template>
        <template is="dom-if" if="[[_armVisible]]">
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_home"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_home')]]
          </mwc-button>
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_away"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_away')]]
          </mwc-button>
        </template>
      </div>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},_enteredCode:{type:String,value:""},_codeFormat:{type:String,value:""},_codeValid:{type:Boolean,computed:"_validateCode(_enteredCode,  _codeFormat,  _armVisible, _codeArmRequired)"},_disarmVisible:{type:Boolean,value:!1},_armVisible:{type:Boolean,value:!1},_inputEnabled:{type:Boolean,value:!1}}}constructor(){super(),this._armedStates=["armed_home","armed_away","armed_night","armed_custom_bypass"]}_stateObjChanged(e,t){if(e){const t=e.state,i={_codeFormat:e.attributes.code_format,_armVisible:"disarmed"===t,_codeArmRequired:e.attributes.code_arm_required,_disarmVisible:this._armedStates.includes(t)||"pending"===t||"triggered"===t||"arming"===t};i._inputEnabled=i._disarmVisible||i._armVisible,this.setProperties(i)}t&&setTimeout(()=>{Object(r.a)(this,"iron-resize")},500)}_isNumber(e){return"Number"===e}_validateCode(e,t,i,a){return!t||e.length>0||i&&!a}_digitClicked(e){this._enteredCode+=e.target.getAttribute("data-digit")}_clearEnteredCode(){this._enteredCode=""}_callService(e){const t=e.target.getAttribute("data-service"),i={entity_id:this.stateObj.entity_id,code:this._enteredCode};this.hass.callService("alarm_control_panel",t,i).then(()=>{this._enteredCode=""})}});i(230);customElements.define("more-info-automation",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .actions {
          margin: 36px 0 8px 0;
          text-align: right;
        }
      </style>

      <div class="flex">
        <div>[[localize('ui.card.automation.last_triggered')]]:</div>
        <ha-relative-time
          hass="[[hass]]"
          datetime="[[stateObj.attributes.last_triggered]]"
        ></ha-relative-time>
      </div>

      <div class="actions">
        <mwc-button on-click="handleTriggerTapped">
          [[localize('ui.card.automation.trigger')]]
        </mwc-button>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object}}handleTriggerTapped(){this.hass.callService("automation","trigger",{entity_id:this.stateObj.entity_id})}});var l=i(4),c=i(282),d=i(217),p=i(176);let h=class extends o.a{constructor(){super(...arguments),this.showControls=!1,this._attached=!1,this._forceMJPEG=void 0}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}render(){return this.stateObj&&this._attached?o.f`
      ${this._shouldRenderMJPEG?o.f`
            <img
              @load=${this._elementResized}
              .src=${Object(c.b)(this.stateObj)}
              .alt=${`Preview of the ${Object(p.a)(this.stateObj)} camera.`}
            />
          `:o.f`
            <video
              autoplay
              muted
              playsinline
              ?controls=${this.showControls}
              @loadeddata=${this._elementResized}
            ></video>
          `}
    `:o.f``}updated(e){super.updated(e);const t=e.has("stateObj"),i=e.has("_attached"),a=e.get("stateObj"),n=a?a.entity_id:void 0,o=this.stateObj?this.stateObj.entity_id:void 0;!t&&!i||t&&n===o||(!i||this._attached?this._shouldRenderMJPEG||(this._destroyPolyfill(),o&&this._startHls()):this._destroyPolyfill())}get _shouldRenderMJPEG(){return this._forceMJPEG===this.stateObj.entity_id||!this.hass.config.components.includes("stream")||!Object(d.a)(this.stateObj,c.a)}get _videoEl(){return this.shadowRoot.querySelector("video")}async _startHls(){const e=(await i.e(109).then(i.t.bind(null,702,7))).default;let t=e.isSupported();const a=this._videoEl;if(t||(t=""!==a.canPlayType("application/vnd.apple.mpegurl")),t)try{const{url:t}=await Object(c.d)(this.hass,this.stateObj.entity_id);return void(e.isSupported()?this._renderHLSPolyfill(a,e,t):this._renderHLSNative(a,t))}catch(n){console.error(n),this._forceMJPEG=this.stateObj.entity_id}else this._forceMJPEG=this.stateObj.entity_id}async _renderHLSNative(e,t){e.src=t,await new Promise(t=>e.addEventListener("loadedmetadata",t)),e.play()}async _renderHLSPolyfill(e,t,i){const a=new t;this._hlsPolyfillInstance=a,a.attachMedia(e),a.on(t.Events.MEDIA_ATTACHED,()=>{a.loadSource(i)})}_elementResized(){Object(r.a)(this,"iron-resize")}_destroyPolyfill(){this._hlsPolyfillInstance&&(this._hlsPolyfillInstance.destroy(),this._hlsPolyfillInstance=void 0)}static get styles(){return o.c`
      :host,
      img,
      video {
        display: block;
      }

      img,
      video {
        width: 100%;
      }
    `}};Object(l.b)([Object(o.g)()],h.prototype,"hass",void 0),Object(l.b)([Object(o.g)()],h.prototype,"stateObj",void 0),Object(l.b)([Object(o.g)({type:Boolean})],h.prototype,"showControls",void 0),Object(l.b)([Object(o.g)()],h.prototype,"_attached",void 0),Object(l.b)([Object(o.g)()],h.prototype,"_forceMJPEG",void 0),h=Object(l.b)([Object(o.d)("ha-camera-stream")],h);i(153);class u extends o.a{constructor(){super(...arguments),this._attached=!1}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}render(){return this._attached&&this.hass&&this.stateObj?o.f`
      <ha-camera-stream
        .hass="${this.hass}"
        .stateObj="${this.stateObj}"
        showcontrols
      ></ha-camera-stream>
      ${this._cameraPrefs?o.f`
            <paper-checkbox
              .checked=${this._cameraPrefs.preload_stream}
              @change=${this._handleCheckboxChanged}
            >
              Preload stream
            </paper-checkbox>
          `:void 0}
    `:o.f``}updated(e){if(!e.has("stateObj"))return;const t=e.get("stateObj"),i=t?t.entity_id:void 0,a=this.stateObj?this.stateObj.entity_id:void 0;a!==i&&a&&this.hass.config.components.includes("stream")&&Object(d.a)(this.stateObj,c.a)&&this._fetchCameraPrefs()}async _fetchCameraPrefs(){this._cameraPrefs=await Object(c.c)(this.hass,this.stateObj.entity_id)}async _handleCheckboxChanged(e){const t=e.currentTarget;try{this._cameraPrefs=await Object(c.f)(this.hass,this.stateObj.entity_id,{preload_stream:t.checked})}catch(i){alert(i.message),t.checked=!t.checked}}static get styles(){return o.c`
      paper-checkbox {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--secondary-background-color);
        padding: 5px;
        border-bottom-left-radius: 6px;
      }
    `}}Object(l.b)([Object(o.g)()],u.prototype,"hass",void 0),Object(l.b)([Object(o.g)()],u.prototype,"stateObj",void 0),Object(l.b)([Object(o.g)()],u.prototype,"_cameraPrefs",void 0),Object(l.b)([Object(o.g)()],u.prototype,"_attached",void 0),customElements.define("more-info-camera",u);i(143),i(144),i(207);var m=i(118);customElements.define("ha-climate-control",class extends(Object(m.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
          direction: ltr;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `}static get properties(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}temperatureStateInFlux(e){this.$.target_temperature.classList.toggle("in-flux",e)}_round(e){const t=this.step.toString().split(".");return t[1]?parseFloat(e.toFixed(t[1].length)):Math.round(e)}incrementValue(){const e=this._round(this.value+this.step);this.value<this.max&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e<=this.max?e<=this.min?this.value=this.min:this.value=e:this.value=this.max}decrementValue(){const e=this._round(this.value-this.step);this.value>this.min&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e>=this.min?this.value=e:this.value=this.min}valueChanged(){this.last_changed&&window.setTimeout(()=>{Date.now()-this.last_changed>=2e3&&(this.fire("change"),this.temperatureStateInFlux(!1),this.last_changed=null)},2010)}});i(158),i(224);var b=i(96),g=i(272),f=i(73);class v extends o.a{render(){if(!this.stateObj)return o.f``;const e=this.hass,t=this.stateObj,i=Object(d.a)(t,g.g),a=Object(d.a)(t,g.h),n=Object(d.a)(t,g.f),s=Object(d.a)(t,g.c),r=Object(d.a)(t,g.d),l=Object(d.a)(t,g.e),c=Object(d.a)(t,g.b),p=t.attributes.target_temp_step||(-1===e.config.unit_system.temperature.indexOf("F")?.5:1),h=Object(b.b)(e);return o.f`
      <div
        class=${Object(f.a)({"has-current_temperature":"current_temperature"in t.attributes,"has-current_humidity":"current_humidity"in t.attributes,"has-target_temperature":i,"has-target_temperature_range":a,"has-target_humidity":n,"has-fan_mode":s,"has-swing_mode":l,"has-aux_heat":c,"has-preset_mode":r})}
      >
        <div class="container-temperature">
          <div class=${t.state}>
            ${i||a?o.f`
                  <div>
                    ${e.localize("ui.card.climate.target_temperature")}
                  </div>
                `:""}
            ${t.attributes.temperature?o.f`
                  <ha-climate-control
                    .value=${t.attributes.temperature}
                    .units=${e.config.unit_system.temperature}
                    .step=${p}
                    .min=${t.attributes.min_temp}
                    .max=${t.attributes.max_temp}
                    @change=${this._targetTemperatureChanged}
                  ></ha-climate-control>
                `:""}
            ${t.attributes.target_temp_low||t.attributes.target_temp_high?o.f`
                  <ha-climate-control
                    .value=${t.attributes.target_temp_low}
                    .units=${e.config.unit_system.temperature}
                    .step=${p}
                    .min=${t.attributes.min_temp}
                    .max=${t.attributes.target_temp_high}
                    class="range-control-left"
                    @change=${this._targetTemperatureLowChanged}
                  ></ha-climate-control>
                  <ha-climate-control
                    .value=${t.attributes.target_temp_high}
                    .units=${e.config.unit_system.temperature}
                    .step=${p}
                    .min=${t.attributes.target_temp_low}
                    .max=${t.attributes.max_temp}
                    class="range-control-right"
                    @change=${this._targetTemperatureHighChanged}
                  ></ha-climate-control>
                `:""}
          </div>
        </div>

        ${n?o.f`
              <div class="container-humidity">
                <div>${e.localize("ui.card.climate.target_humidity")}</div>
                <div class="single-row">
                  <div class="target-humidity">
                    ${t.attributes.humidity} %
                  </div>
                  <ha-paper-slider
                    class="humidity"
                    step="1"
                    pin
                    ignore-bar-touch
                    dir=${h}
                    .min=${t.attributes.min_humidity}
                    .max=${t.attributes.max_humidity}
                    .secondaryProgress=${t.attributes.max_humidity}
                    .value=${t.attributes.humidity}
                    @change=${this._targetHumiditySliderChanged}
                  >
                  </ha-paper-slider>
                </div>
              </div>
            `:""}

        <div class="container-hvac_modes">
          <div class="controls">
            <ha-paper-dropdown-menu
              label-float
              dynamic-align
              .label=${e.localize("ui.card.climate.operation")}
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                .selected=${t.state}
                @selected-changed=${this._handleOperationmodeChanged}
              >
                ${t.attributes.hvac_modes.concat().sort(g.i).map(t=>o.f`
                      <paper-item item-name=${t}>
                        ${e.localize(`state.climate.${t}`)}
                      </paper-item>
                    `)}
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </div>

        ${r?o.f`
              <div class="container-preset_modes">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${e.localize("ui.card.climate.preset_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${t.attributes.preset_mode}
                    @selected-changed=${this._handlePresetmodeChanged}
                  >
                    ${t.attributes.preset_modes.map(t=>o.f`
                        <paper-item item-name=${t}>
                          ${e.localize(`state_attributes.climate.preset_mode.${t}`)||t}
                        </paper-item>
                      `)}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `:""}
        ${s?o.f`
              <div class="container-fan_list">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${e.localize("ui.card.climate.fan_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${t.attributes.fan_mode}
                    @selected-changed=${this._handleFanmodeChanged}
                  >
                    ${t.attributes.fan_modes.map(t=>o.f`
                        <paper-item item-name=${t}>
                          ${e.localize(`state_attributes.climate.fan_mode.${t}`)||t}
                        </paper-item>
                      `)}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `:""}
        ${l?o.f`
              <div class="container-swing_list">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${e.localize("ui.card.climate.swing_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${t.attributes.swing_mode}
                    @selected-changed=${this._handleSwingmodeChanged}
                  >
                    ${t.attributes.swing_modes.map(e=>o.f`
                        <paper-item item-name=${e}>${e}</paper-item>
                      `)}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `:""}
        ${c?o.f`
              <div class="container-aux_heat">
                <div class="center horizontal layout single-row">
                  <div class="flex">
                    ${e.localize("ui.card.climate.aux_heat")}
                  </div>
                  <paper-toggle-button
                    .checked=${"on"===t.attributes.aux_heat}
                    @change=${this._auxToggleChanged}
                  ></paper-toggle-button>
                </div>
              </div>
            `:""}
      </div>
    `}updated(e){super.updated(e),e.has("stateObj")&&this.stateObj&&(this._resizeDebounce&&clearTimeout(this._resizeDebounce),this._resizeDebounce=window.setTimeout(()=>{Object(r.a)(this,"iron-resize"),this._resizeDebounce=void 0},500))}_targetTemperatureChanged(e){const t=e.target.value;this._callServiceHelper(this.stateObj.attributes.temperature,t,"set_temperature",{temperature:t})}_targetTemperatureLowChanged(e){const t=e.currentTarget.value;this._callServiceHelper(this.stateObj.attributes.target_temp_low,t,"set_temperature",{target_temp_low:t,target_temp_high:this.stateObj.attributes.target_temp_high})}_targetTemperatureHighChanged(e){const t=e.currentTarget.value;this._callServiceHelper(this.stateObj.attributes.target_temp_high,t,"set_temperature",{target_temp_low:this.stateObj.attributes.target_temp_low,target_temp_high:t})}_targetHumiditySliderChanged(e){const t=e.target.value;this._callServiceHelper(this.stateObj.attributes.humidity,t,"set_humidity",{humidity:t})}_auxToggleChanged(e){const t=e.target.checked;this._callServiceHelper("on"===this.stateObj.attributes.aux_heat,t,"set_aux_heat",{aux_heat:t})}_handleFanmodeChanged(e){const t=e.detail.value;this._callServiceHelper(this.stateObj.attributes.fan_mode,t,"set_fan_mode",{fan_mode:t})}_handleOperationmodeChanged(e){const t=e.detail.value;this._callServiceHelper(this.stateObj.state,t,"set_hvac_mode",{hvac_mode:t})}_handleSwingmodeChanged(e){const t=e.detail.value;this._callServiceHelper(this.stateObj.attributes.swing_mode,t,"set_swing_mode",{swing_mode:t})}_handlePresetmodeChanged(e){const t=e.detail.value||null;this._callServiceHelper(this.stateObj.attributes.preset_mode,t,"set_preset_mode",{preset_mode:t})}async _callServiceHelper(e,t,i,a){if(e===t)return;a.entity_id=this.stateObj.entity_id;const n=this.stateObj;await this.hass.callService("climate",i,a),await new Promise(e=>setTimeout(e,2e3)),this.stateObj===n&&(this.stateObj=void 0,await this.updateComplete,void 0===this.stateObj&&(this.stateObj=n))}static get styles(){return o.c`
      :host {
        color: var(--primary-text-color);
      }

      .container-hvac_modes iron-icon,
      .container-fan_list iron-icon,
      .container-swing_list iron-icon {
        margin: 22px 16px 0 0;
      }

      ha-paper-dropdown-menu {
        width: 100%;
      }

      paper-item {
        cursor: pointer;
      }

      ha-paper-slider {
        width: 100%;
      }

      .container-humidity .single-row {
        display: flex;
        height: 50px;
      }

      .target-humidity {
        width: 90px;
        font-size: 200%;
        margin: auto;
        direction: ltr;
      }

      ha-climate-control.range-control-left,
      ha-climate-control.range-control-right {
        float: left;
        width: 46%;
      }
      ha-climate-control.range-control-left {
        margin-right: 4%;
      }
      ha-climate-control.range-control-right {
        margin-left: 4%;
      }

      .humidity {
        --paper-slider-active-color: var(--paper-blue-400);
        --paper-slider-secondary-color: var(--paper-blue-400);
      }

      .single-row {
        padding: 8px 0;
      }
    `}}Object(l.b)([Object(o.g)()],v.prototype,"hass",void 0),Object(l.b)([Object(o.g)()],v.prototype,"stateObj",void 0),customElements.define("more-info-climate",v);i(113),i(187),i(154);customElements.define("more-info-configurator",class extends n.a{static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        p {
          margin: 8px 0;
        }

        a {
          color: var(--primary-color);
        }

        p > img {
          max-width: 100%;
        }

        p.center {
          text-align: center;
        }

        p.error {
          color: #c62828;
        }

        p.submit {
          text-align: center;
          height: 41px;
        }

        paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }

        [hidden] {
          display: none;
        }
      </style>

      <div class="layout vertical">
        <template is="dom-if" if="[[isConfigurable]]">
          <ha-markdown
            content="[[stateObj.attributes.description]]"
          ></ha-markdown>

          <p class="error" hidden$="[[!stateObj.attributes.errors]]">
            [[stateObj.attributes.errors]]
          </p>

          <template is="dom-repeat" items="[[stateObj.attributes.fields]]">
            <paper-input
              label="[[item.name]]"
              name="[[item.id]]"
              type="[[item.type]]"
              on-change="fieldChanged"
            ></paper-input>
          </template>

          <p class="submit" hidden$="[[!stateObj.attributes.submit_caption]]">
            <mwc-button
              raised=""
              disabled="[[isConfiguring]]"
              on-click="submitClicked"
            >
              <paper-spinner
                active="[[isConfiguring]]"
                hidden="[[!isConfiguring]]"
                alt="Configuring"
              ></paper-spinner>
              [[stateObj.attributes.submit_caption]]
            </mwc-button>
          </p>
        </template>
      </div>
    `}static get properties(){return{stateObj:{type:Object},action:{type:String,value:"display"},isConfigurable:{type:Boolean,computed:"computeIsConfigurable(stateObj)"},isConfiguring:{type:Boolean,value:!1},fieldInput:{type:Object,value:function(){return{}}}}}computeIsConfigurable(e){return"configure"===e.state}fieldChanged(e){var t=e.target;this.fieldInput[t.name]=t.value}submitClicked(){var e={configure_id:this.stateObj.attributes.configure_id,fields:this.fieldInput};this.isConfiguring=!0,this.hass.callService("configurator","configure",e).then(function(){this.isConfiguring=!1}.bind(this),function(){this.isConfiguring=!1}.bind(this))}});i(281),i(179);customElements.define("ha-labeled-slider",class extends n.a{static get template(){return a.a`
      <style>
        :host {
          display: block;
        }

        .title {
          margin-bottom: 16px;
          opacity: var(--dark-primary-opacity);
        }

        ha-icon {
          float: left;
          margin-top: 4px;
          opacity: var(--dark-secondary-opacity);
        }

        ha-paper-slider {
          background-image: var(--ha-slider-background);
        }
      </style>

      <div class="title">[[caption]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-paper-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-paper-slider>
      </div>
    `}static get properties(){return{caption:String,disabled:Boolean,min:Number,max:Number,pin:Boolean,step:Number,extra:{type:Boolean,value:!1},ignoreBarTouch:{type:Boolean,value:!0},icon:{type:String,value:""},value:{type:Number,notify:!0}}}});var y=i(233),_=i(273);function w(e,t){return e&&e.attributes.supported_features?Object.keys(t).map(i=>Object(d.a)(e,Number(i))?t[i]:"").filter(e=>""!==e).join(" "):""}const x={128:"has-set_tilt_position"};customElements.define("more-info-cover",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        .current_position,
        .tilt {
          max-height: 0px;
          overflow: hidden;
        }

        .has-current_position .current_position,
        .has-set_tilt_position .tilt,
        .has-current_tilt_position .tilt {
          max-height: 208px;
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <div class$="[[computeClassNames(stateObj)]]">
        <div class="current_position">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.position')]]"
            pin=""
            value="{{coverPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetPosition]]"
            on-change="coverPositionSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="tilt">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.tilt_position')]]"
            pin=""
            extra=""
            value="{{coverTiltPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetTiltPosition]]"
            on-change="coverTiltPositionSliderChanged"
          >
            <ha-cover-tilt-controls
              slot="extra"
              hidden$="[[entityObj.isTiltOnly]]"
              hass="[[hass]]"
              state-obj="[[stateObj]]"
            ></ha-cover-tilt-controls>
          </ha-labeled-slider>
        </div>
      </div>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"},coverPositionSliderValue:Number,coverTiltPositionSliderValue:Number}}computeEntityObj(e,t){return new y.a(e,t)}stateObjChanged(e){e&&this.setProperties({coverPositionSliderValue:e.attributes.current_position,coverTiltPositionSliderValue:e.attributes.current_tilt_position})}computeClassNames(e){return[Object(_.a)(e,["current_position","current_tilt_position"]),w(e,x)].join(" ")}coverPositionSliderChanged(e){this.entityObj.setCoverPosition(e.target.value)}coverTiltPositionSliderChanged(e){this.entityObj.setCoverTiltPosition(e.target.value)}});var k=i(360);customElements.define("ha-attributes",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .data-entry .value {
          max-width: 200px;
          overflow-wrap: break-word;
        }
        .attribution {
          color: var(--secondary-text-color);
          text-align: right;
        }
      </style>

      <div class="layout vertical">
        <template
          is="dom-repeat"
          items="[[computeDisplayAttributes(stateObj, filtersArray)]]"
          as="attribute"
        >
          <div class="data-entry layout justified horizontal">
            <div class="key">[[formatAttribute(attribute)]]</div>
            <div class="value">
              [[formatAttributeValue(stateObj, attribute)]]
            </div>
          </div>
        </template>
        <div class="attribution" hidden$="[[!computeAttribution(stateObj)]]">
          [[computeAttribution(stateObj)]]
        </div>
      </div>
    `}static get properties(){return{stateObj:{type:Object},extraFilters:{type:String,value:""},filtersArray:{type:Array,computed:"computeFiltersArray(extraFilters)"}}}computeFiltersArray(e){return Object.keys(k.a.LOGIC_STATE_ATTRIBUTES).concat(e?e.split(","):[])}computeDisplayAttributes(e,t){return e?Object.keys(e.attributes).filter((function(e){return-1===t.indexOf(e)})):[]}formatAttribute(e){return e.replace(/_/g," ")}formatAttributeValue(e,t){var i=e.attributes[t];return null===i?"-":Array.isArray(i)?i.join(", "):i instanceof Object?JSON.stringify(i,null,2):i}computeAttribution(e){return e.attributes.attribution}});customElements.define("more-info-default",class extends n.a{static get template(){return a.a`
      <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
    `}static get properties(){return{stateObj:{type:Object}}}});customElements.define("more-info-fan",class extends(Object(s.a)(Object(m.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        .container-speed_list,
        .container-direction,
        .container-oscillating {
          display: none;
        }

        .has-speed_list .container-speed_list,
        .has-direction .container-direction,
        .has-oscillating .container-oscillating {
          display: block;
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-speed_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.fan.speed')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.speed]]"
              on-selected-changed="speedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <div class="container-oscillating">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.fan.oscillate')]]</div>
            <paper-toggle-button
              checked="[[oscillationToggleChecked]]"
              on-change="oscillationToggleChanged"
            >
            </paper-toggle-button>
          </div>
        </div>

        <div class="container-direction">
          <div class="direction">
            <div>[[localize('ui.card.fan.direction')]]</div>
            <paper-icon-button
              icon="hass:rotate-left"
              on-click="onDirectionReverse"
              title="[[localize('ui.card.fan.reverse')]]"
              disabled="[[computeIsRotatingReverse(stateObj)]]"
            ></paper-icon-button>
            <paper-icon-button
              icon="hass:rotate-right"
              on-click="onDirectionForward"
              title="[[localize('ui.card.fan.forward')]]"
              disabled="[[computeIsRotatingForward(stateObj)]]"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="speed,speed_list,oscillating,direction"
      ></ha-attributes>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},oscillationToggleChecked:{type:Boolean}}}stateObjChanged(e,t){e&&this.setProperties({oscillationToggleChecked:e.attributes.oscillating}),t&&setTimeout(()=>{this.fire("iron-resize")},500)}computeClassNames(e){return"more-info-fan "+Object(_.a)(e,["oscillating","speed_list","direction"])}speedChanged(e){var t=this.stateObj.attributes.speed,i=e.detail.value;i&&t!==i&&this.hass.callService("fan","turn_on",{entity_id:this.stateObj.entity_id,speed:i})}oscillationToggleChanged(e){var t=this.stateObj.attributes.oscillating,i=e.target.checked;t!==i&&this.hass.callService("fan","oscillate",{entity_id:this.stateObj.entity_id,oscillating:i})}onDirectionReverse(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"reverse"})}onDirectionForward(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"forward"})}computeIsRotatingReverse(e){return"reverse"===e.attributes.direction}computeIsRotatingForward(e){return"forward"===e.attributes.direction}});var O=i(1),j=i(180),C=i(274);customElements.define("more-info-group",class extends n.a{static get template(){return a.a`
      <style>
        .child-card {
          margin-bottom: 8px;
        }

        .child-card:last-child {
          margin-bottom: 0;
        }
      </style>

      <div id="groupedControlDetails"></div>
      <template is="dom-repeat" items="[[states]]" as="state">
        <div class="child-card">
          <state-card-content
            state-obj="[[state]]"
            hass="[[hass]]"
          ></state-card-content>
        </div>
      </template>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},states:{type:Array,computed:"computeStates(stateObj, hass)"}}}static get observers(){return["statesChanged(stateObj, states)"]}computeStates(e,t){for(var i=[],a=e.attributes.entity_id||[],n=0;n<a.length;n++){var o=t.states[a[n]];o&&i.push(o)}return i}statesChanged(e,t){let i=!1,a=!1;if(t&&t.length>0){const n=t.find(e=>"on"===e.state)||t[0];if("group"!==(a=Object(j.a)(n))){i={...n,entity_id:e.entity_id,attributes:{...n.attributes}};for(let e=0;e<t.length;e++)if(a!==Object(j.a)(t[e])){i=!1;break}}}if(i)Object(C.a)(this.$.groupedControlDetails,"MORE-INFO-"+a.toUpperCase(),{stateObj:i,hass:this.hass});else{const e=Object(O.a)(this.$.groupedControlDetails);e.lastChild&&e.removeChild(e.lastChild)}}});i(331);customElements.define("more-info-history_graph",class extends n.a{static get template(){return a.a`
      <style>
        :host {
          display: block;
          margin-bottom: 6px;
        }
      </style>
      <ha-history_graph-card
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog=""
      >
        <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
      </ha-history_graph-card>
    `}static get properties(){return{hass:Object,stateObj:Object}}});i(341),i(400);customElements.define("more-info-input_datetime",class extends n.a{static get template(){return a.a`
      <div class$="[[computeClassNames(stateObj)]]">
        <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">
          <div>
            <vaadin-date-picker
              id="dateInput"
              on-value-changed="dateTimeChanged"
              label="Date"
              value="{{selectedDate}}"
            ></vaadin-date-picker>
          </div>
        </template>
        <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">
          <div>
            <paper-time-input
              hour="{{selectedHour}}"
              min="{{selectedMinute}}"
              format="24"
            ></paper-time-input>
          </div>
        </template>
      </div>
    `}constructor(){super(),this.is_ready=!1}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},selectedDate:{type:String,observer:"dateTimeChanged"},selectedHour:{type:Number,observer:"dateTimeChanged"},selectedMinute:{type:Number,observer:"dateTimeChanged"}}}ready(){super.ready(),this.is_ready=!0}getDateString(e){return"unknown"===e.state?"":(t=e.attributes.month<10?"0":"",i=e.attributes.day<10?"0":"",e.attributes.year+"-"+t+e.attributes.month+"-"+i+e.attributes.day);var t,i}dateTimeChanged(){if(!this.is_ready)return;let e,t=!1;const i={entity_id:this.stateObj.entity_id};if(this.stateObj.attributes.has_time){t|=parseInt(this.selectedMinute)!==this.stateObj.attributes.minute,t|=parseInt(this.selectedHour)!==this.stateObj.attributes.hour,e=this.selectedMinute<10?"0":"";var a=this.selectedHour+":"+e+this.selectedMinute;i.time=a}if(this.stateObj.attributes.has_date){if(0===this.selectedDate.length)return;const e=new Date(this.selectedDate);t|=new Date(this.stateObj.attributes.year,this.stateObj.attributes.month-1,this.stateObj.attributes.day)!==e,i.date=this.selectedDate}t&&this.hass.callService("input_datetime","set_datetime",i)}stateObjChanged(e){this.is_ready=!1,e.attributes.has_time&&(this.selectedHour=e.attributes.hour,this.selectedMinute=e.attributes.minute),e.attributes.has_date&&(this.selectedDate=this.getDateString(e)),this.is_ready=!0}doesHaveDate(e){return e.attributes.has_date}doesHaveTime(e){return e.attributes.has_time}computeClassNames(e){return"more-info-input_datetime "+Object(_.a)(e,["has_time","has_date"])}});customElements.define("ha-color-picker",class extends(Object(m.a)(n.a)){static get template(){return a.a`
      <style>
        :host {
          user-select: none;
          -webkit-user-select: none;
        }

        #canvas {
          position: relative;
          width: 100%;
          max-width: 330px;
        }
        #canvas > * {
          display: block;
        }
        #interactionLayer {
          color: white;
          position: absolute;
          cursor: crosshair;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        #backgroundLayer {
          width: 100%;
          overflow: visible;
          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);
          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);
          --wheel-shadow: var(
            --ha-color-picker-wheel-shadow,
            rgb(15, 15, 15) 10px 5px 5px 0px
          );
        }

        #marker {
          fill: currentColor;
          stroke: var(--ha-color-picker-marker-bordercolor, white);
          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);
          filter: url(#marker-shadow);
        }
        .dragging #marker {
        }

        #colorTooltip {
          display: none;
          fill: currentColor;
          stroke: var(--ha-color-picker-tooltip-bordercolor, white);
          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);
        }

        .touch.dragging #colorTooltip {
          display: inherit;
        }
      </style>
      <div id="canvas">
        <svg id="interactionLayer">
          <defs>
            <filter
              id="marker-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                result="offOut"
                in="SourceAlpha"
                dx="2"
                dy="2"
              ></feOffset>
              <feGaussianBlur
                result="blurOut"
                in="offOut"
                stdDeviation="2"
              ></feGaussianBlur>
              <feComponentTransfer in="blurOut" result="alphaOut">
                <feFuncA type="linear" slope="0.3"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="alphaOut"
                mode="normal"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <canvas id="backgroundLayer"></canvas>
      </div>
    `}static get properties(){return{hsColor:{type:Object},desiredHsColor:{type:Object,observer:"applyHsColor"},width:{type:Number,value:500},height:{type:Number,value:500},radius:{type:Number,value:225},hueSegments:{type:Number,value:0,observer:"segmentationChange"},saturationSegments:{type:Number,value:0,observer:"segmentationChange"},ignoreSegments:{type:Boolean,value:!1},throttle:{type:Number,value:500}}}ready(){super.ready(),this.setupLayers(),this.drawColorWheel(),this.drawMarker(),this.interactionLayer.addEventListener("mousedown",e=>this.onMouseDown(e)),this.interactionLayer.addEventListener("touchstart",e=>this.onTouchStart(e))}convertToCanvasCoordinates(e,t){var i=this.interactionLayer.createSVGPoint();i.x=e,i.y=t;var a=i.matrixTransform(this.interactionLayer.getScreenCTM().inverse());return{x:a.x,y:a.y}}onMouseDown(e){const t=this.convertToCanvasCoordinates(e.clientX,e.clientY);this.isInWheel(t.x,t.y)&&(this.onMouseSelect(e),this.canvas.classList.add("mouse","dragging"),this.addEventListener("mousemove",this.onMouseSelect),this.addEventListener("mouseup",this.onMouseUp))}onMouseUp(){this.canvas.classList.remove("mouse","dragging"),this.removeEventListener("mousemove",this.onMouseSelect)}onMouseSelect(e){requestAnimationFrame(()=>this.processUserSelect(e))}onTouchStart(e){var t=e.changedTouches[0];const i=this.convertToCanvasCoordinates(t.clientX,t.clientY);if(this.isInWheel(i.x,i.y)){if(e.target===this.marker)return e.preventDefault(),this.canvas.classList.add("touch","dragging"),this.addEventListener("touchmove",this.onTouchSelect),void this.addEventListener("touchend",this.onTouchEnd);this.tapBecameScroll=!1,this.addEventListener("touchend",this.onTap),this.addEventListener("touchmove",()=>{this.tapBecameScroll=!0},{passive:!0})}}onTap(e){this.tapBecameScroll||(e.preventDefault(),this.onTouchSelect(e))}onTouchEnd(){this.canvas.classList.remove("touch","dragging"),this.removeEventListener("touchmove",this.onTouchSelect)}onTouchSelect(e){requestAnimationFrame(()=>this.processUserSelect(e.changedTouches[0]))}processUserSelect(e){var t=this.convertToCanvasCoordinates(e.clientX,e.clientY),i=this.getColor(t.x,t.y);this.onColorSelect(i)}onColorSelect(e){if(this.setMarkerOnColor(e),this.ignoreSegments||(e=this.applySegmentFilter(e)),this.applyColorToCanvas(e),this.colorSelectIsThrottled)return clearTimeout(this.ensureFinalSelect),void(this.ensureFinalSelect=setTimeout(()=>{this.fireColorSelected(e)},this.throttle));this.fireColorSelected(e),this.colorSelectIsThrottled=!0,setTimeout(()=>{this.colorSelectIsThrottled=!1},this.throttle)}fireColorSelected(e){this.hsColor=e,this.fire("colorselected",{hs:{h:e.h,s:e.s}})}setMarkerOnColor(e){var t=e.s*this.radius,i=(e.h-180)/180*Math.PI,a=`translate(${-t*Math.cos(i)},${-t*Math.sin(i)})`;this.marker.setAttribute("transform",a),this.tooltip.setAttribute("transform",a)}applyColorToCanvas(e){this.interactionLayer.style.color=`hsl(${e.h}, 100%, ${100-50*e.s}%)`}applyHsColor(e){this.hsColor&&this.hsColor.h===e.h&&this.hsColor.s===e.s||(this.setMarkerOnColor(e),this.ignoreSegments||(e=this.applySegmentFilter(e)),this.hsColor=e,this.applyColorToCanvas(e))}getAngle(e,t){return Math.atan2(-t,-e)/Math.PI*180+180}isInWheel(e,t){return this.getDistance(e,t)<=1}getDistance(e,t){return Math.sqrt(e*e+t*t)/this.radius}getColor(e,t){var i=this.getAngle(e,t),a=this.getDistance(e,t);return{h:i,s:Math.min(a,1)}}applySegmentFilter(e){if(this.hueSegments){const t=360/this.hueSegments,i=t/2;e.h-=i,e.h<0&&(e.h+=360);const a=e.h%t;e.h-=a-t}if(this.saturationSegments)if(1===this.saturationSegments)e.s=1;else{var t=1/this.saturationSegments,i=1/(this.saturationSegments-1),a=Math.floor(e.s/t)*i;e.s=Math.min(a,1)}return e}setupLayers(){this.canvas=this.$.canvas,this.backgroundLayer=this.$.backgroundLayer,this.interactionLayer=this.$.interactionLayer,this.originX=this.width/2,this.originY=this.originX,this.backgroundLayer.width=this.width,this.backgroundLayer.height=this.height,this.interactionLayer.setAttribute("viewBox",`${-this.originX} ${-this.originY} ${this.width} ${this.height}`)}drawColorWheel(){let e,t,i,a;const n=this.backgroundLayer.getContext("2d"),o=this.originX,s=this.originY,r=this.radius,l=!1,c=window.getComputedStyle(this.backgroundLayer,null),d=parseInt(c.getPropertyValue("--wheel-borderwidth"),10),p=c.getPropertyValue("--wheel-bordercolor").trim(),h=c.getPropertyValue("--wheel-shadow").trim();if("none"!==h){const n=h.split("px ");e=n.pop(),t=parseInt(n[0],10),i=parseInt(n[1],10),a=parseInt(n[2],10)||0}const u=r+d/2,m=r,b=r+d;"none"!==c.shadow&&(n.save(),n.beginPath(),n.arc(o,s,b,0,2*Math.PI,!1),n.shadowColor=e,n.shadowOffsetX=t,n.shadowOffsetY=i,n.shadowBlur=a,n.fillStyle="white",n.fill(),n.restore()),function(e,t){const i=360/(e=e||360),a=i/2;for(var r=0;r<=360;r+=i){var c=(r-a)*(Math.PI/180),d=(r+a+1)*(Math.PI/180);n.beginPath(),n.moveTo(o,s),n.arc(o,s,m,c,d,l),n.closePath();var p=n.createRadialGradient(o,s,0,o,s,m);let e=100;if(p.addColorStop(0,`hsl(${r}, 100%, ${e}%)`),t>0){const i=1/t;let a=0;for(var h=1;h<t;h+=1){var u=e;e=100-50*(a=h*i),p.addColorStop(a,`hsl(${r}, 100%, ${u}%)`),p.addColorStop(a,`hsl(${r}, 100%, ${e}%)`)}p.addColorStop(a,`hsl(${r}, 100%, 50%)`)}p.addColorStop(1,`hsl(${r}, 100%, 50%)`),n.fillStyle=p,n.fill()}}(this.hueSegments,this.saturationSegments),d>0&&(n.beginPath(),n.arc(o,s,u,0,2*Math.PI,!1),n.lineWidth=d,n.strokeStyle=p,n.stroke())}drawMarker(){const e=this.interactionLayer,t=.08*this.radius,i=.15*this.radius,a=-3*i;e.marker=document.createElementNS("http://www.w3.org/2000/svg","circle"),e.marker.setAttribute("id","marker"),e.marker.setAttribute("r",t),this.marker=e.marker,e.appendChild(e.marker),e.tooltip=document.createElementNS("http://www.w3.org/2000/svg","circle"),e.tooltip.setAttribute("id","colorTooltip"),e.tooltip.setAttribute("r",i),e.tooltip.setAttribute("cx",0),e.tooltip.setAttribute("cy",a),this.tooltip=e.tooltip,e.appendChild(e.tooltip)}segmentationChange(){this.backgroundLayer&&this.drawColorWheel()}});const S={1:"has-brightness",2:"has-color_temp",4:"has-effect_list",16:"has-color",128:"has-white_value"};customElements.define("more-info-light",class extends(Object(s.a)(Object(m.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        .effect_list,
        .brightness,
        .color_temp,
        .white_value {
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .color_temp {
          --ha-slider-background: -webkit-linear-gradient(
            right,
            rgb(255, 160, 0) 0%,
            white 50%,
            rgb(166, 209, 255) 100%
          );
          /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
          --paper-slider-knob-start-border-color: var(--primary-color);
        }

        .segmentationContainer {
          position: relative;
          width: 100%;
        }

        ha-color-picker {
          display: block;
          width: 100%;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          padding: 0px;
          max-height: 0px;
          width: 23px;
          height: 23px;
          opacity: var(--dark-secondary-opacity);
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-color.is-on .segmentationContainer .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          width: 23px;
          height: 23px;
          padding: 0px;
          opacity: var(--dark-secondary-opacity);
        }

        .has-effect_list.is-on .effect_list,
        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          max-height: 84px;
        }

        .has-brightness .has-color_temp.is-on,
        .has-white_value.is-on {
          margin-top: -16px;
        }

        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          padding-top: 16px;
        }

        .has-color.is-on .segmentationButton {
          max-height: 100px;
          overflow: visible;
        }

        .has-color.is-on ha-color-picker {
          max-height: 500px;
          overflow: visible;
          --ha-color-picker-wheel-borderwidth: 5;
          --ha-color-picker-wheel-bordercolor: white;
          --ha-color-picker-wheel-shadow: none;
          --ha-color-picker-marker-borderwidth: 2;
          --ha-color-picker-marker-bordercolor: white;
        }

        .is-unavailable .control {
          max-height: 0px;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="control brightness">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.brightness')]]"
            icon="hass:brightness-5"
            min="1"
            max="255"
            value="{{brightnessSliderValue}}"
            on-change="brightnessSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control color_temp">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.color_temperature')]]"
            icon="hass:thermometer"
            min="[[stateObj.attributes.min_mireds]]"
            max="[[stateObj.attributes.max_mireds]]"
            value="{{ctSliderValue}}"
            on-change="ctSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control white_value">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.white_value')]]"
            icon="hass:file-word-box"
            max="255"
            value="{{wvSliderValue}}"
            on-change="wvSliderChanged"
          ></ha-labeled-slider>
        </div>
        <div class="segmentationContainer">
          <ha-color-picker
            class="control color"
            on-colorselected="colorPicked"
            desired-hs-color="{{colorPickerColor}}"
            throttle="500"
            hue-segments="{{hueSegments}}"
            saturation-segments="{{saturationSegments}}"
          >
          </ha-color-picker>
          <paper-icon-button
            icon="mdi:palette"
            on-click="segmentClick"
            class="control segmentationButton"
          ></paper-icon-button>
        </div>

        <div class="control effect_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.light.effect')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.effect]]"
              on-selected-changed="effectChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.effect_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <ha-attributes
          state-obj="[[stateObj]]"
          extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds"
        ></ha-attributes>
      </div>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},brightnessSliderValue:{type:Number,value:0},ctSliderValue:{type:Number,value:0},wvSliderValue:{type:Number,value:0},hueSegments:{type:Number,value:24},saturationSegments:{type:Number,value:8},colorPickerColor:{type:Object}}}stateObjChanged(e,t){const i={brightnessSliderValue:0};e&&"on"===e.state&&(i.brightnessSliderValue=e.attributes.brightness,i.ctSliderValue=e.attributes.color_temp,i.wvSliderValue=e.attributes.white_value,e.attributes.hs_color&&(i.colorPickerColor={h:e.attributes.hs_color[0],s:e.attributes.hs_color[1]/100})),this.setProperties(i),t&&setTimeout(()=>{this.fire("iron-resize")},500)}computeClassNames(e){const t=[w(e,S)];return e&&"on"===e.state&&t.push("is-on"),e&&"unavailable"===e.state&&t.push("is-unavailable"),t.join(" ")}effectChanged(e){var t=this.stateObj.attributes.effect,i=e.detail.value;i&&t!==i&&this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,effect:i})}brightnessSliderChanged(e){var t=parseInt(e.target.value,10);isNaN(t)||this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,brightness:t})}ctSliderChanged(e){var t=parseInt(e.target.value,10);isNaN(t)||this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,color_temp:t})}wvSliderChanged(e){var t=parseInt(e.target.value,10);isNaN(t)||this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,white_value:t})}segmentClick(){24===this.hueSegments&&8===this.saturationSegments?this.setProperties({hueSegments:0,saturationSegments:0}):this.setProperties({hueSegments:24,saturationSegments:8})}serviceChangeColor(e,t,i){e.callService("light","turn_on",{entity_id:t,hs_color:[i.h,100*i.s]})}colorPicked(e){this.serviceChangeColor(this.hass,this.stateObj.entity_id,e.detail.hs)}});customElements.define("more-info-lock",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        paper-input {
          display: inline-block;
        }
      </style>

      <template is="dom-if" if="[[stateObj.attributes.code_format]]">
        <paper-input
          label="[[localize('ui.card.lock.code')]]"
          value="{{enteredCode}}"
          pattern="[[stateObj.attributes.code_format]]"
          type="password"
        ></paper-input>
        <mwc-button
          on-click="callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </template>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="code_format"
      ></ha-attributes>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},enteredCode:{type:String,value:""},isLocked:Boolean}}stateObjChanged(e){e&&(this.isLocked="locked"===e.state)}callService(e){const t=e.target.getAttribute("data-service"),i={entity_id:this.stateObj.entity_id,code:this.enteredCode};this.hass.callService("lock",t,i)}});i(109);var D=i(264),T=i(221);customElements.define("more-info-media_player",class extends(Object(s.a)(Object(m.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .media-state {
          text-transform: capitalize;
        }

        paper-icon-button[highlight] {
          color: var(--accent-color);
        }

        .volume {
          margin-bottom: 8px;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-volume_level .volume {
          max-height: 40px;
        }

        iron-icon.source-input {
          padding: 7px;
          margin-top: 15px;
        }

        ha-paper-dropdown-menu.source-input {
          margin-left: 10px;
        }

        [hidden] {
          display: none !important;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="layout horizontal">
          <div class="flex">
            <paper-icon-button
              icon="hass:power"
              highlight$="[[playerObj.isOff]]"
              on-click="handleTogglePower"
              hidden$="[[computeHidePowerButton(playerObj)]]"
            ></paper-icon-button>
          </div>
          <div>
            <template
              is="dom-if"
              if="[[computeShowPlaybackControls(playerObj)]]"
            >
              <paper-icon-button
                icon="hass:skip-previous"
                on-click="handlePrevious"
                hidden$="[[!playerObj.supportsPreviousTrack]]"
              ></paper-icon-button>
              <paper-icon-button
                icon="[[computePlaybackControlIcon(playerObj)]]"
                on-click="handlePlaybackControl"
                hidden$="[[!computePlaybackControlIcon(playerObj)]]"
                highlight=""
              ></paper-icon-button>
              <paper-icon-button
                icon="hass:skip-next"
                on-click="handleNext"
                hidden$="[[!playerObj.supportsNextTrack]]"
              ></paper-icon-button>
            </template>
          </div>
        </div>
        <!-- VOLUME -->
        <div
          class="volume_buttons center horizontal layout"
          hidden$="[[computeHideVolumeButtons(playerObj)]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            icon="hass:volume-off"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeDown"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeDown"
            on-touchstart="handleVolumeDown"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-medium"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeUp"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeUp"
            on-touchstart="handleVolumeUp"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-high"
          ></paper-icon-button>
        </div>
        <div
          class="volume center horizontal layout"
          hidden$="[[!playerObj.supportsVolumeSet]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            hidden$="[[playerObj.supportsVolumeButtons]]"
            icon="[[computeMuteVolumeIcon(playerObj)]]"
          ></paper-icon-button>
          <ha-paper-slider
            disabled$="[[playerObj.isMuted]]"
            min="0"
            max="100"
            value="[[playerObj.volumeSliderValue]]"
            on-change="volumeSliderChanged"
            class="flex"
            ignore-bar-touch=""
            dir="{{rtl}}"
          >
          </ha-paper-slider>
        </div>
        <!-- SOURCE PICKER -->
        <div
          class="controls layout horizontal justified"
          hidden$="[[computeHideSelectSource(playerObj)]]"
        >
          <iron-icon class="source-input" icon="hass:login-variant"></iron-icon>
          <ha-paper-dropdown-menu
            class="flex source-input"
            dynamic-align=""
            label-float=""
            label="[[localize('ui.card.media_player.source')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="[[playerObj.source]]"
              on-selected-changed="handleSourceChanged"
            >
              <template is="dom-repeat" items="[[playerObj.sourceList]]">
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>
        <!-- SOUND MODE PICKER -->
        <template is="dom-if" if="[[!computeHideSelectSoundMode(playerObj)]]">
          <div class="controls layout horizontal justified">
            <iron-icon class="source-input" icon="hass:music-note"></iron-icon>
            <ha-paper-dropdown-menu
              class="flex source-input"
              dynamic-align
              label-float
              label="[[localize('ui.card.media_player.sound_mode')]]"
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                selected="[[playerObj.soundMode]]"
                on-selected-changed="handleSoundModeChanged"
              >
                <template is="dom-repeat" items="[[playerObj.soundModeList]]">
                  <paper-item item-name$="[[item]]">[[item]]</paper-item>
                </template>
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </template>
        <!-- TTS -->
        <div
          hidden$="[[computeHideTTS(ttsLoaded, playerObj)]]"
          class="layout horizontal end"
        >
          <paper-input
            id="ttsInput"
            label="[[localize('ui.card.media_player.text_to_speak')]]"
            class="flex"
            value="{{ttsMessage}}"
            on-keydown="ttsCheckForEnter"
          ></paper-input>
          <paper-icon-button
            icon="hass:send"
            on-click="sendTTS"
          ></paper-icon-button>
        </div>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)",observer:"playerObjChanged"},ttsLoaded:{type:Boolean,computed:"computeTTSLoaded(hass)"},ttsMessage:{type:String,value:""},rtl:{type:String,computed:"_computeRTLDirection(hass)"}}}computePlayerObj(e,t){return new D.a(e,t)}playerObjChanged(e,t){t&&setTimeout(()=>{this.fire("iron-resize")},500)}computeClassNames(e){return Object(_.a)(e,["volume_level"])}computeMuteVolumeIcon(e){return e.isMuted?"hass:volume-off":"hass:volume-high"}computeHideVolumeButtons(e){return!e.supportsVolumeButtons||e.isOff}computeShowPlaybackControls(e){return!e.isOff&&e.hasMediaControl}computePlaybackControlIcon(e){return e.isPlaying?e.supportsPause?"hass:pause":"hass:stop":e.hasMediaControl||e.isOff||e.isIdle?e.hasMediaControl&&e.supportsPause&&!e.isPaused?"hass:play-pause":e.supportsPlay?"hass:play":null:""}computeHidePowerButton(e){return e.isOff?!e.supportsTurnOn:!e.supportsTurnOff}computeHideSelectSource(e){return e.isOff||!e.supportsSelectSource||!e.sourceList}computeHideSelectSoundMode(e){return e.isOff||!e.supportsSelectSoundMode||!e.soundModeList}computeHideTTS(e,t){return!e||!t.supportsPlayMedia}computeTTSLoaded(e){return Object(T.a)(e,"tts")}handleTogglePower(){this.playerObj.togglePower()}handlePrevious(){this.playerObj.previousTrack()}handlePlaybackControl(){this.playerObj.mediaPlayPause()}handleNext(){this.playerObj.nextTrack()}handleSourceChanged(e){if(this.playerObj){var t=this.playerObj.source,i=e.detail.value;i&&t!==i&&this.playerObj.selectSource(i)}}handleSoundModeChanged(e){if(this.playerObj){var t=this.playerObj.soundMode,i=e.detail.value;i&&t!==i&&this.playerObj.selectSoundMode(i)}}handleVolumeTap(){this.playerObj.supportsVolumeMute&&this.playerObj.volumeMute(!this.playerObj.isMuted)}handleVolumeTouchEnd(e){e.preventDefault()}handleVolumeUp(){const e=this.$.volumeUp;this.handleVolumeWorker("volume_up",e,!0)}handleVolumeDown(){const e=this.$.volumeDown;this.handleVolumeWorker("volume_down",e,!0)}handleVolumeWorker(e,t,i){(i||void 0!==t&&t.pointerDown)&&(this.playerObj.callService(e),setTimeout(()=>this.handleVolumeWorker(e,t,!1),500))}volumeSliderChanged(e){const t=parseFloat(e.target.value),i=t>0?t/100:0;this.playerObj.setVolume(i)}ttsCheckForEnter(e){13===e.keyCode&&this.sendTTS()}sendTTS(){const e=this.hass.services.tts,t=Object.keys(e).sort();let i,a;for(a=0;a<t.length;a++)if(-1!==t[a].indexOf("_say")){i=t[a];break}i&&(this.hass.callService("tts",i,{entity_id:this.stateObj.entity_id,message:this.ttsMessage}),this.ttsMessage="",this.$.ttsInput.focus())}_computeRTLDirection(e){return Object(b.b)(e)}});customElements.define("more-info-script",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="layout vertical">
        <div class="data-entry layout justified horizontal">
          <div class="key">
            [[localize('ui.dialogs.more_info_control.script.last_action')]]
          </div>
          <div class="value">[[stateObj.attributes.last_action]]</div>
        </div>
      </div>
    `}static get properties(){return{stateObj:{type:Object}}}});var E=i(214);customElements.define("more-info-sun",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>

      <template
        is="dom-repeat"
        items="[[computeOrder(risingDate, settingDate)]]"
      >
        <div class="data-entry layout justified horizontal">
          <div class="key">
            <span>[[itemCaption(item)]]</span>
            <ha-relative-time
              hass="[[hass]]"
              datetime-obj="[[itemDate(item)]]"
            ></ha-relative-time>
          </div>
          <div class="value">[[itemValue(item)]]</div>
        </div>
      </template>
      <div class="data-entry layout justified horizontal">
        <div class="key">
          [[localize('ui.dialogs.more_info_control.sun.elevation')]]
        </div>
        <div class="value">[[stateObj.attributes.elevation]]</div>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,risingDate:{type:Object,computed:"computeRising(stateObj)"},settingDate:{type:Object,computed:"computeSetting(stateObj)"}}}computeRising(e){return new Date(e.attributes.next_rising)}computeSetting(e){return new Date(e.attributes.next_setting)}computeOrder(e,t){return e>t?["set","ris"]:["ris","set"]}itemCaption(e){return"ris"===e?this.localize("ui.dialogs.more_info_control.sun.rising"):this.localize("ui.dialogs.more_info_control.sun.setting")}itemDate(e){return"ris"===e?this.risingDate:this.settingDate}itemValue(e){return Object(E.a)(this.itemDate(e),this.hass.language)}});let A=class extends o.a{render(){return this.hass&&this.stateObj?o.f`
      <ha-attributes
        .stateObj=${this.stateObj}
        .extraFilters=${"remaining"}
      ></ha-attributes>
      <div class="actions">
        ${"idle"===this.stateObj.state||"paused"===this.stateObj.state?o.f`
              <mwc-button
                .action="${"start"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.start")}
              </mwc-button>
            `:""}
        ${"active"===this.stateObj.state?o.f`
              <mwc-button
                .action="${"pause"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.pause")}
              </mwc-button>
            `:""}
        ${"active"===this.stateObj.state||"paused"===this.stateObj.state?o.f`
              <mwc-button
                .action="${"cancel"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.cancel")}
              </mwc-button>
              <mwc-button
                .action="${"finish"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.finish")}
              </mwc-button>
            `:""}
      </div>
    `:o.f``}updated(e){super.updated(e),e.has("stateObj")&&this.stateObj}_handleActionClick(e){const t=e.currentTarget.action;this.hass.callService("timer",t,{entity_id:this.stateObj.entity_id})}static get styles(){return o.c`
      .actions {
        margin: 0 8px;
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}};Object(l.b)([Object(o.g)()],A.prototype,"hass",void 0),Object(l.b)([Object(o.g)()],A.prototype,"stateObj",void 0),A=Object(l.b)([Object(o.d)("more-info-timer")],A);customElements.define("more-info-updater",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        .link {
          color: #03a9f4;
        }
      </style>

      <div>
        <a
          class="link"
          href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/docs/installation/updating/"
          target="_blank"
          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a
        >
      </div>
    `}static get properties(){return{stateObj:{type:Object}}}computeReleaseNotes(e){return e.attributes.release_notes||"https://www.home-assistant.io/docs/installation/updating/"}});customElements.define("more-info-vacuum",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        .status-subtitle {
          color: var(--secondary-text-color);
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class="horizontal justified layout">
        <div hidden$="[[!supportsStatus(stateObj)]]">
          <span class="status-subtitle">Status: </span
          ><span><strong>[[stateObj.attributes.status]]</strong></span>
        </div>
        <div hidden$="[[!supportsBattery(stateObj)]]">
          <span
            ><iron-icon icon="[[stateObj.attributes.battery_icon]]"></iron-icon>
            [[stateObj.attributes.battery_level]] %</span
          >
        </div>
      </div>
      <div hidden$="[[!supportsCommandBar(stateObj)]]">
        <p></p>
        <div class="status-subtitle">Vacuum cleaner commands:</div>
        <div class="horizontal justified layout">
          <template is="dom-if" if="[[supportsStart(stateObj)]]">
            <div>
              <paper-icon-button
                icon="hass:play"
                on-click="onStart"
                title="Start"
              ></paper-icon-button>
            </div>
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:pause"
                on-click="onPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>
          <template is="dom-if" if="[[!supportsStart(stateObj)]]">
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:play-pause"
                on-click="onPlayPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>

          <div hidden$="[[!supportsStop(stateObj)]]">
            <paper-icon-button
              icon="hass:stop"
              on-click="onStop"
              title="Stop"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsCleanSpot(stateObj)]]">
            <paper-icon-button
              icon="hass:broom"
              on-click="onCleanSpot"
              title="Clean spot"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsLocate(stateObj)]]">
            <paper-icon-button
              icon="hass:map-marker"
              on-click="onLocate"
              title="Locate"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsReturnHome(stateObj)]]">
            <paper-icon-button
              icon="hass:home-map-marker"
              on-click="onReturnHome"
              title="Return home"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <div hidden$="[[!supportsFanSpeed(stateObj)]]">
        <div class="horizontal justified layout">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="Fan speed"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.fan_speed]]"
              on-selected-changed="fanSpeedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.fan_speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
          <div
            style="justify-content: center; align-self: center; padding-top: 1.3em"
          >
            <span
              ><iron-icon icon="hass:fan"></iron-icon>
              [[stateObj.attributes.fan_speed]]</span
            >
          </div>
        </div>
        <p></p>
      </div>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="fan_speed,fan_speed_list,status,battery_level,battery_icon"
      ></ha-attributes>
    `}static get properties(){return{hass:{type:Object},inDialog:{type:Boolean,value:!1},stateObj:{type:Object}}}supportsPause(e){return Object(d.a)(e,4)}supportsStop(e){return Object(d.a)(e,8)}supportsReturnHome(e){return Object(d.a)(e,16)}supportsFanSpeed(e){return Object(d.a)(e,32)}supportsBattery(e){return Object(d.a)(e,64)}supportsStatus(e){return Object(d.a)(e,128)}supportsLocate(e){return Object(d.a)(e,512)}supportsCleanSpot(e){return Object(d.a)(e,1024)}supportsStart(e){return Object(d.a)(e,8192)}supportsCommandBar(e){return Object(d.a)(e,4)|Object(d.a)(e,8)|Object(d.a)(e,16)|Object(d.a)(e,512)|Object(d.a)(e,1024)|Object(d.a)(e,8192)}fanSpeedChanged(e){var t=this.stateObj.attributes.fan_speed,i=e.detail.value;i&&t!==i&&this.hass.callService("vacuum","set_fan_speed",{entity_id:this.stateObj.entity_id,fan_speed:i})}onStop(){this.hass.callService("vacuum","stop",{entity_id:this.stateObj.entity_id})}onPlayPause(){this.hass.callService("vacuum","start_pause",{entity_id:this.stateObj.entity_id})}onPause(){this.hass.callService("vacuum","pause",{entity_id:this.stateObj.entity_id})}onStart(){this.hass.callService("vacuum","start",{entity_id:this.stateObj.entity_id})}onLocate(){this.hass.callService("vacuum","locate",{entity_id:this.stateObj.entity_id})}onCleanSpot(){this.hass.callService("vacuum","clean_spot",{entity_id:this.stateObj.entity_id})}onReturnHome(){this.hass.callService("vacuum","return_to_base",{entity_id:this.stateObj.entity_id})}});var I=i(12),$=i(22);customElements.define("ha-water_heater-control",class extends(Object(m.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `}static get properties(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}temperatureStateInFlux(e){this.$.target_temperature.classList.toggle("in-flux",e)}incrementValue(){const e=this.value+this.step;this.value<this.max&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e<=this.max?e<=this.min?this.value=this.min:this.value=e:this.value=this.max}decrementValue(){const e=this.value-this.step;this.value>this.min&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e>=this.min?this.value=e:this.value=this.min}valueChanged(){this.last_changed&&window.setTimeout(()=>{Date.now()-this.last_changed>=2e3&&(this.fire("change"),this.temperatureStateInFlux(!1),this.last_changed=null)},2010)}});customElements.define("more-info-water_heater",class extends(Object(s.a)(Object(m.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        :host {
          color: var(--primary-text-color);
        }

        .container-away_mode,
        .container-temperature,
        .container-operation_list,

        .has-away_mode .container-away_mode,
        .has-target_temperature .container-temperature,
        .has-operation_mode .container-operation_list,

        .container-operation_list iron-icon,

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }

        ha-paper-slider {
          width: 100%;
        }

        ha-water_heater-control.range-control-left,
        ha-water_heater-control.range-control-right {
          float: left;
          width: 46%;
        }
        ha-water_heater-control.range-control-left {
          margin-right: 4%;
        }
        ha-water_heater-control.range-control-right {
          margin-left: 4%;
        }

        .single-row {
          padding: 8px 0;
        }
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-temperature">
          <div class$="[[stateObj.attributes.operation_mode]]">
            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">
              [[localize('ui.card.water_heater.target_temperature')]]
            </div>
            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
              <ha-water_heater-control
                value="[[stateObj.attributes.temperature]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.max_temp]]"
                on-change="targetTemperatureChanged"
              >
              </ha-water_heater-control>
            </template>
          </div>
        </div>

        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
          <div class="container-operation_list">
            <div class="controls">
              <ha-paper-dropdown-menu
                label-float=""
                dynamic-align=""
                label="[[localize('ui.card.water_heater.operation')]]"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[stateObj.attributes.operation_mode]]"
                  attr-for-selected="item-name"
                  on-selected-changed="handleOperationmodeChanged"
                >
                  <template
                    is="dom-repeat"
                    items="[[stateObj.attributes.operation_list]]"
                  >
                    <paper-item item-name$="[[item]]"
                      >[[_localizeOperationMode(localize, item)]]</paper-item
                    >
                  </template>
                </paper-listbox>
              </ha-paper-dropdown-menu>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
          <div class="container-away_mode">
            <div class="center horizontal layout single-row">
              <div class="flex">
                [[localize('ui.card.water_heater.away_mode')]]
              </div>
              <paper-toggle-button
                checked="[[awayToggleChecked]]"
                on-change="awayToggleChanged"
              >
              </paper-toggle-button>
            </div>
          </div>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},awayToggleChecked:Boolean}}stateObjChanged(e,t){e&&this.setProperties({awayToggleChecked:"on"===e.attributes.away_mode}),t&&(this._debouncer=$.a.debounce(this._debouncer,I.d.after(500),()=>{this.fire("iron-resize")}))}computeTemperatureStepSize(e,t){return t.attributes.target_temp_step?t.attributes.target_temp_step:-1!==e.config.unit_system.temperature.indexOf("F")?1:.5}supportsTemperatureControls(e){return this.supportsTemperature(e)}supportsTemperature(e){return Object(d.a)(e,1)&&"number"==typeof e.attributes.temperature}supportsOperationMode(e){return Object(d.a)(e,2)}supportsAwayMode(e){return Object(d.a)(e,4)}computeClassNames(e){var t=[w(e,{1:"has-target_temperature",2:"has-operation_mode",4:"has-away_mode"})];return t.push("more-info-water_heater"),t.join(" ")}targetTemperatureChanged(e){const t=e.target.value;t!==this.stateObj.attributes.temperature&&this.callServiceHelper("set_temperature",{temperature:t})}awayToggleChanged(e){const t="on"===this.stateObj.attributes.away_mode,i=e.target.checked;t!==i&&this.callServiceHelper("set_away_mode",{away_mode:i})}handleOperationmodeChanged(e){const t=this.stateObj.attributes.operation_mode,i=e.detail.value;i&&t!==i&&this.callServiceHelper("set_operation_mode",{operation_mode:i})}callServiceHelper(e,t){t.entity_id=this.stateObj.entity_id,this.hass.callService("water_heater",e,t).then(()=>{this.stateObjChanged(this.stateObj)})}_localizeOperationMode(e,t){return e(`state.water_heater.${t}`)||t}});customElements.define("more-info-weather",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        iron-icon {
          color: var(--paper-item-icon-color);
        }
        .section {
          margin: 16px 0 8px 0;
          font-size: 1.2em;
        }

        .flex {
          display: flex;
          height: 32px;
          align-items: center;
        }

        .main {
          flex: 1;
          margin-left: 24px;
        }

        .temp,
        .templow {
          min-width: 48px;
          text-align: right;
        }

        .templow {
          margin: 0 16px;
          color: var(--secondary-text-color);
        }

        .attribution {
          color: var(--secondary-text-color);
          text-align: center;
        }
      </style>

      <div class="flex">
        <iron-icon icon="hass:thermometer"></iron-icon>
        <div class="main">
          [[localize('ui.card.weather.attributes.temperature')]]
        </div>
        <div>
          [[stateObj.attributes.temperature]] [[getUnit('temperature')]]
        </div>
      </div>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.pressure)]]">
        <div class="flex">
          <iron-icon icon="hass:gauge"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.air_pressure')]]
          </div>
          <div>
            [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.humidity)]]">
        <div class="flex">
          <iron-icon icon="hass:water-percent"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.humidity')]]
          </div>
          <div>[[stateObj.attributes.humidity]] %</div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.wind_speed)]]">
        <div class="flex">
          <iron-icon icon="hass:weather-windy"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.wind_speed')]]
          </div>
          <div>
            [[getWind(stateObj.attributes.wind_speed,
            stateObj.attributes.wind_bearing, localize)]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.visibility)]]">
        <div class="flex">
          <iron-icon icon="hass:eye"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.visibility')]]
          </div>
          <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>
        </div>
      </template>

      <template is="dom-if" if="[[stateObj.attributes.forecast]]">
        <div class="section">[[localize('ui.card.weather.forecast')]]:</div>
        <template is="dom-repeat" items="[[stateObj.attributes.forecast]]">
          <div class="flex">
            <template is="dom-if" if="[[_showValue(item.condition)]]">
              <iron-icon icon="[[getWeatherIcon(item.condition)]]"></iron-icon>
            </template>
            <template is="dom-if" if="[[!_showValue(item.templow)]]">
              <div class="main">[[computeDateTime(item.datetime)]]</div>
            </template>
            <template is="dom-if" if="[[_showValue(item.templow)]]">
              <div class="main">[[computeDate(item.datetime)]]</div>
              <div class="templow">
                [[item.templow]] [[getUnit('temperature')]]
              </div>
            </template>
            <div class="temp">
              [[item.temperature]] [[getUnit('temperature')]]
            </div>
          </div>
        </template>
      </template>

      <template is="dom-if" if="stateObj.attributes.attribution">
        <div class="attribution">[[stateObj.attributes.attribution]]</div>
      </template>
    `}static get properties(){return{hass:Object,stateObj:Object}}constructor(){super(),this.cardinalDirections=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],this.weatherIcons={"clear-night":"hass:weather-night",cloudy:"hass:weather-cloudy",exceptional:"hass:alert-circle-outline",fog:"hass:weather-fog",hail:"hass:weather-hail",lightning:"hass:weather-lightning","lightning-rainy":"hass:weather-lightning-rainy",partlycloudy:"hass:weather-partly-cloudy",pouring:"hass:weather-pouring",rainy:"hass:weather-rainy",snowy:"hass:weather-snowy","snowy-rainy":"hass:weather-snowy-rainy",sunny:"hass:weather-sunny",windy:"hass:weather-windy","windy-variant":"hass:weather-windy-variant"}}computeDate(e){return new Date(e).toLocaleDateString(this.hass.language,{weekday:"long",month:"short",day:"numeric"})}computeDateTime(e){return new Date(e).toLocaleDateString(this.hass.language,{weekday:"long",hour:"numeric"})}getUnit(e){const t=this.hass.config.unit_system.length||"";switch(e){case"air_pressure":return"km"===t?"hPa":"inHg";case"length":return t;case"precipitation":return"km"===t?"mm":"in";default:return this.hass.config.unit_system[e]||""}}windBearingToText(e){const t=parseInt(e);return isFinite(t)?this.cardinalDirections[((t+11.25)/22.5|0)%16]:e}getWind(e,t,i){if(null!=t){const a=this.windBearingToText(t);return`${e} ${this.getUnit("length")}/h (${i(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a})`}return`${e} ${this.getUnit("length")}/h`}getWeatherIcon(e){return this.weatherIcons[e]}_showValue(e){return null!=e}});var z=i(330);customElements.define("more-info-content",class extends o.b{static get properties(){return{hass:{},stateObj:{}}}firstUpdated(){this.style.position="relative",this.style.display="block"}update(e){super.update(e);const t=this.stateObj,i=this.hass;if(!t||!i)return void(this.lastChild&&(this._detachedChild=this.lastChild,this.removeChild(this.lastChild)));this._detachedChild&&(this.appendChild(this._detachedChild),this._detachedChild=void 0);const a=t.attributes&&"custom_ui_more_info"in t.attributes?t.attributes.custom_ui_more_info:"more-info-"+Object(z.a)(t);Object(C.a)(this,a.toUpperCase(),{hass:i,stateObj:t})}});var M=i(119);const P=["camera","configurator","history_graph"];customElements.define("more-info-controls",class extends(Object(m.a)(n.a)){static get template(){return a.a`
      <style include="ha-style-dialog">
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        state-card-content {
          display: block;
          padding: 16px;
        }

        state-history-charts {
          max-width: 100%;
          margin-bottom: 16px;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        :host([domain="camera"]) paper-dialog-scrollable {
          margin: 0 -24px -21px;
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      </style>

      <app-toolbar>
        <paper-icon-button
          aria-label="Dismiss dialog"
          icon="hass:close"
          dialog-dismiss
        ></paper-icon-button>
        <div class="main-title" main-title="" on-click="enlarge">
          [[_computeStateName(stateObj)]]
        </div>
        <template is="dom-if" if="[[canConfigure]]">
          <paper-icon-button
            icon="hass:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">
        <state-card-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
          in-dialog=""
        ></state-card-content>
      </template>
      <paper-dialog-scrollable dialog-element="[[dialogElement]]">
        <template
          is="dom-if"
          if="[[_computeShowHistoryComponent(hass, stateObj)]]"
          restamp=""
        >
          <ha-state-history-data
            hass="[[hass]]"
            filter-type="recent-entity"
            entity-id="[[stateObj.entity_id]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></ha-state-history-data>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            up-to-now
          ></state-history-charts>
        </template>
        <more-info-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></more-info-content>
      </paper-dialog-scrollable>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},dialogElement:Object,canConfigure:Boolean,domain:{type:String,reflectToAttribute:!0,computed:"_computeDomain(stateObj)"},_stateHistory:Object,_stateHistoryLoading:Boolean,large:{type:Boolean,value:!1,notify:!0},_cacheConfig:{type:Object,value:{refresh:60,cacheKey:null,hoursToShow:24}},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}enlarge(){this.large=!this.large}_computeShowStateInfo(e){return!e||!P.includes(Object(j.a)(e))}_computeShowHistoryComponent(e,t){return e&&t&&Object(T.a)(e,"history")&&!M.e.includes(Object(j.a)(t))}_computeDomain(e){return e?Object(j.a)(e):""}_computeStateName(e){return e?Object(p.a)(e):""}_stateObjChanged(e){e&&this._cacheConfig.cacheKey!==`more_info.${e.entity_id}`&&(this._cacheConfig={...this._cacheConfig,cacheKey:`more_info.${e.entity_id}`})}_gotoSettings(){this.fire("more-info-page",{page:"settings"})}_computeRTL(e){return Object(b.a)(e)}});var L=i(121),R=i(265);i(131);customElements.define("more-info-settings",class extends(Object(s.a)(Object(m.a)(n.a))){static get template(){return a.a`
      <style>
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);

          /* to fit save button */
          padding-right: 0;
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        app-toolbar mwc-button {
          font-size: 0.8em;
          margin: 0;
        }

        .form {
          padding: 0 24px 24px;
        }
      </style>

      <app-toolbar>
        <ha-paper-icon-button-arrow-prev
          on-click="_backTapped"
        ></ha-paper-icon-button-arrow-prev>
        <div main-title="">[[_computeStateName(stateObj)]]</div>
        <mwc-button on-click="_save" disabled="[[_computeInvalid(_entityId)]]"
          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button
        >
      </app-toolbar>

      <div class="form">
        <paper-input
          value="{{_name}}"
          label="[[localize('ui.dialogs.more_info_settings.name')]]"
        ></paper-input>
        <paper-input
          value="{{_entityId}}"
          label="[[localize('ui.dialogs.more_info_settings.entity_id')]]"
          error-message="Domain needs to stay the same"
          invalid="[[_computeInvalid(_entityId)]]"
        ></paper-input>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,registryInfo:{type:Object,observer:"_registryInfoChanged",notify:!0},_name:String,_entityId:String}}_computeStateName(e){return e?Object(p.a)(e):""}_computeInvalid(e){return Object(L.a)(this.stateObj.entity_id)!==Object(L.a)(e)}_registryInfoChanged(e){e?this.setProperties({_name:e.name,_entityId:e.entity_id}):this.setProperties({_name:"",_entityId:""})}_backTapped(){this.fire("more-info-page",{page:null})}async _save(){try{const e=await Object(R.d)(this.hass,this.stateObj.entity_id,{name:this._name,new_entity_id:this._entityId});this.registryInfo=e,this.stateObj.entity_id!==this._entityId&&this.fire("hass-more-info",{entityId:this._entityId})}catch(e){alert(`save failed: ${e.message}`)}}});var B=i(406);customElements.define("ha-more-info-dialog",class extends(Object(B.a)(n.a)){static get template(){return a.a`
      <style include="ha-style-dialog paper-dialog-shared-styles">
        :host {
          font-size: 14px;
          width: 365px;
          border-radius: 2px;
        }

        more-info-controls,
        more-info-settings {
          --more-info-header-background: var(--secondary-background-color);
          --more-info-header-color: var(--primary-text-color);
          --ha-more-info-app-toolbar-title: {
            /* Design guideline states 24px, changed to 16 to align with state info */
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            /* webkit and blink still support simple multiline text-overflow */
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          more-info-controls,
          more-info-settings {
            --more-info-header-background: var(--primary-color);
            --more-info-header-color: var(--text-primary-color);
          }
          :host {
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          :host::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        :host([data-domain="camera"]) {
          width: auto;
        }

        :host([data-domain="history_graph"]),
        :host([large]) {
          width: 90%;
        }
      </style>

      <template is="dom-if" if="[[!_page]]">
        <more-info-controls
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          dialog-element="[[_dialogElement]]"
          can-configure="[[_registryInfo]]"
          large="{{large}}"
        ></more-info-controls>
      </template>
      <template is="dom-if" if='[[_equals(_page, "settings")]]'>
        <more-info-settings
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          registry-info="{{_registryInfo}}"
        ></more-info-settings>
      </template>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,computed:"_computeStateObj(hass)",observer:"_stateObjChanged"},large:{type:Boolean,reflectToAttribute:!0,observer:"_largeChanged"},_dialogElement:Object,_registryInfo:Object,_page:{type:String,value:null},dataDomain:{computed:"_computeDomain(stateObj)",reflectToAttribute:!0}}}static get observers(){return["_dialogOpenChanged(opened)"]}ready(){super.ready(),this._dialogElement=this,this.addEventListener("more-info-page",e=>{this._page=e.detail.page})}_computeDomain(e){return e?Object(j.a)(e):""}_computeStateObj(e){return e.states[e.moreInfoEntityId]||null}async _stateObjChanged(e,t){if(e){if(requestAnimationFrame(()=>requestAnimationFrame(()=>{this.opened=!0})),Object(T.a)(this.hass,"config")&&(!t||t.entity_id!==e.entity_id)&&this.hass.user.is_admin)try{const t=await this.hass.callWS({type:"config/entity_registry/get",entity_id:e.entity_id});this._registryInfo=t}catch(i){this._registryInfo=null}}else this.setProperties({opened:!1,_page:null,_registryInfo:null,large:!1})}_dialogOpenChanged(e){!e&&this.stateObj&&this.fire("hass-more-info",{entityId:null})}_equals(e,t){return e===t}_largeChanged(){this.notifyResize()}})},93:function(e,t,i){"use strict";i(5),i(113),i(114),i(115),i(116);var a=i(60),n=(i(41),i(6)),o=i(3),s=i(97);Object(n.a)({is:"paper-input",_template:o.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[s.a,a.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},94:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(5);var a=i(6),n=i(3);const o=Object(a.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){o.instance||(o.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});o.instance=null,o.requestAvailability=function(){o.instance||(o.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(o.instance)}},98:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(5);var a=i(1),n=i(10),o=new Set;const s={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():n.g||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(a.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(o.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}}}]);
//# sourceMappingURL=chunk.40642f8a20ade9406c56.js.map