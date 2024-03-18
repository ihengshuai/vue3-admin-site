var be=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var X=(t,l,a)=>l in t?be(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,U=(t,l)=>{for(var a in l||(l={}))ve.call(l,a)&&X(t,a,l[a]);if(Q)for(var a of Q(l))ye.call(l,a)&&X(t,a,l[a]);return t};import{T as ke,u as $,R as g,W as I,f as Ce,a as j,I as ae,b as ne,D as ue,E as Se,N as B,c as _e,L as Ee}from"./index.CCNGGU.js";import{u as _,g as se}from"./dom-B5d93tGn.js";import{f as E,o as oe,d as y,H as P,_ as ie,Z as R,k as e,c as x,w as Y,i as W,F as Z,h as Oe,x as ce,E as C,q as re,S as de,V as we}from"./vue-C05a2vRq.js";import{M as b,A as Te,T as Fe,F as Le,L as Ae,f as D,h as O,i as V,j as me,D as Be,k as Ie,l as xe,m as fe,n as M,B as Me,o as De,p as z,q as je,r as Ne,s as $e,u as Pe,v as Re,U as We,w as He,x as Ue,y as Ve,t as pe,z as ee,E as Ke,G as qe,W as Ge,H as Ye}from"./antd-B5dqVz-4.js";function ze(){const t=E(!1);oe(()=>{t.value=document.fullscreenElement!==null});function l(){t.value?document.exitFullscreen():document.documentElement.requestFullscreen(),t.value=!t.value}return{isFullScreen:t,toggleFullScreen:l}}function Ze(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!W(t)}const Je=_("layout-sider"),Qe=y({name:"LayoutMenu",props:{theme:{type:String,default:ke.DARK}},setup(t){const l=$(),{setBreadcrumb:a,setPageTitle:u,appendNavigateTags:d}=l,{siderCollapsed:c}=P(l),s=ie(),i=R(),h=E([]),w=E(),T=E([{key:g.dashboard,icon:()=>e(Te,null,null),title:"menu.dashboard",children:[{key:g.welcome,title:"menu.welcome",target:I.NEW_TAB},{key:g.analysis,title:"menu.analysis"}]},{key:g.table,icon:()=>e(Fe,null,null),title:"menu.table",children:[{key:g.tableReadme,title:"menu.readme"},{key:g.tableBasic,title:"menu.origin-table"},{key:g.tableRouteMapping,title:"menu.table-mapping"},{key:g.tableAdvance,title:"menu.table-advance",children:[{key:g.tableForm,title:"menu.table-form"},{key:g.tableOperate,title:"menu.table-operation"},{key:g.tableComplex,title:"menu.table-complex"}]}]},{key:g.form,icon:()=>e(Le,null,null),title:"menu.form",children:[{key:g.formBasic,title:"menu.form-basic"}]},{key:"extra-link",icon:()=>e(Ae,null,null),title:"menu.extra-link",target:I.NEW_TAB,link:"https://blog.usword.cn?from=vue3-admin"},{key:"disabled-link",title:"禁用的",disabled:!0}]),F=x(()=>Ce(T.value,"children")||{}),L=x(()=>({[Je.e("menu")]:!0,fx1:!0}));Y(s,o,{immediate:!0}),Y(c,()=>ce(()=>k(s.name)));function o(n){const{name:m,meta:r={}}=n,{menu:A,pageTitle:H}=r;k(A||m),h.value=[A||m];const he=p(m).map(J=>({title:J.title,name:J.key})).concat({title:H,name:m});a(he),u(H),d({title:H,to:{name:m,params:n.params}})}function p(n){if(!n)return[];const m=v(n);return m.length?m.map(r=>F.value[r]).filter(Boolean):[]}function f({key:n,item:m}){try{const r=m.originItemValue;if(r!=null&&r.link){window.open(r.link,(r==null?void 0:r.target)||I.NEW_TAB);return}if(r!=null&&r.target&&(r==null?void 0:r.target)!==I.SELF_TAB)try{const A=i.resolve({name:n,params:U({},s.params)}).fullPath;A&&window.open(A,(r==null?void 0:r.target)||I.NEW_TAB);return}catch(A){}i.push({name:n,params:U({},s.params)})}catch(r){console.log(r)}}function k(n){w.value=c.value?[]:v(n)}function v(n){const m=[];let r;if(!n)return m;for(;(r=n.lastIndexOf("-"))!==-1;)n=n.substring(0,r),m.unshift(n);return m}return()=>{let n;return e(b,{openKeys:w.value,"onUpdate:openKeys":m=>w.value=m,selectedKeys:h.value,"onUpdate:selectedKeys":m=>h.value=m,theme:t.theme,selectable:!1,mode:"inline",class:L.value,onClick:f},Ze(n=T.value.map(m=>m.validator&&m.validator()||m.validator===void 0&&e(ge,{key:m.key,item:m},null)))?n:{default:()=>[n]})}}}),ge=y({name:"MenuSub",props:{item:{type:Object,default:()=>({})}},setup(t){const{t:l}=j();return()=>{var a,u;return e(Z,null,[(a=t.item)!=null&&a.children?e(b.SubMenu,{title:l(t.item.title),key:(u=t.item)==null?void 0:u.key,icon:t.item.icon},{default:()=>{var d,c;return[(c=(d=t.item)==null?void 0:d.children)==null?void 0:c.map(s=>s.validator&&s.validator()||s.validator===void 0&&e(ge,{key:s.key,item:s},null))]}}):e(Xe,{key:t.item.key,item:t.item},null)])}}}),Xe=y({name:"MenuItem",props:{item:{type:Object,required:!0}},setup(t){const{t:l}=j(),{resolve:a}=R(),u=E("#");return Oe(()=>{var d;if(t.item.link)return u.value=t.item.link;try{u.value=((d=a({name:t.item.key}))==null?void 0:d.fullPath)||"/"}catch(c){}}),()=>{var d;return e(b.Item,{key:(d=t.item)==null?void 0:d.key,originItemValue:t.item,disabled:t.item.disabled},{default:()=>{var c,s;return[e("a",{href:u.value,onClick:i=>i.preventDefault(),target:t.item.target||I.SELF_TAB,style:"cursor: inherit"},[(s=(c=t.item).icon)==null?void 0:s.call(c),e("span",null,[l(t.item.title)])])]}})}}}),te=_("layout-settings"),et=y({name:"SettingDrawer",props:{visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(t,{emit:l}){const{t:a}=j(),u=$(),d=E(!0);return()=>e(Be,{open:t.visible,title:a("menu.settings"),placement:"left",closable:!1,maskClosable:!0,extra:e(me,{onClick:()=>l("update:visible",!1)},null),onClose:()=>l("update:visible",!1)},{default:()=>[e(D,{dataSource:["1","2"],split:!0,grid:{column:2},class:te.b()},{default:()=>[e(D.Item,null,{default:()=>[e(O,{justify:"space-between"},{default:()=>[e("span",null,[C("主题模式")]),e(V,{checked:d.value,"onUpdate:checked":c=>d.value=c,onChange:()=>u.toggleAppMode(),"checked-children":e(ae,null,null),"un-checked-children":e(ne,null,null),class:te.e("theme")},null)]})]}),e(D.Item,null,{default:()=>[e(O,{justify:"space-between"},{default:()=>[e("span",null,[C("侧边栏折叠")]),e(V,{checked:u.siderCollapsed,onChange:c=>u.toggleSiderCollapsed(c),"checked-children":"开","un-checked-children":"关"},null)]})]}),e(D.Item,null,{default:()=>[e(O,{justify:"space-between"},{default:()=>[e("span",null,[C("显示导航标签")]),e(V,{checked:u.showNavigateTag,onChange:()=>u.toggleNavigateTagVisible(),"checked-children":"开","un-checked-children":"关"},null)]})]}),e(D.Item,null,{default:()=>[C("其它...")]})]})]})}}),K=_("layout-sider"),tt=y({setup(){const t=$(),{siderCollapsed:l,appMode:a}=P(t),{toggleSiderCollapsed:u}=t,d=E(!1),c=x(()=>({[K.b()]:!0,collapsed:l.value})),s=x(()=>({[K.e("footer")]:!0,fx:!0}));return()=>e(M.Sider,{collapsed:l.value,collapsible:!0,theme:a.value,trigger:null,class:c.value},{default:()=>[e("a",{href:"/",class:`${K.e("logo")} fx fx-jc fx-ac`},[e("img",{src:se("img/logo.png")},null),e("span",{class:"title"},[C("vue3-admin")])]),e(Qe,{theme:a.value},null),e("div",{class:s.value},[l.value?e(Ie,{onClick:()=>u()},null):e(xe,{onClick:()=>u()},null),l.value?null:e(fe,{onClick:()=>d.value=!d.value},null)]),e(et,{visible:d.value,"onUpdate:visible":i=>d.value=i},null)]})}}),lt=y({name:"TransitionSlide",props:{direction:{type:String,default:ue.TOP}},setup(t,{slots:l}){const a=x(()=>`tansition-slide-${t.direction}`);return()=>e(re,{mode:"out-in",name:a.value},{default:()=>{var u;return[(u=l.default)==null?void 0:u.call(l)]}})}});function at(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!W(t)}const nt=_("breadcrumb"),ut=nt.b(),st=y({name:"IBreadcrumbComp",props:{items:{type:Array,default:()=>[]}},setup(t,{attrs:l}){const a=R(),{t:u}=j(),d=(c,s)=>{c.preventDefault(),a.push({name:s.name})};return()=>{let c;return e(De,de({class:ut},l),at(c=t.items.map((s,i)=>e(Me,{key:s.name},{default:()=>[i<t.items.length-1?e("a",{href:a.resolve({name:s.name}).fullPath||"#",onClick:h=>d(h,s)},[s.title&&u(s.title)]):s.title&&u(s.title)]})))?c:{default:()=>[c]})}}});function q(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!W(t)}const N=_("history-tag"),ot=N.b(),it=N.e("tags"),le=N.em("tags","item"),ct=N.e("actions"),rt=N.em("tags","close"),dt=y({name:"IHistoryTag",setup(t,{attrs:l}){const{t:a}=j(),u=ie(),d=R(),c=$(),{removeNavigateTags:s}=c,{navigateTags:i}=P(c),h=E(),w=x(()=>Se.getEntries(B).filter(o=>o.alias).map(o=>({value:o.value,key:o.alias,disabled:F(o.value)}))),T=(o,p,f)=>{o==null||o.stopPropagation(),s(p,f)};Y(u,L,{flush:"post"}),oe(L);function F(o){var p,f,k;if(o===B.CLOSE_ALL)return((p=i==null?void 0:i.value)==null?void 0:p.length)<=1;if(o===B.CLOSE_OTHER)return((f=i==null?void 0:i.value)==null?void 0:f.length)<=2;if(o===B.CLOSE_LEFT){const v=[];for(let n=0;n<((k=i==null?void 0:i.value)==null?void 0:k.length)&&i.value[n].to.name!==u.name;n++)i.value[n].to.name!==g.welcome&&v.push(i.value[n]);return v.length<1}if(o===B.CLOSE_RIGHT){const v=[];for(let n=i.value.length-1;n>=0&&i.value[n].to.name!==u.name;n--)i.value[n].to.name!==g.welcome&&v.push(i.value[n]);return v.length<1}}function L(){var o;!window||!((o=h==null?void 0:h.value)!=null&&o.$el)||ce(()=>{const p=h.value.$el,f=p.querySelector(`.${le}.active`),k=p.getBoundingClientRect().width/2;p.scroll({left:f.offsetLeft-k+.5*f.offsetWidth,behavior:"smooth"})})}return()=>{let o,p;return e(O,de({class:ot},l),{default:()=>[e(O,{ref:h,flex:1,class:it,align:"end",gap:6},q(o=i.value.map(f=>e("span",{key:f.to.name,class:`${le} ${f.to.name===u.name?"active":""}`,onClick:()=>d.push(f.to)},[f.title&&a(f.title),f.closeable!==!1&&e(me,{class:rt,onClick:k=>T(k,B.CLOSE_SELF,f)},null)])))?o:{default:()=>[o]}),e(O,{class:ct},{default:()=>[e(z,{trigger:"click",overlay:e(b,{onClick:({key:f})=>T(null,f)},q(p=w.value.map((f,k)=>{let v;return e(Z,null,[e(b.Item,{key:f.value,disabled:f.disabled},q(v=a(f.key))?v:{default:()=>[v]}),k===1?e(b.Divider,null,null):null])}))?p:{default:()=>[p]})},{default:()=>[e(je,null,null)]})]})]})}}});function mt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!W(t)}const S=_("layout-header"),ft=S.b(),pt=y({name:"Header",setup(){const t=_e(),{toggleAppMode:l,appLanguages:a,setAppLocale:u}=t,{isLightMode:d,appLocale:c,breadcrumbs:s,showNavigateTag:i}=P(t),{isFullScreen:h,toggleFullScreen:w}=ze(),{useToken:T}=pe,{token:F}=T(),L=o=>{u(o),window.location.reload()};return()=>{let o;return e(M.Header,{prefixCls:ft,style:{background:F.value.colorBgBase}},{default:()=>[e(O,{align:"center",style:{paddingInline:"12px"}},{default:()=>[e(O,{flex:1},{default:()=>[e(st,{items:s.value},null)]}),e("ul",{class:`fx ${S.e("action")}`},[e("li",{class:S.e("action__item")},[e(Ne,{dot:!0,class:S.e("action__badge")},{default:()=>[e($e,null,null)]})]),e("li",{class:S.e("action__item"),onClick:()=>w()},[h.value?e(Pe,null,null):e(Re,null,null)]),e(z,{placement:"bottom",overlay:e(b,{class:"w-120"},{default:()=>[e(b.Item,null,{default:()=>[e(We,null,null),C(" 个人中心")]}),e(b.Item,null,{default:()=>[e(fe,null,null),C(" 其他")]}),e(b.Divider,null,null),e(b.Item,null,{default:()=>[e(He,null,null),C(" 退出系统")]})]})},{default:()=>[e("li",{class:S.e("action__item")},[e("span",{class:"fx fx-ac"},[e(Ue,{src:se("img/logo.png"),size:"small"},null),e("span",{class:"ml-6"},[C("ihengshuai")])])])]}),e(z,{placement:"bottom",trigger:"click",overlay:e(b,{class:"w-120",selectedKeys:[c.value]},mt(o=a.map(p=>e(b.Item,{key:p.value,onClick:()=>L(p.value)},{default:()=>[p.name]})))?o:{default:()=>[o]})},{default:()=>[e("li",{class:S.e("action__item")},[e(Ee,null,null)])]}),e("li",{class:S.e("action__item"),onClick:()=>l()},[e(lt,{direction:ue.TOP},{default:()=>[d.value?e("span",{key:"light-mode-btn",class:S.e("action__theme-btn")},[e(ae,{fill:F.value.colorTextBase},null)]):e("span",{key:"right-mode-btn",class:S.e("action__theme-btn")},[e(ne,{fill:F.value.colorTextBase},null)])]})])])]}),i.value&&e(Z,null,[e(Ve,{style:{margin:0}},null),e(dt,null,null)])]})}}}),G=_("layout-footer"),gt=y({name:"LayoutFooter",setup(){const t=new Date().getFullYear();return()=>e(M.Footer,{class:G.b()},{default:()=>[e(ee,{class:G.e("item")},{default:()=>[e(Ke,null,null),e("a",{href:"https://github.com/ihengshuai",target:"_blank",class:"author"},[C("ihengshuai")]),C("2019 - "),t]}),e(ee,{class:G.e("item")},{default:()=>[e("a",{href:"https://github.com/ihengshuai",target:"_blank",class:"link"},[e(qe,null,null)]),e("a",{href:"https://blog.usword.cn",target:"_blank",class:"link"},[e(Ge,null,null)])]})]})}}),ht=_("layout-content"),bt=y({name:"Content",setup(){return()=>e(M.Content,{class:ht.b()},{default:()=>[e(we,null,{default:({Component:t,route:l})=>e(re,{name:"transition-page",mode:"out-in"},{default:()=>[e("div",{key:l.name},[t,e(gt,null,null)])]})})]})}}),vt=_("layout-wrap"),Ot=y({name:"Layout",setup(){const{useToken:t}=pe,{token:l}=t();return()=>e(Ye,{content:"by ihengshuai"},{default:()=>[e(M,{hasSider:!0,class:vt.b(),style:{background:l.value.colorBgBase}},{default:()=>[e(tt,null,null),e(M,null,{default:()=>[e(pt,null,null),e(bt,null,null)]})]})]})}});export{Ot as default};
