(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),o=c(7),a=c(4),r=c(5),i=c(9),l=c(8),d=c(1),u=c.n(d),h=(c(14),c(6)),j=c.n(h),b=c(0),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={goods:[].concat(f),selectedGoods:["Jam"]},e.handleClick=function(t){e.setState((function(e){return e.selectedGoods.includes(t)?{selectedGoods:e.selectedGoods.filter((function(e){return t!==e}))}:{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.clearList=function(){e.setState({selectedGoods:[]})},e.setTitle=function(e){switch(e.length){case 0:return"No goods selected";case 1:return"".concat(e," is selected");default:var t=e.map((function(t,c){return c<e.length-2?"".concat(t,","):c===e.length-2?"".concat(t):"and ".concat(t," are selected")}));return"".concat(t.join(" "))}},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.goods,n=t.selectedGoods;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:this.setTitle(n)}),Object(b.jsxs)("div",{children:[c.map((function(t){return Object(b.jsx)("div",{className:j()({selected:n.includes(t)},"item"),children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{children:t}),Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){e.handleClick(t)},children:n.includes(t)?"Remove":"Add"})]})},t)})),0!==n.length&&Object(b.jsx)("button",{className:"button",type:"button",onClick:this.clearList,children:"X"})]})]})}}]),c}(u.a.Component),p=m;s.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.46638b7e.chunk.js.map