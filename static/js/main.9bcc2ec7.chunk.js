(this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]=this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(8),i=n.n(s),r=n(9),o=n(5);var j=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.date}),Object(c.jsx)("td",{children:e.describtion}),Object(c.jsx)("td",{children:e.category}),Object(c.jsx)("td",{children:e.amount})]})};var l=function(e){return Object(c.jsx)("table",{className:"ui celled striped padded table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Date"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Description"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Category"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Amount"})})]}),e.map((function(e){return Object(c.jsx)(j,{transaction:e},e.id)}))]})})};var d=function(){return Object(c.jsxs)("div",{className:"ui large fluid icon input",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search your Recent Transactions",onChange:function(){return console.log("Searching...")}}),Object(c.jsx)("i",{className:"circular search link icon"})]})},u=n(4),h=n(7);var b=function(e){var t=e.AddTransaction,n=Object(a.useState)({date:" ",description:" ",category:" ",amount:" "}),s=Object(o.a)(n,2),i=s[0],r=s[1];function j(e){var t=e.target.name,n=e.target.value;r(Object(h.a)(Object(h.a)({},i),{},Object(u.a)({},t,n)))}return Object(c.jsx)("div",{className:"ui segment",children:Object(c.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),fetch("http://localhost:8001/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){t(),console.log(e),r({date:" ",description:" ",category:" ",amount:" "})}))},children:[Object(c.jsxs)("div",{className:"inline fields",children:[Object(c.jsx)("input",{type:"date",name:"date",value:i.date,onChange:j}),Object(c.jsx)("input",{type:"text",name:"description",placeholder:"Description",value:i.description,onChange:j}),Object(c.jsx)("input",{type:"text",name:"category",placeholder:"Category",value:i.category,onChange:j}),Object(c.jsx)("input",{type:"number",name:"amount",placeholder:"Amount",step:"0.01",value:i.amount,onChange:j})]}),Object(c.jsx)("button",{className:"ui button",type:"submit",children:"Add Transaction"})]})})};var O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("http://localhost:8001/transactions").then((function(e){return e.json()})).then((function(e){s(e.transaction)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{}),Object(c.jsx)(b,{addTransaction:function(e){s([].concat(Object(r.a)(n),[e]))}}),Object(c.jsx)(l,{transactions:n})]})};var x=function(){return Object(c.jsxs)("div",{className:"ui raised segment",children:[Object(c.jsx)("div",{className:"ui segment violet inverted",children:Object(c.jsx)("h2",{children:"The Royal Bank of Flatiron"})}),Object(c.jsx)(O,{})]})};n(15),n(16);i.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9bcc2ec7.chunk.js.map