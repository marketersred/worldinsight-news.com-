!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="602f57d9-e69d-4097-8955-25464fb947d9",e._sentryDebugIdIdentifier="sentry-dbid-602f57d9-e69d-4097-8955-25464fb947d9")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4943],{89880:function(e,n,r){r.d(n,{C:function(){return h},O:function(){return p}});var t,o=r(67294),i=r(49363),a=r(79500),c=r(40199),u=r(37736),l=r(2660),s=r(6763),d=r(49339),f=["size","useIcon","variant","children"];function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var p={SIZE_5:5,SIZE_16:16,SIZE_20:20,SIZE_24:24},v=((t={})[d.P.DEFAULT]=p.SIZE_20,t[d.P.OUTLINED]=p.SIZE_16,t[d.P.DOT]=p.SIZE_5,t),b=(0,i.ZP)(l.C).withConfig({displayName:"Badge__CircleButton",componentId:"rui__sc-igjrv7-0"})(["appearance:none;transition:",";&:focus-visible{","}:enabled:not([aria-disabled='true']){cursor:pointer;}&:disabled{pointer-events:none;}"],u.W.transition.shadow,c.j),h=(0,o.forwardRef)(function(e,n){var r=e.size,t=e.useIcon,i=e.variant,c=void 0===i?d.P.DEFAULT:i,u=e.children,l=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,f),h=r===p.SIZE_5?d.P.DOT:c,O=null!=r?r:v[c],y=h===d.P.DOT;return o.createElement(b,g({ref:n,display:"inline-flex",px:y||null==u?void 0:"0.4em",height:O,minWidth:O,__variants:d.E,variant:h,textStyle:function(e){switch(e){case p.SIZE_16:case p.SIZE_20:return a.pn.TINY;case p.SIZE_24:default:return a.pn.SMALL}}(r)},l),y?null:o.createElement(o.Fragment,null,(0,s.i)(t,function(e){switch(e){case p.SIZE_16:case p.SIZE_20:return 12;case p.SIZE_24:default:return 16}}(O)),u))})},49339:function(e,n,r){r.d(n,{E:function(){return s},P:function(){return a}});var t,o=r(37736);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var a={DEFAULT:"default",DOT:"dot",OUTLINED:"outlined"},c={color:o.W.color.background,backgroundColor:o.W.color.red,borderWidth:0,":hover:enabled":{cursor:"pointer"}},u=i({},c,{margin:o.W.space.s4}),l=i({},c,{backgroundColor:o.W.color.accentNeutral,boxSizing:"content-box",borderStyle:"solid",borderColor:o.W.color.background,borderWidth:o.W.space.s2}),s=((t={})[a.DEFAULT]=c,t[a.DOT]=u,t[a.OUTLINED]=l,t)},26370:function(e,n,r){r.d(n,{h:function(){return I}});var t=r(67294),o=r(49363),i=r(16678),a=r(47574),c=r(37736),u=r(90305),l=r(73245),s=r(3179),d=r(6763),f=r(19550),g=r(60260),p=r(49339),v=r(89880);function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var h=(0,o.ZP)(v.C).attrs(function(e){var n,r=null!=(n=e.margin?null:e.variant===p.P.DOT?{margin:c.W.space.n2}:{margin:c.W.space.n8})?n:{},t=e.size,o=void 0===t?v.O.SIZE_16:t;return b({},r,{size:o})}).withConfig({displayName:"IconButtonBadge",componentId:"rui__sc-f4gzaw-0"})(["z-index:1;place-self:start end;"]),O=["useIcon","useHoverIcon","variant","active","size","tapArea","children"];function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var m={ICON:"icon"},E=(0,o.ZP)(s.X).withConfig({displayName:"IconButton__IconButtonBase",componentId:"rui__sc-1xan14r-0"})([":focus-visible{background-color:",";color:",";}"," "," "," "," ",""],c.W.color.background,c.W.color.foreground,function(e){var n=e.active;return e.variant===m.ICON?(0,i.$_)(e):{color:n?c.W.color.accentNeutral:c.W.color.greyTone50,backgroundColor:n?c.W.color.background:"transparent",transition:c.W.transition.background,'&:hover:not(:disabled), &[aria-expanded="true"]':{backgroundColor:c.W.color.greyTone10},"&:disabled":{color:c.W.color.greyTone20,backgroundColor:"transparent"}}},function(e){var n=e.variant,r=e.size;return n===m.ICON?{display:"block",width:(0,u.hO)(r),height:(0,u.hO)(r)}:{borderRadius:c.W.radius.round,padding:c.W.space.s8,width:c.b.size.buttonSm,height:c.b.size.buttonSm}},i.e6,function(e){var n=e.variant;return(0,a.N)(n===m.ICON?{top:-2,right:-5}:{top:5,right:5})},function(e){var n=e.size,r=e.tapArea;if(!(n>=r)){var t=(0,u.hO)(-(r-n)/2);return{position:"relative",zIndex:0,"&::before":{content:"''",position:"absolute",top:t,bottom:t,left:t,right:t}}}}),I=Object.assign((0,t.forwardRef)(function(e,n){var r=e.useIcon,o=e.useHoverIcon,i=e.variant,a=void 0===i?m.ICON:i,c=e.active,u=e.size,s=void 0===u?24:u,p=e.tapArea,v=void 0===p?a===m.ICON&&44:p,b=e.children,I=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,O),_=(0,t.useState)(!1),w=_[0],W=_[1];return t.createElement(E,y({ref:n,size:s,tapArea:!1===v?0:v,active:void 0!==c&&c,variant:a},I,{onMouseEnter:(0,l.$e)(function(){return W(!0)},I.onMouseEnter),onMouseLeave:(0,l.$e)(function(){return W(!1)},I.onMouseLeave)}),t.createElement(g.G,null,(0,d.i)(w&&o?o:r,s),t.isValidElement(b)&&b.type===h?b:t.createElement(f.T,null,b)))}),{Badge:h})},8954:function(e,n,r){r.d(n,{Ee:function(){return s},s1:function(){return l}});var t=r(67294),o=r(37736),i=r(69526),a=r(27061),c=["role","scale","sizes","src","srcSet","image","alt","style","variant"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var l={COVER:"cover",CONTAIN:"contain"},s=(0,t.forwardRef)(function(e,n){var r,l=e.role,s=e.scale,d=e.sizes,f=e.src,g=e.srcSet,p=e.image,v=e.alt,b=e.style,h=e.variant,O=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,c);return t.createElement(a.x,u({use:"img",ref:n,role:l,display:"block",width:"100%",height:"auto",maxWidth:"100%",radius:"round"===h?o.b.radius.image:void 0,sizes:d,alt:v,style:u({objectFit:s},b)},"image"in(r={src:f,srcSet:g,image:p})&&void 0!==r.image?(0,i.Nf)(r.image):r,O))})},51482:function(e,n,r){r.d(n,{x:function(){return b}});var t=r(67294),o=r(49363),i=r(554),a=r(1377),c=r(11859),u=r(53889),l=r(10903),s=["children","tooltip"],d=["children","tooltip"];function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function g(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}var p=o.ZP.span.withConfig({displayName:"LineClamp__LineClampBase",componentId:"rui__sc-1asyw6f-0"})((0,u.d)("max"));function v(e){var n=e.children,r=e.tooltip,o=g(e,s),u=(0,t.useRef)(null),d=(0,a.l)(),v=(0,t.useState)(!1),b=v[0],h=v[1],O=(0,t.useState)(0),y=O[0],m=O[1];return(0,c.d)(u,r===i.l.AUTO,function(e,n){h(e.height<n.height),m(e.width)}),t.createElement(t.Fragment,null,t.createElement(p,d.getAnchorProps(f({ref:u},o)),n),t.createElement(l.u,d.getTargetProps({open:r===i.l.ALWAYS||b,placement:"bottom-start",maxWidth:Math.max(y,320)}),n))}function b(e){var n=e.children,r=e.tooltip,o=void 0===r?i.l.NEVER:r,a=g(e,d);return o===i.l.ALWAYS||o===i.l.AUTO?t.createElement(v,f({tooltip:o},a),n):t.createElement(p,a,n)}},75667:function(e,n,r){r.d(n,{$:function(){return d}});var t=r(49363),o=r(16678),i=r(25394),a=r(25110),c=r(37736),u=r(90305),l=r(27061),s=(0,r(47098).h)(l.x),d=(0,t.ZP)(s).attrs(function(e){var n=e.bg,r=void 0===n?c.W.color.widgetBackground:n,t=e.color,o=void 0===t?c.W.color.foreground:t,i=e.radius,a=void 0===i?c.W.radius.widget:i,u=e.display;return{bg:r,color:o,radius:a,display:void 0===u?"block":u,"data-rui":"widget"}}).withConfig({displayName:"Widget",componentId:"rui__sc-1vzekdg-0"})([""," "," & &{background-color:",";}",""],a.k,(0,u.fw)(i.G.TABLE_ROW_X_BORDER_WIDTH,"1px"),c.W.color.greyTone5,o.$_)}}]);
//# sourceMappingURL=4943.5c5836eaa4411a96.js.map