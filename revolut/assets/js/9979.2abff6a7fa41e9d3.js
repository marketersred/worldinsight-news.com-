!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a56543a1-7582-4799-b926-9e09798fe215",t._sentryDebugIdIdentifier="sentry-dbid-a56543a1-7582-4799-b926-9e09798fe215")}catch(t){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9979],{47154:function(t,e,a){a.d(e,{r:function(){return s}});var i=a(49363),o=a(39072),n=a(44547),r=a(63537);function l(t){return(0,r.hj)(t)?"repeat("+t+", 1fr)":t}var c=(0,n.By)({template:{property:"gridTemplate"},columns:{property:"gridTemplateColumns",transform:l},rows:{property:"gridTemplateRows",transform:l},autoFlow:{property:"gridAutoFlow"},autoRows:{property:"gridAutoRows"},autoColumns:{property:"gridAutoColumns"},placeItems:!0,placeContent:!0}),d=a(27061),s=(0,i.ZP)(d.x).withConfig({displayName:"Grid",componentId:"rui__sc-11lbuez-0"})(["display:grid;",";",";"],o.S,c)},49979:function(t,e,a){a.r(e),a.d(e,{default:function(){return tX}});var i,o,n,r,l,c,d,s,g=a(85893),u=a(28193),m=a(37736),p=a(49363);(i=l||(l={})).Media="media",i.Tabs="tabs",i.Carousel="carousel",i.Cards="cards",(o=c||(c={})).Left="left",o.Center="center",o.Right="right",(n=d||(d={})).Default="default",n.Difference="difference",(r=s||(s={})).None="none",r.GradientTop="gradient-top";var h=a(84353),b=a(95384),x=a(20529),f=a(67294),v=a(56607),S=a(37903),C=a(47154),y=a(88601),w=a(42028),W=a(69672),j=a(64478),k=a(47887),T=a(11163),I=a(62663),A=a(49390),R=a(45936);let L=3/4,P=5/3,B=9/16,M=360/508,H=450/534,E={all:388,lg:500,xxl:718},D={all:{padding:48,margin:24,pageIndicatorHeight:6,pageIndicatorOffset:16,tabsHeight:42},lg:{padding:64,margin:24,pageIndicatorHeight:6,pageIndicatorOffset:24,tabsHeight:42},xxl:{padding:80,margin:48,pageIndicatorHeight:6,pageIndicatorOffset:32,tabsHeight:56}},_=(t,e)=>{let{locale:a}=(0,T.useRouter)(),{language:i}=(0,R.i4)(a),[o,n]=(0,f.useState)(0),[r,l]=(0,f.useState)(0),c=(0,f.useRef)(null),[d,s]=(0,f.useState)(!1),g=(0,f.useRef)(!0),u="en"!==i?11200:8e3;(0,k.t)(c,t=>s(t),.2),(0,I.G)(c);let m=(0,f.useCallback)(function(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e&&(g.current=!1),l(o),n(t)},[o]);return(0,f.useEffect)(()=>{d||(g.current=!0)},[d]),(0,A.Y)(()=>{m((o+1)%t.length,!1)},d&&g.current?u:null),{content:e,items:t,autoplay:g.current&&d,activeItem:t[o],activeIndex:o,prevActiveItem:t[r],prevActiveIndex:r,updateActiveIndex:m,blockRef:c,animationDuration:u}},G=(0,f.createContext)(void 0),Z=t=>{let{children:e,items:a,content:i}=t,o=_(a,i);return(0,g.jsx)(G.Provider,{value:o,children:e})},z=()=>{let t=(0,f.useContext)(G);if(void 0===t)throw Error("`useFeatureItemsBlockContext` is accessible in `FeatureItemsBlockProvider` component only");return t},N="transform ".concat(300,"ms ease-in-out"),U="opacity ".concat(300,"ms ease-in-out"),F=(0,p.ZP)(v.g).withConfig({componentId:"sc-c022ad21-0"})(t=>{let{backgroundAlign:e,align:a}=t;return{flexShrink:0,maxWidth:W.W9.layoutMaxWidth,gap:m.W.space.s16,paddingLeft:m.W.space.s20,paddingRight:m.W.space.s20,alignItems:"start",marginBottom:m.W.space.s24,["@media ".concat(m.W.media.md)]:{alignItems:"center"},["@media ".concat(m.W.media.lg)]:{gap:m.W.space.s24,paddingLeft:0,paddingRight:0,alignItems:null!=a?a:void 0,marginBottom:e===c.Center?m.W.space.s32:0},["@media ".concat(m.W.media.xxl)]:{gap:m.W.space.s32,marginBottom:e===c.Center?m.W.space.s48:0}}}),O=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(e=>setTimeout(e,t))},V=(0,f.forwardRef)((t,e)=>{let{color:a="foreground",title:i,description:o,footnote:n,caption:r,button:l,buttonSecondary:d,backgroundAlign:s,...u}=t,m=(0,j.Ty)(),p=m(n),h=m(o),b=l||d;return(0,g.jsxs)(F,{color:a,backgroundAlign:s,ref:e,...u,children:[r&&(0,g.jsx)(w.x,{color:"grey-tone-50",variant:"h6",children:r}),i&&(0,g.jsx)(w.x,{use:"h2",variant:"h2",align:u.align===c.Center?"center":"left",disableScalingOnMobiles:!0,whiteSpace:"pre-wrap",children:i}),(0,g.jsxs)(v.g,{gap:{all:"s-4",md:"s-8"},width:"center"===u.align?{all:"100%",lg:"60%",xxl:"80%"}:void 0,children:[h&&(0,g.jsx)(w.x,{variant:"subtitle1",children:h}),p&&(0,g.jsx)(w.x,{variant:"small",children:p})]}),b&&(0,g.jsxs)(S.U,{gap:"s-8",mt:{all:"s-4",lg:"s-8"},children:[l&&(0,g.jsx)(y.z,{variant:"primary",link:l.link,children:l.label}),d&&(0,g.jsx)(y.z,{variant:"secondary",link:d.link,children:d.label})]})]})});V.displayName="FeatureItemsBlockMain";let X=async(t,e)=>{let a=t.childNodes,i=e.childNodes;t.style.visibility="visible",e.style.visibility="visible",a.forEach((t,e)=>{let a=i[e],o=null==a?void 0:a.offsetTop,n=null==a?void 0:a.style,r=null==t?void 0:t.style;if(o&&n&&r){let e=o-t.offsetTop;r.transform="translateY(".concat(e,"px)"),n.opacity="1"}r&&(r.opacity="0")}),await O(),a.forEach((t,e)=>{let a=i[e],o=null==a?void 0:a.style,n=null==t?void 0:t.style;n&&(n.transition=N),o&&n&&t.textContent!==a.textContent&&(o.transition=U,n.transition="".concat(N,", ").concat(U))}),await O(),a.forEach(t=>{t.style.transform="translateY(".concat(0,"px)"),t.style.opacity="1"}),i.forEach(t=>t.style.opacity="0"),await O(300),a.forEach(t=>t.style.transition="none"),i.forEach(t=>t.style.transition="none"),t.style.visibility="visible",e.style.visibility="hidden"},Y=t=>{let{caption:e,alignSelf:a}=t,{activeIndex:i,prevActiveIndex:o,content:{title:n,description:r,button:l,footnote:d,style:{color:s,align:u=c.Left}},items:m}=z(),p=(0,f.useRef)(null),h=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let t=p.current,e=h.current;t&&e&&X(t,e)},[i]),(0,g.jsx)(C.r,{template:"'text'",gridArea:"content",children:m.map((t,m)=>{let{title:b,description:x,footnote:f,button:v,style:{color:S}={}}=t,C=null;return i===m?C=p:o===m&&(C=h),(0,g.jsx)(V,{ref:C,gridArea:"text",color:null!=S?S:s,title:null!=b?b:n,caption:e,description:null!=x?x:r,footnote:null!=f?f:d,button:null!=v?v:l,backgroundAlign:u,align:u===c.Center?"center":"start",alignSelf:a,style:{visibility:i===m?"visible":"hidden"}},m)})})};var J=a(96243),q=a(80398),Q=a(41820);let K=t=>{let{item:e,ratio:a,imageTitle:i,active:o=!0,objectFit:n="contain",children:r,...l}=t,c=(0,Q.P)(e.video,e.videoSmall),d=(0,Q.P)(e.image,e.imageSmall);return c||d?(0,g.jsxs)(u.Ig,{height:"100%",style:{aspectRatio:a},...l,children:[c&&(0,g.jsx)(q.I,{active:o,video:c.value,poster:d,options:c.options,width:"100%",backgroundSize:n,prefersCoverOnMobile:!e.videoSmall}),!c&&d&&(0,g.jsx)(J.x,{image:d,backgroundSize:n,prefersCoverOnMobile:!e.imageSmall,title:i}),r]}):null};var $=a(27061),tt=a(16678);let te=(0,p.ZP)($.x).withConfig({componentId:"sc-c250207e-0"})(t=>{let{coverAlign:e="center"}=t;return{position:"relative",width:"100%",maxWidth:W.W9.layoutMaxWidth,textAlign:"start",paddingTop:D.all.padding,paddingBottom:e&&"center"!==e?0:D.all.padding,["@media ".concat(m.W.media.lg)]:{paddingTop:D.lg.padding,paddingBottom:D.lg.padding},["@media ".concat(m.W.media.xxl)]:{paddingTop:D.xxl.padding,paddingBottom:D.xxl.padding}}},tt.bU({prop:"contentAlign",variants:{[c.Left]:{display:"grid",gridTemplateAreas:"'content' 'media'",gridTemplateRows:"auto 1fr",gridTemplateColumns:"1fr",justifyContent:"space-between",textAlign:"start",["@media ".concat(m.W.media.md)]:{textAlign:"center"},["@media ".concat(m.W.media.lg)]:{gridTemplateAreas:"'content media'",gridTemplateRows:"initial",gridTemplateColumns:"488px 450px",justifyContent:"space-between",textAlign:"start"},["@media ".concat(m.W.media.xxl)]:{gridTemplateColumns:"696px 600px"}},[c.Center]:{display:"grid",gridTemplateAreas:"'content' 'media'",gridTemplateRows:"auto 1fr",gridTemplateColumns:"auto",alignContent:"center",textAlign:"start",["@media ".concat(m.W.media.md)]:{textAlign:"center"}},[c.Right]:{display:"grid",gridTemplateAreas:"'content' 'media'",gridTemplateRows:"auto 1fr",gridTemplateColumns:"1fr",justifyContent:"space-between",textAlign:"start",["@media ".concat(m.W.media.md)]:{textAlign:"center"},["@media ".concat(m.W.media.lg)]:{gridTemplateAreas:"'media content'",gridTemplateRows:"initial",gridTemplateColumns:"450px 488px",textAlign:"start"},["@media ".concat(m.W.media.xxl)]:{gridTemplateColumns:"600px 696px"}}}}));var ta=a(14452);let ti=(t,e)=>{var a,i,o,n,r,l,c,d,s,g,u,m,p,h,b,x,f;return(null===(i=t.cover)||void 0===i?void 0:null===(a=i.image)||void 0===a?void 0:a.value)===(null===(n=e.cover)||void 0===n?void 0:null===(o=n.image)||void 0===o?void 0:o.value)&&(null===(l=t.cover)||void 0===l?void 0:null===(r=l.imageSmall)||void 0===r?void 0:r.value)===(null===(c=e.cover)||void 0===c?void 0:c.imageSmall)&&(null===(s=t.cover)||void 0===s?void 0:null===(d=s.video)||void 0===d?void 0:d.value)===(null===(u=e.cover)||void 0===u?void 0:null===(g=u.video)||void 0===g?void 0:g.value)&&(null===(p=t.cover)||void 0===p?void 0:null===(m=p.videoSmall)||void 0===m?void 0:m.value)===(null===(b=e.cover)||void 0===b?void 0:null===(h=b.videoSmall)||void 0===h?void 0:h.value)&&(null===(x=t.style)||void 0===x?void 0:x.backgroundColor)===(null===(f=e.style)||void 0===f?void 0:f.backgroundColor)},to=t=>{let{items:e,activeIndex:a,backgroundColor:i}=t;return e.map((t,o)=>{var n,r,l,c,d,s,u;let m=o===a,p=ti(t,e[a]);return(0,g.jsx)(ta.W,{active:m||p,image:null===(n=t.cover)||void 0===n?void 0:n.image,imageSmall:null===(r=t.cover)||void 0===r?void 0:r.imageSmall,video:null===(l=t.cover)||void 0===l?void 0:l.video,videoSmall:null===(c=t.cover)||void 0===c?void 0:c.videoSmall,align:null===(d=t.cover)||void 0===d?void 0:d.align,backgroundColor:null!==(u=null===(s=t.style)||void 0===s?void 0:s.backgroundColor)&&void 0!==u?u:i,opacity:m?void 0:p?1:0},o)})},tn={all:{height:446},lg:{height:600},xxl:{height:860}},tr=(0,p.ZP)(u.e2).withConfig({componentId:"sc-58e9d822-0"})(t=>{let{variant:e}=t;return{top:0,bottom:0,margin:"auto",maxHeight:"100%",left:"center"===e?0:20,right:"center"===e?0:20,["@media ".concat(m.W.media.lg)]:{left:0,right:0}}}),tl=()=>{var t,e,a,i,o;let{activeItem:n,blockRef:r,content:{title:l,caption:d,description:s,button:m,footnote:p,style:{color:f,align:v=c.Left,backgroundColor:S}}}=z(),{title:C=l,description:y=s,footnote:w=p,button:W=m,caption:j=d,style:{color:k=f,backgroundColor:T=S}={}}=n,I=(0,b.b)("md"),A=(0,b.b)("lg"),R=v===c.Center,B=!(null===(t=n.cover)||void 0===t?void 0:t.align)||(null===(e=n.cover)||void 0===e?void 0:e.align)==="center",M=R&&I?P:L;return(0,g.jsxs)(g.Fragment,{children:[(B||A)&&(0,g.jsx)(to,{items:[n],backgroundColor:T,activeIndex:0}),!B&&!A&&(0,g.jsx)(x.X,{backgroundColor:null!==(o=null===(a=n.style)||void 0===a?void 0:a.backgroundColor)&&void 0!==o?o:T}),(0,g.jsxs)(te,{contentAlign:v,coverAlign:null===(i=n.cover)||void 0===i?void 0:i.align,ref:r,children:[(0,g.jsx)(V,{gridArea:"content",color:k,title:C,caption:j,description:y,footnote:w,button:W,backgroundAlign:v,align:v===c.Center?"center":"start",alignSelf:{all:"flex-start",md:"center"}}),(0,g.jsx)(u.Ig,{gridArea:"media",width:"100%",height:"100%",alignSelf:"center",minHeight:{all:B?tn.all.height:"initial",md:"initial"},maxHeight:{all:tn.all.height,lg:tn.lg.height,xxl:tn.xxl.height},children:(0,g.jsx)(tr,{variant:R?"center":"default",style:{aspectRatio:R?void 0:M},children:(0,g.jsx)(K,{item:n,ratio:M,width:"100%",height:"100%",imageTitle:C})})}),!B&&!A&&(0,g.jsx)(h.o,{width:"100%",gridArea:"media",ratio:L,children:(0,g.jsx)(to,{items:[n],backgroundColor:T,activeIndex:0})})]})]})};var tc=a(76335);let td=(0,p.ZP)(u.e2).withConfig({componentId:"sc-aa5b62e4-0"})({top:0,left:0,bottom:0,right:0,transition:"opacity ".concat(x.v,"ms ease-in-out")}),ts=(0,p.ZP)(S.U).withConfig({componentId:"sc-aa5b62e4-1"})({gap:m.W.size.s12,maxWidth:"100vw",paddingLeft:m.W.size.s20,paddingRight:m.W.size.s20,marginLeft:m.W.space.n20,marginRight:m.W.space.n20,overflowX:"scroll",msOverflowStyle:"none",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"}}),tg=(0,p.ZP)(y.z).withConfig({componentId:"sc-aa5b62e4-2"})(t=>{let{active:e,autoplay:a,hasBackground:i,animationDuration:o}=t,n=i?m.W.color.grey10:m.W.color.background,r="transparent";return e?r=m.W.color.foreground:i&&(r=(0,tc.O)(m.W.colorChannel.foreground,.1)),{position:"relative",height:"42px",paddingLeft:e?"26px":"24px",paddingRight:e?"26px":"24px",minWidth:"min-content",["@media ".concat(m.W.media.xxl)]:{height:"56px",paddingLeft:e?"34px":"32px",paddingRight:e?"34px":"32px"},backgroundColor:r,backgroundImage:"unset",color:e?m.W.color.background:m.W.color.foreground,borderColor:e?"transparent":m.W.color.foreground,border:e?"none":"2px solid",WebkitTapHighlightColor:"transparent",backdropFilter:"blur(16px)",transition:"".concat(m.W.transition.background," ").concat(m.W.transition.text," ").concat(m.W.transition.opacity," ").concat(m.W.transition.shadow," border-color ").concat(m.W.timing.md),"&:hover":{backgroundColor:e?m.W.color.foreground:m.W.color.shimmer},"&:active":{opacity:e?1:.8,backgroundColor:e?m.W.color.foreground:"transparent"},"&:disabled":{color:m.W.color.grey50},"&:before":{position:"absolute",content:'""',inset:0,borderRadius:m.W.radius.round,opacity:i?1:.15,transition:e&&a?"background-size ".concat(o,"ms linear"):"none",backgroundSize:e&&a?"100% 100%":"0 100%",backgroundImage:"linear-gradient(".concat(n,", ").concat(n,")"),backgroundRepeat:"no-repeat",zIndex:-1}}}),tu=()=>{var t,e,a,i,o;let{items:n,activeItem:r,activeIndex:l,updateActiveIndex:c,autoplay:d,animationDuration:s}=z(),u=!!(null!==(o=null!==(i=null===(t=r.style)||void 0===t?void 0:t.backgroundColor)&&void 0!==i?i:null===(e=r.cover)||void 0===e?void 0:e.image)&&void 0!==o?o:null===(a=r.cover)||void 0===a?void 0:a.video),m=(0,f.useRef)(null),p=(0,f.useRef)(null);return(0,f.useEffect)(()=>{var t,e;let a=m.current,i=p.current,o=null===(t=m.current)||void 0===t?void 0:t.children.item(l);if(a&&i&&o){let t=o.offsetLeft-i.getBoundingClientRect().width/2+o.getBoundingClientRect().width/2;null===(e=m.current)||void 0===e||e.scrollTo({left:t,top:0,behavior:"smooth"})}},[l]),(0,g.jsx)($.x,{gridArea:"tabs",overflow:{all:"visible",md:"hidden"},alignSelf:"flex-start",width:"fit-content",maxWidth:"100%",px:{all:"s-20",lg:0},mx:"auto",mt:{all:"s-16",md:"s-24",xxl:"s-32"},ref:p,children:(0,g.jsx)(ts,{role:"tablist",ref:m,children:n.map((t,e)=>(0,g.jsx)(tg,{role:"tab",autoplay:d,hasBackground:u,animationDuration:s,onClick:()=>c(e),variant:"secondary",active:e===l,"aria-selected":e===l,children:t.caption},e))})})},tm=(0,p.ZP)(te).withConfig({componentId:"sc-aa5b62e4-3"})({position:"relative"},tt.bU({prop:"contentAlign",variants:{[c.Left]:{paddingBottom:D.all.padding+D.all.tabsHeight,gridTemplateAreas:"'content' 'media' 'tabs'",gridTemplateRows:"auto 1fr auto",justifyContent:"space-between",["@media ".concat(m.W.media.lg)]:{paddingBottom:D.lg.padding+D.lg.tabsHeight,gridTemplateAreas:"'content media' '. tabs'",gridTemplateRows:"1fr auto"},["@media ".concat(m.W.media.xxl)]:{paddingBottom:D.xxl.padding+D.xxl.tabsHeight}},[c.Center]:{alignContent:"initial",gridTemplateAreas:"'content' 'media' 'tabs'",gridTemplateRows:"auto 1fr auto",height:"100%",minHeight:"640px",["@media ".concat(m.W.media.lg)]:{minHeight:"max(640px, 100vh)"},["@media ".concat(m.W.media.xxl)]:{minHeight:"max(864px, 100vh)"}},[c.Right]:{paddingBottom:D.all.padding+D.all.tabsHeight,gridTemplateAreas:"'content' 'media' 'tabs'",gridTemplateRows:"auto 1fr auto",justifyContent:"space-between",["@media ".concat(m.W.media.lg)]:{paddingBottom:D.lg.padding+D.lg.tabsHeight,gridTemplateAreas:"'media content' 'tabs .'",gridTemplateRows:"1fr auto"},["@media ".concat(m.W.media.xxl)]:{paddingBottom:D.xxl.padding+D.xxl.tabsHeight}}}})),tp=t=>{let{caption:e,items:a,style:{align:i=c.Left,backgroundColor:o}}=t,{activeItem:n,activeIndex:r,blockRef:l}=z(),d=(0,b.b)("md"),{style:{backgroundColor:s=o}={}}=n,m=i===c.Center&&d?2:H;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(to,{items:a,activeIndex:r,backgroundColor:s}),(0,g.jsxs)(tm,{contentAlign:i,ref:l,children:[(0,g.jsx)(Y,{caption:e,alignSelf:i===c.Center?"top":"center"}),(0,g.jsxs)(u.Ig,{gridArea:"media",width:"100%",height:"100%",alignSelf:"center",minHeight:{all:E.all,md:"initial"},maxHeight:E,children:[a.map((t,e)=>t.image||t.video?(0,g.jsx)(td,{height:"100%",style:{aspectRatio:m},opacity:e!==r?0:void 0,role:"tabpanel",margin:"auto",children:(0,g.jsx)(K,{item:t,ratio:m,active:e===r,imageTitle:t.caption})},e):null),i!==c.Center&&(0,g.jsx)(u.e2,{top:"100%",left:0,right:0,children:(0,g.jsx)(tu,{})})]}),i===c.Center&&(0,g.jsx)(tu,{})]})]})};var th=a(4884),tb=a(37754),tx=a(16662);let tf=(0,p.ZP)($.x).withConfig({componentId:"sc-22d9833c-0"})({position:"absolute",top:0,left:0,bottom:0,transition:"transform ".concat(350,"ms, opacity ").concat(350,"ms")}),tv=(0,p.ZP)(u.Ig).withConfig({componentId:"sc-22d9833c-1"})({"--website-feature-items-carousel-gap":"16px",["@media ".concat(m.W.media.md)]:{"--website-feature-items-carousel-gap":"8%"}}),tS=t=>{let{items:e,ratio:a,activeIndex:i,updateActiveIndex:o,children:n}=t,{onTouchStart:r,onTouchMove:l,onTouchEnd:c}=(0,th.Y)({onSwipedLeft:()=>o((i+1)%e.length),onSwipedRight:()=>o((i-1+e.length)%e.length)}),d=e.length-i,s="calc(".concat(d," * var(--website-feature-items-carousel-gap))"),m="translateX(".concat(s,") translateX(").concat(100*d-4.999999999999999*(2*Math.abs(d)-1),"%) scale(").concat(.9,")");return(0,g.jsxs)(tv,{onTouchStart:r,onTouchMove:l,onTouchEnd:c,height:"100%",style:{aspectRatio:a},children:[(0,g.jsx)(tf,{height:"100%",opacity:d<3?.5:0,onClick:()=>o(0),style:{transform:m,aspectRatio:a},children:n({item:e[0]})}),e.map((t,e)=>{let r=e-i,l=i===e?0:4.999999999999999,c=["translateX(calc(".concat(e-i," * var(--website-feature-items-carousel-gap)))"),"translateX(".concat((e>i?r:0)*100-l*(2*Math.abs(e-i)-1),"%)"),e<i?"scale(".concat(.6,")"):"",e!==i?"scale(".concat(.9,")"):""].filter(tb.fQ).join(" ");return(0,g.jsx)(tf,{height:"100%",opacity:e<i?0:1,onClick:()=>o(e),style:{transform:c,aspectRatio:a},children:n({item:t})},e)}),(0,g.jsx)(u.e2,{left:0,right:0,top:"100%",children:(0,g.jsx)(tx.J,{mt:{all:"s-16",md:"s-24",xxl:"s-32"},current:i,total:e.length,onClick:o})})]})},tC="ease",ty=["transform ".concat(350,"ms ").concat(tC),"opacity ".concat(350,"ms ").concat(tC)].join(","),tw=(0,p.ZP)(h.o).withConfig({componentId:"sc-be9b4af6-0"})(t=>({position:"absolute",top:0,left:0,bottom:0,transition:ty,zIndex:t.zIndex})),tW=(t,e)=>Math.abs(t)>e?Math.sign(t)*e:t,tj=(t,e,a)=>{let i=Math.floor(a/2);if(e!==t){let o=tT(t,e,a),n=tk(t,e,a);return n>i?-o:n}return 0},tk=(t,e,a)=>{let i=e-t;return i<0?i+a:i},tT=(t,e,a)=>{let i=t-e;return i<0?i+a:i},tI=t=>t<0?-4.999999999999999:t>0?4.999999999999999:0,tA=t=>{let e="translateX(calc(".concat(t," * var(--website-feature-items-carousel-gap)))"),a=100*t-tI(t)*(2*Math.abs(t)-1);return"".concat(e," translateX(").concat(a,"%)")},tR=(t,e,a)=>tT(t,e,a)>tk(t,e,a),tL=t=>{let{appearing:e,left:a,children:i,ratio:o}=t,n=tA(a);return(0,g.jsx)(tw,{height:"100%",opacity:e?1:0,style:{aspectRatio:o,transform:e?"".concat(n," scale(").concat(.9,")"):"".concat(n," scale(").concat(.6,")"),transition:e?ty:"none"},children:i})},tP=t=>{let{isActive:e,animating:a,disappearing:i,cardPosition:o,onClick:n,children:r,hidden:l,ratio:c}=t,d=i&&a||l,s=tA(o);return e||(s+=" scale(".concat(.9,")")),d&&(s+=" scale(".concat(.6,")")),(0,g.jsx)(tw,{onClick:n,height:"100%",opacity:d?0:1,zIndex:d?0:1,style:{aspectRatio:c,transition:a?ty:"none",...s&&{transform:s}},children:r})},tB=(0,p.ZP)(u.Ig).withConfig({componentId:"sc-be9b4af6-1"})({"--website-feature-items-carousel-gap":"16px",["@media ".concat(m.W.media.md)]:{"--website-feature-items-carousel-gap":"8%"}}),tM=t=>{let{items:e,activeIndex:a,updateActiveIndex:i,children:o,ratio:n,swipeable:r}=t,l=Math.floor((e.length%2==0?e.length-1:e.length)/2),c=(0,f.useRef)(),[d,s]=(0,f.useState)(!1),[m,p]=(0,f.useState)(a),[h,b]=(0,f.useState)(a),x=tR(h,m,e.length),v=m-l-1,S=m+l+1,C=v<0?v+e.length:v,y=S>=e.length?S-e.length:S,w=(0,f.useCallback)((t,a)=>{if(r&&a!==t&&!d){if(s(!0),t+1===a||t-1===a||t===e.length-1&&0===a||0===t&&a===e.length-1)clearTimeout(c.current),b(a),i(a,!1),c.current=setTimeout(()=>{p(a),s(!1)},350);else{let i=tR(a,t,e.length)?(t-1+e.length)%e.length:(t+1)%e.length;w(t,i),setTimeout(()=>w(i,a),450)}}},[r,e.length,d,i]);(0,f.useEffect)(()=>{w(m,a)},[m,a,w]);let{onTouchStart:W,onTouchMove:j,onTouchEnd:k}=(0,th.Y)({onSwipedLeft:()=>w(m,(m+1)%e.length),onSwipedRight:()=>w(m,(m-1+e.length)%e.length)});return(0,g.jsxs)(tB,{onTouchStart:W,onTouchMove:j,onTouchEnd:k,height:"100%",margin:"auto",style:{aspectRatio:n},children:[(0,g.jsx)(tL,{appearing:d&&x,left:-l,ratio:n,children:o({item:e[C]})}),e.map((t,a)=>{let r=tj(m,a,e.length),c=tj(h,a,e.length),s=Math.abs(r)>l||Math.abs(c)>l;r=tW(r,l);let u=(c=tW(c,l))<0&&r>0||c>0&&r<0;return(0,g.jsx)(tP,{isActive:h===a,animating:d,disappearing:u,onClick:d?void 0:()=>i(a),cardPosition:!u&&d?c:r,hidden:s,ratio:n,children:o({item:t})},a)}),(0,g.jsx)(tL,{appearing:d&&!x,left:l,ratio:n,children:o({item:e[y]})}),r&&(0,g.jsx)(u.e2,{left:0,right:0,top:"100%",children:(0,g.jsx)(tx.J,{mt:{all:"s-16",md:"s-24",xxl:"s-32"},current:m,total:e.length,onClick:i})})]})},tH=(0,p.ZP)(K).withConfig({componentId:"sc-33db82b-0"})(t=>{var e,a;let{item:i,swipeable:o=!0}=t;return{backgroundColor:null!==(a=null===(e=i.style)||void 0===e?void 0:e.backgroundColor)&&void 0!==a?a:m.W.color.greyTone5,borderRadius:"20px",WebkitTapHighlightColor:"transparent",cursor:o?"pointer":"default",overflow:"hidden"}}),tE=(0,p.ZP)(te).withConfig({componentId:"sc-2180ef79-0"})({paddingBottom:D.all.padding+D.all.pageIndicatorOffset,["@media ".concat(m.W.media.lg)]:{paddingBottom:D.lg.padding+D.lg.pageIndicatorOffset},["@media ".concat(m.W.media.xxl)]:{paddingBottom:D.xxl.padding+D.xxl.pageIndicatorOffset}},tt.bU({prop:"contentAlign",variants:{[c.Center]:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"100%",overflow:"hidden",textAlign:"left",["@media ".concat(m.W.media.md)]:{textAlign:"center"}},[c.Right]:{gridTemplateAreas:"'content' 'media'",gridTemplateRows:"1fr",gridTemplateColumns:"1fr",justifyContent:"space-between",["@media ".concat(m.W.media.lg)]:{gridTemplateAreas:"'content media'",gridTemplateRows:"initial",gridTemplateColumns:"488px 450px"},["@media ".concat(m.W.media.xxl)]:{gridTemplateColumns:"696px 600px"}}}})),tD=t=>{let{title:e,description:a,footnote:i,button:o,caption:n,items:r,style:{color:l,align:d=c.Left,backgroundColor:s}}=t,m=(0,b.b)("md"),p=(0,b.b)("lg"),{activeIndex:h,updateActiveIndex:x,activeItem:f,blockRef:v}=z(),{title:S=e,description:C=a,footnote:y=i,button:w=o,caption:j=n,style:{color:k=l}={}}=f,T=m&&(d===c.Center||!p);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(to,{activeIndex:h,items:r,backgroundColor:s}),(0,g.jsxs)(tE,{contentAlign:d,ref:v,children:[(0,g.jsx)(V,{gridArea:"content",color:k,title:S,caption:j,description:C,footnote:y,button:w,backgroundAlign:d,align:d===c.Center?"center":"start",alignSelf:{all:"flex-start",md:"center"}}),(0,g.jsxs)(u.Ig,{gridArea:"media",alignSelf:T?"center":{all:"flex-start",lg:"center"},marginLeft:T?"initial":{all:"s-20",lg:0},style:T?{aspectRatio:B}:{},width:{all:"100%",lg:"initial"},height:"100%",minHeight:{all:412,md:"initial"},maxHeight:{all:412,lg:568,xxl:752},children:[T&&(0,g.jsx)(tM,{swipeable:!0,items:r,ratio:B,activeIndex:h,updateActiveIndex:x,children:t=>{let{item:e}=t;return(0,g.jsx)(tH,{objectFit:"cover",item:e,ratio:B,border:W.W9.featureItemsCarouselCardBorder})}}),!T&&(0,g.jsx)(u.e2,{top:0,left:0,height:"100%",style:{aspectRatio:B},children:(0,g.jsx)(tS,{items:r,ratio:B,activeIndex:h,updateActiveIndex:x,children:t=>{let{item:e}=t;return(0,g.jsx)(tH,{objectFit:"cover",item:e,ratio:B,border:W.W9.featureItemsCarouselCardBorder})}})})]})]})]})};var t_=a(15059),tG=a(60539);let tZ=(0,p.ZP)(y.z).withConfig({componentId:"sc-8a378067-0"})({padding:0,"&:hover":{backgroundColor:"transparent",opacity:.8}}),tz=(0,p.ZP)(te).withConfig({componentId:"sc-8a378067-1"})({paddingBottom:D.all.padding+D.all.pageIndicatorOffset,["@media ".concat(m.W.media.lg)]:{paddingBottom:D.lg.padding+D.lg.pageIndicatorOffset},["@media ".concat(m.W.media.xxl)]:{paddingBottom:D.xxl.padding+D.xxl.pageIndicatorOffset}},tt.bU({prop:"contentAlign",variants:{[c.Center]:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"100%",overflow:"hidden",textAlign:"left",["@media ".concat(m.W.media.md)]:{textAlign:"center"}},[c.Right]:{gridTemplateAreas:"'content' 'media'",gridTemplateRows:"1fr",gridTemplateColumns:"1fr",justifyContent:"space-between",["@media ".concat(m.W.media.lg)]:{gridTemplateAreas:"'content media'",gridTemplateRows:"initial",gridTemplateColumns:"488px 450px"},["@media ".concat(m.W.media.xxl)]:{gridTemplateColumns:"696px 600px"}}}})),tN=(0,p.ZP)(tH).withConfig({componentId:"sc-8a378067-2"})({containerType:"inline-size",containerName:"feature-items-cards"}),tU=(0,p.ZP)(v.g).withConfig({componentId:"sc-8a378067-3"})({position:"absolute",top:0,left:0,padding:m.W.space.s24,width:"100%",height:"100%",gap:m.W.space.s16,["@media ".concat(m.W.media.md)]:{gap:m.W.space.s24},["@media ".concat(m.W.media.lg)]:{padding:m.W.space.s32},["@media ".concat(m.W.media.xxl)]:{padding:m.W.space.s40}}),tF=t=>{var e,a;let{item:i,...o}=t,n=null!==(a=null===(e=i.style)||void 0===e?void 0:e.color)&&void 0!==a?a:"foreground";return(0,g.jsx)(tN,{item:i,objectFit:"cover",imageTitle:i.title,...o,children:(0,g.jsxs)(tU,{className:"feature-items-block-card",children:[i.icon&&(0,g.jsx)($.x,{height:{all:24,lg:32},width:{all:24,lg:32},className:"feature-items-block-card__icon",children:(0,g.jsx)(t_.J,{name:(0,tG.G)(i.icon),color:n,size:"100%"})}),i.title&&(0,g.jsx)(w.x,{color:n,textAlign:"left",variant:"h5",mt:"s-8",className:"feature-items-block-card__text",children:i.title}),i.button&&(0,g.jsx)(tZ,{color:n,link:i.button.link,variant:"text",className:"feature-items-block-card__item",children:i.button.label})]})})},tO=t=>{let{title:e,caption:a,description:i,footnote:o,button:n,buttonSecondary:r,items:l,style:{color:d,align:s=c.Left,backgroundColor:m}}=t,p=(0,b.b)("md"),h=(0,b.b)("lg"),{activeIndex:x,updateActiveIndex:f,blockRef:v}=z(),S=p&&(s===c.Center||!h),C=!h||l.length>3;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("style",{children:"@media (min-width: 720px) {\n            @container feature-items-cards (max-width: 380px) {\n              .feature-items-block-card { padding: 10cqw; gap: 5cqw; }\n              .feature-items-block-card__icon { width: 8cqw; height: 8cqw; }\n              .feature-items-block-card__text { font-size: 8cqw; line-height: 1.2; }\n              .feature-items-block-card__button { font-size: 5cqw; line-height: 1.2; }\n            }\n          }"}),(0,g.jsx)(to,{activeIndex:x,items:l,backgroundColor:m}),(0,g.jsxs)(tz,{contentAlign:s,ref:v,children:[(0,g.jsx)(V,{gridArea:"content",color:d,title:e,caption:a,description:i,footnote:o,button:n,buttonSecondary:r,backgroundAlign:s,align:s===c.Center?"center":"start",alignSelf:{all:"flex-start",md:"center"}}),(0,g.jsxs)(u.Ig,{gridArea:"media",alignSelf:S?"center":{all:"flex-start",lg:"center"},marginLeft:S?"initial":{all:"s-20",lg:0},style:S?{aspectRatio:M}:{},height:"100%",width:{all:"100%",lg:"initial"},minHeight:{all:412,md:"initial"},maxHeight:{all:412,lg:508,xxl:643},children:[S&&(0,g.jsx)(tM,{items:l,ratio:M,activeIndex:x,updateActiveIndex:f,swipeable:C,children:t=>{let{item:e}=t;return(0,g.jsx)(tF,{item:e,ratio:M,swipeable:C})}}),!S&&(0,g.jsx)(u.e2,{top:0,left:0,height:"100%",style:{aspectRatio:M},children:(0,g.jsx)(tS,{items:l,ratio:M,activeIndex:x,updateActiveIndex:f,children:t=>{let{item:e}=t;return(0,g.jsx)(tF,{item:e,ratio:M})}})})]})]})]})},tV=(0,p.ZP)(u.Ig).withConfig({componentId:"sc-627083b9-0"})(t=>{let{contentAlign:e}=t,a=e===c.Center?"100vh":"90vh";return{display:"flex",justifyContent:"center",width:"100%",overflow:"hidden",minHeight:"640px",["@media ".concat(m.W.media.lg)]:{minHeight:"max(640px, ".concat(a,")")},["@media ".concat(m.W.media.xxl)]:{minHeight:"max(864px, ".concat(a,")")}}}),tX=t=>{var e;let{id:a,anchor:i,content:{items:o,...n}}=t,r=n.style.variant,d=null!==(e=n.style.align)&&void 0!==e?e:c.Center;return(0,g.jsx)(tV,{id:null!=i?i:a,"data-blockid":a,use:"section",contentAlign:d,children:(0,g.jsxs)(Z,{content:n,items:o,children:[r===l.Media&&(0,g.jsx)(tl,{}),r===l.Tabs&&(0,g.jsx)(tp,{...n,items:o}),o.length>1&&r===l.Carousel&&(0,g.jsx)(tD,{...n,items:o}),o.length>1&&r===l.Cards&&(0,g.jsx)(tO,{...n,items:o})]})})}},16662:function(t,e,a){a.d(e,{J:function(){return g}});var i=a(85893),o=a(49363),n=a(37736),r=a(37903),l=a(27061);let c=o.ZP.li.withConfig({componentId:"sc-ce42745e-0"})(t=>[{listStyleType:"none",transition:"\n      ".concat(n.W.transition.width,",\n      ").concat(n.W.transition.height,",\n      ").concat(n.W.transition.opacity),opacity:.7,width:n.W.space.s6,height:n.W.space.s6,["@media ".concat(n.W.media.xxl)]:{height:n.W.space.s12,width:n.W.space.s12}},t.current&&{opacity:1,width:n.W.space.s8,height:n.W.space.s8,["@media ".concat(n.W.media.xxl)]:{height:n.W.space.s16,width:n.W.space.s16}}]),d=o.ZP.button.withConfig({componentId:"sc-ce42745e-1"})({display:"block",padding:0,width:"100%",height:"100%",border:"none",borderRadius:n.W.radius.round,backgroundColor:n.W.color.grey20,cursor:"pointer"}),s=(0,o.ZP)(r.U).withConfig({componentId:"sc-ce42745e-2"})({isolation:"isolate",height:n.W.space.s6,alignItems:"center",justifyContent:"center",gap:n.W.space.s6,["@media ".concat(n.W.media.xxl)]:{bottom:n.W.space.n12,gap:n.W.space.s12}}),g=t=>{let{current:e,total:a,onClick:o,...n}=t;return(0,i.jsx)(l.x,{color:"grey-20",...n,children:(0,i.jsx)(s,{use:"ul",role:"tablist",children:Array.from({length:a}).map((t,a)=>{let n=a===e;return(0,i.jsx)(c,{current:n,role:"presentation",children:(0,i.jsx)(d,{role:"tab","aria-current":n,"aria-label":(n?"Current page, ":"")+"Page ".concat(a+1),onClick:o?()=>o(a):void 0})},a)},a)})})}},62663:function(t,e,a){a.d(e,{G:function(){return c}});var i=a(25533),o=a(37736),n=a(47887),r=a(67294),l=a(34155);function c(t){let e=(0,i.a)(o.W.media.md);(0,n.t)(t,e=>{t.current&&!l.env.NEXT_PUBLIC_TEST_ENV&&(t.current.style.opacity=e?"1":"0")},e?.2:0),(0,r.useEffect)(()=>{t.current&&(t.current.style.transition="opacity ".concat(300,"ms ease-in-out"),t.current.style.opacity="1")},[t])}},49390:function(t,e,a){a.d(e,{Y:function(){return o}});var i=a(67294);let o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=(0,i.useRef)(t);(0,i.useEffect)(()=>{a.current=t},[t]),(0,i.useEffect)(()=>{if(null!==e){let t=setInterval(()=>a.current(),e);return()=>clearInterval(t)}},[e])}},4884:function(t,e,a){a.d(e,{Y:function(){return o}});var i=a(67294);let o=t=>{let[e,a]=(0,i.useState)(),[o,n]=(0,i.useState)();return{onTouchStart:t=>{n(void 0),a(t.targetTouches[0].clientX)},onTouchMove:t=>n(t.targetTouches[0].clientX),onTouchEnd:()=>{if(void 0===e||void 0===o)return;let a=e-o;a>50&&t.onSwipedLeft(),a<-50&&t.onSwipedRight()}}}},60539:function(t,e,a){a.d(e,{G:function(){return o}});let i={AmexPay:"AmexPay|image",ApplePay:"ApplePay|image",BadgeLeft:"10/BadgeLeft",BadgeRight:"10/BadgeRight",CardCode:"CardCode|image",CardExpiry:"CardExpiry|image",CardNumber:"CardNumber|image",GooglePay:"GooglePay|image",LogoAirplus:"LogoAirplus|image",LogoAirplusColour:"LogoAirplusColour|image",LogoAmex:"LogoAmex|image",LogoAmexColour:"LogoAmexColour|image",LogoDinersClub:"LogoDinersClub|image",LogoDinersClubColour:"LogoDinersClubColour|image",LogoDiscover:"LogoDiscover|image",LogoDiscoverColour:"LogoDiscoverColour|image",LogoGoogle:"LogoGoogle|image",LogoJcb:"LogoJcb|image",LogoJcbColour:"LogoJcbColour|image",LogoMa:"LogoMa|image",LogoMc:"LogoMc|image",LogoMcMetal:"LogoMcMetal|image",LogoMcPremium:"LogoMcPremium|image",LogoMicrosoft:"LogoMicrosoft|image",LogoPix:"LogoPix|image",LogoRevolutColour:"LogoRevolutColour|image",LogoVisaColour:"LogoVisaColour|image",LogoYahoo:"LogoYahoo|image",Peakon:"Peakon|image",StocksArrowDown:"10/StocksArrowDown",StocksArrowUp:"10/StocksArrowUp",StocksDividend:"10/StocksDividend",StocksTax:"10/StocksTax",StocksTopup:"10/StocksTopup",StocksWithdraw:"10/StocksWithdraw",SubtractApps:"40/SubtractApps",SubtractBackpack:"40/SubtractBackpack",SubtractBank:"40/SubtractBank",SubtractBitcoin:"40/SubtractBitcoin",SubtractBudget:"40/SubtractBudget",SubtractCalendar:"40/SubtractCalendar",SubtractCalendarRecurring:"40/SubtractCalendarRecurring",SubtractCard:"40/SubtractCard",SubtractCash:"40/SubtractCash",SubtractCashback:"40/SubtractCashback",SubtractChat:"40/SubtractChat",SubtractCloud:"40/SubtractCloud",SubtractCoins:"40/SubtractCoins",SubtractCommodities:"40/SubtractCommodities",SubtractCompare:"40/SubtractCompare",SubtractConcierge:"40/SubtractConcierge",SubtractCredit:"40/SubtractCredit",SubtractCreditBag:"40/SubtractCreditBag",SubtractCreditCard:"40/SubtractCreditCard",SubtractDocument:"40/SubtractDocument",SubtractDrop:"40/SubtractDrop",SubtractEntertainment:"40/SubtractEntertainment",SubtractExchange:"40/SubtractExchange",SubtractFastfood:"40/SubtractFastfood",SubtractGift:"40/SubtractGift",SubtractGlobe:"40/SubtractGlobe",SubtractGlobeP2P:"40/SubtractGlobeP2P",SubtractGroceries:"40/SubtractGroceries",SubtractGroupVault:"40/SubtractGroupVault",SubtractHealth:"40/SubtractHealth",SubtractIndustrialGear:"40/SubtractIndustrialGear",SubtractInsurance:"40/SubtractInsurance",SubtractLightning:"40/SubtractLightning",SubtractLink:"40/SubtractLink",SubtractLogoRevolut:"40/SubtractLogoRevolut",SubtractLounges:"40/SubtractLounges",SubtractMaterials:"40/SubtractMaterials",SubtractMedicalCross:"40/SubtractMedicalCross",SubtractMerchant:"40/SubtractMerchant",SubtractPeople:"40/SubtractPeople",SubtractPocket:"40/SubtractPocket",SubtractPremium:"40/SubtractPremium",SubtractPresent:"40/SubtractPresent",SubtractProfile:"40/SubtractProfile",SubtractRPoint:"40/SubtractRPoint",SubtractRestaurants:"40/SubtractRestaurants",SubtractRocket:"40/SubtractRocket",SubtractSavingsVault:"40/SubtractSavingsVault",SubtractServices:"40/SubtractServices",SubtractShopping:"40/SubtractShopping",SubtractSmartphoneUmbrella:"40/SubtractSmartphoneUmbrella",SubtractStar:"40/SubtractStar",SubtractStatement:"40/SubtractStatement",SubtractTech:"40/SubtractTech",SubtractTopUp:"40/SubtractTopUp",SubtractTransfers:"40/SubtractTransfers",SubtractTransport:"40/SubtractTransport",SubtractTravel:"40/SubtractTravel",SubtractUtilities:"40/SubtractUtilities",SubtractVault:"40/SubtractVault",SubtractVegan:"40/SubtractVegan",SubtractWealth:"40/SubtractWealth"},o=t=>t&&i[t]||t}}]);
//# sourceMappingURL=9979.2abff6a7fa41e9d3.js.map