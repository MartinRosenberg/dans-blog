webpackJsonp([50739212244294],{440:function(t,e,r){"use strict";var n=r(480),o=r(278),i=o(n("String.prototype.indexOf"));t.exports=function(t,e){var r=n(t,!!e);return"function"==typeof r&&i(t,".prototype.")>-1?o(r):r}},278:function(t,e,r){"use strict";var n=r(322),o=r(480),i=o("%Function.prototype.apply%"),a=o("%Function.prototype.call%"),u=o("%Reflect.apply%",!0)||n.call(a,i),c=o("%Object.getOwnPropertyDescriptor%",!0),p=o("%Object.defineProperty%",!0),l=o("%Math.max%");if(p)try{p({},"a",{value:1})}catch(t){p=null}t.exports=function(t){var e=u(n,a,arguments);if(c&&p){var r=c(e,"length");r.configurable&&p(e,"length",{value:1+l(0,t.length-(arguments.length-1))})}return e};var f=function(){return u(n,i,arguments)};p?p(t.exports,"apply",{value:f}):t.exports.apply=f},1073:function(t,e,r){function n(t,e,r){var n=r||{};return!(n.strict?!p(t,e):t!==e)||(!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?p(t,e):t==e:a(t,e,n))}function o(t){return null===t||void 0===t}function i(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function a(t,e,r){var a,p;if(typeof t!=typeof e)return!1;if(o(t)||o(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t)!==c(e))return!1;var d=l(t),T=l(e);if(d!==T)return!1;if(d||T)return t.source===e.source&&f(t)===f(e);if(s(t)&&s(e))return y.call(t)===y.call(e);var E=i(t),A=i(e);if(E!==A)return!1;if(E||A){if(t.length!==e.length)return!1;for(a=0;a<t.length;a++)if(t[a]!==e[a])return!1;return!0}if(typeof t!=typeof e)return!1;try{var b=u(t),g=u(e)}catch(t){return!1}if(b.length!==g.length)return!1;for(b.sort(),g.sort(),a=b.length-1;a>=0;a--)if(b[a]!=g[a])return!1;for(a=b.length-1;a>=0;a--)if(p=b[a],!n(t[p],e[p],r))return!1;return!0}var u=r(357),c=r(1269),p=r(1602),l=r(1272),f=r(1837),s=r(1270),y=Date.prototype.getTime;t.exports=n},161:function(t,e,r){"use strict";var n=r(357),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,u=Object.defineProperty,c=function(t){return"function"==typeof t&&"[object Function]"===i.call(t)},p=function(){var t={};try{u(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(t){return!1}},l=u&&p(),f=function(t,e,r,n){(!(e in t)||c(n)&&n())&&(l?u(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},s=function(t,e){var r=arguments.length>2?arguments[2]:{},i=n(e);o&&(i=a.call(i,Object.getOwnPropertySymbols(e)));for(var u=0;u<i.length;u+=1)f(t,i[u],e[i[u]],r[i[u]])};s.supportsDescriptors=!!l,t.exports=s},1104:function(t,e){"use strict";var r="Function.prototype.bind called on incompatible ",n=Array.prototype.slice,o=Object.prototype.toString,i="[object Function]";t.exports=function(t){var e=this;if("function"!=typeof e||o.call(e)!==i)throw new TypeError(r+e);for(var a,u=n.call(arguments,1),c=function(){if(this instanceof a){var r=e.apply(this,u.concat(n.call(arguments)));return Object(r)===r?r:this}return e.apply(t,u.concat(n.call(arguments)))},p=Math.max(0,e.length-u.length),l=[],f=0;f<p;f++)l.push("$"+f);if(a=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(c),e.prototype){var s=function(){};s.prototype=e.prototype,a.prototype=new s,s.prototype=null}return a}},322:function(t,e,r){"use strict";var n=r(1104);t.exports=Function.prototype.bind||n},480:function(t,e,r){"use strict";var n,o=SyntaxError,i=Function,a=TypeError,u=function(t){try{return i('"use strict"; return ('+t+").constructor;")()}catch(t){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(t){c=null}var p=function(){throw new a},l=c?function(){try{return arguments.callee,p}catch(t){try{return c(arguments,"callee").get}catch(t){return p}}}():p,f=r(1259)(),s=Object.getPrototypeOf||function(t){return t.__proto__},y={},d="undefined"==typeof Uint8Array?n:s(Uint8Array),T={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":f?s([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":y,"%AsyncGenerator%":y,"%AsyncGeneratorFunction%":y,"%AsyncIteratorPrototype%":y,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":y,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?s(s([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&f?s((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&f?s((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?s(""[Symbol.iterator]()):n,"%Symbol%":f?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":l,"%TypedArray%":d,"%TypeError%":a,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet},E=function t(e){var r;if("%AsyncFunction%"===e)r=u("async function () {}");else if("%GeneratorFunction%"===e)r=u("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=u("async function* () {}");else if("%AsyncGenerator%"===e){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===e){var o=t("%AsyncGenerator%");o&&(r=s(o.prototype))}return T[e]=r,r},A={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=r(322),g=r(1260),h=b.call(Function.call,Array.prototype.concat),m=b.call(Function.apply,Array.prototype.splice),S=b.call(Function.call,String.prototype.replace),v=b.call(Function.call,String.prototype.slice),P=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,O=/\\(\\)?/g,R=function(t){var e=v(t,0,1),r=v(t,-1);if("%"===e&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return S(t,P,function(t,e,r,o){n[n.length]=r?S(o,O,"$1"):e||t}),n},_=function(t,e){var r,n=t;if(g(A,n)&&(r=A[n],n="%"+r[0]+"%"),g(T,n)){var i=T[n];if(i===y&&(i=E(n)),"undefined"==typeof i&&!e)throw new a("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:i}}throw new o("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new a("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new a('"allowMissing" argument must be a boolean');var r=R(t),i=r.length>0?r[0]:"",u=_("%"+i+"%",e),p=u.name,l=u.value,f=!1,s=u.alias;s&&(i=s[0],m(r,h([0,1],s)));for(var y=1,d=!0;y<r.length;y+=1){var E=r[y],A=v(E,0,1),b=v(E,-1);if(('"'===A||"'"===A||"`"===A||'"'===b||"'"===b||"`"===b)&&A!==b)throw new o("property names with quotes must have matching quotes");if("constructor"!==E&&d||(f=!0),i+="."+E,p="%"+i+"%",g(T,p))l=T[p];else if(null!=l){if(!(E in l)){if(!e)throw new a("base intrinsic for "+t+" exists, but the property is not available.");return void n}if(c&&y+1>=r.length){var S=c(l,E);d=!!S,l=d&&"get"in S&&!("originalValue"in S.get)?S.get:l[E]}else d=g(l,E),l=l[E];d&&!f&&(T[p]=l)}}return l}},1259:function(t,e,r){"use strict";var n="undefined"!=typeof Symbol&&Symbol,o=r(481);t.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},481:function(t,e){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;var n=42;t[e]=n;for(e in t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(i.value!==n||i.enumerable!==!0)return!1}return!0}},323:function(t,e,r){"use strict";var n=r(481);t.exports=function(){return n()&&!!Symbol.toStringTag}},1260:function(t,e,r){"use strict";var n=r(322);t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},1269:function(t,e,r){"use strict";var n=r(323)(),o=r(440),i=o("Object.prototype.toString"),a=function(t){return!(n&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===i(t)},u=function(t){return!!a(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==i(t)&&"[object Function]"===i(t.callee)},c=function(){return a(arguments)}();a.isLegacyArguments=u,t.exports=c?a:u},1270:function(t,e,r){"use strict";var n=Date.prototype.getDay,o=function(t){try{return n.call(t),!0}catch(t){return!1}},i=Object.prototype.toString,a="[object Date]",u=r(323)();t.exports=function(t){return"object"==typeof t&&null!==t&&(u?o(t):i.call(t)===a)}},1272:function(t,e,r){"use strict";var n,o,i,a,u=r(440),c=r(323)();if(c){n=u("Object.prototype.hasOwnProperty"),o=u("RegExp.prototype.exec"),i={};var p=function(){throw i};a={toString:p,valueOf:p},"symbol"==typeof Symbol.toPrimitive&&(a[Symbol.toPrimitive]=p)}var l=u("Object.prototype.toString"),f=Object.getOwnPropertyDescriptor,s="[object RegExp]";t.exports=c?function(t){if(!t||"object"!=typeof t)return!1;var e=f(t,"lastIndex"),r=e&&n(e,"value");if(!r)return!1;try{o(t,a)}catch(t){return t===i}}:function(t){return!(!t||"object"!=typeof t&&"function"!=typeof t)&&l(t)===s}},1434:function(t,e){function r(t){return!!t&&"object"==typeof t}function n(t,e){var r=null==t?void 0:t[e];return a(r)?r:void 0}function o(t){return i(t)&&s.call(t)==u}function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return null!=t&&(o(t)?y.test(l.call(t)):r(t)&&c.test(t))}var u="[object Function]",c=/^\[object .+?Constructor\]$/,p=Object.prototype,l=Function.prototype.toString,f=p.hasOwnProperty,s=p.toString,y=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=n},1435:function(t,e){function r(t){return o(t)&&d.call(t,"callee")&&(!E.call(t,"callee")||T.call(t)==l)}function n(t){return null!=t&&a(t.length)&&!i(t)}function o(t){return c(t)&&n(t)}function i(t){var e=u(t)?T.call(t):"";return e==f||e==s}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=p}function u(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function c(t){return!!t&&"object"==typeof t}var p=9007199254740991,l="[object Arguments]",f="[object Function]",s="[object GeneratorFunction]",y=Object.prototype,d=y.hasOwnProperty,T=y.toString,E=y.propertyIsEnumerable;t.exports=r},1436:function(t,e){function r(t){return!!t&&"object"==typeof t}function n(t,e){var r=null==t?void 0:t[e];return u(r)?r:void 0}function o(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}function i(t){return a(t)&&d.call(t)==p}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function u(t){return null!=t&&(i(t)?T.test(s.call(t)):r(t)&&l.test(t))}var c="[object Array]",p="[object Function]",l=/^\[object .+?Constructor\]$/,f=Object.prototype,s=Function.prototype.toString,y=f.hasOwnProperty,d=f.toString,T=RegExp("^"+s.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=n(Array,"isArray"),A=9007199254740991,b=E||function(t){return r(t)&&o(t.length)&&d.call(t)==c};t.exports=b},1437:function(t,e,r){function n(t){return function(e){return null==e?void 0:e[t]}}function o(t){return null!=t&&a(b(t))}function i(t,e){return t="number"==typeof t||y.test(t)?+t:-1,e=null==e?A:e,t>-1&&t%1==0&&t<e}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}function u(t){for(var e=p(t),r=e.length,n=r&&t.length,o=!!n&&a(n)&&(s(t)||f(t)),u=-1,c=[];++u<r;){var l=e[u];(o&&i(l,n)||T.call(t,l))&&c.push(l)}return c}function c(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(s(t)||f(t))&&e||0;for(var r=t.constructor,n=-1,o="function"==typeof r&&r.prototype===t,u=Array(e),p=e>0;++n<e;)u[n]=n+"";for(var l in t)p&&i(l,e)||"constructor"==l&&(o||!T.call(t,l))||u.push(l);return u}var l=r(1434),f=r(1435),s=r(1436),y=/^\d+$/,d=Object.prototype,T=d.hasOwnProperty,E=l(Object,"keys"),A=9007199254740991,b=n("length"),g=E?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?u(t):c(t)?E(t):[]}:u;t.exports=g},558:function(t,e){"use strict";var r=function(t){return t!==t};t.exports=function(t,e){return 0===t&&0===e?1/t===1/e:t===e||!(!r(t)||!r(e))}},1602:function(t,e,r){"use strict";var n=r(161),o=r(278),i=r(558),a=r(559),u=r(1603),c=o(a(),Object);n(c,{getPolyfill:a,implementation:i,shim:u}),t.exports=c},559:function(t,e,r){"use strict";var n=r(558);t.exports=function(){return"function"==typeof Object.is?Object.is:n}},1603:function(t,e,r){"use strict";var n=r(559),o=r(161);t.exports=function(){var t=n();return o(Object,{is:t},{is:function(){return Object.is!==t}}),t}},1640:function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),l=r(2),f=n(l),s=r(3),y=n(s),d=r(1819),T=n(d),E=r(1073),A=n(E),b=r(1641),g=r(571),h=function(t){var e,r;return r=e=function(e){function r(){return i(this,r),a(this,e.apply(this,arguments))}return u(r,e),r.prototype.shouldComponentUpdate=function(t){return!(0,A.default)(this.props,t)},r.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case g.TAG_NAMES.SCRIPT:case g.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case g.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return c({},n,(e={},e[r.type]=[].concat(n[r.type]||[],[c({},o,this.mapNestedChildrenToProps(r,i))]),e))},r.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(n.type){case g.TAG_NAMES.TITLE:return c({},o,(e={},e[n.type]=a,e.titleAttributes=c({},i),e));case g.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case g.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(r={},r[n.type]=c({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=c({},e);return Object.keys(t).forEach(function(e){var n;r=c({},r,(n={},n[e]=t[e],n))}),r},r.prototype.warnOnInvalidChildren=function(t,e){return!0},r.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return f.default.Children.forEach(t,function(t){if(t&&t.props){var i=t.props,a=i.children,u=o(i,["children"]),c=(0,b.convertReactPropstoHtmlAttributes)(u);switch(r.warnOnInvalidChildren(t,a),t.type){case g.TAG_NAMES.LINK:case g.TAG_NAMES.META:case g.TAG_NAMES.NOSCRIPT:case g.TAG_NAMES.SCRIPT:case g.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:c,nestedChildren:a});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}}),e=this.mapArrayTypeChildrenToProps(n,e)},r.prototype.render=function(){var e=this.props,r=e.children,n=o(e,["children"]),i=c({},n);return r&&(i=this.mapChildrenToProps(r,i)),f.default.createElement(t,i)},p(r,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),r}(f.default.Component),e.propTypes={base:y.default.object,bodyAttributes:y.default.object,children:y.default.oneOfType([y.default.arrayOf(y.default.node),y.default.node]),defaultTitle:y.default.string,encodeSpecialCharacters:y.default.bool,htmlAttributes:y.default.object,link:y.default.arrayOf(y.default.object),meta:y.default.arrayOf(y.default.object),noscript:y.default.arrayOf(y.default.object),onChangeClientState:y.default.func,script:y.default.arrayOf(y.default.object),style:y.default.arrayOf(y.default.object),title:y.default.string,titleAttributes:y.default.object,titleTemplate:y.default.string},e.defaultProps={encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,b.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},r},m=function(){return null},S=(0,T.default)(b.reducePropsToState,b.handleClientStateChange,b.mapStateOnServer)(m),v=h(S);v.renderStatic=v.rewind,e.Helmet=v,e.default=v},571:function(t,e){e.__esModule=!0;var r=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),n=(e.VALID_TAG_NAMES=Object.keys(r).map(function(t){return r[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(n).reduce(function(t,e){return t[n[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},1641:function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestIdleCallback=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=r(2),u=n(a),c=r(236),p=n(c),l=r(571),f=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(t){var e=A(t,l.TAG_NAMES.TITLE),r=A(t,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&e)return r.replace(/%s/g,function(){return e});var n=A(t,l.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},y=function(t){return A(t,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return i({},t,e)},{})},T=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[l.TAG_NAMES.BASE]}).map(function(t){return t[l.TAG_NAMES.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o],a=i.toLowerCase();if(t.indexOf(a)!==-1&&r[a])return e.concat(r)}return e},[])},E=function(t,e,r){var n={};return r.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&m("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var o={};r.filter(function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();e.indexOf(c)===-1||r===l.TAG_PROPERTIES.REL&&"canonical"===t[r].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(r=c),e.indexOf(u)===-1||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!t[r])return!1;var p=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][p]&&(o[r][p]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,p.default)({},n[u],o[u]);n[u]=c}return t},[]).reverse()},A=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},b=function(t){return{baseTag:T([l.TAG_PROPERTIES.HREF],t),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,t),encode:A(t,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,t),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],t),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:y(t),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],t),title:s(t),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,t)}},g=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.requestIdleCallback?window.requestIdleCallback:function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)}}(),h=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.cancelIdleCallback?window.cancelIdleCallback:function(t){return clearTimeout(t)}}(),m=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},S=null,v=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.htmlAttributes,o=t.linkTags,i=t.metaTags,a=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,p=t.styleTags,f=t.title,s=t.titleAttributes;S&&h(S),S=g(function(){O(l.TAG_NAMES.BODY,r),O(l.TAG_NAMES.HTML,n),P(f,s);var y={baseTag:R(l.TAG_NAMES.BASE,e),linkTags:R(l.TAG_NAMES.LINK,o),metaTags:R(l.TAG_NAMES.META,i),noscriptTags:R(l.TAG_NAMES.NOSCRIPT,a),scriptTags:R(l.TAG_NAMES.SCRIPT,c),styleTags:R(l.TAG_NAMES.STYLE,p)},d={},T={};Object.keys(y).forEach(function(t){var e=y[t],r=e.newTags,n=e.oldTags;r.length&&(d[t]=r),n.length&&(T[t]=y[t].oldTags)}),S=null,u(t,d,T)})},P=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=Array.isArray(t)?t.join(""):t),O(l.TAG_NAMES.TITLE,e)},O=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],p=e[c]||"";r.getAttribute(c)!==p&&r.setAttribute(c,p),o.indexOf(c)===-1&&o.push(c);var f=i.indexOf(c);f!==-1&&i.splice(f,1)}for(var s=i.length-1;s>=0;s--)r.removeAttribute(i[s]);o.length===i.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},R=function(t,e){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(t+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach(function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=e.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var u="undefined"==typeof e[n]?"":e[n];r.setAttribute(n,u)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return a=e,r.isEqualNode(t)})?o.splice(a,1):i.push(r)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return r.appendChild(t)}),{oldTags:o,newTags:i}},_=function(t){return Object.keys(t).reduce(function(e,r){var n="undefined"!=typeof t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},I=function(t,e,r,n){var o=_(r);return o?"<"+t+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+f(e,n)+"</"+t+">":"<"+t+" "+l.HELMET_ATTRIBUTE+'="true">'+f(e,n)+"</"+t+">"},w=function(t,e,r){return e.reduce(function(e,n){var o=Object.keys(n).filter(function(t){return!(t===l.TAG_PROPERTIES.INNER_HTML||t===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof n[e]?e:e+'="'+f(n[e],r)+'"';return t?t+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=l.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")},"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,r){return e[l.REACT_TAG_MAP[r]||r]=t[r],e},e)},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,r){return e[l.HTML_TAG_MAP[r]||r]=t[r],e},e)},C=function(t,e,r){var n,o=(n={key:e},n[l.HELMET_ATTRIBUTE]=!0,n),i=M(r,o);return[u.default.createElement(l.TAG_NAMES.TITLE,i,e)]},N=function(t,e){return e.map(function(e,r){var n,o=(n={key:r},n[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach(function(t){var r=l.REACT_TAG_MAP[t]||t;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]}),u.default.createElement(t,o)})},x=function(t,e,r){switch(t){case l.TAG_NAMES.TITLE:return{toComponent:function(){return C(t,e.title,e.titleAttributes,r)},toString:function(){return I(t,e.title,e.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return _(e)}};default:return{toComponent:function(){return N(t,e)},toString:function(){return w(t,e,r)}}}},L=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,p=t.styleTags,f=t.title,s=void 0===f?"":f,y=t.titleAttributes;return{base:x(l.TAG_NAMES.BASE,e,n),bodyAttributes:x(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:x(l.ATTRIBUTE_NAMES.HTML,o,n),link:x(l.TAG_NAMES.LINK,i,n),meta:x(l.TAG_NAMES.META,a,n),noscript:x(l.TAG_NAMES.NOSCRIPT,u,n),script:x(l.TAG_NAMES.SCRIPT,c,n),style:x(l.TAG_NAMES.STYLE,p,n),title:x(l.TAG_NAMES.TITLE,{title:s,titleAttributes:y},n)}};e.convertReactPropstoHtmlAttributes=j,e.handleClientStateChange=v,e.mapStateOnServer=L,e.reducePropsToState=b,e.requestIdleCallback=g,e.warn=m},1819:function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function a(t,e,r){function n(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");
if("undefined"!=typeof r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){function f(){s=t(y.map(function(t){return t.props})),d.canUseDOM?e(s):r&&(s=r(s))}if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,y=[],d=function(t){function e(){return t.apply(this,arguments)||this}i(e,t),e.peek=function(){return s},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,y=[],t};var r=e.prototype;return r.shouldComponentUpdate=function(t){return!p(t,this.props)},r.componentWillMount=function(){y.push(this),f()},r.componentDidUpdate=function(){f()},r.componentWillUnmount=function(){var t=y.indexOf(this);y.splice(t,1),f()},r.render=function(){return c.createElement(a,this.props)},e}(u.Component);return o(d,"displayName","SideEffect("+n(a)+")"),o(d,"canUseDOM",l),d}}var u=r(2),c=n(u),p=n(r(1848)),l=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=a},598:function(t,e){"use strict";var r=Object,n=TypeError;t.exports=function(){if(null!=this&&this!==r(this))throw new n("RegExp.prototype.flags getter called on non-object");var t="";return this.hasIndices&&(t+="d"),this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t}},1837:function(t,e,r){"use strict";var n=r(161),o=r(278),i=r(598),a=r(599),u=r(1838),c=o(a());n(c,{getPolyfill:a,implementation:i,shim:u}),t.exports=c},599:function(t,e,r){"use strict";var n=r(598),o=r(161).supportsDescriptors,i=Object.getOwnPropertyDescriptor,a=TypeError;t.exports=function(){if(!o)throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");if("gim"===/a/gim.flags){var t=i(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof/a/.dotAll)return t.get}return n}},1838:function(t,e,r){"use strict";var n=r(161).supportsDescriptors,o=r(599),i=Object.getOwnPropertyDescriptor,a=Object.defineProperty,u=TypeError,c=Object.getPrototypeOf,p=/a/;t.exports=function(){if(!n||!c)throw new u("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var t=o(),e=c(p),r=i(e,"flags");return r&&r.get===t||a(e,"flags",{configurable:!0,enumerable:!1,get:t}),t}},1848:function(t,e,r){"use strict";var n=r(1437);t.exports=function(t,e,r,o){var i=r?r.call(o,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var a=n(t),u=n(e),c=a.length;if(c!==u.length)return!1;o=o||null;for(var p=Object.prototype.hasOwnProperty.bind(e),l=0;l<c;l++){var f=a[l];if(!p(f))return!1;var s=t[f],y=e[f],d=r?r.call(o,s,y,f):void 0;if(d===!1||void 0===d&&s!==y)return!1}return!0}},947:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.pageQuery=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(2),a=n(i),u=r(3),c=n(u),p=r(66),l=n(p),f=r(65),s=n(f),y=r(272),d=n(y),T=r(17),E=n(T),A=r(67),b=r(317),g=n(b),h=r(32),m=n(h),S=r(1640),v=function(t){var e;return{tagsList:{lineHeight:"1.25em",width:"100%",margin:"0 auto",listStyleType:"decimal","& li":(e={cursor:"pointer",width:"90%",lineHeight:"1.75em",fontSize:"1.05em",marginBottom:"10px","&:hover span":{cursor:"pointer",backgroundColor:"#33333380",borderRadius:"10%"},"& span":{alignItems:"center",display:"flex",justifyContent:"center",cursor:"pointer",transition:"all 0.25s ease-in",backgroundColor:"#578c1811",color:"#578c18",height:"28px",minWidth:"132px",fontWeight:400,fontSize:"12.5px",borderRadius:"2%",margin:"6px",padding:"0 6px"},"& label":{lineHeight:"1.28em"},"& a":{lineHeight:"1.2em",transition:"all 0.25s ease-in",cursor:"pointer",color:t.navigator.colors.postsListItemLink,textDecoration:"underline",minHeight:"28px",width:"100%",display:"flex",justifyContent:"space-between",margin:"2px 0","& :hover":{cursor:"pointer",color:t.navigator.colors.postsListItemLinkHover}}},e["@media (min-width: "+t.mediaQueryTresholds.M+"px)"]={width:"100%"},e["@media (min-width: "+t.mediaQueryTresholds.L+"px)"]={width:"95%"},e)},headerLink:{width:"100%","& a":{width:"100%",margin:"0 auto",textAlign:"center",display:"inline-block",textDecoration:"underline",color:t.navigator.colors.postsListItemLink,"&:visited":{color:t.navigator.colors.postsListItemLink},"&:hover":{color:t.navigator.colors.postsListItemLinkHover,textDecoration:"underline"}}}}},P=function(t){var e=t.node;return o({},e.fields,e.frontmatter)},O=function(t){var e=(t.allTags,t.pathContext),r=t.data,n=t.classes,o=e.tagName,i=r.allMarkdownRemark||{edges:[],totalCount:-1},u=i.edges,c=(i.totalCount,u.map(P));return a.default.createElement(l.default,null,a.default.createElement(S.Helmet,{title:"DanLevy.net - Explore posts by tag"}),a.default.createElement(s.default,null,a.default.createElement(d.default,{title:"Tags Browser",subTitle:"Tag: "+o}),c&&a.default.createElement("ul",{className:n.tagsList},c.map(function(t){var e=t.slug.trim("/"),r=(0,g.default)(new Date,new Date(t.date)),n=(0,g.default)(new Date,new Date(t.modified||t.date));return a.default.createElement("li",{key:t.slug},a.default.createElement(m.default,{to:"/"+(0,A.slugify)(e)+"/"},a.default.createElement("label",{title:t.subTitle},t.title),a.default.createElement("span",{title:"Created "+r+" ago\nLast Modified "+n+" ago"},n," ago")))})),a.default.createElement("h3",{className:n.headerLink},a.default.createElement(m.default,{to:"/tags/"},"Back / View All Tags")),a.default.createElement("br",null),a.default.createElement("br",null)))};O.propTypes={classes:c.default.object.isRequired,pathContext:c.default.shape({tagName:c.default.string,tag:c.default.string.isRequired}),data:c.default.shape({allMarkdownRemark:c.default.shape({totalCount:c.default.number.isRequired,edges:c.default.arrayOf(c.default.shape({node:c.default.shape({frontmatter:c.default.shape({slug:c.default.string.isRequired,title:c.default.string.isRequired})})}).isRequired)})})},e.default=(0,E.default)(v)(O);e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tags-js-2089592927ee30e2abcc.js.map