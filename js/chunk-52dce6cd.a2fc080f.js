(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52dce6cd"],{"4bd4":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var n=r("5530"),o=r("58df"),a=r("7e2b"),s=r("3206");e["a"]=Object(o["a"])(a["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(o){o&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},af7c:function(t,e,r){"use strict";var n=r("eba1"),o=r.n(n);o.a},d7a9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-subheader",[t._v("Информация профиля")]),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-select",{attrs:{items:t.roles,rules:t.roleRules,label:"Ваша должность:",required:""},on:{change:function(e){return t.checkRoleSelect()}},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}}),"Студент"===t.role?r("div",[r("br"),r("v-select",{attrs:{items:t.groups,rules:t.groupRules,label:"Ваша группа:","item-text":"name","item-value":"_id","return-object":"",required:""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1):t._e(),r("v-text-field",{attrs:{rules:t.phoneRules,label:"Номер телефона",prefix:"+7"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v(" Отправить ")]),r("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Сббросить ")])],1)],1)],1)],1)],1)],1)},o=[],a=(r("99af"),r("bc3a")),s=r.n(a),i={name:"userinfo",data:function(){return{role:"",roles:["Студент","Преподаватель","Персонал","Администратор"],groups:[],group:"",phone:"",valid:!1,phoneRules:[function(t){return!!t||"Введите номер телефона"},function(t){return/^\+?[0-9]{3}-?[0-9]{6,12}$/.test(t)||"Номер телефона не соответствует маске"}],roleRules:[function(t){return!!t||"Укажите свою должность"}],groupRules:[function(t){return!!t||"Укажите свою группу"}]}},methods:{translateRoleToRu:function(){return{student:"Студент",lecturer:"Преподаватель",staff:"Персонал",admin:"Администратор"}},translateRoleToEn:function(){return{"Студент":"student","Преподаватель":"lecturer","Персонал":"staff","Администратор":"admin"}},validate:function(){this.$refs.form.validate(),""!==this.group&&this.setGroup(),""!==this.phone&&this.setPhone(),""!==this.role&&this.setRole()},reset:function(){console.log(this.$store.getters.user),this.$refs.form.reset()},getGroups:function(){var t=this;s.a.get("".concat("http://188.93.210.205:3000","/groups/all")).then((function(e){t.groups=e.data.result})).catch((function(t){return alert(t)}))},getUserData:function(){var t=this;s.a.defaults.headers.common["Authorization"]="Bearer "+this.$store.getters.user.token,s.a.get("".concat("http://188.93.210.205:3000","/profile")).then((function(e){console.log(e.data),"student"===e.data.result.role&&t.getGroups(),t.role=e.data.result.role?t.translateRoleToRu()[e.data.result.role]:"",t.group=e.data.result.group_id?e.data.result.group_id:"",t.phone=e.data.result.phone?e.data.result.phone:"",console.log(t.group)})).catch((function(t){return alert(t)}))},setGroup:function(){s.a.patch("".concat("http://188.93.210.205:3000","/users/").concat(this.$store.getters.user._id,"/group"),{group_id:this.group},{headers:{Authorization:"Bearer ".concat(this.$store.getters.user.token)}}).then((function(t){console.log(t.data)})).catch((function(t){return alert(t)}))},setPhone:function(){var t=this;s.a.patch("".concat("http://188.93.210.205:3000","/users/").concat(this.$store.getters.user._id,"/phone"),{phone:this.phone},{headers:{Authorization:"Bearer ".concat(this.$store.getters.user.token)}}).then((function(e){t.groups=e.data.result})).catch((function(t){return alert(t)}))},setRole:function(){var t=this;s.a.patch("".concat("http://188.93.210.205:3000","/users/").concat(this.$store.getters.user._id,"/role"),{group_id:this.translateRoleToEn()[this.role]},{headers:{Authorization:"Bearer ".concat(this.$store.getters.user.token)}}).then((function(e){t.groups=e.data.result})).catch((function(t){return alert(t)}))},checkRoleSelect:function(){switch(this.role){case"Студент":this.getGroups();break;default:break}}},mounted:function(){this.getUserData()}},u=i,c=(r("af7c"),r("2877")),l=r("6544"),h=r.n(l),d=r("8336"),f=r("b0af"),p=r("62ad"),v=r("4bd4"),g=r("0fd9"),m=r("b974"),b=r("e0c7"),_=r("8654"),w=Object(c["a"])(u,n,o,!1,null,null,null);e["default"]=w.exports;h()(w,{VBtn:d["a"],VCard:f["a"],VCol:p["a"],VForm:v["a"],VRow:g["a"],VSelect:m["a"],VSubheader:b["a"],VTextField:_["a"]})},eba1:function(t,e,r){}}]);
//# sourceMappingURL=chunk-52dce6cd.a2fc080f.js.map