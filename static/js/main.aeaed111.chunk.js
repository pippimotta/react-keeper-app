(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{33:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),o=n(29),u=n(16);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",{className:"header"},"Keeper"))};var m=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright Mushroom \u24d2 ",e))},s=n(26),f=n.n(s);var E=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",{className:"title"},e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{style:{backgroundColor:"#fff"},onClick:function(){e.onDelete(e.id)}},l.a.createElement(f.a,null)))},p=n(18),d=n(23),v=n(28),b=n.n(v),g=n(57),h=n(58);var O=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)({title:"",content:""}),i=Object(u.a)(o,2),m=i[0],s=i[1];function f(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(p.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){c(!0)},onChange:f,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(h.a,{in:r},l.a.createElement(g.a,{onClick:function(t){e.onAdd(m),s({title:"",content:""}),t.preventDefault()}},l.a.createElement(b.a,null)))))};var j=function(){var e=l.a.useState(JSON.parse(localStorage.getItem("notes"))||[]),t=Object(u.a)(e,2),n=t[0],a=t[1];function r(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.useEffect((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]),l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(O,{onAdd:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,onDelete:r})})),l.a.createElement(m,null))};c.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.aeaed111.chunk.js.map