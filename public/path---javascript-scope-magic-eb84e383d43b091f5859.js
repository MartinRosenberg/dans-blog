webpackJsonp([0xd3cc4d14c7fe],{1278:function(a,n){a.exports={data:{post:{id:"/Users/danlevy/code/oss/dans-blog/content/posts/2015-06-06--javascript-scope-magic/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="imperative-vs-recursive-vs-functional"><a href="#imperative-vs-recursive-vs-functional" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Imperative vs. Recursive vs. Functional</h1>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 150.0586166471278%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAYtIuoVkIMR04pQwht//xAAcEAEAAgIDAQAAAAAAAAAAAAABAhEAAxASMSL/2gAIAQEAAQUCHIe3EyLTp6TGr9zVMpsY/Kcf/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEBEi/9oACAEDAQE/Aak1hyf/xAAXEQADAQAAAAAAAAAAAAAAAAAAASEQ/9oACAECAQE/AXCb/8QAHhAAAgAGAwAAAAAAAAAAAAAAAAECEBEhQVEiMoH/2gAIAQEABj8CFguyo3F20cqPwsOHO5bn/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUXH/2gAIAQEAAT8hF4gsrE9sWoYyo8MyBprxFZRekjBn7MEroJfFEV2AThgrSIrzP//aAAwDAQACAAMAAAAQSwtw/8QAGxEBAAICAwAAAAAAAAAAAAAAAQARIUFhkeH/2gAIAQMBAT8QRSpXJ35B03KeWf/EABkRAAMAAwAAAAAAAAAAAAAAAAABERAhQf/aAAgBAgEBPxCd2TujduP/xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhQXExUWGB8f/aAAgBAQABPxAIoesNWgDSfuKSrdnk4yBFgvRuYzk1FaJx85r5GDpOPOJsut/TAMTlQmpu95RVj7xmqIcG8rpuTLxz/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image lazyload"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="credit: markus-spiske-197281-unsplash.jpg"\n        title=""\n        data-src="/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-ef7b7.jpg"\n        data-srcset="/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-c3db7.jpg 161w,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-e67ed.jpg 323w,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-ef7b7.jpg 645w,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-07a29.jpg 853w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<blockquote>\n<p>[ Work-in-progress ]</p>\n</blockquote>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// Imperative: The Fastest ( + very simple, no new pointers or excess allocs ):</span>\n<span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n    a <span class="token operator">=</span> b<span class="token punctuation">;</span>\n    b <span class="token operator">=</span> c<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Recursive: (FIREFOX or BABELJS Only) ES6 function definition with</span>\n<span class="token comment">//  parameter defaults used to set initial (internal/recursive) values</span>\n<span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> current<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  current<span class="token operator">++</span><span class="token punctuation">;</span>\n  c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n  a <span class="token operator">=</span> b<span class="token punctuation">;</span>\n  b <span class="token operator">=</span> c<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> current <span class="token operator">>=</span> n <span class="token operator">?</span> b <span class="token punctuation">:</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> current<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Text-book-Bad Example - poor function scope w/ multiple mutable external values</span>\n<span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> n<span class="token operator">=</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">// Bad</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">===</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> arr<span class="token punctuation">;</span><span class="token punctuation">}</span>\n  <span class="token keyword">var</span> <span class="token function-variable function">proc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">--</span>n<span class="token punctuation">;</span>\n    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>n<span class="token operator">===</span><span class="token number">0</span> <span class="token operator">?</span> arr <span class="token punctuation">:</span> <span class="token function">proc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Bad: inner recursive function not needed, hint: variables used are from parent function scope</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> ans <span class="token operator">=</span> <span class="token function">proc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> ans<span class="token punctuation">[</span>ans<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="promises-awesome"><a href="#promises-awesome" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promises: Awesome!</h1>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Example Using bluebird Promises and it\'s</span>\n<span class="token keyword">var</span> Promise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bluebird\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    fs <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">promisifyAll</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    less <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">promisifyAll</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'less\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">writeFileData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">writeFileAsync</span><span class="token punctuation">(</span><span class="token string">\'/tmp/output.css\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Bluebird makes something like this perhaps uncomfortably simple and succinct:</span>\nfs<span class="token punctuation">.</span><span class="token function">readFileAsync</span><span class="token punctuation">(</span><span class="token string">\'./style.less\'</span><span class="token punctuation">)</span> <span class="token comment">// Call promisified readFile()</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>less<span class="token punctuation">.</span>renderAsync<span class="token punctuation">)</span>         <span class="token comment">// Hand off to less.render</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>writeFileData<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// Function to recieve the css contents (1st parameter)</span></code></pre>\n      </div>\n<ol>\n<li>While, native ES6 Promises are great, I prefer the robust <a href="https://github.com/petkaantonov/bluebird/blob/master/API.md">Bluebird Promise Library</a>.</li>\n<li>Library or not, modern browsers have supported Promise for years.</li>\n<li>Promises can be utilized without crazy patterns - implicit <code class="language-text">deferred</code> is preferable.</li>\n<li><strong>$q just sucks</strong> just use bluebird, see above.</li>\n<li>Worth mentioning: Bluebirds Benchmarks are best-case tests, so take note if doing crazy fancy promise chains</li>\n</ol>\n<h1 id="java-vs-javascript"><a href="#java-vs-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Java vs JavaScript</h1>\n<h2 id="rate-limiting--debouncing--throttling"><a href="#rate-limiting--debouncing--throttling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rate Limiting / Debouncing / Throttling</h2>\n<ol>\n<li>In JavaScript <a href="http://davidwalsh.name/essential-javascript-functions">David Walsh implemented debounce</a> in less than 20 lines!</li>\n<li>In Java, JDebounce, an library which is a lot more complicated, at ~500+ lines.</li>\n<li>_ Comparing the two: _</li>\n<li>The JavaScript is fast &#x26; uses first-class functions to achieve brilliant simplicity.</li>\n<li>Whereas the Java has many more moving parts, annotations are used to apply behaviour at compile-time, and there’s a ton of XML, just for funsies!</li>\n</ol>\n<!--\n# Inversion of Control Techniques\n\nWork-in-progress\n-->',wordCount:{paragraphs:18,sentences:20,words:156},fields:{slug:"/javascript-scope-magic/",prefix:"2015-06-06"},frontmatter:{title:"JavaScript Magic",subTitle:null,category:"javascript",relativePath:"/content/posts/2015-06-06--javascript-scope-magic/index.md",tags:["javascript","programming","performance","patterns"],date:"2015-06-06T00:00:00.000Z",modified:"2015-09-24T00:00:00.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-bc901.jpg",srcSet:"/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-bc901.jpg 1x,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-39e82.jpg 1.5x,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-a8256.jpg 2x,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-ef5e1.jpg 3x",srcWebp:"/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-ec1cf.webp",srcSetWebp:"/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-ec1cf.webp 1x,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-c5012.webp 1.5x,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-6ab8f.webp 2x,\n/static/markus-spiske-197281-unsplash-100c90941235fffd119b8f6b522094d5-f9a43.webp 3x"}}}}},author:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:1},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:1},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"fails",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:1},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:3},{fieldValue:"ssd",totalCount:1},{fieldValue:"teams",totalCount:1},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/javascript-scope-magic/"}}}});
//# sourceMappingURL=path---javascript-scope-magic-eb84e383d43b091f5859.js.map