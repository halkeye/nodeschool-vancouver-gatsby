(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{AJ0U:function(e,n,t){var r=t("7zcn"),a=t("qXq0")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},liE7:function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));t("Fup4"),t("zpx+"),t("WUuN"),t("yIC7"),t("NCol"),t("PN9k"),t("BPcy"),t("Ph8W"),t("/CC1"),t("p+GS"),t("AA1/"),t("UQCJ"),t("3EZN"),t("4SWW"),t("r0id"),t("lE7+"),t("SCO9"),t("LnO1"),t("3eMz"),t("dtAy"),t("DB+v"),t("m3Bd");var r=t("KEM+"),a=t.n(r),i=(t("T0aG"),t("ERkP")),o=t.n(i),s=(t("5rQp"),t("yKDW"),t("VrFO")),c=t.n(s),u=t("Y9Ll"),f=t.n(u);var p,d,l={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},g=o.a.createContext();function b(){return d}function v(){return l}var y=function(){function e(){c()(this,e),this.usedNamespaces={}}return f()(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function h(){return p}function O(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var m={};function w(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&m[n[0]]||("string"==typeof n[0]&&(m[n[0]]=new Date),O.apply(void 0,n))}function N(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function j(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return w("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!o(r,e)||a&&!o(i,e))))}t("T7D0");var C=t("ddV6"),k=t.n(C);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(t,!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=Object(i.useContext)(g),a=b()&&r||{},o=a.i18n,s=a.defaultNS,c=t||o||h();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new y),!c){w("You will need pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[u,{},!1];return f.t=u,f.i18n={},f.ready=!1,f}var p=P({},v(),{},c.options.react,{},n),d=p.useSuspense,l=e||s||c.options&&c.options.defaultNS;l="string"==typeof l?[l]:l||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(l);var O=(c.isInitialized||c.initializedStoreOnce)&&l.every((function(e){return j(e,c,p)}));function m(){return{t:c.getFixedT(null,"fallback"===p.nsMode?l:l[0])}}var C=Object(i.useState)(m()),S=k()(C,2),E=S[0],I=S[1],A=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=p.bindI18n,n=p.bindI18nStore;function t(){A.current&&I(m())}return A.current=!0,O||d||N(c,l,(function(){A.current&&I(m())})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){A.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[l.join()]);var x=[E.t,c,O];if(x.t=E.t,x.i18n=c,x.ready=O,O)return x;if(!O&&!d)return x;throw new Promise((function(e){N(c,l,(function(){A.current&&I(m()),e()}))}))}t("AJ0U")}}]);
//# sourceMappingURL=36e1ac40e97f53bff4a5ee7c60b6c2d92bcf3dbd-cfbffc1a17b65f943549.js.map