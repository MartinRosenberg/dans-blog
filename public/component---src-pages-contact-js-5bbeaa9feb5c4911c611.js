webpackJsonp([70144966829960],{570:function(e,t){"use strict";var r=function(e){return null!==e&&void 0!==e},n=function(e){return""===e||void 0===e||null==e},o=function(e){return"string"!=typeof e||""===e.trim()},a={matchRegexp:function(e,t){var o=t instanceof RegExp?t:new RegExp(t);return!r(e)||n(e)||o.test(e)},isEmail:function(e){return a.matchRegexp(e,/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i)},isEmpty:function(e){return n(e)},required:function(e){return!n(e)},trim:function(e){return!o(e)},isNumber:function(e){return a.matchRegexp(e,/^-?[0-9]\d*(\d+)?$/i)},isFloat:function(e){return a.matchRegexp(e,/^(?:[1-9]\d*|0)?(?:\.\d+)?$/i)},isPositive:function(e){return!r(e)||(a.isNumber(e)||a.isFloat(e))&&e>=0},maxNumber:function(e,t){return!r(e)||n(e)||parseInt(e,10)<=parseInt(t,10)},minNumber:function(e,t){return!r(e)||n(e)||parseInt(e,10)>=parseInt(t,10)},isString:function(e){return!n(e)||"string"==typeof e||e instanceof String},minStringLength:function(e,t){return a.isString(e)&&e.length>=t},maxStringLength:function(e,t){return a.isString(e)&&e.length<=t}};e.exports=a},1650:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),c=n(s),f=r(3),d=n(f),p=r(369),h=r(571),m=n(h),b=r(1651),v=function(e){function t(){var e,r,n,i;o(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={isValid:!0,value:n.props.value,errorMessages:n.props.errorMessages,validators:n.props.validators},n.getErrorMessage=function(){var e=n.state.errorMessages,t="undefined"==typeof e?"undefined":u(e);return"string"===t?e:"object"===t&&n.invalid.length>0?e[n.invalid[0]]:(console.log("unknown errorMessages type",e),!0)},n.instantValidate=!0,n.invalid=[],n.configure=function(){if(!n.props.name)throw new Error("Form field requires a name property when used");n.context.form.attachToForm(n),n.instantValidate=n.context.form.instantValidate,n.debounceTime=n.context.form.debounceTime,n.validateDebounced=(0,b.debounce)(n.validate,n.debounceTime)},n.validate=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n.invalid=[];var o=[],a=!0;n.state.validators.map(function(r,n){var a={};return a[n]=m.default.getValidator(r,e,t),o.push(a)}),o.map(function(e){return Object.keys(e).map(function(t){return e[t]||(a=!1,n.invalid.push(t)),t})}),r||n.setState({isValid:a},function(){n.props.validatorListener(n.state.isValid)})},n.isValid=function(){return n.state.isValid},n.makeInvalid=function(){n.setState({isValid:!1})},n.makeValid=function(){n.setState({isValid:!0})},i=r,a(n,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.configure()}},{key:"shouldComponentUpdate",value:function(e,t){return this.state!==t||this.props!==e}},{key:"componentDidUpdate",value:function(e,t){this.instantValidate&&this.props.value!==t.value&&this.validateDebounced(this.props.value,this.props.withRequiredValidator)}},{key:"componentWillUnmount",value:function(){this.context.form.detachFromForm(this)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.validators&&e.errorMessages&&(t.validators!==e.validators||t.errorMessages!==e.errorMessages)?{value:e.value,validators:e.validators,errorMessages:e.errorMessages}:{value:e.value}}}]),t}(c.default.Component);v.contextTypes={form:d.default.object},v.propTypes={errorMessages:d.default.oneOfType([d.default.array,d.default.string]),validators:d.default.array,name:d.default.string,value:d.default.any,validatorListener:d.default.func,withRequiredValidator:d.default.bool},v.defaultProps={errorMessages:"error",validators:[],validatorListener:function(){}},(0,p.polyfill)(v),t.default=v},571:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=n(c),d=r(3),p=n(d),h=r(570),m=n(h),b=function(e){function t(){var e,r,n,o;a(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.getChildContext=function(){return{form:{attachToForm:n.attachToForm,detachFromForm:n.detachFromForm,instantValidate:n.instantValidate,debounceTime:n.debounceTime}}},n.instantValidate=void 0===n.props.instantValidate||n.props.instantValidate,n.debounceTime=n.props.debounceTime,n.childs=[],n.errors=[],n.attachToForm=function(e){n.childs.indexOf(e)===-1&&n.childs.push(e)},n.detachFromForm=function(e){var t=n.childs.indexOf(e);t!==-1&&(n.childs=n.childs.slice(0,t).concat(n.childs.slice(t+1)))},n.submit=function(e){e&&e.preventDefault(),n.errors=[];var t=n.walk(n.childs);return n.errors.length&&n.props.onError(n.errors),t&&n.props.onSubmit(e),!1},n.walk=function(e,t){var r=n,o=!0;return Array.isArray(e)?e.forEach(function(e){return r.checkInput(e,t)||(o=!1),e}):o=r.walk([e],t),o},n.checkInput=function(e,t){var r=!0,o=e.props.validators;return o&&!n.validate(e,!0,t)&&(r=!1),r},n.validate=function(e,t,r){var o=e.props,a=o.value,i=o.validators,u=o.name,l=[],s=!0,c=!1,f=n.find(n.childs,function(e){return e.props.name===u});return i.map(function(o){return c=n.constructor.getValidator(o,a,t),l.push({input:e,result:c}),f.validate(f.props.value,!0,r),o}),l.map(function(e){return e.result||(s=!1,n.errors.push(e.input)),e}),s},n.find=function(e,t){for(var r=0,n=e.length;r<n;r++){var o=e[r];if(t(o))return o}return null},n.resetValidations=function(){n.childs.map(function(e){return e.setState({isValid:!0})})},n.isFormValid=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return n.walk(n.childs,e)},o=r,i(n,o)}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.instantValidate,e.onError,e.debounceTime,e.children),r=o(e,["onSubmit","instantValidate","onError","debounceTime","children"]);return f.default.createElement("form",l({},r,{onSubmit:this.submit}),t)}}]),t}(f.default.Component);b.getValidator=function(e,t,r){var n=!0,o=e;if("required"!==o||r){var a=void 0,i=e.indexOf(":");i!==-1&&(o=e.substring(0,i),a=e.substring(i+1)),n=m.default[o](t,a)}return n},b.addValidationRule=function(e,t){m.default[e]=t},b.childContextTypes={form:p.default.object},b.propTypes={onSubmit:p.default.func.isRequired,instantValidate:p.default.bool,children:p.default.node,onError:p.default.func,debounceTime:p.default.number},b.defaultProps={onError:function(){},debounceTime:0},t.default=b},364:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(1650),a=n(o),i=r(571),u=n(i),l=r(570),s=n(l);t.ValidatorComponent=a.default,t.ValidatorForm=u.default,t.ValidationRules=s.default},1651:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,r){var n=void 0;return function(){for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];var u=this,l=function(){n=null,r||e.apply(u,a)},s=r&&!n;clearTimeout(n),n=setTimeout(l,t),s&&e.apply(u,a)}};t.debounce=r},1756:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=n(c),d=r(262),p=n(d),h=r(364),m=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.error,r=(e.errorMessages,e.validators,e.requiredError,e.helperText),n=(e.validatorListener,e.withRequiredValidator,o(e,["error","errorMessages","validators","requiredError","helperText","validatorListener","withRequiredValidator"])),a=this.state.isValid;return f.default.createElement(p.default,l({},n,{select:!0,error:!a||t,helperText:!a&&this.getErrorMessage()||r}))}}]),t}(h.ValidatorComponent);t.default=m},1757:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=n(c),d=r(262),p=n(d),h=r(364),m=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.error,r=(e.errorMessages,e.validators,e.requiredError,e.helperText),n=(e.validatorListener,e.withRequiredValidator,o(e,["error","errorMessages","validators","requiredError","helperText","validatorListener","withRequiredValidator"])),a=this.state.isValid;return f.default.createElement(p.default,l({},n,{error:!a||t,helperText:!a&&this.getErrorMessage()||r}))}}]),t}(h.ValidatorComponent);t.default=m},1758:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(364),a=r(1756),i=n(a),u=r(1757),l=n(u);t.SelectValidator=i.default,t.TextValidator=l.default,t.ValidatorComponent=o.ValidatorComponent,t.ValidatorForm=o.ValidatorForm},1759:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=n(c),d=r(3),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")},h=function(e,t,r,n,o){var a=void 0;return n?(a="mailto:"+n,o&&(a+="?"+p(o))):e?a="tel:"+e:t?a="sms:"+t:r&&(a="facetime:"+r),a},m=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={humanInteraction:!1},r}return u(t,e),s(t,[{key:"render",value:function(){return this.props.obfuscate?this.renderObfuscatedLink():this.renderLink()}},{key:"renderLink",value:function(){var e=this.props,t=e.tel,r=e.sms,n=e.facetime,a=e.email,i=(e.obfuscate,e.headers),u=e.children,s=o(e,["tel","sms","facetime","email","obfuscate","headers","children"]);return f.default.createElement("a",l({href:h(t,r,n,a,i)},s),u||t||r||n||a)}},{key:"reverse",value:function(e){return e.split("").reverse().join("")}},{key:"renderObfuscatedLink",value:function(){var e=this,t=this.props,r=t.tel,n=t.sms,a=t.facetime,i=t.email,u=(t.obfuscate,t.headers,t.children),s=t.style,c=t.linkText,d=o(t,["tel","sms","facetime","email","obfuscate","headers","children","style","linkText"]),p=this.state.humanInteraction===!0||u?l({},s||{},{unicodeBidi:"bidi-override",direction:"ltr"}):l({},s||{},{unicodeBidi:"bidi-override",direction:"rtl"}),h=function(t){return e.state.humanInteraction===!0?u||r||n||a||i:u||e.reverse(r||n||a||i).replace("(",")").replace(")","(")};return f.default.createElement("a",l({onClick:this.handleClick.bind(this),onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this),href:c||"obfuscated"},d,{style:p}),h())}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,r=t.tel,n=t.sms,o=t.facetime,a=t.email,i=t.headers;window.location.href=h(r,n,o,a,i)}},{key:"handleCopiability",value:function(){this.setState(function(e){return l({},e,{humanInteraction:!0})})}}]),t}(c.Component);m.propTypes={children:d.node,tel:d.string,sms:d.string,facetime:d.string,email:d.string,headers:d.object,obfuscate:d.bool,style:d.object,linkText:d.string},m.defaultProps={obfuscate:!0},t.default=m},895:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(2),c=n(s),f=r(3),d=n(f),p=r(17),h=n(p),m=r(86),b=n(m),v=r(32),y=r(1758),g=r(67),F=function(e){var t;return{submit:{margin:"1.5em 0",display:"inline-block"},recaptcha:{margin:"1.5em 0",display:"inline-block",width:"200px"},multilineInput:{lineHeight:1.4,fontSize:"1.2em"},singleLineInput:(t={lineHeight:1.4,fontSize:"1.2em"},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={width:"47%",marginLeft:"3%","&:first-child":{marginRight:"3%",marginLeft:0}},t),submitError:{background:"red",color:"white"},btnBox:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",width:"350px"}}},w=20,O=function(e){function t(){var r,n,i;o(this,t);for(var s=arguments.length,c=Array(s),f=0;f<s;f++)c[f]=arguments[f];return r=n=a(this,e.call.apply(e,[this].concat(c))),n.state={name:"",email:"",message:"",submitError:"",recaptchaToken:""},n.setupRecaptcha=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Promise.resolve();window.grecaptcha||(t=(0,g.injectJsByUrl)("https://www.google.com/recaptcha/api.js?render=explicit")),t.then(function(){return window.grecaptcha&&"function"==typeof window.grecaptcha.render?void window.grecaptcha.render(n._recaptcha,{sitekey:"6LeiiJAUAAAAABLlXbDQOBosXwU5d9me6FWZCQ2x",theme:"light",size:"compact",callback:function(e){n.setState({recaptchaToken:e})}}):(console.warn("WARN: Couldn't find `recaptcha`. [Retrying... %i]",e),e>w?console.error("CRITICAL: FAILED TO LOAD RECAPTCHA",window.grecaptcha):setTimeout(function(){return n.setupRecaptcha(e+1)},200))}).catch(console.error)},n.handleChange=function(e){var t,r=e.target,o=r.value,a=r.name;n.setState((t={},t[a]=o,t))},n.handleNetworkError=function(e){n.setState({submitError:"There was a network error."})},n.handleSubmit=function(e){return e.preventDefault(),n.state.recaptchaToken?fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:u(l({"form-name":"contact","g-recaptcha-response":n.state.recaptchaToken},n.state))}).then(function(e){if(e.status>299)throw new Error("Failed to send message. Please try again.");return e.text()}).then(function(e){(0,v.navigateTo)("/success")}).catch(function(e){console.error("Form submission error:",e),n.handleNetworkError()}):(console.warn("Error: No RECAPTCHA token"),n.setupRecaptcha(20))},i=r,a(n,i)}return i(t,e),t.prototype.componentDidMount=function(){this.setupRecaptcha()},t.prototype.render=function(){var e=this,t=this.props.classes,r=this.state,n=r.email,o=r.name,a=r.message,i=r.submitError;r.recaptchaToken;return c.default.createElement(y.ValidatorForm,{onSubmit:this.handleSubmit,onError:function(e){return console.log(e)},name:"contact",ref:function(t){return e.form=t},"data-netlify":"true","data-netlify-honeypot":"bot-field","data-netlify-recaptcha":"true"},i&&c.default.createElement("p",{className:t.submitError},i),c.default.createElement(y.TextValidator,{id:"name",name:"name",label:"Name",value:o,onChange:this.handleChange,validators:["required"],errorMessages:["this field is required"],fullWidth:!0,margin:"normal",className:t.singleLineInput}),c.default.createElement(y.TextValidator,{id:"email",name:"email",label:"E-mail",value:n,onChange:this.handleChange,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"],fullWidth:!0,margin:"normal",className:t.singleLineInput}),c.default.createElement(y.TextValidator,{id:"message",name:"message",label:"Message",value:a,onChange:this.handleChange,validators:["required"],errorMessages:["this field is required"],multiline:!0,fullWidth:!0,margin:"normal",className:t.multilineInput}),c.default.createElement("input",{name:"bot-field",style:{display:"none"}}),c.default.createElement("div",{className:t.btnBox},c.default.createElement(b.default,{variant:"contained",color:"primary",size:"large",type:"submit",className:t.submit},"Send"),c.default.createElement("div",{id:"recaptcha",className:t.recaptcha,ref:function(t){return e._recaptcha=t}})))},t}(c.default.PureComponent);O.propTypes={classes:d.default.object.isRequired},t.default=(0,h.default)(F)(O),e.exports=t.default},896:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(895);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}}),e.exports=t.default},940:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(2),a=n(o),i=r(3),u=n(i),l=r(17),s=n(l),c=r(1759),f=n(c),d=r(66),p=n(d),h=r(65),m=n(h),b=r(144),v=n(b),y=r(199),g=n(y),F=r(896),w=n(F),O=r(77),x=n(O),_=function(e){return{}},E=function(){return a.default.createElement(p.default,null,a.default.createElement(m.default,null,a.default.createElement(v.default,{title:"Contact Dan"}),a.default.createElement(g.default,null,"Feel free to contact me by email: ",a.default.createElement(f.default,{email:x.default.contactEmail})),a.default.createElement(w.default,null)))};E.propTypes={classes:u.default.object.isRequired},t.default=(0,s.default)(_)(E),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-5bbeaa9feb5c4911c611.js.map