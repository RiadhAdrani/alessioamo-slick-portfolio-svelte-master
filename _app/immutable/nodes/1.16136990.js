import{s as x,f as u,l as h,a as S,g as d,h as v,m as g,d as m,c as q,i as _,I as E,p as $,n as b,L as y}from"../chunks/scheduler.b3c879a1.js";import{S as C,i as H}from"../chunks/index.50170cf9.js";import{p as I}from"../chunks/stores.cc8f9666.js";function L(p){var f;let a,s=p[0].status+"",r,o,n,i=((f=p[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(s),o=S(),n=u("p"),c=h(i)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(m),o=q(e),n=d(e,"P",{});var l=v(n);c=g(l,i),l.forEach(m)},m(e,t){_(e,a,t),E(a,r),_(e,o,t),_(e,n,t),E(n,c)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&$(r,s),t&1&&i!==(i=((l=e[0].error)==null?void 0:l.message)+"")&&$(c,i)},i:b,o:b,d(e){e&&(m(a),m(o),m(n))}}}function P(p,a,s){let r;return y(p,I,o=>s(0,r=o)),[r]}class z extends C{constructor(a){super(),H(this,a,P,L,x,{})}}export{z as component};
