(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[9],{174:function(e,t,a){"use strict";a.r(t);var r=a(24),c=a.n(r),n=a(31),s=a(53),l=a(1),u=a.n(l),o=a(127),i=a(143),d=a(124),b=a(123),f=a(172),j=a(148),O=a(52),m=a(126),h=a(9);t.default=function(){var e=Object(l.useContext)(o.a),t=Object(l.useState)({}),a=Object(s.a)(t,2),r=a[0],w=a[1],v=Object(l.useState)({}),p=Object(s.a)(v,2),g=p[0],E=p[1],x=Object(l.useState)(!1),F=Object(s.a)(x,2),y=F[0],N=F[1],S=Object(l.useState)(!1),k=Object(s.a)(S,2),C=k[0],I=k[1],J=function(){if(!Object(b.a)(e.address)&&!Object(d.a)(e.address)&&!Object(f.a)(e.address)){var t=e.address.cityName;return!Object(b.a)(t)&&!Object(d.a)(t)&&!Object(f.a)(t)&&!t.includes("undefined")&&!t.includes("null")}return!1},M=function(){var t=Object(n.a)(c.a.mark((function t(){var a,r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.a)(e);case 3:a=t.sent,r=a.weatherCurrent,n=a.weatherForecast,c=r,s=n,Object(b.a)(c)||Object(b.a)(s)||(E(c),w(s)),I(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),I(!0),h.a(t.t0);case 14:return t.prev=14,N(!1),t.finish(14);case 17:case"end":return t.stop()}var c,s}),t,null,[[0,10,14,17]])})));return function(){return t.apply(this,arguments)}}();return Object(l.useEffect)((function(){N(!0),M();var e=setInterval((function(){M()}),36e5);return function(){clearInterval(e)}}),[e.address]),u.a.createElement(l.Fragment,null,y?u.a.createElement(O.a,{loaderText:"Fetching weather forecast ".concat(J()?"for ".concat(e.address.cityName):""," \ud83d\ude0e")}):u.a.createElement(l.Fragment,null,C?u.a.createElement("div",null,J()?u.a.createElement("div",{className:"flex justify-center"},u.a.createElement("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2"},u.a.createElement(m.a,{errorMessage:"Something went wrong. Failed to fetch weather forecast ".concat(J()?"for ".concat(e.address.cityName):"","! \ud83d\ude22")}))):null):u.a.createElement(l.Fragment,null,Object(d.a)(g)||Object(b.a)(g)||Object(f.a)(g)?null:u.a.createElement(j.a,{weatherCurrent:g,weatherForecast:r,address:e.address,latlong:e.latlong}))))}}}]);
//# sourceMappingURL=9.a61aec9f.chunk.js.map