(this.webpackJsonppelotas=this.webpackJsonppelotas||[]).push([[0],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var r=n(49),a=n.n(r),u=n(72),c=n(73),o=n(64),i=n(0),l=n.n(i),s=n(237),f=n(118),b=n(58),d=n(114),m=Object(i.createContext)(),p=function(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),r=n[0],p=n[1],v=Object(s.a)({promiseFn:b.d}),E=v.data,O=void 0===E?{user:null}:E,_=v.error,h=v.isRejected,j=v.isPending,S=v.isSettled,g=v.reload;Object(i.useLayoutEffect)((function(){S&&p(!0)}),[S]);var P=Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.b)(t);case 3:return n=e.sent,r=n.access_token,c=n.refresh_token,o=Object(u.a)(n,["access_token","refresh_token"]),Object(b.g)(r),Object(b.h)(c),g(),e.abrupt("return",{user:o});case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),[]),T=Object(i.useCallback)((function(){Object(b.e)(),g()}),[]);if(!r){if(j)return l.a.createElement(d.a,null);if(h)return l.a.createElement("div",{css:{color:"red"}},l.a.createElement("p",null,"Uh oh... There's a problem. Try refreshing the app."),l.a.createElement("pre",null,_.message))}return l.a.createElement(m.Provider,Object.assign({value:{data:O,login:P,logout:T}},e))},v=function(){var e=Object(i.useContext)(m);if(void 0===e)throw new Error("useAuth must be used within a AuthProvider");return e}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),u=function(e){var t=e.children,n=void 0===t?"carregando":t;return a.a.createElement("p",null,n)}},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(236),a=n(58),u={api_url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_NODE_ENV:"production"}).REACT_APP_API_URL,refreshTokenUrl:"/v1/users/refresh-token",access_token_name:a.a,refresh_token_name:a.c},c=r.a.createInstance(u),o=function(){return c.get("/v1/me")},i=function(e){return c.post("/v1/users/login",e)}},154:function(e){e.exports=JSON.parse('{"a":"pelotas","b":"0.1.0"}')},244:function(e,t,n){e.exports=n(466)},466:function(e,t,n){"use strict";n.r(t);n(245),n(254);var r=n(0),a=n.n(r),u=n(233),c=n.n(u),o=n(470),i=n(158),l=n(157),s=n(95),f=n(234),b=n.n(f),d=n(223),m=n(114),p=n(64),v=n(113),E=Object(r.createContext)(),O=function(e){var t=Object(r.useState)(null),n=Object(p.a)(t,2),u=n[0],c=n[1],o=Object(v.b)().data;return Object(r.useEffect)((function(){o&&c(o.user)}),[o]),a.a.createElement(E.Provider,Object.assign({value:{user:u,setUser:c}},e))},_=function(e){var t=e.theme,n=void 0===t?h:t,r=e.children;return a.a.createElement(s.a,{theme:n},r)},h={space:[],sizes:{regular:200,small:40},colors:{black:"#000"}};n(464);function j(){var e=Object(i.a)(["\n* {\n  border: 0;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  outline: none;\n}\n\nbutton, a {\n  cursor: pointer;\n  &:disabled{\n    cursor: not-allowed;\n  }\n}\n"]);return j=function(){return e},e}var S=function(){return n.e(3).then(n.bind(null,474))},g=Object(r.lazy)(S),P=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,473))})),T=Object(s.b)(j()),k=function(){var e=function(){var e=Object(r.useContext)(E);if(void 0===e)throw new Error("useUser must be used within a UserProvider");return e}().user;return Object(r.useEffect)((function(){S()}),[]),a.a.createElement(d.e,null,a.a.createElement(_,null,a.a.createElement(b.a,{titleTemplate:"Nave.rs | %s"}),a.a.createElement(T,null),a.a.createElement(r.Suspense,{fallback:a.a.createElement(m.a,null)},a.a.createElement(l.a,null,e?a.a.createElement(g,null):a.a.createElement(P,null)))))},C=function(e){var t=e.children;return a.a.createElement(v.a,null,a.a.createElement(O,null,t))},x=n(154);o.a({dsn:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_NODE_ENV:"production"}).REACT_APP_SENTRY_URL,environment:"production",debug:!0,release:"".concat(x.a,"@").concat(x.b)}),c.a.render(a.a.createElement(C,null,a.a.createElement(k,null)),document.getElementById("root"))},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return p}));var r=n(49),a=n.n(r),u=n(73),c=n(32),o=n(118),i=function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l()){e.next=3;break}return e.abrupt("return",{user:null});case 3:return e.next=5,Object(o.a)();case 5:if(t=e.sent,c.b((function(e){return e.setUser({email:t.email})})),t){e.next=9;break}return e.abrupt("return",{user:null});case 9:return e.abrupt("return",{user:t});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){return localStorage.getItem(m)},s=function(){localStorage.removeItem(m),localStorage.removeItem(p)},f=function(e){return localStorage.setItem(m,e)},b=function(e){return localStorage.setItem(p,e)},d=1200,m="@react-boilerplate-access-token",p="@react-boilerplate-refresh-token"}},[[244,1,2]]]);
//# sourceMappingURL=main.6660ee39.chunk.js.map