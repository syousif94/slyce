(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ht}));var a=n(241),r=n(0),o=n.n(r),i=n(9),l=n(2),c=n(467),s=n(43),u=n(139),f=n(10),d=n(45),m=n(40),h=n(15),g=n.n(h);function p(e){var t=Object(r.useState)(e.value),n=g()(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){var t=e.subscribe((function(e){o(e)}));return function(){t.unsubscribe()}}),[e]),a}var b=n(1),v=n.n(b),E=n(465),w=n(285),y=n(63),x=n(466),S=new E.a(null);function O(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("web"===f.a.OS){t.next=7;break}return t.next=3,v.a.awrap(x.b(x.a));case 3:if(e=t.sent,"granted"===e.status){t.next=7;break}throw new Error("Permission Required");case 7:case"end":return t.stop()}}),null,null,null,Promise)}function P(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(O());case 3:return t.next=5,v.a.awrap(w.a({mediaTypes:y.a.Images}));case 5:(e=t.sent).cancelled?S.next(null):S.next(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),null,null,[[0,9]],Promise)}var z,j=n(91),C=n(4),k=n.n(C),H=n(17),T=n(464),R=n(463);function W(e){var t=e.children,n=e.style,a=Object(c.c)();return o.a.createElement(l.a,{style:[{position:"absolute",maxWidth:400,alignSelf:"center",bottom:0,width:"100%",top:0,paddingBottom:a.bottom,justifyContent:"flex-end"},n],pointerEvents:"box-none"},t)}!function(e){e[e.Full=0]="Full",e[e.Slices=1]="Slices"}(z||(z={}));var M=new E.a(z.Full),I=new E.a(2),D=new E.a(0),L=new E.a(0),B=new E.a(0),A=new E.a(0);function V(){I.next(2),D.next(0),L.next(0),B.next(0),A.next(0),M.next(z.Full)}function F(e,t,n,a,r,o){return(e.width-(r+o)/100*e.width)/t/(e.height-(n+a)/100*e.height)}function N(){var e=I.value;I.next(e+1)}function Y(){var e=I.value;e<=2||I.next(e-1)}var U=n(39),X="rgba(48,48,48,0.45)";function q(e){var t=e.touchableStyle,n=e.onPress,a=e.children,r=e.disabled;return o.a.createElement(U.a,{style:[{backgroundColor:X,borderRadius:10},t],onPress:n,disabled:r},a)}var J=n(26),G=n(462);function Z(){var e=Object(J.useNavigation)();return o.a.createElement(U.a,{style:{backgroundColor:X,borderRadius:10,flexDirection:"row",alignItems:"center",paddingVertical:5,paddingLeft:9,paddingRight:11},onPress:function(){e.goBack()}},o.a.createElement(G.a,{name:"chevron-left",size:28,color:"#fff"}))}var K={flexDirection:"row",alignItems:"center",paddingVertical:8,paddingHorizontal:12};function Q(e){var t=e.currentValue,n=e.disableDecrement,a=e.disableIncrement,r=e.onIncrement,i=e.onDecrement;return o.a.createElement(l.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},pointerEvents:"box-none"},o.a.createElement(q,{onPress:i,disabled:n,touchableStyle:K},o.a.createElement(R.a,{name:"minus",size:28,color:n?"rgba(140,140,140,0.8)":"#fff"})),o.a.createElement(l.a,{style:{width:140,alignItems:"center"}},o.a.createElement(H.a,{style:{fontSize:30,fontWeight:"700",color:"#fff"}},t)),o.a.createElement(q,{onPress:r,disabled:a,touchableStyle:K},o.a.createElement(R.a,{name:"plus",size:28,color:"#fff"})))}var $,_=n(46);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){k()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e){var t=e.edge,n="chevron-left",a="chevron-right";switch(t){case $.Top:n="chevron-up",a="chevron-down";break;case $.Bottom:n="chevron-down",a="chevron-up"}var r=function(e){return function(){var n=[D,L,B,A][t],a=n.value+e;a>=0&&a<=99&&n.next(a)}},i=-1,c=1,s=e.value<=0,u=e.value>=99;return t===$.Right&&(i=1,c=-1,s=e.value>=99,u=e.value<=0),o.a.createElement(l.a,{style:{flexDirection:"row",alignItems:"center"}},o.a.createElement(ae,{onPress:r(i),disabled:s},o.a.createElement(R.a,{name:n,size:28,color:s?"rgba(140,140,140,0.8)":"rgba(255, 27, 150, 0.8)"})),o.a.createElement(re,e),o.a.createElement(ae,{onPress:r(c),disabled:u},o.a.createElement(R.a,{name:a,size:28,color:u?"rgba(140,140,140,0.8)":"rgba(255, 27, 150, 0.8)"})))}function ae(e){var t=e.children,n=e.onPress,a=e.disabled;return o.a.createElement(U.a,{disabled:a,onPress:n,style:{paddingHorizontal:8}},t)}function re(e){var t=e.value,n=e.onChange,a=e.edge,c=Object(r.useState)(!1),s=g()(c,2),u=s[0],f=s[1],d=Object(r.useRef)(null),m=t>0?"yellow":"#fff";return o.a.createElement(l.a,{style:{backgroundColor:u?"rgba(255,255,255,0.25)":X,borderRadius:5}},o.a.createElement(_.a,{contextMenuHidden:!0,selectTextOnFocus:!0,returnKeyType:"done",keyboardType:"decimal-pad",ref:d,underlineColorAndroid:"transparent",style:te(te({},i.a.absoluteFillObject),{},{fontSize:14,color:m,fontWeight:"700",paddingLeft:10}),value:""+t,onFocus:function(){f(!0)},onBlur:function(){f(!1)},onChange:n(a)}),o.a.createElement(l.a,{style:{height:32,paddingHorizontal:10,justifyContent:"center"},pointerEvents:"none"},o.a.createElement(H.a,{style:{color:"transparent",fontSize:14,fontWeight:"700"}},t,o.a.createElement(H.a,{style:{color:m}},"%"))))}function oe(){var e=[p(D),p(L),p(B),p(A)],t=function(e){return function(t){[D,L,B,A][e].next(Number(t.nativeEvent.text))}};return o.a.createElement(u.a,{behavior:"padding",pointerEvents:"box-none",enabled:"ios"===f.a.OS},o.a.createElement(l.a,{style:{alignItems:"center",justifyContent:"center",paddingBottom:35},pointerEvents:"box-none"},o.a.createElement(ne,{value:e[$.Top],edge:$.Top,onChange:t}),o.a.createElement(l.a,{style:{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingHorizontal:"2%"},pointerEvents:"box-none"},o.a.createElement(ne,{value:e[$.Left],edge:$.Left,onChange:t}),o.a.createElement(ne,{value:e[$.Right],edge:$.Right,onChange:t})),o.a.createElement(ne,{value:e[$.Bottom],edge:$.Bottom,onChange:t})))}function ie(){var e=p(M),t=e===z.Slices;return o.a.createElement(U.a,{onPress:function(){switch(e){case z.Full:M.next(z.Slices);break;case z.Slices:M.next(z.Full)}},style:{backgroundColor:t?"rgba(130,130,130,0.45)":X,borderRadius:10,flexDirection:"row",alignItems:"center",paddingVertical:5,paddingLeft:9,paddingRight:11}},o.a.createElement(T.a,{name:"zoom-out-map",size:28,color:"#fff"}))}!function(e){e[e.Top=0]="Top",e[e.Bottom=1]="Bottom",e[e.Left=2]="Left",e[e.Right=3]="Right"}($||($={}));var le=n(6),ce=n.n(le),se=n(287),ue=n(73);function fe(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=e.width,o=e.height,i=r/(t=Math.round(t)),l=o/(n=Math.round(n)),c=Math.ceil(i/2),s=Math.ceil(l/2),u=ge(e),f=u.getImageData(0,0,r,o),d=u.createImageData(t,n),m=f.data,h=d.data,g=0;g<n;g++)for(var p=0;p<t;p++){for(var b=4*(p+g*t),v=0,E=0,w=0,y=0,x=0,S=0,O=0,P=(g+.5)*l,z=Math.floor(g*l),j=Math.ceil((g+1)*l),C=z;C<j;C++)for(var k=Math.abs(P-(C+.5))/s,H=(p+.5)*i,T=k*k,R=Math.floor(p*i),W=Math.ceil((p+1)*i),M=R;M<W;M++){var I=Math.abs(H-(M+.5))/c,D=Math.sqrt(T+I*I);if(!(D>=1)){var L=4*(M+C*r);O+=(v=2*D*D*D-3*D*D+1)*m[L+3],w+=v,m[L+3]<255&&(v=v*m[L+3]/250),y+=v*m[L],x+=v*m[L+1],S+=v*m[L+2],E+=v}}h[b]=y/E,h[b+1]=x/E,h[b+2]=S/E,h[b+3]=O/w}a?(e.width=t,e.height=n):u.clearRect(0,0,r,o),u.putImageData(d,0,0)}function de(e,t,n){var a=n*Math.PI/180,r=Math.cos(a),o=Math.sin(a);return o<0&&(o=-o),r<0&&(r=-r),{width:t*o+e*r,height:t*r+e*o}}function me(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=ge(e);i.save(),i.drawImage(t,n,a,r,o,0,0,r,o)}function he(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7?arguments[7]:void 0,c=arguments.length>8?arguments[8]:void 0,s=ge(e);s.save(),null==l&&(l=t.naturalWidth),null==c&&(c=t.naturalHeight),s.translate(n+e.width/2,a+e.height/2);var u=2*Math.PI-r*Math.PI/180;s.rotate(u);var f=o?-1:1,d=i?-1:1;return s.scale(f,d),s.drawImage(t,-t.naturalWidth/2,-t.naturalHeight/2,t.naturalWidth,t.naturalHeight),s.restore(),s}function ge(e){var t=e.getContext("2d");if(!t)throw new Error("Failed to create canvas context");return t}function pe(e,t){var n;if(t){var a=t.format,r=void 0===a?"png":a;"png"===t.format&&void 0!==t.compress&&console.warn("compress is not supported with png format.");var o=Math.min(1,Math.max(0,t.compress||1));n=e.toDataURL("image/"+r,o)}else n=e.toDataURL();return{uri:n,width:e.width,height:e.height,base64:n}}function be(e){return new Promise((function(t,n){var a=new Image;a.onload=function(){return t(a)},a.onerror=function(){return n(a)},a.src=e}))}function ve(e,t,n){var a,r,o,i,l,c,s,u,f,d,m,h,g,p,b,E,w,y,x,S,O,P,z,j,C,k,H;return v.a.async((function(T){for(;;)switch(T.prev=T.next){case 0:return a=document.createElement("canvas"),T.next=3,v.a.awrap(be(e));case 3:return r=T.sent,a.width=r.naturalWidth,a.height=r.naturalHeight,t.crop?(o=t.crop,i=o.originX,l=void 0===i?0:i,c=o.originY,s=void 0===c?0:c,u=o.width,f=void 0===u?0:u,d=o.height,m=void 0===d?0:d,f=(h=function(e,t){return Math.max(0,Math.min(t,e))})(f,a.width),m=h(m,a.height),l=h(l,a.width),s=h(s,a.height),a.width=f,a.height=m,me(a,r,l,s,f,m)):t.resize?(g=t.resize,p=g.width,b=g.height,E=r.naturalWidth/r.naturalHeight,w=0,y=0,void 0!==p&&(y=(w=p)/E),void 0!==b&&(y=b,0===w&&(w=y*E)),(x=ge(a)).save(),x.drawImage(r,0,0,r.naturalWidth,r.naturalHeight),fe(a,w,y,!0)):void 0!==t.flip?(S=t.flip,O=S===Ee.Horizontal,P=S===Ee.Vertical,he(a,r,0,0,0,O,P)):void 0!==t.rotate?(z=t.rotate,j=de(r.naturalWidth,r.naturalHeight,z),C=j.width,k=j.height,a.width=C,a.height=k,he(a,r,0,0,z,!1,!1,C,k)):((H=ge(a)).save(),H.drawImage(r,0,0,r.naturalWidth,r.naturalHeight)),T.abrupt("return",pe(a,n));case 8:case"end":return T.stop()}}),null,null,null,Promise)}var Ee,we,ye={manipulateAsync:function(e){var t,n,a,r,o,i,l,c,s=arguments;return v.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(t=s.length>1&&void 0!==s[1]?s[1]:[],n=s.length>2?s[2]:void 0,t.length){u.next=14;break}return a=document.createElement("canvas"),u.next=6,v.a.awrap(be(e));case 6:return r=u.sent,a.width=r.naturalWidth,a.height=r.naturalHeight,ge(a).drawImage(r,0,0,r.naturalWidth,r.naturalHeight),u.abrupt("return",pe(a,n));case 14:i=0;case 15:if(!(i<t.length)){u.next=25;break}return l=t[i],c=void 0,i===t.length-1&&(c=n),u.next=21,v.a.awrap(ve(e||o.uri,l,c));case 21:o=u.sent;case 22:i++,u.next=15;break;case 25:return u.abrupt("return",o);case 26:case"end":return u.stop()}}),null,null,null,Promise)}};!function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ee||(Ee={})),function(e){e.JPEG="jpeg",e.PNG="png",e.WEBP="webp"}(we||(we={}));var xe,Se=n(140),Oe=n(60),Pe=function e(t,n,a,r,o,i){ce()(this,e),this.images=new E.a([]),this.assets=[],this.image=t,this.slices=n,this.top=a,this.bottom=r,this.left=o,this.right=i},ze=new E.a(null);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){k()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ke(){var e=Object(r.useState)(xe.Slice),t=g()(e,2),n=t[0],a=t[1];return o.a.createElement(W,null,function(){switch(n){case xe.Slice:return o.a.createElement(Te,null);case xe.Trim:return o.a.createElement(oe,null)}}(),o.a.createElement(Re,null,"web"===f.a.OS?o.a.createElement(Z,null):o.a.createElement(ie,null),o.a.createElement(l.a,{style:{flexDirection:"row"},pointerEvents:"box-none"},o.a.createElement(Ie,{disabled:n==xe.Trim,onToggle:function(){a(xe.Trim)},controlStyle:{borderTopRightRadius:0,borderBottomRightRadius:0,marginRight:3,backgroundColor:n==xe.Trim?"rgba(130,130,130,0.45)":X}}),o.a.createElement(Me,{disabled:n==xe.Slice,onToggle:function(){a(xe.Slice)},controlStyle:{borderTopLeftRadius:0,borderBottomLeftRadius:0,backgroundColor:n==xe.Slice?"rgba(130,130,130,0.45)":X}})),"ios"===f.a.OS?o.a.createElement(Z,null):null))}function He(){var e=p(S),t=p(D),n=p(L),a=p(B),r=p(A),i=F(e,p(I),t,n,a,r),c=i>1.91||i<.8;return o.a.createElement(l.a,{style:{alignItems:"center",marginBottom:35}},o.a.createElement(q,{touchableStyle:Ce(Ce({},We),{},{paddingVertical:10,paddingHorizontal:15}),onPress:function(){!function(){var e,t,n,a,r,o,i,l,c,s,u,d,m,h,g,p,b,E,w,y,x,O,P,z;v.a.async((function(j){for(;;)switch(j.prev=j.next){case 0:if(e=S.value,t=I.value,n=D.value,a=L.value,r=B.value,o=A.value,e){j.next=8;break}return j.abrupt("return");case 8:i=new Pe(e,t,n,a,r,o),ze.next(i),l=I.value,c=Math.round(n/100*e.height),s=Math.round(a/100*e.height),u=e.height-c-s,d=Math.round(r/100*e.width),m=Math.round(o/100*e.width),h=e.width-d-m,g=Math.floor(h/l),p="web"===f.a.OS,b=[],j.prev=20,E=0;case 22:if(!(E<l)){j.next=33;break}return w=d+g*E,y=c,x=p?ye.manipulateAsync:se.a,j.next=28,v.a.awrap(x(e.uri,[{crop:{originX:w,originY:y,width:g,height:u}}],{compress:1,format:ue.b.JPEG,base64:p}));case 28:O=j.sent,b.push(O);case 30:E++,j.next=22;break;case 33:if(p){j.next=43;break}P=0;case 35:if(!(P<b.length)){j.next=43;break}return j.next=38,v.a.awrap(Oe.c(b[P].uri));case 38:z=j.sent,i.assets.push(z);case 40:P++,j.next=35;break;case 43:i.images.next(b),j.next=49;break;case 46:j.prev=46,j.t0=j.catch(20),Se.a.alert(j.t0.message);case 49:case"end":return j.stop()}}),null,null,[[20,46]],Promise)}()}},o.a.createElement(T.a,{name:"photo-camera",size:20,color:"#fff"}),o.a.createElement(H.a,{style:{color:c?"red":"yellow",fontSize:12,fontWeight:"700",marginLeft:10}},"SAVE PHOTOS")))}!function(e){e[e.Slice=0]="Slice",e[e.Trim=1]="Trim"}(xe||(xe={}));var Te=function(){var e=p(I);return o.a.createElement(l.a,{style:{marginBottom:40},pointerEvents:"box-none"},o.a.createElement(He,null),o.a.createElement(Q,{currentValue:e,disableDecrement:e<=2,onIncrement:N,onDecrement:Y}))},Re=function(e){var t=e.children;return o.a.createElement(l.a,{style:{flexDirection:"row",justifyContent:"space-evenly",marginBottom:20},pointerEvents:"box-none"},t)},We={flexDirection:"row",alignItems:"center",paddingVertical:4,paddingHorizontal:10},Me=function(e){var t=e.onToggle,n=e.controlStyle,a=e.disabled;return o.a.createElement(q,{touchableStyle:Ce(Ce({},We),n),onPress:t,disabled:a},o.a.createElement(R.a,{name:"scissors-cutting",size:20,color:"#fff",style:{transform:[{rotate:"45deg"},{translateY:-2}]}}),o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:"#fff",marginLeft:8}},"SLICE"))},Ie=function(e){var t=e.onToggle,n=e.controlStyle,a=e.disabled;return o.a.createElement(q,{touchableStyle:Ce(Ce({},We),n),onPress:t,disabled:a},o.a.createElement(R.a,{name:"aspect-ratio",size:20,color:"#fff"}),o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:"#fff",marginLeft:8}},"CROP"))};function De(){var e=Object(m.a)(),t=Object(c.c)(),n=p(S),a=p(D),r=p(L),i=p(B),s=p(A),u=p(I),f=F(n,u,a,r,i,s),d=f>1.91||f<.8;return o.a.createElement(l.a,{style:{position:"absolute",top:.04*e.height+t.top,alignSelf:"center",alignItems:"center"},pointerEvents:"none"},o.a.createElement(l.a,{style:{flexDirection:"row",marginBottom:12}},o.a.createElement(l.a,{style:{backgroundColor:X,borderRadius:10,paddingHorizontal:10,paddingVertical:8,flexDirection:"row",marginRight:6}},o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:"#fff"}},"W"),o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:"yellow",marginLeft:10}},Math.round((n.width-(i+s)/100*n.width)/u),"px")),o.a.createElement(l.a,{style:{backgroundColor:X,borderRadius:10,paddingHorizontal:10,paddingVertical:8,flexDirection:"row",marginLeft:6}},o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:"#fff"}},"H"),o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:"yellow",marginLeft:10}},Math.round(n.height-(a+r)/100*n.height),"px"))),o.a.createElement(l.a,{style:{backgroundColor:X,borderRadius:10,paddingHorizontal:10,paddingVertical:8,flexDirection:"row"}},o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:"#fff"}},"RATIO"),o.a.createElement(H.a,{style:{fontSize:12,fontWeight:"700",color:d?"red":"yellow",marginLeft:10}},f.toFixed(2)," : 1")),d?o.a.createElement(H.a,{style:{color:"#fff",fontSize:12,fontWeight:"500",marginTop:13,marginHorizontal:20,textAlign:"center"}},"Stay between 1.91 and 0.8 for social media"):null)}function Le(){var e=Object(m.a)(),t=p(S);if(!t)return null;for(var n=p(I),a=p(D),r=p(L),i=p(B),c=p(A),s=n-1,u=[],f=0;f<s;f++)u.push(o.a.createElement(l.a,{key:"bar"+f,style:{backgroundColor:"rgba(235, 176, 40, 0.8)",width:1}}));var d=e.width/t.width,h=Math.round(i/100*e.width),g=Math.round(c/100*e.width),b=d*t.height,v=(t.height,Math.round(a/100*b)),E=Math.round(r/100*b);return o.a.createElement(l.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,flexDirection:"row",justifyContent:"space-evenly",paddingTop:v,paddingLeft:h,paddingRight:g,paddingBottom:E}},u,o.a.createElement(l.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,borderTopWidth:v,borderLeftWidth:h,borderRightWidth:g,borderBottomWidth:E,borderColor:"rgba(0,0,0,0.9)"}}),o.a.createElement(l.a,{style:{position:"absolute",top:v,left:h,right:g,bottom:E,borderWidth:1,borderTopColor:Be(a),borderLeftColor:Be(i),borderRightColor:Be(c),borderBottomColor:Be(r)}}))}function Be(e){return e>0?Ae:Ve}var Ae="rgba(255, 27, 150, 0.8)",Ve="rgba(255, 27, 150, 0)",Fe=n(11);function Ne(e){for(var t=e.offset,n=e.slices,a=e.window,r=[],i=0;i<n;i++)r.push(o.a.createElement(Ye,{offset:t,slices:n,window:a,index:i,key:""+i}));return o.a.createElement(l.a,{pointerEvents:"none",style:{alignSelf:"center",flexDirection:"row",height:2,marginBottom:-10,marginTop:8}},r)}function Ye(e){var t=e.offset,n=(e.slices,e.index),a=e.window,r=t.current.interpolate({inputRange:[(n-1)*a.width,n*a.width,(n+1)*a.width],outputRange:[-20,0,20],extrapolate:"clamp"});return o.a.createElement(l.a,{style:{width:20,backgroundColor:"#888",marginHorizontal:4,overflow:"hidden"}},o.a.createElement(Fe.a.View,{style:{flex:1,backgroundColor:"#fff",transform:[{translateX:r}]}}))}function Ue(e){var t=e.id,n=Object(r.useRef)(new Fe.a.Value(0)),a=Object(m.a)(),i=p(S),c=p(I),u=p(D),f=p(L),d=p(B),h=p(A);if(!i)return null;var g=d/100,b=1-(g+h/100),v=u/100,E=1-(v+f/100),w=i.width*b,y=i.height*E,x=w/c,O=a.width/x,P=y*O,z=x*O*c,C=z/b,k=P/E,H=k*-v,T=C*-g;return o.a.createElement(l.a,{style:{flex:1,backgroundColor:"#000",justifyContent:"center"}},o.a.createElement(l.a,{style:{height:P,width:a.width}},o.a.createElement(Fe.a.ScrollView,{showsHorizontalScrollIndicator:!1,scrollEventThrottle:16,onScroll:Fe.a.event([{nativeEvent:{contentOffset:{x:n.current}}}],{useNativeDriver:!0}),horizontal:!0,pagingEnabled:!0,style:{flex:1}},o.a.createElement(l.a,{style:{flex:1,backgroundColor:"#333",height:P,width:z,overflow:"hidden"}},o.a.createElement(j.a,{id:t},o.a.createElement(s.a,{source:i,style:{position:"absolute",height:k,width:C,top:H,left:T}}))))),o.a.createElement(Ne,{offset:n,window:a,slices:c}))}function Xe(){var e=Object(r.useState)([]),t=g()(e,2),n=t[0],a=t[1],i=p(ze);return Object(r.useEffect)((function(){if(i){var e=i.images.subscribe((function(e){a(e)}));return function(){e.unsubscribe()}}}),[i]),i?o.a.createElement(l.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"center",alignItems:"center"}},o.a.createElement(l.a,{style:{alignItems:"center",maxWidth:"100%"}},o.a.createElement(H.a,{style:{color:"#fff",fontSize:20,fontWeight:"700",marginBottom:10}},n.length?"Slyced":"Slycing"),o.a.createElement(H.a,{style:{color:"#fff",fontSize:16,marginBottom:20,textAlign:"center",marginHorizontal:25,maxWidth:500,lineHeight:22}},n.length?"Click or tap to download each slyce.\nMay take a few seconds for the download to start.":"Wait a few seconds... Apps do this much faster."),o.a.createElement(d.a,{horizontal:!0,style:{height:130,maxWidth:"100%"},centerContent:!0},o.a.createElement(l.a,{style:{flexDirection:"row",height:130}},n.map((function(e,t){return o.a.createElement(U.a,{key:""+t,style:{height:130,width:150*e.width/e.height,overflow:"hidden",marginHorizontal:5},onPress:function(){setTimeout((function(){!function(e,t){var n,a=document.createElement("a");a.href=e,a.setAttribute("download",t),a.click(),null==(n=a.parentElement)||n.removeChild(a)}(e.base64,"slyce-"+(t+1)+".jpg")}),500)}},o.a.createElement("img",{style:{height:130,width:150*e.width/e.height,flex:"0 0 auto",cursor:"pointer"},src:e.base64}))}))))),o.a.createElement(qe,null)):null}function qe(){return o.a.createElement(q,{touchableStyle:{position:"absolute",top:20,right:20,height:44,width:44,justifyContent:"center",alignItems:"center"},onPress:function(){ze.next(null)}},o.a.createElement(R.a,{name:"close",size:24,color:"#fff"}))}function Je(e){var t=e.route.params.id;return o.a.createElement(l.a,{style:{backgroundColor:"#000",flex:1}},o.a.createElement(u.a,{enabled:"ios"===f.a.OS,behavior:"padding",style:{flex:1}},o.a.createElement(Ge,{id:t})),o.a.createElement(ke,null),o.a.createElement(De,null),o.a.createElement(Xe,null))}function Ge(e){var t,n=e.id;switch(p(M)){case z.Full:t=o.a.createElement(Ze,{id:n});break;case z.Slices:t=o.a.createElement(Ue,{id:n});break;default:return null}return t}function Ze(e){var t=e.id,n=Object(m.a)(),a=p(S),r=a.height*n.width/a.width;return o.a.createElement(d.a,{style:{flex:1},bouncesZoom:!0,maximumZoomScale:4,minimumZoomScale:1,centerContent:!0,alwaysBounceVertical:!0,alwaysBounceHorizontal:!0,contentContainerStyle:"ios"===f.a.OS?null:{minHeight:n.height,justifyContent:"center",paddingBottom:"5%"}},o.a.createElement(l.a,null,o.a.createElement(j.a,{id:t},o.a.createElement(s.a,{source:a,style:{height:r,width:n.width}})),o.a.createElement(Le,null)))}var Ke=n(174),Qe=(n(452),n(239)),$e=n(182),_e=n(18),et=n.n(_e),tt=n(96),nt=n(178),at=n.n(nt),rt=n(275),ot=n.n(rt),it=n(286),lt=n(179),ct=n.n(lt);function st(e){var t,n,a,r;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,v.a.awrap(e);case 2:if(t=o.sent){o.next=5;break}return o.abrupt("return","");case 5:return n="",o.prev=6,a="@address/"+t.latitude+t.longitude,o.next=10,v.a.awrap(ct.a.getItem(a));case 10:if(null===(r=o.sent)||!r.length){o.next=13;break}return o.abrupt("return",r);case 13:return o.next=15,v.a.awrap(it.a(t));case 15:return o.sent.find((function(e){return e.city&&e.country?(n=e.city+", "+e.country,!0):e.name?(n=e.name,!0):void 0})),o.next=19,v.a.awrap(ct.a.setItem(a,n));case 19:o.next=23;break;case 21:o.prev=21,o.t0=o.catch(6);case 23:return o.abrupt("return",n);case 24:case"end":return o.stop()}}),null,null,[[6,21]],Promise)}at.a.extend(ot.a);var ut=new E.a([]),ft=new Map;function dt(e){var t=at()(e);return{date:t.format("ddd MMM D, YYYY [at] h:mma"),from:t.fromNow()}}function mt(e){var t,n,a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.total,n=e.after,a=e.album,r.abrupt("return",Oe.g({album:a,sortBy:"ios"===f.a.OS?Oe.a.modificationTime:void 0,first:t,after:n}));case 2:case"end":return r.stop()}}),null,null,null,Promise)}function ht(e){return e.filter((function(e){var t;return null==(t=e.mediaSubtypes)?void 0:t.includes("panorama")}))}function gt(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("web"===f.a.OS){t.next=7;break}return t.next=3,v.a.awrap(Oe.h());case 3:if(e=t.sent,"granted"===e.status){t.next=7;break}throw new Error("Permission Required");case 7:case"end":return t.stop()}}),null,null,null,Promise)}function pt(){var e,t,n;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=[],"android"!==f.a.OS){a.next=8;break}return a.next=4,v.a.awrap(Oe.e());case 4:if(t=a.sent,t.find((function(e){return"Camera"===e.title}))){a.next=8;break}return a.abrupt("return");case 8:return a.next=10,v.a.awrap(mt({total:20,album:void 0}));case 10:n=a.sent,e=e.concat(ht(n.assets));case 12:if(!n.hasNextPage){a.next=19;break}return a.next=15,v.a.awrap(mt({total:20,after:n.endCursor,album:void 0}));case 15:n=a.sent,e=e.concat(ht(n.assets)),a.next=12;break;case 19:ut.next(e);case 20:case"end":return a.stop()}}),null,null,null,Promise)}function bt(e){var t=e.item,n=(e.index,e.window),a=Object(J.useNavigation)(),i=bt.getHeight(t,n),c=function(e){var t=ft.get(e.id);if(t)return t;var n=dt(e.modificationTime),a=dt(e.creationTime),r=Oe.f(e).then((function(e){return e.location}));return t={updatedAt:n,createdAt:a,coordinates:r,address:st(r)},ft.set(e.id,t),t}(t),u=function(e){var t=Object(r.useState)(""),n=g()(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){!function(){var t;v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(e.address);case 2:t=n.sent,o(t);case 4:case"end":return n.stop()}}),null,null,null,Promise)}()}),[e]),a}(c);return o.a.createElement(U.a,{style:{height:i,overflow:"hidden"},onPress:function(){!function(e){v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:S.next(e);case 1:case"end":return t.stop()}}),null,null,null,Promise)}(t),V(),a.navigate("Editor - Slyce",{id:t.id})}},o.a.createElement(j.a,{id:t.id},o.a.createElement(s.a,{source:t,style:{height:i-bt.infoHeight,width:n.width,overflow:"hidden"}})),o.a.createElement(l.a,{style:{paddingHorizontal:10,paddingTop:10}},o.a.createElement(H.a,{style:{color:"#fff"},numberOfLines:1},u),o.a.createElement(H.a,{style:{color:"#fff"},numberOfLines:1},"created ",c.createdAt.from),o.a.createElement(H.a,{style:{color:"#fff"},numberOfLines:1},"updated ",c.updatedAt.from)))}bt.infoHeight=90,bt.getHeight=function(e,t){return Math.ceil(e.height*t.width/e.width)+this.infoHeight};var vt=n(114);function Et(){return o.a.createElement(l.a,null,o.a.createElement(wt,null),o.a.createElement(wt,null),o.a.createElement(wt,null))}function wt(){var e=Object(m.a)();return o.a.createElement(l.a,null,o.a.createElement(vt.a,{height:80,width:e.width-20,style:{marginLeft:10},shimmerColors:["#222","#333","#222"]}),o.a.createElement(vt.a,{height:20,width:80,shimmerColors:["#222","#333","#222"],style:{marginLeft:10,marginTop:20}}),o.a.createElement(vt.a,{height:15,width:150,shimmerColors:["#222","#333","#222"],style:{marginLeft:10,marginTop:5}}),o.a.createElement(vt.a,{height:15,width:150,shimmerColors:["#222","#333","#222"],style:{marginLeft:10,marginTop:5}}),o.a.createElement(H.a,null,"Austin, TX"),o.a.createElement(H.a,null,"Austin, TX"),o.a.createElement(H.a,null,"Austin, TX"))}function yt(){var e=Object(c.c)(),t=Object(m.a)(),n=p(ut);return Object(r.useEffect)((function(){v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.awrap(gt());case 3:return e.next=5,v.a.awrap(pt());case 5:Oe.b((function(e){pt().catch((function(e){console.log(e.stack)}))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Se.a.alert("Error",e.t0.message);case 11:case"end":return e.stop()}}),null,null,[[0,8]],Promise)}),[]),o.a.createElement(l.a,{style:{flex:1,backgroundColor:"#000"}},o.a.createElement(tt.a,{ListEmptyComponent:Et,ListHeaderComponent:function(){return o.a.createElement(l.a,{style:{height:80+e.top,paddingHorizontal:10,paddingTop:e.top}},o.a.createElement(H.a,{style:{fontSize:30,color:"#fff",fontWeight:"700"}},"Panoramas"),o.a.createElement(H.a,{style:{fontSize:14,color:"#ccc"}},"Tap to slyce"))},contentInsetAdjustmentBehavior:"never",style:{flex:1},data:n,renderItem:function(e){return o.a.createElement(bt,et()({window:t},e))}}))}var xt=n(115);function St(){if("ios"===f.a.OS)return o.a.createElement(yt,null);var e=Object(m.a)(),t=Object(J.useNavigation)();return o.a.createElement(l.a,{style:{backgroundColor:"#000",height:"100%",alignItems:"center"}},o.a.createElement(Pt,null),o.a.createElement(l.a,{style:{flex:1}}),o.a.createElement(s.a,{source:n(439),style:{height:180,width:180,resizeMode:"cover"}}),o.a.createElement(H.a,{style:{color:"#fff",fontWeight:"500",marginTop:-15,marginBottom:20,marginHorizontal:50,fontSize:17,lineHeight:27,textAlign:"center",zIndex:4}},"Select a panorama to split it into equal slyces"),o.a.createElement(q,{onPress:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return["iPhone Simulator","iPod Simulator","iPhone","iPod"].includes(navigator.platform)&&alert("Heads up: On iPhones, switch the selected image size to large for panoramas."),e.next=3,v.a.awrap(P());case 3:S.value&&(V(),t.navigate("Editor - Slyce",{id:""}));case 4:case"end":return e.stop()}}),null,null,null,Promise)},touchableStyle:{paddingVertical:12,paddingHorizontal:16}},o.a.createElement(H.a,{style:{color:"#fff",fontSize:15,fontWeight:"700"}},"SELECT PANORAMA")),o.a.createElement(l.a,{style:{flex:1,justifyContent:"flex-end",paddingTop:"web"===f.a.OS?.15*e.height:0}},o.a.createElement(Ot,null)))}function Ot(){return"web"!==f.a.OS?null:o.a.createElement(l.a,{style:{alignItems:"center",paddingBottom:40}},o.a.createElement(H.a,{style:{color:"#fff",marginBottom:20,fontWeight:"500"}},"Apps also available"),o.a.createElement(l.a,{style:{flexDirection:"row",padding:10,paddingTop:0}},o.a.createElement(q,{touchableStyle:{paddingHorizontal:12,paddingVertical:8,marginHorizontal:5},onPress:function(){xt.openURL("https://apps.apple.com/us/app/slyce-panoramas/id1533345426")}},o.a.createElement(H.a,{style:{color:"#fff",fontSize:13,fontWeight:"700"}},"iOS")),o.a.createElement(q,{touchableStyle:{paddingHorizontal:12,paddingVertical:8,marginHorizontal:5},onPress:function(){xt.openURL("https://play.google.com/store/apps/details?id=me.syousif.slyce")}},o.a.createElement(H.a,{style:{color:"#fff",fontSize:13,fontWeight:"700"}},"ANDROID"))))}function Pt(){return"web"!==f.a.OS?null:o.a.createElement(l.a,{style:{flexDirection:"row",justifyContent:"flex-end",width:"100%",paddingTop:10,paddingRight:10}},o.a.createElement(q,{touchableStyle:{flexDirection:"row",paddingRight:12,paddingLeft:6,paddingVertical:6,alignItems:"center"},onPress:function(){xt.openURL("https://instagram.com/slyce.app")}},o.a.createElement(R.a,{name:"instagram",size:20,color:"#fff"}),o.a.createElement(H.a,{style:{color:"#fff",fontSize:13,fontWeight:"700",marginLeft:12}},"@slyce.app")),o.a.createElement(q,{touchableStyle:{flexDirection:"row",paddingRight:12,paddingLeft:6,paddingVertical:6,alignItems:"center"},onPress:function(){xt.openURL("https://instagram.com/slyce.app")}},o.a.createElement(R.a,{name:"file-code",size:20,color:"#fff"}),o.a.createElement(H.a,{style:{color:"#fff",fontSize:13,fontWeight:"700",marginLeft:5}},"<github />")))}function zt(){return null}Object(Ke.enableScreens)();var jt=Object($e.a)(),Ct=Object($e.a)();function kt(){return o.a.createElement(jt.Navigator,{headerMode:"none"},o.a.createElement(jt.Screen,{name:"Slyce",component:St}),o.a.createElement(jt.Screen,{name:"Editor - Slyce",component:Je,sharedElements:function(e,t,n){return[e.params.id]}}))}function Ht(){return o.a.createElement(c.b,null,o.a.createElement(l.a,{style:Tt.container},o.a.createElement(Qe.a,null,o.a.createElement(Ct.Navigator,{mode:"modal",headerMode:"none"},o.a.createElement(Ct.Screen,{name:"Main",component:kt}),o.a.createElement(kt,null),o.a.createElement(Ct.Screen,{component:Ue,name:"Preview"}))),o.a.createElement(zt,null),o.a.createElement(a.StatusBar,{style:"light"})))}var Tt=i.a.create({container:{flex:1,backgroundColor:"#000"}})},299:function(e,t,n){e.exports=n(453)},439:function(e,t,n){e.exports=n.p+"static/media/splash.149243aa.png"}},[[299,1,2]]]);
//# sourceMappingURL=app.4eda03b8.chunk.js.map