(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"27In":function(e){e.exports=JSON.parse('{"data":{"allMeetupEvent":{"edges":[]}}}')},"3dvn":function(e,t,a){"use strict";a("DNiP"),a("bWfx"),a("xfY5"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n=s(a("q1tI")),r=a("17x9"),i=s(a("Xlix"));function s(e){return e&&e.__esModule?e:{default:e}}var l=.868217054,c=6,d=2*Math.PI/c,u=0;function b(e){return Number(e.toFixed(3))}function p(e,t){for(var a,o=e.diagonal/2,n=e.diagonal*l/2,r=(a=90,Math.PI*a/180),i=o,s=[],u=0;u<c;u++){var p=r+u*d;s.push([t/2+n+i*Math.cos(p),t/1.5+o-i*Math.sin(p)])}return s.map((function(e){return e.map(b)}))}function h(e){var t=e.backgroundImage&&"bg-"+ ++u,a=function(e,t){var a={};for(var o in t)t.hasOwnProperty(o)&&(a[o]=t[o]);for(var n in e)void 0===a[n]&&e.hasOwnProperty(n)&&(a[n]=e[n]);return a}({fill:e.backgroundImage?"url(#"+t+")":"none",stroke:"#42873f",strokeWidth:.02*e.diagonal,cursor:e.onClick&&"pointer"},e.style),r={maxX:-1/0,maxY:-1/0,minX:1/0,minY:1/0},s=a.strokeWidth,c=Math.ceil(s/2),d=e.flatTop?function(e,t){var a=e.diagonal/2,o=l*e.diagonal/2,n=o+(a-o),r=.866*a,i=.5*a;return[[n-i,a-r],[n+i,a-r],[n+a,a],[n+i,a+r],[n-i,a+r],[n-a,a]].map((function(e){return e.map(b)}))}(e):p(e,s),h=function(e){return{maxX:e.maxX-e.minX,maxY:e.maxY-e.minY,minX:e.minX,minY:e.minY}}(d.reduce((function(e,t){return{maxX:Math.ceil(Math.max(e.maxX,t[0]+c)),maxY:Math.ceil(Math.max(e.maxY,t[1]+c)),minX:Math.floor(Math.min(e.minX,t[0]-c)),minY:Math.floor(Math.min(e.minY,t[1]-c))}}),r)),m=[h.minX,h.minY,h.maxX+(h.minX<0?Math.abs(h.minX):0),h.maxY+(h.minY<0?Math.abs(h.minY):0)].join(" "),g=n.default.createElement("polygon",o({},e.hexProps,{onClick:e.onClick,style:a,points:d.map((function(e){return e.join(",")})).join(" ")})),f=e.href&&n.default.createElement("a",{xlinkHref:e.href,target:e.target},g);return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:e.className,viewBox:m},e.backgroundImage&&n.default.createElement(i.default,o({id:t},e)),f||g,e.children)}h.propTypes={diagonal:r.number,className:r.string,onClick:r.func,href:r.string,target:r.string,flatTop:r.bool,backgroundImage:r.string,backgroundWidth:r.number,backgroundHeight:r.number,backgroundScale:r.number,backgroundSize:r.number,hexProps:r.object,style:r.object,children:r.node},h.defaultProps={diagonal:500,flatTop:!1,style:{}},t.default=h},"E9a/":function(e){e.exports=JSON.parse('{"data":{"allMeetupEvent":{"edges":[{"node":{"id":"20f450b5-bfaa-5a20-8181-c1a731bb5100","description":"<p>Part of the 2019 Winter Is Here Series 🔥</p> <p>Cool! 🙂Read on...the usual spiel follows.</p> <p>Are you a beginner at using Node.js and/or JavaScript? Are you wanting a refresher? Are you looking to level up your knowledge?</p> <p>We don\'t have set classes, and as such it is considered a self study program. The NodeSchool organization has a lot of workshops for you to learn from, and we help out along the way, but that doesn\'t mean you have to do the workshops, we are a diverse group of people learning and growing together.</p> <p>Bring your laptops and, if you can, have Node.js installed before you arrive. It\'s time for another session of learning!</p> <p>We have regular mentors to help everyone learn. But we can\'t ever have too many people who want to help others learn, right?! We promise that by the end of the session you\'ll know enough to help the person sitting next to you learn too 💪</p> <p>RSVP \\"yes\\" and come learn and/or help others learn Node.js and/or JavaScript over a casual Saturday afternoon!</p> ","name":"💻 NodeSchool: Winter Is Here Series 🔥","venue":{"address_1":"#2 - 605 West Kent Ave. N.","address_2":null,"city":"Vancouver","country":"ca","lat":49.206199645996094,"localized_country_name":"Canada","lon":-123.11952209472656,"name":"Zaber Technologies Inc","repinned":false,"state":"bc","zip":"V6P 6T7"},"time":1578772800000,"utc_offset":-28800000,"updated":1567122288000,"rsvp_limit":60,"member_pay_fee":false,"local_time":"12:00","link":"https://www.meetup.com/nodeschool-vancouver/events/264413496/","how_to_find_us":null,"duration":14400000,"date_in_series_pattern":false}}]}}}')},HzMS:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}},"placeholderImage":{"extension":"svg","publicURL":"/gatsby-theme-nodeschool/static/nodeschool-chapter-logo-2fd150dea7f3412d3e94f27e2a91cd57.svg"}}}')},LC5o:function(e,t,a){"use strict";a.r(t);a("f3/d");var o=a("PIsy"),n=a("q1tI"),r=a.n(n),i=a("RLLa"),s=a("2Xs+"),l=a("27In"),c=a("qKvR"),d=function(e){var t=e.description,a=e.name,o=e.venue;e.time,e.utc_offset,e.updated;return Object(c.b)("div",null,Object(c.b)("h1",null,a),Object(c.b)("div",{dangerouslySetInnerHTML:{__html:t}}),Object(c.b)("div",null,o.name,o.repinned,o.address_1,o.address_2,o.city,o.state,o.zip,o.country,o.lat,",",o.lon,o.localized_country_name))},u=function(){return l.data.allMeetupEvent.edges.map((function(e){return Object(c.b)(d,e.node)}))},b=(a("tUrg"),a("E9a/")),p=function(){return b.data.allMeetupEvent.edges.map((function(e){var t=[e.node.venue.name,e.node.venue.address_1,e.node.venue.address_2,[e.node.venue.city,e.node.venue.state].filter(Boolean).join(", "),e.node.venue.zip,e.node.venue.localized_country_name].filter(Boolean);return Object(c.b)(r.a.Fragment,null,Object(c.b)("p",{className:"register"},Object(c.b)("strong",null,Object(c.b)("a",{href:e.node.link,title:"Registration Link"},"Register"))," for our event on ",Object(c.b)("strong",null,new Date(e.node.time).toLocaleDateString())),Object(c.b)("p",{className:"location"},Object(c.b)("strong",null,"Location:")," ",Object(c.b)("address",null,t.map((function(e){return Object(c.b)("span",{key:e},e,Object(c.b)("br",null))}))),e.node.how_to_find_us),Object(c.b)("div",{className:"map"},Object(c.b)("iframe",{title:"google maps",src:"https://maps.google.com/maps?q="+encodeURIComponent(t.join("\n"))+"&t=&z=13&ie=UTF8&iwloc=&output=embed",width:"600",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:!0})))}))},h=function(){return Object(c.b)(r.a.Fragment,null,Object(c.b)(u,null),Object(c.b)("hr",null),Object(c.b)(p,null))},m=a("XT0R"),g=function(){var e=m.data;return Object(c.b)("p",null,Object(c.b)("a",{href:"https://twitter.com/"+e.site.siteMetadata.twitter,className:"twitter-follow-button","data-show-count":"false"},"Follow @",e.site.siteMetadata.twitter))},f=a("R+bq"),y=function(){var e=f.data;return Object(c.b)(r.a.Fragment,null,Object(c.b)("h2",{id:"community"},"Community"),Object(c.b)("p",null,"The NodeSchool community is ",Object(c.b)("strong",null,"open to anyone"),". Whether you're able to attend an event or not, you can join the discussion around learning Node ",[e.site.siteMetadata.slack?"in our Slack channel":null,e.site.siteMetadata.slack?"by following us on Twitter":null].filter(Boolean).join(" or ")))},v=function(){return Object(c.b)(r.a.Fragment,null,Object(c.b)("h2",{id:"sponsors"},"Sponsors"))},O=function(){return Object(c.b)(r.a.Fragment,null)},j=a("fwFn"),w=(a("HAE/"),a("WLL4"),a("jm62"),a("8+KV"),a("0l/t"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("lSNA")),k=a.n(w),S=a("4qRI"),x=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,N=Object(S.a)((function(e){return x.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),I=a("SIPS"),M=a("MiSq"),_=N,P=function(e){return"theme"!==e&&"innerRef"!==e},T=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?_:P};function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function e(t,a){var o,r,i;void 0!==a&&(o=a.label,i=a.target,r=t.__emotion_forwardProp&&a.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&a.shouldForwardProp(e)}:a.shouldForwardProp);var s=t.__emotion_real===t,l=s&&t.__emotion_base||t;"function"!=typeof r&&s&&(r=t.__emotion_forwardProp);var d=r||T(l),u=!d("as");return function(){var b=arguments,p=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&p.push("label:"+o+";"),null==b[0]||void 0===b[0].raw)p.push.apply(p,b);else{0,p.push(b[0][0]);for(var h=b.length,m=1;m<h;m++)p.push(b[m],b[0][m])}var g=Object(c.c)((function(e,t,a){return Object(n.createElement)(c.a.Consumer,null,(function(o){var s=u&&e.as||l,c="",b=[],h=e;if(null==e.theme){for(var m in h={},e)h[m]=e[m];h.theme=o}"string"==typeof e.className?c=Object(I.a)(t.registered,b,e.className):null!=e.className&&(c=e.className+" ");var g=Object(M.a)(p.concat(b),t.registered,h);Object(I.b)(t,g,"string"==typeof s);c+=t.key+"-"+g.name,void 0!==i&&(c+=" "+i);var f=u&&void 0===r?T(s):d,y={};for(var v in e)u&&"as"===v||f(v)&&(y[v]=e[v]);return y.className=c,y.ref=a||e.innerRef,Object(n.createElement)(s,y)}))}));return g.displayName=void 0!==o?o:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=l,g.__emotion_styles=p,g.__emotion_forwardProp=r,Object.defineProperty(g,"toString",{value:function(){return"."+i}}),g.withComponent=function(t,o){return e(t,void 0!==o?E({},a||{},{},o):a).apply(void 0,p)},g}},R=a("3dvn"),C=a.n(R),F=A("div",{target:"ehcuf7z0"})({name:"8m2wph",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit,minmax(120px,0.25fr));width:100%;z-index:900;transform:translate3d(-5%,0,0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1 !important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent !important;stroke-width:0 !important;}}"}),z=function(e){var t=e.people;return Object(c.b)(F,null,t.map((function(e){return Object(c.b)(C.a,{key:e.id,href:e.twitter?"https://twitter.com/"+e.twitter:"https://github.com/"+e.github,backgroundImage:"https://avatars3.githubusercontent.com/"+e.github+"?v=3&amp;s=120",rel:"noopener noreferrer",target:"_blank"})})))},L=function(){var e=j.data;return Object(c.b)(r.a.Fragment,null,Object(c.b)("h2",{id:"mentors"},"Mentors"),Object(c.b)(z,{people:e.allMentorsYaml.edges.map((function(e){return e.node}))}),Object(c.b)("p",null,"If you want to help teach or contribute in anyway, make a ",Object(c.b)("strong",null,Object(c.b)("a",{href:"https://github.com/"+e.site.siteMetadata.github+"/pulls"},"Pull Request"))," and add your name to the list of available mentors. We also ask that you please read the ",Object(c.b)("a",{href:"https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor"},'"On Being a Mentor"')," tips for ",Object(c.b)("strong",null,"NodeSchool Organizers")," before attending as a mentor.  "))},W=(a("0mN4"),a("ssGl")),X=A("div",{target:"ebiwkhp0"})({name:"8m2wph",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit,minmax(120px,0.25fr));width:100%;z-index:900;transform:translate3d(-5%,0,0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1 !important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent !important;stroke-width:0 !important;}}"}),D=function(){var e=W.data;return Object(c.b)(r.a.Fragment,null,Object(c.b)("h2",{id:"photos"},"Photos"),Object(c.b)(X,null,e.allFile.edges.map((function(e){return Object(c.b)(C.a,{key:e.node.id,href:e.node.childImageSharp.original.src,backgroundImage:e.node.childImageSharp.fixed.src,rel:"noopener noreferrer",target:"_blank"})}))))},Y=a("HzMS"),q=function(){var e=Y.data;return Object(c.b)("div",{style:{margin:"auto"}},Object(c.b)("div",{style:{width:"100%",height:"100%"}},Object(c.b)("img",{src:e.placeholderImage.publicURL,alt:e.site.siteMetadata.title,style:{marginLeft:"auto",marginRight:"auto",display:"block",width:"250px",maxWidth:"250px"}})),Object(c.b)("h1",{style:{fontSize:"50px",lineHeight:"140%",textAlign:"center",fontWeight:"300",margin:"0 auto 60px",letterSpacing:"-1px",color:"#C0493D"}},"Welcome to",Object(c.b)("br",null),e.site.siteMetadata.title))},U=a("XTDk"),G=function(){var e=U.data;return Object(c.b)("p",{className:"additional"},Object(c.b)("strong",null,"NodeSchool")," strives to be a welcoming and safe event for all attendees. Attendees should follow the ",Object(c.b)("a",{href:"#codeofconduct"},"code of conduct"),". If you need further information about an event, please contact the organizers at",Object(c.b)("a",{style:{fontWeight:"bold"},href:"mailto:"+e.site.siteMetadata.email,l:!0,rel:"noopener noreferrer",target:"_blank"}," "+e.site.siteMetadata.email))};t.default=function(){var e=o.data;return Object(c.b)(i.a,null,Object(c.b)(s.a,{title:"Home"}),Object(c.b)("main",{className:"main cf"},Object(c.b)("section",{className:"panel text"},Object(c.b)("div",{className:"container"},Object(c.b)(q,null),Object(c.b)(y,null),Object(c.b)(g,null),Object(c.b)("div",{className:"mailinglist"},Object(c.b)("h3",null,"Get Notified"),Object(c.b)("p",null,"Make sure you know what's going on within the community and whenever we're having an event by signing up to our mailing list below:"),Object(c.b)("form",{action:e.site.siteMetadata.mailchimpSubscribeUrl,method:"post",target:"_blank"},Object(c.b)("label",{className:"firstname"},Object(c.b)("span",null,"First Name"),Object(c.b)("input",{type:"text",name:"FNAME",className:""})),Object(c.b)("label",{className:"lastname"},Object(c.b)("span",null,"Last Name"),Object(c.b)("input",{type:"text",name:"LNAME",className:""})),Object(c.b)("label",{className:"email"},Object(c.b)("span",null,"Email Address"),Object(c.b)("input",{type:"email",name:"EMAIL",className:"required email"})),Object(c.b)("input",{type:"submit",value:"Subscribe",name:"subscribe"}))),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("p",null,Object(c.b)("strong",null,e.site.siteMetadata.title)," events are run by an enthusiastic group of volunteers. The workshops will be held monthly and will always be free."),Object(c.b)("p",null,"The events offer a low-key environment to learn or practice Node and are generally three hours long."),Object(c.b)("h2",{id:"faq"},"Frequently Asked Questions"),Object(c.b)("h3",null,'"What should I expect?"'),Object(c.b)("p",null,"NodeSchool is a self-directed learning environment, where you bring your own laptop to learn. The intention is for attendees to work on the Node workshops from ",Object(c.b)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://nodeschool.io/#workshopper-list"},"nodeschool.io"),". But if you have a personal project you are working on, do it! The goal of NodeSchool is to help people explore and learn Node. There will be mentors on hand at the events to help you when you hit any road blocks."),Object(c.b)("h3",null,'"How do I install Node?"'),Object(c.b)("p",null,'Our recommended way to install Node is through something called "Homebrew".'),Object(c.b)("p",{className:"indent"},Object(c.b)("strong",null,"1.")," Install Homebrew by copying the following command into a terminal/bash prompt:"),Object(c.b)("code",{className:"terminal"},Object(c.b)("pre",null,'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')),Object(c.b)("p",{className:"indent"},Object(c.b)("strong",null,"2.")," Once installed, run",Object(c.b)("code",null,"brew install node")," which should install the latest version of Node."),Object(c.b)("p",null,"If you have any issues installing either Homebrew or Node no worries. We'll do our best to help you get set up once you arrive at an event."),Object(c.b)("h3",null,'"What is a Workshopper?"'),Object(c.b)("p",null,"Workshopper is the name used for the open source lesson modules associated with NodeSchool. All are self guided (you don't need to attend a workshop to do one) and most work offline."),Object(c.b)("h3",null,'"How do I run a Workshopper?"'),Object(c.b)("p",null,"To get started with a Workshopper tutorial you'll have to install and then run that program in terminal/bash. Here's an example of how to install and run the Beginner Node Workshopper:"),Object(c.b)("code",{className:"terminal"},Object(c.b)("pre",null,"$ npm install -g learnyounode"),Object(c.b)("pre",null,"$ learnyounode")),Object(c.b)(D,null),Object(c.b)("h2",{id:"codeofconduct"},"Code of Conduct"),Object(c.b)("p",null,"We, the organizers of ",Object(c.b)("strong",null,e.site.siteMetadata.title),", are dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs. We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organizers of ",Object(c.b)("strong",null,e.site.siteMetadata.title),"."),Object(c.b)("p",null,"Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Sexual language and imagery is not appropriate for any events at ",Object(c.b)("strong",null,e.site.siteMetadata.title)," meetups or in any related communication channels. Community members asked to stop any harassing behavior are expected to comply immediately. Sponsors and presenters are also subject to the anti-harassment policy."),Object(c.b)("p",null,"If a community member engages in harassing behavior, the organizers of ",Object(c.b)("strong",null,e.site.siteMetadata.title)," may take any action they deem appropriate, including warning the offender or expulsion from the community. If you are being harassed, notice that someone else is being harassed, or have any concerns, please contact an organizer immediately."),Object(c.b)("div",{className:"footer"},Object(c.b)("h2",{id:"credit"},"Credits"),Object(c.b)("p",{className:"credit"},"The ",e.site.siteMetadata.title," Hex Logo was kindly designed by ",Object(c.b)("a",{href:e.site.siteMetadata.credits.logo.url,rel:"noopener noreferrer",target:"_blank"},e.site.siteMetadata.credits.logo.name),"."),Object(c.b)("p",{className:"links"},e.site.siteMetadata.meetupGroup&&Object(c.b)(r.a.Fragment,null,Object(c.b)("a",{href:"https://www.meetup.com/"+e.site.siteMetadata.meetupGroup,title:e.site.siteMetadata.title+" Event"},"Events"),Object(c.b)("span",{className:"divider"},"|")),Object(c.b)("a",{href:"https://twitter.com/"+e.site.siteMetadata.twitter,title:e.site.siteMetadata.title+" Twitter"},"Twitter"),Object(c.b)("span",{className:"divider"},"|"),Object(c.b)("a",{href:"https://github.com/nodeschool/vancouver",title:e.site.siteMetadata.title+" GitHub"},"GitHub"),Object(c.b)("span",{className:"divider"},"|"),Object(c.b)("a",{href:"http://nodeschool.io/",title:"NodeSchool"},"NodeSchool.io"))))),Object(c.b)("aside",{className:"panel side"},Object(c.b)("div",{className:"container"},Object(c.b)("div",{className:"inner"},Object(c.b)("a",{className:"logo",href:"http://nodeschool.io"},Object(c.b)("img",{src:e.schoolhouseImage.publicURL,alt:e.site.siteMetadata.title}),Object(c.b)("p",{className:"about"},Object(c.b)("strong",null,"NodeSchool")," is a selection of open source workshops that teach web software skills. You can do them on your own or at one of the monthly ",Object(c.b)("strong",null,e.site.siteMetadata.title)," events.")),Object(c.b)("div",{className:"event"},Object(c.b)(h,null),Object(c.b)(G,null)),Object(c.b)(L,null),Object(c.b)(O,null),Object(c.b)(v,null))))))}},OGtf:function(e,t,a){var o=a("XKFU"),n=a("eeVq"),r=a("vhPU"),i=/"/g,s=function(e,t,a,o){var n=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(o).replace(i,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),o(o.P+o.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},PIsy:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","twitter":"@NodeSchoolYVR","meetupGroup":"nodeschool-vancouver","mailchimpSubscribeUrl":"https://nodeschoolyvr.us20.list-manage.com/subscribe/post?u=703e823487e1f52bfbe0cc32d&amp;id=34f1146956","credits":{"logo":{"name":"Kenneth Ormandy","url":"https://kennethormandy.com/"}}}},"schoolhouseImage":{"extension":"svg","publicURL":"/gatsby-theme-nodeschool/static/schoolhouse-beige-274d82f567d8ef2c4563572b3aa2e85b.svg"}}}')},"R+bq":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"twitter":"@NodeSchoolYVR","slack":""}}}}')},XT0R:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"twitter":"@NodeSchoolYVR"}}}}')},XTDk:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"email":"organizers@nodeschoolyvr.com"}}}}')},Xlix:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,n=a("q1tI"),r=(o=n)&&o.__esModule?o:{default:o},i=a("17x9");function s(e){var t=e.diagonal,a=function(e){var t=e.diagonal,a=e.diagonal;return e.flatTop&&(t*=1.05,a*=1.05),e.backgroundScale?a=t*=e.backgroundScale:e.backgroundWidth?(t=e.backgroundWidth,a=e.backgroundHeight):e.backgroundSize&&(t=e.backgroundSize,a=e.backgroundSize),{width:t,height:a}}(e),o=a.width,n=a.height,i=o!==t,s=i?o:"100%",l=i?n:"100%",c=e.yOffset||0,d=void 0===e.xOffset&&e.flatTop?0-.065*s:0;return r.default.createElement("defs",null,r.default.createElement("pattern",{id:e.id,width:o,height:n,patternUnits:"userSpaceOnUse"},r.default.createElement("image",{x:d,y:c,width:s,height:l,xlinkHref:e.backgroundImage})))}s.propTypes={id:i.string.isRequired,flatTop:i.bool,backgroundImage:i.string.isRequired,backgroundScale:i.number,backgroundWidth:i.number,backgroundHeight:i.number,backgroundSize:i.number,xOffset:i.number,yOffset:i.number,diagonal:i.number},t.default=s},fwFn:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"github":"nodeschool/vancouver"}},"allMentorsYaml":{"edges":[{"node":{"id":"bf18ad00-5623-56b3-b375-61f6b7f5a41a","github":"ayliao","name":"Albert Liao","twitter":null}},{"node":{"id":"5dd334cc-bd47-54c9-9e66-9a1f1252e94d","github":"vrunoa","name":"Bruno","twitter":"vrunoa"}},{"node":{"id":"868cdbb1-d843-5406-856e-818bdd4fe0a9","github":"halkeye","name":"Gavin Mogan","twitter":"halkeye"}},{"node":{"id":"34b73999-971f-5635-a05a-6ac2410a7c75","github":"chowdhurian","name":"Manil","twitter":"keywordnew"}},{"node":{"id":"61d38fc4-7980-535e-99aa-d25312bf9d35","github":"nfg","name":"Nigel","twitter":"thaeus"}},{"node":{"id":"9f7ec71a-2520-5c83-b128-815fa7be2c90","github":"qard","name":"Stephen Belanger","twitter":"stephenbelanger"}}]}}}')},jm62:function(e,t,a){var o=a("XKFU"),n=a("mQtv"),r=a("aCFj"),i=a("EemH"),s=a("8a7r");o(o.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,a,o=r(e),l=i.f,c=n(o),d={},u=0;c.length>u;)void 0!==(a=l(o,t=c[u++]))&&s(d,t,a);return d}})},mQtv:function(e,t,a){var o=a("kJMx"),n=a("JiEa"),r=a("y3w9"),i=a("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=o.f(r(e)),a=n.f;return a?t.concat(a(e)):t}},ssGl:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/cdcaa9122a493b88d4d9f6adb3841200/56565/20190914-nodeschool-1.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190914-nodeschool-1-cdcaa9122a493b88d4d9f6adb3841200.jpg"}},"id":"65f47cf1-88fc-5929-8bd8-9ed006a9e796","relativeDirectory":"photos","relativePath":"photos/20190914-nodeschool-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/5e528e1a3e6c3ca6fc48d96bbc7d9865/56565/20190810.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190810-5e528e1a3e6c3ca6fc48d96bbc7d9865.jpg"}},"id":"4f590367-f9e1-56b7-9185-a5daa0ca5b15","relativeDirectory":"photos","relativePath":"photos/20190810.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/f5e962a21766c45752e56a45fc6cc60d/56565/20190413-SpringIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190413-SpringIsHere-f5e962a21766c45752e56a45fc6cc60d.jpg"}},"id":"bb73eabb-7668-5261-b9cd-0b31f628f012","relativeDirectory":"photos","relativePath":"photos/20190413-SpringIsHere.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/c25a42e9460cc72e9a9fc8213350282e/56565/20190316-GettingStarted-OpenSource.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190316-GettingStarted-OpenSource-c25a42e9460cc72e9a9fc8213350282e.jpg"}},"id":"f605f4e0-6645-55e8-9bc9-d8f7ec1e12fd","relativeDirectory":"photos","relativePath":"photos/20190316-GettingStarted-OpenSource.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/d79bcf1855a2489294fb9fbdd86aebb0/56565/20190209-SpringIsHereSeries-2.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190209-SpringIsHereSeries-2-d79bcf1855a2489294fb9fbdd86aebb0.jpg"}},"id":"9b2e9d74-aecc-54f3-9203-fa3dc6306dd7","relativeDirectory":"photos","relativePath":"photos/20190209-SpringIsHereSeries-2.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/d38459e934826133e01b9577aaa5f013/56565/20190209-SpringIsHereSeries-1.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190209-SpringIsHereSeries-1-d38459e934826133e01b9577aaa5f013.jpg"}},"id":"f0ac0f6b-f2e2-566c-a23e-0777676bd1a5","relativeDirectory":"photos","relativePath":"photos/20190209-SpringIsHereSeries-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/8d716adf2cc40d7dc1ed2817da521eaf/56565/20181013-FallIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20181013-FallIsHere-8d716adf2cc40d7dc1ed2817da521eaf.jpg"}},"id":"5428bab0-9177-5078-b283-8f580e9e2f1c","relativeDirectory":"photos","relativePath":"photos/20181013-FallIsHere.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/05fd7a52d0f94a68552f580b849b72d7/c3f37/20180915-OpenSource-2.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180915-OpenSource-2-05fd7a52d0f94a68552f580b849b72d7.jpg"}},"id":"9caf4ebd-281c-5464-b1e9-95112c513528","relativeDirectory":"photos","relativePath":"photos/20180915-OpenSource-2.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/05fd7a52d0f94a68552f580b849b72d7/c3f37/20180915-OpenSource-1.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180915-OpenSource-1-05fd7a52d0f94a68552f580b849b72d7.jpg"}},"id":"271eac4c-c071-586f-97cd-c91ede70051b","relativeDirectory":"photos","relativePath":"photos/20180915-OpenSource-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/15b7fe6882108631a056f11b5ed2017b/56565/20180908-SummerIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180908-SummerIsHere-15b7fe6882108631a056f11b5ed2017b.jpg"}},"id":"8bb4fb19-7ba1-5ee9-9d34-88c387cc8dea","relativeDirectory":"photos","relativePath":"photos/20180908-SummerIsHere.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/gatsby-theme-nodeschool/static/865c2c327cb6d299c167b6f079664897/56565/20180519-SummerIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180519-SummerIsHere-865c2c327cb6d299c167b6f079664897.jpg"}},"id":"473ac2c0-8baf-5e43-abb2-d0824d00a216","relativeDirectory":"photos","relativePath":"photos/20180519-SummerIsHere.jpg"}}]}}}')},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},xfY5:function(e,t,a){"use strict";var o=a("dyZX"),n=a("aagx"),r=a("LZWt"),i=a("Xbzi"),s=a("apmT"),l=a("eeVq"),c=a("kJMx").f,d=a("EemH").f,u=a("hswa").f,b=a("qncB").trim,p=o.Number,h=p,m=p.prototype,g="Number"==r(a("Kuth")(m)),f="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,o,n,r=(t=f?t.trim():b(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+t}for(var i,l=t.slice(2),c=0,d=l.length;c<d;c++)if((i=l.charCodeAt(c))<48||i>n)return NaN;return parseInt(l,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(g?l((function(){m.valueOf.call(a)})):"Number"!=r(a))?i(new h(y(t)),a,p):y(t)};for(var v,O=a("nh4g")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;O.length>j;j++)n(h,v=O[j])&&!n(p,v)&&u(p,v,d(h,v));p.prototype=m,m.constructor=p,a("KroJ")(o,"Number",p)}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-nodeschool-src-pages-index-js-8c3ee2ddd0e1d331b5cc.js.map