"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[99],{5161:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(6639),r=n(3230),s=n(2053),o=n(4414);function l(){return(0,o.jsxs)(r.A,{direction:"row",spacing:2,sx:{display:"flex"},children:[(0,o.jsx)(i.A,{}),(0,o.jsx)(s.A,{children:"\ub85c\ub529\uc911..."})]})}},2738:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(1671),r=n(9213),s=n(4414);function o(e){let{emptyRows:t,height:n,numCols:o}=e;return t?(0,s.jsx)(r.A,{sx:{...n&&{height:n*t}},children:(0,s.jsx)(i.A,{colSpan:o})}):null}},8502:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(2235),r=n(1671),s=n(9213),o=n(2053),l=n(4414);function a(e){let{query:t,numCols:n}=e;return(0,l.jsx)(s.A,{children:(0,l.jsx)(r.A,{align:"center",colSpan:n,sx:{py:3},children:(0,l.jsxs)(i.A,{sx:{textAlign:"center"},children:[(0,l.jsx)(o.A,{variant:"h6",paragraph:!0,children:"Not found"}),(0,l.jsxs)(o.A,{variant:"body2",children:["No results found for \xa0",(0,l.jsxs)("strong",{children:['"',t,'"']}),".",(0,l.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})}},99:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var i=n(510),r=n(9950),s=n(8089),o=n(9808),l=n(3230),a=n(5769),c=n(4075),d=n(1320),u=n(6927),h=n(2053),x=n(5208),j=n(3038),m=n(5333),A=n(6080),g=n(2362),p=n(1671),f=n(9213),v=n(6319),C=n(3464),b=n(9739),y=n(8170),w=n(33),S=n(2169),k=n(2183),R=n(9925),F=n(657),E=n(9181),N=n.n(E),I=(n(1592),n(4414));function W(e){let{initialContent:t,onContentChange:n,mode:i}=e;const[s,o]=(0,r.useState)(t||"");(0,r.useEffect)((()=>{o(t||"")}),[t]);return(0,I.jsx)(F.CKEditor,{editor:N(),data:s,config:{extraPlugins:[],isReadOnly:"read"===i},onChange:(e,t)=>{const i=t.getData();o(i),n&&n(i)},disabled:"read"===i})}var q=n(5441),D=n(7086),K=n(1778),M=n(7465);function z(){const e=(0,q.jE)();return{getList:(0,D.I)({queryKey:["board"],queryFn:()=>(0,M.Be)(),staleTime:6e4}),insertRecord:(0,K.n)({mutationFn:e=>(0,M.iq)(e),onSuccess:()=>{e.invalidateQueries(["board"])},onError:console.error}),updateRecord:(0,K.n)({mutationFn:e=>(0,M._y)(e),onSuccess:()=>{e.invalidateQueries(["board"])},onError:console.error}),deleteRecord:(0,K.n)({mutationFn:e=>(0,M.WD)(e),onSuccess:()=>{e.invalidateQueries(["board"])},onError:console.error})}}function L(e){const t=(0,q.jE)();return{getList:(0,D.I)({queryKey:["reply",e],queryFn:()=>(0,M.zf)(e),staleTime:6e4}),insertRecord:(0,K.n)({mutationFn:e=>(0,M.q_)(e),onSuccess:()=>{t.invalidateQueries(["reply"])},onError:console.error}),updateRecord:(0,K.n)({mutationFn:e=>(0,M.i0)(e),onSuccess:()=>{t.invalidateQueries(["reply"])},onError:console.error}),deleteRecord:(0,K.n)({mutationFn:e=>(0,M.eL)(e),onSuccess:()=>{t.invalidateQueries(["reply"])},onError:console.error})}}var O=n(6702),P=n(7988),Q=n(8602);function U(e){let{reply:t,account:n,board:i}=e;const[s,o]=(0,r.useState)(""),[a,c]=(0,r.useState)(!1),{updateRecord:d}=z(),{updateRecord:u,deleteRecord:j}=L();return(0,I.jsxs)(l.A,{direction:"row",spacing:2,mt:2,justifyContent:t.isMine?"flex-end":"flex-start",textAlign:t.isMine?"right":"left",sx:{alignItems:"flex-start","& > *":{textAlign:t.isMine?"right":"left"}},children:[!t.isMine&&(0,I.jsx)(x.A,{src:t.commenter.avatarUrl,alt:t.commenter.displayName}),(0,I.jsxs)(l.A,{spacing:.1,children:[(0,I.jsxs)(h.A,{variant:"body2",children:[t.commenter.displayName,"\xa0\xa0",(0,Q.uK)(t.writtenAt,"yyyy-MM-dd HH:mm:ss")," (",(0,Q.n4)(t.writtenAt,"ko"),")",n.uid===t.commenter.uid&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(A.A,{href:"#",onClick:()=>{o(t.comment),c(!0)},children:(0,I.jsx)(O.A,{fontSize:"small",sx:{ml:2}})}),"\xa0",(0,I.jsx)(A.A,{href:"#",onClick:()=>{j.mutate(t.rid),d.mutate({...i,replyCount:i.replyCount-1})},children:(0,I.jsx)(P.A,{fontSize:"small"})})]})]}),!a&&(0,I.jsx)(h.A,{children:t.comment}),a&&(0,I.jsx)(R.A,{margin:"dense",id:"comment",multiline:!0,value:s,onChange:e=>{o(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),u.mutate({...t,comment:s}),c(!1))}})]}),t.isMine&&(0,I.jsx)(x.A,{src:t.commenter.avatarUrl,alt:t.commenter.displayName})]},t.rid)}function T(e){let{open:t,account:n,onClose:i,board:s}=e;const[o,a]=(0,r.useState)(0),[c,d]=(0,r.useState)(0),[u,j]=(0,r.useState)(0),[g,p]=(0,r.useState)(""),{updateRecord:f}=z(),F=()=>{n.uid!==s.writer.uid&&f.mutate({...s,viewCount:c}),i(!1)};(0,r.useEffect)((()=>{n.uid!==s.writer.uid?d(s.viewCount+1):d(s.viewCount),a(s.likeCount),j(s.replyCount)}),[s,n]);const{getRecord:{data:E},insertRecord:N,updateRecord:O}=function(e,t){const n=(0,q.jE)();return{getRecord:(0,D.I)({queryKey:["likes",e,t],queryFn:()=>(0,M.io)(e,t),staleTime:3e5}),insertRecord:(0,K.n)({mutationFn:e=>(0,M.J1)(e),onSuccess:()=>{n.invalidateQueries(["likes",e,t])},onError:console.error}),updateRecord:(0,K.n)({mutationFn:e=>(0,M.f)(e),onSuccess:()=>{n.invalidateQueries(["likes",e,t])},onError:console.error})}}(n.uid,s.bid),{getList:{data:P},insertRecord:T}=L(s.bid);return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(C.A,{open:t,onClose:F,maxWidth:"lg",children:[(0,I.jsx)(w.A,{children:(0,I.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc77d\uae30"})}),(0,I.jsx)(m.A,{"aria-label":"close",onClick:F,sx:{position:"absolute",right:8,top:8},children:(0,I.jsx)(v.A,{})}),(0,I.jsxs)(y.A,{dividers:!0,children:[(0,I.jsxs)(l.A,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:3,children:[(0,I.jsxs)(l.A,{spacing:.3,children:[(0,I.jsx)(h.A,{variant:"h5",children:s.title}),(0,I.jsx)(h.A,{variant:"subtitle2",children:s.bid}),(0,I.jsxs)(h.A,{variant:"subtitle2",children:[(0,Q.uK)(s.modifiedAt,"yyyy-MM-dd HH:mm:ss")," (",(0,Q.n4)(s.modifiedAt,"ko"),")"]})]}),(0,I.jsxs)(l.A,{alignItems:"flex-end",textAlign:"right",spacing:.1,children:[(0,I.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsx)(x.A,{src:s.writer.avatarUrl,alt:s.writer.displayName,sx:{width:36,height:36}}),(0,I.jsx)(h.A,{variant:"h6",children:s.writer.displayName})]}),(0,I.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsxs)(A.A,{href:"#",onClick:()=>{if(n.uid!==s.writer.uid)if(E){let e=E.value,t=o;1===e?(e=0,t--):(e=1,t++),j(t),O.mutate({...E,value:e}),f.mutate({...s,likeCount:t})}else a(s.likeCount+1),N.mutate({uid:n.uid,bid:s.bid,value:1}),f.mutate({...s,likeCount:s.likeCount+1})},children:[E&&1===E.value&&(0,I.jsx)(k.A,{}),(!E||0===E.value)&&(0,I.jsx)(S.A,{})]}),(0,I.jsx)(h.A,{variant:"subtitle2",children:o})]}),(0,I.jsxs)(h.A,{variant:"subtitle2",children:["\uc870\ud68c: ",c,",\xa0\xa0 \ub313\uae00: ",u]})]})]}),(0,I.jsx)(W,{initialContent:s.content,mode:"read"}),P&&P.map((e=>(0,I.jsx)(U,{reply:e,account:n,board:s},e.rid)))]}),(0,I.jsx)(b.A,{sx:{justifyContent:"center",width:"100%",my:1},children:(0,I.jsx)(R.A,{margin:"dense",id:"comment",multiline:!0,name:"comment",label:"\ub313\uae00",type:"text",sx:{width:"70%"},value:g,onChange:e=>{p(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),(()=>{if(g&&g.trim().length>1){j(s.replyCount+1);const e={bid:s.bid,comment:g,commenter:n,isMine:n.uid===s.writer.uid};T.mutate(e),f.mutate({...s,replyCount:s.replyCount+1}),p("")}})())}})})]})})}var B=n(5098),H=n(4322),V=n(6255);function Z(e){let{board:t,account:n,onClose:i}=e;const[s,o]=(0,r.useState)(!1),[a,c]=(0,r.useState)(t.title),[d,u]=(0,r.useState)(t.content),{updateRecord:x}=z(),j=()=>{o(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(H.A,{sx:{color:"primary.main"},onClick:()=>{if(n.uid!==t.writer.uid)return i(),null;o(!0)},children:[(0,I.jsx)(V.A,{icon:"solar:pen-2-bold",sx:{mr:2}}),"\uc218\uc815"]},"1"),(0,I.jsxs)(C.A,{open:s,onClose:j,maxWidth:"lg",children:[(0,I.jsx)(w.A,{children:(0,I.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc218\uc815"})}),(0,I.jsx)(m.A,{"aria-label":"close",onClick:j,sx:{position:"absolute",right:8,top:8},children:(0,I.jsx)(v.A,{})}),(0,I.jsx)(y.A,{dividers:!0,children:(0,I.jsxs)(l.A,{spacing:2,children:[(0,I.jsx)(R.A,{autoFocus:!0,required:!0,margin:"dense",id:"title",name:"title",label:"\uc81c\ubaa9",type:"text",fullWidth:!0,defaultValue:a,onChange:e=>c(e.target.value)}),(0,I.jsx)(W,{initialContent:d,onContentChange:e=>{u(e)},mode:"update"})]})}),(0,I.jsx)(b.A,{children:(0,I.jsx)(B.A,{onClick:()=>{o(!1);const e={...t,title:a,content:d,modifiedAt:(new Date).toISOString()};console.log(e),x.mutate(e),i()},variant:"contained",children:"\uc218\uc815"})})]})]})}function _(e){let{board:t,account:n,onClose:i}=e;const[s,o]=(0,r.useState)(!1),{deleteRecord:l}=z(),a=()=>{o(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(H.A,{sx:{color:"primary.main"},onClick:()=>{if(n.uid!==t.writer.uid)return i(),null;o(!0)},children:[(0,I.jsx)(V.A,{icon:"tabler:trash",sx:{mr:2}}),"\uc0ad\uc81c"]},"2"),(0,I.jsxs)(C.A,{open:s,onClose:a,children:[(0,I.jsx)(w.A,{children:(0,I.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc0ad\uc81c"})}),(0,I.jsx)(m.A,{"aria-label":"close",onClick:a,sx:{position:"absolute",right:8,top:8},children:(0,I.jsx)(v.A,{})}),(0,I.jsx)(y.A,{dividers:!0,children:(0,I.jsx)(h.A,{p:5,variant:"h5",children:"\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"})}),(0,I.jsx)(b.A,{children:(0,I.jsx)(B.A,{onClick:()=>{o(!1),l.mutate(t.bid),i()},variant:"contained",children:"\uc0ad\uc81c"})})]})]})}var J=n(628);function G(e){let{board:t,account:n,selected:i,handleClick:s}=e;const[o,a]=(0,r.useState)(null),[c,d]=(0,r.useState)(!1),u=()=>{a(null)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(f.A,{hover:!0,tabIndex:-1,role:"checkbox",selected:i,children:[(0,I.jsx)(p.A,{padding:"checkbox",children:(0,I.jsx)(j.A,{disableRipple:!0,checked:i,onChange:s})}),(0,I.jsx)(p.A,{children:(0,I.jsx)(A.A,{href:"#",sx:{color:"inherit",textDecoration:"none","&:hover":{cursor:"pointer",textDecoration:"underline"}},onClick:()=>{d(!0)},children:(0,I.jsxs)(l.A,{spacing:1,direction:"row",children:[(0,I.jsx)(h.A,{variant:"body2",children:t.title}),(0,I.jsx)(h.A,{variant:"body2",color:"error",children:t.replyCount>0?"[".concat(t.replyCount,"]"):""})]})})}),(0,I.jsx)(p.A,{children:(0,I.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsx)(x.A,{src:t.writer.avatarUrl,alt:t.writer.displayName,sx:{width:36,height:36}}),(0,I.jsx)(h.A,{variant:"body2",children:t.writer.displayName})]})}),(0,I.jsx)(p.A,{align:"center",children:(0,I.jsx)(h.A,{variant:"body2",children:(0,Q.n4)(t.modifiedAt,"ko")})}),(0,I.jsx)(p.A,{align:"right",children:(0,I.jsx)(h.A,{variant:"body2",children:(0,J.KZ)(t.viewCount)})}),(0,I.jsx)(p.A,{align:"right",children:(0,I.jsx)(h.A,{variant:"body2",children:(0,J.KZ)(t.likeCount)})}),(0,I.jsx)(p.A,{align:"right",children:(0,I.jsx)(m.A,{onClick:e=>{a(e.currentTarget)},children:(0,I.jsx)(V.A,{icon:"eva:more-vertical-fill"})})})]},t.bid),(0,I.jsxs)(g.Ay,{open:!!o,anchorEl:o,onClose:u,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{width:160},children:[(0,I.jsx)(Z,{board:t,account:n,onClose:u}),(0,I.jsx)(_,{board:t,account:n,onClose:u})]}),(0,I.jsx)(T,{open:c,account:n,onClose:d,board:t})]})}var X=n(6491),Y=n(9780),$=n(7251);const ee={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function te(e,t,n){return e?Math.max(0,(1+e)*t-n):0}function ne(e,t,n){return null===e[n]?1:null===t[n]||t[n]<e[n]?-1:t[n]>e[n]?1:0}function ie(e,t){return"desc"===e?(e,n)=>ne(e,n,t):(e,n)=>-ne(e,n,t)}function re(e){let{order:t,orderBy:n,rowCount:i,headLabel:r,numSelected:s,onRequestSort:o,onSelectAllClick:l}=e;return(0,I.jsx)(Y.A,{children:(0,I.jsxs)(f.A,{children:[(0,I.jsx)(p.A,{padding:"checkbox",children:(0,I.jsx)(j.A,{indeterminate:s>0&&s<i,checked:i>0&&s===i,onChange:l})}),r.map((e=>{return(0,I.jsx)(p.A,{align:e.align||"center",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:(0,I.jsxs)($.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(i=e.id,e=>{o(e,i)}),children:[(0,I.jsx)(h.A,{variant:"subtitle2",children:e.label}),n===e.id?(0,I.jsx)(X.A,{sx:{...ee},children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var i}))]})})}var se=n(2046),oe=n(2660),le=n(3239),ae=n(3274);function ce(e){let{numSelected:t,filterName:n,onFilterName:i}=e;return(0,I.jsxs)(le.A,{sx:{height:80,display:"flex",justifyContent:"space-between",p:e=>e.spacing(0,1,0,3),...t>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[t>0?(0,I.jsxs)(h.A,{component:"div",variant:"subtitle1",children:[t," selected"]}):(0,I.jsx)(oe.A,{value:n,onChange:i,placeholder:"\uac8c\uc2dc\ud310 \uac80\uc0c9...",startAdornment:(0,I.jsx)(se.A,{position:"start",children:(0,I.jsx)(V.A,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),t>0?(0,I.jsx)(ae.A,{title:"Delete",children:(0,I.jsx)(m.A,{children:(0,I.jsx)(V.A,{icon:"eva:trash-2-fill"})})}):(0,I.jsx)(ae.A,{title:"Filter list",children:(0,I.jsx)(m.A,{children:(0,I.jsx)(V.A,{icon:"ic:round-filter-list"})})})]})}var de=n(2738),ue=n(8502),he=n(4069),xe=n(5161),je=n(414);function me(e){let{account:t}=e;const{uid:n,displayName:i,avatarUrl:s}=t,[o,a]=(0,r.useState)(!1),[c,d]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),{insertRecord:j}=z(),A=()=>{d(""),a(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(B.A,{variant:"contained",color:"inherit",startIcon:(0,I.jsx)(V.A,{icon:"eva:plus-fill"}),onClick:()=>{a(!0)},children:"\uae00 \uc4f0\uae30"}),(0,I.jsxs)(C.A,{open:o,onClose:A,maxWidth:"lg",children:[(0,I.jsx)(w.A,{children:(0,I.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc4f0\uae30"})}),(0,I.jsx)(m.A,{"aria-label":"close",onClick:A,sx:{position:"absolute",right:8,top:8},children:(0,I.jsx)(v.A,{})}),(0,I.jsxs)(y.A,{dividers:!0,children:[(0,I.jsx)(l.A,{mb:1,children:(0,I.jsx)(R.A,{autoFocus:!0,required:!0,margin:"dense",id:"title",name:"title",label:"\uc81c\ubaa9",type:"text",fullWidth:!0,defaultValue:c,onChange:e=>d(e.target.value)})}),(0,I.jsx)(W,{onContentChange:e=>{x(e)},mode:"write"})]}),(0,I.jsx)(b.A,{children:(0,I.jsx)(B.A,{onClick:()=>{const e={title:c,content:u,writer:{uid:n,displayName:i,avatarUrl:s}};j.mutate(e),A()},variant:"contained",children:"\uc81c\ucd9c"})})]})]})}function Ae(){const[e,t]=(0,r.useState)(0),[n,i]=(0,r.useState)("asc"),[x,j]=(0,r.useState)([]),[m,A]=(0,r.useState)("email"),[g,p]=(0,r.useState)(""),[f,v]=(0,r.useState)(10),{getRecord:{data:C}}=(0,je.A)({uid:sessionStorage.getItem("sessionUid")}),{getList:{isLoading:b,data:y}}=z(),w=y&&function(e){let{inputData:t,comparator:n,filterName:i}=e;const r=t.map(((e,t)=>[e,t]));return r.sort(((e,t)=>{const i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t=r.map((e=>e[0])),i&&(t=t.filter((e=>-1!==e.title.toLowerCase().indexOf(i.toLowerCase())))),t}({inputData:y,comparator:ie(n,m),filterName:g}),S=y&&!w.length&&!!g;return(0,I.jsxs)(o.A,{maxWidth:"xl",children:[(0,I.jsxs)(l.A,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[(0,I.jsx)(h.A,{variant:"h4",children:"\uac8c\uc2dc\ud310"}),C&&(0,I.jsx)(me,{account:C})]}),b&&(0,I.jsx)(xe.A,{}),y&&(0,I.jsxs)(s.A,{children:[(0,I.jsx)(ce,{numSelected:x.length,filterName:g,onFilterName:e=>{t(0),p(e.target.value)}}),(0,I.jsx)(he.A,{children:(0,I.jsx)(d.A,{sx:{overflow:"unset"},children:(0,I.jsxs)(a.A,{sx:{minWidth:800},size:"small",children:[(0,I.jsx)(re,{order:n,orderBy:m,rowCount:y.length,numSelected:x.length,onRequestSort:(e,t)=>{""!==t&&(i(m===t&&"asc"===n?"desc":"asc"),A(t))},onSelectAllClick:e=>{if(e.target.checked){const e=y.map((e=>e.bid));j(e)}else j([])},headLabel:[{id:"title",label:"\uc81c\ubaa9"},{id:"writer",label:"\uae00\uc4f4\uc774"},{id:"modifiedAt",label:"\uc791\uc131\uc2dc\uac04"},{id:"viewCount",label:"\uc870\ud68c\uc218"},{id:"likeCount",label:"\uc88b\uc544\uc694"},{id:""}]}),(0,I.jsxs)(c.A,{children:[C&&w.slice(e*f,e*f+f).map((e=>(0,I.jsx)(G,{board:e,account:C,selected:-1!==x.indexOf(e.bid),handleClick:t=>((e,t)=>{const n=x.indexOf(t);let i=[];-1===n?i=i.concat(x,t):0===n?i=i.concat(x.slice(1)):n===x.length-1?i=i.concat(x.slice(0,-1)):n>0&&(i=i.concat(x.slice(0,n),x.slice(n+1))),j(i)})(0,e.bid)}))),(0,I.jsx)(de.A,{height:50,numCols:6,emptyRows:te(e,f,y.length)}),S&&(0,I.jsx)(ue.A,{query:g})]})]})})}),(0,I.jsx)(u.A,{page:e,component:"div",count:y.length,rowsPerPage:f,onPageChange:(e,n)=>{t(n)},rowsPerPageOptions:[5,10,25],onRowsPerPageChange:e=>{t(0),v(parseInt(e.target.value,10))}})]})]})}function ge(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.mg,{children:(0,I.jsx)("title",{children:" Board | CK React World "})}),(0,I.jsx)(Ae,{})]})}}}]);