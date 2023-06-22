/*! For license information please see photos-src_services_Albums_js-src_components_HeaderNavigation_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_services_Albums_js-src_components_HeaderNavigation_vue"],{99622:(n,t,o)=>{o.d(t,{CE:()=>b,Lc:()=>x,Lz:()=>f});var a=o(80351),e=o.n(a),r=o(9944),i=o(81067),s=o(59537),c=o(2161),p=o(94236),l=o(25108);function u(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.push.apply(o,a)}return o}function g(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){A(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function A(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}function h(n){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(n)}function m(n,t,o,a,e,r,i){try{var s=n[r](i),c=s.value}catch(n){return void o(n)}s.done?t(c):Promise.resolve(c).then(a,e)}function v(n){return function(){var t=this,o=arguments;return new Promise((function(a,e){var r=n.apply(t,o);function i(n){m(r,a,e,i,s,"next",n)}function s(n){m(r,a,e,i,s,"throw",n)}i(void 0)}))}}function d(){return'<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t<nc:last-photo />\n\t\t\t\t\t<nc:nbItems />\n\t\t\t\t\t<nc:location />\n\t\t\t\t\t<nc:dateRange />\n\t\t\t\t\t<nc:collaborators />\n\t\t\t\t\t'.concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")}function f(n,t){return C.apply(this,arguments)}function C(){return C=v(regeneratorRuntime.mark((function n(t,o){var a,e,r,c=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:"",e=c.length>3&&void 0!==c[3]?c[3]:i.ZP,n.prev=2,n.next=5,e.stat(t,g({data:d(a),details:!0},o));case 5:return r=n.sent,s.Z.debug("[Albums] Fetched an album: ",{data:r.data}),n.abrupt("return",y(r.data));case 10:if(n.prev=10,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code){n.next=14;break}return n.abrupt("return",null);case 14:throw n.t0;case 15:case"end":return n.stop()}}),n,null,[[2,10]])}))),C.apply(this,arguments)}function b(n,t){return _.apply(this,arguments)}function _(){return _=v(regeneratorRuntime.mark((function n(t,o){var a,e,r,c=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:"",e=c.length>3&&void 0!==c[3]?c[3]:i.ZP,n.prev=2,n.next=5,e.getDirectoryContents(t,g({data:d(a),details:!0},o));case 5:return r=n.sent,s.Z.debug("[Albums] Fetched ".concat(r.data.length," albums: "),{data:r.data}),n.abrupt("return",r.data.filter((function(n){return n.filename!==t})).map(y));case 10:if(n.prev=10,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code){n.next=14;break}return n.abrupt("return",[]);case 14:throw n.t0;case 15:case"end":return n.stop()}}),n,null,[[2,10]])}))),_.apply(this,arguments)}function y(n){var t,o;""===n.props.collaborators?n.props.collaborators=[]:"object"===h(n.props.collaborators.collaborator)&&(Array.isArray(n.props.collaborators.collaborator)?n.props.collaborators=n.props.collaborators.collaborator:n.props.collaborators=[n.props.collaborators.collaborator]),n=(0,p.AX)(n);var a=JSON.parse(null!==(t=null===(o=n.dateRange)||void 0===o?void 0:o.replace(/&quot;/g,'"'))&&void 0!==t?t:"{}");null===a.start&&(a.start=e()().unix(),a.end=e()().unix());var i={startDate:e().unix(a.start).format("MMMM YYYY"),endDate:e().unix(a.end).format("MMMM YYYY")};return n.date=i.startDate===i.endDate?i.startDate:(0,r.translate)("photos","{startDate} to {endDate}",i),n}function x(n,t){return w.apply(this,arguments)}function w(){return w=v(regeneratorRuntime.mark((function n(t,o){var a,e,r,u=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=u.length>2&&void 0!==u[2]?u[2]:i.ZP,n.prev=1,n.next=4,a.getDirectoryContents(t,g({data:c.Z,details:!0},o));case 4:return e=n.sent,r=e.data.map((function(n){return(0,p.AX)(n)})).filter((function(n){return n.fileid})),s.Z.debug("[Albums] Fetched ".concat(r.length," new files: "),r),n.abrupt("return",r);case 10:if(n.prev=10,n.t0=n.catch(1),"ERR_CANCELED"!==n.t0.code){n.next=14;break}return n.abrupt("return",[]);case 14:throw s.Z.error("Error fetching album files",{error:n.t0}),l.error(n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[1,10]])}))),w.apply(this,arguments)}},6179:(n,t,o)=>{o.d(t,{Z:()=>s});var a=o(87537),e=o.n(a),r=o(23645),i=o.n(r)()(e());i.push([n.id,":root{--photos-navigation-height: 64px;--photos-navigation-spacing: calc((var(--photos-navigation-height) - 44px) / 2)}button.app-navigation-toggle{top:0 !important;right:calc(var(--photos-navigation-height)*-1) !important;margin:var(--photos-navigation-spacing) !important}","",{version:3,sources:["webpack://./src/components/HeaderNavigation.vue"],names:[],mappings:"AAsLA,MACC,gCAAA,CAEA,+EAAA,CAID,6BAEC,gBAAA,CACA,yDAAA,CACA,kDAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n:root {\n\t--photos-navigation-height: 64px;\n\t// header height - button size\n\t--photos-navigation-spacing: calc((var(--photos-navigation-height) - 44px) / 2);\n}\n\n// Properly position the navigation toggle button\nbutton.app-navigation-toggle {\n\t// App-navigation have a 4px margin top\n\ttop: 0 !important;\n\tright: calc(var(--photos-navigation-height) * -1) !important;\n\tmargin: var(--photos-navigation-spacing) !important;\n}\n\n'],sourceRoot:""}]);const s=i},29043:(n,t,o)=>{o.d(t,{Z:()=>s});var a=o(87537),e=o.n(a),r=o(23645),i=o.n(r)()(e());i.push([n.id,".photos-navigation[data-v-809e621a]{position:-webkit-sticky;position:sticky;z-index:20;top:0;display:flex;align-items:center;width:100%;min-height:var(--photos-navigation-height);padding:0 var(--photos-navigation-height);background:var(--color-main-background)}.photos-navigation__back[data-v-809e621a]{position:absolute !important;left:0;margin:var(--photos-navigation-spacing) !important}.photos-navigation__title[data-v-809e621a]{max-width:50%;margin-right:calc(2*var(--photos-navigation-spacing));display:flex;flex-direction:column}.photos-navigation__title__main[data-v-809e621a]{margin:0;cursor:pointer}.photos-navigation__title__main[data-v-809e621a],.photos-navigation__title__sub[data-v-809e621a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.photos-navigation__loader[data-v-809e621a]{margin-left:32px}.photos-navigation__content-right[data-v-809e621a]{display:flex;align-items:center;justify-content:center;margin-left:auto}","",{version:3,sources:["webpack://./src/components/HeaderNavigation.vue"],names:[],mappings:"AAuMA,oCACC,uBAAA,CAAA,eAAA,CACA,UAAA,CACA,KAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,0CAAA,CACA,yCAAA,CACA,uCAAA,CAEA,0CAEC,4BAAA,CACA,MAAA,CACA,kDAAA,CAGD,2CACC,aAAA,CACA,qDAAA,CACA,YAAA,CACA,qBAAA,CAEA,iDACC,QAAA,CACA,cAAA,CAGD,iGACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAIF,4CACC,gBAAA,CAGD,mDACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.photos-navigation {\n\tposition: sticky;\n\tz-index: 20;\n\ttop: 0;\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\tmin-height: var(--photos-navigation-height);\n\tpadding: 0 var(--photos-navigation-height);\n\tbackground: var(--color-main-background);\n\n\t&__back {\n\t\t// Above the navigation menu\n\t\tposition: absolute !important;\n\t\tleft: 0;\n\t\tmargin: var(--photos-navigation-spacing) !important;\n\t}\n\n\t&__title {\n\t\tmax-width: 50%;\n\t\tmargin-right: calc(2 * var(--photos-navigation-spacing));\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\t&__main {\n\t\t\tmargin: 0;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t&__main, &__sub {\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\t}\n\n\t&__loader {\n\t\tmargin-left: 32px;\n\t}\n\n\t&__content-right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin-left: auto;\n\t}\n}\n\n'],sourceRoot:""}]);const s=i},68391:(n,o,a)=>{a.d(o,{Z:()=>x});var e=a(76240),r=a(33476);const i={name:"HeaderNavigation",components:{ArrowLeft:e.default,NcButton:r.NcButton,NcLoadingIcon:r.NcLoadingIcon},inheritAttrs:!1,props:{loading:{type:Boolean,default:!1},path:{type:String,default:"/"},title:{type:String,required:!0},rootTitle:{type:String,default:t("photos","Photos")},params:{type:Object,default:null}},computed:{isRoot:function(){var n="/"===this.path;return this.toggleNavigationButton(!n),n},name:function(){return this.isRoot?this.rootTitle:this.title},parentPath:function(){var n=this.path.split("/");n.pop();var t=n.join("/");return this.isRoot||""===t.trim()?"/":n.join("/")},parentName:function(){return this.parentPath&&this.parentPath.split("/").pop()},backToText:function(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to:function(){var n=/^\/?(.*)/i.exec(this.parentPath)[1],t=Object.assign({},this.$route,{params:this.params||{path:n}}),o=t.name,a=t.params;return""===n?{name:o}:decodeURIComponent(this.$router.resolve({name:o,params:a}).resolved.path)}},methods:{folderUp:function(){this.$router.push(this.to)},refresh:function(){this.$emit("refresh")},toggleNavigationButton:function(n){var t=document.querySelector("button.app-navigation-toggle");null!==t&&(t.style.display=n?"none":null)}}};var s=a(93379),c=a.n(s),p=a(7795),l=a.n(p),u=a(90569),g=a.n(u),A=a(3565),h=a.n(A),m=a(19216),v=a.n(m),d=a(44589),f=a.n(d),C=a(6179),b={};b.styleTagTransform=f(),b.setAttributes=h(),b.insert=g().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=v();c()(C.Z,b);C.Z&&C.Z.locals&&C.Z.locals;var _=a(29043),y={};y.styleTagTransform=f(),y.setAttributes=h(),y.insert=g().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=v();c()(_.Z,y);_.Z&&_.Z.locals&&_.Z.locals;const x=(0,a(51900).Z)(i,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":n.isRoot},attrs:{role:"toolbar"}},[n.isRoot?n._e():o("NcButton",{staticClass:"photos-navigation__back",attrs:{type:"tertiary"},on:{click:n.folderUp},scopedSlots:n._u([{key:"icon",fn:function(){return[o("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}),n._v(" "),o("div",{staticClass:"photos-navigation__title"},[o("h2",{staticClass:"photos-navigation__title__main",on:{click:n.refresh}},[n._v("\n\t\t\t"+n._s(n.name)+"\n\t\t")]),n._v(" "),o("div",{staticClass:"photos-navigation__title__sub"}),n._v(" "),n._t("subtitle")],2),n._v(" "),n.$slots.default?o("div",{staticClass:"photos-navigation__content"},[n._t("default")],2):n._e(),n._v(" "),o("NcLoadingIcon",{directives:[{name:"show",rawName:"v-show",value:n.loading,expression:"loading"}],staticClass:"photos-navigation__loader"}),n._v(" "),o("div",{staticClass:"photos-navigation__content-right"},[n._t("right")],2)],1)}),[],!1,null,"809e621a",null).exports}}]);
//# sourceMappingURL=photos-src_services_Albums_js-src_components_HeaderNavigation_vue.js.map?v=7fbfb3e4d97e49a80c4f