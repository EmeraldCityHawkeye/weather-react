(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[1],{131:function(e,t,a){"use strict";var n=a(32),r=a.n(n);t.a=function(e,t,a){return r.a.tz(1e3*e,t).format(a)}},143:function(e,t,a){"use strict";var n=a(24),r=a.n(n),c=a(134),l=a(31),s=a(55),m=a.n(s),o=a(137),i=a.n(o),u=a(124),d=a(123),f=a(172),b=a(131),y=a(9),x=a(135);i()(m.a,{retryDelay:i.a.exponentialDelay});var p=function(e){return"".concat(x.a,"/forecast/coords/").concat(e,"?extend=hourly&exclude=minutely,flags")},h=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n,l,s,o,i,x,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.latlong,n={},l={},Object(u.a)(a)||Object(d.a)(a)||Object(f.a)(a)){e.next=15;break}return e.prev=4,e.next=7,m.a.get(p(a));case 7:s=e.sent.data.data,o=s,Object(d.a)(o)||Object(u.a)(o)||(i=o.timezone,n=Object(c.a)({timezone:i},o.currently,{sunrise:o.daily.data[0].sunriseTime,sunset:o.daily.data[0].sunsetTime}),x={},o.hourly.data.forEach((function(e){var t=Object(b.a)(e.time,i,"MM/DD/YYYY");Object.keys(x).includes(t)?x[t].push(Object(c.a)({timezone:i},e)):x[t]=[Object(c.a)({timezone:i},e)]})),h={},o.daily.data.forEach((function(e){var t=Object(b.a)(e.time,i,"MM/DD/YYYY");h[t]=Object(c.a)({timezone:i},e)})),l={timeFrames:x,days:h}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),y.a(e.t0);case 15:return e.abrupt("return",{weatherCurrent:n,weatherForecast:l});case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();t.a=h},144:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:1e3,easing:"easeSinInOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#cfd9df",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},146:function(e,t,a){"use strict";var n=a(33);t.a=function(e,t){switch(e){case"favorites":Object(n.a)({category:"Favorites",action:"Select Favorite",label:t});break;case"explore-life":Object(n.a)({category:"Explore Life",action:"Click on Explore Life",label:t});break;case"powered-by":Object(n.a)({category:"Powered By",action:"Click on Powered By",label:t})}}},148:function(e,t,a){"use strict";var n=a(134),r=a(1),c=a.n(r),l=a(14),s=a(53),m=a(32),o=a.n(m),i=function(e,t,a){return"sunrise"===e||"sunset"===e?o()(1e3*t).tz(a).format("H:mm"):o()().tz(a).format("H:mm")},u=function(e,t){var a=e.split(":")[0],n=t.split(":")[0];return Number(a)===Number(n)-1||Number(a)===Number(n)},d=function(e){var t=e.icon,a=e.timezone,n=e.sunrise,r=e.sunset,c=i("sunrise",n,a),l=i("sunset",r,a),m=i("hour",0,a),o=function(e,t,a){var n=e.split(":"),r=Object(s.a)(n,2),c=r[0],l=r[1],m=t.split(":"),o=Object(s.a)(m,2),i=o[0],u=o[1],d=a.split(":"),f=Object(s.a)(d,2),b=f[0],y=f[1];return c===i||c===b?Number(l)>=Number(u)||Number(l)<Number(y)?"day":"night":Number(c)>Number(i)&&Number(c)<Number(b)?"day":"night"}(m,c,l),d=u(m,c),f=u(m,l);if(t)switch(t){case"clear-day":return f?"dusk":d?"dawn":"clear-day";case"clear-night":return f?"dusk":d?"dawn":"clear-night";case"rain":case"snow":case"sleet":return"overcast-".concat(o);case"wind":return"cloudy-".concat(o);case"fog":return"overcast-".concat(o);case"cloudy":case"partly-cloudy-day":case"partly-cloudy-night":return"cloudy-".concat(o);case"hail":return"overcast-".concat(o);case"thunderstorm":return"thunderstorm";case"tornado":return"tornado";default:return"clear-day"}return"clear-day"},f=a(149),b=a(127),y=a(124),x=a(123),p=a(33),h=a(27),E=function(e){var t=e.address,a=e.latlong,n=e.weatherCurrent,l=Object(r.useContext)(b.a).updateFavorites,m=Object(r.useState)(""),i=Object(s.a)(m,2),u=i[0],d=i[1],E=Object(r.useState)(""),g=Object(s.a)(E,2),w=g[0],v=g[1],N=function(e,t){Object(p.a)({category:"Favorite City",action:"".concat(e," city"),label:t})},j=Object(r.useRef)(),O=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},k=function(e){d(Object(y.a)(e)?"":e.format("MMMM Do, YYYY")),v(Object(y.a)(e)?"":e.format("dddd h:mm A")),j.current=e||null};return Object(r.useEffect)((function(){k(o()(1e3*n.time).tz(n.timezone));var e=setInterval((function(){if(n.time){var e=o.a.tz(j.current,n.timezone).add(1,"s");k(e)}}),1e3);return function(){clearInterval(e)}}),[n]),c.a.createElement("div",{className:"flex justify-between items-start"},c.a.createElement("div",{className:"pt-4 px-4"},c.a.createElement("p",{className:"font-bold"},t.cityName),c.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row font-light"},Object(x.a)(u)||Object(x.a)(w)?null:c.a.createElement(r.Fragment,null,c.a.createElement("p",null,u,c.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),c.a.createElement("p",null,w)))),c.a.createElement("div",{className:"mt-6 mr-6 cursor-pointer text-2xl",title:O()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),n=e.filter((function(e){return e.address.cityName===t.cityName}));if(n.length){var r=e.findIndex((function(e){return e.address.cityName===n[0].address.cityName}));if(-1!==r){var c=Object(f.a)(e);c.splice(r,1),localStorage.setItem("favorites",JSON.stringify(c)),N("remove",t.cityName),l({favorites:c})}}else{var s=[].concat(Object(f.a)(e),[{address:t,latlong:a}]);localStorage.setItem("favorites",JSON.stringify(s)),N("add",t.cityName),l({favorites:s})}}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a}])),N("add",t.cityName),l({favorites:[{address:t,latlong:a}]})}},O()?c.a.createElement(h.a,null):c.a.createElement(h.d,null)))},g=a(130),w=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},v=function(e){var t=e.icon,a=e.time,n=e.timezone,r=o()(1e3*a).tz(n).format("H"),c=r>=6&&r<=18?"day":"night";if(t)switch(t){case"clear-day":return"day";case"clear-night":return"night";case"rain":return"".concat(c,"-rain");case"snow":return"".concat(c,"-snow");case"sleet":return"sleet";case"wind":case"fog":return"".concat(c,"-cloudy");case"cloudy":return"cloudy";case"partly-cloudy-day":return"day-cloudy";case"partly-cloudy-night":return"night-cloudy";case"hail":return"hail";case"thunderstorm":return"thunder";case"tornado":return"wi-tornado";default:return"wi-na"}return"wi-na"},N=function(e){return Math.round(5*(e-32)/9)},j=a(142),O=a(164),k=function(e){var t=e.type;return{"wi-day-fog":c.a.createElement(O.b,null),"wi-night-fog":c.a.createElement(O.m,null),"wi-day-windy":c.a.createElement(O.a,null),"wi-night-windy":c.a.createElement(O.l,null),"wi-tornado":c.a.createElement(O.p,null),"wi-na":c.a.createElement(O.k,null),up:c.a.createElement(O.h,null),"up-right":c.a.createElement(O.j,null),right:c.a.createElement(O.g,null),"down-right":c.a.createElement(O.e,null),down:c.a.createElement(O.c,null),"down-left":c.a.createElement(O.d,null),left:c.a.createElement(O.f,null),"up-left":c.a.createElement(O.i,null),sunrise:c.a.createElement(O.n,null),sunset:c.a.createElement(O.o,null)}[t]||c.a.createElement(O.k,null)},C=a(54),F=function(e){var t=e.weatherCurrent,a=Object(r.useContext)(g.a),n=a.weatherUnit,l=a.updateWeatherUnit,s=function(e){Object(p.a)({category:"Weather Unit",action:"Set Unit",label:e}),l(e)},m=function(e){return"F"===n?Math.round(t["".concat(e)]):N(t["".concat(e)])};return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4"},c.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},c.a.createElement("div",{className:"flex flex-row justify-between sm:justify-start sm:items-center"},c.a.createElement("div",{className:"flex flex-col justify-center items-center"},c.a.createElement("div",null,v(t).startsWith("wi")?c.a.createElement("p",{className:"text-6xl sm:mx-2 mt-2",title:t.summary},c.a.createElement(k,{type:v(t)})):c.a.createElement("img",{src:"".concat(C.a,"/weather/").concat(v(t),".svg"),alt:"icon",title:t.summary,className:"-mt-2 -ml-4 sm:mx-0 w-32 h-32 object-contain"})),c.a.createElement("p",{className:"hidden sm:flex sm:flex-no-wrap font-medium -mt-2 ml-3 capitalize"},t.summary)),c.a.createElement("div",{className:"flex justify-start items-center sm:-mt-3 sm:ml-3"},c.a.createElement("div",null,c.a.createElement("span",{className:"text-6xl font-bold"},m("temperature"))),c.a.createElement("p",{className:"-mt-8 text-3xl"},c.a.createElement("sup",null,"o")),c.a.createElement("div",{className:"-mt-10 mx-2 text-xl"},c.a.createElement("span",{className:"cursor-pointer ".concat("C"===n?"font-bold border-b border-light":"font-light opacity-75"),title:"Celcius",onClick:function(){return s("C")}},"C"),c.a.createElement("span",{className:"mx-1 opacity-25"},"|"),c.a.createElement("span",{className:"cursor-pointer ".concat("F"===n?"font-bold border-b border-light":"font-light opacity-75"),title:"Fahrenheit",onClick:function(){return s("F")}},"F"))))),c.a.createElement("div",{className:"flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2"},c.a.createElement("p",{className:"sm:hidden font-medium capitalize text-2xl -mt-2 mb-2"},t.summary),c.a.createElement("div",{className:"text-sm sm:text-lg ml-8"},c.a.createElement("div",{className:"flex flex-row sm:my-2"},c.a.createElement("p",{className:"font-light"},"Humidity:"),"\xa0",c.a.createElement("p",{className:"mx-1 font-bold"},Math.round(t.humidity)),c.a.createElement("p",{className:"text-sm mt-1"},c.a.createElement(j.a,null))),c.a.createElement("div",{className:"flex items-center sm:my-2"},c.a.createElement("p",null,c.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0",c.a.createElement("span",{className:"font-bold"},function(){return"F"===n?"".concat(Math.round(t.windSpeed)," mph"):"".concat((e=t.windSpeed,Math.round(1.6*e))," kmph");var e}()," ")),c.a.createElement("p",{className:"text-3xl"},c.a.createElement(k,{type:w(t.windBearing)}))),c.a.createElement("p",null,c.a.createElement("span",{className:"font-light sm:my-2"},"Feels like:"),"\xa0",c.a.createElement("span",{className:"font-bold"},m("apparentTemperature")),c.a.createElement("sup",null,"o"))))))},S=a(52),z=a(136),M=function(e){var t=e.weatherCurrent,a=e.address,n=e.latlong;return c.a.createElement(z.a,null,c.a.createElement(r.Fragment,null,a&&t?c.a.createElement("div",null,c.a.createElement(E,{address:a,latlong:n,weatherCurrent:t}),c.a.createElement(F,{weatherCurrent:t})):c.a.createElement(S.a,null)))},T=a(24),Y=a.n(T),D=a(31),I=a(147),H=a(131),J=function(e){var t=e.day,a=e.index,n=e.selectedIndex,s=Object(r.useContext)(g.a).weatherUnit,m=Object(r.useContext)(l.a),o=m.theme,i=m.colorTheme,u=function(e){return"F"===s?Math.round(t["temperature".concat(e)]):N(t["temperature".concat(e)])};return c.a.createElement("div",{className:"md:hover:bg-".concat(i," md:hover:text-").concat(o," items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer  ").concat(a===n?"bg-".concat(i," text-").concat(o):""),onClick:function(){e.selectedDay({day:t})}},c.a.createElement("div",{className:"flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2"},c.a.createElement("p",{className:"flex w-1/6 sm:w-full sm:justify-center text-base font-semibold"},Object(H.a)(t.time,t.timezone,"ddd")),c.a.createElement("div",{className:"flex w-1/6 sm:w-full"},v(t).startsWith("wi")?c.a.createElement("p",{className:"my-1 sm:mt-1 sm:mb-3 mx-auto text-3xl",title:t.summary},c.a.createElement(k,{type:v(t)})):c.a.createElement("img",{src:"".concat(C.a,"/weather/").concat(v(t),".svg"),alt:"icon",title:t.summary,className:"sm:-mt-2 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain"})),c.a.createElement("div",{className:"flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0"},c.a.createElement("p",{className:"mx-2 text-xs sm:text-sm"},u("High"),c.a.createElement("sup",null,"o")),c.a.createElement("p",{className:"mx-2 text-xs"},u("Low"),c.a.createElement("sup",null,"o"))),c.a.createElement("div",{className:"".concat("flex"," flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1")},c.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},c.a.createElement("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-3",title:"sunrise"},c.a.createElement(k,{type:"sunrise"})),c.a.createElement("p",null,Object(H.a)(t.sunriseTime,t.timezone,"h:mm"))),c.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},c.a.createElement("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-1",title:"sunset"},c.a.createElement(k,{type:"sunset"})),c.a.createElement("p",null,Object(H.a)(t.sunsetTime,t.timezone,"HH:mm"))))))},W=function(e){var t=e.Timeframe,a=Object(r.useContext)(g.a).weatherUnit,n=Object(r.useContext)(l.a).colorTheme,s=function(e){return"F"===a?Math.round(t["".concat(e)]):N(t["".concat(e)])};return c.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 w-full font-light text-".concat(n," md:text-light")},c.a.createElement("div",null,v(t).startsWith("wi")?c.a.createElement("p",{className:"text-5xl mt-4",title:t.summary},c.a.createElement(k,{type:v(t)})):c.a.createElement("img",{src:"".concat(C.a,"/weather/").concat(v(t),".svg"),alt:"icon",title:t.summary,className:"w-16 h-16 object-contain"})),c.a.createElement("p",{className:"text-base pb-1"},s("temperature"),c.a.createElement("sup",null,"o")),c.a.createElement("p",{className:"text-xs pb-1"},s("apparentTemperature"),c.a.createElement("sup",null,"o")),c.a.createElement("p",{className:"text-sm font-medium"},Object(H.a)(t.time,t.timezone,"h:mm A")))},B=a(144),U=a(126),R=function(e){var t=e.cityName,a=e.weatherCurrent,n=e.weatherForecast,l=Object(r.useState)(""),m=Object(s.a)(l,2),o=m[0],i=m[1],u=Object(r.useState)(0),d=Object(s.a)(u,2),f=d[0],b=d[1],p=a.time,h=a.timezone,E=function(){var e=Object(D.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(y.a)(a.time)||(t=Object(H.a)(p,h,"MM/DD/YYYY"),Object(x.a)(n)||Object(y.a)(n)||(i(n.days[t]?t:""),g(n.days[t]?t:"")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=Object.keys(n.days).indexOf(e);b(-1!==t?t:0)};return Object(r.useEffect)((function(){E()}),[n]),c.a.createElement(z.a,null,c.a.createElement(r.Fragment,null,Object(x.a)(n.days)||Object(x.a)(o)?c.a.createElement("div",{className:"mb-3"},Object(x.a)(n.days)?c.a.createElement(U.a,{errorMessage:"No forecast data available for this city!",showCloseBtn:!1}):c.a.createElement(S.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"sm:hidden pb-3"},n.timeFrames[o]?c.a.createElement(I.a,Object(B.a)("time"),n.timeFrames[o].map((function(e,t){return c.a.createElement(W,{Timeframe:e,key:t})}))):c.a.createElement(U.a,{errorMessage:"No hourly forecast available for ".concat(o)})),c.a.createElement("div",{className:"hidden sm:flex sm:pb-3 sm:mb-4"},n.timeFrames[o]?c.a.createElement(I.a,Object(B.a)("time","tablet"),n.timeFrames[o].map((function(e,t){return c.a.createElement(W,{Timeframe:e,key:t})}))):c.a.createElement(U.a,{errorMessage:"No hourly forecast available for ".concat(o)})),c.a.createElement("div",{className:"flex flex-col mt-4 sm:mt-0 sm:flex-row w-full rounded"},Object.keys(n.days).map((function(e,t){return c.a.createElement(J,{day:n.days[e],key:t,index:t,selectedIndex:f,selectedDay:function(){return function(e){i(e),g(e)}(e)}})}))))))},L=a(146);a(170),t.a=function(e){var t=e.weatherCurrent,a=e.weatherForecast,s=e.address,m=e.latlong,o=Object(r.useContext)(l.a),i=o.theme,u=o.colorTheme,f={borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"};return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"flex flex-col justify-center items-center lg:px-5 pt-10"},c.a.createElement("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl bg-".concat(i," text-").concat(u," border border-").concat(u," md:border-none rounded-t-2xl shadow-lg")},c.a.createElement("div",{className:"relative overflow-hidden"},c.a.createElement("img",{src:"".concat(C.a,"/weather-backgrounds/").concat(d(t),".jpg"),alt:"clear day",className:"w-full object-cover object-center weather-background",style:f}),c.a.createElement("div",null,["rain","snow","sleet","hail"].includes(t.icon)&&c.a.createElement("img",{src:"".concat(C.a,"/weather-backgrounds/").concat("snow"===t.icon?"snow":"rain",".svg"),alt:"clear day",className:"w-full object-cover object-center absolute top-0 right-0 bottom-0 left-0 weather-background",style:f})),c.a.createElement("div",{className:"block md:hidden absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(n.a)({background:"rgba(0,0,0,0.2)"},f)},c.a.createElement(M,{weatherCurrent:t,address:s,latlong:m})),c.a.createElement("div",{className:"hidden md:block absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(n.a)({background:"rgba(0,0,0,0.2)"},f)},c.a.createElement(M,{weatherCurrent:t,address:s,latlong:m}),c.a.createElement(R,{cityName:s.cityName,weatherCurrent:t,weatherForecast:a}))),c.a.createElement("div",{className:"block md:hidden"},c.a.createElement(R,{cityName:s.cityName,weatherCurrent:t,weatherForecast:a})))),c.a.createElement("div",{className:"relative"},c.a.createElement("p",{className:"mx-auto text-center pt-2 pb-10 text-xs font-light text-".concat(u," bg-").concat(i)},"Powered by\xa0",c.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(i),onClick:function(){return Object(L.a)("powered-by","Dark Sky")}},"Dark Sky"))))}},170:function(e,t,a){}}]);
//# sourceMappingURL=1.d0efb8e2.chunk.js.map