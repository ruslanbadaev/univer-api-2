(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6fd20b"],{"0467":function(t,e,i){},3288:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[i("v-card",[i("v-banner",{staticClass:"text-center",attrs:{sticky:""}},[i("span",{class:t.$vuetify.breakpoint.mobile?null:"display-1"},[i("div",{domProps:{innerHTML:t._s(t.html)}}),t._v(t._s(t.info)+" ")])])],1)],1)],1)},s=[],a=(i("99af"),i("bc3a")),o=i.n(a),r={name:"html-render",data:function(){return{html:"<p> Загрузка.. </p>",info:""}},methods:{},created:function(){var t=this;o.a.get("".concat("http://188.93.210.205:3000","/render?route=").concat(this.$route.params.route)).then((function(e){return t.html=e.data[0].data})),console.log(this.$route.params.route)}},c=r,l=i("2877"),u=i("6544"),h=i.n(u),p=i("e4e5"),d=i("b0af"),f=i("62ad"),b=i("0fd9"),v=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=v.exports;h()(v,{VBanner:p["a"],VCard:d["a"],VCol:f["a"],VRow:b["a"]})},e4cd:function(t,e,i){"use strict";i("caad"),i("b0c0"),i("a9e3");var n=i("d9bd"),s=i("2b0e");e["a"]=s["default"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,s=t.mobileBreakpoint;if(s===this.mobileBreakpoint)return e;var a=parseInt(this.mobileBreakpoint,10),o=!isNaN(a);return o?i<a:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(n["d"])("mobile-break-point","mobile-breakpoint",this)}})},e4e5:function(t,e,i){"use strict";var n=i("5530"),s=(i("0467"),i("10d2")),a=i("713a"),o=i("9d26"),r=i("0789"),c=i("e4cd"),l=i("f2e7"),u=i("58df"),h=i("80d2");e["a"]=Object(u["a"])(s["a"],c["a"],l["a"]).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return Object(n["a"])({},s["a"].options.computed.classes.call(this),{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var t=Object(n["a"])({},s["a"].options.computed.styles.call(this));if(this.isSticky){var e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=Object(h["g"])(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(t){this.$emit("click:icon",t)},genIcon:function(){var t;if(this.hasIcon)return t=this.icon?this.$createElement(o["a"],{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(a["a"],{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[t])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var t=this,e=Object(h["s"])(this,"actions",{dismiss:function(){return t.isActive=!1}});if(e)return this.$createElement("div",{staticClass:"v-banner__actions"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(t){return t(r["a"],[t("div",this.setBackgroundColor(this.color,{staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]}),[this.genWrapper()])])}})}}]);
//# sourceMappingURL=chunk-5f6fd20b.3e5f165a.js.map