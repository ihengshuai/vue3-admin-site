var d=Object.defineProperty;var q=(a,t,e)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var l=(a,t,e)=>(q(a,typeof t!="symbol"?t+"":t,e),e);var y=(a,t,e)=>new Promise((s,n)=>{var h=i=>{try{r(e.next(i))}catch(_){n(_)}},u=i=>{try{r(e.throw(i))}catch(_){n(_)}},r=i=>i.done?s(i.value):Promise.resolve(i.value).then(h,u);r((e=e.apply(a,t)).next())});import{C as c,i as N}from"./index-CKfTYYqA.js";import{a as f}from"./index.CCNGGU.js";import{Q as k}from"./antd-B5dqVz-4.js";import{f as R,c as D}from"./vue-C05a2vRq.js";class Q{constructor(t,e){l(this,"_limit");l(this,"_retry");l(this,"_activeCount",0);l(this,"_relation");l(this,"_skipError");l(this,"requestQueue");l(this,"_status",c.PENDING);l(this,"_currentRetrys");l(this,"_noticeStatus");var s,n,h,u;this._relation=(s=t==null?void 0:t.relation)!=null?s:!1,this._limit=this._relation?1:(n=t==null?void 0:t.limit)!=null?n:(Number==null?void 0:Number.MAX_SAFE_INTEGER)||9999,this._retry=(h=t==null?void 0:t.retry)!=null?h:0,this._skipError=(u=t==null?void 0:t.skipError)!=null?u:!1,this.requestQueue=[],this._currentRetrys=new Map,this._noticeStatus=e}get activeCount(){return this._activeCount}get pendingCount(){return this.requestQueue.length}get isRetry(){return this._currentRetrys.size>0}append(t,e){return this._status===c.END&&this.clear(),new Promise((s,n)=>{var u,r;const h={promiseFn:t,resolve:s,reject:n,retry:(u=e==null?void 0:e.retry)!=null?u:this._retry,skipError:(r=e==null?void 0:e.skipError)!=null?r:this._skipError,prevData:null,uuid:Math.random().toString(36).slice(2)};this.queue(h)})}queue(t){return y(this,null,function*(){const{promiseFn:e,resolve:s,reject:n,skipError:h,prevData:u,uuid:r}=t;if(this.notice(),this._activeCount<this._limit)try{this._activeCount+=1;const i=yield this._relation?e(u):e();s(i),this.popRetry(r),this._activeCount-=1,this.next(i)}catch(i){t.retry?(t.retry-=1,this._activeCount-=1,this.queue({promiseFn:e,resolve:s,reject:n,retry:t.retry,skipError:t.skipError,prevData:u,uuid:r}),this.pushRetry(r),this.notice()):(this.popRetry(r),h?(s(i),this._activeCount-=1,this.next()):(this._status=c.END,n(i)))}else this.requestQueue.push(t)})}next(t){return y(this,null,function*(){var e;if(this._activeCount<this._limit&&((e=this.requestQueue)!=null&&e.length)&&this._status===c.PENDING){const s=this.requestQueue.shift();s.prevData=t,this.queue(s)}else this._status===c.END&&this.clear()})}clear(){this.requestQueue=[],this._activeCount=0,this._status=c.PENDING,this._currentRetrys.clear(),this.notice()}pushRetry(t){this._currentRetrys.set(t,1)}popRetry(t){this._currentRetrys.delete(t)}notice(){this._noticeStatus&&this._noticeStatus({activeCount:this._activeCount,pendingCount:this.requestQueue.length,isRetry:this.isRetry,retryCount:this._currentRetrys.size})}}function A(a,t){const{t:e}=f(),{manual:s}=t||{},n=Array.isArray(a)?a:[a],h=R(!1),u=R(),r=R(!1),i=D(()=>r.value?(t==null?void 0:t.retryTip)||e("common.retryTip"):t==null?void 0:t.loadingTip),_=new Q(t,C);!s&&v();function v(...m){return y(this,null,function*(){try{h.value=!0;const o=yield Promise.all(n.map(E=>_.append(function(...p){return E(...m,...p)})));return u.value=o,u}catch(o){t!=null&&t.noticeError&&!N(o)&&o.message&&k.error(o.message)}finally{h.value=!1,r.value=!1}})}function C({isRetry:m}){r.value=m}return{data:u,loading:h,isRetry:r,loadingTip:i,refresh:v}}export{A as u};