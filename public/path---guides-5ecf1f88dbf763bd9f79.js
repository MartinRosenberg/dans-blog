webpackJsonp([0x730e479d2ac6],{1278:function(e,t){e.exports={data:{allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:2},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:2},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"fails",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:2},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:2},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:3},{fieldValue:"ssd",totalCount:1},{fieldValue:"teams",totalCount:2},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"visualizing",totalCount:1}]},page:{id:"/home/dan/code/dans-blog/content/pages/2--guides/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="guides-cheat-sheets-and-examples"><a href="#guides-cheat-sheets-and-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Guides, Cheat Sheets and Examples</h1>\n<p><strong>By:</strong> <a href="https://www.danlevy.net/">Dan Levy</a> follow me on twitter: <a href="https://twitter.com/justsml">@justsml</a></p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.64335664335664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGqfVnWSoz/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIREgP/2gAIAQEAAQUCU+nCVGUQ3ZwjEf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGVr//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwGxj//EABoQAAIDAQEAAAAAAAAAAAAAAAACAREhEDH/2gAIAQEABj8CaGazLPJN7//EABwQAQACAwADAAAAAAAAAAAAAAEAESExQVGRsf/aAAgBAQABPyEGhPNypk3lS0PrHFTTslL3Cdjd33P/2gAMAwEAAgADAAAAEEzf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EBDLN//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxBV2f/EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExcZFBUYH/2gAIAQEAAT8QfBQGGjJLZMCBUDyy6BYLsb7h9XKJ6uNx9j5hNO+f/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image lazyload"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="credit: barn-images-12223-unsplash.jpg"\n        title=""\n        data-src="/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-ef7b7.jpg"\n        data-srcset="/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-c3db7.jpg 161w,\n/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-e67ed.jpg 323w,\n/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-ef7b7.jpg 645w,\n/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-04582.jpg 968w,\n/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-2d473.jpg 1290w,\n/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-d2ee7.jpg 1935w,\n/static/barn-images-12223-unsplash-83dab1d7bed9d4f93a1b5440945efde9-69ccd.jpg 2860w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<h2 id="table-of-contents"><a href="#table-of-contents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of Contents</h2>\n<ul>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/docker"><strong>docker</strong></a></p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/docker/example-server-commands">example-server-commands</a> start popular DB servers with 1-liners</li>\n</ul>\n</li>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/express"><strong>express</strong></a></p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/express/setup-guide">setup-guide</a> 2 minute: REST server w/ 1-2 files</li>\n</ul>\n</li>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/interviews"><strong>interviews</strong></a></p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/interviews/passing-the-tech-screen">Passing the tech screen</a></li>\n</ul>\n</li>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/javascript"><strong>javascript</strong></a></p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/javascript/syntax-cheat-sheet">syntax-cheat-sheet</a> <em>JS real good</em></li>\n<li><a href="https://github.com/justsml/guides/tree/master/javascript/promises">promises</a> that never break</li>\n<li><a href="https://github.com/justsml/guides/tree/master/javascript/fetch-ajax-examples">fetch-ajax-examples</a> for HTTPing #allthethings</li>\n<li><a href="https://github.com/justsml/guides/tree/master/javascript/error-handling">error-handling</a> map outta hell</li>\n<li><a href="https://github.com/justsml/guides/tree/master/javascript/avoiding-null-errors">avoiding-null-errors</a> high-level notes</li>\n</ul>\n</li>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/mapping"><strong>mapping</strong></a></p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/mapping/google-geocoder">google-geocoder</a> address to lat &#x26; long (w/ promise constructor example)</li>\n</ul>\n</li>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/mongodb"><strong>mongodb</strong></a> seed script</p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/mongodb/mongoose-seeds">mongoose-seeds</a> mongoose seed script</li>\n<li><a href="https://github.com/justsml/guides/tree/master/mongodb/monk-seeds">monk-seeds</a> monk seed script</li>\n</ul>\n</li>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/resources"><strong>resources</strong></a></p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/resources/online-editors">online-editors</a> repls to full IDE (VS Code online)</li>\n<li><a href="https://github.com/justsml/guides/tree/master/resources/vs-code">vs-code</a> tips, shortcuts and cheat sheet</li>\n</ul>\n</li>\n<li>\n<p><a href="https://github.com/justsml/guides/tree/master/tooling"><strong>tooling</strong></a></p>\n<ul>\n<li><a href="https://github.com/justsml/guides/tree/master/tooling/eslint">eslint</a> code auto-formatting setup guide</li>\n<li><a href="https://github.com/justsml/guides/tree/master/tooling/screen-recording">screen-recording</a> free tools to create GIFs to live streaming</li>\n</ul>\n</li>\n</ul>',frontmatter:{title:"Guides"}},footnote:{id:"/home/dan/code/dans-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/guides/"}}}});
//# sourceMappingURL=path---guides-5ecf1f88dbf763bd9f79.js.map