(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[901],{6090:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"fees",title:"Fees",tags:"protocol-overview, documentation"},c=void 0,s={unversionedId:"concepts/advanced-topics/fees",id:"version-V2/concepts/advanced-topics/fees",isDocsHomePage:!1,title:"Fees",description:"Liquidity provider fees",source:"@site/versioned_docs/version-V2/concepts/03-advanced-topics/01-fees.md",sourceDirName:"concepts/03-advanced-topics",slug:"/concepts/advanced-topics/fees",permalink:"/protocol/V2/concepts/advanced-topics/fees",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V2/concepts/03-advanced-topics/01-fees.md",version:"V2",sidebarPosition:1,frontMatter:{id:"fees",title:"Fees",tags:"protocol-overview, documentation"},sidebar:"version-V2/mySidebar",previous:{title:"Oracles",permalink:"/protocol/V2/concepts/core-concepts/oracles"},next:{title:"Pricing",permalink:"/protocol/V2/concepts/advanced-topics/pricing"}},p=[{value:"Liquidity provider fees",id:"liquidity-provider-fees",children:[]},{value:"Protocol Fees",id:"protocol-fees",children:[]},{value:"Protocol Charge Calculation",id:"protocol-charge-calculation",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"liquidity-provider-fees"},"Liquidity provider fees"),(0,i.kt)("p",null,"There is a ",(0,i.kt)("strong",{parentName:"p"},"0.3%")," fee for swapping tokens. ",(0,i.kt)("strong",{parentName:"p"},"This fee is split by liquidity providers proportional to their contribution to liquidity reserves.")),(0,i.kt)("p",null,"Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool. Fees are collected by burning liquidity tokens to remove a proportional share of the underlying reserves."),(0,i.kt)("p",null,"Since fees are added to liquidity pools, the invariant increases at the end of every trade. Within a single transaction, the invariant represents ",(0,i.kt)("inlineCode",{parentName:"p"},"token0_pool / token1_pool")," at the end of the previous transaction."),(0,i.kt)("p",null,"There are many community-developed tools to determine returns. You can also read more in the docs about how to think about ",(0,i.kt)("a",{parentName:"p",href:"../advanced-topics/understanding-returns"},"LP returns"),"."),(0,i.kt)("h2",{id:"protocol-fees"},"Protocol Fees"),(0,i.kt)("p",null,"At the moment there are no protocol fees. However, it is possible for a 0.05% fee to be turned on in the future."),(0,i.kt)("p",null,"More information about a potential future protocol fee can be found ",(0,i.kt)("a",{parentName:"p",href:"https://uniswap.org/blog/uniswap-v2/#path-to-sustainability"},"here"),"."),(0,i.kt)("h2",{id:"protocol-charge-calculation"},"Protocol Charge Calculation"),(0,i.kt)("p",null,"In the future, it is possible that a protocol-wide charge of 0.05% per trade will take effect. This represents \u2159th (16.6\u0305%) of the 0.30% fee. The fee is in effect if ",(0,i.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/factory/#feeto"},"feeTo")," is not ",(0,i.kt)("inlineCode",{parentName:"p"},"address(0)")," (",(0,i.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000"),"), indicating that feeTo is the recipient of the charge."),(0,i.kt)("p",null,"This amount would not affect the fee paid by traders, but would affect the amount received by liquidity providers."),(0,i.kt)("p",null,"Rather than calculating this charge on swaps, which would significantly increase gas costs for all users, the charge is instead calculated when liquidity is added or removed. See the ",(0,i.kt)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"whitepaper")," for more details."))}u.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);