webpackJsonp([0xfa621184d45],{1272:function(e,t){e.exports={data:{post:{id:"/Users/danlevy/code/oss/dans-blog/content/posts/2015-11-22--disable-transparent-hugepages/index.md absPath of file >>> MarkdownRemark",html:'<h2 id="disable-transparent-hugepages-fix-for-debianubuntu"><a href="#disable-transparent-hugepages-fix-for-debianubuntu" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>disable-transparent-hugepages fix for Debian/Ubuntu</h2>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADAf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAGbWnJlaxXOpqs5Qv/EABkQAQACAwAAAAAAAAAAAAAAAAEAIAIQEf/aAAgBAQABBQLEqmuRaf/EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEiM//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CT//EABkQAAMBAQEAAAAAAAAAAAAAAAABERAxIf/aAAgBAQABPyGJCYvRLfXlDKLuM//aAAwDAQACAAMAAAAQfwAD/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EDMASf/EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPxBmc//EAB4QAAICAgIDAAAAAAAAAAAAAAABESExQVHhYXGh/9oACAEBAAE/EELfIovFQNKwq2xJJkcmo3YkNohRT7FeGeT6QEcc9mT2aMj/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image lazyload"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="credit: victor-garcia-645096-unsplash.jpg"\n        title=""\n        data-src="/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-ef7b7.jpg"\n        data-srcset="/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-c3db7.jpg 161w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-e67ed.jpg 323w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-ef7b7.jpg 645w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-04582.jpg 968w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-3117e.jpg 1024w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<blockquote>\n<p>Are you getting “WARNING: /sys/kernel/mm/transparent_hugepage/defrag is ‘always’.” ?</p>\n</blockquote>\n<p>Run the following commands to quickly do what <a href="https://docs.mongodb.org/v3.0/tutorial/transparent-huge-pages/">MongoDB describes at greater length</a>.</p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh"># Currently just debian\nsudo curl -sSL -o /etc/init.d/disable-transparent-hugepages https://gist.githubusercontent.com/justsml/5e8f10892070072c4ffb/raw/disable-transparent-hugepages\nsudo chmod 755 /etc/init.d/disable-transparent-hugepages\nsudo update-rc.d disable-transparent-hugepages defaults</code></pre>\n      </div>\n<h3 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References:</h3>\n<ol>\n<li><a href="https://docs.mongodb.org/v3.0/tutorial/transparent-huge-pages/">https://docs.mongodb.org/v3.0/tutorial/transparent-huge-pages/</a></li>\n</ol>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{id:"disable-transparent-hugepages-fix-for-debianubuntu"},children:[{type:"element",tagName:"a",properties:{href:"#disable-transparent-hugepages-fix-for-debianubuntu",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"disable-transparent-hugepages fix for Debian/Ubuntu"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 125%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADAf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAGbWnJlaxXOpqs5Qv/EABkQAQACAwAAAAAAAAAAAAAAAAEAIAIQEf/aAAgBAQABBQLEqmuRaf/EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEiM//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CT//EABkQAAMBAQEAAAAAAAAAAAAAAAABERAxIf/aAAgBAQABPyGJCYvRLfXlDKLuM//aAAwDAQACAAMAAAAQfwAD/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EDMASf/EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPxBmc//EAB4QAAICAgIDAAAAAAAAAAAAAAABESExQVHhYXGh/9oACAEBAAE/EELfIovFQNKwq2xJJkcmo3YkNohRT7FeGeT6QEcc9mT2aMj/2Q=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image","lazyload"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"credit: victor-garcia-645096-unsplash.jpg",title:"",dataSrc:"/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-ef7b7.jpg",dataSrcset:"/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-c3db7.jpg 161w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-e67ed.jpg 323w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-ef7b7.jpg 645w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-04582.jpg 968w,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-3117e.jpg 1024w",sizes:["(max-width:","645px)","100vw,","645px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Are you getting “WARNING: /sys/kernel/mm/transparent_hugepage/defrag is ‘always’.” ?"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Run the following commands to quickly do what "},{type:"element",tagName:"a",properties:{href:"https://docs.mongodb.org/v3.0/tutorial/transparent-huge-pages/"},children:[{type:"text",value:"MongoDB describes at greater length"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"# Currently just debian\nsudo curl -sSL -o /etc/init.d/disable-transparent-hugepages https://gist.githubusercontent.com/justsml/5e8f10892070072c4ffb/raw/disable-transparent-hugepages\nsudo chmod 755 /etc/init.d/disable-transparent-hugepages\nsudo update-rc.d disable-transparent-hugepages defaults"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"references"},children:[{type:"element",tagName:"a",properties:{href:"#references",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"References:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://docs.mongodb.org/v3.0/tutorial/transparent-huge-pages/"},children:[{type:"text",value:"https://docs.mongodb.org/v3.0/tutorial/transparent-huge-pages/"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},wordCount:{paragraphs:8,sentences:8,words:65},fields:{slug:"/disable-transparent-hugepages/",prefix:"2015-11-22"},frontmatter:{title:"MongoDB Tuning: disable transparent huge pages",subTitle:"a fix for Debian/Ubuntu",category:"mongodb",relativePath:"/content/posts/2015-11-22--disable-transparent-hugepages/index.md",tags:["devops","mongodb","performance","tuning"],date:"2015-12-22T00:00:00.000Z",modified:"2018-09-28T00:00:00.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-bc901.jpg",srcSet:"/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-bc901.jpg 1x,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-39e82.jpg 1.5x,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-a8256.jpg 2x,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-ef5e1.jpg 3x",srcWebp:"/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-ec1cf.webp",srcSetWebp:"/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-ec1cf.webp 1x,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-c5012.webp 1.5x,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-6ab8f.webp 2x,\n/static/victor-garcia-645096-unsplash-bb204efa39027b1df2a12b42f969ddce-f9a43.webp 3x"}}}}},author:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:1},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:1},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"fails",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:1},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:3},{fieldValue:"ssd",totalCount:1},{fieldValue:"teams",totalCount:1},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/disable-transparent-hugepages/"}}}});
//# sourceMappingURL=path---disable-transparent-hugepages-815730627b4ce2cf1eb5.js.map