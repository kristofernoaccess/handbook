webpackJsonp([0xc23565d713b7],{253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(["\n  border: 1px solid ",";\n  border-radius: 3px;\n  padding: 25px;\n  font-size: 2rem;\n  color: ",";\n  display: inline-block;\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: white;\n    background: ",";\n  }\n"],["\n  border: 1px solid ",";\n  border-radius: 3px;\n  padding: 25px;\n  font-size: 2rem;\n  color: ",";\n  display: inline-block;\n  transition: all 0.3s ease;\n\n  &:hover {\n    color: white;\n    background: ",";\n  }\n"]),c=n(1),f=r(c),d=n(34),s=r(d),p=n(15),m=r(p),h=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.children;return f.default.createElement(s.default,{style:{border:"none"},to:this.props.to},f.default.createElement(b,null,e))},t}(c.Component);t.default=h;var b=m.default.div(u,function(e){return e.theme.brand},function(e){return e.theme.brand},function(e){return e.theme.brand});e.exports=t.default},56:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(22),f=r(c),d=n(16),s=r(d),p=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,a=void 0,o=void 0,l=void 0,i=void 0;if(r){var c=t.frontmatter;a=c.title,o=c.description?c.description:t.excerpt,l=c.cover,i=s.default.siteUrl+s.default.pathPrefix+n}else a=s.default.siteTitle,o=s.default.siteDescription,l=s.default.siteLogo;var d="/"===s.default.pathPrefix?"":s.default.pathPrefix;l=s.default.siteUrl+d+l;var p=s.default.siteUrl+s.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:a,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:a,image:l}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:a,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:l},description:o}]),u.default.createElement(f.default,null,u.default.createElement("meta",{name:"description",content:o}),u.default.createElement("meta",{name:"image",content:l}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?i:p}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:a}),u.default.createElement("meta",{property:"og:description",content:o}),u.default.createElement("meta",{property:"og:image",content:l}),u.default.createElement("meta",{property:"fb:app_id",content:s.default.siteFBAppID?s.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:s.default.userTwitter?s.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:a}),u.default.createElement("meta",{name:"twitter:description",content:o}),u.default.createElement("meta",{name:"twitter:image",content:l}))},t}(i.Component);t.default=p,e.exports=t.default},264:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=a(["\n  background: ",";\n  padding: ",";\n  text-align: center;\n"],["\n  background: ",";\n  padding: ",";\n  text-align: center;\n"]),c=a(["\n  padding: 50px 0;\n  & > h1 {\n    font-weight: 600;\n  }\n"],["\n  padding: 50px 0;\n  & > h1 {\n    font-weight: 600;\n  }\n"]),f=a(["\n  padding: ",";\n  max-width: ",";\n  margin: 0 auto;\n\n  .contributors {\n    max-width: 400px;\n    margin: 100px auto 0;\n  }\n"],["\n  padding: ",";\n  max-width: ",";\n  margin: 0 auto;\n\n  .contributors {\n    max-width: 400px;\n    margin: 100px auto 0;\n  }\n"]),d=n(1),s=r(d),p=n(22),m=r(p),h=n(15),b=r(h),y=n(56),g=r(y),E=n(16),w=r(E),x=n(253),v=r(x),_=n(72),O=r(_),T=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdown.edges;return s.default.createElement("div",{className:"index-container"},s.default.createElement(m.default,{title:w.default.siteTitle}),s.default.createElement(g.default,{postEdges:e}),s.default.createElement("main",null,s.default.createElement(P,null,s.default.createElement(O.default,null),s.default.createElement(j,null,s.default.createElement("img",{src:w.default.siteLogo,width:"150px",alt:""}),s.default.createElement("h1",null,w.default.siteTitle),s.default.createElement("h4",null,w.default.siteDescription))),s.default.createElement(k,null,s.default.createElement("h2",null,"A Gatsby Template for Content"),s.default.createElement("p",null,"Made for modern documentation sites. Table of Contents automatically generated from markdown files."," "),s.default.createElement(v.default,{to:"/lesson-one"},"See Your First Post"),s.default.createElement("div",{className:"contributors"},s.default.createElement("p",null,"Created by Eric Windmill."," ",s.default.createElement("a",{href:"https:twitter.com/ericwindmill"},"You should follow him on Twitter.")," ","Also, ",s.default.createElement("a",{href:"https://github.com/Levino"},"Levin Keller")," for making it better than I could","'","ve alone.")))))},t}(s.default.Component);t.default=T;var P=b.default.div(u,function(e){return e.theme.brand},function(e){return e.theme.sitePadding}),j=b.default.div(c),k=b.default.div(f,function(e){return e.theme.sitePadding},function(e){return e.theme.contentWidthLaptop});t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-6d3b23ca6100fc312eef.js.map