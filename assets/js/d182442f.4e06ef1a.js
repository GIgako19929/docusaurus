"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87472],{59273:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(62540),i=t(63696),r=t(52711),l=t(49519);let o=i.forwardRef(function({name:e,children:n},t){let o=function(e){let n=e;for(;(0,i.isValidElement)(n);)[n]=i.Children.toArray(n.props.children);if("string"!=typeof n)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return n}(n),a=e?`${e}-${o}`:o,c=`#${a}`,d=(0,l.W6)();return(0,r.A)().collectAnchor(a),(0,s.jsx)("tr",{id:a,tabIndex:0,ref:d.location.hash===c?t:void 0,onClick:e=>{var n;let t="TD"===e.target.tagName.toUpperCase(),s=!!(null===(n=window.getSelection())||void 0===n?void 0:n.toString());t&&!s&&d.push(c)},onKeyDown:e=>{"Enter"===e.key&&d.push(c)},children:n.props.children})});function a({children:e,name:n}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[t,r]=i.Children.toArray(e.props.children),l=(0,i.useRef)(null);(0,i.useEffect)(()=>{var e;null===(e=l.current)||void 0===e||e.focus()},[l]);let a=i.Children.map(r.props.children,e=>(0,s.jsx)(o,{name:n,ref:l,children:e}));return(0,s.jsxs)("table",{className:"apiTable_e8hp",children:[t,(0,s.jsx)("tbody",{children:a})]})}},11844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});let s=JSON.parse('{"id":"api/misc/eslint-plugin/no-html-links","title":"no-html-links","description":"Ensure that the Docusaurus ` component is used instead of ` tags.","source":"@site/docs/api/misc/eslint-plugin/no-html-links.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin/no-html-links","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-html-links.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728059214000,"frontMatter":{"slug":"/api/misc/@docusaurus/eslint-plugin/no-html-links"},"sidebar":"api","previous":{"title":"\u{1F4E6} eslint-plugin","permalink":"/docs/api/misc/@docusaurus/eslint-plugin"},"next":{"title":"no-untranslated-text","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}}');var i=t(62540),r=t(43023),l=t(59273);let o={slug:"/api/misc/@docusaurus/eslint-plugin/no-html-links"},a="no-html-links",c={},d=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2}];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"no-html-links",children:"no-html-links"})}),"\n","\n",(0,i.jsxs)(n.p,{children:["Ensure that the Docusaurus ",(0,i.jsx)(n.a,{href:"/docs/docusaurus-core#link",children:(0,i.jsx)(n.code,{children:"<Link>"})})," component is used instead of ",(0,i.jsx)(n.code,{children:"<a>"})," tags."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<Link>"})," component has prefetching and preloading built-in. It also does build-time broken link detection, and helps Docusaurus understand your site's structure better."]}),"\n",(0,i.jsx)(n.h2,{id:"details",children:"Rule Details"}),"\n",(0,i.jsxs)(n.p,{children:["Examples of ",(0,i.jsx)(n.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<a href="/page">go to page!</a>\n\n<a href="https://x.com/docusaurus" target="_blank">X</a>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Examples of ",(0,i.jsx)(n.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import Link from \'@docusaurus/Link\'\n\n<Link to="/page">go to page!</Link>\n\n<Link to="https://x.com/docusaurus">X</Link>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ignoreFullyResolved"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{children:["Set to true will not report any ",(0,i.jsx)(n.code,{children:"<a>"})," tags with absolute URLs including a protocol."]})]})})]})})]})}function h(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(63696);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);