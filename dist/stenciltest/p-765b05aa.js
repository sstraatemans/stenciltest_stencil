let e,t,l,n=!1,s=!1,o=!1,i=!1;const r="undefined"!=typeof window?window:{},c=r.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),a=(e,t,l)=>{l&&l.map((([l,n,s])=>{const o=e,i=d(t,s),r=h(l);f.ael(o,n,i,r),(t.o=t.o||[]).push((()=>f.rel(o,n,i,r)))}))},d=(e,t)=>l=>{try{256&e.t?e.i[t](l):(e.u=e.u||[]).push([t,l])}catch(e){$e(e)}},h=e=>0!=(2&e),y=new WeakMap,m=(e,t,l)=>{let n=he.get(e);$&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,he.set(e,n)},p=(e,t)=>{let l=b(t);const n=he.get(l);if(e=11===e.nodeType?e:c,n)if("string"==typeof n){let t,s=y.get(e=e.head||e);s||y.set(e,s=new Set),s.has(l)||(e.host&&(t=e.querySelector(`[sty-id="${l}"]`))?t.innerHTML=n:(t=c.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link"))),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l},b=e=>"sc-"+e.$,w=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),g={},S=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...l)=>{let n=null,s=null,o=!1,i=!1;const r=[],c=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?c(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!S(n))&&(n+=""),o&&i?r[r.length-1].h+=n:r.push(o?v(null,n):n),i=o)};if(c(l),t){t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const f=v(e,null);return f.m=t,r.length>0&&(f.p=r),f.g=s,f},v=(e,t)=>({t:0,S:e,h:t,k:null,p:null,m:null,g:null}),j={},M=(e,t,l,n,s,o)=>{if(l!==n){let i=ue(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=C(l),o=C(n);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if(i||"o"!==t[0]||"n"!==t[1]){const r=S(n);if((i||r&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}null==n||!1===n?!1===n&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&o||s)&&!r&&e.setAttribute(t,n=!0===n?"":n)}else t="-"===t[2]?t.slice(3):ue(r,c)?c.slice(2):c[2]+t.slice(3),l&&f.rel(e,t,l,!1),n&&f.ael(e,t,n,!1)}},x=/\s/,C=e=>e?e.split(x):[],O=(e,t,l,n)=>{const s=11===t.k.nodeType&&t.k.host?t.k.host:t.k,o=e&&e.m||g,i=t.m||g;for(n in o)n in i||M(s,n,o[n],void 0,l,t.t);for(n in i)M(s,n,o[n],i[n],l,t.t)},R=(s,i,r,f)=>{const u=i.p[r];let $,a,d,h=0;if(n||(o=!0,"slot"===u.S&&(e&&f.classList.add(e+"-s"),u.t|=u.p?2:1)),null!==u.h)$=u.k=c.createTextNode(u.h);else if(1&u.t)$=u.k=c.createTextNode("");else if($=u.k=c.createElement(2&u.t?"slot-fb":u.S),O(null,u,!1),null!=e&&$["s-si"]!==e&&$.classList.add($["s-si"]=e),u.p)for(h=0;h<u.p.length;++h)a=R(s,u,h,$),a&&$.appendChild(a);return $["s-hn"]=l,3&u.t&&($["s-sr"]=!0,$["s-cr"]=t,$["s-sn"]=u.g||"",d=s&&s.p&&s.p[r],d&&d.S===u.S&&s.k&&T(s.k,!1)),$},T=(e,t)=>{f.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(A(s).insertBefore(s,E(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&T(s,t)}f.t&=-2},I=(e,t,n,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=R(null,n,o,e),r&&(s[o].k=r,c.insertBefore(r,E(t))))},N=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(s=!0,(o=n.k)["s-ol"]?o["s-ol"].remove():T(o,!0),o.remove())},P=(e,t)=>e.S===t.S&&("slot"!==e.S||e.g===t.g),E=e=>e&&e["s-ol"]||e,A=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,F=(e,t)=>{const l=t.k=e.k,n=e.p,s=t.p,o=t.h;let i;null===o?("slot"===t.S||O(e,t,!1),null!==n&&null!==s?((e,t,l,n)=>{let s,o=0,i=0,r=t.length-1,c=t[0],f=t[r],u=n.length-1,$=n[0],a=n[u];for(;o<=r&&i<=u;)null==c?c=t[++o]:null==f?f=t[--r]:null==$?$=n[++i]:null==a?a=n[--u]:P(c,$)?(F(c,$),c=t[++o],$=n[++i]):P(f,a)?(F(f,a),f=t[--r],a=n[--u]):P(c,a)?("slot"!==c.S&&"slot"!==a.S||T(c.k.parentNode,!1),F(c,a),e.insertBefore(c.k,f.k.nextSibling),c=t[++o],a=n[--u]):P(f,$)?("slot"!==c.S&&"slot"!==a.S||T(f.k.parentNode,!1),F(f,$),e.insertBefore(f.k,c.k),f=t[--r],$=n[++i]):(s=R(t&&t[i],l,i,e),$=n[++i],s&&A(c.k).insertBefore(s,E(c.k)));o>r?I(e,null==n[u+1]?null:n[u+1].k,l,n,i,u):i>u&&N(t,o,r)})(l,n,t,s):null!==s?(null!==e.h&&(l.textContent=""),I(l,null,t,s,0,s.length-1)):null!==n&&N(n,0,n.length-1)):(i=l["s-cr"])?i.parentNode.textContent=o:e.h!==o&&(l.data=o)},H=e=>{const t=e.childNodes;let l,n,s,o,i,r;for(n=0,s=t.length;n<s;n++)if(l=t[n],1===l.nodeType){if(l["s-sr"])for(i=l["s-sn"],l.hidden=!1,o=0;o<s;o++)if(r=t[o].nodeType,t[o]["s-hn"]!==l["s-hn"]||""!==i){if(1===r&&i===t[o].getAttribute("slot")){l.hidden=!0;break}}else if(1===r||3===r&&""!==t[o].textContent.trim()){l.hidden=!0;break}H(l)}},L=[],U=e=>{let t,l,n,o,i,r,c=0;const f=e.childNodes,u=f.length;for(;c<u;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"])&&l.parentNode)for(n=l.parentNode.childNodes,o=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(W(l,o)?(i=L.find((e=>e.v===l)),s=!0,l["s-sn"]=l["s-sn"]||o,i?i.j=t:L.push({j:t,v:l}),l["s-sr"]&&L.map((e=>{W(e.v,l["s-sn"])&&(i=L.find((e=>e.v===l)),i&&!e.j&&(e.j=i.j))}))):L.some((e=>e.v===l))||L.push({v:l}));1===t.nodeType&&U(t)}},W=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,q=e=>re(e).M,V=(e,t,l)=>{const n=q(e);return{emit:e=>_(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},_=(e,t,l)=>{const n=f.ce(t,l);return e.dispatchEvent(n),n},z=(e,t)=>{t&&!e.C&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.C=t)))},B=(e,t)=>{if(e.t|=16,!(4&e.t))return z(e,e.O),Se((()=>D(e,t)));e.t|=512},D=(e,t)=>{const l=e.i;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>X(l,e,t))),e.u=null)),Y(void 0,(()=>G(e,l,t)))},G=async(e,t,l)=>{const n=e.M,s=n["s-rc"];l&&(e=>{const t=e.R,l=e.M,n=t.t,s=p(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=s,l.classList.add(s+"-h"))})(e);J(e,t),s&&(s.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>K(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},J=(i,r)=>{try{r=r.render(),i.t&=-17,i.t|=2,((i,r)=>{const u=i.M,$=i.R,a=i.T||v(null,null),d=(e=>e&&e.S===j)(r)?r:k(null,null,r);if(l=u.tagName,d.S=null,d.t|=4,i.T=d,d.k=a.k=u.shadowRoot||u,e=u["s-sc"],t=u["s-cr"],n=0!=(1&$.t),s=!1,F(a,d),f.t|=1,o){let e,t,l,n,s,o;U(d.k);let i=0;for(;i<L.length;i++)e=L[i],t=e.v,t["s-ol"]||(l=c.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<L.length;i++)if(e=L[i],t=e.v,e.j){for(n=e.j.parentNode,s=e.j.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&H(d.k),f.t&=-2,L.length=0})(i,r)}catch(e){$e(e,i.M)}return null},K=e=>{const t=e.M,l=e.O;64&e.t||(e.t|=64,Z(t),e.I(t),l||Q()),e.C&&(e.C(),e.C=void 0),512&e.t&&ge((()=>B(e,!1))),e.t&=-517},Q=()=>{Z(c.documentElement),ge((()=>_(r,"appload",{detail:{namespace:"stenciltest"}})))},X=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){$e(e)}},Y=(e,t)=>e&&e.then?e.then(t):t(),Z=e=>e.classList.add("hydrated"),ee=(e,t,l,n,s,o,i)=>{let r,f,u,$;if(1===o.nodeType){for(r=o.getAttribute("c-id"),r&&(f=r.split("."),f[0]!==i&&"0"!==f[0]||(u={t:0,N:f[0],P:f[1],A:f[2],F:f[3],S:o.tagName.toLowerCase(),k:o,m:null,p:null,H:null,g:null,h:null},t.push(u),o.removeAttribute("c-id"),e.p||(e.p=[]),e.p[u.F]=u,e=u,n&&"0"===u.A&&(n[u.F]=u.k))),$=o.childNodes.length-1;$>=0;$--)ee(e,t,l,n,s,o.childNodes[$],i);if(o.shadowRoot)for($=o.shadowRoot.childNodes.length-1;$>=0;$--)ee(e,t,l,n,s,o.shadowRoot.childNodes[$],i)}else if(8===o.nodeType)f=o.nodeValue.split("."),f[1]!==i&&"0"!==f[1]||(r=f[0],u={t:0,N:f[1],P:f[2],A:f[3],F:f[4],k:o,m:null,p:null,H:null,g:null,S:null,h:null},"t"===r?(u.k=o.nextSibling,u.k&&3===u.k.nodeType&&(u.h=u.k.textContent,t.push(u),o.remove(),e.p||(e.p=[]),e.p[u.F]=u,n&&"0"===u.A&&(n[u.F]=u.k))):u.N===i&&("s"===r?(u.S="slot",o["s-sn"]=f[5]?u.g=f[5]:"",o["s-sr"]=!0,n&&(u.k=c.createElement(u.S),u.g&&u.k.setAttribute("name",u.g),o.parentNode.insertBefore(u.k,o),o.remove(),"0"===u.A&&(n[u.F]=u.k)),l.push(u),e.p||(e.p=[]),e.p[u.F]=u):"r"===r&&(n?o.remove():(s["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.S){const t=v(null,o.textContent);t.k=o,t.F="0",e.p=[t]}},te=(e,t)=>{if(1===e.nodeType){let l=0;for(;l<e.childNodes.length;l++)te(e.childNodes[l],t);if(e.shadowRoot)for(l=0;l<e.shadowRoot.childNodes.length;l++)te(e.shadowRoot.childNodes[l],t)}else if(8===e.nodeType){const l=e.nodeValue.split(".");"o"===l[0]&&(t.set(l[1]+"."+l[2],e),e.nodeValue="",e["s-en"]=l[3])}},le=(e,t,l)=>{if(t.L){const n=Object.entries(t.L),s=e.prototype;if(n.map((([e,[n]])=>{(31&n||2&l&&32&n)&&Object.defineProperty(s,e,{get(){return((e,t)=>re(this).U.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=re(e),o=s.U.get(t),i=s.t,r=s.i;l=((e,t)=>null==e||S(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.L[t][0]),8&i&&void 0!==o||l===o||Number.isNaN(o)&&Number.isNaN(l)||(s.U.set(t,l),r&&2==(18&i)&&B(s,!1))})(this,e,l,t)},configurable:!0,enumerable:!0})})),1&l){const t=new Map;s.attributeChangedCallback=function(e,l,n){f.jmp((()=>{const l=t.get(e);if(this.hasOwnProperty(l))n=this[l],delete this[l];else if(s.hasOwnProperty(l)&&"number"==typeof this[l]&&this[l]==n)return;this[l]=(null!==n||"boolean"!=typeof this[l])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,l])=>{const n=l[1]||e;return t.set(n,e),n}))}}return e},ne=e=>{if(0==(1&f.t)){const t=re(e),l=t.R,n=()=>{};if(1&t.t)a(e,t,l.W);else{let n;if(t.t|=1,n=e.getAttribute("s-id"),n){if(1&l.t){const t=p(e.shadowRoot,l);e.classList.remove(t+"-h",t+"-s")}((e,t,l,n)=>{const s=e.shadowRoot,o=[],i=s?[]:null,r=n.T=v(t,null);f.q||te(c.body,f.q=new Map),e["s-id"]=l,e.removeAttribute("s-id"),ee(r,o,[],i,e,e,l),o.map((e=>{const l=e.N+"."+e.P,n=f.q.get(l),o=e.k;n&&""===n["s-en"]&&n.parentNode.insertBefore(o,n.nextSibling),s||(o["s-hn"]=t,n&&(o["s-ol"]=n,o["s-ol"]["s-nr"]=o)),f.q.delete(l)})),s&&i.map((e=>{e&&s.appendChild(e)}))})(e,l.$,n,t)}n||12&l.t&&se(e);{let l=e;for(;l=l.parentNode||l.host;)if(1===l.nodeType&&l.hasAttribute("s-id")&&l["s-p"]||l["s-p"]){z(t,t.O=l);break}}l.L&&Object.entries(l.L).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=de(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(le(s,l,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){$e(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=b(l);if(!he.has(t)){const n=()=>{};m(t,e,!!(1&l.t)),n()}}}const o=t.O,i=()=>B(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}},se=e=>{const t=e["s-cr"]=c.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},oe=(e,t={})=>{const l=[],n=t.exclude||[],s=r.customElements,o=c.head,i=o.querySelector("meta[charset]"),u=c.createElement("style"),$=[],a=c.querySelectorAll("[sty-id]");let d,h=!0,y=0;for(Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",c.baseURI).href,f.t|=2;y<a.length;y++)m(a[y].getAttribute("sty-id"),w(a[y].innerHTML),!0);e.map((e=>{e[1].map((t=>{const o={t:t[0],$:t[1],L:t[2],W:t[3]};o.L=t[2],o.W=t[3];const i=o.$,r=class extends HTMLElement{constructor(e){super(e),fe(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),h?$.push(this):f.jmp((()=>ne(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const e=re(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return re(this).V}};o._=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,le(r,o,1)))}))})),u.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),o.insertBefore(u,i?i.nextSibling:o.firstChild),h=!1,$.length?$.map((e=>e.connectedCallback())):f.jmp((()=>d=setTimeout(Q,30)))},ie=new WeakMap,re=e=>ie.get(e),ce=(e,t)=>ie.set(t.i=e,t),fe=(e,t)=>{const l={t:0,M:e,R:t,U:new Map};return l.V=new Promise((e=>l.I=e)),e["s-p"]=[],e["s-rc"]=[],a(e,l,t.W),ie.set(e,l)},ue=(e,t)=>t in e,$e=(e,t)=>(0,console.error)(e,t),ae=new Map,de=e=>{const t=e.$.replace(/-/g,"_"),l=e._,n=ae.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(ae.set(l,e),e[t])),$e)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},he=new Map,ye=[],me=[],pe=(e,t)=>l=>{e.push(l),i||(i=!0,t&&4&f.t?ge(we):f.raf(we))},be=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){$e(e)}e.length=0},we=()=>{be(ye),be(me),(i=ye.length>0)&&f.raf(we)},ge=e=>u().then(e),Se=pe(me,!0);export{j as H,oe as b,V as c,q as g,k as h,u as p,ce as r}