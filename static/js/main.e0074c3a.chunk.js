(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var i=r(3),n=r.n(i),c=r(9),s=r.n(c),o=(r(16),r(17),r(0));function a(){var e=Object(i.useRef)(null),t=function(t){t.preventDefault();var r=t.target.getAttribute("href"),i=document.querySelector(r);if(i){var n,c=null===(n=e.current)||void 0===n?void 0:n.offsetHeight;window.scrollTo({top:Math.max(0,document.querySelector(r).offsetTop-c),behavior:"smooth"})}};return Object(o.jsxs)("nav",{ref:e,children:[Object(o.jsx)("h2",{className:"shown",children:"Ivan Teplov"}),Object(o.jsx)("a",{onClick:t,href:"#skills",children:"Skills"}),Object(o.jsx)("a",{onClick:t,href:"#projects",children:"Projects"}),Object(o.jsx)("a",{onClick:t,className:"button button-primary",href:"#contact",children:"Contact"})]})}r(19);function l(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Ivan Teplov"}),Object(o.jsx)("p",{children:"Software Engineer"}),Object(o.jsx)("a",{href:"#contact",className:"button button-primary",children:"Contact me"})]})}r(20);function j(){return Object(o.jsxs)("section",{id:"introduction",children:[Object(o.jsx)("h2",{children:"Introduction"}),Object(o.jsx)("p",{children:"Hi, I'm Ivan Teplov. I'm a software engineer living in Vinnytsia, Ukraine. I currently study in a High School and develop websites and apps."}),Object(o.jsx)("p",{children:"I've been programming since 10 years old, and I never stop learning latest technologies and exploring the world of computers. Coding is my passion, and I always try to improve myself to make high-quality websites, apps, or other tech-related products."})]})}var d=r(8),p=r(10),u=r(11),b=(r(21),r(2)),h=r(4),m=["project"],g=[{title:"PomoDo",image:"/pomodo.png",description:"Powerful web application (PWA) for pomodoro timers made using pure HTML5, CSS3, and JavaScript",badges:[b.d,b.b,b.f],url:"https://ivteplo.github.io/pomodo",repo:"https://github.com/ivteplo/pomodo"},{title:"Todo app",image:"/todo.png",description:"Todo list app made with Firebase (Firestore, Firebase Auth, and Hosting), React, and Typescript",badges:[b.h,b.f],url:"https://todo-app-2a468.web.app/",repo:"https://github.com/ivteplo/todo"},{title:"Homepage",image:"/homepage.png",description:"Multiple-page website about me and my hobbies, made in HTML5, CSS3, JavaScript, and Bootstrap",badges:[b.d,b.b,b.f,b.a],url:"https://ivteplo.github.io/homepage",repo:"https://github.com/ivteplo/homepage"},{title:"Snake game",image:"/snake.png",description:"Simple game, made with Python and PyGame library",badges:[b.g],url:"",repo:"https://github.com/ivteplo/snake-pygame"},{title:"Newton's Cradle",image:"/newtonscradle.png",description:"Newton's cradle simulation using JavaScript, p5.js, and Matter.js",badges:[b.d,b.f],url:"https://ivteplo.github.io/NewtonsCradle/",repo:"https://github.com/ivteplo/NewtonsCradle"}];function f(e){var t=e.project,r=Object(u.a)(e,m),n=Object(i.useState)(!1),c=Object(p.a)(n,2),s=c[0],a=c[1],l=Object(i.useRef)(),j=function(){var e,t,r=null!==(e=null===(t=l.current)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0;a(r>600)};return Object(i.useEffect)((function(){j(),window.addEventListener("resize",(function(){return j()}))}),[]),Object(o.jsxs)("div",Object(d.a)(Object(d.a)({className:"ProjectView "+(s?"wide":""),ref:l},r),{},{children:[Object(o.jsx)("img",{src:t.image,alt:"Project screenshot",className:"ProjectImage"}),Object(o.jsxs)("div",{className:"ProjectInfo",children:[Object(o.jsx)("h3",{className:"ProjectTitle",children:t.title}),Object(o.jsx)("p",{className:"ProjectDescription",children:t.description}),Object(o.jsx)("div",{className:"ProjectBadges",children:t.badges.map((function(e,t){return Object(o.jsx)(h.a,{icon:e},t)}))}),Object(o.jsxs)("div",{className:"ProjectLinks",children:[Object(o.jsx)("a",{href:t.url,rel:"noreferrer",target:"_blank",className:"ProjectLink "+(t.url?"":"hidden"),children:"Open website"}),Object(o.jsx)("a",{href:t.repo,rel:"noreferrer",target:"_blank",className:"ProjectLink",children:"Source Code"})]})]})]}))}function O(){return Object(o.jsxs)("section",{id:"projects",children:[Object(o.jsx)("h2",{children:"Projects"}),Object(o.jsx)("div",{className:"ProjectList",children:g.map((function(e){return Object(o.jsx)(f,{project:e},e.title)}))})]})}r(27);var v={"Markup Languages":["HTML5","CSS3","Sass","Pug"],"Programming Languages":["JavaScript","TypeScript","CoffeeScript","Python","Ruby","C#","Java","C/C++"],Frameworks:["React","Flask"],"JavaScript Tools":["Webpack","Rollup","Gulp","ESLint","Prettier"],"Programming Tools":["Git","Linux Terminal"],"Cloud Providers and Databases":["Heroku","Firebase","MySQL","SQLite","PostgreSQL"]};function x(e){var t=e.skill;return Object(o.jsx)("div",{className:"SkillView",children:t})}function k(e){var t=e.groupName,r=e.skills;return Object(o.jsxs)("div",{className:"SkillGroup",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("div",{className:"SkillList",children:r.map((function(e){return Object(o.jsx)(x,{skill:e},e)}))})]})}function S(){return Object(o.jsxs)("section",{id:"skills",children:[Object(o.jsx)("h2",{children:"Skills"}),Object(o.jsx)("div",{className:"SkillGroupList",children:Object.keys(v).map((function(e){return Object(o.jsx)(k,{skills:v[e],groupName:e},e)}))})]})}r(28);function w(){return Object(o.jsxs)("section",{id:"contact",children:[Object(o.jsx)("h2",{children:"Contact me"}),Object(o.jsxs)("div",{className:"ContactList",children:[Object(o.jsxs)("a",{href:"https://github.com/ivteplo",target:"_blank",rel:"noreferrer",className:"button button-primary",children:[Object(o.jsx)(h.a,{icon:b.c}),"Github"]}),Object(o.jsxs)("a",{href:"https://twitter.com/ivteplo",target:"_blank",rel:"noreferrer",className:"button button-primary",children:[Object(o.jsx)(h.a,{icon:b.i}),"Twitter"]}),Object(o.jsxs)("a",{href:"https://instagram.com/iteplov7",target:"_blank",rel:"noreferrer",className:"button button-primary",children:[Object(o.jsx)(h.a,{icon:b.e}),"Instagram"]})]})]})}var y=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(a,{}),Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)(S,{}),Object(o.jsx)(O,{}),Object(o.jsx)(w,{})]})},N=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,30)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),N()}],[[29,1,2]]]);
//# sourceMappingURL=main.e0074c3a.chunk.js.map