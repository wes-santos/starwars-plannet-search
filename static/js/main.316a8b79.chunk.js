/*! For license information please see main.316a8b79.chunk.js.LICENSE.txt */
(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],[,,,,,,,,,,function(t,e,r){t.exports=r(18)},,,,,function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(7),i=r.n(o),l=r(9),c=Object(n.createContext)(),u=r(1),s=r(8);function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(F){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=c;var s={};function m(){}function h(){}function p(){}var d={};l(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,a)&&(d=y);var b=p.prototype=m.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,l){var c=u(t[a],t,o);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,l)}))}l(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,l(b,"constructor",p),l(p,"constructor",h),h.displayName=l(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(E.prototype),l(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(b),l(b,i,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var m=function(){var t=Object(s.a)(f().mark((function t(e){var r,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi-trybe.herokuapp.com/api/planets/");case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.abrupt("return",e((function(t){return Object(u.a)(Object(u.a)({},t),{},{data:n})})));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var h=function(t){var e=t.children,r=Object(n.useState)({data:{},filterByName:{name:"",filteredResults:{}},filterByNumericValues:{actualFilter:{column:"population",comparison:"maior que",value:0},allFilters:[],numericResults:[],filtersIndex:[]},columns:["population","orbital_period","diameter","rotation_period","surface_water"]}),o=Object(l.a)(r,2),i=o[0],u=o[1],s={state:i,setState:u};return Object(n.useEffect)((function(){m(u)}),[]),a.a.createElement(c.Provider,{value:s},e)};r(15),r(16);var p=function(){var t=Object(n.useContext)(c).state,e=t.data.results,r=t.filterByName,o=r.name,i=r.filteredResults,l=t.filterByNumericValues.numericResults,u=function(t){return t.map((function(t,e){return a.a.createElement("tr",{key:e+1},a.a.createElement("td",null,t.name),a.a.createElement("td",null,t.rotation_period),a.a.createElement("td",null,t.orbital_period),a.a.createElement("td",null,t.diameter),a.a.createElement("td",null,t.climate),a.a.createElement("td",null,t.gravity),a.a.createElement("td",null,t.terrain),a.a.createElement("td",null,t.surface_water),a.a.createElement("td",null,t.population),a.a.createElement("td",null,t.films.map((function(t){return t}))),a.a.createElement("td",null,t.created),a.a.createElement("td",null,t.edited),a.a.createElement("td",null,t.url))}))};return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,["Name","Rotation Period","Orbital Period","Diameter","Climate","Gravity","Terrain","Surface Water","Population","Films","Created","Edited","URL"].map((function(t){return a.a.createElement("th",{key:t},t)})))),a.a.createElement("tbody",null,""!==o?u(i):void 0!==e&&0===l.length?u(e):l.length>0?u(l[l.length-1]):void 0))},d=r(4),v=r(5);r(17);var y=function(){var t=Object(n.useContext)(c),e=t.state,r=e.data.results,o=e.filterByName.name,i=e.filterByNumericValues,l=i.actualFilter,s=i.allFilters,f=i.numericResults,m=e.columns,h=t.setState,p=function(t){var e=t.target,r=e.id,n=e.value;h("column-filter"===r?function(t){return Object(u.a)(Object(u.a)({},t),{},{filterByNumericValues:Object(u.a)(Object(u.a)({},t.filterByNumericValues),{},{actualFilter:Object(u.a)(Object(u.a)({},t.filterByNumericValues.actualFilter),{},{column:n})})})}:"comparison-filter"===r?function(t){return Object(u.a)(Object(u.a)({},t),{},{filterByNumericValues:Object(u.a)(Object(u.a)({},t.filterByNumericValues),{},{actualFilter:Object(u.a)(Object(u.a)({},t.filterByNumericValues.actualFilter),{},{comparison:n})})})}:function(t){return Object(u.a)(Object(u.a)({},t),{},{filterByNumericValues:Object(u.a)(Object(u.a)({},t.filterByNumericValues),{},{actualFilter:Object(u.a)(Object(u.a)({},t.filterByNumericValues.actualFilter),{},{value:n})})})})},y=function(t){var e,n=t.filter((function(t){switch(l.comparison){case"maior que":return Number(t[l.column])>Number(l.value);case"menor que":return Number(t[l.column])<Number(l.value);case"igual a":return Number(t[l.column])===Number(l.value);default:return r}}));e=n,h((function(t){return Object(u.a)(Object(u.a)({},t),{},{filterByNumericValues:Object(u.a)(Object(u.a)({},t.filterByNumericValues),{},{allFilters:[].concat(Object(d.a)(t.filterByNumericValues.allFilters),[t.filterByNumericValues.actualFilter]),numericResults:[].concat(Object(d.a)(t.filterByNumericValues.numericResults),[e])})})}))},b=function(t){var e=t.target;if("removeAllFilters"===e.id)return h((function(t){return Object(u.a)(Object(u.a)({},t),{},{filterByNumericValues:{actualFilter:{column:"population",comparison:"maior que",value:0},allFilters:[],numericResults:[]},columns:["population","orbital_period","diameter","rotation_period","surface_water"]})}));var r=e.parentElement.innerText.split(" ")[0];console.log(f.indexOf({column:r}))};return a.a.createElement("div",null,a.a.createElement("form",{className:"colum-filter-form"},a.a.createElement("label",{htmlFor:"name-filter"},a.a.createElement("span",{className:"select-label-text"},"Pesquisar"),a.a.createElement("input",{type:"text","data-testid":"name-filter",id:"name-filter",value:o,onChange:function(t){var e=t.target.value,n=r.filter((function(t){return t.name.includes(e)}));h((function(t){return Object(u.a)(Object(u.a)({},t),{},{filterByName:{name:e,filteredResults:n}})}))},placeholder:"Pesquisar..."})),a.a.createElement("label",{htmlFor:"column-filter"},a.a.createElement("span",{className:"select-label-text"},"Coluna"),a.a.createElement("select",{id:"column-filter","data-testid":"column-filter",onChange:p},m.map((function(t){return a.a.createElement("option",{key:Object(v.a)(),value:t},t)})))),a.a.createElement("label",{htmlFor:"comparison-filter"},a.a.createElement("select",{id:"comparison-filter","data-testid":"comparison-filter",onChange:p},a.a.createElement("option",{value:"maior que"},"maior que"),a.a.createElement("option",{value:"menor que"},"menor que"),a.a.createElement("option",{value:"igual a"},"igual a"))),a.a.createElement("label",{htmlFor:"value-filter"},a.a.createElement("input",{type:"number","data-testid":"value-filter",placeholder:"Digite um valor",min:"0",value:l.value,onChange:p})),a.a.createElement("button",{type:"button","data-testid":"button-filter",onClick:function(){0===f.length?y(r):y(f[f.length-1]),function(){if(s.length>0){var t=m.filter((function(t){return t!==l.column}));h((function(e){return Object(u.a)(Object(u.a)({},e),{},{columns:t})}))}else{var e=m.filter((function(t){return t!==l.column}));h((function(t){return Object(u.a)(Object(u.a)({},t),{},{columns:e})}))}}()}},"Filtrar")),s.length>0&&s.map((function(t){return a.a.createElement("div",{key:Object(v.a)()},"".concat(t.column," ").concat(t.comparison," ").concat(t.value),a.a.createElement("button",{type:"button","data-testid":"filter",onClick:b},"X"))})),a.a.createElement("button",{type:"button",id:"removeAllFilters","data-testid":"button-remove-filters",onClick:b},"Remover todas filtragens"))};var b=function(){return a.a.createElement(h,null,a.a.createElement("h1",null,"Projeto Star Wars - Trybe"),a.a.createElement(y,null),a.a.createElement(p,null))};i.a.render(a.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.316a8b79.chunk.js.map