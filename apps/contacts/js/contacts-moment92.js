/*! For license information please see contacts-moment92.js.LICENSE.txt */
(self.webpackChunkcontacts=self.webpackChunkcontacts||[]).push([["moment92"],{15596:function(e,a,r){!function(e){"use strict";var a=/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,r=/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,s=/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,i=[/^janv/i,/^févr/i,/^mars/i,/^avr/i,/^mai/i,/^juin/i,/^juil/i,/^août/i,/^sept/i,/^oct/i,/^nov/i,/^déc/i];e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:a,monthsShortStrictRegex:r,monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",w:"une semaine",ww:"%d semaines",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})}(r(30381))}}]);
//# sourceMappingURL=contacts-moment92.js.map?v=70f935a5d93f557dbb50