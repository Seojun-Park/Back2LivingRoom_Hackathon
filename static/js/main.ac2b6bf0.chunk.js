(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var i,r,o,c,a,s,l,u,d,p,b,m,h,j,f,x,g,O,y,w,v,k,S,I,L,N,W,B,z,M,q,T,F,H,D,C,P,R,E,J,A,U,Y,G,Q=n(1),V=n(21),X=n.n(V),_=(n(30),n(4)),K=n(9),Z=n(3),$=n(2),ee=n(0),te={Wrapper:$.d.footer(i||(i=Object(Z.a)(["\n    width: 100%;\n    max-width: 1180px;\n    margin: auto;\n    padding: 120px 0 30px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  "]))),Info:$.d.div(r||(r=Object(Z.a)(["\n    flex: 0 0 30%;\n    max-width: 30%;\n  "]))),Logo:$.d.span(o||(o=Object(Z.a)(["\n    ",";\n    color: ",";\n    display: inline-block;\n    font-weight: 900;\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  "])),(function(e){return e.theme.typography.label}),(function(e){return e.theme.palette.darkgray})),Menu:$.d.ul(c||(c=Object(Z.a)(["\n    flex: 0 0 20%;\n    max-width: 20%;\n    display: flex;\n    flex-direction: column;\n  "]))),MenuTitle:$.d.h4(a||(a=Object(Z.a)(["\n    ",";\n    color: ",";\n    margin-bottom: 2.5rem;\n  "])),(function(e){return e.theme.typography.label}),(function(e){return e.theme.palette.secondary})),MenuItem:$.d.a(s||(s=Object(Z.a)(["\n    ",";\n    color: ",";\n    display: inline-block;\n    margin-bottom: 1.5rem;\n    cursor: pointer;\n    &:hover {\n      opacity: 0.5;\n    }\n  "])),(function(e){return e.theme.typography.body}),(function(e){return e.theme.palette.gray})),Bottom:$.d.div(l||(l=Object(Z.a)(["\n    width: 100%;\n    color: ",";\n    margin-top: 120px;\n    padding-top: 30px;\n    display: flex;\n    justify-content: center;\n    border-top: 1px solid ",";\n    span {\n      ",";\n    }\n  "])),(function(e){return e.theme.palette.gray}),(function(e){return e.theme.palette.lightgray}),(function(e){return e.theme.typography.caption}))},ne=function(){return Object(ee.jsxs)(te.Wrapper,{children:[Object(ee.jsx)(te.Info,{children:Object(ee.jsx)(te.Logo,{children:"James | Jin Park"})}),Object(ee.jsxs)(te.Menu,{children:[Object(ee.jsx)(te.MenuTitle,{children:"Quick Links"}),Object(ee.jsx)(te.MenuItem,{children:"About Us"}),Object(ee.jsx)(te.MenuItem,{children:"Serivces"}),Object(ee.jsx)(te.MenuItem,{children:"Contact Us"})]}),Object(ee.jsx)(te.Bottom,{children:Object(ee.jsx)("span",{children:"Jame | Jin Park \xa9 2021"})})]})},ie=n(11),re={Wrapper:$.d.div(u||(u=Object(Z.a)(["\n    width: 100%;\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n    transition: all 0.2s ease-in-out;\n    background-color: ",";\n    box-shadow: ",";\n  "])),(function(e){var t=e.isScroll,n=e.theme;return t?n.palette.white:"none"}),(function(e){return e.isScroll?"0 0 16px 8px rgba(0, 0, 0, 0.03)":"none"})),Header:$.d.header(d||(d=Object(Z.a)(["\n    width: 100%;\n    max-width: 1180px;\n    margin: auto;\n    transition: all 0.2s ease-in-out;\n    height: ",";\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  "])),(function(e){return e.isScroll?"70px":"100px"})),Logo:$.d.span(p||(p=Object(Z.a)(["\n    color: ",";\n    font-weight: 900;\n    font-size: 1.5rem;\n    flex: 0 0 25%;\n    max-width: 25%;\n  "])),(function(e){var t=e.isScroll,n=e.theme;return t?n.palette.black:n.palette.white})),Navigation:$.d.div(b||(b=Object(Z.a)(["\n    flex: 0 0 50%;\n    max-width: 50%;\n    display: flex;\n    justify-content: center;\n  "]))),NavigationItem:$.d.div(m||(m=Object(Z.a)(["\n    color: ",";\n    color: ",";\n    margin: 0 1rem;\n    cursor: pointer;\n    &:hover {\n      opacity: 0.5;\n    }\n  "])),(function(e){return e.theme.palette.white}),(function(e){var t=e.isScroll,n=e.theme;return t?n.palette.black:n.palette.white})),ButtonWrapper:$.d.div(h||(h=Object(Z.a)(["\n    flex: 0 0 25%;\n    max-width: 25%;\n    display: flex;\n    justify-content: flex-end;\n  "]))),ExtendedLink:Object($.d)(K.c)(j||(j=Object(Z.a)(["\n  text-decoration:none;\n  "])))},oe=["Home","About","Services","Contact"],ce=function(e){e.page;var t=Object(Q.useState)(!1),n=Object(ie.a)(t,2),i=n[0],r=n[1],o=Object(Q.useCallback)((function(){window.pageYOffset>0&&r(!0),0===window.pageYOffset&&r(!1)}),[]);return Object(Q.useEffect)((function(){return window.addEventListener("mousewheel",o),function(){window.removeEventListener("mousewheel",o)}}),[o]),Object(ee.jsx)(re.Wrapper,{isScroll:i,children:Object(ee.jsxs)(re.Header,{isScroll:i,children:[Object(ee.jsx)(re.Logo,{isScroll:i,children:"Lorem"}),Object(ee.jsx)(re.Navigation,{children:oe.map((function(e){return Object(ee.jsx)(re.ExtendedLink,{to:"".concat("Home"===e?"/":e),children:Object(ee.jsx)(re.NavigationItem,{isScroll:i,children:e})},e)}))}),Object(ee.jsx)(re.ButtonWrapper,{children:"button or any idea"})]})})},ae={Background:$.d.section(f||(f=Object(Z.a)(['\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 780px;\n    background: no-repeat center/cover url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");\n  ']))),Cover:$.d.div(x||(x=Object(Z.a)(["\n  position:absolute;\n  top:0;\n  width:100%;\n  height: 780px;\n  background-color:black;\n  opacity:0.3;\n  z-index: 1;\n  "]))),Wrapper:$.d.div(g||(g=Object(Z.a)(["\n    width: 100%;\n    height: 100%;\n    max-width: 1180px;\n    padding-top: 100px;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position:absolute;\n    z-index:2;\n  "]))),Title:$.d.h1(O||(O=Object(Z.a)(["\n    ",";\n    color: #fff;\n    margin-bottom: 0.5rem;\n  "])),(function(e){return e.theme.typography.title})),Description:$.d.p(y||(y=Object(Z.a)(["\n    ",";\n    color: ",";\n    margin-bottom: 2rem;\n  "])),(function(e){return e.theme.typography.description}),(function(e){return e.theme.palette.white})),Button:$.d.button(w||(w=Object(Z.a)(["\n    width: 5rem;\n  "])))},se=function(){return Object(ee.jsxs)(ae.Background,{children:[Object(ee.jsx)(ae.Cover,{}),Object(ee.jsxs)(ae.Wrapper,{children:[Object(ee.jsxs)(ae.Title,{children:["Lorem ipsum",Object(ee.jsx)("br",{}),"Dolor sit amet"]}),Object(ee.jsxs)(ae.Description,{children:["Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",Object(ee.jsx)("br",{}),"labore et dolore magna aliqua. Nisl tincidunt eget nullam non."]}),Object(ee.jsx)(ae.Button,{children:"Lorem"})]})]})},le=n(12),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,i=Object(Q.useRef)(),r=Object(Q.useRef)(null),o=Math.abs(Math.floor(n/(e-t))),c=Object(Q.useCallback)((function(n){var c=Object(ie.a)(n,1)[0],a=i.current;if(a&&c.isIntersecting)var s=t,l=setInterval((function(){s+=1,a.innerHTML=s.toString(),s===e&&(clearInterval(l),r.current.disconnect(i.current))}),o)}),[e,t,o,i]);return Object(Q.useEffect)((function(){return i.current&&(r.current=new IntersectionObserver(c,{threshold:.7}),r.current.observe(i.current)),r&&r.disconnect?function(){return r.disconnect()}:function(){return null}}),[c]),{ref:i}},de={Background:$.d.section(v||(v=Object(Z.a)(["\n    width: 100%;\n    max-width:1180px;\n  "]))),Wrapper:$.d.div(k||(k=Object(Z.a)(["\n    width: 100%;\n    max-width: 1180px;\n    margin: auto;\n    padding: 100px 0;\n  "]))),List:$.d.ul(S||(S=Object(Z.a)(["\n    display: flex;\n  "]))),ListItem:$.d.li(I||(I=Object(Z.a)(["\n    width: 100%;\n    padding: 0 2rem;\n    text-align: center;\n    &:nth-child(2) {\n      border: 2px solid ",";\n      border-top: none;\n      border-bottom: none;\n    }\n  "])),(function(e){return e.theme.palette.white})),Number:$.d.span(L||(L=Object(Z.a)(["\n    ",";\n    color: ",";\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  "])),(function(e){return e.theme.typography.subtitle}),(function(e){return e.theme.palette.secondary})),Unit:$.d.span(N||(N=Object(Z.a)(["\n    ",";\n    color: ",";\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  "])),(function(e){return e.theme.typography.subtitle}),(function(e){return e.theme.palette.secondary})),Title:$.d.h3(W||(W=Object(Z.a)(["\n    ",";\n    margin: 1rem 0;\n  "])),(function(e){return e.theme.typography.subheading})),Description:$.d.p(B||(B=Object(Z.a)(["\n    ",";\n  "])),(function(e){return e.theme.typography.description}))},pe=[{title:"Total Projects",number:10,unit:"+",description:"Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus."},{title:"Partners",number:124,unit:"",description:"Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus."},{title:"Business Success",number:92,unit:"%",description:"Porttitor rhoncus dolor purus non enim praesent elementum facilisis."}],be=function(){var e={0:ue(10),1:ue(124),2:ue(92)};return Object(ee.jsx)(de.Background,{children:Object(ee.jsx)(de.Wrapper,{children:Object(ee.jsx)(de.List,{children:pe.map((function(t,n){return Object(ee.jsxs)(de.ListItem,{children:[Object(ee.jsx)(de.Number,Object(le.a)(Object(le.a)({},e[n]),{},{children:"0"})),Object(ee.jsx)(de.Unit,{children:t.unit}),Object(ee.jsx)(de.Title,{children:t.title}),Object(ee.jsx)(de.Description,{children:t.description})]},t.title)}))})})})},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=Object(Q.useRef)(),r=function(e){switch(e){case"up":return"inset(100% 0 0 0)";case"down":return"inset(0 0 100% 0)";case"left":return"inset(0 100% 0 0)";case"right":return"inset(0 0 0 100%);";default:return}},o=Object(Q.useCallback)((function(e){var r=Object(ie.a)(e,1)[0],o=i.current;o&&r.isIntersecting&&(o.style.transitionProperty="transform, clip-path",o.style.transitionDuration="".concat(1.5*t,"s, ").concat(t,"s"),o.style.transitionTimingFunction="cubic-bezier(0,0,0.2,1)",o.style.transitionDelay="".concat(n,"s"),o.style.transform="scale(1)",o.style.clipPath="inset(0 0 0 0)")}),[n,t]);return Object(Q.useEffect)((function(){var e;return i.current&&(e=new IntersectionObserver(o,{threshold:.7})).observe(i.current.parentNode),e&&e.disconnect?function(){return e.disconnect()}:function(){return null}}),[o]),{ref:i,style:{transform:"scale(1.2)",clipPath:r(e)}}},he={Wrapper:$.d.section(z||(z=Object(Z.a)(["\n    width: 100%;\n    max-width: 1180px;\n    margin: auto;\n    padding: 120px 0;\n    padding-left: 30px;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: space-between; */\n    margin-top: 680px;\n  "]))),Row:$.d.div(M||(M=Object(Z.a)([""]))),TextWrapper:$.d.div(q||(q=Object(Z.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 90%;\n  "]))),Label:$.d.p(T||(T=Object(Z.a)(["\n    display: inline-block;\n    ",";\n    color: ",";\n    margin-bottom: 1rem;\n  "])),(function(e){return e.theme.typography.label}),(function(e){return e.theme.palette.primary})),Title:$.d.h2(F||(F=Object(Z.a)(["\n    ",";\n    color: ",";\n    margin-bottom: 1rem;\n  "])),(function(e){return e.theme.typography.subtitle}),(function(e){return e.theme.palette.black})),Description:$.d.p(H||(H=Object(Z.a)(["\n    ",";\n    color: ",";\n    margin-bottom: 2rem;\n  "])),(function(e){return e.theme.typography.description}),(function(e){return e.theme.palette.black})),List:$.d.ul(D||(D=Object(Z.a)(["\n    width: fit-content;\n    margin-bottom: 2rem;\n  "]))),ListItem:$.d.p(C||(C=Object(Z.a)(["\n    ",";\n    padding: 1rem 1rem 1rem 0;\n    border-bottom: 1px solid ",";\n    span {\n      color: ",";\n    }\n  "])),(function(e){return e.theme.typography.description}),(function(e){return e.theme.palette.lightgray}),(function(e){return e.theme.palette.secondary})),TextButton:$.d.button(P||(P=Object(Z.a)(["\n    width: fit-content;\n    ",";\n    color: ",";\n    cursor: pointer;\n  "])),(function(e){return e.theme.typography.textbutton}),(function(e){return e.theme.palette.secondary})),ImageBox:$.d.div(R||(R=Object(Z.a)(["\n    display:flex;\n    justify-content:center;\n    flex-direction:row;\n    margin:10px auto;\n    "]))),Image:$.d.div(E||(E=Object(Z.a)(["\n    width: 250px;\n    height: 250px;\n    background: no-repeat center/cover gray;\n    /* background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa'); */\n    &:not(:last-child){\n        margin-right: 20px;\n    }\n  "])))},je=["item1","item2","item3"],fe=function(){var e={0:me("down"),1:me("down")};return Object(ee.jsxs)(he.Wrapper,{children:[Object(ee.jsx)(he.Row,{children:Object(ee.jsxs)(he.TextWrapper,{children:[Object(ee.jsx)(he.Label,{children:"About Us"}),Object(ee.jsx)(he.Title,{children:"Hi We are James and Jin"}),Object(ee.jsx)(he.Description,{children:"Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat."}),Object(ee.jsxs)(he.ImageBox,Object(le.a)(Object(le.a)({},e[0]),{},{children:[Object(ee.jsx)(he.Image,{}),Object(ee.jsx)(he.Image,{})]}))]})}),Object(ee.jsxs)(he.Row,{children:[Object(ee.jsx)(he.List,{children:je.map((function(e,t){return Object(ee.jsxs)(he.ListItem,{children:[Object(ee.jsx)("span",{children:"\u2022"})," ",e]},e)}))}),Object(ee.jsx)(K.c,{to:"/About",children:Object(ee.jsx)(he.TextButton,{children:"Read more about us"})})]})]})},xe=$.d.div(J||(J=Object(Z.a)(["\nmin-height:70vh;\n"]))),ge=function(){return Object(ee.jsxs)(xe,{children:[Object(ee.jsx)(ce,{page:"Home"}),Object(ee.jsx)(se,{}),Object(ee.jsx)(fe,{}),Object(ee.jsx)(be,{}),Object(ee.jsx)(ne,{})]})},Oe=$.d.div(A||(A=Object(Z.a)(["\nmin-height:70vh;\n"]))),ye=function(){return Object(ee.jsxs)(Oe,{children:[Object(ee.jsx)(ce,{page:"About"}),Object(ee.jsx)(ne,{})]})},we=$.d.div(U||(U=Object(Z.a)(["\nmin-height:70vh;\n"]))),ve=function(){return Object(ee.jsxs)(we,{children:[Object(ee.jsx)(ce,{page:"Service"}),"about",Object(ee.jsx)(ne,{})]})},ke=$.d.div(Y||(Y=Object(Z.a)(["\nmin-height:70vh;\n"]))),Se=function(){return Object(ee.jsxs)(ke,{children:[Object(ee.jsx)(ce,{page:"Contact"}),"Contact",Object(ee.jsx)(ne,{})]})},Ie=function(){return Object(ee.jsxs)(_.c,{children:[Object(ee.jsx)(_.a,{exact:!0,path:"/",component:ge}),Object(ee.jsx)(_.a,{path:"/About",component:ye}),Object(ee.jsx)(_.a,{path:"/Services",component:ve}),Object(ee.jsx)(_.a,{path:"/Contact",component:Se})]})},Le=Object(_.f)((function(){return Object(ee.jsx)(K.a,{basename:"/Back2LivingRoom_Hackathon/",children:Object(ee.jsx)(Ie,{})})})),Ne=n(25),We=Object($.b)(G||(G=Object(Z.a)(["\n","\n*, *::before, *::after {\n    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');\n    box-sizing: border-box;\n    font-family: 'Noto Sans', sans-serif; \n  }\n"])),Ne.a),Be={palette:{primary:"#0063FF",secondary:"#0a8080",background:"#f8f5f2",white:"#ffffff",black:"#222525",lightgray:"#e2e2e2",gray:"#8a8a8a",darkgray:"#505050",orange:"#f45d48"},typography:{title:{fontFamily:'"Noto Sans", sans-serif',fontSize:"3rem",fontWeight:600},subtitle:{fontFamily:'"Noto Sans", sans-serif',fontSize:"2.5rem",fontWeight:600,lineHeight:1.1},heading:{fontFamily:'"Noto Sans", sans-serif',fontSize:"1.5rem",fontWeight:500},subheading:{fontFamily:'"Noto Sans", sans-serif',fontSize:"1.25rem",fontWeight:700},label:{fontFamily:'"Noto Sans", sans-serif',fontWeight:700},description:{fontFamily:'"Noto Sans", sans-serif',lineHeight:1.5},body:{fontFamily:'"Noto Sans", sans-serif'},caption:{fontFamily:'"Noto Sans", sans-serif',fontSize:"0.875rem"},button:{fontFamily:'"Noto Sans", sans-serif',fontSize:"0.875rem"},textbutton:{fontFamily:'"Noto Sans", sans-serif',fontWeight:700,fontSize:"1rem",border:0}}},ze=function(){return Object(ee.jsxs)($.a,{theme:Be,children:[Object(ee.jsx)(We,{}),Object(ee.jsx)(K.b,{children:Object(ee.jsx)(Le,{})})]})};X.a.render(Object(ee.jsx)(ze,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ac2b6bf0.chunk.js.map