"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[897],{35161:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(98623),r=n(93230),s=n(87233),o=n(44414);function l(){return(0,o.jsxs)(r.A,{direction:"row",spacing:2,sx:{display:"flex"},children:[(0,o.jsx)(i.A,{}),(0,o.jsx)(s.A,{children:"\ub85c\ub529\uc911..."})]})}},42738:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(68605),r=n(10371),s=n(44414);function o(e){let{emptyRows:t,height:n,numCols:o}=e;return t?(0,s.jsx)(r.A,{sx:{...n&&{height:n*t}},children:(0,s.jsx)(i.A,{colSpan:o})}):null}},68502:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(35661),r=n(68605),s=n(10371),o=n(87233),l=n(44414);function a(e){let{query:t,numCols:n}=e;return(0,l.jsx)(s.A,{children:(0,l.jsx)(r.A,{align:"center",colSpan:n,sx:{py:3},children:(0,l.jsxs)(i.A,{sx:{textAlign:"center"},children:[(0,l.jsx)(o.A,{variant:"h6",paragraph:!0,children:"Not found"}),(0,l.jsxs)(o.A,{variant:"body2",children:["No results found for \xa0",(0,l.jsxs)("strong",{children:['"',t,'"']}),".",(0,l.jsx)("br",{})," Try checking for typos or using complete words."]})]})})})}},12699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var i=n(17814),r=n(9950),s=n(2683),o=n(19808),l=n(93230),a=n(397),c=n(22057),d=n(64661),u=n(97452),h=n(87233),x=n(62854),m=n(51496),j=n(57073),A=n(30358),g=n(11001),p=n(68605),f=n(10371),b=n(96319),v=n(96583),y=n(76601),C=n(79329),w=n(40033),k=n(42169),S=n(72183),R=n(4139),F=n(14341),E=n(35254),q=n.n(E),N=(n(17687),n(91592)),I=n(35161),W=n(44414);function L(e){let{initialContent:t,onContentChange:n,mode:i}=e;const[s,o]=(0,r.useState)(t),[l,a]=(0,r.useState)(!1),c=(0,r.useRef)(null);(0,r.useEffect)((()=>{if(c.current){const e=c.current.getEditor();e.on("text-change",(()=>{o(e.root.innerHTML)}))}}),[]);const d=()=>{const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=async()=>{try{a(!0);const t=e.files[0],n=await(0,N.V)(t),i=c.current.getEditor(),r=i.getSelection(!0);i.insertEmbed(r.index,"image",n),i.setSelection(r.index+1)}catch(t){console.error("Error uploading image: ",t)}finally{a(!1)}}},u=(0,r.useMemo)((()=>"read"===i?{toolbar:[]}:{toolbar:{container:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],handlers:{image:d}}}));return(0,W.jsxs)(W.Fragment,{children:[l&&(0,W.jsx)(I.A,{}),(0,W.jsx)(q(),{value:s,onChange:e=>{o(e),n&&n(e)},theme:"snow",modules:u,formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"],ref:c,className:"editor-container",readOnly:"read"===i})]})}var M=n(15441),z=n(7086),D=n(51778),K=n(52206);function Q(){const e=(0,M.jE)();return{getList:(0,z.I)({queryKey:["board"],queryFn:()=>(0,K.Be)(),staleTime:6e4}),insertRecord:(0,D.n)({mutationFn:e=>(0,K.iq)(e),onSuccess:()=>{e.invalidateQueries(["board"])},onError:console.error}),updateRecord:(0,D.n)({mutationFn:e=>(0,K._y)(e),onSuccess:()=>{e.invalidateQueries(["board"])},onError:console.error}),deleteRecord:(0,D.n)({mutationFn:e=>(0,K.WD)(e),onSuccess:()=>{e.invalidateQueries(["board"])},onError:console.error})}}function O(e,t){const n=(0,M.jE)();return{getRecord:(0,z.I)({queryKey:["likes",e,t],queryFn:()=>(0,K.io)(e,t),staleTime:3e5}),getList:(0,z.I)({queryKey:["likes",t],queryFn:()=>(0,K.st)(t),staleTime:6e4}),insertRecord:(0,D.n)({mutationFn:e=>(0,K.J1)(e),onSuccess:()=>{n.invalidateQueries(["likes",e,t])},onError:console.error}),updateRecord:(0,D.n)({mutationFn:e=>(0,K.f)(e),onSuccess:()=>{n.invalidateQueries(["likes",e,t])},onError:console.error}),deleteRecord:(0,D.n)({mutationFn:e=>(0,K.TX)(e),onSuccess:()=>{n.invalidateQueries(["likes"])},onError:console.error})}}function T(e){const t=(0,M.jE)();return{getList:(0,z.I)({queryKey:["reply",e],queryFn:()=>(0,K.zf)(e),staleTime:6e4}),insertRecord:(0,D.n)({mutationFn:e=>(0,K.q_)(e),onSuccess:()=>{t.invalidateQueries(["reply"])},onError:console.error}),updateRecord:(0,D.n)({mutationFn:e=>(0,K.i0)(e),onSuccess:()=>{t.invalidateQueries(["reply"])},onError:console.error}),deleteRecord:(0,D.n)({mutationFn:e=>(0,K.eL)(e),onSuccess:()=>{t.invalidateQueries(["reply"])},onError:console.error})}}var P=n(46702),U=n(57988),H=n(58602);function B(e){let{reply:t,account:n,board:i}=e;const[s,o]=(0,r.useState)(""),[a,c]=(0,r.useState)(!1),{updateRecord:d}=Q(),{updateRecord:u,deleteRecord:m}=T();return(0,W.jsxs)(l.A,{direction:"row",spacing:2,mt:2,justifyContent:t.isMine?"flex-end":"flex-start",textAlign:t.isMine?"right":"left",sx:{alignItems:"flex-start","& > *":{textAlign:t.isMine?"right":"left"}},children:[!t.isMine&&(0,W.jsx)(x.A,{src:t.commenter.avatarUrl,alt:t.commenter.displayName}),(0,W.jsxs)(l.A,{spacing:.1,children:[(0,W.jsxs)(h.A,{variant:"body2",children:[t.commenter.displayName,"\xa0\xa0",(0,H.uK)(t.writtenAt,"yyyy-MM-dd HH:mm:ss")," (",(0,H.n4)(t.writtenAt,"ko"),")",n.uid===t.commenter.uid&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(A.A,{href:"#",onClick:()=>{o(t.comment),c(!0)},children:(0,W.jsx)(P.A,{fontSize:"small",sx:{ml:2}})}),"\xa0",(0,W.jsx)(A.A,{href:"#",onClick:()=>{m.mutate(t.rid),d.mutate({...i,replyCount:i.replyCount-1})},children:(0,W.jsx)(U.A,{fontSize:"small"})})]})]}),!a&&(0,W.jsx)(h.A,{children:t.comment}),a&&(0,W.jsx)(F.A,{margin:"dense",id:"comment",multiline:!0,value:s,onChange:e=>{o(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),u.mutate({...t,comment:s}),c(!1))}})]}),t.isMine&&(0,W.jsx)(x.A,{src:t.commenter.avatarUrl,alt:t.commenter.displayName})]},t.rid)}function V(e){let{open:t,account:n,onClose:i,board:s}=e;const[o,a]=(0,r.useState)(0),[c,d]=(0,r.useState)(0),[u,m]=(0,r.useState)(0),[g,p]=(0,r.useState)(""),{updateRecord:f}=Q(),E=()=>{n.uid!==s.writer.uid&&f.mutate({...s,viewCount:c}),i(!1)};(0,r.useEffect)((()=>{n.uid!==s.writer.uid?d(s.viewCount+1):d(s.viewCount),a(s.likeCount),m(s.replyCount)}),[s,n]);const{getRecord:{data:q},insertRecord:N,updateRecord:I}=O(n.uid,s.bid),{getList:{data:M},insertRecord:z}=T(s.bid);return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(v.A,{open:t,onClose:E,maxWidth:"lg",children:[(0,W.jsx)(w.A,{children:(0,W.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc77d\uae30"})}),(0,W.jsx)(j.A,{"aria-label":"close",onClick:E,sx:{position:"absolute",right:8,top:8},children:(0,W.jsx)(b.A,{})}),(0,W.jsxs)(C.A,{dividers:!0,children:[(0,W.jsxs)(R.Ay,{container:!0,spacing:3,children:[(0,W.jsx)(R.Ay,{item:!0,xs:12,sm:8,children:(0,W.jsxs)(l.A,{spacing:.3,children:[(0,W.jsx)(h.A,{variant:"h5",children:s.title}),(0,W.jsx)(h.A,{variant:"subtitle2",children:s.bid}),(0,W.jsxs)(h.A,{variant:"subtitle2",children:[(0,H.uK)(s.modifiedAt,"yyyy-MM-dd HH:mm:ss")," (",(0,H.n4)(s.modifiedAt,"ko"),")"]})]})}),(0,W.jsx)(R.Ay,{item:!0,xs:12,sm:4,children:(0,W.jsxs)(l.A,{alignItems:"flex-end",textAlign:"right",spacing:.1,children:[(0,W.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,W.jsx)(x.A,{src:s.writer.avatarUrl,alt:s.writer.displayName,sx:{width:36,height:36}}),(0,W.jsx)(h.A,{variant:"h6",children:s.writer.displayName})]}),(0,W.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,W.jsxs)(A.A,{href:"#",onClick:()=>{if(n.uid!==s.writer.uid)if(q){let e=q.value,t=o;1===e?(e=0,t--):(e=1,t++),m(t),I.mutate({...q,value:e}),f.mutate({...s,likeCount:t})}else a(s.likeCount+1),N.mutate({uid:n.uid,bid:s.bid,value:1}),f.mutate({...s,likeCount:s.likeCount+1})},children:[q&&1===q.value&&(0,W.jsx)(S.A,{}),(!q||0===q.value)&&(0,W.jsx)(k.A,{})]}),(0,W.jsx)(h.A,{variant:"subtitle2",children:o})]}),(0,W.jsxs)(h.A,{variant:"subtitle2",children:["\uc870\ud68c: ",c,",\xa0\xa0 \ub313\uae00: ",u]})]})})]}),(0,W.jsx)(L,{initialContent:s.content,mode:"read"}),M&&M.map((e=>(0,W.jsx)(B,{reply:e,account:n,board:s},e.rid)))]}),(0,W.jsx)(y.A,{sx:{justifyContent:"center",width:"100%",my:1},children:(0,W.jsx)(F.A,{margin:"dense",id:"comment",multiline:!0,name:"comment",label:"\ub313\uae00",type:"text",sx:{width:"70%"},value:g,onChange:e=>{p(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),(()=>{if(g&&g.trim().length>1){m(s.replyCount+1);const e={bid:s.bid,comment:g,commenter:n,isMine:n.uid===s.writer.uid};z.mutate(e),f.mutate({...s,replyCount:s.replyCount+1}),p("")}})())}})})]})})}var Z=n(67535),_=n(27987),J=n(16255);function X(e){let{board:t,account:n,onClose:i}=e;const[s,o]=(0,r.useState)(!1),[a,c]=(0,r.useState)(t.title),[d,u]=(0,r.useState)(t.content),{updateRecord:x}=Q(),m=()=>{o(!1)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(_.A,{sx:{color:"primary.main"},onClick:()=>{if(n.uid!==t.writer.uid)return i(),null;o(!0)},children:[(0,W.jsx)(J.A,{icon:"solar:pen-2-bold",sx:{mr:2}}),"\uc218\uc815"]},"1"),(0,W.jsxs)(v.A,{open:s,onClose:m,maxWidth:"lg",children:[(0,W.jsx)(w.A,{children:(0,W.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc218\uc815"})}),(0,W.jsx)(j.A,{"aria-label":"close",onClick:m,sx:{position:"absolute",right:8,top:8},children:(0,W.jsx)(b.A,{})}),(0,W.jsx)(C.A,{dividers:!0,children:(0,W.jsxs)(l.A,{spacing:2,children:[(0,W.jsx)(F.A,{autoFocus:!0,required:!0,margin:"dense",id:"title",name:"title",label:"\uc81c\ubaa9",type:"text",fullWidth:!0,defaultValue:a,onChange:e=>c(e.target.value)}),(0,W.jsx)(L,{initialContent:d,onContentChange:e=>{u(e)},mode:"update"})]})}),(0,W.jsx)(y.A,{children:(0,W.jsx)(Z.A,{onClick:()=>{o(!1);const e={...t,title:a,content:d,modifiedAt:(new Date).toISOString()};console.log(e),x.mutate(e),i()},variant:"contained",children:"\uc218\uc815"})})]})]})}function G(e){let{board:t,account:n,onClose:i}=e;const[s,o]=(0,r.useState)(!1),{deleteRecord:l}=Q(),{getList:{data:a},deleteRecord:c}=O(n.uid,t.bid),{getList:{data:d},deleteRecord:u}=T(t.bid),x=()=>{o(!1)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(_.A,{sx:{color:"primary.main"},onClick:()=>{if(n.uid!==t.writer.uid)return i(),null;o(!0)},children:[(0,W.jsx)(J.A,{icon:"tabler:trash",sx:{mr:2}}),"\uc0ad\uc81c"]},"2"),(0,W.jsxs)(v.A,{open:s,onClose:x,children:[(0,W.jsx)(w.A,{children:(0,W.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc0ad\uc81c"})}),(0,W.jsx)(j.A,{"aria-label":"close",onClick:x,sx:{position:"absolute",right:8,top:8},children:(0,W.jsx)(b.A,{})}),(0,W.jsx)(C.A,{dividers:!0,children:(0,W.jsx)(h.A,{p:5,variant:"h5",children:"\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"})}),(0,W.jsx)(y.A,{children:(0,W.jsx)(Z.A,{onClick:()=>{o(!1),l.mutate(t.bid);for(let e of a)c.mutate(e.lid);for(let e of d)u.mutate(e.rid);i()},variant:"contained",children:"\uc0ad\uc81c"})})]})]})}var Y=n(90628);function $(e){let{board:t,account:n,selected:i,handleClick:s}=e;const[o,a]=(0,r.useState)(null),[c,d]=(0,r.useState)(!1),u=()=>{a(null)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(f.A,{hover:!0,tabIndex:-1,role:"checkbox",selected:i,children:[(0,W.jsx)(p.A,{padding:"checkbox",children:(0,W.jsx)(m.A,{disableRipple:!0,checked:i,onChange:s})}),(0,W.jsx)(p.A,{children:(0,W.jsx)(A.A,{href:"#",sx:{color:"inherit",textDecoration:"none","&:hover":{cursor:"pointer",textDecoration:"underline"}},onClick:()=>{d(!0)},children:(0,W.jsxs)(l.A,{spacing:1,direction:"row",children:[(0,W.jsx)(h.A,{variant:"body2",children:t.title}),(0,W.jsx)(h.A,{variant:"body2",color:"error",children:t.replyCount>0?"[".concat(t.replyCount,"]"):""})]})})}),(0,W.jsx)(p.A,{children:(0,W.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,W.jsx)(x.A,{src:t.writer.avatarUrl,alt:t.writer.displayName,sx:{width:36,height:36}}),(0,W.jsx)(h.A,{variant:"body2",children:t.writer.displayName})]})}),(0,W.jsx)(p.A,{align:"center",children:(0,W.jsx)(h.A,{variant:"body2",children:(0,H.n4)(t.modifiedAt,"ko")})}),(0,W.jsx)(p.A,{align:"right",children:(0,W.jsx)(h.A,{variant:"body2",children:(0,Y.KZ)(t.viewCount)})}),(0,W.jsx)(p.A,{align:"right",children:(0,W.jsx)(h.A,{variant:"body2",children:(0,Y.KZ)(t.likeCount)})}),(0,W.jsx)(p.A,{align:"right",children:(0,W.jsx)(j.A,{onClick:e=>{a(e.currentTarget)},children:(0,W.jsx)(J.A,{icon:"eva:more-vertical-fill"})})})]},t.bid),(0,W.jsxs)(g.Ay,{open:!!o,anchorEl:o,onClose:u,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{width:160},children:[(0,W.jsx)(X,{board:t,account:n,onClose:u}),(0,W.jsx)(G,{board:t,account:n,onClose:u})]}),(0,W.jsx)(V,{open:c,account:n,onClose:d,board:t})]})}var ee=n(52346),te=n(24965),ne=n(66065);const ie={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function re(e,t,n){return e?Math.max(0,(1+e)*t-n):0}function se(e,t,n){return null===e[n]?1:null===t[n]||t[n]<e[n]?-1:t[n]>e[n]?1:0}function oe(e,t){return"desc"===e?(e,n)=>se(e,n,t):(e,n)=>-se(e,n,t)}function le(e){let{order:t,orderBy:n,rowCount:i,headLabel:r,numSelected:s,onRequestSort:o,onSelectAllClick:l}=e;return(0,W.jsx)(te.A,{children:(0,W.jsxs)(f.A,{children:[(0,W.jsx)(p.A,{padding:"checkbox",children:(0,W.jsx)(m.A,{indeterminate:s>0&&s<i,checked:i>0&&s===i,onChange:l})}),r.map((e=>{return(0,W.jsx)(p.A,{align:e.align||"center",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:(0,W.jsxs)(ne.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(i=e.id,e=>{o(e,i)}),children:[(0,W.jsx)(h.A,{variant:"subtitle2",children:e.label}),n===e.id?(0,W.jsx)(ee.A,{sx:{...ie},children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var i}))]})})}var ae=n(46483),ce=n(2660),de=n(34977),ue=n(53065);function he(e){let{numSelected:t,filterName:n,onFilterName:i}=e;return(0,W.jsxs)(de.A,{sx:{height:80,display:"flex",justifyContent:"space-between",p:e=>e.spacing(0,1,0,3),...t>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[t>0?(0,W.jsxs)(h.A,{component:"div",variant:"subtitle1",children:[t," selected"]}):(0,W.jsx)(ce.A,{value:n,onChange:i,placeholder:"\uac8c\uc2dc\ud310 \uac80\uc0c9...",startAdornment:(0,W.jsx)(ae.A,{position:"start",children:(0,W.jsx)(J.A,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),t>0?(0,W.jsx)(ue.A,{title:"Delete",children:(0,W.jsx)(j.A,{children:(0,W.jsx)(J.A,{icon:"eva:trash-2-fill"})})}):(0,W.jsx)(ue.A,{title:"Filter list",children:(0,W.jsx)(j.A,{children:(0,W.jsx)(J.A,{icon:"ic:round-filter-list"})})})]})}var xe=n(42738),me=n(68502),je=n(59289),Ae=n(70414);function ge(e){let{account:t}=e;const{uid:n,displayName:i,avatarUrl:s}=t,[o,a]=(0,r.useState)(!1),[c,d]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),{insertRecord:m}=Q(),A=()=>{d(""),a(!1)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Z.A,{variant:"contained",color:"inherit",startIcon:(0,W.jsx)(J.A,{icon:"eva:plus-fill"}),onClick:()=>{a(!0)},children:"\uae00 \uc4f0\uae30"}),(0,W.jsxs)(v.A,{open:o,onClose:A,maxWidth:"lg",children:[(0,W.jsx)(w.A,{children:(0,W.jsx)(h.A,{sx:{fontWeight:"bold",fontSize:18},children:"\uac8c\uc2dc\uae00 \uc4f0\uae30"})}),(0,W.jsx)(j.A,{"aria-label":"close",onClick:A,sx:{position:"absolute",right:8,top:8},children:(0,W.jsx)(b.A,{})}),(0,W.jsxs)(C.A,{dividers:!0,children:[(0,W.jsx)(l.A,{mb:1,children:(0,W.jsx)(F.A,{autoFocus:!0,required:!0,margin:"dense",id:"title",name:"title",label:"\uc81c\ubaa9",type:"text",fullWidth:!0,defaultValue:c,onChange:e=>d(e.target.value)})}),(0,W.jsx)(L,{onContentChange:e=>{x(e)},mode:"write"})]}),(0,W.jsx)(y.A,{children:(0,W.jsx)(Z.A,{onClick:()=>{const e={title:c,content:u,writer:{uid:n,displayName:i,avatarUrl:s}};m.mutate(e),A()},variant:"contained",children:"\uc81c\ucd9c"})})]})]})}function pe(){const[e,t]=(0,r.useState)(0),[n,i]=(0,r.useState)("asc"),[x,m]=(0,r.useState)([]),[j,A]=(0,r.useState)("email"),[g,p]=(0,r.useState)(""),[f,b]=(0,r.useState)(10),{getRecord:{data:v}}=(0,Ae.A)({uid:sessionStorage.getItem("sessionUid")}),{getList:{isLoading:y,data:C}}=Q(),w=C&&function(e){let{inputData:t,comparator:n,filterName:i}=e;const r=t.map(((e,t)=>[e,t]));return r.sort(((e,t)=>{const i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t=r.map((e=>e[0])),i&&(t=t.filter((e=>-1!==e.title.toLowerCase().indexOf(i.toLowerCase())))),t}({inputData:C,comparator:oe(n,j),filterName:g}),k=C&&!w.length&&!!g;return(0,W.jsxs)(o.A,{maxWidth:"xl",children:[(0,W.jsxs)(l.A,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[(0,W.jsx)(h.A,{variant:"h4",children:"\uac8c\uc2dc\ud310"}),v&&(0,W.jsx)(ge,{account:v})]}),y&&(0,W.jsx)(I.A,{}),C&&(0,W.jsxs)(s.A,{children:[(0,W.jsx)(he,{numSelected:x.length,filterName:g,onFilterName:e=>{t(0),p(e.target.value)}}),(0,W.jsx)(je.A,{children:(0,W.jsx)(d.A,{sx:{overflow:"unset"},children:(0,W.jsxs)(a.A,{sx:{minWidth:800},size:"small",children:[(0,W.jsx)(le,{order:n,orderBy:j,rowCount:C.length,numSelected:x.length,onRequestSort:(e,t)=>{""!==t&&(i(j===t&&"asc"===n?"desc":"asc"),A(t))},onSelectAllClick:e=>{if(e.target.checked){const e=C.map((e=>e.bid));m(e)}else m([])},headLabel:[{id:"title",label:"\uc81c\ubaa9"},{id:"writer",label:"\uae00\uc4f4\uc774"},{id:"modifiedAt",label:"\uc791\uc131\uc2dc\uac04"},{id:"viewCount",label:"\uc870\ud68c\uc218"},{id:"likeCount",label:"\uc88b\uc544\uc694"},{id:""}]}),(0,W.jsxs)(c.A,{children:[v&&w.slice(e*f,e*f+f).map((e=>(0,W.jsx)($,{board:e,account:v,selected:-1!==x.indexOf(e.bid),handleClick:t=>((e,t)=>{const n=x.indexOf(t);let i=[];-1===n?i=i.concat(x,t):0===n?i=i.concat(x.slice(1)):n===x.length-1?i=i.concat(x.slice(0,-1)):n>0&&(i=i.concat(x.slice(0,n),x.slice(n+1))),m(i)})(0,e.bid)}))),(0,W.jsx)(xe.A,{height:50,numCols:6,emptyRows:re(e,f,C.length)}),k&&(0,W.jsx)(me.A,{query:g})]})]})})}),(0,W.jsx)(u.A,{page:e,component:"div",count:C.length,rowsPerPage:f,onPageChange:(e,n)=>{t(n)},rowsPerPageOptions:[5,10,25],onRowsPerPageChange:e=>{t(0),b(parseInt(e.target.value,10))}})]})]})}function fe(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(i.mg,{children:(0,W.jsx)("title",{children:" Board | CK React World "})}),(0,W.jsx)(pe,{})]})}}}]);