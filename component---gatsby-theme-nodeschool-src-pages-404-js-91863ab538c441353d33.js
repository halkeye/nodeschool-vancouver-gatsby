(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Tr4L:function(e,n,t){"use strict";t.d(n,"a",(function(){return P}));var r=t("ddV6"),a=t.n(r),i=t("KEM+"),o=t.n(i),s=t("ERkP"),c=t.n(s),u=t("VrFO"),f=t.n(u),l=t("Y9Ll"),p=t.n(l);var d,g={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},b=c.a.createContext();function v(){return g}var h=function(){function e(){f()(this,e),this.usedNamespaces={}}return p()(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function y(){return d}function O(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var m={};function w(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&m[n[0]]||("string"==typeof n[0]&&(m[n[0]]=new Date),O.apply(void 0,n))}function j(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function N(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return w("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!o(r,e)||a&&!o(i,e))))}function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(t,!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=Object(s.useContext)(b)||{},i=r.i18n,o=r.defaultNS,c=t||i||y();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new h),!c){w("You will need pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[u,{},!1];return f.t=u,f.i18n={},f.ready=!1,f}var l=C({},v(),{},c.options.react,{},n),p=l.useSuspense,d=e||o||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var g=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return N(e,c,l)}));function O(){return{t:c.getFixedT(null,"fallback"===l.nsMode?d:d[0])}}var m=Object(s.useState)(O()),k=a()(m,2),P=k[0],S=k[1],E=Object(s.useRef)(!0);Object(s.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){E.current&&S(O())}return E.current=!0,g||p||j(c,d,(function(){E.current&&S(O())})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){E.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[d.join()]);var I=[P.t,c,g];if(I.t=P.t,I.i18n=c,I.ready=g,g)return I;if(!g&&!p)return I;throw new Promise((function(e){j(c,d,(function(){E.current&&S(O()),e()}))}))}},m5BC:function(e,n,t){"use strict";t.r(n);t("ERkP");var r=t("Tr4L"),a=t("4ChH"),i=t("nmMi"),o=t("l1C2");n.default=function(){var e=Object(r.a)().t;return Object(o.b)(a.a,null,Object(o.b)(i.a,{title:"404: Not found"}),Object(o.b)("h1",null,"NOT FOUND"),Object(o.b)("p",null,e("You just hit a route that doesn&#39;t exist... the sadness"),"."))}}}]);
//# sourceMappingURL=component---gatsby-theme-nodeschool-src-pages-404-js-91863ab538c441353d33.js.map