/*! For license information please see twofactor_backupcodes-settings.js.LICENSE.txt */
!function(){"use strict";var e,n={97459:function(e,n,o){var a=o(16453),r=o(20144),s=o(10128);o(65509);var c=o(25108),d={name:"PersonalSettings",data:function(){return{generatingCodes:!1}},computed:{downloadUrl:function(){return this.codes?"data:text/plain,"+encodeURIComponent(this.codes.reduce((function(t,e){return t+e+"\r\n"}),"")):""},downloadFilename:function(){return(OC.theme.name||"Nextcloud")+"-backup-codes.txt"},enabled:function(){return this.$store.state.enabled},total:function(){return this.$store.state.total},used:function(){return this.$store.state.used},codes:function(){return this.$store.state.codes},name:function(){return OC.theme.name||"Nextcloud"},haveCodes:function(){return this.codes&&this.codes.length>0}},methods:{generateBackupCodes:function(){var e=this;(0,s.confirmPassword)().then((function(){e.generatingCodes=!0,e.$store.dispatch("generate").then((function(t){e.generatingCodes=!1})).catch((function(n){throw OC.Notification.showTemporary(t("twofactor_backupcodes","An error occurred while generating your backup codes")),e.generatingCodes=!1,n}))})).catch(c.error.bind(this))},getPrintData:function(t){return t?t.reduce((function(t,e){return t+e+"<br>"}),""):""},printCodes:function(){var e,n,o;e=this.getPrintData(this.codes),n=OC.theme.name||"Nextcloud",(o=window.open("",t("twofactor_backupcodes","{name} backup codes",{name:n}))).document.write("<h1>"+t("twofactor_backupcodes","{name} backup codes",{name:n})+"</h1>"),o.document.write("<pre>"+e+"</pre>"),o.print(),o.close()}}},i=o(93379),u=o.n(i),l=o(7795),p=o.n(l),f=o(90569),b=o.n(f),h=o(3565),m=o.n(h),g=o(19216),v=o.n(g),k=o(44589),w=o.n(k),C=o(56346),_={};_.styleTagTransform=w(),_.setAttributes=m(),_.insert=b().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=v(),u()(C.Z,_),C.Z&&C.Z.locals&&C.Z.locals;var y=(0,o(51900).Z)(d,(function(){var t=this,e=t._self._c;return e("div",[t.enabled?[e("p",[t.haveCodes?[t._v("\n\t\t\t\t"+t._s(t.t("twofactor_backupcodes","These are your backup codes. Please save and/or print them as you will not be able to read the codes again later"))+"\n\t\t\t\t"),e("ul",t._l(t.codes,(function(n){return e("li",{key:n,staticClass:"backup-code"},[t._v("\n\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t")])})),0),t._v(" "),e("a",{staticClass:"button primary",attrs:{href:t.downloadUrl,download:t.downloadFilename}},[t._v(t._s(t.t("twofactor_backupcodes","Save backup codes")))]),t._v(" "),e("button",{staticClass:"button",on:{click:t.printCodes}},[t._v("\n\t\t\t\t\t"+t._s(t.t("twofactor_backupcodes","Print backup codes"))+"\n\t\t\t\t")])]:[t._v("\n\t\t\t\t"+t._s(t.t("twofactor_backupcodes","Backup codes have been generated. {used} of {total} codes have been used.",{used:t.used,total:t.total}))+"\n\t\t\t")]],2),t._v(" "),e("p",[e("button",{attrs:{id:"generate-backup-codes"},on:{click:t.generateBackupCodes}},[t._v("\n\t\t\t\t"+t._s(t.t("twofactor_backupcodes","Regenerate backup codes"))+"\n\t\t\t")])]),t._v(" "),e("p",[e("em",[t._v("\n\t\t\t\t"+t._s(t.t("twofactor_backupcodes","If you regenerate backup codes, you automatically invalidate old codes."))+"\n\t\t\t")])])]:e("button",{attrs:{id:"generate-backup-codes",disabled:t.generatingCodes},on:{click:t.generateBackupCodes}},[t._v("\n\t\t"+t._s(t.t("twofactor_backupcodes","Generate backup codes"))+"\n\t\t"),e("span",{class:{"icon-loading-small":t.generatingCodes}})])],2)}),[],!1,null,"4aec7845",null).exports,A=o(20629),P=o(4820),x=o(79753);r.ZP.use(A.ZP);var O={setEnabled:function(t,e){r.ZP.set(t,"enabled",e)},setTotal:function(t,e){r.ZP.set(t,"total",e)},setUsed:function(t,e){r.ZP.set(t,"used",e)},setCodes:function(t,e){r.ZP.set(t,"codes",e)}},S={generate:function(t){var e,n=t.commit;return n("setEnabled",!1),(e=(0,x.generateUrl)("/apps/twofactor_backupcodes/settings/create"),P.default.post(e,{}).then((function(t){return t.data}))).then((function(t){var e=t.codes,o=t.state;return n("setEnabled",o.enabled),n("setTotal",o.total),n("setUsed",o.used),n("setCodes",e),!0}))}},Z=new A.yh({strict:!1,state:{enabled:!1,total:0,used:0,codes:[]},mutations:O,actions:S});r.ZP.prototype.t=t;var B=(0,a.loadState)("twofactor_backupcodes","state");Z.replaceState(B),new(r.ZP.extend(y))({store:Z}).$mount("#twofactor-backupcodes-settings")},56346:function(t,e,n){var o=n(87537),a=n.n(o),r=n(23645),s=n.n(r)()(a());s.push([t.id,"\n.backup-code[data-v-4aec7845] {\n\tfont-family: monospace;\n\tletter-spacing: 0.02em;\n\tfont-size: 1.2em;\n}\n.button[data-v-4aec7845] {\n\tdisplay: inline-block;\n}\n","",{version:3,sources:["webpack://./apps/twofactor_backupcodes/src/views/PersonalSettings.vue"],names:[],mappings:";AAoIA;CACA,sBAAA;CACA,sBAAA;CACA,gBAAA;AACA;AACA;CACA,qBAAA;AACA",sourcesContent:["<template>\n\t<div>\n\t\t<button v-if=\"!enabled\"\n\t\t\tid=\"generate-backup-codes\"\n\t\t\t:disabled=\"generatingCodes\"\n\t\t\t@click=\"generateBackupCodes\">\n\t\t\t{{ t('twofactor_backupcodes', 'Generate backup codes') }}\n\t\t\t<span :class=\"{'icon-loading-small': generatingCodes}\" />\n\t\t</button>\n\t\t<template v-else>\n\t\t\t<p>\n\t\t\t\t<template v-if=\"!haveCodes\">\n\t\t\t\t\t{{ t('twofactor_backupcodes', 'Backup codes have been generated. {used} of {total} codes have been used.', {used, total}) }}\n\t\t\t\t</template>\n\t\t\t\t<template v-else>\n\t\t\t\t\t{{ t('twofactor_backupcodes', 'These are your backup codes. Please save and/or print them as you will not be able to read the codes again later') }}\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li v-for=\"code in codes\" :key=\"code\" class=\"backup-code\">\n\t\t\t\t\t\t\t{{ code }}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<a :href=\"downloadUrl\"\n\t\t\t\t\t\tclass=\"button primary\"\n\t\t\t\t\t\t:download=\"downloadFilename\">{{ t('twofactor_backupcodes', 'Save backup codes') }}</a>\n\t\t\t\t\t<button class=\"button\"\n\t\t\t\t\t\t@click=\"printCodes\">\n\t\t\t\t\t\t{{ t('twofactor_backupcodes', 'Print backup codes') }}\n\t\t\t\t\t</button>\n\t\t\t\t</template>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<button id=\"generate-backup-codes\"\n\t\t\t\t\t@click=\"generateBackupCodes\">\n\t\t\t\t\t{{ t('twofactor_backupcodes', 'Regenerate backup codes') }}\n\t\t\t\t</button>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<em>\n\t\t\t\t\t{{ t('twofactor_backupcodes', 'If you regenerate backup codes, you automatically invalidate old codes.') }}\n\t\t\t\t</em>\n\t\t\t</p>\n\t\t</template>\n\t</div>\n</template>\n\n<script>\nimport { confirmPassword } from '@nextcloud/password-confirmation'\nimport '@nextcloud/password-confirmation/dist/style.css'\nimport { print } from '../service/PrintService'\n\nexport default {\n\tname: 'PersonalSettings',\n\tdata() {\n\t\treturn {\n\t\t\tgeneratingCodes: false,\n\t\t}\n\t},\n\tcomputed: {\n\t\tdownloadUrl() {\n\t\t\tif (!this.codes) {\n\t\t\t\treturn ''\n\t\t\t}\n\t\t\treturn 'data:text/plain,' + encodeURIComponent(this.codes.reduce((prev, code) => {\n\t\t\t\treturn prev + code + '\\r\\n'\n\t\t\t}, ''))\n\t\t},\n\t\tdownloadFilename() {\n\t\t\tconst name = OC.theme.name || 'Nextcloud'\n\t\t\treturn name + '-backup-codes.txt'\n\t\t},\n\t\tenabled() {\n\t\t\treturn this.$store.state.enabled\n\t\t},\n\t\ttotal() {\n\t\t\treturn this.$store.state.total\n\t\t},\n\t\tused() {\n\t\t\treturn this.$store.state.used\n\t\t},\n\t\tcodes() {\n\t\t\treturn this.$store.state.codes\n\t\t},\n\t\tname() {\n\t\t\treturn OC.theme.name || 'Nextcloud'\n\t\t},\n\t\thaveCodes() {\n\t\t\treturn this.codes && this.codes.length > 0\n\t\t},\n\t},\n\tmethods: {\n\t\tgenerateBackupCodes() {\n\t\t\tconfirmPassword().then(() => {\n\t\t\t\t// Hide old codes\n\t\t\t\tthis.generatingCodes = true\n\n\t\t\t\tthis.$store.dispatch('generate').then(data => {\n\t\t\t\t\tthis.generatingCodes = false\n\t\t\t\t}).catch(err => {\n\t\t\t\t\tOC.Notification.showTemporary(t('twofactor_backupcodes', 'An error occurred while generating your backup codes'))\n\t\t\t\t\tthis.generatingCodes = false\n\t\t\t\t\tthrow err\n\t\t\t\t})\n\t\t\t}).catch(console.error.bind(this))\n\t\t},\n\n\t\tgetPrintData(codes) {\n\t\t\tif (!codes) {\n\t\t\t\treturn ''\n\t\t\t}\n\t\t\treturn codes.reduce((prev, code) => {\n\t\t\t\treturn prev + code + '<br>'\n\t\t\t}, '')\n\t\t},\n\n\t\tprintCodes() {\n\t\t\tprint(this.getPrintData(this.codes))\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.backup-code {\n\t\tfont-family: monospace;\n\t\tletter-spacing: 0.02em;\n\t\tfont-size: 1.2em;\n\t}\n\t.button {\n\t\tdisplay: inline-block;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=s}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,loaded:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},e=[],a.O=function(t,n,o,r){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var c=!0,d=0;d<n.length;d++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[d])}))?n.splice(d--,1):(c=!1,r<s&&(s=r));if(c){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=2870,function(){a.b=document.baseURI||self.location.href;var t={2870:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,s=n[0],c=n[1],d=n[2],i=0;if(s.some((function(e){return 0!==t[e]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(d)var u=d(a)}for(e&&e(n);i<s.length;i++)r=s[i],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),a.nc=void 0;var r=a.O(void 0,[7874],(function(){return a(97459)}));r=a.O(r)}();
//# sourceMappingURL=twofactor_backupcodes-settings.js.map?v=af5abf634182c705d229