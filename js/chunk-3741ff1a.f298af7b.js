(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3741ff1a"],{"0bc6":function(t,a,i){},a721:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",[i("v-subheader",[t._v("Академическая стипендия")]),i("v-card-text",{staticClass:"text--primary pt-0"},[i("div",{staticClass:"overline"},[t._v("кто получает")]),i("v-list",t._l(t.grantAcadem,(function(a,e){return i("v-list-item",{key:e},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(++e)+". "+t._s(a))])],1)],1)})),1)],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",[i("v-subheader",[t._v("Социальная стипендия")]),i("v-card-text",{staticClass:"text--primary pt-0"},[i("div",{staticClass:"overline"},[t._v("кто получает")]),i("v-list",t._l(t.grantSocial,(function(a,e){return i("v-list-item",{key:e},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(++e)+". "+t._s(a))])],1)],1)})),1)],1),i("v-card-actions",[i("v-spacer"),i("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,s=a.attrs;return[i("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",s,!1),e),[t._v("Категории")])]}}]),model:{value:t.grantSocialCategoryDialog,callback:function(a){t.grantSocialCategoryDialog=a},expression:"grantSocialCategoryDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline grey lighten-2"},[t._v(" Категории для назначения социальной стипендии ")]),i("v-card-text",t._l(t.grantSocialCategory,(function(a,e){return i("v-list-item",{key:e},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(++e)+". "+t._s(a))])],1)],1)})),1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(a){t.grantSocialCategoryDialog=!1}}},[t._v("Закрыть")])],1)],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-row",{attrs:{justify:"center"}},t._l(t.docs,(function(a,e){return i("v-col",{key:e,attrs:{cols:"12",md:"8"}},[i("v-card",[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{attrs:{size:"48",color:"error"}},[t._v("mdi-pdf-box")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(a.name))])],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:"",href:a.link}},[i("v-icon",[t._v("mdi-download-outline")])],1)],1)],1)],1)],1)})),1)],1)],1)},s=[],n={name:"grants",data:function(){return{grantSocialCategoryDialog:!1,grantAcadem:["Студенты очной формы","Бюджетная основа обучения",'Сдать сессию в установленные сроки с оценками не ниже "хорошо"',"1 курс, 1 семестр"],grantSocial:["Студенты очной формы","Бюджетная основа обучения","Студенты, предоставившие письменное заявление и документ, подтверждающий принадлежность хотя бы к одной из категорий"],grantSocialCategory:["дети-сироты и дети, оставшиеся без попечения родителей, лица из числа детей-сирот и детей, оставшихся без попечения родителей","лица, потерявшие в период обучения обоих родителей или единственного родителя","дети-инвалиды (до 18 лет), инвалиды I и II групп, инвалиды с детства","студенты, подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне","студенты, являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий","студенты из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» — «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» — «в» пункта 3 статьи 51 Федерального закона от 28 марта 1998 года N 53-ФЗ «О воинской обязанности и военной службе»","студенты, получивше государственную социальную помощь (справка органа социальной защиты населения по месту постоянной регистрации)"],docs:[{name:"Постановление Правительства Российской Федерации от 17.12.2016 № 1390 «О формировании стипендиального фонда»",link:"http://www.skf-mtusi.ru/files/info/stip/0001201612210031.pdf"},{name:"Приказ Министерства образования и науки Российской Федерации от 27.12.2016 г. № 1663 «Об утверждении Порядка назначения государственной академической стипендии и (или) государственной социальной стипендии студентам, обучающимся по очной форме обучения за счет бюджетных ассигнований федерального бюджета, государственной стипендии аспирантам, ординаторам, ассистентам-стажерам, обучающимся по очной форме обучения за счет бюджетных ассигнований федерального бюджета, выплаты стипендий слушателям подготовительных отделений федеральных государственных образовательных организаций высшего образования, обучающимся за счет бюджетных ассигнований федерального бюджета»",link:"http://www.skf-mtusi.ru/files/info/stip/45376.pdf"},{name:"Положение о стипендиальной комиссии СКФ МТУСИ",link:"http://www.skf-mtusi.ru/files/info/stip/stip_kom_skf-mtusi_19.pdf"},{name:"Приказ о размере государственных академических стипендий для студентов и государственных стипендий для аспирантов",link:"http://www.skf-mtusi.ru/files/info/stip/703-c_stip_stud-asp.pdf"},{name:"Информация о наличии общежития, интерната",link:"http://www.skf-mtusi.ru/files/info/stip/internat.pdf"}]}}},r=n,l=i("2877"),o=i("6544"),c=i.n(o),v=i("8336"),d=i("b0af"),u=i("99d9"),f=i("62ad"),m=i("169a"),p=i("132d"),_=i("8860"),g=i("da13"),w=i("1800"),h=i("8270"),k=i("5d23"),b=i("0fd9"),C=i("2fa4"),V=i("e0c7"),y=Object(l["a"])(r,e,s,!1,null,null,null);a["default"]=y.exports;c()(y,{VBtn:v["a"],VCard:d["a"],VCardActions:u["a"],VCardText:u["c"],VCardTitle:u["d"],VCol:f["a"],VDialog:m["a"],VIcon:p["a"],VList:_["a"],VListItem:g["a"],VListItemAction:w["a"],VListItemAvatar:h["a"],VListItemContent:k["a"],VListItemTitle:k["c"],VRow:b["a"],VSpacer:C["a"],VSubheader:V["a"]})},e0c7:function(t,a,i){"use strict";var e=i("5530"),s=(i("0bc6"),i("7560")),n=i("58df");a["a"]=Object(n["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(e["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-3741ff1a.f298af7b.js.map