(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{283:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ht}));var a=n(240),r=n(0),o=n.n(r),i=n(7),l=n(2),c=n(466),s=n(43),u=n(138),f=n(10),d=n(54),m=n(40),h=n(15),g=n.n(h);function p(e){var t=Object(r.useState)(e.value),n=g()(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){var t=e.subscribe((function(e){o(e)}));return function(){t.unsubscribe()}}),[e]),a}var b=n(1),v=n.n(b),w=n(463),E=n(284),y=n(61),x=n(465),O=new w.a(null);function S(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("web"===f.a.OS){t.next=7;break}return t.next=3,v.a.awrap(x.b(x.a));case 3:if(e=t.sent,"granted"===e.status){t.next=7;break}throw new Error("Permission Required");case 7:case"end":return t.stop()}}),null,null,null,Promise)}function j(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(S());case 3:return t.next=5,v.a.awrap(E.a({mediaTypes:y.a.Images}));case 5:(e=t.sent).cancelled?O.next(null):O.next(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),null,null,[[0,9]],Promise)}var P,C=n(88),k=n(4),z=n.n(k),T=n(17),D=n(462),H=n(461);function R(e){var t=e.children,n=e.style,a=Object(c.c)();return o.a.createElement(l.a,{style:[{position:"absolute",maxWidth:400,alignSelf:"center",bottom:0,width:"100%",top:0,paddingBottom:a.bottom,justifyContent:"flex-end"},n],pointerEvents:"box-none"},t)}!function(e){e[e.Full=0]="Full",e[e.Slices=1]="Slices"}(P||(P={}));var I=new w.a(P.Full),M=new w.a(2),W=new w.a(0),B=new w.a(0),L=new w.a(0),V=new w.a(0);function A(){M.next(2),W.next(0),B.next(0),L.next(0),V.next(0),I.next(P.Full)}function F(){var e=M.value;M.next(e+1)}function N(){var e=M.value;e<=2||M.next(e-1)}var Y=n(34),X="rgba(48,48,48,0.45)";function q(e){var t=e.touchableStyle,n=e.onPress,a=e.children,r=e.disabled;return o.a.createElement(Y.a,{style:[{backgroundColor:X,borderRadius:10},t],onPress:n,disabled:r},a)}var G=n(26),J=n(460);function U(){var e=Object(G.useNavigation)();return o.a.createElement(Y.a,{style:{backgroundColor:X,borderRadius:10,flexDirection:"row",alignItems:"center",paddingVertical:5,paddingLeft:9,paddingRight:11},onPress:function(){e.goBack()}},o.a.createElement(J.a,{name:"chevron-left",size:28,color:"#fff"}))}var Z={flexDirection:"row",alignItems:"center",paddingVertical:8,paddingHorizontal:12};function K(e){var t=e.currentValue,n=e.disableDecrement,a=e.disableIncrement,r=e.onIncrement,i=e.onDecrement;return o.a.createElement(l.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},pointerEvents:"box-none"},o.a.createElement(q,{onPress:i,disabled:n,touchableStyle:Z},o.a.createElement(H.a,{name:"minus",size:28,color:n?"rgba(140,140,140,0.8)":"#fff"})),o.a.createElement(l.a,{style:{width:140,alignItems:"center"}},o.a.createElement(T.a,{style:{fontSize:30,fontWeight:"700",color:"#fff"}},t)),o.a.createElement(q,{onPress:r,disabled:a,touchableStyle:Z},o.a.createElement(H.a,{name:"plus",size:28,color:"#fff"})))}var Q,$=n(45);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e){var t=e.edge,n="chevron-left",a="chevron-right";switch(t){case Q.Top:n="chevron-up",a="chevron-down";break;case Q.Bottom:n="chevron-down",a="chevron-up"}var r=function(e){return function(){var n=[W,B,L,V][t],a=n.value+e;a>=0&&a<=99&&n.next(a)}},i=-1,c=1,s=e.value<=0,u=e.value>=99;return t===Q.Right&&(i=1,c=-1,s=e.value>=99,u=e.value<=0),o.a.createElement(l.a,{style:{flexDirection:"row",alignItems:"center"}},o.a.createElement(ne,{onPress:r(i),disabled:s},o.a.createElement(H.a,{name:n,size:28,color:s?"rgba(140,140,140,0.8)":"rgba(255, 27, 150, 0.8)"})),o.a.createElement(ae,e),o.a.createElement(ne,{onPress:r(c),disabled:u},o.a.createElement(H.a,{name:a,size:28,color:u?"rgba(140,140,140,0.8)":"rgba(255, 27, 150, 0.8)"})))}function ne(e){var t=e.children,n=e.onPress,a=e.disabled;return o.a.createElement(Y.a,{disabled:a,onPress:n,style:{paddingHorizontal:8}},t)}function ae(e){var t=e.value,n=e.onChange,a=e.edge,c=Object(r.useState)(!1),s=g()(c,2),u=s[0],f=s[1],d=Object(r.useRef)(null),m=t>0?"yellow":"#fff";return o.a.createElement(l.a,{style:{backgroundColor:u?"rgba(255,255,255,0.25)":X,borderRadius:5}},o.a.createElement($.a,{contextMenuHidden:!0,selectTextOnFocus:!0,returnKeyType:"done",keyboardType:"decimal-pad",ref:d,underlineColorAndroid:"transparent",style:ee(ee({},i.a.absoluteFillObject),{},{fontSize:14,color:m,fontWeight:"700",paddingLeft:10}),value:""+t,onFocus:function(){f(!0)},onBlur:function(){f(!1)},onChange:n(a)}),o.a.createElement(l.a,{style:{height:32,paddingHorizontal:10,justifyContent:"center"},pointerEvents:"none"},o.a.createElement(T.a,{style:{color:"transparent",fontSize:14,fontWeight:"700"}},t,o.a.createElement(T.a,{style:{color:m}},"%"))))}function re(){var e=[p(W),p(B),p(L),p(V)],t=function(e){return function(t){[W,B,L,V][e].next(Number(t.nativeEvent.text))}};return o.a.createElement(u.a,{behavior:"padding",pointerEvents:"box-none",enabled:"ios"===f.a.OS},o.a.createElement(l.a,{style:{alignItems:"center",justifyContent:"center",paddingBottom:35},pointerEvents:"box-none"},o.a.createElement(te,{value:e[Q.Top],edge:Q.Top,onChange:t}),o.a.createElement(l.a,{style:{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingHorizontal:"2%"},pointerEvents:"box-none"},o.a.createElement(te,{value:e[Q.Left],edge:Q.Left,onChange:t}),o.a.createElement(te,{value:e[Q.Right],edge:Q.Right,onChange:t})),o.a.createElement(te,{value:e[Q.Bottom],edge:Q.Bottom,onChange:t})))}function oe(){var e=p(I),t=e===P.Slices;return o.a.createElement(Y.a,{onPress:function(){switch(e){case P.Full:I.next(P.Slices);break;case P.Slices:I.next(P.Full)}},style:{backgroundColor:t?"rgba(130,130,130,0.45)":X,borderRadius:10,flexDirection:"row",alignItems:"center",paddingVertical:5,paddingLeft:9,paddingRight:11}},o.a.createElement(D.a,{name:"zoom-out-map",size:28,color:"#fff"}))}!function(e){e[e.Top=0]="Top",e[e.Bottom=1]="Bottom",e[e.Left=2]="Left",e[e.Right=3]="Right"}(Q||(Q={}));var ie=n(6),le=n.n(ie),ce=n(286),se=n(71);function ue(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=e.width,o=e.height,i=r/(t=Math.round(t)),l=o/(n=Math.round(n)),c=Math.ceil(i/2),s=Math.ceil(l/2),u=he(e),f=u.getImageData(0,0,r,o),d=u.createImageData(t,n),m=f.data,h=d.data,g=0;g<n;g++)for(var p=0;p<t;p++){for(var b=4*(p+g*t),v=0,w=0,E=0,y=0,x=0,O=0,S=0,j=(g+.5)*l,P=Math.floor(g*l),C=Math.ceil((g+1)*l),k=P;k<C;k++)for(var z=Math.abs(j-(k+.5))/s,T=(p+.5)*i,D=z*z,H=Math.floor(p*i),R=Math.ceil((p+1)*i),I=H;I<R;I++){var M=Math.abs(T-(I+.5))/c,W=Math.sqrt(D+M*M);if(!(W>=1)){var B=4*(I+k*r);S+=(v=2*W*W*W-3*W*W+1)*m[B+3],E+=v,m[B+3]<255&&(v=v*m[B+3]/250),y+=v*m[B],x+=v*m[B+1],O+=v*m[B+2],w+=v}}h[b]=y/w,h[b+1]=x/w,h[b+2]=O/w,h[b+3]=S/E}a?(e.width=t,e.height=n):u.clearRect(0,0,r,o),u.putImageData(d,0,0)}function fe(e,t,n){var a=n*Math.PI/180,r=Math.cos(a),o=Math.sin(a);return o<0&&(o=-o),r<0&&(r=-r),{width:t*o+e*r,height:t*r+e*o}}function de(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=he(e);i.save(),i.drawImage(t,n,a,r,o,0,0,r,o)}function me(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7?arguments[7]:void 0,c=arguments.length>8?arguments[8]:void 0,s=he(e);s.save(),null==l&&(l=t.naturalWidth),null==c&&(c=t.naturalHeight),s.translate(n+e.width/2,a+e.height/2);var u=2*Math.PI-r*Math.PI/180;s.rotate(u);var f=o?-1:1,d=i?-1:1;return s.scale(f,d),s.drawImage(t,-t.naturalWidth/2,-t.naturalHeight/2,t.naturalWidth,t.naturalHeight),s.restore(),s}function he(e){var t=e.getContext("2d");if(!t)throw new Error("Failed to create canvas context");return t}function ge(e,t){var n;if(t){var a=t.format,r=void 0===a?"png":a;"png"===t.format&&void 0!==t.compress&&console.warn("compress is not supported with png format.");var o=Math.min(1,Math.max(0,t.compress||1));n=e.toDataURL("image/"+r,o)}else n=e.toDataURL();return{uri:n,width:e.width,height:e.height,base64:n}}function pe(e){return new Promise((function(t,n){var a=new Image;a.onload=function(){return t(a)},a.onerror=function(){return n(a)},a.src=e}))}function be(e,t,n){var a,r,o,i,l,c,s,u,f,d,m,h,g,p,b,w,E,y,x,O,S,j,P,C,k,z,T;return v.a.async((function(D){for(;;)switch(D.prev=D.next){case 0:return a=document.createElement("canvas"),D.next=3,v.a.awrap(pe(e));case 3:return r=D.sent,a.width=r.naturalWidth,a.height=r.naturalHeight,t.crop?(o=t.crop,i=o.originX,l=void 0===i?0:i,c=o.originY,s=void 0===c?0:c,u=o.width,f=void 0===u?0:u,d=o.height,m=void 0===d?0:d,f=(h=function(e,t){return Math.max(0,Math.min(t,e))})(f,a.width),m=h(m,a.height),l=h(l,a.width),s=h(s,a.height),a.width=f,a.height=m,de(a,r,l,s,f,m)):t.resize?(g=t.resize,p=g.width,b=g.height,w=r.naturalWidth/r.naturalHeight,E=0,y=0,void 0!==p&&(y=(E=p)/w),void 0!==b&&(y=b,0===E&&(E=y*w)),(x=he(a)).save(),x.drawImage(r,0,0,r.naturalWidth,r.naturalHeight),ue(a,E,y,!0)):void 0!==t.flip?(O=t.flip,S=O===ve.Horizontal,j=O===ve.Vertical,me(a,r,0,0,0,S,j)):void 0!==t.rotate?(P=t.rotate,C=fe(r.naturalWidth,r.naturalHeight,P),k=C.width,z=C.height,a.width=k,a.height=z,me(a,r,0,0,P,!1,!1,k,z)):((T=he(a)).save(),T.drawImage(r,0,0,r.naturalWidth,r.naturalHeight)),D.abrupt("return",ge(a,n));case 8:case"end":return D.stop()}}),null,null,null,Promise)}var ve,we,Ee={manipulateAsync:function(e){var t,n,a,r,o,i,l,c,s=arguments;return v.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(t=s.length>1&&void 0!==s[1]?s[1]:[],n=s.length>2?s[2]:void 0,t.length){u.next=14;break}return a=document.createElement("canvas"),u.next=6,v.a.awrap(pe(e));case 6:return r=u.sent,a.width=r.naturalWidth,a.height=r.naturalHeight,he(a).drawImage(r,0,0,r.naturalWidth,r.naturalHeight),u.abrupt("return",ge(a,n));case 14:i=0;case 15:if(!(i<t.length)){u.next=25;break}return l=t[i],c=void 0,i===t.length-1&&(c=n),u.next=21,v.a.awrap(be(e||o.uri,l,c));case 21:o=u.sent;case 22:i++,u.next=15;break;case 25:return u.abrupt("return",o);case 26:case"end":return u.stop()}}),null,null,null,Promise)}};!function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ve||(ve={})),function(e){e.JPEG="jpeg",e.PNG="png",e.WEBP="webp"}(we||(we={}));var ye,xe=n(142),Oe=n(64),Se=function e(t,n,a,r,o,i){le()(this,e),this.images=new w.a([]),this.assets=[],this.image=t,this.slices=n,this.top=a,this.bottom=r,this.left=o,this.right=i},je=new w.a(null);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ke(){var e=Object(r.useState)(ye.Slice),t=g()(e,2),n=t[0],a=t[1];return o.a.createElement(R,null,function(){switch(n){case ye.Slice:return o.a.createElement(Te,null);case ye.Trim:return o.a.createElement(re,null)}}(),o.a.createElement(De,null,"web"===f.a.OS?o.a.createElement(U,null):o.a.createElement(oe,null),o.a.createElement(l.a,{style:{flexDirection:"row"},pointerEvents:"box-none"},o.a.createElement(Ie,{disabled:n==ye.Trim,onToggle:function(){a(ye.Trim)},controlStyle:{borderTopRightRadius:0,borderBottomRightRadius:0,marginRight:3,backgroundColor:n==ye.Trim?"rgba(130,130,130,0.45)":X}}),o.a.createElement(Re,{disabled:n==ye.Slice,onToggle:function(){a(ye.Slice)},controlStyle:{borderTopLeftRadius:0,borderBottomLeftRadius:0,backgroundColor:n==ye.Slice?"rgba(130,130,130,0.45)":X}})),"ios"===f.a.OS?o.a.createElement(U,null):null))}function ze(){return o.a.createElement(l.a,{style:{alignItems:"center",marginBottom:35}},o.a.createElement(q,{touchableStyle:Ce(Ce({},He),{},{paddingVertical:10,paddingHorizontal:15}),onPress:function(){!function(){var e,t,n,a,r,o,i,l,c,s,u,d,m,h,g,p,b,w,E,y,x,S,j,P;v.a.async((function(C){for(;;)switch(C.prev=C.next){case 0:if(e=O.value,t=M.value,n=W.value,a=B.value,r=L.value,o=V.value,e){C.next=8;break}return C.abrupt("return");case 8:i=new Se(e,t,n,a,r,o),je.next(i),l=M.value,c=Math.round(n/100*e.height),s=Math.round(a/100*e.height),u=e.height-c-s,d=Math.round(r/100*e.width),m=Math.round(o/100*e.width),h=e.width-d-m,g=Math.floor(h/l),p="web"===f.a.OS,b=[],C.prev=20,w=0;case 22:if(!(w<l)){C.next=33;break}return E=d+g*w,y=c,x=p?Ee.manipulateAsync:ce.a,C.next=28,v.a.awrap(x(e.uri,[{crop:{originX:E,originY:y,width:g,height:u}}],{compress:1,format:se.b.JPEG,base64:p}));case 28:S=C.sent,b.push(S);case 30:w++,C.next=22;break;case 33:if(p){C.next=43;break}j=0;case 35:if(!(j<b.length)){C.next=43;break}return C.next=38,v.a.awrap(Oe.b(b[j].uri));case 38:P=C.sent,i.assets.push(P);case 40:j++,C.next=35;break;case 43:i.images.next(b),C.next=49;break;case 46:C.prev=46,C.t0=C.catch(20),xe.a.alert(C.t0.message);case 49:case"end":return C.stop()}}),null,null,[[20,46]],Promise)}()}},o.a.createElement(D.a,{name:"photo-camera",size:20,color:"#fff"}),o.a.createElement(T.a,{style:{color:"yellow",fontSize:12,fontWeight:"700",marginLeft:10}},"SAVE PHOTOS")))}!function(e){e[e.Slice=0]="Slice",e[e.Trim=1]="Trim"}(ye||(ye={}));var Te=function(){var e=p(M);return o.a.createElement(l.a,{style:{marginBottom:40},pointerEvents:"box-none"},o.a.createElement(ze,null),o.a.createElement(K,{currentValue:e,disableDecrement:e<=2,onIncrement:F,onDecrement:N}))},De=function(e){var t=e.children;return o.a.createElement(l.a,{style:{flexDirection:"row",justifyContent:"space-evenly",marginBottom:20},pointerEvents:"box-none"},t)},He={flexDirection:"row",alignItems:"center",paddingVertical:4,paddingHorizontal:10},Re=function(e){var t=e.onToggle,n=e.controlStyle,a=e.disabled;return o.a.createElement(q,{touchableStyle:Ce(Ce({},He),n),onPress:t,disabled:a},o.a.createElement(H.a,{name:"scissors-cutting",size:20,color:"#fff",style:{transform:[{rotate:"45deg"},{translateY:-2}]}}),o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:"#fff",marginLeft:8}},"SLICE"))},Ie=function(e){var t=e.onToggle,n=e.controlStyle,a=e.disabled;return o.a.createElement(q,{touchableStyle:Ce(Ce({},He),n),onPress:t,disabled:a},o.a.createElement(H.a,{name:"aspect-ratio",size:20,color:"#fff"}),o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:"#fff",marginLeft:8}},"CROP"))};function Me(){var e=Object(m.a)(),t=Object(c.c)(),n=p(O),a=p(W),r=p(B),i=p(L),s=p(V),u=p(M),f=9*function(e,t,n,a,r,o){return(e.width-(r+o)/100*e.width)/t/(e.height-(n+a)/100*e.height)}(n,u,a,r,i,s),d=f>16;return o.a.createElement(l.a,{style:{position:"absolute",top:.04*e.height+t.top,alignSelf:"center",alignItems:"center"},pointerEvents:"none"},o.a.createElement(l.a,{style:{flexDirection:"row",marginBottom:12}},o.a.createElement(l.a,{style:{backgroundColor:X,borderRadius:10,paddingHorizontal:10,paddingVertical:8,flexDirection:"row",marginRight:6}},o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:"#fff"}},"W"),o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:"yellow",marginLeft:10}},Math.round((n.width-(i+s)/100*n.width)/u),"px")),o.a.createElement(l.a,{style:{backgroundColor:X,borderRadius:10,paddingHorizontal:10,paddingVertical:8,flexDirection:"row",marginLeft:6}},o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:"#fff"}},"H"),o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:"yellow",marginLeft:10}},n.height-(a+r)/100*n.height,"px"))),o.a.createElement(l.a,{style:{backgroundColor:X,borderRadius:10,paddingHorizontal:10,paddingVertical:8,flexDirection:"row"}},o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:"#fff"}},"RATIO"),o.a.createElement(T.a,{style:{fontSize:12,fontWeight:"700",color:d?"red":"yellow",marginLeft:10}},f.toFixed(2)," : 9")))}function We(){var e=Object(m.a)(),t=p(O);if(!t)return null;for(var n=p(M),a=p(W),r=p(B),i=p(L),c=p(V),s=n-1,u=[],f=0;f<s;f++)u.push(o.a.createElement(l.a,{key:"bar"+f,style:{backgroundColor:"rgba(235, 176, 40, 0.8)",width:1}}));var d=e.width/t.width,h=Math.round(i/100*e.width),g=Math.round(c/100*e.width),b=d*t.height,v=(t.height,Math.round(a/100*b)),w=Math.round(r/100*b);return o.a.createElement(l.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,flexDirection:"row",justifyContent:"space-evenly",paddingTop:v,paddingLeft:h,paddingRight:g,paddingBottom:w}},u,o.a.createElement(l.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,borderTopWidth:v,borderLeftWidth:h,borderRightWidth:g,borderBottomWidth:w,borderColor:"rgba(0,0,0,0.9)"}}),o.a.createElement(l.a,{style:{position:"absolute",top:v,left:h,right:g,bottom:w,borderWidth:1,borderTopColor:Be(a),borderLeftColor:Be(i),borderRightColor:Be(c),borderBottomColor:Be(r)}}))}function Be(e){return e>0?Le:Ve}var Le="rgba(255, 27, 150, 0.8)",Ve="rgba(255, 27, 150, 0)",Ae=n(11);function Fe(e){for(var t=e.offset,n=e.slices,a=e.window,r=[],i=0;i<n;i++)r.push(o.a.createElement(Ne,{offset:t,slices:n,window:a,index:i,key:""+i}));return o.a.createElement(l.a,{pointerEvents:"none",style:{alignSelf:"center",flexDirection:"row",height:2,marginBottom:-10,marginTop:8}},r)}function Ne(e){var t=e.offset,n=(e.slices,e.index),a=e.window,r=t.current.interpolate({inputRange:[(n-1)*a.width,n*a.width,(n+1)*a.width],outputRange:[-20,0,20],extrapolate:"clamp"});return o.a.createElement(l.a,{style:{width:20,backgroundColor:"#888",marginHorizontal:4,overflow:"hidden"}},o.a.createElement(Ae.a.View,{style:{flex:1,backgroundColor:"#fff",transform:[{translateX:r}]}}))}function Ye(e){var t=e.id,n=Object(r.useRef)(new Ae.a.Value(0)),a=Object(m.a)(),i=p(O),c=p(M),u=p(W),f=p(B),d=p(L),h=p(V);if(!i)return null;var g=d/100,b=1-(g+h/100),v=u/100,w=1-(v+f/100),E=i.width*b,y=i.height*w,x=E/c,S=a.width/x,j=y*S,P=x*S*c,k=P/b,z=j/w,T=z*-v,D=k*-g;return o.a.createElement(l.a,{style:{flex:1,backgroundColor:"#000",justifyContent:"center"}},o.a.createElement(l.a,{style:{height:j,width:a.width}},o.a.createElement(Ae.a.ScrollView,{showsHorizontalScrollIndicator:!1,scrollEventThrottle:16,onScroll:Ae.a.event([{nativeEvent:{contentOffset:{x:n.current}}}],{useNativeDriver:!0}),horizontal:!0,pagingEnabled:!0,style:{flex:1}},o.a.createElement(l.a,{style:{flex:1,backgroundColor:"#333",height:j,width:P,overflow:"hidden"}},o.a.createElement(C.a,{id:t},o.a.createElement(s.a,{source:i,style:{position:"absolute",height:z,width:k,top:T,left:D}}))))),o.a.createElement(Fe,{offset:n,window:a,slices:c}))}function Xe(){var e=Object(r.useState)([]),t=g()(e,2),n=t[0],a=t[1],i=p(je);return Object(r.useEffect)((function(){if(i){var e=i.images.subscribe((function(e){a(e)}));return function(){e.unsubscribe()}}}),[i]),i?(console.log(n),o.a.createElement(l.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"center",alignItems:"center"}},o.a.createElement(l.a,{style:{alignItems:"center"}},o.a.createElement(T.a,{style:{color:"#fff",fontSize:16,fontWeight:"700",marginBottom:10}},n.length?"Slyced":"Slicing"),o.a.createElement(T.a,{style:{color:"#fff",fontSize:12,marginBottom:20}},n.length?"Click or tap to download each slyce. May take a few seconds for the download to start.":"Wait a few seconds... Apps do this a bit faster."),o.a.createElement(l.a,{style:{flexDirection:"row",height:130}},n.map((function(e,t){return o.a.createElement(Y.a,{key:""+t,style:{height:130,width:150*e.width/e.height,overflow:"hidden",marginHorizontal:5},onPress:function(){setTimeout((function(){!function(e,t){var n,a=document.createElement("a");a.href=e,a.setAttribute("download",t),a.click(),null==(n=a.parentElement)||n.removeChild(a)}(e.base64,"slyce-"+(t+1)+".jpg")}),500)}},o.a.createElement("img",{style:{height:130,width:150*e.width/e.height,flex:"0 0 auto",cursor:"pointer"},src:e.base64}))})))),o.a.createElement(qe,null))):null}function qe(){return o.a.createElement(q,{touchableStyle:{position:"absolute",top:20,right:20,height:44,width:44,justifyContent:"center",alignItems:"center"},onPress:function(){je.next(null)}},o.a.createElement(H.a,{name:"close",size:24,color:"#fff"}))}function Ge(e){var t=e.route.params.id;return o.a.createElement(l.a,{style:{backgroundColor:"#000",flex:1}},o.a.createElement(u.a,{enabled:"ios"===f.a.OS,behavior:"padding",style:{flex:1}},o.a.createElement(Je,{id:t})),o.a.createElement(ke,null),o.a.createElement(Me,null),o.a.createElement(Xe,null))}function Je(e){var t,n=e.id;switch(p(I)){case P.Full:t=o.a.createElement(Ue,{id:n});break;case P.Slices:t=o.a.createElement(Ye,{id:n});break;default:return null}return t}function Ue(e){var t=e.id,n=Object(m.a)(),a=p(O),r=a.height*n.width/a.width;return o.a.createElement(d.a,{style:{flex:1},bouncesZoom:!0,maximumZoomScale:4,minimumZoomScale:1,centerContent:!0,alwaysBounceVertical:!0,alwaysBounceHorizontal:!0,contentContainerStyle:"ios"===f.a.OS?null:{minHeight:n.height,justifyContent:"center",paddingBottom:"5%"}},o.a.createElement(l.a,null,o.a.createElement(C.a,{id:t},o.a.createElement(s.a,{source:a,style:{height:r,width:n.width}})),o.a.createElement(We,null)))}var Ze=n(175),Ke=(n(450),n(238)),Qe=n(183),$e=n(18),_e=n.n($e),et=n(93),tt=n(180),nt=n.n(tt),at=n(273),rt=n.n(at),ot=n(285),it=n(181),lt=n.n(it);function ct(e){var t,n,a,r;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,v.a.awrap(e);case 2:if(t=o.sent){o.next=5;break}return o.abrupt("return","");case 5:return n="",o.prev=6,a="@address/"+t.latitude+t.longitude,o.next=10,v.a.awrap(lt.a.getItem(a));case 10:if(null===(r=o.sent)||!r.length){o.next=13;break}return o.abrupt("return",r);case 13:return o.next=15,v.a.awrap(ot.a(t));case 15:return o.sent.find((function(e){return e.city&&e.country?(n=e.city+", "+e.country,!0):e.name?(n=e.name,!0):void 0})),o.next=19,v.a.awrap(lt.a.setItem(a,n));case 19:o.next=23;break;case 21:o.prev=21,o.t0=o.catch(6);case 23:return o.abrupt("return",n);case 24:case"end":return o.stop()}}),null,null,[[6,21]],Promise)}nt.a.extend(rt.a);var st=new w.a([]),ut=new Map;function ft(e){var t=nt()(e);return{date:t.format("ddd MMM D, YYYY [at] h:mma"),from:t.fromNow()}}function dt(e){var t,n,a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.total,n=e.after,a=e.album,r.abrupt("return",Oe.f({album:a,sortBy:"ios"===f.a.OS?Oe.a.modificationTime:void 0,first:t,after:n}));case 2:case"end":return r.stop()}}),null,null,null,Promise)}function mt(e){return e.filter((function(e){var t;return null==(t=e.mediaSubtypes)?void 0:t.includes("panorama")}))}function ht(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("web"===f.a.OS){t.next=7;break}return t.next=3,v.a.awrap(Oe.g());case 3:if(e=t.sent,"granted"===e.status){t.next=7;break}throw new Error("Permission Required");case 7:case"end":return t.stop()}}),null,null,null,Promise)}function gt(e){var t=e.item,n=(e.index,e.window),a=Object(G.useNavigation)(),i=gt.getHeight(t,n),c=function(e){var t=ut.get(e.id);if(t)return t;var n=ft(e.modificationTime),a=ft(e.creationTime),r=Oe.e(e).then((function(e){return e.location}));return t={updatedAt:n,createdAt:a,coordinates:r,address:ct(r)},ut.set(e.id,t),t}(t),u=function(e){var t=Object(r.useState)(""),n=g()(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){!function(){var t;v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(e.address);case 2:t=n.sent,o(t);case 4:case"end":return n.stop()}}),null,null,null,Promise)}()}),[e]),a}(c);return o.a.createElement(Y.a,{style:{height:i,overflow:"hidden"},onPress:function(){!function(e){v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:O.next(e);case 1:case"end":return t.stop()}}),null,null,null,Promise)}(t),A(),a.navigate("Editor - Slyce",{id:t.id})}},o.a.createElement(C.a,{id:t.id},o.a.createElement(s.a,{source:t,style:{height:i-gt.infoHeight,width:n.width,overflow:"hidden"}})),o.a.createElement(l.a,{style:{paddingHorizontal:10,paddingTop:10}},o.a.createElement(T.a,{style:{color:"#fff"},numberOfLines:1},u),o.a.createElement(T.a,{style:{color:"#fff"},numberOfLines:1},"created ",c.createdAt.from),o.a.createElement(T.a,{style:{color:"#fff"},numberOfLines:1},"updated ",c.updatedAt.from)))}gt.infoHeight=90,gt.getHeight=function(e,t){return Math.ceil(e.height*t.width/e.width)+this.infoHeight};var pt=n(112);function bt(){return o.a.createElement(l.a,null,o.a.createElement(vt,null),o.a.createElement(vt,null),o.a.createElement(vt,null))}function vt(){var e=Object(m.a)();return o.a.createElement(l.a,null,o.a.createElement(pt.a,{height:80,width:e.width-20,style:{marginLeft:10},shimmerColors:["#222","#333","#222"]}),o.a.createElement(pt.a,{height:20,width:80,shimmerColors:["#222","#333","#222"],style:{marginLeft:10,marginTop:20}}),o.a.createElement(pt.a,{height:15,width:150,shimmerColors:["#222","#333","#222"],style:{marginLeft:10,marginTop:5}}),o.a.createElement(pt.a,{height:15,width:150,shimmerColors:["#222","#333","#222"],style:{marginLeft:10,marginTop:5}}),o.a.createElement(T.a,null,"Austin, TX"),o.a.createElement(T.a,null,"Austin, TX"),o.a.createElement(T.a,null,"Austin, TX"))}function wt(){var e=Object(c.c)(),t=Object(m.a)(),n=p(st);return Object(r.useEffect)((function(){!function(){var e,t,n;v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(ht());case 3:if(e=[],"android"!==f.a.OS){a.next=11;break}return a.next=7,v.a.awrap(Oe.d());case 7:if(t=a.sent,t.find((function(e){return"Camera"===e.title}))){a.next=11;break}return a.abrupt("return");case 11:return a.next=13,v.a.awrap(dt({total:20,album:void 0}));case 13:n=a.sent,e=e.concat(mt(n.assets));case 15:if(!n.hasNextPage){a.next=22;break}return a.next=18,v.a.awrap(dt({total:20,after:n.endCursor,album:void 0}));case 18:n=a.sent,e=e.concat(mt(n.assets)),a.next=15;break;case 22:st.next(e),a.next=28;break;case 25:a.prev=25,a.t0=a.catch(0),xe.a.alert("Error",a.t0.message);case 28:case"end":return a.stop()}}),null,null,[[0,25]],Promise)}()}),[]),o.a.createElement(l.a,{style:{flex:1,backgroundColor:"#000"}},o.a.createElement(et.a,{ListEmptyComponent:bt,ListHeaderComponent:function(){return o.a.createElement(l.a,{style:{height:80+e.top,paddingHorizontal:10,paddingTop:e.top}},o.a.createElement(T.a,{style:{fontSize:30,color:"#fff",fontWeight:"700"}},"Panoramas"),o.a.createElement(T.a,{style:{fontSize:14,color:"#ccc"}},"Select to split into equal slyces"))},contentInsetAdjustmentBehavior:"never",style:{flex:1},data:n,renderItem:function(e){return o.a.createElement(gt,_e()({window:t},e))},viewabilityConfig:wt.viewabilityConfig}))}function Et(){if("ios"===f.a.OS)return o.a.createElement(wt,null);var e=Object(m.a)(),t=Object(G.useNavigation)();return o.a.createElement(l.a,{style:{backgroundColor:"#000",height:"100%",alignItems:"center"}},o.a.createElement(l.a,{style:{flex:1}}),o.a.createElement(s.a,{source:n(433),style:{height:180,width:180,resizeMode:"cover"}}),o.a.createElement(T.a,{style:{color:"#fff",fontWeight:"500",marginTop:-10,marginBottom:30,marginHorizontal:50,lineHeight:20,textAlign:"center",zIndex:4}},"Select a panorama to split it into equal slyces"),o.a.createElement(q,{onPress:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.awrap(j());case 2:O.value&&(A(),t.navigate("Editor - Slyce",{id:""}));case 3:case"end":return e.stop()}}),null,null,null,Promise)},touchableStyle:{paddingVertical:12,paddingHorizontal:16}},o.a.createElement(T.a,{style:{color:"#fff",fontSize:15,fontWeight:"700"}},"SELECT PANORAMA")),o.a.createElement(l.a,{style:{flex:1,justifyContent:"flex-end",paddingTop:"web"===f.a.OS?.15*e.height:0}},o.a.createElement(yt,null)))}function yt(){return"web"!==f.a.OS?null:o.a.createElement(l.a,{style:{alignItems:"center",paddingBottom:40}},o.a.createElement(T.a,{style:{color:"#fff",marginBottom:20,fontWeight:"500"}},"Apps also available"),o.a.createElement(l.a,{style:{flexDirection:"row",padding:10,paddingTop:0}},o.a.createElement(q,{touchableStyle:{paddingHorizontal:12,paddingVertical:8,marginHorizontal:5}},o.a.createElement(T.a,{style:{color:"#fff",fontSize:13,fontWeight:"700"}},"iOS")),o.a.createElement(q,{touchableStyle:{paddingHorizontal:12,paddingVertical:8,marginHorizontal:5}},o.a.createElement(T.a,{style:{color:"#fff",fontSize:13,fontWeight:"700"}},"ANDROID"))))}wt.viewabilityConfig={itemVisiblePercentThreshold:.1,minimumViewTime:250};var xt=n(153),Ot=n(464);function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function jt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?St(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pt(){var e=Object(r.useRef)(xt.a.currentState),t=Object(r.useRef)(new Ae.a.Value(0)),n=Object(r.useRef)(new Ae.a.Value(0)),a=Object(r.useState)(!1),i=g()(a,2),c=i[0],s=i[1];Object(r.useEffect)((function(){var a=function(t){e.current.match(/inactive|background/)&&"active"===t&&r(),e.current=t},r=function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.awrap(Ct());case 2:e.sent&&(s(!0),Ae.a.parallel([Ae.a.timing(t.current,{duration:300,toValue:1},{useNativeDriver:!0}),Ae.a.timing(n.current,{duration:300,toValue:-20},{useNativeDriver:!0})]).start());case 4:case"end":return e.stop()}}),null,null,null,Promise)};return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.awrap(r());case 2:xt.a.addEventListener("change",a);case 3:case"end":return e.stop()}}),null,null,null,Promise),function(){xt.a.removeEventListener("change",a)}}),[]);var u=c?"auto":"none";return o.a.createElement(l.a,{style:kt.container,pointerEvents:"box-none"},o.a.createElement(Ae.a.View,{style:[kt.btnBG,{opacity:t.current,transform:[{translateY:n.current}]}],pointerEvents:u},o.a.createElement(Y.a,{onPress:function(){Ot.c()},style:kt.btn},o.a.createElement(T.a,{style:kt.text},"Update Available"),o.a.createElement(T.a,{style:kt.subText},"Tap to apply"))))}function Ct(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return e.prev=2,e.next=5,v.a.awrap(Ot.a());case 5:if(!e.sent.isAvailable){e.next=10;break}return e.next=9,v.a.awrap(Ot.b());case 9:return e.abrupt("return",!0);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),alert(e.t0.message);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),null,null,[[2,12]],Promise)}var kt=i.a.create({container:jt(jt({},i.a.absoluteFillObject),{},{justifyContent:"flex-end",alignItems:"center",paddingBottom:100}),btnBG:{height:52,width:190,borderRadius:26,backgroundColor:"#157AFC",shadowColor:"#000",shadowOffset:{width:0,height:3},shadowOpacity:.29,shadowRadius:4.65,elevation:7},btn:{flex:1,justifyContent:"center",alignItems:"center",paddingBottom:1},text:{fontSize:16,fontWeight:"500",color:"#fff"},subText:{marginTop:2,fontSize:12,color:"#fff"}});Object(Ze.enableScreens)();var zt=Object(Qe.a)(),Tt=Object(Qe.a)();function Dt(){return o.a.createElement(zt.Navigator,{headerMode:"none"},o.a.createElement(zt.Screen,{name:"Slyce",component:Et}),o.a.createElement(zt.Screen,{name:"Editor - Slyce",component:Ge,sharedElements:function(e,t,n){return[e.params.id]}}))}function Ht(){return o.a.createElement(c.b,null,o.a.createElement(l.a,{style:Rt.container},o.a.createElement(Ke.a,null,o.a.createElement(Tt.Navigator,{mode:"modal",headerMode:"none"},o.a.createElement(Tt.Screen,{name:"Main",component:Dt}),o.a.createElement(Dt,null),o.a.createElement(Tt.Screen,{component:Ye,name:"Preview"}))),o.a.createElement(Pt,null),o.a.createElement(a.StatusBar,{style:"light"})))}var Rt=i.a.create({container:{flex:1,backgroundColor:"#000"}})},299:function(e,t,n){e.exports=n(451)},433:function(e,t,n){e.exports=n.p+"static/media/splash.149243aa.png"}},[[299,1,2]]]);
//# sourceMappingURL=app.f1e21a0c.chunk.js.map