webpackJsonp([94662141455632],{1305:function(e,t){e.exports={data:{post:{id:"/app/content/posts/2015-02-24--security-notes-regex/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="denial-of-service-regex-vulnerability"><a href="#denial-of-service-regex-vulnerability" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Denial-of-Service Regex Vulnerability</h1>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.640625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABxoc4EBL/xAAXEAEBAQEAAAAAAAAAAAAAAAAAARBB/9oACAEBAAEFAuLkV//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAaEAACAgMAAAAAAAAAAAAAAAAAARAxESFB/9oACAEBAAE/IcbHVB0y0P/aAAwDAQACAAMAAAAQp+//xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8QjEf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAn/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERcSExQVFhsf/aAAgBAQABPxCEtQLa4JJqhsNeDNQ6RqVH/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="credit: markus-spiske-666905-unsplash.jpg"\n        title=""\n        src="/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-ef7b7.jpg"\n        srcset="/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-c3db7.jpg 161w,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-e67ed.jpg 323w,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-ef7b7.jpg 645w,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-04582.jpg 968w,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-a5fcc.jpg 1280w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<p>One of the more suprising, and yet hard-to-spot vulnerabilities I’ve found is related to regular expressions.\nEither poorly written or poorly implemented.</p>\n<p>Memory/CPU can be exhausted with large or specially crafted user input.</p>\n<h2 id="warning-signs"><a href="#warning-signs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Warning Signs</h2>\n<ol>\n<li>You have multiple capture groups</li>\n<li>Global matching</li>\n<li>Expression is used with un-checked user input</li>\n</ol>\n<h2 id="mitigation--resolution"><a href="#mitigation--resolution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mitigation / Resolution</h2>\n<ol>\n<li>\n<p>RegEx is hard</p>\n<ol>\n<li>For example, here is how the really smart folks at <a href="https://www.owasp.org/index.php/OWASP_Validation_Regex_Repository">OWASP recommend handling IP validation</a>: <code class="language-text">^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$</code></li>\n<li>That’s longer than a tweet, for a 4-byte IP Address!!!</li>\n</ol>\n</li>\n<li>Make sure user input isn’t unduly long, when I know input data is reliably less than 40 chars, I’ll make sure I prevent anything over 64 - otherwise, an attacker could overwhelm my system with a flood of 4Kb requests.</li>\n<li>This affects almost every language and platform .NET/Node/Python/PERL/Java</li>\n</ol>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<p><a href="https://blog.liftsecurity.io/2014/11/03/regular-expression-dos-and-node.js?utm_source=nodeweekly&#x26;utm_medium=email">Regular Expression DoS and Node.js</a></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{id:"denial-of-service-regex-vulnerability"},children:[{type:"element",tagName:"a",properties:{href:"#denial-of-service-regex-vulnerability",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Denial-of-Service Regex Vulnerability"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 66.640625%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABxoc4EBL/xAAXEAEBAQEAAAAAAAAAAAAAAAAAARBB/9oACAEBAAEFAuLkV//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAaEAACAgMAAAAAAAAAAAAAAAAAARAxESFB/9oACAEBAAE/IcbHVB0y0P/aAAwDAQACAAMAAAAQp+//xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8QjEf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAn/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERcSExQVFhsf/aAAgBAQABPxCEtQLa4JJqhsNeDNQ6RqVH/9k='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"credit: markus-spiske-666905-unsplash.jpg",title:"",src:"/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-ef7b7.jpg",srcSet:["/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-c3db7.jpg 161w","/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-e67ed.jpg 323w","/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-ef7b7.jpg 645w","/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-04582.jpg 968w","/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-a5fcc.jpg 1280w"],sizes:["(max-width:","645px)","100vw,","645px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"One of the more suprising, and yet hard-to-spot vulnerabilities I’ve found is related to regular expressions.\nEither poorly written or poorly implemented."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Memory/CPU can be exhausted with large or specially crafted user input."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"warning-signs"},children:[{type:"element",tagName:"a",properties:{href:"#warning-signs",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Warning Signs"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"You have multiple capture groups"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Global matching"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Expression is used with un-checked user input"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"mitigation--resolution"},children:[{type:"element",tagName:"a",properties:{href:"#mitigation--resolution",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Mitigation / Resolution"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"RegEx is hard"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"For example, here is how the really smart folks at "},{type:"element",tagName:"a",properties:{href:"https://www.owasp.org/index.php/OWASP_Validation_Regex_Repository"},children:[{type:"text",value:"OWASP recommend handling IP validation"}]},{type:"text",value:": "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"That’s longer than a tweet, for a 4-byte IP Address!!!"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Make sure user input isn’t unduly long, when I know input data is reliably less than 40 chars, I’ll make sure I prevent anything over 64 - otherwise, an attacker could overwhelm my system with a flood of 4Kb requests."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"This affects almost every language and platform .NET/Node/Python/PERL/Java"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"reference"},children:[{type:"element",tagName:"a",properties:{href:"#reference",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blog.liftsecurity.io/2014/11/03/regular-expression-dos-and-node.js?utm_source=nodeweekly&utm_medium=email"},children:[{type:"text",value:"Regular Expression DoS and Node.js"}]}]}],data:{quirksMode:!1}},wordCount:{paragraphs:19,sentences:20,words:174},fields:{slug:"/security-notes-regex/",prefix:"2015-02-24"},frontmatter:{title:"Security Notes: RegEx",subTitle:"Even RegEx can be vulnerable",category:"security",relativePath:"/content/posts/2015-02-24--security-notes-regex/index.md",tags:["security","regex","dos","remote-exploit"],date:"2015-02-24T00:00:00.000Z",modified:"2018-10-01T00:00:00.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-bc901.jpg",srcSet:"/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-bc901.jpg 1x,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-39e82.jpg 1.5x,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-a8256.jpg 2x,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-ef5e1.jpg 3x",srcWebp:"/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-ec1cf.webp",srcSetWebp:"/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-ec1cf.webp 1x,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-c5012.webp 1.5x,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-6ab8f.webp 2x,\n/static/markus-spiske-666905-unsplash-c1d9c4339b69e35642182698061c195d-f9a43.webp 3x"}}}}},author:{id:"/app/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/app/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"axios",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"closure",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:2},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:2},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"examples",totalCount:1},{fieldValue:"fails",totalCount:1},{fieldValue:"fetch",totalCount:1},{fieldValue:"functional",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:2},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"hoisting",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:2},{fieldValue:"pipeline",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"scoping",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:2},{fieldValue:"ssd",totalCount:1},{fieldValue:"stateful",totalCount:1},{fieldValue:"teams",totalCount:2},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"typescript",totalCount:1},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/security-notes-regex/"}}}});
//# sourceMappingURL=path---security-notes-regex-de6114f431863b4ac843.js.map