let e,t,l,n=!1,s=!1,o=!1,i=!1;const r="undefined"!=typeof window?window:{},c=r.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},f=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),a=(e,t,l)=>{l&&l.map((([l,n,s])=>{const o=e,i=d(t,s),r=h(l);u.ael(o,n,i,r),(t.o=t.o||[]).push((()=>u.rel(o,n,i,r)))}))},d=(e,t)=>l=>{try{256&e.t?e.i[t](l):(e.u=e.u||[]).push([t,l])}catch(e){ue(e)}},h=e=>0!=(2&e),y=new WeakMap,m=(e,t,l)=>{let n=ae.get(e);$&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,ae.set(e,n)},p=(e,t)=>{let l=b(t);const n=ae.get(l);if(e=11===e.nodeType?e:c,n)if("string"==typeof n){let t,s=y.get(e=e.head||e);s||y.set(e,s=new Set),s.has(l)||(e.host&&(t=e.querySelector(`[sty-id="${l}"]`))?t.innerHTML=n:(t=c.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link"))),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l},b=e=>"sc-"+e.$,w=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),g={},S=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...l)=>{let n=null,s=null,o=!1,i=!1;const r=[],c=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?c(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!S(n))&&(n+=""),o&&i?r[r.length-1].h+=n:r.push(o?v(null,n):n),i=o)};c(l),t&&t.name&&(s=t.name);const u=v(e,null);return u.m=t,r.length>0&&(u.p=r),u.g=s,u},v=(e,t)=>({t:0,S:e,h:t,k:null,p:null,m:null,g:null}),M={},j=(e,t,l,n,s,o)=>{if(l!==n){let i=ce(e,t),c=t.toLowerCase();if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=S(n);if((i||r&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}null==n||!1===n?!1===n&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&o||s)&&!r&&e.setAttribute(t,n=!0===n?"":n)}else t="-"===t[2]?t.slice(3):ce(r,c)?c.slice(2):c[2]+t.slice(3),l&&u.rel(e,t,l,!1),n&&u.ael(e,t,n,!1)}},x=(e,t,l,n)=>{const s=11===t.k.nodeType&&t.k.host?t.k.host:t.k,o=e&&e.m||g,i=t.m||g;for(n in o)n in i||j(s,n,o[n],void 0,l,t.t);for(n in i)j(s,n,o[n],i[n],l,t.t)},C=(s,i,r,u)=>{const f=i.p[r];let $,a,d,h=0;if(n||(o=!0,"slot"===f.S&&(e&&u.classList.add(e+"-s"),f.t|=f.p?2:1)),null!==f.h)$=f.k=c.createTextNode(f.h);else if(1&f.t)$=f.k=c.createTextNode("");else if($=f.k=c.createElement(2&f.t?"slot-fb":f.S),x(null,f,!1),null!=e&&$["s-si"]!==e&&$.classList.add($["s-si"]=e),f.p)for(h=0;h<f.p.length;++h)a=C(s,f,h,$),a&&$.appendChild(a);return $["s-hn"]=l,3&f.t&&($["s-sr"]=!0,$["s-cr"]=t,$["s-sn"]=f.g||"",d=s&&s.p&&s.p[r],d&&d.S===f.S&&s.k&&O(s.k,!1)),$},O=(e,t)=>{u.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(P(s).insertBefore(s,N(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&O(s,t)}u.t&=-2},R=(e,t,n,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=C(null,n,o,e),r&&(s[o].k=r,c.insertBefore(r,N(t))))},T=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(o=n.k,W(n),s=!0,o["s-ol"]?o["s-ol"].remove():O(o,!0),o.remove())},I=(e,t)=>e.S===t.S&&("slot"!==e.S||e.g===t.g),N=e=>e&&e["s-ol"]||e,P=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,E=(e,t)=>{const l=t.k=e.k,n=e.p,s=t.p,o=t.h;let i;null===o?("slot"===t.S||x(e,t,!1),null!==n&&null!==s?((e,t,l,n)=>{let s,o=0,i=0,r=t.length-1,c=t[0],u=t[r],f=n.length-1,$=n[0],a=n[f];for(;o<=r&&i<=f;)null==c?c=t[++o]:null==u?u=t[--r]:null==$?$=n[++i]:null==a?a=n[--f]:I(c,$)?(E(c,$),c=t[++o],$=n[++i]):I(u,a)?(E(u,a),u=t[--r],a=n[--f]):I(c,a)?("slot"!==c.S&&"slot"!==a.S||O(c.k.parentNode,!1),E(c,a),e.insertBefore(c.k,u.k.nextSibling),c=t[++o],a=n[--f]):I(u,$)?("slot"!==c.S&&"slot"!==a.S||O(u.k.parentNode,!1),E(u,$),e.insertBefore(u.k,c.k),u=t[--r],$=n[++i]):(s=C(t&&t[i],l,i,e),$=n[++i],s&&P(c.k).insertBefore(s,N(c.k)));o>r?R(e,null==n[f+1]?null:n[f+1].k,l,n,i,f):i>f&&T(t,o,r)})(l,n,t,s):null!==s?(null!==e.h&&(l.textContent=""),R(l,null,t,s,0,s.length-1)):null!==n&&T(n,0,n.length-1)):(i=l["s-cr"])?i.parentNode.textContent=o:e.h!==o&&(l.data=o)},A=e=>{const t=e.childNodes;let l,n,s,o,i,r;for(n=0,s=t.length;n<s;n++)if(l=t[n],1===l.nodeType){if(l["s-sr"])for(i=l["s-sn"],l.hidden=!1,o=0;o<s;o++)if(r=t[o].nodeType,t[o]["s-hn"]!==l["s-hn"]||""!==i){if(1===r&&i===t[o].getAttribute("slot")){l.hidden=!0;break}}else if(1===r||3===r&&""!==t[o].textContent.trim()){l.hidden=!0;break}A(l)}},F=[],L=e=>{let t,l,n,o,i,r,c=0;const u=e.childNodes,f=u.length;for(;c<f;c++){if(t=u[c],t["s-sr"]&&(l=t["s-cr"])&&l.parentNode)for(n=l.parentNode.childNodes,o=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(U(l,o)?(i=F.find((e=>e.v===l)),s=!0,l["s-sn"]=l["s-sn"]||o,i?i.M=t:F.push({M:t,v:l}),l["s-sr"]&&F.map((e=>{U(e.v,l["s-sn"])&&(i=F.find((e=>e.v===l)),i&&!e.M&&(e.M=i.M))}))):F.some((e=>e.v===l))||F.push({v:l}));1===t.nodeType&&L(t)}},U=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,W=e=>{e.m&&e.m.ref&&e.m.ref(null),e.p&&e.p.map(W)},q=(e,t,l)=>{const n=(e=>oe(e).j)(e);return{emit:e=>H(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},H=(e,t,l)=>{const n=u.ce(t,l);return e.dispatchEvent(n),n},V=(e,t)=>{t&&!e.C&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.C=t)))},_=(e,t)=>{if(e.t|=16,!(4&e.t))return V(e,e.O),we((()=>z(e,t)));e.t|=512},z=(e,t)=>{const l=e.i;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>K(l,e,t))),e.u=null)),Q(void 0,(()=>B(e,l,t)))},B=async(e,t,l)=>{const n=e.j,s=n["s-rc"];l&&(e=>{const t=e.R,l=e.j,n=t.t,s=p(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=s,l.classList.add(s+"-h"))})(e);D(e,t),s&&(s.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>G(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},D=(i,r)=>{try{r=r.render(),i.t&=-17,i.t|=2,((i,r)=>{const f=i.j,$=i.R,a=i.T||v(null,null),d=(e=>e&&e.S===M)(r)?r:k(null,null,r);if(l=f.tagName,d.S=null,d.t|=4,i.T=d,d.k=a.k=f.shadowRoot||f,e=f["s-sc"],t=f["s-cr"],n=0!=(1&$.t),s=!1,E(a,d),u.t|=1,o){let e,t,l,n,s,o;L(d.k);let i=0;for(;i<F.length;i++)e=F[i],t=e.v,t["s-ol"]||(l=c.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<F.length;i++)if(e=F[i],t=e.v,e.M){for(n=e.M.parentNode,s=e.M.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&A(d.k),u.t&=-2,F.length=0})(i,r)}catch(e){ue(e,i.j)}return null},G=e=>{const t=e.j,l=e.O;64&e.t||(e.t|=64,X(t),e.I(t),l||J()),e.C&&(e.C(),e.C=void 0),512&e.t&&be((()=>_(e,!1))),e.t&=-517},J=()=>{X(c.documentElement),be((()=>H(r,"appload",{detail:{namespace:"stenciltest"}})))},K=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){ue(e)}},Q=(e,t)=>e&&e.then?e.then(t):t(),X=e=>e.classList.add("hydrated"),Y=(e,t,l,n,s,o,i)=>{let r,u,f,$;if(1===o.nodeType){for(r=o.getAttribute("c-id"),r&&(u=r.split("."),u[0]!==i&&"0"!==u[0]||(f={t:0,N:u[0],P:u[1],A:u[2],F:u[3],S:o.tagName.toLowerCase(),k:o,m:null,p:null,L:null,g:null,h:null},t.push(f),o.removeAttribute("c-id"),e.p||(e.p=[]),e.p[f.F]=f,e=f,n&&"0"===f.A&&(n[f.F]=f.k))),$=o.childNodes.length-1;$>=0;$--)Y(e,t,l,n,s,o.childNodes[$],i);if(o.shadowRoot)for($=o.shadowRoot.childNodes.length-1;$>=0;$--)Y(e,t,l,n,s,o.shadowRoot.childNodes[$],i)}else if(8===o.nodeType)u=o.nodeValue.split("."),u[1]!==i&&"0"!==u[1]||(r=u[0],f={t:0,N:u[1],P:u[2],A:u[3],F:u[4],k:o,m:null,p:null,L:null,g:null,S:null,h:null},"t"===r?(f.k=o.nextSibling,f.k&&3===f.k.nodeType&&(f.h=f.k.textContent,t.push(f),o.remove(),e.p||(e.p=[]),e.p[f.F]=f,n&&"0"===f.A&&(n[f.F]=f.k))):f.N===i&&("s"===r?(f.S="slot",o["s-sn"]=u[5]?f.g=u[5]:"",o["s-sr"]=!0,n&&(f.k=c.createElement(f.S),f.g&&f.k.setAttribute("name",f.g),o.parentNode.insertBefore(f.k,o),o.remove(),"0"===f.A&&(n[f.F]=f.k)),l.push(f),e.p||(e.p=[]),e.p[f.F]=f):"r"===r&&(n?o.remove():(s["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.S){const t=v(null,o.textContent);t.k=o,t.F="0",e.p=[t]}},Z=(e,t)=>{if(1===e.nodeType){let l=0;for(;l<e.childNodes.length;l++)Z(e.childNodes[l],t);if(e.shadowRoot)for(l=0;l<e.shadowRoot.childNodes.length;l++)Z(e.shadowRoot.childNodes[l],t)}else if(8===e.nodeType){const l=e.nodeValue.split(".");"o"===l[0]&&(t.set(l[1]+"."+l[2],e),e.nodeValue="",e["s-en"]=l[3])}},ee=(e,t,l)=>{if(t.U){const n=Object.entries(t.U),s=e.prototype;if(n.map((([e,[n]])=>{(31&n||2&l&&32&n)&&Object.defineProperty(s,e,{get(){return((e,t)=>oe(this).W.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=oe(e),o=s.W.get(t),i=s.t,r=s.i;l=((e,t)=>null==e||S(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.U[t][0]),8&i&&void 0!==o||l===o||Number.isNaN(o)&&Number.isNaN(l)||(s.W.set(t,l),r&&2==(18&i)&&_(s,!1))})(this,e,l,t)},configurable:!0,enumerable:!0})})),1&l){const t=new Map;s.attributeChangedCallback=function(e,l,n){u.jmp((()=>{const l=t.get(e);if(this.hasOwnProperty(l))n=this[l],delete this[l];else if(s.hasOwnProperty(l)&&"number"==typeof this[l]&&this[l]==n)return;this[l]=(null!==n||"boolean"!=typeof this[l])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,l])=>{const n=l[1]||e;return t.set(n,e),n}))}}return e},te=e=>{if(0==(1&u.t)){const t=oe(e),l=t.R,n=()=>{};if(1&t.t)a(e,t,l.q);else{let n;if(t.t|=1,n=e.getAttribute("s-id"),n){if(1&l.t){const t=p(e.shadowRoot,l);e.classList.remove(t+"-h",t+"-s")}((e,t,l,n)=>{const s=e.shadowRoot,o=[],i=s?[]:null,r=n.T=v(t,null);u.H||Z(c.body,u.H=new Map),e["s-id"]=l,e.removeAttribute("s-id"),Y(r,o,[],i,e,e,l),o.map((e=>{const l=e.N+"."+e.P,n=u.H.get(l),o=e.k;n&&""===n["s-en"]&&n.parentNode.insertBefore(o,n.nextSibling),s||(o["s-hn"]=t,n&&(o["s-ol"]=n,o["s-ol"]["s-nr"]=o)),u.H.delete(l)})),s&&i.map((e=>{e&&s.appendChild(e)}))})(e,l.$,n,t)}n||12&l.t&&le(e);{let l=e;for(;l=l.parentNode||l.host;)if(1===l.nodeType&&l.hasAttribute("s-id")&&l["s-p"]||l["s-p"]){V(t,t.O=l);break}}l.U&&Object.entries(l.U).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=$e(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(ee(s,l,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){ue(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=b(l);if(!ae.has(t)){const n=()=>{};m(t,e,!!(1&l.t)),n()}}}const o=t.O,i=()=>_(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}},le=e=>{const t=e["s-cr"]=c.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ne=(e,t={})=>{const l=[],n=t.exclude||[],s=r.customElements,o=c.head,i=o.querySelector("meta[charset]"),f=c.createElement("style"),$=[],a=c.querySelectorAll("[sty-id]");let d,h=!0,y=0;for(Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",c.baseURI).href,u.t|=2;y<a.length;y++)m(a[y].getAttribute("sty-id"),w(a[y].innerHTML),!0);e.map((e=>{e[1].map((t=>{const o={t:t[0],$:t[1],U:t[2],q:t[3]};o.U=t[2],o.q=t[3];const i=o.$,r=class extends HTMLElement{constructor(e){super(e),re(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),h?$.push(this):u.jmp((()=>te(this)))}disconnectedCallback(){u.jmp((()=>(()=>{if(0==(1&u.t)){const e=oe(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return oe(this).V}};o._=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,ee(r,o,1)))}))})),f.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),o.insertBefore(f,i?i.nextSibling:o.firstChild),h=!1,$.length?$.map((e=>e.connectedCallback())):u.jmp((()=>d=setTimeout(J,30)))},se=new WeakMap,oe=e=>se.get(e),ie=(e,t)=>se.set(t.i=e,t),re=(e,t)=>{const l={t:0,j:e,R:t,W:new Map};return l.V=new Promise((e=>l.I=e)),e["s-p"]=[],e["s-rc"]=[],a(e,l,t.q),se.set(e,l)},ce=(e,t)=>t in e,ue=(e,t)=>(0,console.error)(e,t),fe=new Map,$e=e=>{const t=e.$.replace(/-/g,"_"),l=e._,n=fe.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(fe.set(l,e),e[t])),ue)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ae=new Map,de=[],he=[],ye=(e,t)=>l=>{e.push(l),i||(i=!0,t&&4&u.t?be(pe):u.raf(pe))},me=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ue(e)}e.length=0},pe=()=>{me(de),me(he),(i=de.length>0)&&u.raf(pe)},be=e=>f().then(e),we=ye(he,!0);export{ne as b,q as c,k as h,f as p,ie as r}