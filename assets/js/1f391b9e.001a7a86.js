"use strict";(self.webpackChunknbkparks_community=self.webpackChunknbkparks_community||[]).push([[3085],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(7294),l=n(6010),i=n(2434),c=n(3905),s=n(4689),m=n(1575),r=n(9548),o="mdxPageWrapper_zHyg";var d=function(e){var a=e.content,n=a.metadata,d=n.title,v=n.description,u=n.permalink,f=n.frontMatter,N=f.wrapperClassName,k=f.hide_table_of_contents;return t.createElement(i.Z,{title:d,description:v,permalink:u,wrapperClassName:null!=N?N:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!k&&"col--8")},t.createElement(c.Zo,{components:s.Z},t.createElement(a,null))),!k&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(m.Z,{toc:a.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},1575:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7462),l=n(3366),i=n(7294),c=n(6010),s=n(5002),m="tableOfContents_cNA8",r=["className"];var o=function(e){var a=e.className,n=(0,l.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(7462),l=n(3366),i=n(7294),c=n(9548),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,k=(0,l.Z)(e,s),g=(0,c.LU)(),_=null!=f?f:g.tableOfContents.minHeadingLevel,p=null!=N?N:g.tableOfContents.maxHeadingLevel,C=(0,c.DA)({toc:a,minHeadingLevel:_,maxHeadingLevel:p}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:_,maxHeadingLevel:p}}),[d,u,_,p]);return(0,c.Si)(h),i.createElement(m,(0,t.Z)({toc:C,className:r,linkClassName:d},k))}}}]);