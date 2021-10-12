(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[5739],{5159:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},l=void 0,c={unversionedId:"reference/periphery/NonfungibleTokenPositionDescriptor",id:"version-V3/reference/periphery/NonfungibleTokenPositionDescriptor",isDocsHomePage:!1,title:"NonfungibleTokenPositionDescriptor",description:"Produces a string containing the data URI for a JSON metadata string",source:"@site/versioned_docs/version-V3/reference/periphery/NonfungibleTokenPositionDescriptor.md",sourceDirName:"reference/periphery",slug:"/reference/periphery/NonfungibleTokenPositionDescriptor",permalink:"/protocol/reference/periphery/NonfungibleTokenPositionDescriptor",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/periphery/NonfungibleTokenPositionDescriptor.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"NonfungiblePositionManager",permalink:"/protocol/reference/periphery/NonfungiblePositionManager"},next:{title:"SwapRouter",permalink:"/protocol/reference/periphery/SwapRouter"}},p=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"tokenURI",id:"tokenuri",children:[]},{value:"flipRatio",id:"flipratio",children:[]},{value:"tokenRatioPriority",id:"tokenratiopriority",children:[]}]}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Produces a string containing the data URI for a JSON metadata string"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,i.kt)("h3",{id:"tokenuri"},"tokenURI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tokenURI(\n    contract INonfungiblePositionManager positionManager,\n    uint256 tokenId\n  ) external returns (string)\n")),(0,i.kt)("p",null,"Produces the URI describing a particular token ID for a position manager"),(0,i.kt)("p",null,"Note this URI may be a data: URI with the JSON contents directly inlined"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"positionManager")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract INonfungiblePositionManager"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The position manager for which to describe the token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ID of the token for which to produce a description, which may not be valid")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"The")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract INonfungiblePositionManager"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URI of the ERC721-compliant metadata")))),(0,i.kt)("h3",{id:"flipratio"},"flipRatio"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function flipRatio(\n  ) public returns (bool)\n")),(0,i.kt)("h3",{id:"tokenratiopriority"},"tokenRatioPriority"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tokenRatioPriority(\n  ) public returns (int256)\n")))}s.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);