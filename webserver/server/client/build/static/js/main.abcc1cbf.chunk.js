(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(42)},33:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},34:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},40:function(e,t,a){e.exports=a.p+"static/media/3dmodelling-titel-img.05000813.png"},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(20),n=a.n(l),s=a(5),o=a(7),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,m);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},u=a(11),v=a(3),p=a.n(v),b=a(16),h=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(u.a)(a,2),n=l[0],s=l[1],o=Object(i.useState)([]),c=Object(u.a)(o,2),m=c[0],d=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(b.throttle)((function(){h(),p()}),30),E=Object(b.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),p()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));h.propTypes={children:p.a.func.isRequired};var f=h,E=a(13),g=a(1),N=a.n(g),O=a(10),w=["className","src","width","height","alt"],D=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,s=e.alt,o=Object(c.a)(e,w),m=Object(i.useState)(!1),d=Object(u.a)(m,2),v=d[0],p=d[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:l,height:n,alt:s,onLoad:function(){p(!0)}}))};D.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=D,j=["className"],x=function(e){var t=e.className,i=Object(c.a)(e,j),l=N()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(O.a,{to:"/"},r.a.createElement(y,{src:a(33),alt:"Open",width:32,height:32}))))},C=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],k=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,C),d=Object(i.useState)(!1),v=Object(u.a)(d,2),p=v[0],b=v[1],h=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",w),document.addEventListener("click",D),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",D),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",b(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),b(!1)},w=function(e){p&&27===e.keyCode&&g()},D=function(e){h.current&&p&&!h.current.contains(e.target)&&e.target!==f.current&&g()},y=N()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:y}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-header-inner",o&&"has-bottom-divider")},r.a.createElement(x,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?g:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:h,className:N()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))}),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(O.a,{to:{pathname:"https://github.com/blueiceZzz/blueices-playground"},target:"_blank",className:"button button-primary button-wide-mobile button-sm"},"Github")))))))))};k.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var L=k,S=["className"],B=function(e){var t=e.className,a=Object(c.a)(e,S),i=N()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(O.a,null,r.a.createElement("a",{href:"mailto:halbsowild@gmail.com"},"Contact")))))},F=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},P=["className","topOuterDivider","topDivider"],A=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(c.a)(e,P),n=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(x,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(B,null),r.a.createElement("div",{className:"footer-copyright"},"React app template provided with ",r.a.createElement(F,{symbol:"\u2764","aria-label":"red-heart"})," by ",r.a.createElement("a",{href:"https://cruip.com"},"Cruip.com"),". ",r.a.createElement("br",null),"Web-app by ",r.a.createElement("a",{href:"https://github.com/blueiceZzz"},"blueice"),". All rights reserved")))))};A.defaultProps={topOuterDivider:!1,topDivider:!1};var R=A,T=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(R,null))},H=a(4),z={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},I={types:Object(H.a)({},z.types),defaults:Object(H.a)({},z.defaults)},M={types:Object(H.a)(Object(H.a)({},z.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(H.a)(Object(H.a)({},z.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},W={types:Object(H.a)(Object(H.a)({},z.types),{},{pushLeft:p.a.bool}),defaults:Object(H.a)(Object(H.a)({},z.defaults),{},{pushLeft:!1})},_=["className","tag","color","size","loading","wide","wideMobile","disabled"],q=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,n=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,_),u=N()("button",i&&"button-".concat(i),l&&"button-".concat(l),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var G=["className","children","handleClose","show","closeHidden","video","videoTag"],K=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,G);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},b=N()("modal",n&&"is-active",o&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:b,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},o?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:o})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};K.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var U=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],J=Object(H.a)({},I.defaults),V=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,U),v=Object(i.useState)(!1),p=Object(u.a)(v,2),b=(p[0],p[1],N()("hero section center-content",a&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t)),h=N()("hero-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},d,{className:b}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:h},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"My playground with ",r.a.createElement("span",{className:"text-color-primary"},"Node.js, React, Three.js")," and so on."),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Web-dev is cool, fresh and free, why not play with it?"),r.a.createElement("p",{className:"reveal-from-bottom","data-reveal-delay":"400"},"OpenSource is not just a hobby, it's a way of life."))))))};V.defaultProps=J;var Z=V,Y=["className","data","children","tag"],$=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(c.a)(e,Y),s=N()("section-header",t),o=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};$.defaultProps={children:null,tag:"h2"};var Q=$,X=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ee=Object(H.a)({},W.defaults),te=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,X),v=N()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=N()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),b=N()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(Q,{data:{title:"Build up the whole picture",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(34),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(35),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(36),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(37),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(38),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(y,{src:a(39),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};te.defaultProps=ee;var ae=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],ie=Object(H.a)({},M.defaults),re=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=(e.topDivider,e.bottomDivider),s=e.hasBgColor,o=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,v=e.imageFill,p=Object(c.a)(e,ae),b=N()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),h=N()("features-split-inner section-inner",n&&"has-bottom-divider"),f=N()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},p,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:h},r.a.createElement("div",{className:f},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item","data-reveal-delay":"600"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"CROWD SOURCING DATA COLLECTION"),r.a.createElement("h3",{className:"mt-0 mb-12"},"3D Minimum-Bounding-Box Data Collection using three.js"),r.a.createElement("p",{className:"m-0",style:{fontSize:"80%"}},"Training data for deep learning are often way to expensive to collect. It can also be hard when the authors don't have access to a huge amount of available workers or cannot afford to employ so many. This is where Crowd Sourcing comes into play. By putting your data collection task online and using services like Amazon Mechanical Turk or Microworkers, you can open your task for millions of potential workers on the platform. It's pretty much your choice how much to pay them, but I hope you'll pay well. Follow here to the web-tool for collecting Minimum Bounding Box from Laser Scanning data.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item","data-reveal-delay":"600"},r.a.createElement(y,{src:a(40),alt:"Features split 01",width:528,height:396})))))))};re.defaultProps=ie;var le=re,ne=["className","children","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],se=Object(H.a)({children:null},I.defaults),oe=function(e){var t=e.className,a=(e.children,e.topOuterDivider),i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=Object(c.a)(e,ne),d=N()("section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=N()("section-inner",l&&"has-top-divider",n&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},m,{className:d}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement(Q,{data:{title:"OpenSource is not just a hobby, it's a way of life.",paragraph:"Isn't OpenSource awesome? Isn't it like a light of humanity? People following their passion, write awesome code and share it with all of the world. Well, I'm down for it for sure."},className:"center-content"}))))};oe.defaultProps=se;var ce=oe,me=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],de=Object(H.a)({},W.defaults),ue=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,me),u=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=N()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),p=N()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(Q,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};ue.defaultProps=de;var ve=["className","children","labelHidden","id"],pe=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,n=Object(c.a)(e,ve),s=N()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},n,{className:s,htmlFor:l}),a)};pe.defaultProps={children:null,labelHidden:!1,id:null};var be=pe,he=["children","className","status"],fe=function(e){var t=e.children,a=e.className,i=e.status,l=Object(c.a)(e,he),n=N()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},l,{className:n}),t)};fe.defaultProps={children:null,status:!1};var Ee=fe,ge=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],Ne=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,n=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,h=e.rows,f=e.hint,E=Object(c.a)(e,ge),g=N()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=N()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),w="textarea"===n?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(be,{labelHidden:l,id:E.id},i),r.a.createElement("div",{className:g},r.a.createElement(w,Object.assign({},E,{type:"textarea"!==n?n:null,className:O,name:s,disabled:m,value:d,placeholder:b,rows:"textarea"===n?h:null})),a),f&&r.a.createElement(Ee,{status:o},f))};Ne.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var Oe=Ne,we=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],De=Object(H.a)(Object(H.a)({},I.defaults),{},{split:!1}),ye=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,we),u=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=N()("cta-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(Oe,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ye.defaultProps=De;var je=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{className:"illustration-section-01"}),r.a.createElement(le,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(ce,null))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var xe=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(d,{exact:!0,path:"/",component:je,layout:T}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);var Ce=Object(o.a)();n.a.render(r.a.createElement(s.b,{history:Ce},r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.abcc1cbf.chunk.js.map