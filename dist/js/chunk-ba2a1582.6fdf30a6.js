(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba2a1582"],{"00e6":function(t,e,a){t.exports=a.p+"img/shuffle.0415df96.svg"},"01f2":function(t,e,a){t.exports=a.p+"img/call.fd2f6338.svg"},"085d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"relative",attrs:{id:"layout"}},[a("Header",{ref:"header"}),a("v-main",{staticClass:"parent",class:t.wrapperSpace?"with":"without"},[a("router-view",{on:{RouteValidator:function(e){return t.RouteValidator()}}})],1),a("Footer",{ref:"footer",attrs:{footerStyle:t.footerStyle}})],1)},s=[],i=(a("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"header"}},[n("ModalConnect",{ref:"ModalConnect"}),n("MenuHeader",{ref:"menu"}),n("v-app-bar",{staticClass:"font2 isolate",attrs:{id:"headerApp",color:"transparent",height:"100px",absolute:""}},[n("aside",{staticClass:"acenter gap2",staticStyle:{"padding-left":"calc(48px + 2em)"}},[n("aside",{staticClass:"sidebar divcol acenter jspace isolate",class:{active:t.sidebar}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.toggleFunc()}}},[n("img",{attrs:{src:a("aa7f")("./menu"+(0==t.positionFocus||16==t.positionFocus?"":"-active-sidebar")+".svg"),alt:"toggle"}})]),n("div",{staticClass:"focus",style:"--distanceInitial:"+t.initialFocus+";--distance:"+t.positionFocus+"px"}),t._l(t.dataSidebar,(function(e,s){return n("v-tooltip",{key:s,attrs:{right:"",color:"var(--primary)"},scopedSlots:t._u([{key:"activator",fn:function(s){var i=s.on,r=s.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.sidebar,expression:"sidebar"}],class:{openMenuMarket:"market"==e.key,active:e.active},attrs:{icon:"",to:e.to},on:{click:function(a){t.positionFocus=e.position,t.activeSidebarIcons(e)}}},"v-btn",e.active?null:r,!1),e.active?null:i),[n("img",{attrs:{src:a("6f32")("./"+e.icon+(e.active?"-active":"")+".svg"),alt:"side bar icons"}})])]}}],null,!0)},[n("span",{staticClass:"h9_em"},[t._v(t._s(e.name))])])}))],2),n("v-autocomplete",{staticClass:"eliminarmobile",staticStyle:{"--max-w":"14.6875em","--p":"0 1.5em"},attrs:{items:t.artistList,placeholder:"Search artist","item-text":"name","item-value":"wallet",id:"search","hide-details":"",solo:""},on:{change:function(e){return t.searchArtist(t.artist)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("img",{attrs:{src:a("fe80"),alt:"search"}})]},proxy:!0},{key:"item",fn:function(e){return[[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.item.img}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.item.name)+" ")])],1)]]}}]),model:{value:t.artist,callback:function(e){t.artist=e},expression:"artist"}})],1),n("aside",{staticClass:"acenter gap2"},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.user.login,expression:"!$store.state.user.login"}],staticClass:"btn eliminarmobile",on:{click:function(e){t.$refs.ModalConnect.modalConnect=!0}}},[t._v("LOG IN")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.user.login,expression:"$store.state.user.login"}],staticClass:"openMenuLogin",class:{acenter:t.$store.state.user.login,contents:!t.$store.state.user.login},staticStyle:{cursor:"pointer","border-radius":"4vmax"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){!t.$store.state.user.login&&t.$router.push("/login")}}},[n("img",{staticClass:"eliminarmobile",style:"--w:3em;"+(t.$store.state.user.login?"--br:50%;--b:2px solid #000000;--p:4px":null),attrs:{src:t.nearSocialAvatar||a("ecec"),alt:"account"}}),n("img",{staticClass:"vermobile",style:"--w:3em;"+(t.$store.state.user.login?"--br:50%;--b:2px solid #000000;--p:4px":null),attrs:{src:t.nearSocialAvatar||a("1f9a"),alt:"account"}})]),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.user.login,expression:"$store.state.user.login"}]},[t._v("mdi-menu-down")])],1)],1)])],1)}),r=[],o=a("ade3"),c=a("3835"),l=a("8785"),u=a("1da1"),d=(a("96cf"),a("ac1f"),a("841c"),a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("1276"),a("159b"),a("caad"),a("2532"),a("4fadc"),a("5184")),m=a("cb2b"),p=(a("71c5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"menuHeader"}},[n("ModalConnect",{ref:"ModalConnect"}),n("v-navigation-drawer",{staticClass:"font2",attrs:{id:"toggleBar",height:"100%",fixed:"",right:"",temporary:"","overlay-opacity":t.$store.state.overlay.opacity,"overlay-color":t.$store.state.overlay.color,color:"var(--secondary)"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("section",{staticClass:"container-header end"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!1}}},[n("img",{staticStyle:{"--w":"2.375em"},attrs:{src:a("8b1b"),alt:"close"}})])],1),n("section",{staticClass:"container-content divcol jspace gap2"},[n("v-expansion-panels",{staticClass:"anim_moveleft",attrs:{focusable:"",accordion:""}},[t.dataDrawer.expansion?t._l(t.dataDrawer.expansion,(function(e,s){return n("v-expansion-panel",{key:s},[n("v-expansion-panel-header",{attrs:{"hide-actions":""},on:{click:function(a){return t.ActiveClass("expansion",e)}}},[n("v-col",{staticClass:"conttitle acenter gap1 h10_em"},[n("img",{staticClass:"icon",class:{active:e.active},attrs:{src:a("6f32")("./"+e.icon+(e.active?"-active":"")+".svg"),alt:e.alt}}),n("span",{staticClass:"normal",staticStyle:{"max-width":"max-content"}},[t._v(t._s(e.name))]),n("v-icon",{class:{active_rotate:e.active},attrs:{small:"",color:"#ffffff"}},[t._v("mdi-menu-down")])],1)],1),n("v-expansion-panel-content",[n("v-list",[n("v-list-item-group",{attrs:{"active-class":"activeText"}},t._l(e.selection,(function(e,a){return n("v-list-item",{key:a,attrs:{ripple:!1,to:e.to}},[n("v-list-item-title",{staticClass:"center h10_em"},[n("span",{staticClass:"normal"},[t._v(t._s(e.name))])])],1)})),1)],1)],1)],1)})):t._e(),t.dataDrawer.list?[n("v-list",{staticClass:"fill_w"},t._l(t.dataDrawer.list,(function(e,s){return n("v-list-item",{key:s,attrs:{link:"",to:e.to,ripple:!1}},[n("v-list-item-content",{on:{click:function(a){return t.ActiveClass("list",e)}}},[n("v-col",{staticClass:"conttitle acenter gap1 h10_em"},[n("img",{staticClass:"icon",class:{active:e.active},attrs:{src:a("6f32")("./"+e.icon+(e.active?"-active":"")+".svg"),alt:e.alt}}),n("span",{staticStyle:{"max-width":"max-content"}},[t._v(" "+t._s(e.name)+" ")])])],1)],1)})),1)]:t._e()],2),n("section",{staticClass:"container-footer divcol center gap2"},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.user.login,expression:"!$store.state.user.login"}],staticClass:"btn",staticStyle:{"--max-w":"9.1875em","--p":"0 1.2em"},on:{click:function(e){t.$refs.ModalConnect.modalConnect=!0}}},[t._v("LOG IN")]),n("div",{staticClass:"center"},t._l(t.dataSocial,(function(t,e){return n("v-btn",{key:e,attrs:{icon:"",href:t.url,target:"_blank"}},[n("img",{attrs:{src:a("6f32")("./"+t.icon+".svg"),alt:"social red"}})])})),1)],1)],1)]),n("v-menu",{attrs:{activator:".openMenuMarket",right:"","offset-x":""}},[n("v-list",{staticClass:"font2",attrs:{id:"menuMarket"}},[n("v-list-item-group",{attrs:{"active-class":"activeClass"}},[n("v-list-item",{attrs:{disabled:""}},[n("v-list-item-title",[t._v("MARKETPLACE")])],1),t._l(t.dataDrawer.expansion[0].selection,(function(e,a){return n("v-list-item",{key:a,attrs:{to:"/"+e.key}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)}))],2)],1)],1),n("v-menu",{attrs:{activator:".openMenuLogin",right:"","offset-x":""}},[n("v-list",{staticClass:"font2",attrs:{id:"menuLogin"}},[n("v-list-item-group",{attrs:{"active-class":"activeClass"}},t._l(t.dataMenuLogin,(function(e,a){return n("v-list-item",{key:a,attrs:{to:e.to},on:{click:function(a){return t.goTo(e.key)}}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)}),g=[],v=a("d3a4"),f={name:"headerMenu",i18n:a("2ef8"),components:{ModalConnect:m["a"]},data:function(){return{messages:1,drawer:!1,dataDrawer:{list:[{key:"stats",icon:"stats",name:"STATS",to:"/stats",active:!1},{key:"chats",icon:"chats",name:"CHATS",to:"/chats",active:!1},{key:"settings",icon:"settings",name:"SETTINGS",to:"/coming-soon",active:!1},{key:"faq",icon:"faq",name:"FAQ",to:"/faq",active:!1}],expansion:[{icon:"market",name:"MARKETPLACE",active:!1,selection:[{name:"Buy",key:"buy",to:"/buy"},{name:"Sell",key:"sell",to:"/sell"}]}]},modeConnect:localStorage.getItem("modeConnect"),dataSocial:[{icon:"twitter",url:"#"},{icon:"instagram",url:"#"},{icon:"twitch",url:"#"}],dataMenuLogin:"ramper"===localStorage.getItem("modeConnect")?[{key:"wallet",name:"Open wallet"},{key:"profile",name:"Profile",to:"/profile"},{key:"library",name:"Library",to:"/library"},{key:"logout",name:"Log out"}]:[{key:"profile",name:"Profile",to:"/profile"},{key:"library",name:"Library",to:"/library"},{key:"logout",name:"Log out"}]}},mounted:function(){},methods:{ActiveClass:function(t,e){"expansion"==t?e.active?e.active=!e.active:(this.dataDrawer.list.forEach((function(t){t.active=!1})),this.dataDrawer.expansion.forEach((function(t){t.active=!1})),e.active=!0):"list"==t&&(this.dataDrawer.expansion.forEach((function(t){t.active=!1})),this.dataDrawer.list.forEach((function(t){t.active=!1})),e.active=!0)},goTo:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("logout"!=t){a.next=10;break}if("walletSelector"!==localStorage.getItem("modeConnect")){a.next=6;break}return a.next=4,e.$selector.wallet.signOut();case 4:a.next=7;break;case 6:"ramper"===localStorage.getItem("modeConnect")&&e.$ramper.signOut();case 7:e.$router.go(0),a.next=11;break;case 10:"wallet"==t&&e.$ramper.openWallet();case 11:case"end":return a.stop()}}),a)})))()},CambiarLanguage:function(t){localStorage.language=t,v["a"].locale=t}}},h=f,b=(a("8c5a"),a("2877")),y=a("6544"),x=a.n(y),k=a("8336"),w=a("62ad"),C=a("cd55"),S=a("49e2"),_=a("c865"),$=a("0393"),I=a("132d"),T=a("8860"),A=a("da13"),V=a("5d23"),L=a("1baa"),R=a("e449"),P=a("f774"),O=Object(b["a"])(h,p,g,!1,null,null,null),M=O.exports;x()(O,{VBtn:k["a"],VCol:w["a"],VExpansionPanel:C["a"],VExpansionPanelContent:S["a"],VExpansionPanelHeader:_["a"],VExpansionPanels:$["a"],VIcon:I["a"],VList:T["a"],VListItem:A["a"],VListItemContent:V["a"],VListItemGroup:L["a"],VListItemTitle:V["b"],VMenu:R["a"],VNavigationDrawer:P["a"]});var E,j,q,F=a("d9eb"),N=a("56d7"),D=F["Contract"],B=localStorage.getItem("theme"),H=(q={name:"header",components:{MenuHeader:M,ModalConnect:m["a"]},i18n:a("2ef8"),created:function(){this.element=document.getElementById("theme"),B&&(this.CambiarTheme(B),this.$store.commit("OverlayMethod",B)),"light"==B&&(this.themeButton=!0),"dark"==B&&(this.themeButton=!1)},computed:{perfil:function(){return this.$store.state.user.perfil}},data:function(){return{imgAux:null,artist:null,artistList:[],nearSocialAvatar:null,accountId:null,messages:1,sidebar:!1,initialFocus:0,positionFocus:0,modeConnect:localStorage.getItem("modeConnect"),dataSidebar:[{key:"market",icon:"market",name:"Marketplace",position:120,active:!1},{key:"stats",icon:"stats",name:"stats",to:"/stats",position:240,active:!1},{key:"chats",icon:"chats",name:"chats",to:"/chats",position:360,active:!1},{key:"settings",icon:"settings",name:"settings",to:"/coming-soon",position:480,active:!1},{key:"faq",icon:"faq",name:"faq",position:600,to:"/faq",active:!1}]}}},Object(o["a"])(q,"created",(function(){var t,e=window.location.search,a=new URLSearchParams(e);null!==a.get("transactionHashes")&&(t="https://testnet.nearblocks.io/txns/"+a.get("transactionHashes"),this.transactionHashes=a.get("transactionHashes"),history.replaceState(null,location.href.split("?")[0],"/#/"),localStorage.setItem("results",!0),localStorage.setItem("linkHash",t),this.$router.push("/results"));null!==a.get("errorCode")&&(history.replaceState(null,location.href.split("?")[0],"/#/"),this.$router.push("/results"))})),Object(o["a"])(q,"mounted",(function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$selector.selector.isSignedIn()?(t.getNearSocial(t.$selector.getAccountId()),t.initUser(t.$selector.getAccountId()),localStorage.setItem("modeConnect","walletSelector"),t.$store.state.user.login=!0,t.getCollection()):t.$ramper.getUser()&&(t.getNearSocial(t.$ramper.getAccountId()),t.initUser(t.$ramper.getAccountId()),localStorage.setItem("modeConnect","ramper"),t.$store.state.user.login=!0,t.getCollection()),t.getArtists(),a=document.querySelector(".sidebar"),document.addEventListener("click",(function(e){a.contains(e.target)||1!=t.sidebar||t.toggleFunc()})),n=document.getElementById("search"),s=document.querySelectorAll(".filterItems"),n.addEventListener("keyup",(function(t){s.forEach((function(e){e.textContent.toLowerCase().includes(t.target.value.toLowerCase())?e.style.display="block":e.style.display="none","Escape"==t.key&&(t.target.value=""),""==t.target.value&&(e.style.display="none")}))})),document.querySelectorAll(".filterItems").forEach((function(t){""==n.textContent&&(t.style.display="none")}));case 8:case"end":return e.stop()}}),e)})))()})),Object(o["a"])(q,"methods",{searchArtist:function(t){localStorage.setItem("artist",t),this.artist=null,this.$router.push("/artist-details").catch((function(){N["eventBus"].$emit("artist-selected",t)}))},getArtists:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(d["a"])(E||(E=Object(l["a"])(["\n        query MyQuery {\n          users {\n            description\n            id\n            wallet\n            artist_name\n          }\n        }\n      "]))),e.next=3,t.$apollo.query({query:a});case 3:n=e.sent,s=n.data.users,i=0;case 6:if(!(i<s.length)){e.next=21;break}return r=s[i],e.t0=r.id,e.t1=r.artist_name,e.t2=r.wallet,e.t3=r.wallet,e.next=14,t.getNearSocialFn(r.wallet);case 14:e.t4=e.sent,o={id:e.t0,name:e.t1,wallet:e.t2,creator:e.t3,img:e.t4},t.imgAux=null,t.artistList.push(o);case 18:i++,e.next=6;break;case 21:case"end":return e.stop()}}),e)})))()},getCollection:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.axios.post("https://develop.globaldv.tech/w3service/api/get-collection/",{wallet:t.$ramper.getAccountId()||t.$selector.getAccountId()}).then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(a){var n,s,i,r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[],s=a.data,i=0;case 3:if(!(i<s.length)){e.next=26;break}return r=s[i],o=document.createElement("audio"),o.src=r.trackFull,o.setAttribute("preload","auto"),o.setAttribute("controls","none"),o.style.display="none",document.body.appendChild(o),e.t0=i,e.t1=r.id,e.t2=r.metadata.media,e.t3=r.metadata.title,e.t4=r.title,e.next=18,t.getArtistName(r.metadata.creator_id);case 18:e.t5=e.sent,e.t6=r.metadata.creator_id,e.t7=o,c={index:e.t0,tokenId:e.t1,img:e.t2,name:e.t3,nameNft:e.t4,by:e.t5,creator:e.t6,track:e.t7,play:!1,type:"full"},n.push(c);case 23:i++,e.next=3;break;case 26:t.$store.dispatch("updateLibrary",n);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()},getArtistName:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=Object(d["a"])(j||(j=Object(l["a"])(["\n        query MyQuery($wallet: String!) {\n          users(where: {wallet: $wallet}) {\n            artist_name\n            wallet\n          }\n        }\n      "]))),a.next=3,e.$apollo.query({query:n,variables:{wallet:t}});case 3:return s=a.sent,i=s.data,a.abrupt("return",i.users[0].artist_name||null);case 6:case"end":return a.stop()}}),a)})))()},initUser:function(t){var e=this;this.axios.post("https://develop.globaldv.tech/w3service/api/get-user-by-wallet/",{wallet:t}).then((function(a){a.data||e.axios.post("https://develop.globaldv.tech/w3service/api/create-user/",{wallet:t})})).catch((function(t){console.log(t)}))},getNearSocialFn:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var s,i,r,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$near.account(t);case 2:return s=n.sent,i=new D(s,"v1.social08.testnet",{viewMethods:["get"],sender:s}),r=[s.accountId+"/profile/**"],n.next=7,i.get({keys:r});case 7:if(o=n.sent,Object.entries(o).forEach((function(t){var a=Object(c["a"])(t,2),n=(a[0],a[1]);e.imgAux="https://ipfs.near.social/ipfs/"+n.profile.image.ipfs_cid})),!e.imgAux){n.next=13;break}return n.abrupt("return",e.imgAux);case 13:return l=a("86f2"),n.abrupt("return",l);case 15:case"end":return n.stop()}}),n)})))()},getNearSocial:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var n,s,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return localStorage.removeItem("nearSocialAvatar"),a.next=3,e.$near.account(t);case 3:return n=a.sent,s=new D(n,"v1.social08.testnet",{viewMethods:["get"],sender:n}),i=[n.accountId+"/profile/**"],a.next=8,s.get({keys:i});case 8:r=a.sent,Object.entries(r).forEach((function(t){var a,n=Object(c["a"])(t,2),s=(n[0],n[1]);localStorage.setItem("nearSocialAvatar",s.profile.image.ipfs_cid),e.nearSocialAvatar="https://ipfs.near.social/ipfs/"+localStorage.getItem("nearSocialAvatar"),null!==(a=s.profile.backgroundImage)&&void 0!==a&&a.ipfs_cid&&localStorage.setItem("nearSocialBanner",s.profile.backgroundImage.ipfs_cid)}));case 10:case"end":return a.stop()}}),a)})))()},activeSidebarIcons:function(t){this.dataSidebar.forEach((function(t){t.active=!1})),setTimeout((function(){t.active=!0}),500)},toggleFunc:function(){window.innerWidth<=880?this.$refs.menu.drawer=!0:(this.sidebar=!this.sidebar,this.dataSidebar.forEach((function(t){t.active=!1})),this.positionFocus=0,0==this.sidebar?this.initialFocus=0:this.initialFocus=16)},LogState:function(){"out"==localStorage.getItem("logKey")&&(this.$store.state.user.login=!1),"in"==localStorage.getItem("logKey")&&(this.$store.state.user.login=!0)}}),q),U=H,K=a("40dc"),X=a("c6a6"),z=a("adda"),G=a("8270"),W=a("3a2f"),J=Object(b["a"])(U,i,r,!1,null,null,null),Q=J.exports;x()(J,{VAppBar:K["a"],VAutocomplete:X["a"],VBtn:k["a"],VIcon:I["a"],VImg:z["a"],VListItemAvatar:G["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VTooltip:W["a"]});var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{id:"footer",color:t.footerStyle?"var(--primary)":"transparent",fixed:""}},[n("v-row",{staticClass:"align",attrs:{"no-gutters":""}},[t.footerStyle?n("section",{staticClass:"fill_w space gap2"},[n("blockquote",{staticClass:"center gap1"},[n("img",{staticStyle:{"--w":"3.06625em"},attrs:{id:"track",src:t.track.img||a("86546"),alt:"track image"}}),n("div",{staticClass:"divcol"},[n("h6",{staticClass:"p",staticStyle:{"font-size":"clamp(1em, 1.4vw, 1.4em)"}},[t._v(t._s(t.track.name||"-"))]),n("span",{staticClass:"font2",staticStyle:{"font-size":"clamp(1em, 1.2vw, 1.2em)"}},[t._v(t._s(t.visibleText||"-"))])])]),n("aside",{staticClass:"acenter gap1"},[t._l(t.dataActionsLeft,(function(e,s){return n("v-btn",{key:s,class:{activeBtn:t.isPressedLeft},staticStyle:{"--p":"clamp(1.2em ,1.5vw, 1.5em)"},attrs:{icon:"",disabled:t.disabledTrack&&("previous"===e.key||"next"===e.key||"shuffle"===e.key||"repeat"===e.key)},on:{click:t.btnLeft}},[n("img",{style:"transform: "+("next"==e.key?"rotate(180deg)":null)+"\n            "+("play"==e.key?"play-simple"==e.icon?"translateX(2px)":"translateX(0)":null)+";\n            --w: clamp(1.46em - .4em, 1.4vw, 1.46em)",attrs:{src:a("6f32")("./"+("play"==e.key?t.player.play?"pause-simple":"play-simple":e.icon)+".svg"),alt:e.key+" icon"}})])})),t._l(t.dataActions,(function(e,s){return n("v-btn",{key:s,class:{eliminarmobile:e.deleteMobile},staticStyle:{"--p":"clamp(1.2em ,1.5vw, 1.5em)"},attrs:{icon:"",disabled:t.disabledTrack&&("previous"===e.key||"next"===e.key||"shuffle"===e.key||"repeat"===e.key)},on:{click:function(a){return t.clickPlayer(e)}}},[n("img",{style:"transform: "+("next"==e.key?"rotate(180deg)":null)+"\n            "+("play"==e.key?"play-simple"==e.icon?"translateX(2px)":"translateX(0)":null)+";\n            --w: clamp(1.46em - .4em, 1.4vw, 1.46em)",attrs:{src:a("6f32")("./"+("play"==e.key?t.player.play?"pause-simple":"play-simple":e.icon)+".svg"),alt:e.key+" icon"}})])})),t._l(t.dataActionsRight,(function(e,s){return n("v-btn",{key:s,class:{activeBtn:t.isPressedRight},staticStyle:{"--p":"clamp(1.2em ,1.5vw, 1.5em)"},attrs:{icon:"",disabled:t.disabledTrack&&("previous"===e.key||"next"===e.key||"shuffle"===e.key||"repeat"===e.key)},on:{click:t.btnRight}},[n("img",{style:"transform: "+("next"==e.key?"rotate(180deg)":null)+"\n            "+("play"==e.key?"play-simple"==e.icon?"translateX(2px)":"translateX(0)":null)+";\n            --w: clamp(1.46em - .4em, 1.4vw, 1.46em)",attrs:{src:a("6f32")("./"+("play"==e.key?t.player.play?"pause-simple":"play-simple":e.icon)+".svg"),alt:e.key+" icon"}})])}))],2),t.timeTrack?n("aside",{staticClass:"center gap1 font2 eliminarmobile",staticStyle:{width:"min(100%,18.6875em)"}},[n("span",[t._v(t._s(t.getConvertTime(t.sliderValue)))]),n("v-slider",{attrs:{color:"#000000",min:0,max:t.timeTrack,"hide-details":"","track-color":"hsl(0, 0%, 0%, .22)"},on:{change:function(e){return t.changeTimeSlider()},input:function(e){return t.inputTimeSlider()}},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}}),n("span",[t._v(t._s(t.getConvertTime(t.timeTrack)))])],1):t._e(),n("aside",{staticClass:"center gap1",staticStyle:{width:"min(100%,6.875em)"}},[n("img",{staticStyle:{"--w":"clamp(1.6875em - .4em, 1.6vw, 1.6875em)"},attrs:{src:a("e245"),alt:"sound"}}),n("v-slider",{staticClass:"font2",attrs:{color:"#000000",min:0,max:100,"thumb-label":!1,"hide-details":"","track-color":"hsl(0, 0%, 0%, .22)"},on:{input:function(e){return t.changeSound()}},model:{value:t.soundValue,callback:function(e){t.soundValue=e},expression:"soundValue"}})],1)]):n("div",{staticClass:"marginaleft center"},t._l(t.dataSocial,(function(t,e){return n("v-btn",{key:e,attrs:{icon:"",href:t.url,target:"_blank"}},[n("img",{staticStyle:{"--w":"1.5625em"},attrs:{id:"social",src:a("6f32")("./"+t.icon+".svg"),alt:t.icon+" icons"}})])})),1)])],1)},Z=[],tt=(a("99af"),{computed:{track:function(){var t,e,a,n=this;console.log("TRACK",this.$store.getters.getTrack),"number"!==typeof(null===(t=this.$store.getters.getTrack)||void 0===t?void 0:t.index)?this.disabledTrack=!0:this.disabledTrack=!1,this.fullText=null===(e=this.$store.getters.getTrack)||void 0===e?void 0:e.by,this.startAnimation();var s,i=null===(a=this.$store.getters.getTrack)||void 0===a?void 0:a.track;i&&(this.timeTrack=i.duration||0,null!==(s=this.$store.getters.getPlayer)&&void 0!==s&&s.play&&(clearInterval(this.interval),this.interval=setInterval((function(){n.sliderValue=i.currentTime,i.currentTime>=i.duration&&(n.isPressedRight?i.play():n.isPressedLeft?n.$store.dispatch("arrowPlayer","nextRandom"):n.$store.dispatch("arrowPlayer","next"))}),500)));return this.$store.getters.getTrack},player:function(){var t,e;return this.soundValue=100*(null===(t=this.$store.getters.getPlayer)||void 0===t?void 0:t.volume)||50,this.playTrack=(null===(e=this.$store.getters.getPlayer)||void 0===e?void 0:e.play)||!1,this.$store.getters.getPlayer}},props:{footerStyle:Boolean},data:function(){return{isPressedRight:!1,isPressedLeft:!1,dataSocial:[{icon:"twitter",url:"#"},{icon:"instagram",url:"#"},{icon:"twitch",url:"#"}],dataActions:[{key:"previous",icon:"next-music"},{key:"play",icon:"play-simple"},{key:"next",icon:"next-music"}],dataActionsRight:[{key:"repeat",icon:"repeat",deleteMobile:!0}],dataActionsLeft:[{key:"shuffle",icon:"shuffle",deleteMobile:!0}],disabledTrack:!0,playTrack:0,timeTrack:0,timeTrackStr:"-",fullText:"",visibleText:"",maxChars:25,currentIndex:0,sliderValue:0,sliderValueStr:"-",sliderMax:20,soundValue:null}},mounted:function(){this.soundValue=100*this.player.volume||50},methods:{btnRight:function(){this.isPressedRight=!this.isPressedRight,console.log(this.isPressedRight),this.isPressedRight&&(this.isPressedLeft=!1)},btnLeft:function(){this.isPressedLeft=!this.isPressedLeft,this.isPressedLeft&&(this.isPressedRight=!1)},inputTimeSlider:function(){},changeTimeSlider:function(){var t=this;clearInterval(this.interval),this.track.track.currentTime=this.sliderValue,this.interval=setInterval((function(){t.sliderValue=t.track.track.currentTime,t.track.track.currentTime>=t.track.track.duration&&(t.isPressedRight?t.track.track.play():t.isPressedLeft?t.$store.dispatch("arrowPlayer","nextRandom"):t.$store.dispatch("arrowPlayer","next"))}),500)},getConvertTime:function(t){var e=Math.floor(t/60),a=Math.round(t%60),n=e<10?"0".concat(e):"".concat(e),s=a<10?"0".concat(a):"".concat(a);return"".concat(n,":").concat(s)},clickPlayer:function(t){var e=this.player;"play"===t.key?(e.play=!e.play,this.$store.dispatch("updatePlayer",e)):"previous"===t.key?this.$store.dispatch("arrowPlayer",t.key):"next"===t.key&&(this.isPressedLeft?this.$store.dispatch("arrowPlayer","nextRandom"):this.$store.dispatch("arrowPlayer","next"))},changeSound:function(){this.$store.dispatch("updateVolume",this.soundValue/100)},startAnimation:function(){var t=this;setInterval((function(){var e,a;t.currentIndex+t.maxChars<=(null===(e=t.fullText)||void 0===e?void 0:e.length)?(t.visibleText=t.fullText.substring(t.currentIndex,t.currentIndex+t.maxChars),t.currentIndex++):(t.currentIndex=0,t.visibleText=null===(a=t.fullText)||void 0===a?void 0:a.substring(t.currentIndex,t.currentIndex+t.maxChars),t.currentIndex++)}),1800)}}}),et=tt,at=(a("2891"),a("553a")),nt=a("0fd9"),st=a("ba0d"),it=Object(b["a"])(et,Y,Z,!1,null,null,null),rt=it.exports;x()(it,{VBtn:k["a"],VFooter:at["a"],VRow:nt["a"],VSlider:st["a"]});a("52c9");var ot={name:"layout",components:{Header:Q,Footer:rt},data:function(){return{wrapperSpace:!0,footerStyle:!1}},methods:{RouteValidator:function(){var t=this.$router.currentRoute.name;this.wrapperSpace="landing"!=t&&"results"!=t&&"chats"!=t,this.footerStyle="landing"!=t&&"profile"!=t&&"results"!=t&&"chats"!=t}}},ct=ot,lt=a("7496"),ut=a("f6c4"),dt=Object(b["a"])(ct,n,s,!1,null,null,null);e["default"]=dt.exports;x()(dt,{VApp:lt["a"],VMain:ut["a"]})},"0b5d":function(t,e,a){t.exports=a.p+"img/back-market.01b1b351.svg"},"0c16":function(t,e,a){t.exports=a.p+"img/smile.83eae3c6.svg"},"1c27":function(t,e,a){t.exports=a.p+"img/success.aeaff98a.svg"},"1f9a":function(t,e,a){t.exports=a.p+"img/account-mobile.b699e0d5.svg"},2087:function(t,e,a){t.exports=a.p+"img/play-white.760e2005.svg"},"209f":function(t,e,a){t.exports=a.p+"img/warning-icon.6e1084cd.svg"},"24e5":function(t,e,a){t.exports=a.p+"img/camera.b49a1cc6.svg"},2891:function(t,e,a){"use strict";a("5492")},"2ef8":function(t,e){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},"2fae":function(t,e,a){t.exports=a.p+"img/sonido.4d371246.svg"},3924:function(t,e,a){t.exports=a.p+"img/camera-circle.e3f82d58.svg"},"3e0a":function(t,e,a){},"43be":function(t,e,a){t.exports=a.p+"img/email.0fbf3ead.svg"},4926:function(t,e,a){t.exports=a.p+"img/near-wallet-icon.7d1b66b7.svg"},"4b48":function(t,e,a){t.exports=a.p+"img/next-music.d104c6b9.svg"},"4eb8":function(t,e,a){t.exports=a.p+"img/microphone.994441a1.svg"},"508d":function(t,e,a){t.exports=a.p+"img/market-active.93a04a86.svg"},"52c9":function(t,e,a){},5492:function(t,e,a){},5877:function(t,e,a){"use strict";a("3e0a")},"59f6":function(t,e,a){t.exports=a.p+"img/faq.9de55da4.svg"},"5c7e":function(t,e,a){t.exports=a.p+"img/stats.5589d977.svg"},"5d2f":function(t,e,a){t.exports=a.p+"img/chats.2ce1d5d1.svg"},"5def":function(t,e,a){t.exports=a.p+"img/menu-active-sidebar.89118b6a.svg"},"60a3":function(t,e,a){t.exports=a.p+"img/like-button-active.b8837e77.svg"},6241:function(t,e,a){t.exports=a.p+"img/doge.69024b6a.svg"},"629c":function(t,e,a){t.exports=a.p+"img/like-active.9b712ef9.svg"},"644b":function(t,e,a){t.exports=a.p+"img/pause.63b067d3.svg"},"6d8b":function(t,e,a){t.exports=a.p+"img/like.3c4fe344.svg"},"6f32":function(t,e,a){var n={"./account-mobile.svg":"1f9a","./account.svg":"ecec","./add.svg":"76a4","./auto.svg":"d55a","./back-market.svg":"0b5d","./back.svg":"7338","./call.svg":"01f2","./camera-circle.svg":"3924","./camera.svg":"24e5","./cancel.svg":"b463","./chats-active.svg":"bdf1","./chats.svg":"5d2f","./close.svg":"8b1b","./dlt.svg":"7660","./doge.svg":"6241","./email.svg":"43be","./faq-active.svg":"dffc","./faq.svg":"59f6","./instagram.svg":"bd6c","./like-active.svg":"629c","./like-button-active.svg":"60a3","./like-button.svg":"c58c","./like-icon.svg":"ffe2","./like.svg":"6d8b","./lupa.svg":"fe80","./market-active.svg":"508d","./market.svg":"f76d","./menu-active-sidebar.svg":"5def","./menu-active.svg":"d255","./menu.svg":"d17f","./microphone.svg":"4eb8","./near.svg":"e9e5","./new-chat.svg":"e653","./next-music.svg":"4b48","./pause-simple.svg":"e408","./pause-white.svg":"ed04","./pause.svg":"644b","./play-simple.svg":"fc1d","./play-white.svg":"2087","./play.svg":"dab1","./records.svg":"fb71","./repeat.svg":"c015","./settings-active.svg":"d874","./settings.svg":"9174","./share.svg":"bd5b","./shuffle.svg":"00e6","./smile.svg":"0c16","./sonido.svg":"2fae","./sound.svg":"e245","./stats-active.svg":"f6a4","./stats.svg":"5c7e","./success.svg":"1c27","./twitch.svg":"cfaa","./twitter.svg":"acf9","./url.svg":"9a16","./video-call.svg":"ea1b","./warning-icon.svg":"209f","./x-yellow.svg":"7388","./x.svg":"7387","./xdn.svg":"898f"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="6f32"},7338:function(t,e,a){t.exports=a.p+"img/back.33c74cab.svg"},7387:function(t,e,a){t.exports=a.p+"img/x.cc6a42cb.svg"},7388:function(t,e,a){t.exports=a.p+"img/x-yellow.b989236a.svg"},7660:function(t,e,a){t.exports=a.p+"img/dlt.8d202ed1.svg"},"76a4":function(t,e,a){t.exports=a.p+"img/add.2c6a9952.svg"},86546:function(t,e,a){t.exports=a.p+"img/track-white.27dd1f47.png"},"86f2":function(t,e,a){t.exports=a.p+"img/track.96552c21.jpg"},"898f":function(t,e,a){t.exports=a.p+"img/xdn.b1548263.svg"},"8b1b":function(t,e,a){t.exports=a.p+"img/close.a884e230.svg"},"8c5a":function(t,e,a){"use strict";a("ab3e")},9174:function(t,e,a){t.exports=a.p+"img/settings.b99adb81.svg"},"9a16":function(t,e,a){t.exports=a.p+"img/url.bda891d4.svg"},"9bdf":function(t,e,a){t.exports=a.p+"img/ramper.9f7f1fb4.svg"},aa7f:function(t,e,a){var n={"./menu-active-sidebar.svg":"5def","./menu-active.svg":"d255","./menu.svg":"d17f"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="aa7f"},ab3e:function(t,e,a){},acf9:function(t,e,a){t.exports=a.p+"img/twitter.423db502.svg"},b463:function(t,e,a){t.exports=a.p+"img/cancel.ab210c58.svg"},bd5b:function(t,e,a){t.exports=a.p+"img/share.faab53b6.svg"},bd6c:function(t,e,a){t.exports=a.p+"img/instagram.2e59e6eb.svg"},bdf1:function(t,e,a){t.exports=a.p+"img/chats-active.c527eef9.svg"},c015:function(t,e,a){t.exports=a.p+"img/repeat.2881953a.svg"},c58c:function(t,e,a){t.exports=a.p+"img/like-button.66572632.svg"},cb2b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"content-class":"modal-connect divcol relative isolate"},model:{value:t.modalConnect,callback:function(e){t.modalConnect=e},expression:"modalConnect"}},[n("aside",{staticClass:"space"},[n("span",{staticClass:"h9_em",staticStyle:{color:"#fff !important"}},[t._v("Connect Wallet")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.closeDialog()}}},[n("v-icon",{attrs:{size:"1.5em"}},[t._v("mdi-close")])],1)],1),n("v-sheet",{staticClass:"grid",attrs:{color:"transparent"}},[n("v-btn",{attrs:{plain:"",color:"hsl(0 0% 0% / .5)"},on:{click:function(e){return t.logIn()}}},[n("img",{attrs:{src:a("9bdf"),alt:"near"}}),n("div",{staticClass:"divcol astart",staticStyle:{gap:"5px"}},[n("span",{staticClass:"h12_em bold",staticStyle:{color:"#fff !important"}},[t._v("Email")]),n("span",{staticClass:"h13_em"},[t._v("ramper.xyz")])])]),n("v-btn",{attrs:{plain:""},on:{click:function(e){return t.walletSelector()}}},[n("img",{attrs:{src:a("4926"),alt:"near"}}),n("div",{staticClass:"divcol astart",staticStyle:{gap:"5px"}},[n("span",{staticClass:"h12_em bold",staticStyle:{color:"#fff !important"}},[t._v("WALLET")]),n("span",{staticClass:"h13_em"},[t._v("near")])])])],1)],1)},s=[],i=a("ade3"),r=a("1da1"),o=(a("96cf"),{name:"ConnectModal",data:function(){return{modalConnect:!1}},mounted:function(){},methods:Object(i["a"])({closeDialog:function(){this.modalConnect=!1},walletSelector:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.modalConnect=!1,localStorage.setItem("modeConnect","walletSelector"),t.$selector.modal.show();case 3:case"end":return e.stop()}}),e)})))()},logIn:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.modalConnect=!1,e.next=3,t.$ramper.signIn();case 3:a=e.sent,a&&a.user&&(localStorage.setItem("modeConnect","ramper"),localStorage.setItem("logKey","in"),location.reload());case 5:case"end":return e.stop()}}),e)})))()}},"closeDialog",(function(){this.modalConnect=!1,JSON.parse(localStorage.getItem("discord_sinc"))&&localStorage.removeItem("discord_sinc")}))}),c=o,l=(a("5877"),a("2877")),u=a("6544"),d=a.n(u),m=a("8336"),p=a("169a"),g=a("132d"),v=a("8dd9"),f=Object(l["a"])(c,n,s,!1,null,null,null);e["a"]=f.exports;d()(f,{VBtn:m["a"],VDialog:p["a"],VIcon:g["a"],VSheet:v["a"]})},cfaa:function(t,e,a){t.exports=a.p+"img/twitch.35984ea5.svg"},d17f:function(t,e,a){t.exports=a.p+"img/menu.49e8789d.svg"},d255:function(t,e,a){t.exports=a.p+"img/menu-active.1a6bf443.svg"},d55a:function(t,e,a){t.exports=a.p+"img/auto.6d23f9d0.svg"},d874:function(t,e,a){t.exports=a.p+"img/settings-active.49e1aaa3.svg"},dab1:function(t,e,a){t.exports=a.p+"img/play.7095b246.svg"},dffc:function(t,e,a){t.exports=a.p+"img/faq-active.9446dc08.svg"},e245:function(t,e,a){t.exports=a.p+"img/sound.5b0c4a25.svg"},e408:function(t,e,a){t.exports=a.p+"img/pause-simple.ef61b9a2.svg"},e653:function(t,e,a){t.exports=a.p+"img/new-chat.63b1b20f.svg"},e9e5:function(t,e,a){t.exports=a.p+"img/near.4438d60d.svg"},ea1b:function(t,e,a){t.exports=a.p+"img/video-call.7b9609d8.svg"},ecec:function(t,e,a){t.exports=a.p+"img/account.c50b0616.svg"},ed04:function(t,e,a){t.exports=a.p+"img/pause-white.3f4a9c58.svg"},f6a4:function(t,e,a){t.exports=a.p+"img/stats-active.6006659d.svg"},f76d:function(t,e,a){t.exports=a.p+"img/market.203b64f2.svg"},fb71:function(t,e,a){t.exports=a.p+"img/records.609f8730.svg"},fc1d:function(t,e,a){t.exports=a.p+"img/play-simple.dac5c72b.svg"},fe80:function(t,e,a){t.exports=a.p+"img/lupa.7115034a.svg"},ffe2:function(t,e,a){t.exports=a.p+"img/like-icon.c4be9fcd.svg"}}]);
//# sourceMappingURL=chunk-ba2a1582.6fdf30a6.js.map