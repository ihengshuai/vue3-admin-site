var ge=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var H=(u,s,o)=>s in u?ge(u,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[s]=o,f=(u,s)=>{for(var o in s||(s={}))pe.call(s,o)&&H(u,o,s[o]);if(G)for(var o of G(s))Se.call(s,o)&&H(u,o,s[o]);return u},T=(u,s)=>he(u,ye(s));var J=(u,s,o)=>new Promise((U,h)=>{var R=d=>{try{v(o.next(d))}catch(V){h(V)}},p=d=>{try{v(o.throw(d))}catch(V){h(V)}},v=d=>d.done?U(d.value):Promise.resolve(d.value).then(R,p);v((o=o.apply(u,s)).next())});import{a as be,j as w,k as F,l as E,i as W,q as Re,m as Ce,n as we,o as Ee}from"./index.CCNGGU.js";import{_ as me,Z as Ve,f as m,r as P,c as g,w as X,h as qe}from"./vue-C05a2vRq.js";function Pe(u){const s=me(),o=Ve(),{t:U}=be(),h={},R=m([]);let p=!0,v=!1;const{columns:d,tableProps:V,fetchData:Y}=u,j=m(),A=P(f({},u.filters)),i=P(f({page:{value:null,defaultValue:1,type:Number,immediate:!0,validate:e=>e>=1,transform:e=>e>>0},size:{value:null,defaultValue:10,type:Number,immediate:!0,validate:e=>e>=1,transform:e=>e>>0}},u.pager)),ee=g(()=>d.filter(e=>e.sorter).map(e=>e.key)),q=P(f({orderBy:{value:null,immediate:!0,validate:(e,n,l,r)=>r.order&&ee.value.includes(e)},order:{value:null,immediate:!0,validate:(e,n,{orderBy:l})=>e&&l.value&&[w.ASC,w.DESC].includes(e)}},u.sorter)),ae=g(()=>{let e=!1;switch(q.order.value){case w.ASC:e=F.ASC;break;case w.DESC:e=F.DESC;break}return e}),le=g(()=>{var t;const{page:{value:e},size:{value:n,defaultValue:l}}=i,r=n||l,a={current:E(e)||e>Math.ceil(O.value/n)?1:e,pageSize:r,total:O.value,showTotal:(c,[b,y])=>U("table.total",{begin:b,end:y,total:c})};return((t=u.pagination)==null?void 0:t.call(u,a))||a}),S=g(()=>f(f(f({},A),i),q)),z=g(()=>Object.entries(S.value)),te=g(()=>d.map(e=>T(f({},e),{sortOrder:M(e.key)}))),B=P({selectedRowKeys:[]}),k=m(!1),C=m(!1),L=m([]),O=m(0),K=g(()=>{var e;return k.value&&((e=L.value)==null?void 0:e.length)===0}),ue=g(()=>!K.value&&k.value&&i.size.value*i.page.value>=O.value),ne=g(()=>{var e;return f(f({ref:j,rowKey:n=>n.id,columns:te.value,loading:C.value,dataSource:L.value,pagination:le.value,onChange:N},V),u.selectable?{rowSelection:f({selectedRowKeys:B.selectedRowKeys,onChange:D},(e=u.tableProps)==null?void 0:e.rowSelection)}:null)});fe();function _(){const e={};return z.value.forEach(([n,l])=>{let r=l.immediate?l.value:h[n];l.transform?r=l.transform(r,l,S.value,s.query):l.type===Boolean&&Ce(r)&&(r=Number(r)),E(r,!1)||(e[n]=r)}),e}function D(e){B.selectedRowKeys=e}function N(e,n,l){v=!1;const{orderBy:r,order:a}=q;let t=null,c=null,b=e.current;l.order&&(t=l.columnKey||l.field,c=l.order===F.ASC?w.ASC:w.DESC),(r.value!==t||a.value!==c)&&(r.value=t,a.value=c,u.pageUpdateOnFilterChange!==!1&&(b=1));const{pageSize:y}=e;y&&(i.size.value=y),x(b)}function x(e=u.pageUpdateOnFilterChange!==!1?1:i.page.value,n=!0){i.page.value=e,se(n)}function se(e=!0){p=!1,$(e)}function Q(e=!0){z.value.forEach(([n,l])=>{l.immediate||(h[n]=l.value)}),x(u.pageUpdateOnFilterChange!==!1?1:i.page.value,e)}function I(){return J(this,null,function*(){try{ie(),re(yield Y(_()))}finally{k.value=!0,v=!0,de()}})}function re(e){const{items:n,pager:l}=e;return O.value=l.total,L.value=n,i.page.value=l.page,i.size.value=l.size,e}function $(e=!0){const n={},{query:l}=s;z.value.forEach(([a,t])=>{let c=null;t.parse&&t.transform?c=t.transform(t.value,t,S.value,l):c=t.immediate?t.value:h[a],n[a]=E(c)||c===(W(t.defaultValue)?t.defaultValue(c,t,S.value,l):t.defaultValue)&&!l[a]?null:c}),e||(p=!1);const r=Re(s.fullPath,n);u.trace===!1||r===s.fullPath||r===decodeURIComponent(s.fullPath)?(p=!0,I()):o[e?"push":"replace"](r)}function oe(){const{query:e}=s,n=p;p=!0;const l=z.value.filter(([r,a])=>{var c,b;let t=e[r];if(E(t,!1))a.value=null;else{t=decodeURIComponent(t);let y=!0;switch(a.type){case Number:/^-?\d+/gi.test(t)?t=t>>0:y=!1;break;case Boolean:/^(true|false)$/i.test(t)?t=t==="true":y=!1;break}if(y&&(!a.validate||(c=a.validate)!=null&&c.call(a,t,a,S.value,e))){v=!1;const Z=(b=a.parse)==null?void 0:b.call(a,t,a,S.value,e);t=we(Z)?t:Z,a.value=t,(a==null?void 0:a.autoStorage)!==!1&&(h[r]=t)}else return a.value=null,!0}return!1}).length>0;n&&l?$(!1):(z.value.forEach(([r,a])=>{E(a.value,!1)&&(a.value=E(a.defaultValue)?null:W(a.defaultValue)?a.defaultValue(a.value,a,S.value,e):a.defaultValue),a.immediate||(h[r]=a.value)}),I())}function M(e){const{orderBy:{value:n},order:{value:l}}=q;return n&&l&&n===e?ae.value:null}function ce(){v=!1;const e=Ee(s.query||{},...Object.keys(A),...Object.keys(q),...Object.keys(i));o.push(T(f({},s),{query:e}))}function fe(){X(s,oe,{flush:"post",immediate:!0});const e=Object.entries(u.filters||{}).filter(([n,l])=>!!l.immediate).map(([n,l])=>l);e!=null&&e.length&&X(e,()=>v&&Q(),{flush:"post"}),qe(()=>{R.value.length?C.value=!0:C.value=!1})}function ie(){R.value.push("")}function de(){R.value.pop()}function ve(){R.value=[],C.value=!C.value}return{tableRef:j,total:O,isEmpty:K,isFetchEnd:ue,dataSource:L,tableLoading:C,tableProps:ne,selection:B,getFilterValue:_,getOrder:M,onSearch:Q,onSelectChange:D,onTableChange:N,resetSearch:ce,toggleLoading:ve,refesh:I}}export{Pe as u};