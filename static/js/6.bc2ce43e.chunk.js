(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[6],{104:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:750,easing:"easeLinear",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#A1A6B4",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},105:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(164),r=a(88),c=function(e){return(!Object(n.a)(e.photos)||!Object(r.a)(e.photos))&&e.photos.length>0},l=function(e){var t=(c(e)?e.photos[0]:{mobile:"",web:""}).image,a=c(e)?e.photos[0].attribution:{photographer:"",site:"",source:""};return{image:t,photographer:a.photographer,site:a.site,source:a.source}}},109:function(e,t,a){"use strict";var n=a(91),r=a.n(n),c=a(108),l=a(98),s=a.n(l),o=a(99),i=a.n(o),m=a(164),u=a(88),d=a(92),f=a(7);i()(s.a,{retryDelay:i.a.exponentialDelay});var b=function(e){return"".concat("https://cors-anywhere.herokuapp.com","/https://api.darksky.net/forecast/").concat("4e27157cf1858c6667c07568e8e21a56","/").concat(e,"?extend=hourly&exclude=minutely,flags")};t.a=function(e){var t,a,n;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.latlong,a={},n={},Object(m.a)(t)||Object(u.a)(t)){l.next=6;break}return l.next=6,r.a.awrap(s.a.get(b(t)).then((function(e){var t=e.data;if(!Object(u.a)(t)&&!Object(m.a)(t)){var r=t.timezone;a=Object(c.a)({timezone:r},t.currently);var l={};t.hourly.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");Object.keys(l).includes(t)?l[t].push(Object(c.a)({timezone:r},e)):l[t]=[Object(c.a)({timezone:r},e)]}));var s={};t.daily.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");s[t]=Object(c.a)({timezone:r},e)})),n={timeFrames:l,days:s}}})).catch((function(e){return f.a(e)})));case 6:return l.abrupt("return",{weatherCurrent:a,weatherForecast:n});case 7:case"end":return l.stop()}}))}},111:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(112),l=a(45),s=a(97),o=a(12),i=a(105),m=a(167),u=a(164),d=a(88),f=a(28),b=a.n(f),h=a(17),p=function(e){var t=e.address,a=e.latlong,f=e.urbanArea,p=e.weatherCurrent,x=Object(n.useContext)(s.a).updateFavorites,y=Object(n.useState)(""),g=Object(l.a)(y,2),E=g[0],v=g[1],j=Object(n.useState)(""),O=Object(l.a)(j,2),w=O[0],N=O[1],k=Object(n.useContext)(o.a).colorTheme,C=Object(i.a)(f),F=C.image,S=C.photographer,z=C.site,M=C.source,I=function(e,t){Object(h.a)({category:"Favorite City",action:"".concat(e," city"),label:"City Favorite",value:t})},T=Object(n.useRef)(),Y=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},A=function(e){v(Object(u.a)(e)?"":e.format("MMMM Do, YYYY")),N(Object(u.a)(e)?"":e.format("dddd h:mm A")),T.current=e||null};return Object(n.useEffect)((function(){A(b()(1e3*p.time).tz(p.timezone));var e=setInterval((function(){if(p.time){var e=b.a.tz(T.current,p.timezone).add(1,"s");A(e)}}),1e3);return function(){clearInterval(e)}}),[p]),r.a.createElement("div",{className:"relative"},r.a.createElement("div",null,Object(i.b)(f)?r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:F.mobile,alt:"city",className:"block sm:hidden h-40 w-full object-cover object-center rounded-t-2xl"}),r.a.createElement("img",{src:F.web,alt:"city",className:"hidden sm:block sm:h-32 md:h-24 xl:h-32 w-full object-cover object-center rounded-t-2xl"})):null),r.a.createElement("div",{className:"".concat(Object(i.b)(f)?"absolute top-0 left-0 right-0 bottom-0 text-light":"text-".concat(k)),style:Object(i.b)(f)?{background:"rgba(0,0,0,0.55)",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"}:null},r.a.createElement("div",{className:"flex justify-between items-start"},r.a.createElement("div",{className:"pt-4 px-4"},r.a.createElement("p",{className:"font-bold ".concat(Object(i.b)(f)?"sm:text-2xl":"")},t.cityName),r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row ".concat(Object(i.b)(f)?"font-medium":"font-light")},Object(d.a)(E)||Object(d.a)(w)?null:r.a.createElement(n.Fragment,null,r.a.createElement("p",null,E,r.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),r.a.createElement("p",null,w)))),r.a.createElement("div",{className:"mt-4 mr-4 cursor-pointer text-xl",title:Y()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),n=Object(m.a)([].concat(Object(c.a)(e),[{address:t,latlong:a,urbanArea:f}]),["address.cityName"]),r=e.filter((function(e){return e.address.cityName===t.cityName}));if(r.length){var l=e.findIndex((function(e){return e.address.cityName===r[0].address.cityName}));if(-1!==l){var s=Object(m.a)(Object(c.a)(e),["address.cityName"]);s.splice(l,1),localStorage.setItem("favorites",JSON.stringify(s)),I("remove",t.cityName),x({favorites:s})}}else localStorage.setItem("favorites",JSON.stringify(n)),I("add",t.cityName),x({favorites:n})}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a,urbanArea:f}])),I("add",t.cityName),x({favorites:[{address:t,latlong:a,urbanArea:f}]})}},Y()?r.a.createElement("span",null,"\u2605"):r.a.createElement("span",null,"\u2606"))),r.a.createElement("div",{className:"hidden md:block text-right bottom-0 right-0 xl:mt-8 px-2"},S&&z?r.a.createElement("p",{className:"font-light",style:{fontSize:"0.5rem"}},"Photo by\xa0",r.a.createElement("span",{className:"font-medium"},S),"\xa0on\xa0",r.a.createElement("a",{className:"link z-0 font-medium hover:no-underline hover:font-medium hover:text-light",href:M,target:"_blank",rel:"noreferrer noopener",onClick:function(){Object(h.a)({category:"City Image",action:"Click on Image Source",label:"Image source"})}},z)):null)))},x=a(93),y=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},g=a(95),E=a(94),v=function(e){var t=e.weatherCurrent,a=Object(n.useContext)(x.a),c=a.weatherUnit,l=a.updateWeatherUnit,s=function(e){Object(h.a)({category:"Weather Unit",action:"Set Unit",label:"unitClick",value:e}),l(e)},o=function(e){return"F"===c?Math.round(t["".concat(e)]):Object(E.a)(t["".concat(e)])};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between mt-5 mb-5 px-4"},r.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},r.a.createElement("div",{className:"flex flex-row items-center"},r.a.createElement("div",null,r.a.createElement("i",{className:"wi wi-".concat(Object(g.a)(t.icon,t.timezone)," text-5xl mt-3 mr-2 mx-3"),title:t.summary})),r.a.createElement("div",{className:"flex justify-start items-center ml-3"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-5xl font-bold"},o("temperature"))),r.a.createElement("div",{className:"text-2xl -mt-6"},r.a.createElement("i",{className:"wi wi-fahrenheit cursor-pointer mx-2 ".concat("F"===c?"font-bold underline":""),onClick:function(){return s("F")}}),"|",r.a.createElement("i",{className:"wi wi-celsius cursor-pointer mx-2 ".concat("C"===c?"font-bold underline":""),onClick:function(){return s("C")}})))),r.a.createElement("p",{className:"font-medium ml-3 capitalize"},t.summary)),r.a.createElement("div",{className:"mt-6 ml-3 sm:mt-1 sm:w-full lg:w-1/2"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Humidity:"),"\xa0",Math.round(t.humidity),"%"),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0",function(){return"F"===c?"".concat(Math.round(t.windSpeed)," mph"):"".concat((e=t.windSpeed,Math.round(1.6*e))," kmph");var e}()," "),r.a.createElement("p",null,r.a.createElement("i",{className:"mx-2 mt-2 text-3xl wi wi-direction-".concat(y(t.windBearing))}))),r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Feels like:"),"\xa0",o("apparentTemperature"),r.a.createElement("sup",null,"o")))))},j=a(44),O=a(100);t.a=function(e){var t=e.weatherCurrent,a=e.address,c=e.latlong,l=e.urbanArea;return r.a.createElement(O.a,null,r.a.createElement(n.Fragment,null,a&&t?r.a.createElement("div",null,r.a.createElement(p,{address:a,latlong:c,urbanArea:l,weatherCurrent:t}),r.a.createElement(v,{weatherCurrent:t})):r.a.createElement(j.a,null)))}},113:function(e,t,a){"use strict";var n=a(91),r=a.n(n),c=a(45),l=a(0),s=a.n(l),o=a(164),i=a(88),m=a(110),u=a(93),d=a(12),f=a(94),b=a(95),h=a(92),p=function(e){var t=e.day,a=e.index,n=e.selectedIndex,r=Object(l.useContext)(u.a).weatherUnit,c=Object(l.useContext)(d.a),o=c.theme,i=c.colorTheme,m=function(e){return"F"===r?Math.round(t["temperature".concat(e)]):Object(f.a)(t["temperature".concat(e)])};return s.a.createElement("div",{className:"sm:border-t sm:border-r sm:border-b-0 sm:border-l-0 sm:border-".concat(i," sm:hover:bg-").concat(i," sm:hover:text-").concat(o," items-center text-center flex-1 py-1 pb-3 cursor-pointer ").concat(a===n?"sm:bg-".concat(i," sm:text-").concat(o):""," transition-colors duration-1000 ease-in-out"),onClick:function(){e.selectedDay({day:t})}},s.a.createElement("p",{className:"font-medium"},Object(h.a)(t.time,t.timezone,"ddd")),s.a.createElement("i",{title:t.summary,className:"mt-1 mb-3 mx-auto text-2xl wi wi-".concat(Object(b.a)(t.icon,t.timezone))}),s.a.createElement("div",{className:"flex flex-row justify-center items-center font-light"},s.a.createElement("p",{className:"mx-2 text-sm"},m("High"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"mx-2 text-xs"},m("Low"),s.a.createElement("sup",null,"o"))),s.a.createElement("div",{className:"flex flex-row justify-center sm:flex-col font-light mt-1"},s.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2"},s.a.createElement("i",{className:"text-sm wi wi-sunrise text-sun mr-2",title:"sunrise"}),s.a.createElement("p",{className:"text-sm"},Object(h.a)(t.sunriseTime,t.timezone,"h:mm"))),s.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2"},s.a.createElement("i",{className:"text-sm wi wi-sunset text-sun mr-1",title:"sunset"}),s.a.createElement("p",{className:"text-sm"},Object(h.a)(t.sunsetTime,t.timezone,"HH:mm")))))},x=function(e){var t=e.Timeframe,a=Object(l.useContext)(u.a).weatherUnit,n=Object(l.useContext)(d.a).theme,r=function(e){return"F"===a?Math.round(t["".concat(e)]):Object(f.a)(t["".concat(e)])};return s.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 pt-2 w-full font-light text-".concat("light"===n?"dark":"light")},s.a.createElement("i",{title:t.summary,className:"wi wi-".concat(Object(b.a)(t.icon,t.timezone)," text-2xl my-1")}),s.a.createElement("p",{className:"text-xl"},r("temperature"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"text-sm"},r("apparentTemperature"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"text-sm font-medium"},Object(h.a)(t.time,t.timezone,"h:mm A")))},y=a(44),g=a(104),E=a(96),v=a(100);t.a=function(e){var t=e.cityName,a=e.weatherCurrent,n=e.weatherForecast,u=Object(l.useState)(""),d=Object(c.a)(u,2),f=d[0],b=d[1],j=a.time,O=a.timezone,w=function(e){b(e)};return Object(l.useEffect)((function(){!function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:Object(o.a)(a.time)||(e=Object(h.a)(j,O,"MM/DD/YYYY"),Object(i.a)(n)||Object(o.a)(n)||b(n.days[e]?e:""));case 1:case"end":return t.stop()}}))}()}),[n]),s.a.createElement(v.a,null,s.a.createElement(l.Fragment,null,Object(i.a)(n.days)||Object(i.a)(f)?s.a.createElement("div",{className:"mb-3"},Object(i.a)(n.days)?s.a.createElement(E.a,{errorMessage:"No forecast data available for this city!",showCloseBtn:!1}):s.a.createElement(y.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"sm:hidden py-3 sm:mb-3"},n.timeFrames[f]?s.a.createElement(m.a,Object(g.a)("time"),n.timeFrames[f].map((function(e,t){return s.a.createElement(x,{Timeframe:e,key:t})}))):s.a.createElement(E.a,{errorMessage:"No hourly forecast available for ".concat(f)})),s.a.createElement("div",{className:"hidden sm:flex py-3 sm:mb-3"},n.timeFrames[f]?s.a.createElement(m.a,Object(g.a)("time","tablet"),n.timeFrames[f].map((function(e,t){return s.a.createElement(x,{Timeframe:e,key:t})}))):s.a.createElement(E.a,{errorMessage:"No hourly forecast available for ".concat(f)})),s.a.createElement("div",{className:"sm:hidden py-3"},s.a.createElement(m.a,Object.assign({},Object(g.a)("day"),{slideIndex:Object.keys(n.days).indexOf(f),afterSlide:function(e){return w(Object.keys(n.days)[e])}}),Object.keys(n.days).map((function(e,t){return s.a.createElement(p,{day:n.days[e],key:t,index:e,selectedIndex:f,selectedDay:function(){return w(e)}})})))),s.a.createElement("div",{className:"hidden sm:flex w-full rounded sm:visible"},Object.keys(n.days).map((function(e,t){return s.a.createElement(p,{day:n.days[e],key:t,index:e,selectedIndex:f,selectedDay:function(){return w(e)}})}))))))}},166:function(e,t,a){"use strict";a.r(t);var n=a(91),r=a.n(n),c=a(45),l=a(0),s=a.n(l),o=a(113),i=a(111),m=a(97),u=a(109),d=a(12),f=a(88),b=a(164),h=a(44),p=a(96),x=a(7);t.default=function(){var e=Object(l.useContext)(m.a),t=Object(l.useContext)(d.a),a=t.theme,n=t.colorTheme,y=Object(l.useState)({}),g=Object(c.a)(y,2),E=g[0],v=g[1],j=Object(l.useState)({}),O=Object(c.a)(j,2),w=O[0],N=O[1],k=Object(l.useState)(!0),C=Object(c.a)(k,2),F=C[0],S=C[1],z=function(){return!Object(f.a)(e.address)&&!Object(b.a)(e.address)&&(!Object(f.a)(e.address.cityName)&&!Object(b.a)(e.address.cityName))},M=function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.next=3,r.a.awrap(Object(u.a)(e).then((function(e){var t,a,n=e.weatherCurrent,r=e.weatherForecast;t=n,a=r,Object(f.a)(t)||Object(f.a)(a)||(N(t),v(a))})).catch((function(e){x.a(e)})).finally((function(){S(!1)})));case 3:case"end":return t.stop()}}))};return Object(l.useEffect)((function(){M();var e=setInterval((function(){M()}),36e5);return function(){clearInterval(e)}}),[e]),s.a.createElement(l.Fragment,null,Object(b.a)(w)||Object(f.a)(w)?s.a.createElement(l.Fragment,null,F?s.a.createElement(h.a,{loaderText:"Fetching weather forecast ".concat(z()?"for ".concat(e.address.cityName):""," \ud83d\ude0e")}):s.a.createElement("div",null,z()?s.a.createElement("div",{className:"flex justify-center"},s.a.createElement("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2"},s.a.createElement(p.a,{errorMessage:"Something went wrong. Failed to fetch weather forecast ".concat(z()?"for ".concat(e.address.cityName):"","! \ud83d\ude22")}))):null)):s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"flex justify-center px-5 pt-10 bg-".concat(a)},s.a.createElement("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl border border-".concat(n," bg-").concat(a," text-").concat(n," rounded-t-2xl shadow-lg")},s.a.createElement(i.a,{weatherCurrent:w,address:e.address,latlong:e.latlong,urbanArea:e.urbanArea}),s.a.createElement(o.a,{cityName:e.address.cityName,weatherCurrent:w,weatherForecast:E}))),s.a.createElement("p",{className:"mx-auto text-center pt-2 pb-10 text-xs font-light text-".concat(n," bg-").concat(a)},"Powered by\xa0",s.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a)},"Dark Sky")),s.a.createElement("div",{className:"bg-".concat(a)},e.urbanArea.slug?s.a.createElement("div",{className:"mx-auto text-center pb-5"},s.a.createElement("p",null,s.a.createElement("a",{href:"https://teleport.org/cities/".concat(e.urbanArea.slug),target:"_blank",rel:"noreferrer noopener",className:"hover:no-underline"},s.a.createElement("button",{className:"bg-".concat(n," text-").concat(a," font-semibold py-3 px-6 rounded-full capitalize")},"Explore life in ",e.urbanArea.name))),s.a.createElement("p",{className:"py-1 text-xs font-light text-".concat(n)},"Powered by\xa0",s.a.createElement("a",{href:"https://teleport.org/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a)},"Teleport"))):null)))}},92:function(e,t,a){"use strict";var n=a(28),r=a.n(n);t.a=function(e,t,a){return r.a.tz(1e3*e,t).format(a)}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return Math.round(5*(e-32)/9)}},95:function(e,t,a){"use strict";var n=a(28),r=a.n(n);t.a=function(e,t){var a=r()().tz(t).format("H"),n=a>=6&&a<18?"day":"night-alt";if(e)switch(e){case"clear-day":return"day-sunny";case"clear-night":return"night-clear";case"rain":return"".concat(n,"-rain");case"snow":return"".concat(n,"-snow");case"sleet":return"".concat(n,"-sleet");case"wind":return"".concat("night-alt"===n?"night-alt-cloudy":"day","-windy");case"fog":return"day"===n?"day-fog":"night-fog";case"cloudy":return"cloudy";case"partly-cloudy-day":return"day-cloudy";case"partly-cloudy-night":return"night-alt-cloudy";case"hail":return"".concat(n,"-hail");case"thunderstorm":return"".concat(n,"-thunderstorm");case"tornado":return"tornado";default:return"na"}return"na"}}}]);
//# sourceMappingURL=6.bc2ce43e.chunk.js.map