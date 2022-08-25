webpackJsonp([0xefeaa6d1881d],{1107:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict";function e(t,r){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,r)}function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function n(r,o,i){return n=t()?Reflect.construct:function(t,r,n){var o=[null];o.push.apply(o,r);var i=Function.bind.apply(t,o),a=new i;return n&&e(a,n.prototype),a},n.apply(null,arguments)}function o(e,t){var r=this;return this instanceof o?("object"==typeof e&&(t=e,e.message&&(e=e.message)),Error.call(this,e),"object"==typeof t&&Object.getOwnPropertyNames(t).forEach(function(e){r[e]=t[e]}),this.name=this.constructor.name,void Error.captureStackTrace(this)):n(o,Array.prototype.slice.call(arguments))}function i(){return this instanceof i?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(i,Array.prototype.slice.call(arguments))}function a(){return this instanceof a?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(a,Array.prototype.slice.call(arguments))}function s(){return this instanceof s?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(s,Array.prototype.slice.call(arguments))}function c(){return this instanceof c?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(c,Array.prototype.slice.call(arguments))}function l(){return this instanceof l?void o.call.apply(o,[this].concat(Array.prototype.slice.call(arguments))):n(l,Array.prototype.slice.call(arguments))}function u(e){function t(){var t=e.resolve();return t.steps=[],t}function r(){var t=this;return function(r){if(!t.steps||t.steps.length<=0)throw new s("No steps defined between .chain() & .chainEnd()");var n=0,o=e.unpack(),i=o.promise,a=o.resolve;for(o.reject;n<t.steps.length;){var c,l=t.steps[n],u=l[0],p=l[2];i=(c=i)[u].apply(c,p),n++}return a(r),i}}return{chain:t,chainEnd:r}}function p(e){function t(e){return n.call(this,e).then(function(e){var t=e.item;return t})}function r(e){return n.call(this,e).then(function(e){var t=e.index;return t})}function n(t,r){return this.steps?this.addStep("_find",Array.prototype.slice.call(arguments)):("function"==typeof t&&(r=t,t=this._FP.promise),e.resolve(t).filter(r).then(function(e){return void 0!=e[0]?{item:e[0],index:e.indexOf(e[0])}:{item:void 0,index:-1}}))}function i(t,r){return this.steps?this.addStep("flatMap",Array.prototype.slice.call(arguments)):("function"==typeof t&&(r=t,t=this._FP.promise),e.resolve(t).map(r).reduce(function(e,t){return e.concat.apply(e,t)},[]))}function a(e,t){return this.steps?this.addStep("filter",Array.prototype.slice.call(arguments)):("function"==typeof e&&(t=e,e=this._FP.promise),c.call(this,e,function(e,r){return Promise.resolve(t(r)).then(function(t){return t?e.concat([r]):e})},[]))}function c(t,r,n){return this.steps?this.addStep("reduce",Array.prototype.slice.call(arguments)):("function"==typeof t?(n=r,r=t,t=this._FP?this._FP.promise:this):t=e.resolve(t,this),new e(function(e,o){return t.then(function(t){var i=t[Symbol.iterator](),a=0,s=function t(n){var s=i.next();return s.done?e(n):void Promise.all([n,s.value]).then(function(e){var n=e[0],o=e[1];return t(r(n,o,a++))}).catch(o)};s(n)})}))}function l(t,r,n){var i=this;if(this.steps)return this.addStep("map",Array.prototype.slice.call(arguments));1===arguments.length&&this&&this._FP&&(r=t,t=this&&this._FP&&this._FP.promise);var a=!1,c=Math.max(1,Math.min(this&&this._FP&&this._FP.concurrencyLimit||1,4)),l=this&&this._FP&&this._FP.promise?this._FP.promise:Promise.resolve(t),u=0,p=[],f=0,d=[],h=new Set,m=function(){return h.size>=c},y=function(){return p.length>i._FP.errors.limit||f>=t.length||a},g=function(e){return function(t){return h.delete(e),d[e]=t,t}};return e.resolve(new Promise(function(e,n){var v=function(t){return a?null:(a=!0,void e(t))},b=function(e){return a?null:(a=!0,void n(e))};l.then(function(e){if(t=[].concat(e),!E(e))return n(new s("Invalid input data passed into FP.map()"));for(var l=function(){var e=null;return p.length>i._FP.errors.limit&&(e=b),y()&&(e=v),!!e&&(Promise.all(d).then(function(t){return e(d)}),!0)},w=function(e){if(!a)return l()||d[f]||S(f),e},S=function e(n){return a?null:(f++,m()?setTimeout(function(){return e(n)},0):d[n]?d[n]:(h.add(n),d[n]=Promise.resolve(t[n]).then(function(e){return r(e,n,t)}).then(function(e){return g(n)(e)}).then(w).catch(function(e){if(i._FP.errors.count++,p.push(e),!(p.length>i._FP.errors.limit))return Promise.resolve().then(function(){return g(n)(e)}).then(w);var t=1===p.length?e:new o("Error Limit "+i._FP.errors.limit+" Exceeded.\n                idx="+n+" errCnt="+i._FP.errors.count,{errors:p,results:d,ctx:i});Promise.resolve(g(n)(e)).then(function(){return b(t)})}),d[n]))};u<c&&u<t.length;)S(u++)})}))}return{map:l,find:t,findIndex:r,filter:a,flatMap:i,reduce:c}}function f(e){function t(e,t,r){return this.steps?this.addStep("thenIf",Array.prototype.slice.call(arguments)):(1===arguments.length&&(t=e,e=function(e){return e}),P(this)?this.then(function(o){return n(e,t,r)(o)}):n(e,t,r))}function r(e,t,r){return this.steps?this.addStep("tapIf",Array.prototype.slice.call(arguments)):(1===arguments.length&&(t=e,e=function(e){return e}),P(this)?this.then(function(o){return n(e,t,r,!0)(o)}):n(e,t,r,!0))}function n(t,r,n,o){return void 0===t&&(t=function(e){return e}),void 0===r&&(r=function(e){return e}),void 0===n&&(n=function(){return null}),void 0===o&&(o=!1),function(i){return e.resolve(t(i)).then(function(e){return e?r(i):n(i)}).then(function(e){return o?i:e})}}return{tapIf:r,thenIf:t,_thenIf:n}}function d(e){function t(t){return e.resolve(Array.isArray(t)?Promise.all(t):r(t))}function r(e){var t=Object.getOwnPropertyNames(e),r=t.map(function(t){return e[t]});return Promise.all(r).then(function(e){return e.reduce(function(e,r,n){var o,i=t[n];return Object.assign((o={},o[i]=r,o),e)},{})})}function n(e){if(e instanceof Error)return this&&(this._error=e),Promise.reject(e);throw new Error("Reject only accepts a new instance of Error!")}function o(t){if(!Number.isInteger(t))throw new s("FP.delay(millisec) requires a numeric arg.");return function(r){return new e(function(e){setTimeout(function(){return e(r)},t)})}}function i(t){return this.steps?this.addStep("delay",Array.prototype.slice.call(arguments)):this&&this._FP?e.resolve(this.then(o(t))):o(t)()}return{all:t,reject:n,delay:i,_delay:o}}function h(e){return new v(function(t,r){return e&&A(e.then)?e.then(t).catch(r):void t(e)})}function m(e){var t=this;return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return new v(function(r,o){return e.call.apply(e,[t].concat(n,[function(e,t){return e?o(e):r(t)}]))})}}function y(e){if(!e||!Object.getPrototypeOf(e))throw new Error("Invalid Argument obj in promisifyAll(obj)");return Object.getOwnPropertyNames(e).filter(function(t){return"function"==typeof e[t]}).reduce(function(e,t){return/Sync/.test(t)||e[t+"Async"]||(e[t+"Async"]=v.promisify(e[""+t])),e},e)}function g(){var e,t,r=new v(function(r,n){e=r,t=n});return{promise:r,resolve:e,reject:t}}function v(e){if(!(this instanceof v))return new v(e);if(1!==arguments.length)throw new Error("FunctionalPromises constructor only accepts 1 callback argument");this._FP={errors:{limit:0,count:0},promise:new Promise(e),concurrencyLimit:4}}var b=r(62),w=b.inherits;w(o,Error),w(i,o),w(a,o),w(s,o),w(c,o),w(l,o);var S={isPromiseLike:function(e){return!(!e||"function"!=typeof e.then)},isFunction:function(e){return"function"==typeof e},isEnumerable:function(e){return e&&Array.isArray(e)||"function"==typeof e[Symbol.iterator]},isObject:function(e){return"[object Object]"===!!Object.prototype.toString.call(e)},flatten:function(e){if(!Array.isArray(e))throw new Error("Method `flatten` requires valid array parameter");return e.reduce(function(e,t){return e.concat(Array.isArray(t)?S.flatten(t):[t])},[])}},E=S.isEnumerable,x=function(e){for(var t=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];if("string"==typeof n&&(n=[n]),!e[e.addEventListener?"addEventListener":"on"])throw new s("Valid EventEmitter required.");var i=this.chainEnd();return this._FP.destroy=function(){return t._FP.destroyHandles.map(function(e){return e()||!0}).filter(function(e){return e}).length},this._FP.destroyHandles=n.map(function(t){return e[e.addEventListener?"addEventListener":"on"](t,i),function(){return e[e.removeEventListener?"removeEventListener":"off"](t,i)}}),this},P=S.isPromiseLike,A=S.isFunction,_=S.flatten,k=p(v),j=k.map,I=k.find,N=k.findIndex,D=k.filter,F=k.flatMap,M=k.reduce,O=d(v),R=O.all,L=O.reject,T=O.delay,C=O._delay,H=f(v),z=H.tapIf,J=H.thenIf,B=H._thenIf,q=u(v),V=q.chain,W=q.chainEnd;return v.prototype.all=R,v.prototype.map=j,v.prototype.find=I,v.prototype.findIndex=N,v.prototype.filter=D,v.prototype.flatMap=F,v.prototype.reduce=M,v.prototype.listen=x,v.prototype.tapIf=z,v.prototype.thenIf=J,v.prototype._thenIf=B,v.prototype.delay=T,v.prototype._delay=C,v.prototype.reject=L,v.all=v.prototype.all,v.thenIf=v.prototype._thenIf,v.delay=function(e){return v.resolve().delay(e)},v.silent=function(e){return v.resolve().silent(e)},v.chain=V,v.prototype.chainEnd=W,v.reject=v.prototype.reject,v.resolve=h,v.promisify=m,v.promisifyAll=y,v.unpack=g,v.prototype.addStep=function(e,t){return this.steps&&this.steps.push([e,this,t]),this},v.prototype.concurrency=function(e){return void 0===e&&(e=1/0),this.steps?this.addStep("concurrency",Array.prototype.slice.call(arguments)):(this._FP.concurrencyLimit=e,this)},v.prototype.quiet=function(e){return void 0===e&&(e=1/0),this.steps?this.addStep("quiet",Array.prototype.slice.call(arguments)):(this._FP.errors={count:0,limit:e},this)},v.prototype.silent=v.prototype.quiet,v.get=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t=_(t);var n=t.filter(function(e){return"string"==typeof e}),o=t.find(function(e){return"string"!=typeof e});return o?1===n.length?o[n[0]]:n.reduce(function(e,t){return e[t]=o[t],e},{}):function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return v.get.apply(v,r.concat(t))}},v.prototype.get=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.steps?this.addStep("get",Array.prototype.slice.call(arguments)):this.then?this.then(v.get(t)):v.get.apply(v,t)},v.prototype.set=function(e,t){return this.steps?this.addStep("set",Array.prototype.slice.call(arguments)):this.then(function(r){return"object"==typeof r&&(r[e]=t),r})},v.prototype.catch=function(e){if(this.steps)return this.addStep("catch",Array.prototype.slice.call(arguments));if(2===arguments.length)return this.catchIf.apply(this,arguments);if(!A(e))throw new o("Invalid fn argument for `.catch(fn)`. Must be a function. Currently: "+typeof e);return v.resolve(this._FP.promise.catch(function(t){return e(t)}))},v.prototype.catchIf=function(e,t){if(this.steps)return this.addStep("catchIf",Array.prototype.slice.call(arguments));if(!A(t))throw new o("Invalid fn argument for `.catchIf(condition, fn)`. Must be a function. Currently: "+typeof t);return v.resolve(this._FP.promise.catch(function(r){if(e&&r instanceof e)return t(r);throw r}))},v.prototype.then=function(e){if(this.steps)return this.addStep("then",Array.prototype.slice.call(arguments));if(!A(e))throw new o("Invalid fn argument for `.then(fn)`. Must be a function. Currently: "+typeof e);return v.resolve(this._FP.promise.then(e))},v.prototype.tap=function(e){if(this.steps)return this.addStep("tap",Array.prototype.slice.call(arguments));if(!A(e))throw new o("Invalid fn argument for `.tap(fn)`. Must be a function. Currently: "+typeof e);return v.resolve(this._FP.promise.then(function(t){return e(t)?t:t}))},v})},938:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=r(2),l=n(c),u=r(3),p=n(u),f=r(17),d=n(f),h=r(32),m=r(1107),y=n(m),g=r(66),v=n(g),b=r(65),w=n(b),S=r(144),E=n(S),x=r(199),P=n(x),A=r(944),_=new Intl.NumberFormat,k=function(e){return{tableOfContents:{"& li":{margin:0}},autobiography:{"& p":{textIndent:"2.5em"}},card:{borderBottom:"1px solid rgb(225, 228, 232)",padding:"1em 0.25em","& .description":{color:"rgba(0, 0, 0, 0.6)",fontSize:"0.9em",fontWeight:"400",paddingTop:"0.5em"},"& .contributions":{margin:"0.74em 0 0 0"},"& blockquote":{color:"rgba(0, 0, 0, 0.6)",fontSize:"0.9em",fontStyle:"italic",fontWeight:"300",margin:"1.4em",marginBottom:"0.7em"},"& .reference":{border:"5px dashed red"},"& .octicon-repo":{marginRight:"4px",transform:"scale(1.4, 1.4)"},"& .octicon":{color:"#959da5",opacity:"0.60",verticalAlign:"middle",marginTop:"-1px",display:"inline-block"},"& .ico":{color:"#959da5",opacity:"0.60",verticalAlign:"middle",marginTop:"-1px",display:"inline-block"}},repoTitle:{color:"#586069",margin:"0.3em 0",fontSize:"18px","& .repo-link":{color:"#0366d6",fontWeight:"600"},"& .user-link":{color:"#0366d6",fontWeight:"400"},"& .toc-link":{color:"#555555",width:"100%",display:"inline-block"},"& .toc-link::after":{content:"  view details",color:"#555555"}},buttonBar:{display:"flex",flexDirection:"row",maxWidth:"690px","& i":{flexGrow:"0",minWidth:"18px",alignSelf:"center"},"& .path-title":{flexGrow:"1",width:"235px"},"& .button-bar":{alignSelf:"center"}},starBox:{alignContent:"space-between",display:"flex",justifyContent:"stretch",maxHeight:"28px","& span":{backgroundColor:"#fff",border:"1px solid rgba(27,31,35,.2)",borderBottomRightRadius:"3px",borderLeft:"0",borderTopRightRadius:"3px",color:"#24292e",fontSize:"12px",fontWeight:"600",lineHeight:"21px",padding:"3px 10px",verticalAlign:"middle"},"& label":{backgroundColor:"#eff3f6",backgroundImage:"linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",backgroundPosition:"-1px -1px",backgroundRepeat:"repeat-x",backgroundSize:"110% 110%",border:"1px solid rgba(27,31,35,.2)",borderBottomLeftRadius:".25em",borderTopLeftRadius:".25em",color:"#24292e",display:"inline-block",fontSize:"12px",fontWeight:"600",lineHeight:"14px",padding:"6px 10px",position:"relative",userSelect:"none",verticalAlign:"middle",whiteSpace:"nowrap"}}}},j=function(e){function t(){var r,n,a;o(this,t);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return r=n=i(this,e.call.apply(e,[this].concat(u))),n.state={projectStars:{}},n.loadProjectData=function(e){if(e)return y.default.resolve(e).concurrency(2).map(function(e){var t=e.user+"-"+e.repo,r=e.renamed?e.renamed:e;return(0,A.getStargazers)(s({},r,{targetId:t})).then(function(e){var r;n.setState((r={},r[t]=e,r))}).catch(function(e){throw console.error("Error:",e),e})}).catch(function(e){console.error("Failed to get current Github Stats:",e),n.setState({error:e.message})})},n.buildProjectList=function(e){var t=n.props.classes;return e?e.map(function(e){var r=e.user+"-"+e.repo;return l.default.createElement("div",{className:["card",t.card].join(" "),key:r,id:r},l.default.createElement("div",{className:t.buttonBar},l.default.createElement("i",{className:"ico"},A.Icons.repo),l.default.createElement("div",{className:["path-title",t.repoTitle].join(" ")},l.default.createElement("a",{target:"_blank",className:"user-link",href:"https://github.com/"+e.user},e.user)," / ",l.default.createElement("label",{className:"repo-link"},l.default.createElement("a",{target:"_blank",className:"repo-link",href:"https://github.com/"+e.user+"/"+e.repo},e.repo))),l.default.createElement("div",{className:"button-bar",id:r},void 0!=n.state[r]?n.getStarButton(n.state[r]):l.default.createElement("span",{className:"loading"},"Loading..."))),l.default.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:e.description}}),l.default.createElement("div",{className:"contributions"},l.default.createElement("blockquote",{dangerouslySetInnerHTML:{__html:e.contribution}})))}):l.default.createElement("h2",{className:"warning text-center"},"WARNING: No projects configured!")},n.getProjectToC=function(e){if(!e)return null;var t=n.props.classes,r=e.map(function(e){var r=e.user+"-"+e.repo;return l.default.createElement("li",{className:["path-title",t.repoTitle].join(" "),key:r},l.default.createElement("a",{href:"#"+r,className:"toc-link"},l.default.createElement("span",{className:"user-link"},e.user)," / ",l.default.createElement("span",{className:"repo-link"},e.repo)))});return l.default.createElement("ol",{className:t.tableOfContents},r)},a=r,i(n,a)}return a(t,e),t.prototype.componentDidMount=function(){this.loadProjectData(I)},t.prototype.getStarButton=function(e){return l.default.createElement("div",{className:this.props.classes.starBox},l.default.createElement("label",null,A.Icons.star," Star"),l.default.createElement("span",null,_.format(e)))},t.prototype.render=function(){return l.default.createElement(v.default,null,l.default.createElement(w.default,null,l.default.createElement(E.default,{title:"About Dan"}),l.default.createElement(P.default,null,l.default.createElement("div",{className:this.props.classes.autobiography},l.default.createElement("p",null,"Dan is an accomplished programmer, teacher, mentor, and leader. He has over 15 years of extensive professional software development experience. Including consulting, Agile team building, architectural leadership, security audits, accessibility reviews and UI/UX analysis. At both startups and big companies."),l.default.createElement("p",null,"After years of study and research in software patterns and architecture, Dan has become a highly sought-out subject matter expert. Additionally, Dan's talks have earned him a reputation as an incisive, thought-provoking and motivating public speaker."),l.default.createElement("p",null,"As an active contributor to numerous Open Source projects, Dan has established himself as a dynamic problem solver, constantly seeking personal growth and always learning. Dan pulls from his deep bench of experience to gain a better understanding of any challenge. He closely follows changes across a broad Technology landscape: learning new languages, methodologies, patterns, and adapting to different code styles."),l.default.createElement("div",{className:"text-center"},l.default.createElement("br",null),l.default.createElement("a",{href:""+(0,h.withPrefix)("/resume-dan-levy-2021.pdf")},l.default.createElement("b",null,"Download Dan's Resume")),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("a",{href:"/about/talks/"},l.default.createElement("b",null,"View Talks & Videos")))),l.default.createElement("div",null,l.default.createElement("h2",null,"Open Source Contributions"),l.default.createElement("h3",{id:"oss-toc"},"List of Contributions"),this.getProjectToC(I),l.default.createElement("h3",null,"Contribution Details"),this.buildProjectList(I)))))},t}(l.default.Component);j.propTypes={classes:p.default.object.isRequired},t.default=(0,d.default)(k)(j);var I=[{user:"ReactTraining",repo:"react-router",description:"React Router is an extremely popular routing solution for React. It features a collection of navigational components that work flexibly with your application.",contribution:'Dan helped improve the official documentation website. Some notable work improved the home page, initial examples, and overall navigation design. "A lot of people are going to benefit from the improvements you\'re making." - project co-creator Michael Jackson.'},{user:"docker",repo:"docker",renamed:{user:"moby",repo:"moby"},description:"Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.",contribution:'Dan found and fixed a Debian OS detection issue in the install script. (Much thanks goes to Jessie Frazelle and several other wonderful contributors. ❤️)\n    Dan was added as a "Docker Mentor" and can often be found helping at local meetups.'},{user:"nodejs",repo:"node",description:"NodeJS is the wildly successful framework which helped JavaScript venture beyond the browser to become the most ubiquitous programming language.",contribution:"Dan added helpful contextual links to parts of the official website. Dan also worked closely with relevant stakeholders at both TC39 and the NodeJS foundation to provide input & support on several signifigant features added to JavaScript. Notably these include ES6 Classes, Promises, Async/Await, and the URL parser."},{user:"mdn",repo:"interactive-examples",description:"Mozilla Development Network is relied on by millions of developers. It has become the de-facto standard source for technical details on JavaScript, HTML, the DOM, and other browser features.",contribution:"Added clarifications and examples across Promise, Fetch and Array documentation pages."},{user:"lord",repo:"slate",description:"Slate is a tool to generate modern documentation for libraries, SDKs, and APIs.",contribution:"Fixed an issue around securely encoding HTML. Currently slate is used to <a href='https://fpromises.io' target='_blank'>document Dan's Functional Promises library at https://fpromises.io</a>"},{user:"gatsbyjs",repo:"gatsby",description:"Gatsby is a modern Static Site Generator for blazing fast websites.",contribution:"Fixed error handling in one of the built-in plugins. Dan's also a member of their GitHub team. 💖"},{user:"gruntjs",repo:"grunt",description:"Grunt is one of the most successful build tools in the NodeJS ecosystem.",contribution:"Dan worked with Dave Methvin to improve the user experience around the console output & 3rd party tools."},{user:"nodejitsu",repo:"node-http-proxy",description:"Nodejitsu's popular HTTP Proxy library is used in 100's of libraries on NPM.",contribution:"Nodejitsu's founder, Charlie Robbins, worked with Dan (and others) addressing documentation omissions."},{user:"lodash",repo:"lodash",description:"A modern JavaScript utility library delivering modularity, performance, & extras. Lodash is one of the most successful JavaScript libraries ever. It's enjoyed several years at #1 on the 'Top 10' most depended on libraries NPM ranking.",contribution:"Extended ArrayBuffer support, in collaboration with John David-Dalton."},{user:"Automattic",repo:"mongoose",description:"Mongoose is one of the most popular Object Data Model libraries for MongoDB.",contribution:"Working with project leaders, Dan used github.com to discuss and identify desired API specification for extending the base classes Model and Query. He worked with Valeri Karpov (from MongoDB) and others."},{user:"petkaantonov",repo:"bluebird",description:"Bluebird is a very common Promise-enhancement library. It's also one of the 'Top 10' most depended on libraries.",contribution:"Dan has submitted several PRs over the years, and is a huge fan of this popular library. It was the inspiration behind <a href='https://fpromises.io' target='_blank'>functional-promises.</a>"},{user:"rancher",repo:"rancher",description:"Rancher is a powerful Docker administration platform.",contribution:"Aided in the resolution of a number of issues, touching on storage, upgrades and scaling."},{user:"jsonresume",repo:"resume-cli",description:"Resume CLI is the command line tool for JSON Resume, the open source initiative to create a JSON-based standard for resumes.",contribution:"Dan aided in simplifying command line options & enhancing documentation."},{user:"camwiegert",repo:"in-view",description:"In-view is a widely used library for reliable DOM position information across many mobile and desktop platforms/browsers.",contribution:"Submitted code to aid in resolving edge issues with the Safari browser."},{user:"metagrover",repo:"ES6-for-humans",description:"ES6 for Humans is a welcoming tour of new JavaScript features. This book is published by Apress and available on Amazon and other bookstores.",contribution:"Improved Promises section. Added examples for Spread and Rest operations."}];e.exports=t.default},943:function(e,t){"use strict";function r(e){if(!e)throw new Error("CacheFactory requires a session/local storage provider.");return{get:function(t){return!!e.getItem(t)&&JSON.parse(e.getItem(t))},set:function(t,r){var n=t+"_"+(new Date).toISOString();return e.setItem(t,JSON.stringify(r)),e.setItem(n,JSON.stringify((new Date).toISOString())),r},getCacheSetter:function(e){var t=this;return function(r){return t.set(e,r)}}}}t.__esModule=!0,t.default=r,e.exports=t.default},944:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.repo,r=e.user;u=u||(0,l.default)(window&&window.sessionStorage);var n=r+"/"+t;return u.get(n)?Promise.resolve(u.get(n)):fetch("https://api.github.com/repos/"+r+"/"+t).then(p).then(function(e){return e.json()}).then(u.getCacheSetter(n))}function i(e){var t=e.repo,r=e.user;return o({repo:t,user:r}).then(function(e){return e.stargazers_count})}t.__esModule=!0,t.Icons=void 0,t.getRepoData=o,t.getStargazers=i;var a=r(2),s=n(a),c=r(943),l=n(c),u=null,p=function(e){return!e.ok||e.status>250?Promise.reject(new Promise("Invalid Response from Service!")):e};t.Icons={star:s.default.createElement("svg",{className:"octicon octicon-star v-align-text-bottom",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},s.default.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),repo:s.default.createElement("svg",{className:"octicon octicon-repo",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},s.default.createElement("path",{fillRule:"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}))}}});
//# sourceMappingURL=component---src-pages-about-js-d0058f4d71ce8f0abffc.js.map