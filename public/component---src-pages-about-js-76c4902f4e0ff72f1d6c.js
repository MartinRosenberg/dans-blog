webpackJsonp([0xefeaa6d1881d],{1053:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict";function e(t,r){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,r)}function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function n(r,o,i){return n=t()?Reflect.construct:function(t,r,n){var o=[null];o.push.apply(o,r);var i=Function.bind.apply(t,o),a=new i;return n&&e(a,n.prototype),a},n.apply(null,arguments)}function o(e,t){var r=this;return this instanceof o?("object"==typeof e&&(t=e,t.message&&(e=t.message)),Error.call(this,e),"string"==typeof e&&(this.message=e),"object"==typeof t&&Object.getOwnPropertyNames(t).forEach(function(e){r[e]=t[e]}),this.name=this.constructor.name,void Error.captureStackTrace(this)):n(o,Array.prototype.slice.call(arguments))}function i(){return this instanceof i?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(i,Array.prototype.slice.call(arguments))}function a(){return this instanceof a?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(a,Array.prototype.slice.call(arguments))}function s(){return this instanceof s?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(s,Array.prototype.slice.call(arguments))}function c(){return this instanceof c?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(c,Array.prototype.slice.call(arguments))}function u(){return this instanceof u?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(u,Array.prototype.slice.call(arguments))}function l(e){function t(){var t=e.resolve();return t.steps=[],t}function r(){var t=this;return function(r){if(!t.steps||t.steps.length<=0)throw new s("No steps defined between .chain() & .chainEnd()");var n=0,o=e.unpack(),i=o.promise,a=o.resolve;for(o.reject;n<t.steps.length;){var c,u=t.steps[n],l=u[0],f=u[2];i=(c=i)[l].apply(c,f),n++}return a(r),i}}return{chain:t,chainEnd:r}}function f(e,t){return t={exports:{}},e(t,t.exports),t.exports}function p(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function d(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){function i(e){p(s,n,o,i,a,"next",e)}function a(e){p(s,n,o,i,a,"throw",e)}var s=e.apply(t,r);i(void 0)})}}function h(e){function t(e){return n.call(this,e).then(function(e){var t=e.item;return t})}function r(e){return n.call(this,e).then(function(e){var t=e.index;return t})}function n(t,r){return this.steps?this.addStep("_find",Array.prototype.slice.call(arguments)):("function"==typeof t&&(r=t,t=this._FP.promise),e.resolve(t).reduce(function(){var e=d(A.mark(function e(t,n,o){return A.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.item){e.next=6;break}return e.next=3,r(n);case 3:if(!e.sent){e.next=6;break}t.item=n,t.index=o;case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}(),{item:void 0,index:-1}))}function o(t,r){return this.steps?this.addStep("flatMap",Array.prototype.slice.call(arguments)):("function"==typeof t&&(r=t,t=this._FP.promise),e.resolve(t).map(r).reduce(function(e,t){return e.concat.apply(e,t)},[]))}function i(e,t){return this.steps?this.addStep("filter",Array.prototype.slice.call(arguments)):("function"==typeof e&&(t=e,e=this._FP.promise),a.call(this,e,function(e,r){return Promise.resolve(t(r)).then(function(t){return t?e.concat([r]):e})},[]))}function a(t,r,n){return this.steps?this.addStep("reduce",Array.prototype.slice.call(arguments)):("function"==typeof t?(n=r,r=t,t=this._FP?this._FP.promise:this):t=e.resolve(t,this),new e(function(e,o){return t.then(function(t){var i=t[Symbol.iterator](),a=0,s=function t(n){var s=i.next();return s.done?e(n):void Promise.all([n,s.value]).then(function(e){var n=e[0],o=e[1];return t(r(n,o,a++))}).catch(o)};s(n)})}))}function u(t,r,n){var o=this;if(this.steps)return this.addStep("map",Array.prototype.slice.call(arguments));1===arguments.length&&this&&this._FP&&(r=t,t=this&&this._FP&&this._FP.promise);var i=!1,a=Math.max(1,this&&this._FP&&this._FP.concurrencyLimit||1),u=this&&this._FP&&this._FP.promise?this._FP.promise:Promise.resolve(t),l=0,f=[],p=0,d=[],h=new Set,m=function(){return h.size>=a},y=function(){return f.length>o._FP.errors.limit||p>=t.length||i},v=function(e){return function(t){return h.delete(e),d[e]=t,t}};return e.resolve(new Promise(function(e,n){var g=function(t){return i?null:(i=!0,void e(t))},b=function(e){return i?null:(i=!0,void n(e))};u.then(function(e){if(!j(e))return n(new s("Value must be iterable! A '"+typeof e+"' was passed into FP.map()",{input:e}));t=[].concat(e);for(var u=function(){var e=null;return f.length>o._FP.errors.limit&&(e=b),y()&&(e=g),!!e&&(Promise.all(d).then(function(t){return e(d)}),!0)},w=function(e){if(!i)return u()||d[p]||x(p),e},x=function e(n){return i?null:(p++,m()?setTimeout(function(){return e(n)},0):d[n]?d[n]:(h.add(n),d[n]=Promise.resolve(t[n]).then(function(e){return r(e,n,t)}).then(function(e){return v(n)(e)}).then(w).catch(function(e){if(o._FP.errors.count++,e._index=n,f.push(e),o._FP.errors.limit<=0)return b(e),e;if(!(f.length>o._FP.errors.limit))return Promise.resolve().then(function(){return v(n)(e)}).then(w);var t=new c("Error limit "+o._FP.errors.limit+" met/exceeded with "+o._FP.errors.count+" errors.",{errors:f,results:d,ctx:o});Promise.resolve(v(n)(e)).then(function(){return b(t)})}),d[n]))};l<a&&l<t.length;)x(l++)})}))}return{map:u,find:t,findIndex:r,filter:i,flatMap:o,reduce:a}}function m(e){function t(e,t,r){return this.steps?this.addStep("thenIf",Array.prototype.slice.call(arguments)):(1===arguments.length&&(t=e,e=function(e){return e}),L(this)?this.then(function(o){return n(e,t,r)(o)}):n(e,t,r))}function r(e,t,r){return this.steps?this.addStep("tapIf",Array.prototype.slice.call(arguments)):(1===arguments.length&&(t=e,e=function(e){return e}),L(this)?this.then(function(o){return n(e,t,r,!0)(o)}):n(e,t,r,!0))}function n(t,r,n,o){return void 0===t&&(t=function(e){return e}),void 0===r&&(r=function(e){return e}),void 0===n&&(n=function(){return null}),void 0===o&&(o=!1),function(i){return e.resolve(t(i)).then(function(e){return e?r(i):n(i)}).then(function(e){return o?i:e})}}return{tapIf:r,thenIf:t,_thenIf:n}}function y(e){function t(t){return e.resolve(Array.isArray(t)?Promise.all(t):r(t))}function r(e){var t=Object.getOwnPropertyNames(e),r=t.map(function(t){return e[t]});return Promise.all(r).then(function(e){return e.reduce(function(e,r,n){var o,i=t[n];return Object.assign((o={},o[i]=r,o),e)},{})})}function n(t){if(!Number.isInteger(t))throw new s("FP.delay(millisec) requires a numeric arg.");return function(r){return new e(function(e){setTimeout(function(){return e(r)},t)})}}function o(t){return this.steps?this.addStep("delay",Array.prototype.slice.call(arguments)):this&&this._FP?e.resolve(this.then(n(t))):n(t)()}return{all:t,delay:o,_delay:n}}function v(e){return new E(function(t,r){return e&&N(e.then)?e.then(t).catch(r):void t(e)})}function g(e){var t=this;return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return new E(function(r,o){return e.call.apply(e,[t].concat(n,[function(e,t){return e?o(e):r(t)}]))})}}function b(e){if(!e||!Object.getPrototypeOf(e))throw new Error("Invalid Argument obj in promisifyAll(obj)");return Object.getOwnPropertyNames(e).filter(function(t){return"function"==typeof e[t]}).reduce(function(e,t){return/Sync/.test(t)||e[t+"Async"]||(e[t+"Async"]=E.promisify(e[""+t])),e},e)}function w(){var e,t,r=new E(function(r,n){e=r,t=n});return{promise:r,resolve:e,reject:t}}function x(e){if(e instanceof Error)return this&&(this._error=e),Promise.reject(e);throw new Error("Reject only accepts a new instance of Error!")}function E(e){if(!(this instanceof E))return new E(e);if(1!==arguments.length)throw new Error("FunctionalPromises constructor only accepts 1 callback argument");this._FP={errors:{limit:0,count:0},promise:new Promise(e),concurrencyLimit:4}}var S=r(60),P=S.inherits;P(o,Error),P(i,o),P(c,o),P(a,o),P(s,o),P(u,o);var _={isPromiseLike:function(e){return!(!e||"function"!=typeof e.then)},isFunction:function(e){return"function"==typeof e},isEnumerable:function(e){return e&&Array.isArray(e)||e&&"function"==typeof e[Symbol.iterator]},isObject:function(e){return"[object Object]"===!!Object.prototype.toString.call(e)},flatten:function(e){if(!Array.isArray(e))throw new Error("Method `flatten` requires valid array parameter");return e.reduce(function(e,t){return e.concat(Array.isArray(t)?_.flatten(t):[t])},[])}},k=f(function(e){var t=function(e){function t(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}function r(e,t,r,n){var i=t&&t.prototype instanceof o?t:o,a=Object.create(i.prototype),s=new d(n||[]);return a._invoke=u(e,r,s),a}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function a(){}function s(e){["next","throw","return"].forEach(function(r){t(e,r,function(e){return this._invoke(r,e)})})}function c(e,t){function r(o,i,a,s){var c=n(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&g.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}s(c.arg)}function o(e,n){function o(){return new t(function(t,o){r(e,n,t,o)})}return i=i?i.then(o,o):o()}var i;this._invoke=o}function u(e,t,r){var o=S;return function(i,a){if(o===_)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return m()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=l(s,r);if(c){if(c===A)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===S)throw o=k,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=_;var u=n(e,t,r);if("normal"===u.type){if(o=r.done?k:P,u.arg===A)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=k,r.method="throw",r.arg=u.arg)}}}function l(e,t){var r=e.iterator[t.method];if(r===y){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=y,l(e,t),"throw"===t.method))return A;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,A;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=y),t.delegate=null,A):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,A)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function h(e){if(e){var t=e[w];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(g.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=y,t.done=!0,t};return n.next=n}}return{next:m}}function m(){return{value:y,done:!0}}var y,v=Object.prototype,g=v.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",E=b.toStringTag||"@@toStringTag";try{t({},"")}catch(e){t=function(e,t,r){return e[t]=r}}e.wrap=r;var S="suspendedStart",P="suspendedYield",_="executing",k="completed",A={},j={};j[w]=function(){return this};var I=Object.getPrototypeOf,L=I&&I(I(h([])));L&&L!==v&&g.call(L,w)&&(j=L);var N=a.prototype=o.prototype=Object.create(j);return i.prototype=N.constructor=a,a.constructor=i,i.displayName=t(a,E,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,t(e,E,"GeneratorFunction")),e.prototype=Object.create(N),e},e.awrap=function(e){return{__await:e}},s(c.prototype),c.prototype[x]=function(){return this},e.AsyncIterator=c,e.async=function(t,n,o,i,a){void 0===a&&(a=Promise);var s=new c(r(t,n,o,i),a);return e.isGeneratorFunction(n)?s:s.next().then(function(e){return e.done?e.value:s.next()})},s(N),t(N,E,"Generator"),N[w]=function(){return this},N.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=h,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&g.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),s=g.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),A},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),A}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:h(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=y),A}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}),A=k,j=_.isEnumerable,I=function(e){for(var t=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];if("string"==typeof n&&(n=[n]),!e[e.addEventListener?"addEventListener":"on"])throw new s("Valid EventEmitter required.");var i=this.chainEnd();return this._FP.destroy=function(){return t._FP.destroyHandles.map(function(e){return e()||!0}).filter(function(e){return e}).length},this._FP.destroyHandles=n.map(function(t){return e[e.addEventListener?"addEventListener":"on"](t,i),function(){return e[e.removeEventListener?"removeEventListener":"off"](t,i)}}),this},L=_.isPromiseLike,N=_.isFunction,F=_.flatten,O=h(E),D=O.map,M=O.find,R=O.findIndex,T=O.filter,C=O.flatMap,H=O.reduce,z=y(E),J=z.all,B=z.delay,G=z._delay,V=m(E),q=V.tapIf,W=V.thenIf,U=V._thenIf,K=l(E),Y=K.chain,Q=K.chainEnd;return E.prototype.all=J,E.prototype.map=D,E.prototype.find=M,E.prototype.findIndex=R,E.prototype.filter=T,E.prototype.flatMap=C,E.prototype.reduce=H,E.prototype.listen=I,E.prototype.tapIf=q,E.prototype.thenIf=W,E.prototype._thenIf=U,E.prototype.delay=B,E.prototype._delay=G,E.prototype.reject=x,E.all=E.prototype.all,E.thenIf=E.prototype._thenIf,E.delay=function(e){return E.resolve().delay(e)},E.silent=function(e){return E.resolve().silent(e)},E.chain=Y,E.prototype.chainEnd=Q,E.reject=E.prototype.reject,E.resolve=v,E.promisify=g,E.promisifyAll=b,E.unpack=w,E.prototype.addStep=function(e,t){return this.steps&&this.steps.push([e,this,t]),this},E.prototype.concurrency=function(e){return void 0===e&&(e=1/0),this.steps?this.addStep("concurrency",Array.prototype.slice.call(arguments)):(this._FP.concurrencyLimit=e,this)},E.prototype.quiet=function(e){return void 0===e&&(e=1/0),this.steps?this.addStep("quiet",Array.prototype.slice.call(arguments)):(this._FP.errors={count:0,limit:e},this)},E.prototype.silent=E.prototype.quiet,E.get=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t=F(t);var n=t.filter(function(e){return"string"==typeof e}),o=t.find(function(e){return"string"!=typeof e});return o?1===n.length?o[n[0]]:n.reduce(function(e,t){return e[t]=o[t],e},{}):function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return E.get.apply(E,r.concat(t))}},E.prototype.get=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.steps?this.addStep("get",Array.prototype.slice.call(arguments)):this.then?this.then(E.get(t)):E.get.apply(E,t)},E.prototype.set=function(e,t){return this.steps?this.addStep("set",Array.prototype.slice.call(arguments)):this.then(function(r){return"object"==typeof r&&(r[e]=t),r})},E.prototype.catch=function(e){if(this.steps)return this.addStep("catch",Array.prototype.slice.call(arguments));if(2===arguments.length)return this.catchIf.apply(this,arguments);if(!N(e))throw new o("Invalid fn argument for `.catch(fn)`. Must be a function. Currently: "+typeof e);return E.resolve(this._FP.promise.catch(function(t){return e(t)}))},E.prototype.catchIf=function(e,t){if(this.steps)return this.addStep("catchIf",Array.prototype.slice.call(arguments));if(!N(t))throw new o("Invalid fn argument for `.catchIf(condition, fn)`. Must be a function. Currently: "+typeof t);return E.resolve(this._FP.promise.catch(function(r){if(e&&r instanceof e)return t(r);throw r}))},E.prototype.then=function(e,t){if(this.steps)return this.addStep("then",Array.prototype.slice.call(arguments));if(!N(e))throw new o("Invalid fn argument for `.then(fn)`. Must be a function. Currently: "+typeof onResolved);return E.resolve(this._FP.promise.then(e,t))},E.prototype.tap=function(e){if(this.steps)return this.addStep("tap",Array.prototype.slice.call(arguments));if(!N(e))throw new o("Invalid fn argument for `.tap(fn)`. Must be a function. Currently: "+typeof e);return E.resolve(this._FP.promise.then(function(t){return e(t)?t:t}))},E})},901:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=r(2),u=n(c),l=r(3),f=n(l),p=r(17),d=n(p),h=r(32),m=r(1053),y=n(m),v=r(64),g=n(v),b=r(63),w=n(b),x=r(137),E=n(x),S=r(183),P=n(S),_=r(907),k=new Intl.NumberFormat,A=function(e){return{tableOfContents:{"& li":{margin:0}},autobiography:{"& p":{textIndent:"2.5em"}},card:{borderBottom:"1px solid rgb(225, 228, 232)",padding:"1em 0.25em","& .description":{color:"rgba(0, 0, 0, 0.6)",fontSize:"0.9em",fontWeight:"400",paddingTop:"0.5em"},"& .contributions":{margin:"0.74em 0 0 0"},"& blockquote":{color:"rgba(0, 0, 0, 0.6)",fontSize:"0.9em",fontStyle:"italic",fontWeight:"300",margin:"1.4em",marginBottom:"0.7em"},"& .reference":{border:"5px dashed red"},"& .octicon-repo":{marginRight:"4px",transform:"scale(1.4, 1.4)"},"& .octicon":{color:"#959da5",opacity:"0.60",verticalAlign:"middle",marginTop:"-1px",display:"inline-block"},"& .ico":{color:"#959da5",opacity:"0.60",verticalAlign:"middle",marginTop:"-1px",display:"inline-block"}},repoTitle:{color:"#586069",margin:"0.3em 0",fontSize:"18px","& .repo-link":{color:"#0366d6",fontWeight:"600"},"& .user-link":{color:"#0366d6",fontWeight:"400"},"& .toc-link":{color:"#555555",width:"100%",display:"inline-block"},"& .toc-link::after":{content:"  view details",color:"#555555"}},buttonBar:{display:"flex",flexDirection:"row",maxWidth:"690px","& i":{flexGrow:"0",minWidth:"18px",alignSelf:"center"},"& .path-title":{flexGrow:"1",width:"235px"},"& .button-bar":{alignSelf:"center"}},starBox:{alignContent:"space-between",display:"flex",justifyContent:"stretch",maxHeight:"28px","& span":{backgroundColor:"#fff",border:"1px solid rgba(27,31,35,.2)",borderBottomRightRadius:"3px",borderLeft:"0",borderTopRightRadius:"3px",color:"#24292e",fontSize:"12px",fontWeight:"600",lineHeight:"21px",padding:"3px 10px",verticalAlign:"middle"},"& label":{backgroundColor:"#eff3f6",backgroundImage:"linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",backgroundPosition:"-1px -1px",backgroundRepeat:"repeat-x",backgroundSize:"110% 110%",border:"1px solid rgba(27,31,35,.2)",borderBottomLeftRadius:".25em",borderTopLeftRadius:".25em",color:"#24292e",display:"inline-block",fontSize:"12px",fontWeight:"600",lineHeight:"14px",padding:"6px 10px",position:"relative",userSelect:"none",verticalAlign:"middle",whiteSpace:"nowrap"}}}},j=function(e){function t(){var r,n,a;o(this,t);for(var c=arguments.length,l=Array(c),f=0;f<c;f++)l[f]=arguments[f];return r=n=i(this,e.call.apply(e,[this].concat(l))),n.state={projectStars:{}},n.loadProjectData=function(e){if(e)return y.default.resolve(e).concurrency(2).map(function(e){var t=e.user+"-"+e.repo,r=e.renamed?e.renamed:e;return(0,_.getStargazers)(s({},r,{targetId:t})).then(function(e){var r;n.setState((r={},r[t]=e,r))}).catch(function(e){throw console.error("Error:",e),e})}).catch(function(e){console.error("Failed to get current Github Stats:",e),n.setState({error:e.message})})},n.buildProjectList=function(e){var t=n.props.classes;return e?e.map(function(e){var r=e.user+"-"+e.repo;return u.default.createElement("div",{className:["card",t.card].join(" "),key:r,id:r},u.default.createElement("div",{className:t.buttonBar},u.default.createElement("i",{className:"ico"},_.Icons.repo),u.default.createElement("div",{className:["path-title",t.repoTitle].join(" ")},u.default.createElement("a",{target:"_blank",className:"user-link",href:"https://github.com/"+e.user},e.user)," / ",u.default.createElement("label",{className:"repo-link"},u.default.createElement("a",{target:"_blank",className:"repo-link",href:"https://github.com/"+e.user+"/"+e.repo},e.repo))),u.default.createElement("div",{className:"button-bar",id:r},void 0!=n.state[r]?n.getStarButton(n.state[r]):u.default.createElement("span",{className:"loading"},"Loading..."))),u.default.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:e.description}}),u.default.createElement("div",{className:"contributions"},u.default.createElement("blockquote",{dangerouslySetInnerHTML:{__html:e.contribution}})))}):u.default.createElement("h2",{className:"warning text-center"},"WARNING: No projects configured!")},n.getProjectToC=function(e){if(!e)return null;var t=n.props.classes,r=e.map(function(e){var r=e.user+"-"+e.repo;return u.default.createElement("li",{className:["path-title",t.repoTitle].join(" "),key:r},u.default.createElement("a",{href:"#"+r,className:"toc-link"},u.default.createElement("span",{className:"user-link"},e.user)," / ",u.default.createElement("span",{className:"repo-link"},e.repo)))});return u.default.createElement("ol",{className:t.tableOfContents},r)},a=r,i(n,a)}return a(t,e),t.prototype.componentDidMount=function(){this.loadProjectData(I)},t.prototype.getStarButton=function(e){return u.default.createElement("div",{className:this.props.classes.starBox},u.default.createElement("label",null,_.Icons.star," Star"),u.default.createElement("span",null,k.format(e)))},t.prototype.render=function(){return u.default.createElement(g.default,null,u.default.createElement(w.default,null,u.default.createElement(E.default,{title:"About Dan"}),u.default.createElement(P.default,null,u.default.createElement("div",{className:this.props.classes.autobiography},u.default.createElement("p",null,"Dan is an accomplished programmer, teacher, mentor, and leader. He has over 15 years of extensive professional software development experience. Including consulting, Agile team building, architectural leadership, security audits, accessibility reviews and UI/UX analysis. At both startups and big companies."),u.default.createElement("p",null,"After years of study and research in software patterns and architecture, Dan has become a highly sought-out subject matter expert. Additionally, Dan's talks have earned him a reputation as an incisive, thought-provoking and motivating public speaker."),u.default.createElement("p",null,"As an active contributor to numerous Open Source projects, Dan has established himself as a dynamic problem solver, constantly seeking personal growth and always learning. Dan pulls from his deep bench of experience to gain a better understanding of any challenge. He closely follows changes across a broad Technology landscape: learning new languages, methodologies, patterns, and adapting to different code styles."),u.default.createElement("div",{className:"text-center"},u.default.createElement("br",null),u.default.createElement("a",{href:""+(0,h.withPrefix)("/resume-dan-levy-2021.pdf")},u.default.createElement("b",null,"Download Dan's Resume")),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("a",{href:"/about/talks/"},u.default.createElement("b",null,"View Talks & Videos")))),u.default.createElement("div",null,u.default.createElement("h2",null,"Open Source Contributions"),u.default.createElement("h3",{id:"oss-toc"},"List of Contributions"),this.getProjectToC(I),u.default.createElement("h3",null,"Contribution Details"),this.buildProjectList(I)))))},t}(u.default.Component);j.propTypes={classes:f.default.object.isRequired},t.default=(0,d.default)(A)(j);var I=[{user:"ReactTraining",repo:"react-router",description:"React Router is an extremely popular routing solution for React. It features a collection of navigational components that work flexibly with your application.",contribution:'Dan helped improve the official documentation website. Some notable work improved the home page, initial examples, and overall navigation design. "A lot of people are going to benefit from the improvements you\'re making." - project co-creator Michael Jackson.'},{user:"docker",repo:"docker",renamed:{user:"moby",repo:"moby"},description:"Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.",contribution:'Dan found and fixed a Debian OS detection issue in the install script. (Much thanks goes to Jessie Frazelle and several other wonderful contributors. ❤️)\n    Dan was added as a "Docker Mentor" and can often be found helping at local meetups.'},{user:"nodejs",repo:"node",description:"NodeJS is the wildly successful framework which helped JavaScript venture beyond the browser to become the most ubiquitous programming language.",contribution:"Dan added helpful contextual links to parts of the official website. Dan also worked closely with relevant stakeholders at both TC39 and the NodeJS foundation to provide input & support on several signifigant features added to JavaScript. Notably these include ES6 Classes, Promises, Async/Await, and the URL parser."},{user:"mdn",repo:"interactive-examples",description:"Mozilla Development Network is relied on by millions of developers. It has become the de-facto standard source for technical details on JavaScript, HTML, the DOM, and other browser features.",contribution:"Added clarifications and examples across Promise, Fetch and Array documentation pages."},{user:"lord",repo:"slate",description:"Slate is a tool to generate modern documentation for libraries, SDKs, and APIs.",contribution:"Fixed an issue around securely encoding HTML. Currently slate is used to <a href='https://fpromises.io' target='_blank'>document Dan's Functional Promises library at https://fpromises.io</a>"},{user:"gatsbyjs",repo:"gatsby",description:"Gatsby is a modern Static Site Generator for blazing fast websites.",contribution:"Fixed error handling in one of the built-in plugins. Dan's also a member of their GitHub team. 💖"},{user:"gruntjs",repo:"grunt",description:"Grunt is one of the most successful build tools in the NodeJS ecosystem.",contribution:"Dan worked with Dave Methvin to improve the user experience around the console output & 3rd party tools."},{user:"nodejitsu",repo:"node-http-proxy",description:"Nodejitsu's popular HTTP Proxy library is used in 100's of libraries on NPM.",contribution:"Nodejitsu's founder, Charlie Robbins, worked with Dan (and others) addressing documentation omissions."},{user:"lodash",repo:"lodash",description:"A modern JavaScript utility library delivering modularity, performance, & extras. Lodash is one of the most successful JavaScript libraries ever. It's enjoyed several years at #1 on the 'Top 10' most depended on libraries NPM ranking.",contribution:"Extended ArrayBuffer support, in collaboration with John David-Dalton."},{user:"Automattic",repo:"mongoose",description:"Mongoose is one of the most popular Object Data Model libraries for MongoDB.",contribution:"Working with project leaders, Dan used github.com to discuss and identify desired API specification for extending the base classes Model and Query. He worked with Valeri Karpov (from MongoDB) and others."},{user:"petkaantonov",repo:"bluebird",description:"Bluebird is a very common Promise-enhancement library. It's also one of the 'Top 10' most depended on libraries.",contribution:"Dan has submitted several PRs over the years, and is a huge fan of this popular library. It was the inspiration behind <a href='https://fpromises.io' target='_blank'>functional-promises.</a>"},{user:"rancher",repo:"rancher",description:"Rancher is a powerful Docker administration platform.",contribution:"Aided in the resolution of a number of issues, touching on storage, upgrades and scaling."},{user:"jsonresume",repo:"resume-cli",description:"Resume CLI is the command line tool for JSON Resume, the open source initiative to create a JSON-based standard for resumes.",contribution:"Dan aided in simplifying command line options & enhancing documentation."},{user:"camwiegert",repo:"in-view",description:"In-view is a widely used library for reliable DOM position information across many mobile and desktop platforms/browsers.",contribution:"Submitted code to aid in resolving edge issues with the Safari browser."},{user:"metagrover",repo:"ES6-for-humans",description:"ES6 for Humans is a welcoming tour of new JavaScript features. This book is published by Apress and available on Amazon and other bookstores.",contribution:"Improved Promises section. Added examples for Spread and Rest operations."}];e.exports=t.default},906:function(e,t){"use strict";function r(e){if(!e)throw new Error("CacheFactory requires a session/local storage provider.");
return{get:function(t){return!!e.getItem(t)&&JSON.parse(e.getItem(t))},set:function(t,r){var n=t+"_"+(new Date).toISOString();return e.setItem(t,JSON.stringify(r)),e.setItem(n,JSON.stringify((new Date).toISOString())),r},getCacheSetter:function(e){var t=this;return function(r){return t.set(e,r)}}}}t.__esModule=!0,t.default=r,e.exports=t.default},907:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.repo,r=e.user;l=l||(0,u.default)(window&&window.sessionStorage);var n=r+"/"+t;return l.get(n)?Promise.resolve(l.get(n)):fetch("https://api.github.com/repos/"+r+"/"+t).then(f).then(function(e){return e.json()}).then(l.getCacheSetter(n))}function i(e){var t=e.repo,r=e.user;return o({repo:t,user:r}).then(function(e){return e.stargazers_count})}t.__esModule=!0,t.Icons=void 0,t.getRepoData=o,t.getStargazers=i;var a=r(2),s=n(a),c=r(906),u=n(c),l=null,f=function(e){return!e.ok||e.status>250?Promise.reject(new Promise("Invalid Response from Service!")):e};t.Icons={star:s.default.createElement("svg",{className:"octicon octicon-star v-align-text-bottom",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},s.default.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),repo:s.default.createElement("svg",{className:"octicon octicon-repo",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},s.default.createElement("path",{fillRule:"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}))}}});
//# sourceMappingURL=component---src-pages-about-js-76c4902f4e0ff72f1d6c.js.map