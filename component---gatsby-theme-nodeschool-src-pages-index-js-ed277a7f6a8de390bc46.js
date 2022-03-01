"use strict";(self.webpackChunk_halkeye_gatsby_theme_nodeschool_example=self.webpackChunk_halkeye_gatsby_theme_nodeschool_example||[]).push([[514],{8523:function(e,t,n){var a;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(r){var i,s,l,u=arguments,d=(i=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,s=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,l=/[^-+\dA-Z]/g,function(e,t,n,a){if(1!==u.length||"string"!==f(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var o=(t=String(d.masks[t]||t||d.masks.default)).slice(0,4);"UTC:"!==o&&"GMT:"!==o||(t=t.slice(4),n=!0,"GMT:"===o&&(a=!0));var r=function(){return n?"getUTC":"get"},g=function(){return e[r()+"Date"]()},y=function(){return e[r()+"Day"]()},b=function(){return e[r()+"Month"]()},Z=function(){return e[r()+"FullYear"]()},v=function(){return e[r()+"Hours"]()},w=function(){return e[r()+"Minutes"]()},M=function(){return e[r()+"Seconds"]()},k=function(){return e[r()+"Milliseconds"]()},N=function(){return n?0:e.getTimezoneOffset()},x=function(){return h(e)},T={d:function(){return g()},dd:function(){return m(g())},ddd:function(){return d.i18n.dayNames[y()]},DDD:function(){return c({y:Z(),m:b(),d:g(),_:r(),dayName:d.i18n.dayNames[y()],short:!0})},dddd:function(){return d.i18n.dayNames[y()+7]},DDDD:function(){return c({y:Z(),m:b(),d:g(),_:r(),dayName:d.i18n.dayNames[y()+7]})},m:function(){return b()+1},mm:function(){return m(b()+1)},mmm:function(){return d.i18n.monthNames[b()]},mmmm:function(){return d.i18n.monthNames[b()+12]},yy:function(){return String(Z()).slice(2)},yyyy:function(){return m(Z(),4)},h:function(){return v()%12||12},hh:function(){return m(v()%12||12)},H:function(){return v()},HH:function(){return m(v())},M:function(){return w()},MM:function(){return m(w())},s:function(){return M()},ss:function(){return m(M())},l:function(){return m(k(),3)},L:function(){return m(Math.floor(k()/10))},t:function(){return v()<12?d.i18n.timeNames[0]:d.i18n.timeNames[1]},tt:function(){return v()<12?d.i18n.timeNames[2]:d.i18n.timeNames[3]},T:function(){return v()<12?d.i18n.timeNames[4]:d.i18n.timeNames[5]},TT:function(){return v()<12?d.i18n.timeNames[6]:d.i18n.timeNames[7]},Z:function(){return a?"GMT":n?"UTC":(String(e).match(s)||[""]).pop().replace(l,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(N()>0?"-":"+")+m(100*Math.floor(Math.abs(N())/60)+Math.abs(N())%60,4)},p:function(){return(N()>0?"-":"+")+m(Math.floor(Math.abs(N())/60),2)+":"+m(Math.floor(Math.abs(N())%60),2)},S:function(){return["th","st","nd","rd"][g()%10>3?0:(g()%100-g()%10!=10)*g()%10]},W:function(){return x()},WW:function(){return m(x())},N:function(){return p(e)}};return t.replace(i,(function(e){return e in T?T[e]():e.slice(1,e.length-1)}))});d.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},d.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var m=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},c=function(e){var t=e.y,n=e.m,a=e.d,o=e._,r=e.dayName,i=e.short,s=void 0!==i&&i,l=new Date,u=new Date;u.setDate(u[o+"Date"]()-1);var d=new Date;d.setDate(d[o+"Date"]()+1);return l[o+"FullYear"]()===t&&l[o+"Month"]()===n&&l[o+"Date"]()===a?s?"Tdy":"Today":u[o+"FullYear"]()===t&&u[o+"Month"]()===n&&u[o+"Date"]()===a?s?"Ysd":"Yesterday":d[o+"FullYear"]()===t&&d[o+"Month"]()===n&&d[o+"Date"]()===a?s?"Tmw":"Tomorrow":r},h=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var a=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-a);var o=(t-n)/6048e5;return 1+Math.floor(o)},p=function(e){var t=e.getDay();return 0===t&&(t=7),t},f=function(e){return null===e?"null":void 0===e?"undefined":"object"!==o(e)?o(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(a=function(){return d}.call(t,n,t,e))||(e.exports=a)}(void 0)},6995:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(2735),r=(a=o)&&a.__esModule?a:{default:a},i=n(216);function s(e){var t=e.diagonal,n=function(e){var t=e.diagonal,n=e.diagonal;return e.flatTop&&(t*=1.05,n*=1.05),e.backgroundScale?n=t*=e.backgroundScale:e.backgroundWidth?(t=e.backgroundWidth,n=e.backgroundHeight):e.backgroundSize&&(t=e.backgroundSize,n=e.backgroundSize),{width:t,height:n}}(e),a=n.width,o=n.height,i=a!==t,s=i?a:"100%",l=i?o:"100%",u=e.yOffset||0,d=void 0===e.xOffset&&e.flatTop?0-.065*s:0;return r.default.createElement("defs",null,r.default.createElement("pattern",{id:e.id,width:a,height:o,patternUnits:"userSpaceOnUse"},r.default.createElement("image",{x:d,y:u,width:s,height:l,xlinkHref:e.backgroundImage})))}s.propTypes={id:i.string.isRequired,flatTop:i.bool,backgroundImage:i.string.isRequired,backgroundScale:i.number,backgroundWidth:i.number,backgroundHeight:i.number,backgroundSize:i.number,xOffset:i.number,yOffset:i.number,diagonal:i.number},t.default=s},1684:function(e,t,n){var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=s(n(2735)),r=n(216),i=s(n(6995));function s(e){return e&&e.__esModule?e:{default:e}}var l=.868217054,u=2*Math.PI/6,d=0;function m(e){return Number(e.toFixed(3))}function c(e,t){for(var n,a=e.diagonal/2,o=e.diagonal*l/2,r=(n=90,Math.PI*n/180),i=a,s=[],d=0;d<6;d++){var c=r+d*u;s.push([t/2+o+i*Math.cos(c),t/1.5+a-i*Math.sin(c)])}return s.map((function(e){return e.map(m)}))}function h(e){var t,n=e.backgroundImage&&"bg-"+ ++d,r=function(e,t){var n={};for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a]);for(var o in e)void 0===n[o]&&e.hasOwnProperty(o)&&(n[o]=e[o]);return n}({fill:e.backgroundImage?"url(#"+n+")":"none",stroke:"#42873f",strokeWidth:.02*e.diagonal,cursor:e.onClick&&"pointer"},e.style),s={maxX:-1/0,maxY:-1/0,minX:1/0,minY:1/0},u=r.strokeWidth,h=Math.ceil(u/2),p=e.flatTop?function(e,t){var n=e.diagonal/2,a=l*e.diagonal/2,o=a+(n-a),r=.866*n,i=.5*n;return[[o-i,n-r],[o+i,n-r],[o+n,n],[o+i,n+r],[o-i,n+r],[o-n,n]].map((function(e){return e.map(m)}))}(e):c(e,u),f={maxX:(t=p.reduce((function(e,t){return{maxX:Math.ceil(Math.max(e.maxX,t[0]+h)),maxY:Math.ceil(Math.max(e.maxY,t[1]+h)),minX:Math.floor(Math.min(e.minX,t[0]-h)),minY:Math.floor(Math.min(e.minY,t[1]-h))}}),s)).maxX-t.minX,maxY:t.maxY-t.minY,minX:t.minX,minY:t.minY},g=[f.minX,f.minY,f.maxX+(f.minX<0?Math.abs(f.minX):0),f.maxY+(f.minY<0?Math.abs(f.minY):0)].join(" "),y=o.default.createElement("polygon",a({},e.hexProps,{onClick:e.onClick,style:r,points:p.map((function(e){return e.join(",")})).join(" ")})),b=e.href&&o.default.createElement("a",{xlinkHref:e.href,target:e.target},y);return o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:e.className,viewBox:g},e.backgroundImage&&o.default.createElement(i.default,a({id:n},e)),b||y,e.children)}h.propTypes={diagonal:r.number,className:r.string,onClick:r.func,href:r.string,target:r.string,flatTop:r.bool,backgroundImage:r.string,backgroundWidth:r.number,backgroundHeight:r.number,backgroundScale:r.number,backgroundSize:r.number,hexProps:r.object,style:r.object,children:r.node},h.defaultProps={diagonal:500,flatTop:!1,style:{}},t.Z=h},300:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=n(2735),o=n(8858),r=n(595),i=n(3554),s=n(1627),l=n(11),u=n(6182),d=function(e){var t=e.description,n=e.name,a=e.venue;return(0,u.tZ)("div",null,(0,u.tZ)("h1",null,n),(0,u.tZ)("div",{dangerouslySetInnerHTML:{__html:t}}),a&&(0,u.tZ)("div",null,a.name,a.repinned,a.address_1,a.address_2,a.city,a.state,a.zip,a.country,a.lat,",",a.lon,a.localized_country_name))},m=function(){return(0,o.useStaticQuery)("3561229326").allMeetupEvent.edges.map((function(e){return(0,u.tZ)(d,(0,l.Z)({key:e.node.id},e.node))}))},c=n(8523),h=n.n(c),p={en:"m/d/yyyy",pt:"dd/mm/yyyy","pt-br":"dd/mm/yyyy"};var f=function(e,t){void 0===t&&(t="en");var n=p[t.toLowerCase()]||p.en;return h()(e,n)},g=function(){var e=(0,r.$)(),t=e.t,n=e.i18n;return(0,o.useStaticQuery)("2441701107").allMeetupEvent.edges.map((function(e){var o=e.node.venue?[e.node.venue.name,e.node.venue.address_1,e.node.venue.address_2,[e.node.venue.city,e.node.venue.state].filter(Boolean).join(", "),e.node.venue.zip,e.node.venue.localized_country_name].filter(Boolean):[];return(0,u.tZ)("div",{key:e.node.id},(0,u.tZ)("p",{className:"register"},(0,u.tZ)("strong",null,(0,u.tZ)("a",{href:e.node.link,title:"Registration Link"},t("Register")))," ",t("for our event on")," ",(0,u.tZ)("strong",null,f(new Date(e.node.time),n.language))),e.node.venue&&(0,u.tZ)(a.Fragment,null,(0,u.tZ)("div",{className:"location"},(0,u.tZ)("p",null,(0,u.tZ)("strong",null,t("Location"),":")),(0,u.tZ)("address",null,o.map((function(e){return(0,u.tZ)("span",{key:e},e,(0,u.tZ)("br",null))}))),e.node.how_to_find_us),(0,u.tZ)("div",{className:"map"},(0,u.tZ)("iframe",{title:"google maps",src:"https://maps.google.com/maps?q="+encodeURIComponent(o.join("\n"))+"&t=&z=13&ie=UTF8&iwloc=&output=embed",width:"600",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:!0}))))}))},y=function(){return(0,u.tZ)(a.Fragment,null,(0,u.tZ)(m,null),(0,u.tZ)("hr",null),(0,u.tZ)(g,null))},b=function(){var e=(0,r.$)().t,t=(0,o.useStaticQuery)("3964044313");return(0,u.tZ)("p",null,(0,u.tZ)("a",{href:"https://twitter.com/"+t.site.siteMetadata.twitter,className:"twitter-follow-button","data-show-count":"false"},e("Follow")," @",t.site.siteMetadata.twitter))},Z=function(){var e=(0,r.$)().t,t=(0,o.useStaticQuery)("2847902309");return(0,u.tZ)(a.Fragment,null,(0,u.tZ)("h2",{id:"community"},e("Community")),(0,u.tZ)("p",null,e("The NodeSchool community is")," ",(0,u.tZ)("strong",null,e("open to anyone")),"."," ",e("Whether you're able to attend an event or not, you can join the discussion around learning Node")," ",[t.site.siteMetadata.slack?e("in our Slack channel"):null,t.site.siteMetadata.twitter?e("by following us on Twitter"):null].filter(Boolean).join(" "+e("or")+" ")))},v=function(){var e=(0,r.$)().t;return(0,u.tZ)(a.Fragment,null,(0,u.tZ)("h2",{id:"sponsors"},e("Sponsors")))},w=function(){return(0,u.tZ)(a.Fragment,null)},M=n(6903),k=n(1684);var N=(0,M.Z)("div",{target:"emhs7sn0"})({name:"176smhm",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit, minmax(120px, 0.25fr));width:100%;z-index:900;transform:translate3d(-5%, 0, 0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1!important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent!important;stroke-width:0!important;}}"}),x=function(e){var t=e.people;return(0,u.tZ)(N,null,t.map((function(e){return(0,u.tZ)(k.Z,{key:e.id,href:e.twitter?"https://twitter.com/"+e.twitter:"https://github.com/"+e.github,backgroundImage:"https://avatars3.githubusercontent.com/"+e.github+"?v=3&amp;s=120",rel:"noopener noreferrer",target:"_blank"})})))},T=function(){var e=(0,r.$)().t,t=(0,o.useStaticQuery)("1290716197");return(0,u.tZ)(a.Fragment,null,(0,u.tZ)("h2",{id:"mentors"},e("Mentors")),(0,u.tZ)(x,{people:t.allMentorsYaml.edges.map((function(e){return e.node}))}),(0,u.tZ)("p",null,e("If you want to help teach or contribute in anyway, make a")," ",(0,u.tZ)("strong",null,(0,u.tZ)("a",{href:"https://github.com/"+t.site.siteMetadata.github+"/pulls"},"Pull Request"))," ",e("and add your name to the list of available mentors"),"."," ",e("We also ask that you please read the")," ",(0,u.tZ)("a",{href:"https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor"},'"',e("On Being a Mentor"),'"')," ",e("tips for")," ",(0,u.tZ)("strong",null,e("NodeSchool Organizers"))," ",e("before attending as a mentor"),"."))};var S=(0,M.Z)("div",{target:"e5idso10"})({name:"176smhm",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit, minmax(120px, 0.25fr));width:100%;z-index:900;transform:translate3d(-5%, 0, 0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1!important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent!important;stroke-width:0!important;}}"}),D=function(){var e=(0,r.$)().t,t=(0,o.useStaticQuery)("610551790");return(0,u.tZ)(a.Fragment,null,(0,u.tZ)("h2",{id:"photos"},e("Photos")),(0,u.tZ)(S,null,t.allFile.edges.map((function(e){return(0,u.tZ)(k.Z,{key:e.node.id,href:e.node.childImageSharp.original.src,backgroundImage:e.node.childImageSharp.fixed.src,rel:"noopener noreferrer",target:"_blank"})}))))},_=function(){var e=(0,r.$)().t,t=(0,o.useStaticQuery)("3731217296");return(0,u.tZ)("div",{style:{margin:"auto"}},(0,u.tZ)("div",{style:{width:"100%",height:"100%"}},(0,u.tZ)("img",{src:t.placeholderImage.publicURL,alt:t.site.siteMetadata.title,style:{marginLeft:"auto",marginRight:"auto",display:"block",width:"250px",maxWidth:"250px"}})),(0,u.tZ)("h1",{style:{fontSize:"50px",lineHeight:"140%",textAlign:"center",fontWeight:"300",margin:"0 auto 60px",letterSpacing:"-1px",color:"#C0493D"}},e("Welcome to"),(0,u.tZ)("br",null),t.site.siteMetadata.title))},H=function(){var e=(0,r.$)().t,t=(0,o.useStaticQuery)("3678858928");return(0,u.tZ)("p",{className:"additional"},(0,u.tZ)("strong",null,"NodeSchool")," ",e("strives to be a welcoming and safe event for all attendees"),"."," ",e("Attendees should follow the"),"."," ",(0,u.tZ)("a",{href:"#codeofconduct"},e("Code of Conduct").toLowerCase()),"."," ",e("If you need further information about an event, please contact the organizers at"),"."," ",(0,u.tZ)("a",{style:{fontWeight:"bold"},href:"mailto:"+t.site.siteMetadata.email,rel:"noopener noreferrer",target:"_blank"}," "+t.site.siteMetadata.email))},W=function(){var e=(0,r.$)().t,t=(0,o.useStaticQuery)("699911612");return(0,u.tZ)(i.Z,{noWrapper:!0},(0,u.tZ)(s.Z,{title:"Home"}),(0,u.tZ)("main",{className:"main cf"},(0,u.tZ)("section",{className:"panel text"},(0,u.tZ)("div",{className:"container"},(0,u.tZ)(_,null),(0,u.tZ)(Z,null),(0,u.tZ)(b,null),(0,u.tZ)("div",{className:"mailinglist"},(0,u.tZ)("h3",null,e("Get Notified")),(0,u.tZ)("p",null,e("Make sure you know what's going on within the community and whenever we're having an event by signing up to our mailing list below"),":"),(0,u.tZ)("form",{action:t.site.siteMetadata.mailchimpSubscribeUrl,method:"post",target:"_blank"},(0,u.tZ)("label",{className:"firstname"},(0,u.tZ)("span",null,e("First Name")),(0,u.tZ)("input",{type:"text",name:"FNAME",className:""})),(0,u.tZ)("label",{className:"lastname"},(0,u.tZ)("span",null,e("Last Name")),(0,u.tZ)("input",{type:"text",name:"LNAME",className:""})),(0,u.tZ)("label",{className:"email"},(0,u.tZ)("span",null,e("Email Address")),(0,u.tZ)("input",{type:"email",name:"EMAIL",className:"required email"})),(0,u.tZ)("input",{type:"submit",value:e("Subscribe"),name:"subscribe"}))),(0,u.tZ)("h2",{id:"events"},e("Events")),(0,u.tZ)("p",null,(0,u.tZ)("strong",null,t.site.siteMetadata.title)," ",e("events are run by an enthusiastic group of volunteers"),"."," ",e("The workshops will be held monthly and will always be free"),"."),(0,u.tZ)("p",null,e("The events offer a low-key environment to learn or practice Node and are generally three hours long"),"."),(0,u.tZ)("h2",{id:"faq"},e("Frequently Asked Questions")),(0,u.tZ)("h3",null,'"',e("What should I expect?"),'"'),(0,u.tZ)("p",null,e("NodeSchool is a self-directed learning environment, where you bring your own laptop to learn"),"."," ",e("The intention is for attendees to work on the Node workshops from")," ",(0,u.tZ)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://nodeschool.io/#workshopper-list"},"nodeschool.io"),"."," ",e("But if you have a personal project you are working on, do it!")," ",e("The goal of NodeSchool is to help people explore and learn Node"),"."," ",e("There will be mentors on hand at the events to help you when you hit any road blocks"),"."),(0,u.tZ)("h3",null,'"',e("How do I install Node?"),' "'),(0,u.tZ)("p",null,e("Our recommended way to install Node is through something called"),'"Homebrew".'),(0,u.tZ)("p",{className:"indent"},(0,u.tZ)("strong",null,"1.")," ",e("Install Homebrew by copying the following command into a terminal/bash prompt"),":"),(0,u.tZ)("code",{className:"terminal"},(0,u.tZ)("pre",null,'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')),(0,u.tZ)("p",{className:"indent"},(0,u.tZ)("strong",null,"2.")," ",e("Once installed, run"),(0,u.tZ)("code",null,"brew install node"),e("which should install the latest version of Node"),"."),(0,u.tZ)("p",null,e("If you have any issues installing either Homebrew or Node no worries"),"."," ",e("We'll do our best to help you get set up once you arrive at an event"),"."),(0,u.tZ)("h3",null,'"',e("What is a Workshopper?"),'"'),(0,u.tZ)("p",null,e("Workshopper is the name used for the open source lesson modules associated with NodeSchool"),"."," ",e("All are self guided (you don't need to attend a workshop to do one) and most work offline"),"."),(0,u.tZ)("h3",null,'"',e("How do I run a Workshopper?"),'"'),(0,u.tZ)("p",null,e("To get started with a Workshopper tutorial you'll have to install and then run that program in terminal/bash"),"."," ",e("Here's an example of how to install and run the Beginner Node Workshopper"),":"),(0,u.tZ)("code",{className:"terminal"},(0,u.tZ)("pre",null,"$ npm install -g learnyounode"),(0,u.tZ)("pre",null,"$ learnyounode")),(0,u.tZ)(D,null),(0,u.tZ)("h2",{id:"codeofconduct"},e("Code of Conduct")),(0,u.tZ)("p",null,e("We, the organizers of")," ",(0,u.tZ)("strong",null,t.site.siteMetadata.title),","," ",e("are dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs"),"."," ",e("We do not tolerate harassment of community members in any form"),"."," ",e("Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organizers of")," ",(0,u.tZ)("strong",null,t.site.siteMetadata.title),"."),(0,u.tZ)("p",null,e("Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention"),"."," ",e("Sexual language and imagery is not appropriate for any events at")," ",(0,u.tZ)("strong",null,t.site.siteMetadata.title)," ",e("meetups or in any related communication channels"),"."," ",e("Community members asked to stop any harassing behavior are expected to comply immediately"),"."," ",e("Sponsors and presenters are also subject to the anti-harassment policy"),"."),(0,u.tZ)("p",null,e("If a community member engages in harassing behavior, the organizers of")," ",(0,u.tZ)("strong",null,t.site.siteMetadata.title)," ",e("may take any action they deem appropriate, including warning the offender or expulsion from the community"),"."," ",e("If you are being harassed, notice that someone else is being harassed, or have any concerns, please contact an organizer immediately"),"."),(0,u.tZ)("div",{className:"footer"},(0,u.tZ)("h2",{id:"credit"},e("Credits")),(0,u.tZ)("p",{className:"credit"},e("credit-The")," ",t.site.siteMetadata.title," ",e("Hex Logo was kindly designed by")," ",(0,u.tZ)("a",{href:t.site.siteMetadata.credits.logo.url,rel:"noopener noreferrer",target:"_blank"},t.site.siteMetadata.credits.logo.name),"."),(0,u.tZ)("p",{className:"links"},t.site.siteMetadata.meetupGroup&&(0,u.tZ)(a.Fragment,null,(0,u.tZ)("a",{href:"https://www.meetup.com/"+t.site.siteMetadata.meetupGroup,title:t.site.siteMetadata.title+" "+e("Event")},e("Events")),(0,u.tZ)("span",{className:"divider"},"|")),(0,u.tZ)("a",{href:"https://twitter.com/"+t.site.siteMetadata.twitter,title:t.site.siteMetadata.title+" Twitter"},"Twitter"),(0,u.tZ)("span",{className:"divider"},"|"),(0,u.tZ)("a",{href:"https://github.com/"+t.site.siteMetadata.github,title:t.site.siteMetadata.title+" GitHub"},"GitHub"),(0,u.tZ)("span",{className:"divider"},"|"),(0,u.tZ)("a",{href:"http://nodeschool.io/",title:"NodeSchool"},"NodeSchool.io"))))),(0,u.tZ)("aside",{className:"panel side"},(0,u.tZ)("div",{className:"container"},(0,u.tZ)("div",{className:"inner"},(0,u.tZ)("a",{className:"logo",href:"http://nodeschool.io"},(0,u.tZ)("img",{src:t.schoolhouseImage.publicURL,alt:t.site.siteMetadata.title}),(0,u.tZ)("p",{className:"about"},(0,u.tZ)("strong",null,"NodeSchool")," ",e("is a selection of open source workshops that teach web software skills"),"."," ",e("You can do them on your own or at one of the monthly")," ",(0,u.tZ)("strong",null,t.site.siteMetadata.title)," ",e("events"),".")),(0,u.tZ)("div",{className:"event"},(0,u.tZ)(y,null),(0,u.tZ)(H,null)),(0,u.tZ)(T,null),(0,u.tZ)(w,null),(0,u.tZ)(v,null))))))}}}]);
//# sourceMappingURL=component---gatsby-theme-nodeschool-src-pages-index-js-ed277a7f6a8de390bc46.js.map