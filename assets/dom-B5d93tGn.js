const r="/assets/logo.G9XrPR.png",a="_i_";function o(n,e,t){let c=n;return e&&(c+=`__${e}`),t&&(c+=`--${t}`),c}function f(n,e=!1){const t=e?`.${a}__${n}`:`${a}__${n}`;return{b:()=>t,e:s=>s?o(t,s):"",m:s=>s?o(t,"",s):"",em:(s,_)=>s&&_?o(t,s,_):""}}function i(n){return new URL(Object.assign({"../assets/img/logo.png":r})[`../assets/${n}`],import.meta.url).href}export{i as g,f as u};