"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3],{3003:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r=n(4270),a=n(9439),c=n(9434),o=n(3634),u=n(6382),i=n(2791),s="NOT_FOUND";var l=function(t,e){return t===e};function f(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?l:r,c=n.maxSize,o=void 0===c?1:c,u=n.resultEqualityCheck,i=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),f=1===o?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:s},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(i):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return s}return{get:r,put:function(e,a){r(e)===s&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(o,i);function m(){var e=f.get(arguments);if(e===s){if(e=t.apply(null,arguments),u){var n=f.getEntries(),r=n.find((function(t){return u(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return m.clearCache=function(){return f.clear()},m}function m(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function p(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var c,o=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=u,l=s.memoizeOptions,f=void 0===l?n:l,p=Array.isArray(f)?f:[f],d=m(r),_=t.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(p)),h=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return c=_.apply(null,t)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:_,dependencies:d,lastResult:function(){return c},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var d=p(f),_=function(t){return t.contacts.items},h=function(t){return t.contacts.isLoading},v=function(t){return t.contacts.error},y=function(t){return t.filter.query},x=d([_,y],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),b="ContactForm_contactform__1wuxY",j="ContactForm_contactform__label__yya8i",C="ContactForm_contactform__title__kgnaW",g="ContactForm_contactform__input__Naa+C",N="ContactForm_contact__addbtn__hC3Tc",w=n(5264),k=n(184),F=function(){var t=(0,c.v9)(_),e=(0,c.I0)(),n=(0,i.useState)(""),r=(0,a.Z)(n,2),s=r[0],l=r[1],f=(0,i.useState)(""),m=(0,a.Z)(f,2),p=m[0],d=m[1];return(0,k.jsxs)("form",{className:b,onSubmit:function(n){if(n.preventDefault(),null!==t&&void 0!==t&&t.find((function(t){return t.name.toLowerCase()===s.toLowerCase()})))w.Notify.warning("Name ".concat(s," is already in your contacts"),{background:"#eebf31",fontSize:"16px",width:"350px"});else{var r={id:(0,u.x0)(),name:s,number:p};e((0,o.uK)(r)),l(""),d("")}},children:[(0,k.jsxs)("label",{className:j,children:[(0,k.jsx)("span",{className:C,children:"Name"}),(0,k.jsx)("input",{className:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)("label",{className:j,children:[(0,k.jsx)("span",{className:C,children:"Number"}),(0,k.jsx)("input",{className:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":l(r);break;case"number":d(r);break;default:return}}})]}),(0,k.jsx)("button",{className:N,type:"submit",children:"Add contact"})]})},A=n(1634),z="Filter_filter__lable__ZhrX8",E="Filter_filter__description__u9wLJ",L="Filter_filter__input__toa89";var Z=function(){var t=(0,c.I0)(),e=(0,c.v9)(y);return(0,k.jsxs)("label",{className:z,children:[(0,k.jsx)("p",{className:E,children:"Find contacts by name"}),(0,k.jsx)("input",{className:L,type:"text",value:e,onChange:function(e){t((0,A._)(e.target.value))},placeholder:"Enter the search name"})]})},q="Contact_contact__item__pT95f",S="Contact_contact__description__F6fjn",O="Contact_contact__name__Owu+Z",I="Contact_contact__deletebtn__DoAtL";var D=function(t){var e=t.name,n=t.number,r=t.id,a=(0,c.I0)();return(0,k.jsxs)("li",{className:q,children:[(0,k.jsxs)("p",{className:S,children:[(0,k.jsx)("span",{className:O,children:e})," : ",n]}),(0,k.jsx)("button",{className:I,type:"button",onClick:function(t){a((0,o.GK)(t))},children:"Delete"})]},r)},T="ContactList_contact__list__2jNwc";var R=function(){var t=(0,c.v9)(x);return(0,k.jsx)("ul",{className:T,children:t.map((function(t){var e=t.id,n=t.name,r=t.number;return(0,k.jsx)(D,{contact:{id:e,name:n,number:r}},e)}))})},J=n(5118),K="Contacts_contacts__container__gn6YE",P=function(){var t=(0,c.I0)(),e=(0,c.v9)(h),n=(0,c.v9)(v);return(0,i.useEffect)((function(){t((0,o.yF)())}),[t]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r.q,{children:(0,k.jsx)("title",{children:"Contacts"})}),(0,k.jsxs)("div",{className:K,children:[(0,k.jsx)("h2",{title:"Phonebook",children:(0,k.jsx)(F,{})}),(0,k.jsxs)("h3",{title:"Contacts",children:[(0,k.jsx)(Z,{}),e&&!n&&(0,k.jsx)(J.Z,{}),(0,k.jsx)(R,{})]})]})]})}}}]);
//# sourceMappingURL=3.a78d1917.chunk.js.map