(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ec357e"],{3511:function(t,e){var s=TypeError,a=9007199254740991;t.exports=function(t){if(t>a)throw s("Maximum allowed index exceeded");return t}},"4de4":function(t,e,s){"use strict";var a=s("23e7"),r=s("b727").filter,n=s("1dde"),o=n("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"59ce":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-2 m-auto mt-2 mb-2 md:m-2 bg-white text-left w-11/12"},[s("h1",{staticClass:"text-left p-2 text-black text-4xl"},[t._v("User Settings")]),t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"p-2 m-2 text-black border-2 w-3/4 text-2xl",attrs:{type:"text",disabled:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),s("h1",{staticClass:"text-left p-2 text-black text-2xl"},[t._v(" Email "),t.user.verified?s("span",{staticClass:"text-green-500 text-sm"},[t._v("Verified "),s("i",{staticClass:"fa-solid fa-square-check"})]):s("span",{staticClass:"text-red-500 text-sm"},[t._v("Unverified "),s("i",{staticClass:"fa-sharp fa-solid fa-square-xmark"})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"p-2 m-2 text-black border-2 w-3/4 text-2xl",attrs:{type:"text"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),s("br"),t.user.verified?t._e():s("button",{staticClass:"p-2 m-2 text-white bg-green-500 text-xl rounded",attrs:{type:"button"},on:{click:t.sendVerificationEmail}},[t._v(" Verify Email ")]),s("h1",{staticClass:"text-left p-2 text-black text-2xl"},[t._v("School")]),""!=t.user.school?s("div",[s("a",{attrs:{href:"/schools/view/"+t.school._id}},[s("div",{staticClass:"p-4 w-72 h-72 flex flex-col m-2",style:"background:"+t.school.color},[s("img",{staticClass:"rounded-full w-32 h-32 m-auto mb-2",attrs:{src:t.school.url}}),s("div",{staticClass:"mt-auto"},[s("div",{staticClass:"text-white text-sm md:text-2xl text-left"},[t._v(" "+t._s(t.school.name)+" ")]),s("div",{staticClass:"text-white text-sm text-left"},[t._v(" "+t._s(t.school.address)+" | "+t._s(t.school.city)+" "+t._s(t.school.state)+" ")])])])])]):t._e(),""!=t.user.school?s("span",{staticClass:"p-2"},[t._v("Not your school? Click the dropdown below and type your school.")]):t._e(),s("select",{directives:[{name:"model",rawName:"v-model",value:t.user.school,expression:"user.school"}],staticClass:"p-2 m-2 text-black border-2 w-3/4 text-2xl",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"school",e.target.multiple?s:s[0])}}},t._l(t.schools,(function(e){return s("option",{key:e._id,staticClass:"bg-white",style:"color:"+e.color,domProps:{value:e}},[s("div",{staticClass:"flex p-3 cursor-pointer border"},[s("h1",{staticClass:"text-left mr-2"},[s("span",[t._v(" "+t._s(e.name)+" ")]),t._v(" - "),s("br"),s("h1",{staticClass:"mr-2 text-gray-400"},[t._v(" "+t._s(e.city)+", "+t._s(e.state)+" ")])])])])})),0),t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"p-2 m-2 text-black border-2 w-3/4 text-2xl",attrs:{type:"password",placeholder:"Enter a school",disabled:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),s("button",{staticClass:"p-2 m-2 bg-green-500 text-white text-2xl"},[t._v(" Change Password ")]),s("br"),s("button",{staticClass:"p-2 m-2 bg-green-500 text-white text-2xl rounded",attrs:{type:"button"},on:{click:function(e){return t.update()}}},[t._v(" Update ")]),s("h1",{staticClass:"text-left p-2 text-black text-3xl"},[t._v("Manage Reviews")]),s("div",{staticClass:"flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 overflow-x-auto text-black"},t._l(t.reviews,(function(e){return s("div",{key:e._id,staticClass:"p-2 m-2 border-2 rounded"},[s("h1",{staticClass:"text-xl"},[t._v(t._s(e.course))]),s("h1",{staticClass:"text-sm"},[t._v(t._s(e.school))]),s("button",{staticClass:"my-2 bg-blue-600 p-2 rounded text-white mr-2"},[s("a",{attrs:{href:"/reviews/"+e._id}},[t._v(" View ")])]),s("button",{staticClass:"my-2 bg-red-600 p-2 rounded text-white",on:{click:function(s){return t.deleteReview(e._id)}}},[t._v(" Delete ")])])})),0)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"text-left p-2 text-black text-2xl"},[t._v(" Username "),s("br"),s("span",{staticClass:"text-sm"},[t._v("Unfortunately, we cannot change your username at the moment. Please look back for future updates.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"text-left p-2 text-black text-2xl"},[t._v(" Password "),s("br"),s("span",{staticClass:"text-sm"},[t._v("Click on Change Password to recieve a email with a link to change your password.")])])}],n=s("c7eb"),o=s("1da1"),i=(s("4de4"),s("d3b7"),s("7db0"),s("b0c0"),s("a434"),{data:function(){return{user:{},reviews:{},schools:{},school:{}}},beforeCreate:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var s,a,r,o;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/users/current");case 2:return s=e.sent,a=s.data,t.user=a,e.next=7,t.$http.get("/reviews/all");case 7:return r=e.sent,r=r.data.filter((function(t){return t.username===a.username})),e.next=11,t.$http.get("/schools/all");case 11:o=e.sent,t.schools=o.data,""!=t.user.school&&(t.school=t.schools.find((function(e){return e._id===t.user.school}))),t.reviews=r;case 15:case"end":return e.stop()}}),e)})))()},methods:{update:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.put("/users/update",t.user);case 3:t.$store.commit("userData",t.user),location.reload(),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),alert("An error has occured when updating!"),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deleteReview:function(t){var e=this;return Object(o["a"])(Object(n["a"])().mark((function s(){var a,r,o,i,c,l,u,d,p;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,e.$http.delete("/reviews/delete/".concat(t));case 3:return a=s.sent,r=a.data,o=r,s.next=8,e.$http.get("/courses/all");case 8:return i=s.sent,c=i.data.find((function(t){return t.name===o.course&&t.school_id===o.school_id})),l=c.ratings.find((function(t){return t.data._id===o._id})),c.ratings.splice(c.ratings.indexOf(l),1),s.next=14,e.$http.put("/courses/update/".concat(c._id),c);case 14:return s.next=16,e.$http.get("/teachers/all");case 16:return u=s.sent,d=u.data.find((function(t){return t.name===o.instructor})),p=d.ratings.find((function(t){return t._id===o._id})),d.ratings.splice(d.ratings.indexOf(p),1),s.next=22,e.$http.put("/teachers/update/".concat(d._id),d);case 22:location.reload(),s.next=29;break;case 25:s.prev=25,s.t0=s["catch"](0),alert("An error has occured when deleting!"),console.log(s.t0.message);case 29:case"end":return s.stop()}}),s,null,[[0,25]])})))()},sendVerificationEmail:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var s,a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return alert("Verification email sent. Please check your inbox."),e.next=3,t.$http.post("/users/email",{email:t.user.email,username:t.user.username});case 3:s=e.sent,a=s.data,console.log(a);case 6:case"end":return e.stop()}}),e)})))()}}}),c=i,l=(s("846b"),s("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},"7fb8":function(t,e,s){},"846b":function(t,e,s){"use strict";s("7fb8")},a434:function(t,e,s){"use strict";var a=s("23e7"),r=s("7b0b"),n=s("23cb"),o=s("5926"),i=s("07fa"),c=s("3511"),l=s("65f0"),u=s("8418"),d=s("083a"),p=s("1dde"),h=p("splice"),f=Math.max,m=Math.min;a({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var s,a,p,h,x,v,b=r(this),w=i(b),_=n(t,w),g=arguments.length;for(0===g?s=a=0:1===g?(s=0,a=w-_):(s=g-2,a=m(f(o(e),0),w-_)),c(w+s-a),p=l(b,a),h=0;h<a;h++)x=_+h,x in b&&u(p,h,b[x]);if(p.length=a,s<a){for(h=_;h<w-a;h++)x=h+a,v=h+s,x in b?b[v]=b[x]:d(b,v);for(h=w;h>w-a+s;h--)d(b,h-1)}else if(s>a)for(h=w-a;h>_;h--)x=h+a-1,v=h+s-1,x in b?b[v]=b[x]:d(b,v);for(h=0;h<s;h++)b[h+_]=arguments[h+2];return b.length=w-a+s,p}})}}]);
//# sourceMappingURL=chunk-44ec357e.f1f0996d.js.map