webpackJsonp([0xcca352101211],{1273:function(e,t){e.exports={data:{post:{id:"/Users/danlevy/code/oss/dans-blog/content/posts/2015-06-06--docker-firewall-setup/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="setup-docker-hosts-firewall"><a href="#setup-docker-hosts-firewall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup Docker Host’s Firewall</h1>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.640625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHCaq4pGEaf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAECIQMi/9oACAEBAAEFAmc9qp9CwVZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AWR//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AW1//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRABAQEBAQEAAAAAAAAAAAAAAQARITFR/9oACAEBAAE/IR2Bh9s1nk+wexkRt//aAAwDAQACAAMAAAAQnx//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EBx2U7f/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EGqiGH//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhUTH/2gAIAQEAAT8QADGPe5UuAY+Z4ETQxs+az2B5kQV+b//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image lazyload"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="credit: charles-deluvio-456501-unsplash.jpg"\n        title=""\n        data-src="/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-ef7b7.jpg"\n        data-srcset="/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-c3db7.jpg 161w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-e67ed.jpg 323w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-ef7b7.jpg 645w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-04582.jpg 968w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-a5fcc.jpg 1280w"\n        sizes="(max-width: 645px) 100vw, 645px"\n      />\n    </span>\n  </span>\n  </p>\n<ol>\n<li>Debian/Ubuntu Server is assumed</li>\n<li>Designed to run on Docker Host Server</li>\n</ol>\n<h2 id="install-requirements"><a href="#install-requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Requirements</h2>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh"># Ultimate Firewall Needed\napt-get update &amp;&amp; apt-get install -y ufw nmap curl</code></pre>\n      </div>\n<h2 id="get-your-internal--external-ip-addresses"><a href="#get-your-internal--external-ip-addresses" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Get your Internal &#x26; External IP Addresses</h2>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh"># Get your IP Addresses, simple output:\nhostname --all-ip-addresses\n\n# OR use ip tool, example:\nip addr</code></pre>\n      </div>\n<h2 id="firtewall-ufw-setup---example-cmds"><a href="#firtewall-ufw-setup---example-cmds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Firtewall (UFW) Setup - Example Cmds</h2>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">ufw logging on # on=low - medium might be better for diagnostics\nufw logging medium\n# First, block all the things\nufw default deny incoming\n\n# REQUIRED: CHOOSE *ONE* OF THE FOLLOWING DEFAULT OUTBOUND RULES:\nufw default deny outgoing\nufw default allow outgoing\n\n\n# Allow and log all new ssh connections,\nufw allow log proto tcp from any to any port 22\n## Allow http traffic (w/o explicit logging)\nufw allow out on docker0 53/udp to 172.17.0.1/16\nufw allow out on eth0 to any port 53\nufw allow out on eth0 from 0.0.0.0/0 to any port 80 proto tcp\nufw allow out on eth0 from 0.0.0.0/0 to any port 443 proto tcp\n\n# Verbose: ufw allow proto tcp from any to any port 80\nufw allow 80/tcp\nufw allow 443/tcp\nufw allow log 22/tcp\nufw limit ssh # Basic Rate limit 4 SSH brute force mitigation\n\n# Set your ext IP\nexport EXTERNAL_IP=123.123.123.123\n# Update docker IP if needed\nexport DOCKER_IP=172.17.42.1\n# Forward tcp 8080 traffic to  Dockerized App\nufw allow proto tcp from $EXTERNAL_IP port 8080 to $DOCKER_IP port 3000</code></pre>\n      </div>\n<h2 id="enable--start-firewall"><a href="#enable--start-firewall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enable / Start Firewall</h2>\n<blockquote>\n<p>Be Careful, Don’t Lock out your SSH port (sshd defaults to 22)</p>\n</blockquote>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">ufw --force enable\n\nufw reset</code></pre>\n      </div>\n<hr>\n<h2 id="test-your-firewall"><a href="#test-your-firewall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test Your Firewall</h2>\n<blockquote>\n<p>Important: USE A REMOTE IP ADDR/LOCATION</p>\n</blockquote>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh"># Verify dependency\napt-get update &amp;&amp; apt-get install -y nmap\n\n# Set scan target\nexport TARGET_HOST=123.123.123.123\n\n# Example Scan Commands:\n# Fast open port check\nnmap -p 1-10240,27017 -T5 $TARGET_HOST\n# Thorough scan\nnmap -p 1-10240,27017 --open -v -APN $TARGET_HOST\n# Svc Inspection\nnmap -p 1-10240,27017 -O --osscan-guess $TARGET_HOST</code></pre>\n      </div>\n<h4 id="done-now-you-should-see-only-the-ports-you-configured"><a href="#done-now-you-should-see-only-the-ports-you-configured" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DONE! Now you should see ONLY the ports you configured!</h4>',htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{id:"setup-docker-hosts-firewall"},children:[{type:"element",tagName:"a",properties:{href:"#setup-docker-hosts-firewall",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Setup Docker Host’s Firewall"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 645px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 66.640625%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHCaq4pGEaf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAECIQMi/9oACAEBAAEFAmc9qp9CwVZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AWR//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AW1//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRABAQEBAQEAAAAAAAAAAAAAAQARITFR/9oACAEBAAE/IR2Bh9s1nk+wexkRt//aAAwDAQACAAMAAAAQnx//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EBx2U7f/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EGqiGH//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhUTH/2gAIAQEAAT8QADGPe5UuAY+Z4ETQxs+az2B5kQV+b//Z'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image","lazyload"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"credit: charles-deluvio-456501-unsplash.jpg",title:"",dataSrc:"/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-ef7b7.jpg",dataSrcset:"/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-c3db7.jpg 161w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-e67ed.jpg 323w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-ef7b7.jpg 645w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-04582.jpg 968w,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-a5fcc.jpg 1280w",sizes:["(max-width:","645px)","100vw,","645px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Debian/Ubuntu Server is assumed"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Designed to run on Docker Host Server"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"install-requirements"},children:[{type:"element",tagName:"a",properties:{href:"#install-requirements",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Install Requirements"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"# Ultimate Firewall Needed\napt-get update && apt-get install -y ufw nmap curl"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"get-your-internal--external-ip-addresses"},children:[{type:"element",tagName:"a",properties:{href:"#get-your-internal--external-ip-addresses",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Get your Internal & External IP Addresses"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"# Get your IP Addresses, simple output:\nhostname --all-ip-addresses\n\n# OR use ip tool, example:\nip addr"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"firtewall-ufw-setup---example-cmds"},children:[{type:"element",tagName:"a",properties:{href:"#firtewall-ufw-setup---example-cmds",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Firtewall (UFW) Setup - Example Cmds"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"ufw logging on # on=low - medium might be better for diagnostics\nufw logging medium\n# First, block all the things\nufw default deny incoming\n\n# REQUIRED: CHOOSE *ONE* OF THE FOLLOWING DEFAULT OUTBOUND RULES:\nufw default deny outgoing\nufw default allow outgoing\n\n\n# Allow and log all new ssh connections,\nufw allow log proto tcp from any to any port 22\n## Allow http traffic (w/o explicit logging)\nufw allow out on docker0 53/udp to 172.17.0.1/16\nufw allow out on eth0 to any port 53\nufw allow out on eth0 from 0.0.0.0/0 to any port 80 proto tcp\nufw allow out on eth0 from 0.0.0.0/0 to any port 443 proto tcp\n\n# Verbose: ufw allow proto tcp from any to any port 80\nufw allow 80/tcp\nufw allow 443/tcp\nufw allow log 22/tcp\nufw limit ssh # Basic Rate limit 4 SSH brute force mitigation\n\n# Set your ext IP\nexport EXTERNAL_IP=123.123.123.123\n# Update docker IP if needed\nexport DOCKER_IP=172.17.42.1\n# Forward tcp 8080 traffic to  Dockerized App\nufw allow proto tcp from $EXTERNAL_IP port 8080 to $DOCKER_IP port 3000"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"enable--start-firewall"},children:[{type:"element",tagName:"a",properties:{href:"#enable--start-firewall",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Enable / Start Firewall"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Be Careful, Don’t Lock out your SSH port (sshd defaults to 22)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"ufw --force enable\n\nufw reset"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"test-your-firewall"},children:[{type:"element",tagName:"a",properties:{href:"#test-your-firewall",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Test Your Firewall"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Important: USE A REMOTE IP ADDR/LOCATION"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"# Verify dependency\napt-get update && apt-get install -y nmap\n\n# Set scan target\nexport TARGET_HOST=123.123.123.123\n\n# Example Scan Commands:\n# Fast open port check\nnmap -p 1-10240,27017 -T5 $TARGET_HOST\n# Thorough scan\nnmap -p 1-10240,27017 --open -v -APN $TARGET_HOST\n# Svc Inspection\nnmap -p 1-10240,27017 -O --osscan-guess $TARGET_HOST"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{id:"done-now-you-should-see-only-the-ports-you-configured"},children:[{type:"element",tagName:"a",properties:{href:"#done-now-you-should-see-only-the-ports-you-configured",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"DONE! Now you should see ONLY the ports you configured!"}]}],data:{quirksMode:!1}},wordCount:{paragraphs:15,sentences:16,words:84},fields:{slug:"/docker-firewall-setup/",prefix:"2015-06-06"},frontmatter:{title:"Docker Firewall Setup",subTitle:null,category:"docker",relativePath:"/content/posts/2015-06-06--docker-firewall-setup/index.md",tags:["docker","security","devops"],date:"2015-06-06T00:00:00.000Z",modified:"2015-11-08T00:00:00.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-bc901.jpg",srcSet:"/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-bc901.jpg 1x,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-39e82.jpg 1.5x,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-a8256.jpg 2x,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-ef5e1.jpg 3x",srcWebp:"/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-ec1cf.webp",srcSetWebp:"/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-ec1cf.webp 1x,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-c5012.webp 1.5x,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-6ab8f.webp 2x,\n/static/charles-deluvio-456501-unsplash-a8c647afa0163fc37f1b389d2fcba5ec-f9a43.webp 3x"}}}}},author:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/Users/danlevy/code/oss/dans-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:1},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:1},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"fails",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:1},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:3},{fieldValue:"ssd",totalCount:1},{fieldValue:"teams",totalCount:1},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/docker-firewall-setup/"}}}});
//# sourceMappingURL=path---docker-firewall-setup-e6b325c41122f78fa9dd.js.map