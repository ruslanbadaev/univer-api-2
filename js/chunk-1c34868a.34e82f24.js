(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c34868a"],{"277e":function(t,e,i){"use strict";i("a9e3");var o=i("f977"),n=i("d9bd"),a=i("2b0e");e["a"]=a["default"].extend({name:"scrollable",directives:{Scroll:o["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(n["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("fe6c"),n=i("58df");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"705b":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.$vuetify.breakpoint.mobile?i("v-bottom-navigation",{attrs:{color:"teal",app:""}},t._l(t.siteRoutes,(function(e){return i("v-btn",{key:e.title,attrs:{to:e.path}},[i("span",[t._v(t._s(e.title))]),i("v-icon",[t._v("mdi-"+t._s(e.icon))])],1)})),1):t._e()},n=[],a=i("5530"),r=i("2f62"),l={name:"main-bottom-navigation",data:function(){return{siteRoutes:[{title:"Главная",path:"/",icon:"compass-outline"},{title:"Новости",path:"/feed",icon:"newspaper-variant-outline"},{title:"Расписание",path:"/sveden/schedule",icon:"newspaper-variant-outline"},{title:"О нас",path:"/sveden/about",icon:"access-point"}]}},computed:Object(a["a"])({},Object(r["c"])(["user"]))},s=l,c=i("2877"),u=i("6544"),h=i.n(u),d=(i("a9e3"),i("c7cd"),i("dd43"),i("3a66")),p=i("3860"),v=i("a9ad"),f=i("24b2"),b=i("a452"),m=i("277e"),g=i("7560"),S=i("f2e7"),y=i("58df"),w=i("d9bd"),O=Object(y["a"])(Object(d["a"])("bottom",["height","inputValue"]),v["a"],f["a"],Object(S["b"])("inputValue"),b["a"],m["a"],g["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return m["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(a["a"])({},this.measurableStyles,{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(w["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(p["a"],this.setTextColor(this.color,e),this.$slots.default)}}),T=i("8336"),_=i("132d"),j=Object(c["a"])(s,o,n,!1,null,null,null);e["default"]=j.exports;h()(j,{VBottomNavigation:O,VBtn:T["a"],VIcon:_["a"]})},dd43:function(t,e,i){},f977:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i("53ca");function n(t,e){var i=e.modifiers||{},n=i.self,a=void 0!==n&&n,r=e.value,l="object"===Object(o["a"])(r)&&r.options||{passive:!0},s="function"===typeof r||"handleEvent"in r?r:r.handler,c=a?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",s,l),t._onScroll={handler:s,options:l,target:a?void 0:c})}function a(t){if(t._onScroll){var e=t._onScroll,i=e.handler,o=e.options,n=e.target,a=void 0===n?t:n;a.removeEventListener("scroll",i,o),delete t._onScroll}}var r={inserted:n,unbind:a};e["b"]=r}}]);
//# sourceMappingURL=chunk-1c34868a.34e82f24.js.map