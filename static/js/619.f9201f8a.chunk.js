"use strict";(self.webpackChunkvleppo_webapp=self.webpackChunkvleppo_webapp||[]).push([[619],{5574:function(e,o,r){var n=r(4942),a=r(3366),t=r(7462),i=r(2791),l=r(8182),c=r(767),s=r(6248),d=r(4036),p=r(792),u=r(2003),v=r(1314),f=r(703),Z=r(3736),m=r(7630),h=r(7780),x=r(5090),g=r(1489),b=r(184),S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],w=(0,m.ZP)(g.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,o){return o.backdrop}})({zIndex:-1}),W=(0,m.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,o){return o.root}})({"@media print":{position:"absolute !important"}}),k=(0,m.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,o){var r=e.ownerState;return[o.container,o["scroll".concat((0,d.Z)(r.scroll))]]}})((function(e){var o=e.ownerState;return(0,t.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===o.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===o.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),D=(0,m.ZP)(f.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,o){var r=e.ownerState;return[o.paper,o["scrollPaper".concat((0,d.Z)(r.scroll))],o["paperWidth".concat((0,d.Z)(String(r.maxWidth)))],r.fullWidth&&o.paperFullWidth,r.fullScreen&&o.paperFullScreen]}})((function(e){var o=e.theme,r=e.ownerState;return(0,t.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&(0,n.Z)({maxWidth:"px"===o.breakpoints.unit?Math.max(o.breakpoints.values.xs,444):"".concat(o.breakpoints.values.xs).concat(o.breakpoints.unit)},"&.".concat(h.Z.paperScrollBody),(0,n.Z)({},o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==r.maxWidth&&(0,n.Z)({maxWidth:"".concat(o.breakpoints.values[r.maxWidth]).concat(o.breakpoints.unit)},"&.".concat(h.Z.paperScrollBody),(0,n.Z)({},o.breakpoints.down(o.breakpoints.values[r.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&(0,n.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(h.Z.paperScrollBody),{margin:0,maxWidth:"100%"}))})),y={enter:v.x9.enteringScreen,exit:v.x9.leavingScreen},C=i.forwardRef((function(e,o){var r=(0,Z.Z)({props:e,name:"MuiDialog"}),n=r["aria-describedby"],p=r["aria-labelledby"],v=r.BackdropComponent,m=r.BackdropProps,g=r.children,C=r.className,M=r.disableEscapeKeyDown,P=void 0!==M&&M,B=r.fullScreen,R=void 0!==B&&B,N=r.fullWidth,T=void 0!==N&&N,j=r.maxWidth,A=void 0===j?"sm":j,F=r.onBackdropClick,E=r.onClose,I=r.open,K=r.PaperComponent,Y=void 0===K?f.Z:K,X=r.PaperProps,H=void 0===X?{}:X,L=r.scroll,_=void 0===L?"paper":L,z=r.TransitionComponent,O=void 0===z?u.Z:z,q=r.transitionDuration,G=void 0===q?y:q,J=r.TransitionProps,Q=(0,a.Z)(r,S),U=(0,t.Z)({},r,{disableEscapeKeyDown:P,fullScreen:R,fullWidth:T,maxWidth:A,scroll:_}),V=function(e){var o=e.classes,r=e.scroll,n=e.maxWidth,a=e.fullWidth,t=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,d.Z)(r))],paper:["paper","paperScroll".concat((0,d.Z)(r)),"paperWidth".concat((0,d.Z)(String(n))),a&&"paperFullWidth",t&&"paperFullScreen"]};return(0,c.Z)(i,h.D,o)}(U),$=i.useRef(),ee=(0,s.Z)(p),oe=i.useMemo((function(){return{titleId:ee}}),[ee]);return(0,b.jsx)(W,(0,t.Z)({className:(0,l.Z)(V.root,C),BackdropProps:(0,t.Z)({transitionDuration:G,as:v},m),closeAfterTransition:!0,BackdropComponent:w,disableEscapeKeyDown:P,onClose:E,open:I,ref:o,onClick:function(e){$.current&&($.current=null,F&&F(e),E&&E(e,"backdropClick"))},ownerState:U},Q,{children:(0,b.jsx)(O,(0,t.Z)({appear:!0,in:I,timeout:G,role:"presentation"},J,{children:(0,b.jsx)(k,{className:(0,l.Z)(V.container),onMouseDown:function(e){$.current=e.target===e.currentTarget},ownerState:U,children:(0,b.jsx)(D,(0,t.Z)({as:Y,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":ee},H,{className:(0,l.Z)(V.paper,H.className),ownerState:U,children:(0,b.jsx)(x.Z.Provider,{value:oe,children:g})}))})}))}))}));o.Z=C},5090:function(e,o,r){var n=(0,r(2791).createContext)({});o.Z=n},7780:function(e,o,r){r.d(o,{D:function(){return a}});var n=r(5159);function a(e){return(0,n.Z)("MuiDialog",e)}var t=(0,r(208).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);o.Z=t},7123:function(e,o,r){r.d(o,{Z:function(){return Z}});var n=r(3366),a=r(7462),t=r(2791),i=r(8182),l=r(767),c=r(7630),s=r(3736),d=r(5159);function p(e){return(0,d.Z)("MuiDialogActions",e)}(0,r(208).Z)("MuiDialogActions",["root","spacing"]);var u=r(184),v=["className","disableSpacing"],f=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,!r.disableSpacing&&o.spacing]}})((function(e){var o=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Z=t.forwardRef((function(e,o){var r=(0,s.Z)({props:e,name:"MuiDialogActions"}),t=r.className,c=r.disableSpacing,d=void 0!==c&&c,Z=(0,n.Z)(r,v),m=(0,a.Z)({},r,{disableSpacing:d}),h=function(e){var o=e.classes,r={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(r,p,o)}(m);return(0,u.jsx)(f,(0,a.Z)({className:(0,i.Z)(h.root,t),ownerState:m,ref:o},Z))}))},9157:function(e,o,r){r.d(o,{Z:function(){return h}});var n=r(4942),a=r(3366),t=r(7462),i=r(2791),l=r(8182),c=r(767),s=r(7630),d=r(3736),p=r(5159);function u(e){return(0,p.Z)("MuiDialogContent",e)}(0,r(208).Z)("MuiDialogContent",["root","dividers"]);var v=r(7673),f=r(184),Z=["className","dividers"],m=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,r.dividers&&o.dividers]}})((function(e){var o=e.theme,r=e.ownerState;return(0,t.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(o.palette.divider),borderBottom:"1px solid ".concat(o.palette.divider)}:(0,n.Z)({},".".concat(v.Z.root," + &"),{paddingTop:0}))})),h=i.forwardRef((function(e,o){var r=(0,d.Z)({props:e,name:"MuiDialogContent"}),n=r.className,i=r.dividers,s=void 0!==i&&i,p=(0,a.Z)(r,Z),v=(0,t.Z)({},r,{dividers:s}),h=function(e){var o=e.classes,r={root:["root",e.dividers&&"dividers"]};return(0,c.Z)(r,u,o)}(v);return(0,f.jsx)(m,(0,t.Z)({className:(0,l.Z)(h.root,n),ownerState:v,ref:o},p))}))},7673:function(e,o,r){r.d(o,{a:function(){return a}});var n=r(5159);function a(e){return(0,n.Z)("MuiDialogTitle",e)}var t=(0,r(208).Z)("MuiDialogTitle",["root"]);o.Z=t}}]);
//# sourceMappingURL=619.f9201f8a.chunk.js.map