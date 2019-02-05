(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});a(156);var n=a(0),i=a.n(n),r=a(5),o=a.n(r),l=a(153),c=a(167),m=a(160),d=a.n(m),s=l.d.div.withConfig({displayName:"pages__Grid",componentId:"sc-1s7vkg1-0"})(["display:grid;grid-template-columns:repeat(",",1fr);grid-gap:50px;@media (max-width:768px){grid-template-columns:1fr;}.gatsby-image-outer-wrapper,.gatsby-image-wrapper{position:static !important;}"],function(e){return e.theme.gridColumns}),p=l.d.div.withConfig({displayName:"pages__Content",componentId:"sc-1s7vkg1-1"})(["margin:-6rem auto 0 auto;max-width:",";padding:0 "," 6rem;position:relative;"],function(e){return e.theme.maxWidths.general},function(e){return e.theme.contentPadding}),u=l.d.div.withConfig({displayName:"pages__BG",componentId:"sc-1s7vkg1-2"})(["background-color:",";"],function(e){return e.theme.colors.bg}),g=function(e){var t=e.data.allMdx.edges;return i.a.createElement(c.d,null,i.a.createElement(c.c,{avatar:d.a.avatar,name:d.a.name,location:d.a.location,moreInfo:d.a.moreInfo}),i.a.createElement(u,null,i.a.createElement(p,null,i.a.createElement(s,null,t.map(function(e,t){return i.a.createElement(c.a,{delay:t,date:e.node.frontmatter.date,title:e.node.frontmatter.title,cover:e.node.frontmatter.cover.childImageSharp.fluid,path:e.node.fields.slug,areas:e.node.frontmatter.areas,key:e.node.fields.slug})})))))};t.default=g,g.propTypes={data:o.a.shape({allMdx:o.a.shape({edges:o.a.array.isRequired})}).isRequired};var h="2615856382"},155:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return u});var n=a(0),i=a.n(n),r=a(5),o=a.n(r),l=a(154),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var m=a(157),d=a.n(m);a.d(t,"PageRenderer",function(){return d.a});var s=a(35);a.d(t,"parsePath",function(){return s.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},158:function(e,t){e.exports={bgPattern:"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E",colors:{bg:"#DFDBE5",color:"white",dark_bg:"black",secondary:"#DADADA",link:"#5aa1fc",linkHover:"#79a8ff"},maxWidths:{general:"1600px",project:1600},gridColumns:2,contentPadding:"1.0875rem",breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"}}},159:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMjA3LjA5MywzMC4xODcgMTc2LjkwNywwIDQ4LjkwNywxMjggMTc2LjkwNywyNTYgMjA3LjA5MywyMjUuODEzIDEwOS4yOCwxMjgiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},160:function(e,t){e.exports={pathPrefix:"/",siteTitle:"ABishop Painting",siteTitleAlt:"A Bishop Painting – Professional Painting Services in Victoria, BC",siteTitleShort:"ABishopPainting",siteHeadline:"A Bishop Painting. Doing the job right.",siteUrl:"http://painting.abishop.me",siteLanguage:"en",siteLogo:"/logos/logo.png",siteDescription:"A Bishop Painting � Professional Painting Service in Victoria, BC",author:"ABishop",ogLanguage:"en_US",googleAnalyticsID:"",themeColor:"#3498DB",backgroundColor:"#2b2e3c",avatar:"/logos/paint-roller-solid.svg",name:"A Bishop Painting",location:"Victoria, BC",moreInfo:"Professional Interior / Exterior Painting Services"}},164:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(0),o=a.n(r),l=a(5),c=a.n(l),m=a(60),d=a(3),s=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(m.a,i()({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},165:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iNzkuMDkzLDAgNDguOTA3LDMwLjE4NyAxNDYuNzIsMTI4IDQ4LjkwNywyMjUuODEzIDc5LjA5MywyNTYgMjA3LjA5MywxMjggICAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},166:function(e){e.exports={data:{site:{buildTime:"2019-02-05"}}}},167:function(e,t,a){"use strict";a(161);var n=a(0),i=a.n(n),r=a(153),o=a(5),l=a.n(o),c=a(36),m=a(173),d=a(162),s=a.n(d),p=a(155),u=Object(r.d)(p.Link).withConfig({displayName:"Card__CardItem",componentId:"kdcs1g-0"})(["min-height:500px;position:relative;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.2);display:flex;flex-direction:column;justify-content:flex-end;color:",";transition:all 0.3s ease-in-out;&:hover{color:white;transform:translateY(-6px);}@media (max-width:","){min-height:300px;}"],function(e){return e.theme.colors.color},function(e){return e.theme.breakpoints.s}),g=r.d.div.withConfig({displayName:"Card__Cover",componentId:"kdcs1g-1"})(["width:100%;height:100%;position:absolute;div{overflow:hidden;}"]),h=r.d.div.withConfig({displayName:"Card__Content",componentId:"kdcs1g-2"})(["padding:1rem;position:relative;transition:all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);opacity:0;background:",";height:0;",":hover &{opacity:1;height:120px;}"],function(e){return Object(m.a)(e.theme.colors.link,.35)},u),f=r.d.div.withConfig({displayName:"Card__Bottom",componentId:"kdcs1g-3"})(["margin-top:0.5rem;display:flex;align-items:center;font-size:0.85rem;div:first-child{margin-right:1rem;}"]),y=r.d.h2.withConfig({displayName:"Card__Name",componentId:"kdcs1g-4"})(["margin-bottom:0;margin-top:0;"]),b=function(e){var t=e.path,a=e.cover,n=e.date,r=e.areas,o=e.title,l=e.delay;return i.a.createElement(c.a,{native:!0,delay:200*l,from:{opacity:0,transform:"translate3d(0, 30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"},config:c.d.slow},function(e){return i.a.createElement(c.c.div,{style:e},i.a.createElement(u,{to:t},i.a.createElement(g,null,i.a.createElement(s.a,{fluid:a})),i.a.createElement(h,null,i.a.createElement(y,null,o),i.a.createElement(f,null,i.a.createElement("div",null,n),i.a.createElement("div",null,r.map(function(e,t){return i.a.createElement(i.a.Fragment,{key:e},t>0&&", ",e)}))))))})},w=b;b.propTypes={path:l.a.string.isRequired,cover:l.a.object.isRequired,date:l.a.string.isRequired,areas:l.a.array.isRequired,title:l.a.string.isRequired,delay:l.a.number.isRequired};var v=r.d.footer.withConfig({displayName:"Footer__Content",componentId:"sc-1tea5c2-0"})(["color:black;text-align:center;font-size:0.9rem;padding-top:3rem;padding-bottom:3rem;background:",";"],function(e){return e.theme.colors.bg}),x=function(){return i.a.createElement(v,null,"© 2019 Andrew Bishop")},E=(a(156),r.d.div.withConfig({displayName:"Header__Wrapper",componentId:"addiae-0"})(['background:url("','")   #4c4c4c;display:flex;position:relative;'],function(e){return e.theme.bgPattern})),I=r.d.div.withConfig({displayName:"Header__Content",componentId:"addiae-1"})(["margin:0 auto;max-width:",";padding:3rem 1.0875rem 3rem 1.0875rem;color:",";text-align:center;height:550px;@media (max-width:","){height:500px;}"],function(e){return e.theme.maxWidths.general},function(e){return e.theme.colors.secondary},function(e){return e.theme.breakpoints.s}),k=r.d.div.withConfig({displayName:"Header__Avatar",componentId:"addiae-2"})(["height:80px;width:80px;margin:0 auto;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor;"]),C=r.d.h1.withConfig({displayName:"Header__Name",componentId:"addiae-3"})(["margin:1rem 0 0.25rem 0;color:",";"],function(e){return e.theme.colors.color}),N=r.d.div.withConfig({displayName:"Header__Location",componentId:"addiae-4"})(["font-size:0.9rem;display:flex;align-items:center;justify-content:center;"]),P=r.d.div.withConfig({displayName:"Header__MoreInfo",componentId:"addiae-5"})(["font-size:1.2rem;display:flex;align-items:center;justify-content:center;padding-top:1.5rem;"]),j=r.d.div.withConfig({displayName:"Header__Contact",componentId:"addiae-6"})(["font-size:1rem;display:flex;align-items:center;justify-content:center;padding-top:1.5rem;line-height:1.5rem;"]),z=i.a.createElement("span",null,"Friendly and reliable",i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:andrew.bishop53@gmail.com"},"Contact me")," for a quote"),_=function(e){var t=e.avatar,a=e.name,n=e.location,r=e.moreInfo;return i.a.createElement(E,null,i.a.createElement(I,null,i.a.createElement(k,null,i.a.createElement("img",{src:t,alt:a})),i.a.createElement(C,null,a),i.a.createElement(N,null,n),i.a.createElement(P,null,r),i.a.createElement(j,null,z)))},T=_;_.propTypes={avatar:l.a.string.isRequired,name:l.a.string.isRequired,location:l.a.string.isRequired,moreInfo:l.a.string.isRequired};var B=a(169),L=a.n(B),M=a(158),S=a.n(M),A=Object(r.c)(["*,*:before,*:after{box-sizing:inherit;}html,body{padding:0;margin:0;}html{text-rendering:optimizeLegibility;overflow-x:hidden;overflow-y:auto !important;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);font-size:18px;h1{font-size:2.441rem;}h2{font-size:1.953rem;}h3{font-size:1.563rem;}h4{font-size:1.25rem;}h5{font-size:1rem;}@media (max-width:","),(max-device-width:","){font-size:18px !important;h1{font-size:2.074rem;}h2{font-size:1.728rem;}h3{font-size:1.44rem;}h4{font-size:1.2rem;}}@media (max-width:","),(max-device-width:","){font-size:16px !important;}@media (max-width:","),(max-device-width:","){h1{font-size:1.602rem;}h2{font-size:1.424rem;}h3{font-size:1.266rem;}h4{font-size:1.125rem;}}}body{color:",";}::selection{color:",";background-color:",";}a{color:",";transition:all 0.3s ease-in-out;text-decoration:none;&:hover,&:focus{color:",";}}a:not([href]):not([tabindex]){color:inherit;text-decoration:none;&:hover,&:focus{color:inherit;text-decoration:none;}&:focus{outline:0;}}blockquote{border-left:5px solid ",";padding-left:1rem !important;margin-left:0 !important;margin-right:0 !important;font-style:italic;p{line-height:1.3 !important;}}[tabindex='-1']:focus{outline:none !important;}pre{margin-top:0;margin-bottom:1rem;overflow:auto;}figure{margin:0 0 1rem 0;}img{vertical-align:middle;}[role='button']{cursor:pointer;}a,area,button,[role='button'],input,label,select,summary,textarea{touch-action:manipulation;}table{border-collapse:collapse;background-color:",";}caption{padding-top:1.5rem;padding-bottom:1.5rem;color:",";text-align:center;caption-side:bottom;}th{text-align:left;}label{display:inline-block;margin-bottom:0.5rem;}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}input,button,select,textarea{line-height:inherit;}input[type='date'],input[type='time'],input[type='datetime-local'],input[type='month']{-webkit-appearance:listbox;}textarea{resize:vertical;}fieldset{min-width:0;padding:0;margin:0;border:0;}legend{display:block;width:100%;padding:0;margin-bottom:0.5rem;font-size:1.5rem;line-height:inherit;}input[type='search']{-webkit-appearance:none;}output{display:inline-block;}svg:not(:root){overflow:hidden;vertical-align:middle;}[hidden]{display:none !important;}"],S.a.breakpoints.l,S.a.breakpoints.l,S.a.breakpoints.m,S.a.breakpoints.m,S.a.breakpoints.s,S.a.breakpoints.s,S.a.colors.color,S.a.colors.white,S.a.colors.link,S.a.colors.link,S.a.colors.linkHover,S.a.colors.link,S.a.colors.bg,S.a.colors.color);function D(){var e=L()(["\n  ",'\n  \n  html {\n    font-family: "Inconsolata", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n  }\n  \n  body {\n    background: url("','") #000;\n  }\n  \n  h1, h2, h3, h4, h5, h6 {\n    font-family: "Pacifico", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n  }\n\n  .gatsby-resp-image-wrapper {\n    margin: 2.75rem 0;\n  }\n']);return D=function(){return e},e}var R=Object(r.b)(D(),A,function(e){return e.theme.bgPattern}),q=r.d.main.withConfig({displayName:"Layout__AbsoluteWrapper",componentId:"y7buex-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;"]),H=function(e){var t=e.children,a=e.customSEO;return i.a.createElement(r.a,{theme:S.a},i.a.createElement(i.a.Fragment,null,!a&&i.a.createElement(ge,null),i.a.createElement(R,null),i.a.createElement("noscript",null,"To browse this site, please enable JavaScript."),i.a.createElement(q,null,t,i.a.createElement(x,null))))},W=H;H.propTypes={children:l.a.oneOfType([l.a.array,l.a.node]).isRequired,customSEO:l.a.bool},H.defaultProps={customSEO:!1};var O=a(170),Z=a.n(O),G=a(159),V=a.n(G),Y=r.d.div.withConfig({displayName:"ProjectHeader__Wrapper",componentId:"sc-86kuq0-0"})(["display:flex;position:relative;"]),F=r.d.div.withConfig({displayName:"ProjectHeader__Content",componentId:"sc-86kuq0-1"})(["margin:0 auto;width:100%;max-width:",";padding:2rem 1.0875rem 5rem 1.0875rem;color:",";"],function(e){return e.theme.maxWidths.general},function(e){return e.theme.colors.secondary}),J=Object(r.d)(p.Link).withConfig({displayName:"ProjectHeader__Back",componentId:"sc-86kuq0-2"})(["display:flex;flex-direction:row;align-items:center;justify-content:flex-start;img[data-info='back']{width:1.5rem;height:1.5rem;margin:0 1rem 0 0;}"]),U=r.d.div.withConfig({displayName:"ProjectHeader__Avatar",componentId:"sc-86kuq0-3"})(["height:3rem;width:3rem;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor;div{background-color:white;padding:13px 0 10px 8px;border-radius:50%;height:100%;width:100%;}div > img{width:90%;height:90%;}"]),X=Object(r.d)(c.c.h4).withConfig({displayName:"ProjectHeader__Name",componentId:"sc-86kuq0-4"})(["margin:0 0 0 1rem;color:",";"],function(e){return e.theme.colors.color}),Q=r.d.div.withConfig({displayName:"ProjectHeader__Details",componentId:"sc-86kuq0-5"})(["width:100%;margin-top:6rem;text-align:center;h1{color:",";}"],function(e){return e.theme.colors.color}),K=r.d.div.withConfig({displayName:"ProjectHeader__Text",componentId:"sc-86kuq0-6"})(["max-width:750px;margin:4rem auto 2rem auto;color:white;"]),$=function(e){var t=e.avatar,a=e.name,n=e.title,r=e.date,o=e.areas,l=e.text;return i.a.createElement(Y,null,i.a.createElement(F,null,i.a.createElement(J,{to:"/"},i.a.createElement("img",{src:V.a,"data-info":"back",alt:"Back to home","aria-label":"Back to home"}),i.a.createElement(U,null,i.a.createElement("div",null,i.a.createElement("img",{src:t,alt:a}))),i.a.createElement(X,null,a)),i.a.createElement(Q,null,i.a.createElement(c.a,{native:!0,config:c.d.slow,delay:200,from:{opacity:0,transform:"translate3d(0, 30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}},function(e){return i.a.createElement(c.c.h1,{style:e},n)}),i.a.createElement(c.a,{native:!0,config:c.d.slow,delay:600,from:{opacity:0},to:{opacity:1}},function(e){return i.a.createElement(c.c.div,{style:e},i.a.createElement("p",null,r),i.a.createElement("div",null,o.map(function(e,t){return i.a.createElement(i.a.Fragment,{key:e},t>0&&", ",e)})),l&&i.a.createElement(K,null,i.a.createElement(Z.a,null,l)))}))))},ee=$;$.propTypes={avatar:l.a.string.isRequired,name:l.a.string.isRequired,title:l.a.string.isRequired,date:l.a.string.isRequired,areas:l.a.array.isRequired,text:l.a.string.isRequired};var te=a(165),ae=a.n(te),ne=r.d.div.withConfig({displayName:"ProjectPagination__Wrapper",componentId:"nuewks-0"})(["display:flex;max-width:",";margin:0 auto;padding:3rem 0;a{color:",";display:flex;align-items:center;font-size:1.25rem;&:hover{color:",";}}justify-items:center;"],function(e){return e.theme.maxWidths.general},function(e){return e.theme.colors.color},function(e){return e.theme.colors.linkHover}),ie=r.d.div.withConfig({displayName:"ProjectPagination__Prev",componentId:"nuewks-1"})(["img{width:25px;height:25px;margin:0 1rem 0 0;}"]),re=r.d.div.withConfig({displayName:"ProjectPagination__Next",componentId:"nuewks-2"})(["img{width:25px;height:25px;margin:0 0 0 1rem;}margin-left:auto;"]),oe=function(e){var t=e.next,a=e.prev;return i.a.createElement(ne,null,a&&i.a.createElement(ie,null,i.a.createElement(p.Link,{to:a.fields.slug},i.a.createElement("img",{src:V.a,alt:"Arrow Left"}),a.frontmatter.title)),t&&i.a.createElement(re,null,i.a.createElement(p.Link,{to:t.fields.slug},t.frontmatter.title,i.a.createElement("img",{src:ae.a,alt:"Arrow Right"}))))},le=oe;oe.propTypes={next:l.a.object,prev:l.a.object},oe.defaultProps={next:null,prev:null};a(55);var ce=a(166),me=a(171),de=a.n(me),se=a(160),pe=a.n(se),ue=function(e){var t,a,n,r=e.postNode,o=e.postPath,l=e.postSEO,c=e.data.site.buildTime,m="/"===pe.a.pathPrefix?"":pe.a.pathPrefix,d=""+pe.a.siteUrl+m,s=""+d+(o||"");if(l){var p=r.frontmatter,u=p.cover.childImageSharp.resize.src;t=p.title+" | "+pe.a.siteTitle,a=r.excerpt||pe.a.siteDescription,n=""+d+u}else t=pe.a.siteTitleAlt,a=pe.a.siteDescription,n=""+d+pe.a.siteLogo;var g={"@context":"http://schema.org","@type":"WebPage",url:s,headline:pe.a.siteHeadline,inLanguage:"en",mainEntityOfPage:s,description:pe.a.siteDescription,name:pe.a.siteTitle,author:{"@type":"Person",name:pe.a.author},copyrightHolder:{"@type":"Person",name:pe.a.author},copyrightYear:"2018",creator:{"@type":"Person",name:pe.a.author},publisher:{"@type":"Person",name:pe.a.author},datePublished:"2019-01-07T10:30:00+01:00",dateModified:c,image:{"@type":"ImageObject",url:n}},h=[{"@type":"ListItem",item:{"@id":d,name:"Homepage"},position:1}],f=null;l&&(f={"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:pe.a.author},copyrightHolder:{"@type":"Person",name:pe.a.author},copyrightYear:r.parent.birthtime,creator:{"@type":"Person",name:pe.a.author},publisher:{"@type":"Organization",name:pe.a.author,logo:{"@type":"ImageObject",url:""+d+pe.a.siteLogo}},datePublished:r.parent.birthtime,dateModified:r.parent.mtime,description:a,headline:t,inLanguage:"en",url:s,name:t,image:{"@type":"ImageObject",url:n},mainEntityOfPage:s},h.push({"@type":"ListItem",item:{"@id":s,name:t},position:2}));var y={"@context":"http://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:h};return i.a.createElement(de.a,null,i.a.createElement("html",{lang:pe.a.siteLanguage}),i.a.createElement("title",null,t),i.a.createElement("meta",{name:"description",content:a}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("meta",{name:"gatsby-starter",content:"Gatsby Starter Portfolio Emilia"}),i.a.createElement("meta",{property:"og:locale",content:pe.a.ogLanguage}),i.a.createElement("meta",{property:"og:site_name",content:pe.a.ogSiteName?pe.a.ogSiteName:""}),i.a.createElement("meta",{property:"og:url",content:s}),l?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:a}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"og:image:alt",content:a}),i.a.createElement("meta",{property:"fb:app_id",content:pe.a.siteFBAppID?pe.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:pe.a.userTwitter?pe.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:url",content:pe.a.siteUrl}),i.a.createElement("meta",{name:"twitter:description",content:a}),i.a.createElement("meta",{name:"twitter:image",content:n}),i.a.createElement("meta",{name:"twitter:image:alt",content:a}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Inconsolata|Pacifico",rel:"stylesheet"}),!l&&i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),l&&i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(y)))},ge=function(e){return i.a.createElement(p.StaticQuery,{query:he,render:function(t){return i.a.createElement(ue,Object.assign({},e,{data:t}))},data:ce})};ue.propTypes={postNode:l.a.object,data:l.a.any.isRequired,postPath:l.a.string,postSEO:l.a.bool};var he="77616083";a.d(t,"a",function(){return w}),a.d(t,"b",function(){return x}),a.d(t,"c",function(){return T}),a.d(t,"d",function(){return W}),a.d(t,"e",function(){return ee}),a.d(t,"f",function(){return le}),a.d(t,"g",function(){return ge})}}]);
//# sourceMappingURL=component---src-pages-index-js-3d9eaee983f4b21d9f71.js.map