webpackJsonp([0xc0aa6120f7c2],{1282:function(e,a){e.exports={data:{post:{id:"/Users/danlevy/code/oss/dans-blog/content/posts/2016-06-01--naming-things-real-good/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="naming-stuff-object-oriented-basics"><a href="#naming-stuff-object-oriented-basics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Naming stuff: Object Oriented Basics</h1>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 130.54830287206266%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwX/2gAMAwEAAhADEAAAAbBwwt1zARcPRee8xEz/AP/EABwQAAIBBQEAAAAAAAAAAAAAAAECAAMQERITIf/aAAgBAQABBQLEpMdo3iow79I67KKJRhjAsZ//xAAaEQACAgMAAAAAAAAAAAAAAAABAgAQERIx/9oACAEDAQE/AVQ4mpgY8r//xAAaEQEAAgMBAAAAAAAAAAAAAAABAAIDEBET/9oACAECAQE/ATKJ2e9JWyGv/8QAGxAAAgIDAQAAAAAAAAAAAAAAABEBAhAgMXH/2gAIAQEABj8CJrZYZzCHMvw5p//EABwQAAICAwEBAAAAAAAAAAAAAAABETEhQWFRgf/aAAgBAQABPyFQRNTGkrGkep8Mw99DyotkdFh6ISCnCgyx/9oADAMBAAIAAwAAABAL3TH/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAQ/9oACAEDAQE/EGNnARDrv//EABoRAAICAwAAAAAAAAAAAAAAAAABEDERUbH/2gAIAQIBAT8QdFdC2dMKVR//xAAeEAEAAgMAAgMAAAAAAAAAAAABABEhMUFRYXGR0f/aAAgBAQABPxChoV4HYAEUKOvUsamerIhlVZ8xwQLYUUodlmn7lqG9g4x4+sgy/L+RibS1GSNpmaRPbP/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image lazyload"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="credit: rawpixel-652639-unsplash.jpg"\n        title=""\n        data-src="/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-ef7b7.jpg"\n        data-srcset="/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-c3db7.jpg 161w,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-e67ed.jpg 323w,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-ef7b7.jpg 645w,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-04582.jpg 968w,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-2d473.jpg 1290w,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-d2ee7.jpg 1935w,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-65ec4.jpg 2298w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Let’s look at Object/class design by example…</p>\n<h2 id="the-situation"><a href="#the-situation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Situation</h2>\n<p>Have you ever designed a <code class="language-text">data model</code> (in code, Sql, or excel worksheets)?\nDoes the following look familiar?</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">*** anti-pattern - don&#39;t copy-paste ***\n* User\n  - id\n  - avatarUrl\n  - name\n  - email\n  - password\n\n* Agent\n  - id\n  - primaryPhoto\n  - name\n  - email\n  - agentEmail\n  - agentPhoneMain\n  - agentEmailPrimary\n  - agentPhonePrimary\n  - agentAddressFull\n  - agentCompanyName\n  - agentCompanyAddress\n  - *userEmail* - &#39;Pointer&#39; to User table ^^^</code></pre>\n      </div>\n<h2 id="wheres-the-bug"><a href="#wheres-the-bug" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where’s the bug?</h2>\n<p>Well, technically there’s no bug, simply data in need of re-organization.</p>\n<p><strong>Does the following sound familiar?</strong></p>\n<ol>\n<li>Any change to your app will necessitate hours of arduous debugging.</li>\n<li>Any changing requirements will result in:</li>\n</ol>\n<p><img src="https://res.cloudinary.com/ddd/image/upload/bldg-collapse__wsZKhIc_kafcha.gif" alt="schema refactor"></p>\n<p>Why is naming a field <code class="language-text">agentEmailPrimary</code> <em>so bad</em>?</p>\n<p>For starters, you are <strong>not</strong> creating an entirely new thing unto the universe. Over-specificity has some traps:</p>\n<ol>\n<li>‘Locked’ into highly specific name, means <code class="language-text">agentEmailPrimary</code> probably make your views and related code <strong>0% reusable</strong>, and featuring annoyingly recurring bugs like:</li>\n<li>Data not syncing between tables (not obvious if <code class="language-text">user.email</code> needs to propagate to <code class="language-text">agent.agentEmail</code> or vice-versa - nevermind complexity of manually implementing where &#x26; how to enforce this ‘logic’ …)</li>\n<li>Validation rules/logic are likely duplicated &#x26; inconsitent.</li>\n<li>Increasingly, your project will resemble a shaky Jenga tower.</li>\n<li>Fragility piles up with every single new file, as an extremely high attention to detail is required for even trivial changes</li>\n<li><code class="language-text">agentEmailPrimary</code> could mean a few different things. Avoid ambiguity with <strong>shorter names</strong>.</li>\n<li>Watch out for silly excess wording. <code class="language-text">Primary</code>? Just leads to more questions: Is there a Secondary? Is it for their Primary Next-of-kin?</li>\n</ol>\n<p>Enough words Dan, what should it look like instead?</p>\n<h2 id="a-solution"><a href="#a-solution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Solution</h2>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">// Consolidated Schema:\n\nUser\n  - id\n  - role: [&#39;agent&#39;, &#39;lead&#39;, &#39;admin&#39;]\n  - name\n  - phone\n  - address\n  - email\n  - password\n  - company\n    - name\n    - address</code></pre>\n      </div>\n<p>I removed the <code class="language-text">Agent</code> table, as it didn’t contain fields which were unique to Agents.</p>\n<p>All changes were made with these general ideas in mind:</p>\n<ol>\n<li>Eliminate unessesary tables. If you have a few dozen tables, this step is mandatory.</li>\n<li>Try merge related tables. <strong>Important if you are coming from a SQL background to No-SQL</strong></li>\n<li>Delete redundant data collection (e.g. remove <code class="language-text">ActivityLogs</code> table if replaced by Google Analytics)</li>\n<li>Try keeping <strong>all field names</strong> to a <strong>single word/noun/pro-noun</strong>.</li>\n<li>There is <strong>no such thing</strong> as <code class="language-text">Agent.agentEmail</code> or <code class="language-text">Agent.agentPhonePrimary</code>. Period.</li>\n<li>By using Highly Specific Names, you cast-in-stone a specific level of <code class="language-text">code-reusability</code> and <code class="language-text">durability</code>, well, specifically <strong>ZERO %</strong>.</li>\n<li>Don’t think you are doing yourself any favors with crap like this <code class="language-text">User.profileSummaryEmail</code> (where ‘profile’ could include contact details for a personal ads site) . This is probably a good point to create a new table, say <code class="language-text">Profiles</code> which includes <code class="language-text">Profiles.email</code>.</li>\n</ol>\n<p><strong>Recommended reading includes:</strong></p>\n<ol>\n<li>Book: Code Complete</li>\n<li><a href="http://phlonx.com/resources/nf3/">http://phlonx.com/resources/nf3/</a></li>\n<li><a href="https://en.wikipedia.org/wiki/Database_normalization">https://en.wikipedia.org/wiki/Database_normalization</a></li>\n</ol>',wordCount:{paragraphs:37,sentences:45,words:400},fields:{slug:"/naming-things-real-good/",prefix:"2016-06-01"},frontmatter:{title:"Naming things real good",subTitle:"Naming stuff: Object Oriented Basics",category:"programming",relativePath:"/content/posts/2016-06-01--naming-things-real-good/index.md",tags:["programming","patterns","naming","source code","organization"],date:"2016-06-01T00:00:00.000Z",modified:"2018-09-24T00:00:00.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-bc901.jpg",srcSet:"/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-bc901.jpg 1x,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-39e82.jpg 1.5x,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-a8256.jpg 2x,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-ef5e1.jpg 3x",srcWebp:"/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-ec1cf.webp",srcSetWebp:"/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-ec1cf.webp 1x,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-c5012.webp 1.5x,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-6ab8f.webp 2x,\n/static/rawpixel-652639-unsplash-ad99a8c8a4aee26646a91e754092d6ad-f9a43.webp 3x"}}}}},author:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:1},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:1},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"fails",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:1},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:3},{fieldValue:"ssd",totalCount:1},{fieldValue:"teams",totalCount:1},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/naming-things-real-good/"}}}});
//# sourceMappingURL=path---naming-things-real-good-9ed8c32b89e5e21ee8dd.js.map