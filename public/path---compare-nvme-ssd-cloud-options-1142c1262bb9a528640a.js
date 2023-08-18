webpackJsonp([0x7ef328fc2ab3],{1283:function(e,t){e.exports={data:{post:{id:"/app/content/posts/2017-04-15--compare-nvme-ssd-cloud-options/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="boost-cloud-performance-up-to-70"><a href="#boost-cloud-performance-up-to-70" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Boost Cloud Performance up to 70%</h1>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAeVqV2mHkgf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIDEBMx/9oACAEBAAEFAo1pt1I1Rx1n/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAABAhAyIf/aAAgBAQAGPwLrNxNKlX//xAAcEAACAgIDAAAAAAAAAAAAAAAAARExIUGRsfD/2gAIAQEAAT8hiCES8cgoPHZoVrdjs//aAAwDAQACAAMAAAAQKM//xAAXEQEBAQEAAAAAAAAAAAAAAAARAQBR/9oACAEDAQE/ECyrnrf/xAAYEQACAwAAAAAAAAAAAAAAAAAAEQEhMf/aAAgBAgEBPxCViKP/xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhMWGRUf/aAAgBAQABPxDwj22uQJcq2i6IIFvISMjMMu2r2lCG5//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="credit: solaiman-hossen-553024-unsplash.jpg"\n        title=""\n        src="/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-ef7b7.jpg"\n        srcset="/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-c3db7.jpg 161w,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-e67ed.jpg 323w,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-ef7b7.jpg 645w,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-04582.jpg 968w,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-a5fcc.jpg 1280w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<blockquote>\n<p>General notes &#x26; sections for select hosting providers below (mid-2017).</p>\n</blockquote>\n<ul>\n<li><a href="#aws_tips">AWS (Amazon Web Services), EC2 (Elastic Compute Cloud), EBS (Elastic Block Storage),  etc.</a></li>\n<li><a href="#do_tips">Digital Ocean</a></li>\n<li><a href="#packet_tips">Packet.net</a></li>\n</ul>\n<p><a id=\'aws_tips\'></a></p>\n<h2 id="amazon-web-services--ec2--ebs--s3"><a href="#amazon-web-services--ec2--ebs--s3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Amazon Web Services / EC2 / EBS / S3</h2>\n<blockquote>\n<p>TLDR; While AWS usually offers restrictive hardware &#x26; intimidating pricing tiers, the <strong>i3.large</strong> (and larger) hardware is the most efficient in terms of Price vs. I/O Performance, AND is the Fastest in Overall Performance.</p>\n</blockquote>\n<blockquote>\n<p>EC2 <strong>i3.large</strong> with a <strong>475GB NVMe SSD</strong> typically costs around <strong>$110/month!</strong>\n<br />\nAn <strong>i3.2xlarge with 1.9TB NVMe</strong> costs about <strong>$450/month</strong> *\n<br />\n<em>*USA/2018</em></p>\n</blockquote>\n<br />\n<br />\n<h2 id="head-to-head"><a href="#head-to-head" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Head to Head</h2>\n<p>[<a href="https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=116848524&#x26;format=interactive">full-screen data view</a>]</p>\n<iframe style="position: relative; left: -150px; height: 650px; width: 990px; min-width: 100%;" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=116848524&amp;format=interactive"></iframe>\n<p><a href="https://www.ec2instances.info/?filter=nvm%C2%AEion=us-east-2&#x26;cost_duration=monthly&#x26;selected=c5d.large,i3.large,i3.xlarge,i3.2xlarge">View Prices on EC2</a></p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 40.41095890410959%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAduiAf/EABYQAAMAAAAAAAAAAAAAAAAAAAABEP/aAAgBAQABBQIc/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAFBMf/aAAgBAQABPyGECWn/2gAMAwEAAgADAAAAEIff/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8QiP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAAIDAQEAAAAAAAAAAAAAAAERACExUUH/2gAIAQEAAT8QROTvYwo7257HvZ//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="ec2instances.info"\n        title=""\n        src="/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-ef7b7.jpg"\n        srcset="/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-c3db7.jpg 161w,\n/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-e67ed.jpg 323w,\n/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-ef7b7.jpg 645w,\n/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-04582.jpg 968w,\n/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-2d473.jpg 1290w,\n/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-d2ee7.jpg 1935w,\n/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-9ce3e.jpg 3796w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Note the <strong>i3.*xlarge</strong> is the only hardware to feature competitively priced NVMe storage (ultra-fast +1GB/s speeds). The major limiting factor I found was the real network speed. Servers with advertised speeds “up to 10/Gb/s” struggled to get close to 1/Gb/s (60-80MB/s).</p>\n<p>Network tests used up to 9 additional instances in the same availability zone. Any erroneous data points I replaced with a 0. Additional tests are needed as only 1-2 samples were collected.</p>\n<p>[<a href="https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=13370750&#x26;format=interactive">full-screen data view</a>]</p>\n<iframe style="position: relative; left: -150px; height: 790px; width: 950px; min-width: 100%;" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=13370750&amp;format=interactive"></iframe>\n<h3 id="credits"><a href="#credits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Credits</h3>\n<ul>\n<li><a href="https://www.ec2instances.info/?filter=nvm%C2%AEion=us-east-2&#x26;cost_duration=monthly&#x26;selected=c5d.large,i3.large,i3.xlarge,i3.2xlarge">ec2instances.info</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{id:"boost-cloud-performance-up-to-70"},children:[{type:"element",tagName:"a",properties:{href:"#boost-cloud-performance-up-to-70",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Boost Cloud Performance up to 70%"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAeVqV2mHkgf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIDEBMx/9oACAEBAAEFAo1pt1I1Rx1n/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAABAhAyIf/aAAgBAQAGPwLrNxNKlX//xAAcEAACAgIDAAAAAAAAAAAAAAAAARExIUGRsfD/2gAIAQEAAT8hiCES8cgoPHZoVrdjs//aAAwDAQACAAMAAAAQKM//xAAXEQEBAQEAAAAAAAAAAAAAAAARAQBR/9oACAEDAQE/ECyrnrf/xAAYEQACAwAAAAAAAAAAAAAAAAAAEQEhMf/aAAgBAgEBPxCViKP/xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhMWGRUf/aAAgBAQABPxDwj22uQJcq2i6IIFvISMjMMu2r2lCG5//Z'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"credit: solaiman-hossen-553024-unsplash.jpg",title:"",src:"/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-ef7b7.jpg",srcSet:["/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-c3db7.jpg 161w","/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-e67ed.jpg 323w","/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-ef7b7.jpg 645w","/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-04582.jpg 968w","/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-a5fcc.jpg 1280w"],sizes:["(max-width:","645px)","100vw,","645px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"General notes & sections for select hosting providers below (mid-2017)."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"#aws_tips"},children:[{type:"text",value:"AWS (Amazon Web Services), EC2 (Elastic Compute Cloud), EBS (Elastic Block Storage),  etc."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"#do_tips"},children:[{type:"text",value:"Digital Ocean"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"#packet_tips"},children:[{type:"text",value:"Packet.net"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{id:"aws_tips"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"amazon-web-services--ec2--ebs--s3"},children:[{type:"element",tagName:"a",properties:{href:"#amazon-web-services--ec2--ebs--s3",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Amazon Web Services / EC2 / EBS / S3"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"TLDR; While AWS usually offers restrictive hardware & intimidating pricing tiers, the "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"i3.large"}]},{type:"text",value:" (and larger) hardware is the most efficient in terms of Price vs. I/O Performance, AND is the Fastest in Overall Performance."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"EC2 "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"i3.large"}]},{type:"text",value:" with a "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"475GB NVMe SSD"}]},{type:"text",value:" typically costs around "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"$110/month!"}]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nAn "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"i3.2xlarge with 1.9TB NVMe"}]},{type:"text",value:" costs about "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"$450/month"}]},{type:"text",value:" *\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"*USA/2018"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"head-to-head"},children:[{type:"element",tagName:"a",properties:{href:"#head-to-head",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Head to Head"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"["},{type:"element",tagName:"a",properties:{href:"https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=116848524&format=interactive"},children:[{type:"text",value:"full-screen data view"}]},{type:"text",value:"]"}]},{type:"text",value:"\n"},{type:"element",tagName:"iframe",properties:{style:"position: relative; left: -150px; height: 650px; width: 990px; min-width: 100%;",seamless:!0,frameBorder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=116848524&format=interactive"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.ec2instances.info/?filter=nvm%C2%AEion=us-east-2&cost_duration=monthly&selected=c5d.large,i3.large,i3.xlarge,i3.2xlarge"},children:[{type:"text",value:"View Prices on EC2"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 40.41095890410959%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAduiAf/EABYQAAMAAAAAAAAAAAAAAAAAAAABEP/aAAgBAQABBQIc/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAFBMf/aAAgBAQABPyGECWn/2gAMAwEAAgADAAAAEIff/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8QiP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAAIDAQEAAAAAAAAAAAAAAAERACExUUH/2gAIAQEAAT8QROTvYwo7257HvZ//2Q=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"ec2instances.info",title:"",src:"/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-ef7b7.jpg",srcSet:["/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-c3db7.jpg 161w","/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-e67ed.jpg 323w","/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-ef7b7.jpg 645w","/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-04582.jpg 968w","/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-2d473.jpg 1290w","/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-d2ee7.jpg 1935w","/static/ec2-updated-prices-2018-56d755738f7991adf34d59f92502af7f-9ce3e.jpg 3796w"],sizes:["(max-width:","645px)","100vw,","645px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Note the "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"i3.*xlarge"}]},{type:"text",value:" is the only hardware to feature competitively priced NVMe storage (ultra-fast +1GB/s speeds). The major limiting factor I found was the real network speed. Servers with advertised speeds “up to 10/Gb/s” struggled to get close to 1/Gb/s (60-80MB/s)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Network tests used up to 9 additional instances in the same availability zone. Any erroneous data points I replaced with a 0. Additional tests are needed as only 1-2 samples were collected."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"["},{type:"element",tagName:"a",properties:{href:"https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=13370750&format=interactive"},children:[{type:"text",value:"full-screen data view"}]},{type:"text",value:"]"}]},{type:"text",value:"\n"},{type:"element",tagName:"iframe",properties:{style:"position: relative; left: -150px; height: 790px; width: 950px; min-width: 100%;",seamless:!0,frameBorder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/1qQ62m1RFj73YScdS77Q9R2GpRqJOk7JHuTEOFDR4jJE/pubchart?oid=13370750&format=interactive"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"credits"},children:[{type:"element",tagName:"a",properties:{href:"#credits",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Credits"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.ec2instances.info/?filter=nvm%C2%AEion=us-east-2&cost_duration=monthly&selected=c5d.large,i3.large,i3.xlarge,i3.2xlarge"},children:[{type:"text",value:"ec2instances.info"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},wordCount:{paragraphs:21,sentences:26,words:225},fields:{slug:"/compare-nvme-ssd-cloud-options/",prefix:"2017-04-15"},frontmatter:{title:"Compare NVMe SSD Cloud Options",subTitle:"NVMe SSD Head-to-Head: AWS, DigitalOcean, Packet.net",category:"programming",relativePath:"/content/posts/2017-04-15--compare-nvme-ssd-cloud-options/index.md",tags:["cloud","servers","architecture","scaling","digital-ocean","amazon-web-services","google-cloud-engine","azure","packet.net","ovh.net","ssd","io"],date:"2017-04-15T00:00:00.000Z",modified:"2018-11-12T00:00:00.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-bc901.jpg",srcSet:"/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-bc901.jpg 1x,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-39e82.jpg 1.5x,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-a8256.jpg 2x,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-ef5e1.jpg 3x",srcWebp:"/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-ec1cf.webp",srcSetWebp:"/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-ec1cf.webp 1x,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-c5012.webp 1.5x,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-6ab8f.webp 2x,\n/static/solaiman-hossen-553024-unsplash-43beba1a1741fb704e779c9ceda87236-f9a43.webp 3x"}}}}},author:{id:"/app/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/app/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"axios",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"closure",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:2},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:2},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"examples",totalCount:1},{fieldValue:"fails",totalCount:1},{fieldValue:"fetch",totalCount:1},{fieldValue:"functional",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:2},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"hoisting",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:12},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"modules",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:2},{fieldValue:"pipeline",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"scoping",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:2},{fieldValue:"ssd",totalCount:1},{fieldValue:"stateful",totalCount:1},{fieldValue:"teams",totalCount:2},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"typescript",totalCount:2},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/compare-nvme-ssd-cloud-options/"}}}});
//# sourceMappingURL=path---compare-nvme-ssd-cloud-options-1142c1262bb9a528640a.js.map