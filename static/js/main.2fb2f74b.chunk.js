(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,n,t){e.exports=t(87)},69:function(e,n,t){e.exports=t.p+"static/media/graphql_logo.126b901b.png"},87:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(29),o=t.n(i),c=t(1),l=t(19),u=t.n(l),s=t(23),d=t(6),p=t(7),m=t(9),h=t(8),f=t(10),g=t(98),b=t(14),v=t(21),j=t.n(v);function O(){var e=Object(c.a)(["\n  query LoggedInUserQuery {\n    loggedInUser {\n      id\n    }\n  }\n"]);return O=function(){return e},e}function w(){var e=Object(c.a)(["\n  mutation CreatePostMutation ($description: String!, $imageUrl: String!, $authorId: ID!) {\n    createPost(description: $description, imageUrl: $imageUrl, authorId: $authorId) {\n      id\n    }\n  }\n"]);return w=function(){return e},e}var E=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={description:"",imageUrl:""},t.handlePost=Object(s.a)(u.a.mark(function e(){var n,a,r,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.props.loggedInUserQuery.loggedInUser){e.next=3;break}return console.warn("only logged in users can create new posts"),e.abrupt("return");case 3:return n=t.state,a=n.description,r=n.imageUrl,i=t.props.loggedInUserQuery.loggedInUser.id,e.next=7,t.props.createPostMutation({variables:{description:a,imageUrl:r,authorId:i}});case 7:t.props.history.replace("/");case 8:case"end":return e.stop()}},e,this)})),t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this;return this.props.loggedInUserQuery.loading?r.a.createElement("div",null,"Loading"):r.a.createElement("div",{className:"w-100 pa4 flex justify-center"},r.a.createElement("div",{style:{maxWidth:400},className:""},r.a.createElement("input",{className:"w-100 pa3 mv2",value:this.state.description,placeholder:"Description",onChange:function(n){return e.setState({description:n.target.value})}}),r.a.createElement("input",{className:"w-100 pa3 mv2",value:this.state.imageUrl,placeholder:"Image Url",onChange:function(n){return e.setState({imageUrl:n.target.value})}}),this.state.imageUrl&&r.a.createElement("img",{src:this.state.imageUrl,alt:"",className:"w-100 mv3"}),this.state.description&&this.state.imageUrl&&r.a.createElement("button",{className:"pa3 bg-black-10 bn dim ttu pointer",onClick:this.handlePost},"Post")))}}]),n}(r.a.Component),x=j()(w()),y=j()(O()),k=Object(b.compose)(Object(b.graphql)(x,{name:"createPostMutation"}),Object(b.graphql)(y,{name:"loggedInUserQuery",options:{fetchPolicy:"network-only"}}))(Object(g.a)(E)),U=t(24),I=t(4),S="#282c34",C="#2c313d",_="#efe3ff",P="#b7b7b7",$="#dddddd",q="0 2px 6px rgba(0,0,0,0.2)",A="0 2px 10px rgba(0,0,0,0.3)",L=".3s ease",R="16px",z="8px",N="32px",T="rgba(255,255,255,0.6)",M="rgba(255,255,255,1)",Q="1000px";function D(){var e=Object(c.a)(["\n  padding: ",";\n  border: 1px solid #6f6bcf;\n  background: #bfbeff;\n  color: #6f6bcf;\n  margin-bottom: ",";\n"]);return D=function(){return e},e}function B(){var e=Object(c.a)(["\n  animation: "," 1.4s linear infinite;\n"]);return B=function(){return e},e}function J(){var e=Object(c.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(359deg);\n  }\n"]);return J=function(){return e},e}function W(){var e=Object(c.a)(["\n  border: none;\n  cursor: pointer;\n  padding: 10px 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: 0 0 0 rgba(0,0,0,0);\n  color: ",";\n  background: ",";\n  transition: ",";\n  \n  svg {\n    margin-left: 5px;\n  }\n  \n  &:hover, &:focus {\n    box-shadow: ",";\n    color: ",";\n    background: ",";\n  }\n  \n  &:disabled {\n    opacity: .7;\n    cursor: default;\n    \n    &:hover, &:focus {\n      box-shadow: ",";\n      color: ",";\n      background: ",";\n    }\n  } \n  \n  @media all and (max-width: 430px) {\n    flex-grow: 2;\n  }\n"]);return W=function(){return e},e}function F(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return F=function(){return e},e}function G(){var e=Object(c.a)(["\n  padding: 10px;\n  font-size: .9em;\n  flex-grow: 1;\n  background: ",";\n  box-shadow: inset ",";\n  border: 1px solid ",";\n  \n  &:focus {\n    box-shadow: ",";\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(c.a)(["\n  font-size: .9em;\n  min-width: 100px;\n  \n  @media all and (max-width: 430px) {\n    display: none;\n  }\n"]);return H=function(){return e},e}function K(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: ",";\n"]);return K=function(){return e},e}function V(){var e=Object(c.a)(["\n\n"]);return V=function(){return e},e}var X=I.a.form(V()),Y=I.a.div(K(),R),Z=I.a.div(H()),ee=I.a.input(G(),_,q,S,A),ne=I.a.div(F()),te=I.a.button(W(),P,S,L,A,$,C,q,P,S),ae=Object(I.b)(J()),re=Object(I.a)(U.a)(B(),ae),ie=I.a.div(D(),R,R);function oe(){var e=Object(c.a)(["\n  mutation SignupUser ($email: String!, $password: String!, $name: String) {\n    signupUser(email: $email, password: $password, name: $name) {\n      id\n      token\n    }\n  }\n"]);return oe=function(){return e},e}function ce(){var e=Object(c.a)(["\n  mutation AuthenticateUser ($email: String!, $password: String!) { \n    authenticateUser(email: $email, password: $password) {\n      token\n    }\n  }\n"]);return ce=function(){return e},e}var le=j()(ce()),ue=j()(oe()),se=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={email:"",password:"",loading:!1,error:!1},t.authenticateUser=function(){var e=Object(s.a)(u.a.mark(function e(n){var a,r,i,o,c,l,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,r=a.authenticateUser,i=a.history,o=a.updateRequired,c=t.state,l=c.email,s=c.password,n.preventDefault(),t.setState({loading:!0,error:!1}),r({variables:{email:l,password:s}}).then(function(e){return localStorage.setItem("graphcoolToken",e.data.authenticateUser.token),i.replace("/social-media-demo"),o()}).catch(function(e){return t.setState({loading:!1,error:!0})});case 5:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.loading,a=n.error,i=n.email,o=n.password;return r.a.createElement(X,{onSubmit:this.authenticateUser},a&&r.a.createElement(ie,null,"invalid credentials"),r.a.createElement(Y,null,r.a.createElement(Z,null,"Email:"),r.a.createElement(ee,{value:this.state.email,placeholder:"Email address",onChange:function(n){return e.setState({email:n.target.value})}})),r.a.createElement(Y,null,r.a.createElement(Z,null,"Password:"),r.a.createElement(ee,{type:"password",value:this.state.password,placeholder:"Password",onChange:function(n){return e.setState({password:n.target.value})}})),r.a.createElement(ne,null,r.a.createElement(te,{type:"submit",disabled:function(){var e=!1;return[i,o].forEach(function(n){""===n&&(e=!0)}),t&&(e=!0),e}()},"Log in ",t&&r.a.createElement(re,null))))}}]),n}(r.a.Component),de=Object(b.compose)(Object(b.graphql)(le,{name:"authenticateUser"}))(Object(g.a)(se));function pe(){var e=Object(c.a)(["\n  padding: ",";\n"]);return pe=function(){return e},e}function me(){var e=Object(c.a)(["\n  padding: 10px 15px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: ",";\n  color: ",";\n  transition: ",";\n  \n  svg {\n    margin-right: 5px;\n  }\n"]);return me=function(){return e},e}function he(){var e=Object(c.a)(["\n  border-radius: 0;\n  overflow: hidden;\n  //padding: 15px;\n  min-width: 400px;\n  min-height: 150px;\n  background: ",";\n  box-shadow: ",";\n  transition: ",";\n  border: 1px solid ",";\n  margin: "," ",";\n  \n  &:hover {\n    background: ",";\n    box-shadow: ",";\n  }\n  \n  @media all and (max-width: 430px) {\n    min-width: 90%;\n  }\n"]);return he=function(){return e},e}function fe(){var e=Object(c.a)(["\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: auto;\n  max-width: ","\n"]);return fe=function(){return e},e}var ge=I.a.div(fe(),Q),be=I.a.div(he(),T,q,L,S,N,R,M,A),ve=I.a.div(me(),S,P,L),je=I.a.div(pe(),R),Oe=t(20),we=t.n(Oe),Ee=function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.updateRequired;return r.a.createElement(ge,null,r.a.createElement(be,null,r.a.createElement(ve,null,r.a.createElement(we.a,{top:!0,cascade:!0},r.a.createElement(U.b,null),"Login")),r.a.createElement(je,null,r.a.createElement(de,{updateRequired:e}))))}}]),n}(r.a.Component),xe=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={email:"",password:"",name:"",loading:!1,error:!1},t.handleSignupUser=function(){var e=Object(s.a)(u.a.mark(function e(n){var a,r,i,o,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,r=a.email,i=a.password,o=a.name,n.preventDefault(),t.setState({loading:!0,error:!1}),e.prev=3,e.next=6,t.props.signupUser({variables:{email:r,password:i,name:o}});case 6:c=e.sent,localStorage.setItem("graphcoolToken",c.data.signupUser.token),t.setState({loading:!1}),t.props.history.replace("/social-media-demo"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),console.error("An error occured: ",e.t0),t.setState({loading:!1,error:!0}),t.props.history.replace("/");case 17:case"end":return e.stop()}},e,this,[[3,12]])}));return function(n){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.loading,a=n.error,i=n.email,o=n.password,c=n.name;return r.a.createElement(X,{onSubmit:this.handleSignupUser},a&&r.a.createElement(ie,null,"An error has occurred"),r.a.createElement(Y,null,r.a.createElement(Z,null,"Name:"),r.a.createElement(ee,{value:this.state.name,placeholder:"name",onChange:function(n){return e.setState({name:n.target.value})}})),r.a.createElement(Y,null,r.a.createElement(Z,null,"Email:"),r.a.createElement(ee,{value:this.state.email,placeholder:"Email address",onChange:function(n){return e.setState({email:n.target.value})}})),r.a.createElement(Y,null,r.a.createElement(Z,null,"Password:"),r.a.createElement(ee,{type:"password",value:this.state.password,placeholder:"Password",onChange:function(n){return e.setState({password:n.target.value})}})),r.a.createElement(ne,null,r.a.createElement(te,{type:"submit",disabled:function(){var e=!1;return[i,o,c].forEach(function(n){""===n&&(e=!0)}),t&&(e=!0),e}()},"Sign Up ",t&&r.a.createElement(re,null))))}}]),n}(r.a.Component),ye=Object(b.compose)(Object(b.graphql)(ue,{name:"signupUser"}))(Object(g.a)(xe)),ke=function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(ge,null,r.a.createElement(be,null,r.a.createElement(ve,null,r.a.createElement(we.a,{top:!0,cascade:!0},r.a.createElement(U.b,null),"Sign Up")),r.a.createElement(je,null,r.a.createElement(ye,null))))}}]),n}(a.PureComponent),Ue=t(96),Ie=t(34),Se=t(70),Ce=t(5),_e=t(97),Pe=(t(79),t(69)),$e=t.n(Pe);function qe(){var e=Object(c.a)([" \n  \n  &:hover {\n    color: white;\n    background: rgba(255,255,255,0);\n  }\n"]);return qe=function(){return e},e}function Ae(){var e=Object(c.a)(["\n  border: none;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  background: transparent;\n  justify-content: space-around;\n  transition: .3s ease;\n  padding: 15px;\n  color: ",";\n  cursor: pointer;\n  \n  &:hover {\n    color: ",";\n    background: rgba(255,255,255,0.04);\n  }\n"]);return Ae=function(){return e},e}function Le(){var e=Object(c.a)(["\n  right: 0;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);return Le=function(){return e},e}function Re(){var e=Object(c.a)(["\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1.2em;\n  \n  img {\n    max-width: 30px;\n    margin-right: 10px;\n  }\n"]);return Re=function(){return e},e}function ze(){var e=Object(c.a)(["\n  max-width: ",";\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n"]);return ze=function(){return e},e}function Ne(){var e=Object(c.a)(["\n  width: 100%;\n  padding: 0;\n  min-height: 60px;\n  background: ",";\n  color: ",";\n"]);return Ne=function(){return e},e}var Te=I.a.div(Ne(),S,P),Me=I.a.div(ze(),Q),Qe=I.a.div(Re()),De=I.a.div(Le()),Be=I.a.button(Ae(),P,$),Je=Object(I.a)(Be)(qe()),We=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={show:!1},t._handleClick=function(e){return function(){var n=t.props.history,a="logout"===e;a&&(localStorage.removeItem("graphcoolToken"),window.location.reload("/social-media-demo")),a||n.replace(e)}},t._onImageLoad=function(){t.setState({show:!0})},t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props,n=e.location,t=e.userId,a=this.state.show;return r.a.createElement(Te,null,r.a.createElement(Me,null,r.a.createElement(Je,{onClick:this._handleClick("/social-media-demo/")},r.a.createElement(Qe,null,r.a.createElement(we.a,{cascade:!0,top:!0,when:a},r.a.createElement("img",{src:$e.a,onLoad:this._onImageLoad}),"Social Media"))),r.a.createElement(De,null,!t&&"/social-media-demo/signup"===n.pathname&&r.a.createElement(Be,{onClick:this._handleClick("/social-media-demo/login")},"login"),!t&&"/social-media-demo/login"===n.pathname&&r.a.createElement(Be,{onClick:this._handleClick("/social-media-demo/signup")},r.a.createElement(we.a,{cascade:!0,top:!0,when:a},"signup")),!t&&"/social-media-demo/"===n.pathname&&r.a.createElement(Be,{onClick:this._handleClick("/social-media-demo/signup")},r.a.createElement(we.a,{cascade:!0,top:!0,when:a},"signup")),t&&r.a.createElement(Be,{onClick:this._handleClick("logout")},r.a.createElement(we.a,{cascade:!0,top:!0,when:a},"logout")))))}}]),n}(r.a.Component),Fe=Object(g.a)(We);function Ge(){var e=Object(c.a)(["\n  max-width: 1200px;\n  margin: auto;\n"]);return Ge=function(){return e},e}function He(){var e=Object(c.a)(["\n  width: 100%;\n  min-height: calc(100vh - 60px);\n  position: relative;\n  background: #efe3ff;\n"]);return He=function(){return e},e}function Ke(){var e=Object(c.a)(["\n  font-family: 'Montserrat', sans-serif;\n"]);return Ke=function(){return e},e}var Ve=I.a.div(Ke()),Xe=I.a.div(He()),Ye=I.a.div(Ge()),Ze=function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.userId;return r.a.createElement(Ve,null,r.a.createElement(Fe,{userId:t}),r.a.createElement(Xe,null,r.a.createElement(Ye,null,n)))}}]),n}(r.a.Component),en=t(95);function nn(){var e=Object(c.a)(["\n  flex-grow: ",";\n  padding: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  \n  &:first-child {\n    padding-left: ",";\n  }\n  \n  &:last-child {\n    padding-right: ",";\n  }\n  \n  > div {\n    border: 1px red solid;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(c.a)(["\n  //border: 1px solid red;\n  width: 100%;\n  overflow: auto;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  \n  > div {\n    //border: 2px dashed green;\n  }\n"]);return tn=function(){return e},e}var an=I.a.div(tn()),rn=I.a.div(nn(),function(e){var n=e.size;return n||1},z,R,R,R,R),on=function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props,n=e.userId,t=e.updateRequired;return n?r.a.createElement(ge,null,r.a.createElement(an,null,r.a.createElement(rn,{size:3},r.a.createElement("div",null,"test")),r.a.createElement(rn,{size:6},r.a.createElement("div",null,"test")),r.a.createElement(rn,{size:2},r.a.createElement("div",null,"test")))):r.a.createElement(Ee,{userId:n,updateRequired:t})}}]),n}(r.a.Component);function cn(){var e=Object(c.a)(["\n  query LoggedInUser {\n    loggedInUser {\n      id\n    }\n  }\n"]);return cn=function(){return e},e}var ln=j()(cn()),un=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r))))._handleRefetch=function(){t.props.user.refetch()},t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this,n=this.props.user,t=null;return n.loggedInUser&&n.loggedInUser.id&&(t=n.loggedInUser.id),r.a.createElement(Ze,{userId:t},r.a.createElement(en.a,{exact:!0,path:"/social-media-demo/",render:function(){return r.a.createElement(on,{userId:t,updateRequired:e._handleRefetch})}}),r.a.createElement(en.a,{exact:!0,path:"/social-media-demo/login",render:function(){return r.a.createElement(Ee,{userId:t,updateRequired:e._handleRefetch})}}),r.a.createElement(en.a,{path:"/social-media-demo/create",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(en.a,{path:"/social-media-demo/signup",render:function(){return r.a.createElement(ke,null)}}))}}]),n}(a.Component),sn=Object(b.compose)(Object(b.graphql)(ln,{name:"user",options:{fetchPolicy:"network-only"}}))(un),dn=Object(Se.a)({uri:"https://api.graph.cool/simple/v1/cjowu0zrbb1270106hgdbk7vv"}),pn=new Ce.a(function(e,n){var t=localStorage.getItem("graphcoolToken"),a=t?"Bearer ".concat(t):null;return e.setContext({headers:{authorization:a}}),n(e)}).concat(dn),mn=new Ie.a({link:pn,cache:(new _e.a).restore(window.__APOLLO_STATE__)});o.a.render(r.a.createElement(b.ApolloProvider,{client:mn},r.a.createElement(Ue.a,null,r.a.createElement(sn,null))),document.getElementById("root"))}},[[46,2,1]]]);
//# sourceMappingURL=main.2fb2f74b.chunk.js.map