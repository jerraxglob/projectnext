/*! For license information please see calendar-holiday-subscription-picker.js.LICENSE.txt */
(self.webpackChunkcalendar=self.webpackChunkcalendar||[]).push([["holiday-subscription-picker"],{5153:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var r=n(87537),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([t.id,".holiday-subscription-picker[data-v-8aea7d50]{padding:20px}.holiday-subscription-picker__attribution[data-v-8aea7d50]{color:var(--color-text-maxcontrast)}.holiday-subscription-picker__region[data-v-8aea7d50]{display:flex;margin-top:20px;align-items:center}.holiday-subscription-picker__region__name[data-v-8aea7d50]{flex-grow:1}.holiday-subscription-picker__region__name h3[data-v-8aea7d50]{font-weight:bold;margin-bottom:initial}.holiday-subscription-picker__region__name__subline[data-v-8aea7d50]{color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://./src/components/Subscription/HolidaySubscriptionPicker.vue"],names:[],mappings:"AACA,8CACC,YAAA,CAEA,2DACC,mCAAA,CAGD,sDACC,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,4DACC,WAAA,CAEA,+DACC,gBAAA,CACA,qBAAA,CAED,qEACC,mCAAA",sourcesContent:["\n.holiday-subscription-picker {\n\tpadding: 20px;\n\n\t&__attribution {\n\t\tcolor: var(--color-text-maxcontrast)\n\t}\n\n\t&__region {\n\t\tdisplay: flex;\n\t\tmargin-top: 20px;\n\t\talign-items: center;\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tmargin-bottom: initial;\n\t\t\t}\n\t\t\t&__subline {\n\t\t\t\tcolor: var(--color-text-maxcontrast)\n\t\t\t}\n\t\t}\n\t\t&__subscribe {\n\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=i},15971:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>w});var a=r(10861),o=r.n(a),i=r(70110),s=r.n(i),c=r(64024),u=r(20629),l=r(2323);const d=JSON.parse('[{"country":"Algeria","filename":"AlgeriaHolidays.ics","datespan":"2007-2020","authors":"Imad Tbahriti"},{"country":"Australia","filename":"AustraliaHolidays.ics","datespan":"2021-2022","authors":"RGreyman"},{"country":"Austria","filename":"AustrianHolidays.ics","datespan":"2010-2025","authors":"boe"},{"country":"Belgium","filename":"BelgianHolidays.ics","datespan":"2011-2022","authors":"Hubertus Verdonck"},{"country":"Bolivia","filename":"BoliviaHolidays.ics","datespan":"2010-2020","authors":"Rebelde Boliche"},{"country":"Brazil","filename":"BrazilHolidays.ics","datespan":"2009-2020","authors":"Henrique Faria"},{"country":"Bulgaria","filename":"BulgarianHolidays.ics","datespan":"2009 and beyond","authors":"Georgi D. Sotirov"},{"country":"Canada","filename":"CanadaHolidays.ics","datespan":"2012-2020","authors":"Sigurd Schmidt"},{"country":"Colombia","filename":"ColombianHolidays.ics","datespan":"2020-2050","authors":"Mauricio Sanchez"},{"country":"Costa Rica","filename":"CostaRicaHolidays.ics","datespan":"2012-2020","authors":"Gerardo Tovar"},{"country":"Croatia","filename":"CroatiaHolidays.ics","datespan":"2009-2017","authors":"Domagoj Debic"},{"country":"Czech","filename":"CzechHolidays.ics","datespan":"2007-2020","authors":"Martin Matula, Matěj Cepl, Peter Habcak"},{"country":"Finland (Finnish)","filename":"FinlandHolidays.ics","datespan":"2007-2024","authors":"Magnus Melin"},{"country":"Finland (Swedish)","filename":"FinlandHolidaysSwedish.ics","datespan":"2007-2024","authors":"Magnus Melin"},{"country":"Flanders","filename":"FlandersHolidays.ics","datespan":"2011-2021","authors":"Hubertus Verdonck"},{"country":"France","filename":"FrenchHolidays.ics","datespan":"2010-2030","authors":"danfra"},{"country":"Germany","filename":"GermanHolidays.ics","datespan":"2010-2025","authors":"Hagen Halbach"},{"country":"Greece","filename":"GreeceHolidays.ics","datespan":"2015-2020","authors":"Hans Kleiner"},{"country":"Haiti","filename":"HaitiHolidays.ics","authors":" Sheila Laplanche"},{"country":"Hungary","filename":"HungarianHolidays.ics","datespan":"2015-2060","authors":"spiraldancing, tozo"},{"country":"Iceland","filename":"IcelandHolidays.ics","datespan":"2021-2060","authors":"Kristjan Bjarni Gudmundsson"},{"country":"Ireland","filename":"IrelandHolidays2014-2021.ics","datespan":"2014-2021","authors":"Tom Condon"},{"country":"Italy","filename":"ItalianHolidays.ics","datespan":"2000-2030","authors":"Gianni Luppi/Gianfranco Balza"},{"country":"Japan","filename":"JapanHolidays.ics","datespan":"2007-2022","authors":"Atsushi Sakai"},{"country":"Kazakhstan (English)","filename":"KazakhstanHolidaysEnglish.ics","datespan":"2015-present","authors":"Yuriy Gural"},{"country":"Kazakhstan (Russian)","filename":"KazakhstanHolidaysRussian.ics","datespan":"2015-present","authors":"Yuriy Gural"},{"country":"Liechtenstein","filename":"LiechtensteinHolidays.ics","datespan":"2010-2025","authors":"boe"},{"country":"Lithuania","filename":"LithuanianHolidays.ics","datespan":"2020-2025","authors":"joshas"},{"country":"Morocco","filename":"MoroccoHolidays.ics","authors":"Tarik El Maniani"},{"country":"Netherlands","filename":"DutchHolidays.ics","datespan":"2010-2050","authors":"Pander, RobJE"},{"country":"Netherlands (English)","filename":"DutchHolidaysEnglish.ics","datespan":"2010-2050","authors":"Pander"},{"country":"Netherlands (German)","filename":"DutchHolidaysGerman.ics","datespan":"2010-2050","authors":"Pander"},{"country":"Netherlands (French)","filename":"DutchHolidaysFrench.ics","datespan":"2010-2050","authors":"Pander"},{"country":"Nicaragua","filename":"NicaraguaHolidays.ics","datespan":"2015-2020","authors":"phurtado1112"},{"country":"Norway","filename":"NorwegianHolidays.ics","datespan":"2009-2020","authors":"Håvard Wigtil"},{"country":"Pakistan","filename":"PakistanHolidays.ics","datespan":"2007-2020","authors":"Umar Toseef"},{"country":"Poland","filename":"PolishHolidays.ics","datespan":"2015-2030","authors":"Artur Majcherczak"},{"country":"Portugal","filename":"PortugalHolidays.ics","datespan":"2001-2030","authors":"Nuno Rua"},{"country":"Russia","filename":"RussiaHolidays.ics","datespan":"2010-2020","authors":"Alexander L. Slovesnik"},{"country":"Singapore","filename":"SingaporePublicHolidays-2021.ics","datespan":"2021","authors":"Singapore Ministry of Manpower"},{"country":"Singapore","filename":"SingaporePublicHolidays-2022.ics","datespan":"2022","authors":"Singapore Ministry of Manpower"},{"country":"Slovenia","filename":"SlovenianHolidays.ics","datespan":"2012-2022","authors":"Klemen Robnik, Peter Klofutar"},{"country":"Slovakia","filename":"SlovakHolidays.ics","datespan":"2009-2025","authors":"Branislav Rozbora"},{"country":"South Africa","filename":"SouthAfricaHolidays.ics","datespan":"2013-2021","authors":"Malcolm McLean"},{"country":"South Korea","filename":"SouthKoreaHolidays.ics","datespan":"2000-2020","authors":"Marcus Yoo"},{"country":"Spain","filename":"SpainHolidays.ics","datespan":"2021","authors":"forolinux"},{"country":"Sweden","filename":"SwedishHolidays.ics","datespan":"2020-2029","authors":"Erik Lundin"},{"country":"Switzerland","filename":"SwissHolidays.ics","datespan":"2010-2025","authors":"boe"},{"country":"Trinidad and Tobago","filename":"TrinidadTobagoHolidays.ics","datespan":"2015-2025","authors":"Joe"},{"country":"UK [All]","filename":"UKHolidays.ics","datespan":"2021-2030","authors":"KR304"},{"country":"UK [England & Wales]","filename":"UKHolidays-EnglandWales.ics","datespan":"2021-2030","authors":"KR304"},{"country":"UK [Northern Ireland]","filename":"UKHolidays-NIreland.ics","datespan":"2021-2030","authors":"KR304"},{"country":"UK [Scotland]","filename":"UKHolidays-Scotland.ics","datespan":"2021-2030","authors":"KR304"},{"country":"Ukraine","filename":"UkraineHolidays.ics","datespan":"2014-2020","authors":"Kostya Nesterenko"},{"country":"Uruguay","filename":"UruguayHolidays.ics","datespan":"2011-2021","authors":"Gonzalo Alvarez"},{"country":"USA","filename":"USHolidays.ics","datespan":"2020-2030","authors":"Thomas Kelley"}]');var h=r(62768);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(){y=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new S(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=H(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function h(){}function f(){}var m={};s(m,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==e&&n.call(b,a)&&(m=b);var g=f.prototype=d.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(a,o,i,s){var c=u(t[a],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==p(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function H(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,H(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=f,s(g,"constructor",f),s(f,"constructor",h),h.displayName=s(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(w.prototype),s(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(c(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(g),s(g,i,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function f(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){f(o,r,a,i,s,"next",t)}function s(t){f(o,r,a,i,s,"throw",t)}i(void 0)}))}}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const _={name:"HolidaySubscriptionPicker",components:{NcButton:o(),NcModal:s()},data:function(){var t=d.map((function(t){return b(b({},t),{},{source:"https://www.thunderbird.net/media/caldata/"+t.filename})})),e={},n={};return t.forEach((function(t){e[t.source]=!1,n[t.source]=!1})),{calendars:t,loading:!0,subscribed:n,subscribing:e,subscriptions:[]}},computed:b({},(0,u.Se)(["sortedCalendars"])),mounted:function(){var t=this;return m(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.sz)();case 2:t.subscriptions=e.sent,t.subscriptions.map((function(e){return t.subscribed[e.source]=!0})),t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{subscribe:function(e){var n=this;return m(y().mark((function r(){return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n.subscribing[e.source]=!0,r.next=4,n.$store.dispatch("appendSubscription",{displayName:t("calendar","Holidays in {region}",{region:e.country}),color:(0,h.ny)(e.source),source:e.source});case 4:n.subscribed[e.source]=!0,r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Could not add holiday subscription",r.t0),(0,c.x2)(n.$t("calendar","An error occurred, unable to create the holiday calendar."));case 11:return r.prev=11,n.subscribing[e.source]=!1,r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,7,11,14]])})))()}}};r(87172);const w=(0,r(51900).Z)(_,(function(){var t=this,e=t._self._c;return e("NcModal",{on:{close:function(e){return t.$emit("close",e)}}},[e("div",{staticClass:"holiday-subscription-picker"},[e("h2",[t._v(t._s(t.t("calendar","Holiday calendars")))]),t._v(" "),e("p",{staticClass:"holiday-subscription-picker__attribution"},[t._v("\n\t\t\t"+t._s(t.t("calendar","Holiday calendars are provided by Thunderbird. Calendar data will be downloaded from {website}",{website:"thunderbird.net"}))+"\n\t\t")]),t._v(" "),t._l(t.calendars,(function(n){return e("div",{key:n.source,staticClass:"holiday-subscription-picker__region"},[e("div",{staticClass:"holiday-subscription-picker__region__name"},[e("h3",[t._v(t._s(n.country))]),t._v(" "),e("div",{staticClass:"holiday-subscription-picker__region__name__subline"},[t._v("\n\t\t\t\t\t"+t._s(n.datespan)+"\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"holiday-subscription-picker__region__name__subline"},[t._v("\n\t\t\t\t\t"+t._s(t.t("calendar","By {authors}",{authors:n.authors}))+"\n\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"holiday-subscription-picker__region__subcribe"},[e("NcButton",{attrs:{disabled:t.loading||t.subscribing[n.source]||t.subscribed[n.source]},on:{click:function(e){return t.subscribe(n)}}},[t._v("\n\t\t\t\t\t"+t._s(t.subscribed[n.source]?t.t("calendar","Subscribed"):t.t("calendar","Subscribe"))+"\n\t\t\t\t")])],1)])}))],2)])}),[],!1,null,"8aea7d50",null).exports},87172:(t,e,n)=>{var r=n(5153);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(45346).Z)("6720f8b3",r,!0,{})}}]);
//# sourceMappingURL=calendar-holiday-subscription-picker.js.map?v=0781b941388dd4565800