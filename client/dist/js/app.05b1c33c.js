(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://alvaro07.github.io/spoty-mix-vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"206d":function(t,e,n){"use strict";var a=n("9cbb"),i=n.n(a);i.a},"30db":function(t,e,n){"use strict";var a=n("a4c0"),i=n.n(a);i.a},3169:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("router-view")],1)},s=[],o={name:"app"},r=o,c=(n("5c0b"),n("2877")),l=Object(c["a"])(r,i,s,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h1",{staticClass:"login__logo"},[n("font-awesome-icon",{staticClass:"login__logo__icon",attrs:{icon:"not-equal"}}),t._v("SpotyMix\n  ")],1),t._m(0),n("p",{staticClass:"login__description"},[t._v("\n    Access with your spotify user and mix your playlist easily, choose your two ore more\n    favorite lists and mix them in one click!\n  ")]),n("v-button",{attrs:{text:"Login with your Spotify",type:"buttonLink",href:"https://spotymix-auth-server.herokuapp.com/login",big:""}})],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"login__slogan"},[t._v("\n    Your best\n    spotify\n    "),n("span",[t._v("mixer")]),t._v(" playlist\n  ")])}],p=(n("ac6a"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return"buttonLink"===t.type?n("a",{staticClass:"c-button",class:[{"c-button--big ":t.big},{"c-button--disabled ":t.isDisabled},t.variantClass,t.extraClass],attrs:{href:t.href}},[t.icon?n("font-awesome-icon",{staticClass:"c-button__icon",attrs:{icon:t.icon}}):t._e(),t.text?n("span",{staticClass:"c-button__text"},[t._v(t._s(t.text))]):t._e()],1):n("button",{staticClass:"c-button",class:[{"c-button--big ":t.big},{"c-button--disabled ":t.isDisabled},t.variantClass,t.extraClass],on:{click:function(e){return e.preventDefault(),t.onButtonClick(e)}}},[t.icon?n("font-awesome-icon",{staticClass:"c-button__icon",attrs:{icon:t.icon}}):t._e(),t.text?n("span",{staticClass:"c-button__text"},[t._v(t._s(t.text))]):t._e()],1)}),h=[],_={name:"Button",props:{text:String,type:String,href:String,icon:String,extraClass:String,big:Boolean,disabled:Boolean,variant:String},data:function(){return{isDisabled:this.disabled}},methods:{onButtonClick:function(){this.$emit("onClick")},activeButton:function(){this.isDisabled=!1},disabledButton:function(){this.isDisabled=!0}},computed:{variantClass:function(){if("green"===this.variant)return"c-button--green"}}},g=_,v=(n("ef55"),Object(c["a"])(g,p,h,!1,null,null,null)),b=v.exports,y={name:"login",components:{"v-button":b},methods:{getHashParams:function(){var t,e={},n=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);t=n.exec(a);while(t)e[t[1]]=decodeURIComponent(t[2]),t=n.exec(a);return e}},mounted:function(){Object.keys(this.getHashParams()).length&&this.$store.commit("addConfig",this.getHashParams())},beforeRouteEnter:function(t,e,n){n(function(t){null!==t.$store.state.config.access_token&&n({name:"dashboard"})})}},x=y,C=(n("206d"),Object(c["a"])(x,m,f,!1,null,null,null)),k=C.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-content"},[n("v-header"),t.loading?n("p",{staticClass:"page-content__loading"},[t._v("Loading...")]):t._e(),t.error?n("p",{},[t._v(t._s(t.error))]):t._e(),this.$store.state.playlists.data?n("main",{staticClass:"page-content__main"},[n("div",{staticClass:"page-content__header"},[n("h3",{staticClass:"page-content__header__title"},[t._v("Select your playlists for mix.")]),n("v-button",{ref:"mixButton",attrs:{text:"Mix",icon:"music",disabled:""},on:{onClick:t.goToMix}})],1),n("ul",{staticClass:"dashboard__list"},t._l(this.$store.state.playlists.data,function(e,a){return n("list-card",{key:a,attrs:{title:e.name,poster:e.images[0].url,id:e.id},on:{openPreview:function(){return t.openModalPreview("modal-preview",e)}}})}),1)]):t._e(),t.modal.isOpen&&"modal-preview"===t.modal.name?n("Modal",{attrs:{title:this.prePlaylist.name},on:{close:t.closeModal}},[t.prePlaylist.tracks?n("ul",t._l(t.prePlaylist.tracks,function(t,e){return n("track-item",{key:e,attrs:{data:t.track}})}),1):t._e()]):t._e()],1)},w=[],S=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"m-header"},[n("div",{staticClass:"m-header__wrap"},[n("h1",{staticClass:"m-header__logo"},[n("font-awesome-icon",{staticClass:"m-header__logo__icon",attrs:{icon:"not-equal"}}),t._v("SpotyMix\n    ")],1),n("v-button",{attrs:{icon:"sign-out-alt",text:"Sign out"},on:{onClick:t.logOut}})],1)])}),O=[],P={name:"nav-header",components:{"v-button":b},methods:{logOut:function(){this.$store.commit("logOut"),this.$router.push({name:"home"})}}},M=P,T=(n("8ee7"),Object(c["a"])(M,S,O,!1,null,null,null)),j=T.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-card",class:{"list-card--is-active":t.isSelected},on:{click:function(e){return e.preventDefault(),t.toggleActive(e)}}},[n("img",{staticClass:"list-card__image",attrs:{src:t.poster,alt:t.title}}),n("h3",{staticClass:"list-card__title"},[t._v(t._s(t.title))]),n("button",{staticClass:"list-card__preview",on:{click:function(e){return e.stopPropagation(),t.previewClick(e)}}},[t._v("Preview")])])},E=[],L={name:"list-card",data:function(){return{isSelected:!1}},props:{title:String,poster:String,id:String},methods:{toggleActive:function(){this.isSelected=!this.isSelected,this.isSelected?this.$store.commit("addListToMix",this.id):this.$store.commit("removeListToMix",this.id),this.$store.state.mixSelection.length>=2?this.$parent.$refs.mixButton.activeButton():this.$parent.$refs.mixButton.disabledButton()},previewClick:function(){this.$emit("openPreview")}}},D=L,U=(n("ffb6"),Object(c["a"])(D,B,E,!1,null,null,null)),A=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-modal"},[n("div",{staticClass:"c-modal__wrap"},[n("span",{staticClass:"c-modal__wrap__icon-close",on:{click:t.closeModal}},[n("font-awesome-icon",{attrs:{icon:"times-circle"}})],1),t.title?n("header",{staticClass:"c-modal__header"},[n("h2",{staticClass:"c-modal__header__title"},[t._v(t._s(t.title))])]):t._e(),n("main",{staticClass:"c-modal__content"},[t._t("default",[t._v("No content")])],2)])])},F=[],I={name:"modal",props:["title"],methods:{closeModal:function(){this.$emit("close")}}},N=I,R=(n("30db"),Object(c["a"])(N,K,F,!1,null,null,null)),q=R.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"c-track-item"},[n("div",{staticClass:"c-track-item__poster"},[n("img",{attrs:{src:t.poster,alt:t.title}})]),n("div",{staticClass:"c-track-item__cont"},[n("h3",{staticClass:"c-track-item__cont__artist"},[t._v(t._s(t.artist))]),n("h4",{staticClass:"c-track-item__cont__track"},[t._v("\n      "+t._s(t.title)+"\n      "),n("span",[t._v(t._s(t.album))])])])])},J=[],Y={name:"track-item",props:{data:{type:Object,required:!0}},computed:{poster:function(){return this.data.album.images[0].url},artist:function(){return this.data.artists[0].name},title:function(){return this.data.name},album:function(){return this.data.album.name}}},z=Y,G=(n("a145"),Object(c["a"])(z,H,J,!1,null,null,null)),Q=G.exports,V=(n("96cf"),n("3b8d"));function W(t,e,n){return t.spotify.setAccessToken(n),new Promise(function(n,a){t.spotify.getUserPlaylists(e,{limit:50}).then(function(t){n(t.body.items)},function(t){return a(t)})})}function X(t,e,n){return t.spotify.setAccessToken(n),new Promise(function(n,a){t.spotify.getPlaylist(e).then(function(t){n(t.body)},function(t){return a(t)})})}function Z(t,e,n,a,i){return tt.apply(this,arguments)}function tt(){return tt=Object(V["a"])(regeneratorRuntime.mark(function t(e,n,a,i,s){var o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.spotify.setAccessToken(s),t.prev=1,t.next=4,e.spotify.createPlaylist(n,a,{public:!1});case 4:return o=t.sent,r=o.body.id,t.next=8,e.spotify.addTracksToPlaylist(r,i);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log("error:",t.t0);case 13:case"end":return t.stop()}},t,null,[[1,10]])})),tt.apply(this,arguments)}var et={name:"dashboard",components:{"v-header":j,"list-card":A,"v-button":b,"track-item":Q,Modal:q},data:function(){return{loading:!0,error:null,modal:{name:null,isOpen:!1},prePlaylist:{name:null,tracks:null}}},created:function(){var t=this;0!==this.$store.state.mixSelection.length&&this.$store.commit("resetPlaylistsSelection"),W(this,this.$store.state.config.user_id,this.$store.state.config.access_token).then(function(e){t.loading=!1,t.$store.commit("addPlaylists",e)}).catch(function(e){t.loading=!1,t.error=e.message})},methods:{openModalPreview:function(t,e){var n=this;document.getElementsByTagName("body")[0].classList.add("is-hide"),X(this,e.id,this.$store.state.config.access_token).then(function(a){n.prePlaylist={name:e.name,tracks:a.tracks.items},n.modal.isOpen=!0,n.modal.name=t})},closeModal:function(){this.modal.isOpen=!1,this.modal.name=null,this.prePlaylist={name:null,tracks:null},document.getElementsByTagName("body")[0].classList.remove("is-hide")},goToMix:function(){this.$router.history.push("mix")}}},nt=et,at=(n("b985"),Object(c["a"])(nt,$,w,!1,null,null,null)),it=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-content"},[n("v-header"),t.loading?n("p",{staticClass:"page-content__loading"},[t._v("Loading...")]):t._e(),t.error?n("p",[t._v(t._s(t.error))]):t._e(),this.mix.tracks?n("main",{staticClass:"page-content__main"},[n("div",{staticClass:"page-content__header"},[n("h3",{staticClass:"page-content__header__title"},[t._v("Your mixlist:")]),n("div",[n("v-button",{attrs:{text:"Return",icon:"reply",extraClass:"margin-right-10"},on:{onClick:t.goToDashboard}}),n("v-button",{attrs:{text:"Create playlist",icon:"volume-up",variant:"green"},on:{onClick:function(){return t.openCreateModal("modal-create")}}})],1)]),n("ul",{staticClass:"mix__list"},t._l(this.mix.tracks,function(t,e){return n("track-item",{key:e,attrs:{data:t.track}})}),1),t.modal.isOpen&&"modal-create"===t.modal.name?n("Modal",{attrs:{title:"Set a name for your playlist and create it!"},on:{close:t.closeModal}},[n("div",{staticClass:"mix__modal-create"},[n("form",{staticClass:"mix__modal-create__form"},[n("InputField",{attrs:{placeholder:"Playlist name",extraClass:"margin-right-20"},on:{onKeyUp:function(e){return t.checkCreateButton(e)}}}),n("v-button",{ref:"createButton",attrs:{text:"Mixing!",icon:"sliders-h",variant:"green",disabled:"",type:"submit"},on:{onClick:t.mixing}})],1)])]):t._e()],1):t._e()],1)},ot=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{ref:"field",staticClass:"c-input",class:t.extraClass,attrs:{type:t.inputType,placeholder:t.placeholderText},domProps:{value:t.value},on:{input:function(e){return t.getData(e.target.value)},keyup:function(e){return t.onInputKeyUp(e)}}})},ct=[],lt=new a["a"],ut={name:"inputField",props:{value:String,inputType:String,placeholderText:String,extraClass:String,onKeyUp:Function},methods:{getData:function(t){this.$emit("input",t)},onInputKeyUp:function(t){null!==this.onKeyUp&&this.$emit("onKeyUp",t.target.value)}},updated:function(){var t=this;lt.$on("resetField",function(){t.$refs.field.value=null})}},dt=ut,mt=(n("e11c"),Object(c["a"])(dt,rt,ct,!1,null,null,null)),ft=mt.exports,pt={name:"mix",components:{"v-header":j,"v-button":b,"track-item":Q,Modal:q,InputField:ft},data:function(){return{loading:!0,error:null,modal:{name:null,isOpen:!1},mix:{name:null,tracks:null}}},mounted:function(){var t=this,e=[];this.mix.tracks=[],this.$store.state.mixSelection.forEach(function(n){X(t,n,t.$store.state.config.access_token).then(function(n){e=e.concat(n.tracks.items),t.mix.tracks=e})}),this.loading=!1},methods:{goToDashboard:function(){this.$router.history.push("dashboard")},openCreateModal:function(t,e){document.getElementsByTagName("body")[0].classList.add("is-hide"),this.modal.isOpen=!0,this.modal.name=t},closeModal:function(){this.modal.isOpen=!1,this.modal.name=null,document.getElementsByTagName("body")[0].classList.remove("is-hide")},checkCreateButton:function(t){this.mix.name=t,t.length>0?this.$refs.createButton.activeButton():this.$refs.createButton.disabledButton()},mixing:function(){var t=this,e=this.mix.tracks.map(function(t){return t.track.uri});Z(this,this.$store.state.config.user_id,this.mix.name,e,this.$store.state.config.access_token).then(function(){t.closeModal(),t.$router.history.push("/dashboard")})}}},ht=pt,_t=(n("63d0"),Object(c["a"])(ht,st,ot,!1,null,null,null)),gt=_t.exports,vt=n("cebc"),bt=n("2f62");a["a"].use(bt["a"]);var yt=new bt["a"].Store({state:{auth:!1,config:{user_id:null,access_token:null,refresh_token:null},playlists:{},mixSelection:[]},mutations:{addConfig:function(t,e){t.config.access_token=e.access_token,t.config.refresh_token=e.refresh_token,t.config.user_id=e.client_id,t.auth=!0},logOut:function(t){t.auth=!1},addPlaylists:function(t,e){t.playlists=Object(vt["a"])({},t.playlists,{data:e})},addListToMix:function(t,e){t.mixSelection.push(e)},resetPlaylistsSelection:function(t){t.mixSelection=[]},removeListToMix:function(t,e){t.mixSelection=t.mixSelection.filter(function(t){return t!==e})}},actions:{}});a["a"].use(d["a"]);var xt=new d["a"]({mode:"history",routes:[{path:"/",name:"home",redirect:{name:"login"}},{path:"/login",name:"login",component:k,beforeEnter:function(t,e,n){yt.state.auth?n({name:"dashboard"}):n()}},{path:"/dashboard",name:"dashboard",component:it,beforeEnter:function(t,e,n){yt.state.auth?n():n({name:"login"})}},{path:"/mix",name:"mix",component:gt,beforeEnter:function(t,e,n){yt.state.auth?n():n({name:"login"})}}]}),Ct=xt,kt=n("d9ca"),$t=n.n(kt),wt=n("a255"),St=n.n(wt),Ot=n("ecee"),Pt=n("c074"),Mt=n("ad3d");Ot["c"].add(Pt["g"],Pt["d"],Pt["b"],Pt["c"],Pt["a"],Pt["i"],Pt["e"],Pt["f"],Pt["j"],Pt["h"]),a["a"].component("font-awesome-icon",Mt["a"]),a["a"].use(St.a,new $t.a),a["a"].config.productionTip=!1,new a["a"]({router:Ct,store:yt,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(t,e,n){},"63d0":function(t,e,n){"use strict";var a=n("860e"),i=n.n(a);i.a},"860e":function(t,e,n){},"8ee7":function(t,e,n){"use strict";var a=n("b040"),i=n.n(a);i.a},9587:function(t,e,n){},"9cbb":function(t,e,n){},a145:function(t,e,n){"use strict";var a=n("9587"),i=n.n(a);i.a},a4c0:function(t,e,n){},b040:function(t,e,n){},b985:function(t,e,n){"use strict";var a=n("3169"),i=n.n(a);i.a},c76d:function(t,e,n){},e11c:function(t,e,n){"use strict";var a=n("eb69"),i=n.n(a);i.a},eb69:function(t,e,n){},eedc:function(t,e,n){},ef55:function(t,e,n){"use strict";var a=n("c76d"),i=n.n(a);i.a},ffb6:function(t,e,n){"use strict";var a=n("eedc"),i=n.n(a);i.a}});
//# sourceMappingURL=app.05b1c33c.js.map