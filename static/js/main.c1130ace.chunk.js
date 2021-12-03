(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__1cnTY",filterInput:"Filter_filterInput__37kcw"}},11:function(t,e,n){t.exports={contactListItem:"ContactItem_contactListItem__2i03z",deleteContactBtn:"ContactItem_deleteContactBtn__lF2fr"}},14:function(t,e,n){t.exports={contactList:"ContactList_contactList__1VJPL"}},2:function(t,e,n){t.exports={form:"Form_form__2GCic",label:"Form_label__E_bhQ",input:"Form_input__1MKho",formBtn:"Form_formBtn__dit4f"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=(n(20),n(15)),s=n(4),l=n(5),u=n(7),m=n(6),d=n(13),b=n(8),h=n.n(b),f=n(2),p=n.n(f),j=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).nameID=h.a.generate(),t.numberID=h.a.generate(),t.initialState={name:"",number:""},t.state=t.initialState,t.updateState=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.onSubmitAddContact=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,c={id:h.a.generate(),name:a,number:r};void 0===t.checkContactIdentity()?(t.props.addContact(c),t.reset()):t.alertIdentity(a)},t.reset=function(){t.setState(t.initialState)},t.checkContactIdentity=function(){return t.props.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))},t.alertIdentity=function(e){alert("".concat(e," is already in your contacts!")),t.reset()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:p.a.form,onSubmit:this.onSubmitAddContact,children:[Object(j.jsx)("label",{className:p.a.label,htmlFor:this.nameID,children:"Name"}),Object(j.jsx)("input",{id:this.nameID,className:p.a.input,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.updateState}),Object(j.jsx)("label",{className:p.a.label,htmlFor:this.numberID,children:"Number"}),Object(j.jsx)("input",{id:this.numberID,className:p.a.input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.updateState}),Object(j.jsx)("button",{className:p.a.formBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(10),v=n.n(O);function x(t){var e=t.onFilterInputEnter,n=t.onFilterOut,a=t.filterValue;return Object(j.jsxs)("label",{className:v.a.filterLabel,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:a,className:v.a.filterInput,onChange:e,onBlur:n})]})}var _=n(11),y=n.n(_);function F(t){var e=t.name,n=t.phoneNumber,a=t.onDeleteBtn;return Object(j.jsxs)("li",{className:y.a.contactListItem,children:[Object(j.jsxs)("p",{children:[e,": ",Object(j.jsx)("span",{children:n})]}),Object(j.jsx)("button",{className:y.a.deleteContactBtn,type:"button",onClick:a,children:"Delete"})]})}var I=n(14),L=n.n(I);function S(t){var e=t.contactsData,n=t.onDeleteBtn;return Object(j.jsx)("ul",{className:L.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsx)(F,{name:a,phoneNumber:r,onDeleteBtn:function(){return n(e)}},e)}))})}var g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.updateContactsList=function(e){t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.updateFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.resetFilter=function(e){t.setState({filter:""})},t.findContactsByFilter=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.findContactsByFilter();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(C,{addContact:this.updateContactsList,contacts:this.state.contacts}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(x,{onFilterInputEnter:this.updateFilter,onFilterOut:this.resetFilter,filterValue:t}),Object(j.jsx)(S,{contactsData:e,onDeleteBtn:this.deleteContact})]})}}]),n}(a.Component),N=g;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c1130ace.chunk.js.map