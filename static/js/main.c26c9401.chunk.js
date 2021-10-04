(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,n){},56:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),s=n(46),i=n.n(s),o=(n(54),n(18)),l=n(10),r=n(27),j=n(5),u=n(6),b=n(9),d=n(8),m=n(12),h=n(21),p=(n(56),n(3)),O=function(){var e=Object(l.f)(),t=Object(c.useState)(!1),n=Object(m.a)(t,2),a=n[0],s=n[1],i=function(){Object(h.d)(j).then((function(){localStorage.removeItem("token"),alert("logout successful"),e.push("/")})).catch((function(e){return alert(e.message)}))},r=function(){e.push("/login")};Object(c.useEffect)((function(){var e=localStorage.getItem("token");e?s(!0):e||s(!1)}),[i]);var j=Object(h.b)();return Object(p.jsx)("nav",{className:"nav-header",children:Object(p.jsxs)("div",{className:"nav-content",children:[Object(p.jsxs)("div",{className:"nav-logo-container",children:[Object(p.jsx)("h1",{className:"website-logo",children:"Y"}),Object(p.jsx)("div",{className:"nav-menu-container",children:Object(p.jsx)(o.b,{to:"/",className:"Link",children:Object(p.jsx)("h1",{className:"navheading",children:"Hacker News"})})}),Object(p.jsxs)("ul",{className:"nav-menu ",children:[Object(p.jsx)(o.b,{to:"/new",className:"Link",children:Object(p.jsx)("li",{className:"nav-menu-item",children:"new"})}),Object(p.jsx)("li",{className:"nav-menu-item",children:"|"}),Object(p.jsx)(o.b,{className:"Link",to:"/past",children:Object(p.jsx)("li",{className:"nav-menu-item",children:"past"})}),Object(p.jsx)("li",{className:"nav-menu-item",children:"|"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"comments"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"|"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"ask"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"|"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"show"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"|"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"jobs"}),Object(p.jsx)("li",{className:"nav-menu-item",children:"|"}),Object(p.jsx)(o.b,{to:"/submit",className:"Link",children:Object(p.jsx)("li",{className:"nav-menu-item",children:"submit"})}),Object(p.jsx)("li",{children:a?Object(p.jsx)("button",{className:"logout-mobile-btn",onClick:i,children:"Logout"}):Object(p.jsx)("button",{className:"logout-mobile-btn",onClick:r,children:"Login"})})]})]}),a?Object(p.jsx)("button",{className:"logout-desktop-btn",onClick:i,children:"Logout"}):Object(p.jsx)("button",{className:"logout-desktop-btn",onClick:r,children:"Login"})]})})},f=n(20),x=n.n(f),v=(n(81),function(e){var t=e.hackData,n=e.upVoteFunction,c=e.downVoteFunction,a=(t.id,t.points),s=t.time,i=t.title,o=t.link;return Object(p.jsx)("div",{className:"news-page",children:Object(p.jsx)("div",{className:"news-content",children:Object(p.jsxs)("p",{className:"title",children:[Object(p.jsx)("button",{type:"button",id:"".concat(i,"upVote"),onClick:function(){return n(t)},children:Object(p.jsx)("img",{className:"countBtn",src:"https://res.cloudinary.com/dbmvwqck0/image/upload/v1632824664/upload_lpbvt1.png",alt:"UpBtn"})}),Object(p.jsx)("button",{type:"button",id:"".concat(i,"downVote"),onClick:function(){return c(t)},children:Object(p.jsx)("img",{className:"countBtn",src:"https://res.cloudinary.com/dbmvwqck0/image/upload/v1632824673/down-arrow_atgk4m.png",alt:"DownBtn"})}),i,Object(p.jsx)("a",{href:o,target:"_blank",children:"Link"})," ",Object(p.jsx)("br",{}),Object(p.jsxs)("p",{className:"news-comments",children:[a," points by ",s," hours ago | hide | 29 comments "]})]})})})}),g=(n(82),x.a.create({baseURL:"https://hacker-news-fedcc-default-rtdb.firebaseio.com"})),N=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={NewsData:[],sortType:"desc"},e.upVote=function(t){var n=t.id;if(localStorage.getItem("token")){var c={id:t.id,title:t.title,link:t.link,time:t.time,points:t.points+1};x.a.put("https://hacker-news-fedcc-default-rtdb.firebaseio.com/register/".concat(n,".json"),c).then((function(t){console.log(t),e.fetchData()}))}},e.downVote=function(t){var n=t.id;if(t.points>=1){var c={id:t.id,title:t.title,link:t.link,time:t.time,points:t.points-1};localStorage.getItem("token")&&x.a.put("https://hacker-news-fedcc-default-rtdb.firebaseio.com/register/".concat(n,".json"),c).then((function(t){e.fetchData()}))}},e.fetchData=function(){g.get("register.json").then((function(t){var n=[];for(var c in t.data)n.push(Object(r.a)(Object(r.a)({},t.data[c]),{},{id:c}));e.setState({NewsData:n})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.NewsData,c=t.sortType,a=n.sort((function(e,t){return("asc"==c?1:-1)*e.time.localeCompare(t.time)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{SortData:this.onSort}),Object(p.jsx)("div",{className:"main-container",children:Object(p.jsx)("div",{className:"app-container",children:Object(p.jsx)("ol",{children:a.map((function(t,n){return Object(p.jsx)("li",{children:Object(p.jsx)(v,{hackData:t,postId:n+1,upVoteFunction:e.upVote,downVoteFunction:e.downVote},t.key)},t.id)}))})})})]})}}]),n}(a.a.Component),k=(n(83),function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(m.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),r=Object(m.a)(i,2),j=r[0],u=r[1];return Object(p.jsx)("div",{className:"pageContainer",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h1",{className:"pageHeading",children:"Login"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"labelName",children:"username:"}),Object(p.jsx)("input",{type:"email",className:"input",value:a,placeholder:" Email",onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"labelName",children:"password:"}),Object(p.jsx)("input",{className:"input",type:"password",value:j,placeholder:" Password",onChange:function(e){return u(e.target.value)}})]}),Object(p.jsx)(o.b,{className:"link",to:"/signup",children:"Create Account?"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"loginBtn",onClick:function(){var t=Object(h.b)();Object(h.c)(t,a,j).then((function(t){localStorage.setItem("token",t._tokenResponse.idToken),e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Login"})]})})}),w=n(49),y=(n(84),function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(m.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),r=Object(m.a)(i,2),j=r[0],u=r[1];return Object(p.jsx)("div",{className:"pageContainer",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h1",{className:"pageHeading",children:"SignUp"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"labelName",children:"username:"}),Object(p.jsx)("input",{type:"email",className:"input",placeholder:" Email",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"labelName",children:"password:"}),Object(p.jsx)("input",{type:"password",className:"input",value:j,placeholder:" Password",onChange:function(e){return u(e.target.value)}})]}),Object(p.jsx)(o.b,{to:"/login",className:"link",children:"Already have an account?"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"SignUpBtn",onClick:function(){var t=Object(h.b)();Object(h.a)(t,a,j).then((function(){Object(h.c)(t,a,j).then((function(t){localStorage.setItem("token",t._tokenResponse.idToken),e.push("/")})).catch((function(e){return alert(e.message)}))})).catch((function(e){return alert(e.message)}))},children:"SignUp"})]})})}),S=n(90),D=(n(85),function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(m.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),o=Object(m.a)(i,2),r=o[0],j=o[1],u=Object(c.useState)(""),b=Object(m.a)(u,2),d=b[0],h=b[1];Object(c.useEffect)((function(){localStorage.getItem("token")||e.push("/login")}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"submit-container",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"boxName",children:"title:"}),Object(p.jsx)("input",{className:"title-box",type:"text",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"boxName",children:"url:"}),Object(p.jsx)("input",{className:"urlBox",type:"text",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(p.jsx)("p",{children:"or"}),Object(p.jsxs)("div",{className:"text-areaContainer",children:[Object(p.jsx)("label",{className:"text",children:"text"}),Object(p.jsx)("textarea",{className:"textArea",value:d,onChange:function(e){h(e.target.value)}})]})]}),Object(p.jsx)("button",{className:"postBtn",onClick:function(){if(d.length>1){var e={title:d,link:r,id:Object(S.a)(),time:new Date,points:0};x.a.post("https://hacker-news-fedcc-default-rtdb.firebaseio.com/register.json",e).then((function(){return alert("Submitted successfully")}))}else{var t={title:a,link:r,id:Object(S.a)(),time:new Date,points:0};x.a.post("https://hacker-news-fedcc-default-rtdb.firebaseio.com/register.json",t).then((function(){return alert("Submitted successfully")}))}j(""),s(""),h("")},children:"Submit"}),Object(p.jsx)("p",{children:" Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread."}),Object(p.jsxs)("p",{children:[" You can also submit via ",Object(p.jsx)("a",{href:"https://news.ycombinator.com/bookmarklet.html",children:"bookmarklet."})]})]})})]})}),C=(n(86),x.a.create({baseURL:"https://hacker-news-fedcc-default-rtdb.firebaseio.com"})),I=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={NewsData:[],sortType:"asc"},e.upVote=function(t){var n=t.id;if(localStorage.getItem("token")){var c={id:t.id,title:t.title,link:t.link,time:t.time,points:t.points+1};x.a.put("https://hacker-news-fedcc-default-rtdb.firebaseio.com/register/".concat(n,".json"),c).then((function(t){console.log(t),e.fetchData()}))}},e.downVote=function(t){var n=t.id;if(t.points>=1){var c={id:t.id,title:t.title,link:t.link,time:t.time,points:t.points-1};localStorage.getItem("token")&&x.a.put("https://hacker-news-fedcc-default-rtdb.firebaseio.com/register/".concat(n,".json"),c).then((function(t){console.log(t),e.fetchData()}))}},e.fetchData=function(){C.get("register.json").then((function(t){var n=[];for(var c in t.data)n.push(Object(r.a)(Object(r.a)({},t.data[c]),{},{id:c}));e.setState({NewsData:n})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.NewsData,c=t.sortType,a=n.sort((function(e,t){return("asc"==c?1:-1)*e.time.localeCompare(t.time)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{SortData:this.onSort}),Object(p.jsx)("div",{className:"main-container",children:Object(p.jsx)("div",{className:"app-container",children:Object(p.jsx)("ol",{children:a.map((function(t,n){return Object(p.jsx)("li",{children:Object(p.jsx)(v,{hackData:t,postId:n+1,upVoteFunction:e.upVote,downVoteFunction:e.downVote},t.key)},t.id)}))})})})]})}}]),n}(a.a.Component);n(87);Object(w.a)({apiKey:"AIzaSyDUNQ1mo7aeDe8fSmZvPjyo-d_9KNpS2mE",authDomain:"hacker-news-fedcc.firebaseapp.com",projectId:"hacker-news-fedcc",storageBucket:"hacker-news-fedcc.appspot.com",messagingSenderId:"1041879871037",appId:"1:1041879871037:web:47f043986f7bd56df90454"});var V=function(){return Object(p.jsx)(o.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(p.jsx)(l.a,{exact:!0,path:"/login",component:k}),Object(p.jsx)(l.a,{exact:!0,path:"/signup",component:y}),Object(p.jsx)(l.a,{exact:!0,path:"/new",component:N}),Object(p.jsx)(l.a,{exact:!0,path:"/past",component:I}),Object(p.jsx)(l.a,{exact:!0,path:"/submit",component:D})]})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c26c9401.chunk.js.map