(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec6471d4"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),c=(n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),i=n("80d2"),l=["sm","md","lg","xl"],s=["start","end","center"];function u(t,e){return l.reduce((function(n,a){return n[t+Object(i["G"])(a)]=e(),n}),{})}var f=function(t){return[].concat(s,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:f}})),b=function(t){return[].concat(s,["space-between","space-around"]).includes(t)},g=u("justify",(function(){return{type:String,default:null,validator:b}})),p=function(t){return[].concat(s,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:p}})),j={align:Object.keys(d),justify:Object.keys(g),alignContent:Object.keys(v)},y={align:"align",justify:"justify",alignContent:"align-content"};function O(t,e,n){var a=y[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var h=new Map;e["a"]=c["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d),{},{justify:{type:String,default:null,validator:b}},g),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,e){var n=e.props,r=e.data,c=e.children,i="";for(var l in n)i+=String(n[l]);var s=h.get(i);return s||function(){var t,e;for(e in s=[],j)j[e].forEach((function(t){var a=n[t],r=O(e,t,a);r&&s.push(r)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),h.set(i,s)}(),t(n.tag,Object(o["a"])(r,{staticClass:"row",class:s}),c)}})},"14ae":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"error"}},[n("v-container",{staticClass:"error-page center divcol",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"tcenter center divcol padd0mobile"},[n("h1",{staticClass:"p bold"},[t._v("404")]),n("span",{staticClass:"h5_em bold"},[t._v(t._s(t.$t("errorTitle")))]),n("v-btn",{staticClass:"font2 h7_em bold",attrs:{href:"#",to:"/"}},[t._v(t._s(t.$t("buttonTitle")))])],1)],1)],1)],1)},r=[],c={name:"error",i18n:n("2f18")},o=c,i=(n("984e"),n("2877")),l=n("6544"),s=n.n(l),u=n("7496"),f=n("8336"),d=n("62ad"),b=n("a523"),g=n("0fd9"),p=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=p.exports;s()(p,{VApp:u["a"],VBtn:f["a"],VCol:d["a"],VContainer:b["a"],VRow:g["a"]})},"2f18":function(t,e){t.exports={messages:{ES:{errorTitle:"La página no existe",buttonTitle:"Página de inicio"},US:{errorTitle:"Sorry Wrong Page",buttonTitle:"Home page"}}}},"62ad":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),c=(n("d3b7"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),i=n("80d2"),l=["sm","md","lg","xl"],s=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["offset"+Object(i["G"])(e)]={type:[String,Number],default:null},t}),{})}(),f=function(){return l.reduce((function(t,e){return t["order"+Object(i["G"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(s),offset:Object.keys(u),order:Object.keys(f)};function b(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var g=new Map;e["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,c=e.children,i=(e.parent,"");for(var l in n)i+=String(n[l]);var s=g.get(i);return s||function(){var t,e;for(e in s=[],d)d[e].forEach((function(t){var a=n[t],r=b(e,t,a);r&&s.push(r)}));var r=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!r||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),g.set(i,s)}(),t(n.tag,Object(o["a"])(r,{class:s}),c)}})},"984e":function(t,e,n){"use strict";n("ed97")},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return f}));var a=n("5530"),r=n("3835"),c=n("b85c"),o=(n("ac1f"),n("1276"),n("498a"),n("b64b"),n("99af"),n("80d2")),i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){var e,n={},a=Object(c["a"])(t.split(i.styleList));try{for(a.s();!(e=a.n()).done;){var l=e.value,s=l.split(i.styleProp),u=Object(r["a"])(s,2),f=u[0],d=u[1];f=f.trim(),f&&("string"===typeof d&&(d=d.trim()),n[Object(o["c"])(f)]=d)}}catch(b){a.e(b)}finally{a.f()}return n}function s(){var t,e={},n=arguments.length;while(n--)for(var r=0,c=Object.keys(arguments[n]);r<c.length;r++)switch(t=c[r],t){case"class":case"directives":arguments[n][t]&&(e[t]=f(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=d(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]=Object(a["a"])(Object(a["a"])({},arguments[n][t]),e[t]);break;default:e[t]||(e[t]=arguments[n][t])}return e}function u(t,e){return t?e?(t=Object(o["H"])("string"===typeof t?l(t):t),t.concat("string"===typeof e?l(e):e)):t:e}function f(t,e){return e?t&&t?Object(o["H"])(t).concat(e):e:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var n=e<0||arguments.length<=e?void 0:arguments[e];for(var a in n)n[a]&&(t[a]?t[a]=[].concat(n[a],t[a]):t[a]=n[a])}return t}},ed97:function(t,e,n){}}]);
//# sourceMappingURL=chunk-ec6471d4.27527de8.js.map