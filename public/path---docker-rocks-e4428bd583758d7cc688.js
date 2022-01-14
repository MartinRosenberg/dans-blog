webpackJsonp([21603057285513],{1271:function(e,t){e.exports={data:{post:{id:"/Users/danlevy/code/oss/dans-blog/content/posts/2015-06-11--docker-rocks/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="docker-rocks"><a href="#docker-rocks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Docker Rocks</h1>\n<p>~<a href="guillaume-bolduc-259596-unsplash.jpg">credit: guillaume-bolduc-259596-unsplash.jpg</a></p>\n<blockquote>\n<p>Updates September 2016, 2018\nBoot2Docker has been replaced by Docker for Mac</p>\n</blockquote>\n<h4 id="to-those-on-osx-or-windows-dont-let-a-slow-experience-give-you-an-impression-that-docker-isnt-enterprise-grade"><a href="#to-those-on-osx-or-windows-dont-let-a-slow-experience-give-you-an-impression-that-docker-isnt-enterprise-grade" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>To those on OSX or Windows: Don’t let a slow experience give you an impression that Docker isn’t enterprise-grade!</h4>\n<ol>\n<li>Docker is amazing, fast, and flexible.</li>\n<li>Prior tools, boot2docker particularly, were slow and prone to crash.</li>\n</ol>\n<p> Docker can currently run natively on a Linux Kernel v3.4+ - and the current boot2docker vm actually runs v4.</p>\n<p> Best use of your hardware: Install the Latest Debian or Ubuntu on your Mac/Windows box,</p>\n<p> … c’mon those games aren’t helping your code…</p>\n<h2 id="check-your-setup"><a href="#check-your-setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Check your setup</h2>\n<p>Review the output of <code class="language-text">docker info</code> command.</p>\n<ol>\n<li>Security: Check the server for unexpectedly open ports (with <code class="language-text">nmap</code> from a remote network)</li>\n<li>DNS: Use a local cache or low-latency DNS server.</li>\n<li>Storage: Use the correct storage driver (<code class="language-text">overlay2</code> is likely)</li>\n</ol>\n<p>Check out the <a href="https://docs.docker.com/docker-for-mac/install/">Docker for Mac homepage</a></p>',wordCount:{paragraphs:17,sentences:17,words:160},fields:{slug:"/docker-rocks/",prefix:"2015-06-11"},frontmatter:{title:"Docker rocks & now works on OSX",subTitle:null,category:"docker",relativePath:"/content/posts/2015-06-11--docker-rocks/index.md",tags:["docker","boot2docker","devops"],date:"2015-06-11T05:00:12.000Z",modified:"2015-06-15T10:00:01.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-bc901.jpg",srcSet:"/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-bc901.jpg 1x,\n/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-39e82.jpg 1.5x,\n/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-a8256.jpg 2x,\n/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-ef5e1.jpg 3x",srcWebp:"/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-ec1cf.webp",srcSetWebp:"/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-ec1cf.webp 1x,\n/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-c5012.webp 1.5x,\n/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-6ab8f.webp 2x,\n/static/guillaume-bolduc-259596-unsplash-4548b3b844b5cf30f2b771ac85b39918-f9a43.webp 3x"}}}}},author:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:1},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:1},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"fails",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:1},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:3},{fieldValue:"ssd",totalCount:1},{fieldValue:"teams",totalCount:1},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/docker-rocks/"}}}});
//# sourceMappingURL=path---docker-rocks-e4428bd583758d7cc688.js.map