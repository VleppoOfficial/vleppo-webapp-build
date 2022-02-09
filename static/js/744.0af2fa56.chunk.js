"use strict";(self.webpackChunkvleppo_webapp=self.webpackChunkvleppo_webapp||[]).push([[744],{2512:function(e,t,r){r(2791);var n=r(4554),o=r(184);t.Z=function(e){var t=e.children,r=e.marginLeft,i=e.marginRight;return(0,o.jsx)(n.Z,{mt:3,sx:{width:"100%"},ml:r||"0",mr:i||"0",children:t})}},7896:function(e,t,r){r(2791);var n=r(890),o=r(184);t.Z=function(e){var t=e.label,r=e.required,i=e.marginBottom;return(0,o.jsxs)(n.Z,{marginBottom:void 0!==i?i:1,fontWeight:500,children:[t,"\xa0",r&&(0,o.jsx)(n.Z,{component:"span",sx:{color:"red"},children:"*"})]})}},5212:function(e,t,r){var n=r(1413),o=r(5987),i=r(4270),a=r(184),l=["title","children"];t.Z=function(e){var t=e.title,r=void 0===t?"":t,c=e.children,s=(0,o.Z)(e,l);return(0,a.jsxs)("div",(0,n.Z)((0,n.Z)({},s),{},{children:[(0,a.jsx)(i.q,{children:(0,a.jsx)("title",{children:r})}),c]}))}},793:function(e,t,r){var n=r(5861),o=r(885),i=r(7757),a=r.n(i),l=r(2791),c=r(3967),s=r(6445),d=r(1889),u=r(4554),h=r(7621),v=r(3044),p=r(890),f=r(4721),m=r(493),x=r(5021),Z=r(9373),g=r(5212),j=r(5482),b=r(6488),w=r(7756),S=r(1523),y=r(9086),C=r(833),k=r(184),R={verifyText:{color:"#22C55E"},fontWeightBold:{fontWeight:"bold"},errorInfo:{backgroundColor:"#168bc226",borderRadius:"5px"},container:{width:"100%",maxWidth:360,bgcolor:"background.paper"}};t.Z=function(e){var t=e.children,r=((0,c.Z)(),(0,l.useState)()),i=(0,o.Z)(r,2),I=i[0],P=i[1],z=(0,j.I0)();return(0,l.useEffect)((function(){try{var e=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.get("user/me");case 2:t=e.sent,P(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log("Load profile error",t)}}),[]),(0,k.jsx)(s.Z,{maxWidth:"lg",children:(0,k.jsx)(g.Z,{title:"User profile",children:(0,k.jsxs)(d.ZP,{container:!0,children:[(0,k.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,k.jsx)(u.Z,{p:2,children:(0,k.jsxs)(h.Z,{p:3,children:[(0,k.jsxs)(u.Z,{sx:{display:"flex"},p:3,children:[(0,k.jsx)(v.Z,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),(0,k.jsxs)(u.Z,{ml:2,children:[(0,k.jsxs)(p.Z,{variant:"subtitle1",component:"b",style:R.fontWeightBold,children:[I?I.first_name:""," ",I?I.last_name:""]}),(0,k.jsx)(p.Z,{variant:"body2",component:"div",style:R.verifyText,children:"Verify"})]})]}),(0,k.jsx)(f.Z,{}),(0,k.jsx)(u.Z,{children:(0,k.jsxs)(m.Z,{component:"nav",children:[(0,k.jsx)(x.ZP,{button:!0,children:(0,k.jsx)(Z.Z,{variant:"text",component:S.rU,to:"/vleppo/profile",startIcon:(0,k.jsx)(w.Z,{}),children:"Profile"})}),(0,k.jsx)(x.ZP,{button:!0,children:(0,k.jsx)(Z.Z,{variant:"text",component:S.rU,to:"/vleppo/user-preferences",startIcon:(0,k.jsx)(w.Z,{}),children:"User Preferences"})}),(0,k.jsx)(x.ZP,{button:!0,children:(0,k.jsx)(Z.Z,{variant:"text",onClick:function(){z((0,C.kS)())},startIcon:(0,k.jsx)(b.Z,{}),children:"Logout"})})]})})]})})}),(0,k.jsx)(d.ZP,{item:!0,xs:12,md:8,children:(0,k.jsx)(h.Z,{p:2,children:(0,k.jsx)(u.Z,{p:3,children:t})})})]})})})}},5744:function(e,t,r){r.r(t),r.d(t,{default:function(){return ve}});var n=r(5861),o=r(7757),i=r.n(o),a=r(2791),l=r(885),c=r(7462),s=r(3366),d=r(8182),u=r(767),h=r(7630),v=r(3736),p=r(5159),f=r(208);function m(e){return(0,p.Z)("MuiFormGroup",e)}(0,f.Z)("MuiFormGroup",["root","row"]);var x=r(184),Z=["className","row"],g=(0,h.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.row&&t.row]}})((function(e){var t=e.ownerState;return(0,c.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})})),j=a.forwardRef((function(e,t){var r=(0,v.Z)({props:e,name:"MuiFormGroup"}),n=r.className,o=r.row,i=void 0!==o&&o,a=(0,s.Z)(r,Z),l=(0,c.Z)({},r,{row:i}),h=function(e){var t=e.classes,r={root:["root",e.row&&"row"]};return(0,u.Z)(r,m,t)}(l);return(0,x.jsx)(g,(0,c.Z)({className:(0,d.Z)(h.root,n),ownerState:l,ref:t},a))})),b=r(2071),w=r(8278);var S=a.createContext(void 0),y=r(7384),C=["actions","children","defaultValue","name","onChange","value"],k=a.forwardRef((function(e,t){var r=e.actions,n=e.children,o=e.defaultValue,i=e.name,d=e.onChange,u=e.value,h=(0,s.Z)(e,C),v=a.useRef(null),p=(0,w.Z)({controlled:u,default:o,name:"RadioGroup"}),f=(0,l.Z)(p,2),m=f[0],Z=f[1];a.useImperativeHandle(r,(function(){return{focus:function(){var e=v.current.querySelector("input:not(:disabled):checked");e||(e=v.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var g=(0,b.Z)(t,v),k=(0,y.Z)(i);return(0,x.jsx)(S.Provider,{value:{name:k,onChange:function(e){Z(e.target.value),d&&d(e,e.target.value)},value:m},children:(0,x.jsx)(j,(0,c.Z)({role:"radiogroup",ref:g},h,{children:n}))})})),R=r(4942),I=r(2065),P=r(7278),z=r(4223),M=(0,z.Z)((0,x.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),A=(0,z.Z)((0,x.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),L=(0,h.ZP)("span")({position:"relative",display:"flex"}),V=(0,h.ZP)(M,{skipSx:!0})({transform:"scale(1)"}),W=(0,h.ZP)(A,{skipSx:!0})((function(e){var t=e.theme,r=e.ownerState;return(0,c.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var B=function(e){var t=e.checked,r=void 0!==t&&t,n=e.classes,o=void 0===n?{}:n,i=e.fontSize,a=(0,c.Z)({},e,{checked:r});return(0,x.jsxs)(L,{className:o.root,ownerState:a,children:[(0,x.jsx)(V,{fontSize:i,className:o.background,ownerState:a}),(0,x.jsx)(W,{fontSize:i,className:o.dot,ownerState:a})]})},N=r(4036),U=r(1260);function _(e){return(0,p.Z)("MuiRadio",e)}var F=(0,f.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),D=["checked","checkedIcon","color","icon","name","onChange","size"],T=(0,h.ZP)(P.Z,{shouldForwardProp:function(e){return(0,h.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,N.Z)(r.color))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,c.Z)({color:t.palette.text.secondary,"&:hover":{backgroundColor:(0,I.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(0,R.Z)({},"&.".concat(F.checked),{color:t.palette[r.color].main}),(0,R.Z)({},"&.".concat(F.disabled),{color:t.palette.action.disabled}))}));var E=(0,x.jsx)(B,{checked:!0}),H=(0,x.jsx)(B,{}),q=a.forwardRef((function(e,t){var r,n,o,i,l=(0,v.Z)({props:e,name:"MuiRadio"}),d=l.checked,h=l.checkedIcon,p=void 0===h?E:h,f=l.color,m=void 0===f?"primary":f,Z=l.icon,g=void 0===Z?H:Z,j=l.name,b=l.onChange,w=l.size,y=void 0===w?"medium":w,C=(0,s.Z)(l,D),k=(0,c.Z)({},l,{color:m,size:y}),R=function(e){var t=e.classes,r=e.color,n={root:["root","color".concat((0,N.Z)(r))]};return(0,c.Z)({},t,(0,u.Z)(n,_,t))}(k),I=a.useContext(S),P=d,z=(0,U.Z)(b,I&&I.onChange),M=j;return I&&("undefined"===typeof P&&(o=I.value,P="object"===typeof(i=l.value)&&null!==i?o===i:String(o)===String(i)),"undefined"===typeof M&&(M=I.name)),(0,x.jsx)(T,(0,c.Z)({type:"radio",icon:a.cloneElement(g,{fontSize:null!=(r=H.props.fontSize)?r:y}),checkedIcon:a.cloneElement(p,{fontSize:null!=(n=E.props.fontSize)?n:y}),ownerState:k,classes:R,name:M,checked:P,onChange:z,ref:t},C))})),G=r(1296),O=r(890),J=r(4721),X=r(7482),Y=r(4554),K=r(9321),Q=r(3786),$=r(5523),ee=r(4454),te=r(5482),re=r(8094),ne=r(9271),oe=r(7834),ie=r(2512),ae=r(5705),le=r(132),ce=r(7896),se=JSON.parse('[{"id":1,"code":"en","value":"English"},{"id":2,"code":"vi","value":"Vietnamese"},{"id":3,"code":"dk","value":"Denmark"}]'),de=r(793),ue=r(9860),he=(0,h.ZP)(G.ZP)((function(e){var t=e.theme;return{"label + &":{marginTop:t.spacing(3)},"& .MuiInputBase-input":{marginTop:"6px",borderRadius:4,position:"relative",backgroundColor:t.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"8px 26px 8px 12px",transition:t.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}})),ve=function(){var e=(0,ne.TH)(),t=(0,te.I0)(),r=(0,te.v9)((function(e){return e.setting})),o=(r.theme,r.preferences),l=r.loading;(0,a.useEffect)((function(){t((0,re.Iz)())}),[]);var c=(0,oe.Z)().isAuthenticated;if(null!==c&&!1===c){var s=e.pathname.split("/")[1],d=new URLSearchParams(e.search).get("returnUrl");return d?(0,x.jsx)(ne.l_,{to:d}):(0,x.jsx)(ne.l_,{to:"/".concat(s,"/login?returnUrl=/").concat(s,"/profile")})}return(0,x.jsxs)(de.Z,{children:[(0,x.jsx)(O.Z,{variant:"h6",component:"b",children:"User Preferences"}),(0,x.jsx)(J.Z,{}),l&&(0,x.jsx)(X.Z,{}),o&&(0,x.jsx)(ae.J9,{enableReinitialize:!1,initialValues:o,validationSchema:le.Ry().shape({}),onSubmit:function(){var e=(0,n.Z)(i().mark((function e(r,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setSubmitting,t((0,re.ex)(r));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.handleBlur;var t,r,n,i=e.handleChange,a=e.handleSubmit;e.isSubmitting,e.touched,e.values,e.setFieldValue;return(0,x.jsxs)(Y.Z,{children:[(0,x.jsxs)(Y.Z,{sx:{display:"flex"},children:[(0,x.jsxs)(ie.Z,{children:[(0,x.jsx)(ce.Z,{label:"Language"}),(0,x.jsx)(K.Z,{fullWidth:!0,name:"lang",input:(0,x.jsx)(he,{}),defaultValue:null===o||void 0===o?void 0:o.lang,onChange:i,children:se?se.map((function(e){return(0,x.jsx)(Q.Z,{value:e.code,children:e.value},e.code)})):""})]}),(0,x.jsxs)(ie.Z,{marginLeft:5,children:[(0,x.jsx)(ce.Z,{label:"Notifications"}),(0,x.jsx)($.Z,{control:(0,x.jsx)(ee.Z,{name:"notification.asset_transfer",onChange:i,defaultChecked:null===o||void 0===o||null===(t=o.notification)||void 0===t?void 0:t.asset_transfer}),label:"Assets transfer update"})]})]}),(0,x.jsx)(Y.Z,{children:(0,x.jsx)(ie.Z,{children:(0,x.jsxs)(k,{defaultValue:null===o||void 0===o?void 0:o.themes,onChange:i,name:"themes",children:[(0,x.jsx)(ce.Z,{label:"Themes"}),(0,x.jsx)($.Z,{control:(0,x.jsx)(q,{}),label:"Dark Mode",value:"dark"}),(0,x.jsx)($.Z,{control:(0,x.jsx)(q,{}),label:"Light Mode",value:"light"})]})})}),(0,x.jsx)(Y.Z,{children:(0,x.jsxs)(ie.Z,{children:[(0,x.jsx)(ce.Z,{label:"Privacy"}),(0,x.jsx)($.Z,{control:(0,x.jsx)(ee.Z,{name:"privacy.display_email",onChange:i,defaultChecked:null===o||void 0===o||null===(r=o.privacy)||void 0===r?void 0:r.display_email}),label:"Display your email address to other users?"}),(0,x.jsx)("br",{}),(0,x.jsx)($.Z,{control:(0,x.jsx)(ee.Z,{name:"privacy.display_phone",onChange:i,defaultChecked:null===o||void 0===o||null===(n=o.privacy)||void 0===n?void 0:n.display_phone}),label:"Display your phone number to other users?"})]})}),(0,x.jsx)(J.Z,{sx:{mb:2}}),(0,x.jsx)(ue.Z,{variant:"outlined",disableElevation:!0,type:"submit",onClick:a,loading:l,children:"Update"})]})}})]})}},6488:function(e,t,r){var n=r(5318);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");t.Z=a},7756:function(e,t,r){var n=r(5318);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PersonOutline");t.Z=a},4721:function(e,t,r){var n=r(3366),o=r(7462),i=r(2791),a=r(8182),l=r(767),c=r(2065),s=r(7630),d=r(3736),u=r(133),h=r(184),v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:(0,c.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,o.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),f=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDivider"}),i=r.absolute,c=void 0!==i&&i,s=r.children,m=r.className,x=r.component,Z=void 0===x?s?"div":"hr":x,g=r.flexItem,j=void 0!==g&&g,b=r.light,w=void 0!==b&&b,S=r.orientation,y=void 0===S?"horizontal":S,C=r.role,k=void 0===C?"hr"!==Z?"separator":void 0:C,R=r.textAlign,I=void 0===R?"center":R,P=r.variant,z=void 0===P?"fullWidth":P,M=(0,n.Z)(r,v),A=(0,o.Z)({},r,{absolute:c,component:Z,flexItem:j,light:w,orientation:y,role:k,textAlign:I,variant:z}),L=function(e){var t=e.absolute,r=e.children,n=e.classes,o=e.flexItem,i=e.light,a=e.orientation,c=e.textAlign,s={root:["root",t&&"absolute",e.variant,i&&"light","vertical"===a&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(s,u.V,n)}(A);return(0,h.jsx)(p,(0,o.Z)({as:Z,className:(0,a.Z)(L.root,m),role:k,ref:t,ownerState:A},M,{children:s?(0,h.jsx)(f,{className:L.wrapper,ownerState:A,children:s}):null}))}));t.Z=m}}]);
//# sourceMappingURL=744.0af2fa56.chunk.js.map