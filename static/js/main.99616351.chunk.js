(this["webpackJsonpchambi-cuisine"]=this["webpackJsonpchambi-cuisine"]||[]).push([[0],{24:function(n,e,t){n.exports=t(36)},29:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),o=t(17),a=t.n(o);t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(3),l=t(1),u=t(9),s=t(7),f={primary:"#32936F",secondary:"#124559"},p=Object(r.memo)((function(n){var e=n.children,t={colors:f};return i.a.createElement(l.a,{theme:t},e)})),h=[{id:"risotto",title:"Risotto bourguignon",steps:[{title:"faire une petite p\xe9tanque",description:"blablabla"},{title:"boire un ricard",description:"blablabla"},{title:"tu tires?",description:"et ouai maggle"},{title:"tu pointes?",description:"et ouai maggle"}]},{id:"boeuf-bourguignon",title:"Boeuf bourguignon",steps:[{title:"faire bouillir l'eau",description:"blablabla"},{title:"couper les patates",description:"blablabla"},{title:"couper les oignons",description:"et ouai maggle"}]}];function d(){var n=Object(c.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"]);return d=function(){return n},n}function m(){var n=Object(c.a)(["\n  min-height: 100%;\n  width: 100vw;\n  scroll-snap-align: start;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]);return m=function(){return n},n}function b(){var n=Object(c.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  color: black;\n  font-size: 26px;\n"]);return b=function(){return n},n}function g(){var n=Object(c.a)(["\n  scroll-snap-type: y mandatory;\n  height: 100%;\n  overflow-y: scroll;\n"]);return g=function(){return n},n}var v=[{title:"faire bouillir l'eau",description:"blablabla"},{title:"couper les patates",description:"blablabla"},{title:"couper les oignons",description:"et ouai maggle"}],x=l.c.div(g()),w=l.c.div(b()),y=l.c.div(m()),E=l.c.div(d()),j=function(){var n=Object(s.f)().id,e=v.length,t=h.find((function(e){return e.id===n}));return i.a.createElement(x,null,i.a.createElement(w,null,t.title),t.steps.map((function(n,t){var r=n.title,o=n.description;return i.a.createElement(y,null,i.a.createElement(E,null,"".concat(t+1," / ").concat(e)),i.a.createElement("div",null,r),i.a.createElement("div",null,o))})))},O=t(22);function k(){var n=Object(c.a)(["\n  text-decoration: none;\n  color: white;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid lightgrey;\n  &:focus {\n    outline: O;\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(c.a)(["\n      transform: translateX(0);\n    "]);return z=function(){return n},n}function N(){var n=Object(c.a)(["\n  width: 300px;\n  height: calc(100vh - ",");\n  background-color: ",";\n  position: absolute;\n  top: ",";\n  right: 0;\n  transform: translateX(300px);\n  transition: transform 300ms ease;\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 20px 0;\n  ","\n"]);return N=function(){return n},n}function B(){var n=Object(c.a)(["\n  border: 1px solid white;\n  border-radius: 3px;\n  padding: 10px 15px;\n  color: white;\n  background-color: transparent;\n  cursor: pointer;\n  &:focus {\n    outline: O;\n  }\n  &:hover {\n    background-color: white;\n    color: ",";\n    transition: background-color 100ms ease, color 100ms ease;\n  }\n"]);return B=function(){return n},n}function C(){var n=Object(c.a)(["\n  font-size: 24px;\n  color: white;\n  text-decoration: none;\n"]);return C=function(){return n},n}function J(){var n=Object(c.a)(["\n  position: sticky;\n  flex-shrink: 0;\n  top: 0;\n  width: 100vw;\n  height: ",";\n  background-color: ",";\n  color: white;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1;\n"]);return J=function(){return n},n}var W=l.c.header(J(),(function(n){return n.height}),(function(n){return n.theme.colors.primary})),X=Object(l.c)(u.b)(C()),q=l.c.button(B(),(function(n){return n.theme.colors.primary})),F=l.c.div(N(),(function(n){return n.height}),(function(n){return n.theme.colors.secondary}),(function(n){return n.height}),(function(n){return n.visible&&Object(l.b)(z())})),I=Object(l.c)(u.b)(k()),L=function(n){var e=n.className,t=n.height,o=Object(r.useState)(!1),a=Object(O.a)(o,2),c=a[0],l=a[1],u=function(){return l(!c)};return i.a.createElement(W,{className:e,height:t},i.a.createElement(X,{to:"/"},"Chambi cuisine"),i.a.createElement(q,{onClick:u},"Les recettes"),i.a.createElement(F,{height:t,visible:c},h.map((function(n){var e=n.id,t=n.title;return i.a.createElement(I,{key:e,to:"/recipes/".concat(e),onClick:u},t)}))))};function R(){var n=Object(c.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: ",";\n  background-color: ",";\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  z-index: -1;\n"]);return R=function(){return n},n}var S=l.c.footer(R(),(function(n){return n.height}),(function(n){return n.theme.colors.primary})),$=function(n){var e=n.className,t=n.height;return i.a.createElement(S,{className:e,height:t},"gros footer maggle")},A=function(n){n.className,n.height;return i.a.createElement("div",null,"home")};function D(){var n=Object(c.a)(["\n  flex-grow: 1;\n  height: 100%;\n  background-color: white;\n  margin-bottom: ",";\n  z-index: 0;\n"]);return D=function(){return n},n}function G(){var n=Object(c.a)(["\n  position: relative;\n  height: calc(100vh + ",");\n  width: 100vw;\n  display: flex;\n  flex-flow: column nowrap;\n  overflow: hidden;\n"]);return G=function(){return n},n}var H=l.c.div(G(),"200px"),K=l.c.main(D(),"200px"),M=function(){return i.a.createElement(p,null,i.a.createElement(u.a,null,i.a.createElement(H,null,i.a.createElement(L,{height:"80px"}),i.a.createElement(K,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/recipes/:id",children:i.a.createElement(j,null)}),i.a.createElement(s.a,{path:"/"},i.a.createElement(A,null)))),i.a.createElement($,{height:"200px"}))))};a.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.99616351.chunk.js.map