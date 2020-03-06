(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[7],{123:function(e,t,a){"use strict";var r=a(89),n=a.n(r),s=a(96),c=a.n(s),o=a(97),i=a.n(o),l=a(86),u=a(162),d=a(7);i()(c.a,{retryDelay:i.a.exponentialDelay});t.a=function(e){var t,a,r,s,o;return n.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t="",a="",r="",s="",o=[],i.next=7,n.a.awrap(c.a.get("https://api.teleport.org/api/cities/".concat(e)).then((function(e){var i,d,h,m,p,f,b;return n.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(i=e.data,Object(l.a)(i)||Object(u.a)(i)||(d=i.location.latlon,h=d.latitude,m=d.longitude,t=h,a=m,i._links["city:urban_area"]&&(r=i._links["city:urban_area"].name)),!localStorage.getItem("urban-areas")||void 0===r){g.next=11;break}if(p=JSON.parse(localStorage.getItem("urban-areas")),!Object.keys(p).includes(r)){g.next=11;break}return s=p[r],g.next=8,n.a.awrap(c.a.get("https://api.teleport.org/api/urban_areas/slug:".concat(s,"/images")));case 8:f=g.sent,b=f.data,o=Object(l.a)(b)||Object(u.a)(b)?[]:b.photos;case 11:case"end":return g.stop()}}))})).catch((function(e){return d.a(e)})));case 7:return i.abrupt("return",{latlong:"".concat(t,",").concat(a),urbanArea:{name:r,slug:s,photos:o}});case 8:case"end":return i.stop()}}))}},154:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var r=a(99),n=a(100),s=a(104),c=a(101),o=a(105),i=a(0),l=a.n(i),u=a(89),d=a.n(u),h=a(96),m=a.n(h),p=a(97),f=a.n(p),b=a(145),g=a.n(b),v=(a(154),a(11)),y=function(e){var t=Object(i.useContext)(v.a),a=t.theme,r=t.colorTheme;return l.a.createElement("p",{className:"px-5 py-1 cursor-pointer item text-".concat(r," hover:text-").concat(a," hover:bg-").concat(r),onClick:e.addressSelected},e.address.cityName)},w=a(42),x=a(94),j=a(95),E=function(e){var t=Object(i.useContext)(v.a),a=t.theme,r=t.colorTheme;return l.a.createElement("div",{className:"h-12 mx-5 mt-5"},l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:"absolute top-0 left-0 ml-4 mt-3"},l.a.createElement("img",{src:"./city-weather-search.svg",alt:"city search",className:"h-6 object-contain object-center"})),l.a.createElement("input",{style:{backgroundColor:"".concat("dark"===a?"#3a3a3a":"#e2e8f0"),letterSpacing:"0.05em"},className:"block appearance-none w-full border-none rounded-full shadow py-3 pl-12 pr-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 truncate text-".concat(r),id:"grid-first-name",type:"text",placeholder:"Type city name to find weather forecast",onChange:e.citySearch,value:e.city}),e.showCaret&&e.city.trim()?l.a.createElement("div",{className:"flex right-0 absolute top-0 mr-4 mt-4 cursor-pointer",onClick:e.caretClicked},e.showAddresses?l.a.createElement("img",{src:"./up-arrow.svg",alt:"arrow-up",className:"h-4 object-contain object-center"}):l.a.createElement("img",{src:"./down-arrow.svg",alt:"arrow-down",className:"h-4 object-contain object-center"})):null))},O=a(86),S=a(162),k=a(123),N=a(7);f()(m.a,{retryDelay:f.a.exponentialDelay});var C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={showCaret:!1,showAddresses:!1,showLoader:!1,city:"",addresses:[],errorMessage:""},a.debounceAddress=g()(a.getAddresses,1e3),a.searchCity=function(e){a.setState({city:e.target.value}),e.target.value.trim()?(a.setState({errorMessage:""}),a.debounceAddress()):a.clearState()},a.toggleAddresses=function(){a.setState((function(e,t){return{showAddresses:!e.showAddresses}}))},a.setCity=function(e){var t,r,n;return d.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!e){s.next=8;break}return a.setState({city:e.cityName,showAddresses:!1}),s.next=4,d.a.awrap(Object(k.a)(e.cityId));case 4:t=s.sent,r=t.latlong,n=t.urbanArea,a.context.updateState({address:e,latlong:r,urbanArea:n});case 8:case"end":return s.stop()}}))},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"handleError",value:function(e){this.setState({errorMessage:e})}},{key:"getAddresses",value:function(){var e,t,a;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,this.setState({showLoader:!0}),r.next=4,d.a.awrap(m.a.get("https://api.teleport.org/api/cities/?search=".concat(this.state.city)));case 4:e=r.sent,t=e.data,!Object(O.a)(t)&&!Object(S.a)(t)&&t.count>0?(a=t._embedded["city:search-results"].map((function(e){return{cityName:e.matching_full_name,cityId:e._links["city:item"].href.split("/")[5]}})),this.setState({addresses:a,showCaret:!0,showAddresses:!0,errorMessage:""})):(this.setState({showAddresses:!1}),this.handleError("No matching cities found. Try searching with a valid city name!")),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),this.handleError(r.t0),N.a(r.t0);case 13:return r.prev=13,this.setState({showLoader:!1}),r.finish(13);case 16:case"end":return r.stop()}}),null,this,[[0,9,13,16]])}},{key:"clearState",value:function(){this.setState({showCaret:!1,showAddresses:!1,showLoader:!1,addresses:[],errorMessage:""})}},{key:"render",value:function(){var e=this;return l.a.createElement(i.Fragment,null,l.a.createElement("div",{className:"flex justify-center mt-5"},l.a.createElement("div",{className:"w-full sm:w-5/6 md:w-2/3 xl:max-w-5xl"},l.a.createElement(E,{city:this.state.city,showCaret:this.state.showCaret,showAddresses:this.state.showAddresses,citySearch:this.searchCity,caretClicked:this.toggleAddresses}))),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"w-full sm:w-5/6 md:w-2/3 xl:w-1/2"},this.state.showLoader?l.a.createElement(w.a,null):this.state.showAddresses&&l.a.createElement("div",{className:"mx-10 mt-0 border-solid border-2 border-gray-400 rounded-b-xl address-list"},this.state.addresses.map((function(t,a){return l.a.createElement(y,{address:t,key:a,addressSelected:function(){return e.setCity(t)}})}))),this.state.errorMessage.length>0&&l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"w-5/6"},l.a.createElement(x.a,{errorMessage:this.state.errorMessage,showCloseBtn:!0,closeError:function(){e.setState({errorMessage:""})}}))))))}}]),t}(i.Component);C.contextType=j.a;var A=C,I=a(91),M=a(98);a.d(t,"HomeContainer",(function(){return F}));var _=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,164))})),T=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,167))})),F=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(i.Fragment,null,l.a.createElement(I.b,null,l.a.createElement(j.b,null,l.a.createElement(A,null),l.a.createElement(M.a,null,l.a.createElement(i.Suspense,{fallback:l.a.createElement(w.a,{loaderText:"Loading components"})},l.a.createElement(_,null),l.a.createElement(T,null),l.a.createElement("button",{className:"mx-auto my-4 flex justify-center text-center sm:hidden font-semibold py-2 px-4 rounded-full capitalize cursor-pointer text-".concat(this.context.theme," bg-").concat(this.context.colorTheme),onClick:function(){return window.location.reload()}},"Refresh page"))))))}}]),t}(i.Component);F.contextType=v.a;t.default=F},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var r=a(43),n=a(0),s=a.n(n),c=s.a.createContext({weatherUnit:"F"}),o=function(e){var t=e.children,a=Object(n.useState)("F"),o=Object(r.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){localStorage.getItem("unit")?l(JSON.parse(localStorage.getItem("unit"))):localStorage.setItem("unit",JSON.stringify("F"))}),[]),s.a.createElement(c.Provider,{value:{weatherUnit:i,updateWeatherUnit:function(e){l(e),localStorage.setItem("unit",JSON.stringify(e))}}},t)}},94:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(11);t.a=function(e){var t=Object(r.useContext)(s.a).theme;return n.a.createElement("div",{className:"w-full ml-auto mr-auto h-auto bg-".concat(t," border border-red-400 text-red-700 mt-5 px-4 py-2 rounded relative"),role:"alert"},n.a.createElement("span",{className:"w-5/6 block break-words"},e.errorMessage),e.showCloseBtn&&n.a.createElement("span",{className:"absolute top-0 bottom-0 right-0 ml-3 mr-1 py-3",onClick:e.closeError},n.a.createElement("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("title",null,"Close"),n.a.createElement("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}))))}},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return O}));var r=a(110),n=a(89),s=a.n(n),c=a(106),o=a(99),i=a(100),l=a(104),u=a(101),d=a(105),h=a(0),m=a.n(h),p=a(96),f=a.n(p),b=a(97),g=a.n(b),v=a(21),y=a(86),w=a(162),x=a(123),j=a(7),E=m.a.createContext(null);g()(f.a,{retryDelay:g.a.exponentialDelay});var O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),d=0;d<n;d++)i[d]=arguments[d];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).updateState=function(e){a.setState(Object(c.a)({},e))},a.updateFavorites=function(e){a.setState(Object(c.a)({},e))},a.state={address:{cityName:"",cityId:""},urbanArea:{name:"",slug:"",photos:[]},latlong:"",favorites:[],updateState:a.updateState,updateFavorites:a.updateFavorites},a.fetchAddressInfo=function(){var e,t;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e="",t={name:"",slug:"",photos:[]},r.next=4,s.a.awrap(f.a.get("https://ipapi.co/json").then((function(r){var n,c;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=r.data,Object(y.a)(n)||Object(w.a)(n)){o.next=6;break}return c="".concat(n.city,", ").concat(n.region,", ").concat(n.country_name),o.next=5,s.a.awrap(f.a.get("https://api.teleport.org/api/cities/?search=".concat(c)).then((function(a){var r,n;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(r=a.data,Object(y.a)(r)||Object(w.a)(r)||!(r.count>0)){c.next=6;break}return n=r._embedded["city:search-results"].map((function(e){return{cityId:e._links["city:item"].href.split("/")[5]}})),e=n[0].cityId,c.next=6,s.a.awrap(Object(x.a)(e).then((function(e){t=e.urbanArea})).catch((function(e){return j.a(e)})));case 6:case"end":return c.stop()}}))})).catch((function(e){return j.a(e)})));case 5:a.updateState({address:{cityName:c,cityId:e},latlong:"".concat(n.latitude,",").concat(n.longitude),urbanArea:t});case 6:case"end":return o.stop()}}))})).catch((function(e){return j.a(e)})));case 4:case"end":return r.stop()}}))},a.getFavorites=function(){localStorage.getItem("favorites")&&a.setState({favorites:Object(r.a)(JSON.parse(localStorage.getItem("favorites")))})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getAddressInfo",value:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,localStorage.getItem("urban-areas")){t.next=6;break}return t.next=4,s.a.awrap(f.a.get("https://gist.githubusercontent.com/iamsainikhil/4959bbe458ebf0c4bcbf7e24b4983c89/raw/170221bcd3d9732fec97210b9a67cd445e437481/urban_areas.json").then((function(e){return e.data})));case 4:e=t.sent,localStorage.setItem("urban-areas",JSON.stringify(e));case 6:this.fetchAddressInfo(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),j.a(t.t0);case 12:case"end":return t.stop()}}),null,this,[[0,9]])}},{key:"componentDidMount",value:function(){this.getAddressInfo(),this.getFavorites()}},{key:"render",value:function(){return m.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(h.Component);E.propTypes={address:v.PropTypes.objectOf(v.PropTypes.string),latlong:v.PropTypes.string}},98:function(e,t,a){"use strict";var r=a(99),n=a(100),s=a(104),c=a(101),o=a(105),i=a(0),l=a.n(i),u=a(94),d=a(7),h=a(87),m=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1,eventId:null},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;d.b((function(r){r.setExtras(t);var n=d.a(e);a.setState({eventId:n})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.hasError?l.a.createElement("div",null,l.a.createElement(u.a,{errorMessage:"Something went wrong. Reload the page!"}),l.a.createElement("button",{className:"font-semibold py-3 px-6 rounded-full capitalize",onClick:function(){return h.b({eventId:e.state.eventId})}},"Report feedback")):this.props.children)}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(i.Component);t.a=m}}]);
//# sourceMappingURL=7.b475b180.chunk.js.map