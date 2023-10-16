"use strict";(self.webpackChunkcryptoxpress_docs_external=self.webpackChunkcryptoxpress_docs_external||[]).push([[7213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3612:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7294),i=r(6010),o=r(5281),a=r(5999);const s={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const l={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function c(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=n.Children.toArray(e),r=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=n.createElement(n.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r,rest:i}}(e.children);return{...e,title:e.title??t,children:r}}function p(e){const{children:t,type:r,title:a,icon:p}=c(e),u=function(e){const t=d[e]??e,r=l[t];return r||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),l.info)}(r),m=a??u.label,{iconComponent:g}=u,h=p??n.createElement(g,null);return n.createElement("div",{className:(0,i.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,s.admonition)},n.createElement("div",{className:s.admonitionHeading},n.createElement("span",{className:s.admonitionIcon},h),m),n.createElement("div",{className:s.admonitionContent},t))}},4546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>w,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var n=r(7462),i=(r(7294),r(3905));const o=r.p+"assets/images/futures_banner-645f8402ae86601ae186f26ce088d96f.png",a=r.p+"assets/images/order_banner_1-8ebebea72e307e168633377f5a28a80d.png",s=r.p+"assets/images/order_banner_2-593fc95929a62ce13da7ebf39864f0a2.png",l=r.p+"assets/images/leverage_banner_1-f51bc8b1ccfa240fa176702db9520b09.png",d=r.p+"assets/images/leverage_banner_2-cefb9e7938e56cb6d3f704cde2101d64.png",c=r.p+"assets/images/margin_banner_1-82c033e88af44abfb706dc068908a377.png",p=r.p+"assets/images/margin_banner_2-b644583407258acd8e4dcc6206489023.png";var u=r(3612),m=r(9960);const g={title:"Understanding your Futures",sidebar_label:"Interface",sidebar_position:2},h=void 0,f={unversionedId:"trading/futures_trading/orders",id:"trading/futures_trading/orders",title:"Understanding your Futures",description:"The CryptoXpress Application also offers a Futures trading feature, allowing users to engage with contracts between investors betting on a cryptocurrency future price.",source:"@site/docs/trading/futures_trading/orders.md",sourceDirName:"trading/futures_trading",slug:"/trading/futures_trading/orders",permalink:"/github_deploy/latest/trading/futures_trading/orders",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Understanding your Futures",sidebar_label:"Interface",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Trading Guide",permalink:"/github_deploy/latest/trading/futures_trading/future_trade"},next:{title:"Trading fees",permalink:"/github_deploy/latest/trading/futures_trading/charges"}},y={},v=[{value:"Mastering the Order Book: Unveiling the Secrets to Smart Trading!",id:"mastering-the-order-book-unveiling-the-secrets-to-smart-trading",level:2},{value:"Mastering Order Types: Your Blueprint for Precision in Crypto Trading!",id:"mastering-order-types-your-blueprint-for-precision-in-crypto-trading",level:2},{value:"Limit Order",id:"limit-order",level:3},{value:"Market Order",id:"market-order",level:3},{value:"Stop Limit Order",id:"stop-limit-order",level:3},{value:"Stop Market Order",id:"stop-market-order",level:3},{value:"Unlocking the Power of Leverage in Futures: Your Guide to Fine-Tuning Control!",id:"unlocking-the-power-of-leverage-in-futures-your-guide-to-fine-tuning-control",level:2},{value:"Uncover the Power of Margins: Your Path to Leverage and Profitability!",id:"uncover-the-power-of-margins-your-path-to-leverage-and-profitability",level:2}],k={toc:v},b="wrapper";function w(e){let{components:t,...r}=e;return(0,i.kt)(b,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"overview-header"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The CryptoXpress Application also offers a Futures trading feature, allowing users to engage with contracts between investors betting on a cryptocurrency future price."),(0,i.kt)("p",null,"CryptoXpress provides a variety of order types for users engaging in Futures Trading. These orders empower users to implement strategic trading approaches and optimize their trading activities. Let's delve into the common order types available in CryptoXpress Spot Trading."),(0,i.kt)("h4",null,"Quick Links"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)(m.Z,{to:"/latest/basics/getting_started/import_wallet",mdxType:"Link"},"Import Wallet from other App")),(0,i.kt)("li",null,(0,i.kt)(m.Z,{to:"/latest/basics/getting_started/overview",mdxType:"Link"},"Learn more about how CryptoXpress works."))))),(0,i.kt)("h2",{id:"mastering-the-order-book-unveiling-the-secrets-to-smart-trading"},"Mastering the Order Book: Unveiling the Secrets to Smart Trading!"),(0,i.kt)("p",null,"The order book is a record of all active ",(0,i.kt)("strong",{parentName:"p"},"buy")," and ",(0,i.kt)("strong",{parentName:"p"},"sell")," ",(0,i.kt)("strong",{parentName:"p"},"orders")," for an asset, sorted by their respective prices."),(0,i.kt)("center",null,(0,i.kt)("img",{src:o,width:"270"})),(0,i.kt)("p",null,"In the image above, you can see a snapshot of the ",(0,i.kt)("strong",{parentName:"p"},"order book")," for the BTC/USDT pair on CryptoXpress Futures Screen. Buy orders are color-coded in green and are displayed at specific price levels, while sell orders are shown in red."),(0,i.kt)("p",null,"Order books are a valuable tool for traders as they offer insights into the levels of ",(0,i.kt)("strong",{parentName:"p"},"buyer")," and ",(0,i.kt)("strong",{parentName:"p"},"seller")," interest at different prices. This information can be instrumental in identifying potential support and resistance levels in the market."),(0,i.kt)("h2",{id:"mastering-order-types-your-blueprint-for-precision-in-crypto-trading"},"Mastering Order Types: Your Blueprint for Precision in Crypto Trading!"),(0,i.kt)("p",null,"When placing orders CyptoXpress provides several options to which types suits you best :"),(0,i.kt)("center",null,(0,i.kt)("div",{className:"items-center"},(0,i.kt)("img",{src:a,width:"270",style:{margin:"5px 10px 5px 5px"}}),(0,i.kt)("img",{src:s,width:"270",style:{margin:"5px 5px 5px 10px"}}))),(0,i.kt)("h3",{id:"limit-order"},"Limit Order"),(0,i.kt)("p",null,"A limit order is a type of order where you set a specific price at which you want to buy or sell an asset. This order will only go through if the market price reaches or surpasses the price you've defined. Essentially, limit orders enable you to try to buy at a lower price or sell at a higher price than what the asset is currently trading for."),(0,i.kt)("h3",{id:"market-order"},"Market Order"),(0,i.kt)("p",null,'A market order is a straightforward way to buy or sell a cryptocurrency at the current best available price. It gets matched with existing limit orders on the order book. When you use a market order, you\'ll incur fees as the one making the trade happen, often referred to as a "market taker."'),(0,i.kt)("h3",{id:"stop-limit-order"},"Stop Limit Order"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"stop-limit")," order is a strategic trading tool that merges a stop trigger with a limit order. With this order type, traders can define the minimum profit they're comfortable with or the maximum risk they're willing to take in a trade. When the price hits the trigger point, a limit order is automatically executed, even if the user isn't actively logged into the platform. Additionally, stop-limit orders can be strategically placed by considering various market indicators, like support and resistance levels, for optimal trading outcomes."),(0,i.kt)("h3",{id:"stop-market-order"},"Stop Market Order"),(0,i.kt)("p",null,"Much like a ",(0,i.kt)("strong",{parentName:"p"},"stop-limit")," order, a ",(0,i.kt)("strong",{parentName:"p"},"stop market")," order employs a stop price as a triggering point. However, when this stop price is met, it activates a market order instead."),(0,i.kt)("h2",{id:"unlocking-the-power-of-leverage-in-futures-your-guide-to-fine-tuning-control"},"Unlocking the Power of Leverage in Futures: Your Guide to Fine-Tuning Control!"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"CryptoXpress Futures"),", you have the flexibility to fine-tune your ",(0,i.kt)("strong",{parentName:"p"},"leverage")," for each contract. To make these ",(0,i.kt)("strong",{parentName:"p"},"adjustments"),", simply tap on the middle dropdown, located just below your ",(0,i.kt)("strong",{parentName:"p"},"selected contract"),". This action will open a Bottomsheet, allowing you to easily customize your leverage settings. Once you've made your desired changes, just ",(0,i.kt)("strong",{parentName:"p"},"confirm"),", and you're all set!"),(0,i.kt)("center",null,(0,i.kt)("div",{className:"items-center"},(0,i.kt)("img",{src:l,width:"270",style:{margin:"5px 10px 5px 5px"}}),(0,i.kt)("img",{src:d,width:"270",style:{margin:"5px 5px 5px 10px"}}))),(0,i.kt)(u.Z,{type:"danger",icon:"\ud83d\udca1",title:"Embrace Risk, but Respect the Danger . . .",mdxType:"Admonition"},(0,i.kt)("p",null,"It's important to note that as your position size increases, your available leverage decreases. Conversely, when your position size is smaller, you can use higher leverage. However, it's crucial to understand that employing greater leverage also comes with an elevated risk of liquidation.")),(0,i.kt)("h2",{id:"uncover-the-power-of-margins-your-path-to-leverage-and-profitability"},"Uncover the Power of Margins: Your Path to Leverage and Profitability!"),(0,i.kt)("p",null,"CryptoXpress offers you the flexibility to manage margin for your current contract and positions effortlessly. To access the margin menu, simply tap on the currently selected margin name under the contract. A bottom sheet will appear, providing you with two options: Cross and Isolated."),(0,i.kt)("center",null,(0,i.kt)("div",{className:"items-center"},(0,i.kt)("img",{src:c,width:"270",style:{margin:"5px 10px 5px 5px"}}),(0,i.kt)("img",{src:p,width:"270",style:{margin:"5px 5px 5px 10px"}}))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cross Margin Mode")," : In Cross Margin mode, the entire margin balance is shared across open positions to avoid liquidation. If Cross Margin is enabled, the trader risks losing their entire margin balance along with any open positions in the event of a liquidation. Any realized PnL from another position can aid a losing position that is close to being liquidated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Isolated Margin Mode")," : Isolated Margin is a specific margin allocated to each individual position, enabling traders to manage risk by limiting the margin allocated to each trade. In this mode, you have the flexibility to adjust the margin balance for each position independently.\nNotably, in Isolated Margin mode, if a position faces liquidation, only the Isolated Margin balance is at risk, rather than your entire margin balance. This provides a more granular and controlled approach to managing your trading risk."))),(0,i.kt)("p",null,"To switch the margin mode, simply choose your desired mode from the bottom sheet options and then tap ",(0,i.kt)("strong",{parentName:"p"},'"Confirm"')," to apply the new margin mode to the current contract."))}w.isMDXComponent=!0}}]);