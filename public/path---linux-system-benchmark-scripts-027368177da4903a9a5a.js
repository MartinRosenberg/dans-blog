webpackJsonp([44638252915880],{1296:function(e,t){e.exports={data:{post:{id:"/app/content/posts/2017-05-01--linux-system-benchmark-scripts/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="linux-benchmark-shell-scripts"><a href="#linux-benchmark-shell-scripts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Linux Benchmark Shell Scripts</h1>\n<p>Current tests include CPU &#x26; HDD from <code class="language-text">sysbench</code> (will auto install on Debian/Ubuntu flavors.)</p>\n<blockquote>\n<p>Goal: To avoid remembering arguments for performance utilities. Written in bash.</p>\n</blockquote>\n<p><strong>Step 1:</strong> SETUP BENCHMARK:</p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh"># Create folder for results &amp; scripts\nexport BENCH_DIR=$HOME/benchmarks\nmkdir -p $BENCH_DIR/results</code></pre>\n      </div>\n<p><strong>Step 2:</strong> CREATE SHORTCUT SCRIPT: <code class="language-text">$HOME/benchmarks/bench-library.sh</code></p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">#!/bin/bash\nset -e\n\n# Install some deps\nif [ &quot;$(which sysbench)&quot; == &quot;&quot; -o &quot;$(which inxi)&quot; == &quot;&quot; -o &quot;$(which tcpdump)&quot; == &quot;&quot; ]; then\n  sudo apt-get update &amp;&amp; apt-get install -y sysbench inxi htop iotop tcpdump hddtemp\nfi\n# Variables\nexport DATE_TAG=`date +%F` #YYYY-MM-DD\nexport CPU_CORES=&quot;$([ -e /proc/cpuinfo ] &amp;&amp; grep -sc ^processor /proc/cpuinfo || sysctl -n hw.ncpu)&quot;\nexport BENCH_DIR=$HOME/benchmarks/\n\nmkdir -p $BENCH_DIR\n\nfunction benchCpu() {\n  thread_limit=${1:$CPU_CORES}\n  prime_limit=${2:-20000}\n\n  if [ $CPU_CORES -lt `expr 1 + $thread_limit` ]; then\n    printf &quot;\\n\\n${yellow}ALERT: Skipping tests limited by \\&quot;${thread_limit} thread test\\&quot;\\n${cyan}Not enough CPU Cores ($CPU_CORES)  ${reset}\\n\\n&quot;\n  else\n    printf &quot;\\n\\n${yellow}ALERT: Skipping tests limited by \\&quot;${thread_limit} thread test\\&quot;\\n${reset}&quot;\n\n    sudo sysbench --test=cpu \\\n      --cpu-max-prime=${prime_limit} \\\n      --num-threads=${CPU_CORES} \\\n      run | tee -a $BENCH_DIR/results/cpu-test.log\n  fi\n}\n\n# benchSingleDisk seqrd 120G 8K 300\nfunction benchSingleDisk () {\n  sudo sysbench --test=fileio --init-rng=on  --file-test-mode=${1:-seqrd} --file-block-size=${3:-64K} \\\n    --num-threads=${CPU_CORES} --max-time=${4:-180} --file-total-size=${2:-60G} \\\n    --max-requests=0 run | tee -a $BENCH_DIR/results/sysbench-fileio.log\n}\n\n\n# benchDisk - tests random read &amp; write, and sequential r, and sequential write, before final cleanup.\nfunction benchDisk() {\n  #   Generates test files - up to 75% of your free space - in local dir, then runs the 3 tests (up to 20 minutes each)\n  freeSpace=`df -k . | tail -1 | awk &#39;{print $4}&#39;`\n  freeSpace=&quot;${freeSpace//G|T/}&quot;\n  testSize=$(awk &quot;BEGIN {print ($freeSpace / 1024 / 1024) * 0.75; exit}&quot;)\n  testSize=${testSize}G\n  printf &quot;####&gt;&gt;&gt; \\nWriting $testSize test data to ${PWD}...\\n&quot;\n\n  benchSingleDisk seqrd ${testSize} 8K 300\n  benchSingleDisk seqwr ${testSize} 8K 300\n  benchSingleDisk seqrw ${testSize} 8K 300\n  benchSingleDisk rndrd ${testSize} 8K 300\n  benchSingleDisk rndwr ${testSize} 8K 300\n  benchSingleDisk rndrw ${testSize} 8K 300\n\n  benchSingleDisk seqrd ${testSize} 64K 300\n  benchSingleDisk seqwr ${testSize} 64K 300\n  benchSingleDisk seqrw ${testSize} 64K 300\n  benchSingleDisk rndrd ${testSize} 64K 300\n  benchSingleDisk rndwr ${testSize} 64K 300\n  benchSingleDisk rndrw ${testSize} 64K 300\n\n  printf &quot;\\n\\n####&gt;&gt;&gt; \\nCOMPLETED TESTS! Great Success!!! \\n\\n\\n&quot;\n}</code></pre>\n      </div>\n<p><strong>Step 3:</strong> Set script permissions</p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">chmod +x $BENCH_DIR/*.sh\nsource $HOME/benchmarks/bench-library.sh</code></pre>\n      </div>\n<p><strong>Step 4:</strong> CREATE BATCH RUNNER SCRIPT (OPTIONAL)</p>\n<p><code class="language-text">$HOME/benchmarks/run-bench.sh</code></p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">#!/bin/bash\nset -e\n\nsource ./bench-library.sh\n\n# Benchmark HDD Speed (in Current Directory)\n###########\nbenchDisk\n\n# Benchmark CPU - trying different thread counts (and work sizes)\n# It&#39;ll automatically skip test if we don&#39;t have enough cores (to have an impact)\n# NB: results comparable between different hardware - up to their same CPU CORE #.\n###########\nbenchCpu 1\nbenchCpu 4\nbenchCpu 8  50000\nbenchCpu 12 100000\nbenchCpu 16 100000\nbenchCpu 32 250000\nbenchCpu 48 500000\nbenchCpu 64 2000000</code></pre>\n      </div>\n<p>And now add execute permissions:</p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">chmod +x $BENCH_DIR/*.sh</code></pre>\n      </div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage:</h2>\n<p>Make sure to <code class="language-text">source ~/benchmarks/bench-library.sh</code>, then run <code class="language-text">benchCpu</code> or <code class="language-text">benchDisk</code>.</p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">benchCpu 8   250000\nbenchCpu 16  250000\nbenchDisk</code></pre>\n      </div>\n<!--# I/O - Live Monitor\n1. System: iotop\n1. Per command: dtrace/ltrace/strace\n-->',htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{id:"linux-benchmark-shell-scripts"},children:[{type:"element",tagName:"a",properties:{href:"#linux-benchmark-shell-scripts",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Linux Benchmark Shell Scripts"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Current tests include CPU & HDD from "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"sysbench"}]},{type:"text",value:" (will auto install on Debian/Ubuntu flavors.)"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Goal: To avoid remembering arguments for performance utilities. Written in bash."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 1:"}]},{type:"text",value:" SETUP BENCHMARK:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"# Create folder for results & scripts\nexport BENCH_DIR=$HOME/benchmarks\nmkdir -p $BENCH_DIR/results"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 2:"}]},{type:"text",value:" CREATE SHORTCUT SCRIPT: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"$HOME/benchmarks/bench-library.sh"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:'#!/bin/bash\nset -e\n\n# Install some deps\nif [ "$(which sysbench)" == "" -o "$(which inxi)" == "" -o "$(which tcpdump)" == "" ]; then\n  sudo apt-get update && apt-get install -y sysbench inxi htop iotop tcpdump hddtemp\nfi\n# Variables\nexport DATE_TAG=`date +%F` #YYYY-MM-DD\nexport CPU_CORES="$([ -e /proc/cpuinfo ] && grep -sc ^processor /proc/cpuinfo || sysctl -n hw.ncpu)"\nexport BENCH_DIR=$HOME/benchmarks/\n\nmkdir -p $BENCH_DIR\n\nfunction benchCpu() {\n  thread_limit=${1:$CPU_CORES}\n  prime_limit=${2:-20000}\n\n  if [ $CPU_CORES -lt `expr 1 + $thread_limit` ]; then\n    printf "\\n\\n${yellow}ALERT: Skipping tests limited by \\"${thread_limit} thread test\\"\\n${cyan}Not enough CPU Cores ($CPU_CORES)  ${reset}\\n\\n"\n  else\n    printf "\\n\\n${yellow}ALERT: Skipping tests limited by \\"${thread_limit} thread test\\"\\n${reset}"\n\n    sudo sysbench --test=cpu \\\n      --cpu-max-prime=${prime_limit} \\\n      --num-threads=${CPU_CORES} \\\n      run | tee -a $BENCH_DIR/results/cpu-test.log\n  fi\n}\n\n# benchSingleDisk seqrd 120G 8K 300\nfunction benchSingleDisk () {\n  sudo sysbench --test=fileio --init-rng=on  --file-test-mode=${1:-seqrd} --file-block-size=${3:-64K} \\\n    --num-threads=${CPU_CORES} --max-time=${4:-180} --file-total-size=${2:-60G} \\\n    --max-requests=0 run | tee -a $BENCH_DIR/results/sysbench-fileio.log\n}\n\n\n# benchDisk - tests random read & write, and sequential r, and sequential write, before final cleanup.\nfunction benchDisk() {\n  #   Generates test files - up to 75% of your free space - in local dir, then runs the 3 tests (up to 20 minutes each)\n  freeSpace=`df -k . | tail -1 | awk \'{print $4}\'`\n  freeSpace="${freeSpace//G|T/}"\n  testSize=$(awk "BEGIN {print ($freeSpace / 1024 / 1024) * 0.75; exit}")\n  testSize=${testSize}G\n  printf "####>>> \\nWriting $testSize test data to ${PWD}...\\n"\n\n  benchSingleDisk seqrd ${testSize} 8K 300\n  benchSingleDisk seqwr ${testSize} 8K 300\n  benchSingleDisk seqrw ${testSize} 8K 300\n  benchSingleDisk rndrd ${testSize} 8K 300\n  benchSingleDisk rndwr ${testSize} 8K 300\n  benchSingleDisk rndrw ${testSize} 8K 300\n\n  benchSingleDisk seqrd ${testSize} 64K 300\n  benchSingleDisk seqwr ${testSize} 64K 300\n  benchSingleDisk seqrw ${testSize} 64K 300\n  benchSingleDisk rndrd ${testSize} 64K 300\n  benchSingleDisk rndwr ${testSize} 64K 300\n  benchSingleDisk rndrw ${testSize} 64K 300\n\n  printf "\\n\\n####>>> \\nCOMPLETED TESTS! Great Success!!! \\n\\n\\n"\n}'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 3:"}]},{type:"text",value:" Set script permissions"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"chmod +x $BENCH_DIR/*.sh\nsource $HOME/benchmarks/bench-library.sh"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 4:"}]},{type:"text",value:" CREATE BATCH RUNNER SCRIPT (OPTIONAL)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"$HOME/benchmarks/run-bench.sh"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"#!/bin/bash\nset -e\n\nsource ./bench-library.sh\n\n# Benchmark HDD Speed (in Current Directory)\n###########\nbenchDisk\n\n# Benchmark CPU - trying different thread counts (and work sizes)\n# It'll automatically skip test if we don't have enough cores (to have an impact)\n# NB: results comparable between different hardware - up to their same CPU CORE #.\n###########\nbenchCpu 1\nbenchCpu 4\nbenchCpu 8  50000\nbenchCpu 12 100000\nbenchCpu 16 100000\nbenchCpu 32 250000\nbenchCpu 48 500000\nbenchCpu 64 2000000"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And now add execute permissions:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"chmod +x $BENCH_DIR/*.sh"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"usage"},children:[{type:"element",tagName:"a",properties:{href:"#usage",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Usage:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Make sure to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"source ~/benchmarks/bench-library.sh"}]},{type:"text",value:", then run "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"benchCpu"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"benchDisk"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"sh"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-sh"]},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"benchCpu 8   250000\nbenchCpu 16  250000\nbenchDisk"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"comment",value:"# I/O - Live Monitor\n1. System: iotop\n1. Per command: dtrace/ltrace/strace\n"}],data:{quirksMode:!1}},wordCount:{paragraphs:13,sentences:14,words:80},fields:{slug:"/linux-system-benchmark-scripts/",prefix:"2017-05-01"},frontmatter:{title:"Linux Server Benchmarking Scripts",subTitle:null,category:"servers",relativePath:"/content/posts/2017-05-01--linux-system-benchmark-scripts/index.md",tags:["benchmarks","servers","performance"],date:"2017-05-01T00:00:00.000Z",modified:"2018-09-21T00:00:00.000Z",cover:{childImageSharp:{resolutions:{width:220,height:220,src:"/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-bc901.jpg",srcSet:"/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-bc901.jpg 1x,\n/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-39e82.jpg 1.5x,\n/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-a8256.jpg 2x,\n/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-ef5e1.jpg 3x",srcWebp:"/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-ec1cf.webp",srcSetWebp:"/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-ec1cf.webp 1x,\n/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-c5012.webp 1.5x,\n/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-6ab8f.webp 2x,\n/static/rod-long-1052613-unsplash-7f1ae3fa7b19db54c701a623a79f4475-f9a43.webp 3x"}}}}},author:{id:"/app/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p>Dan Levy is an accomplished programmer, teacher, speaker, cat dad and writer.\n<br /><br /></p>\n<p>Dan’s Open Source documentation and related writing is relied on by countless developers who use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Mozilla Developer Network</a> site daily.\n<br /><br /></p>\n<p>His contributions span dozens of well-known projects, including <a href="https://github.com/nodejs/nodejs.org">NodeJS</a>, <a href="https://github.com/moby/moby">Docker</a>, <a href="https://github.com/ReactTraining/react-router/">React Router</a>, <a href="https://github.com/gatsbyjs/gatsby">GatsbyJS</a>, <a href="https://github.com/Angular/Angular">Angular</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, <a href="https://github.com/lodash/lodash">Lodash</a>, <a href="https://github.com/rancher/rancher">Rancher</a>, <a href="https://github.com/minio/minio">Minio</a>, <a href="https://github.com/lord/slate">Slate</a>, <a href="https://github.com/ReactiveX/IxJS">IxJS</a>, and <a href="https://github.com/functional-promises/functional-promises">Functional Promises</a>.\n<br /><br /></p>\n<p>Feel free to <a href="https://calendly.com/danlevy/">grab a spot on Dan’s calendar</a>, or reach out via <a href="https://twitter.com/justsml/">Twitter DMs</a> or <a href="/contact/">the contact form</a>.</p>'},footnote:{id:"/app/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Unless otherwise noted, copyright ©2014-2021 Dan Levy.</p>\n<ul>\n<li>Photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}},allTags:{group:[{fieldValue:"ai",totalCount:1},{fieldValue:"amazon-web-services",totalCount:1},{fieldValue:"angularjs",totalCount:2},{fieldValue:"api-keys",totalCount:2},{fieldValue:"architecture",totalCount:1},{fieldValue:"artificial intelligence",totalCount:1},{fieldValue:"async",totalCount:5},{fieldValue:"async-await",totalCount:1},{fieldValue:"await",totalCount:1},{fieldValue:"axios",totalCount:1},{fieldValue:"azure",totalCount:1},{fieldValue:"benchmarks",totalCount:1},{fieldValue:"boot2docker",totalCount:1},{fieldValue:"challenge",totalCount:1},{fieldValue:"closure",totalCount:1},{fieldValue:"cloud",totalCount:1},{fieldValue:"collaborative-culture",totalCount:2},{fieldValue:"composition",totalCount:4},{fieldValue:"culture",totalCount:2},{fieldValue:"date",totalCount:1},{fieldValue:"date class",totalCount:1},{fieldValue:"debugging",totalCount:1},{fieldValue:"design",totalCount:1},{fieldValue:"development",totalCount:2},{fieldValue:"devops",totalCount:5},{fieldValue:"digital-ocean",totalCount:1},{fieldValue:"docker",totalCount:4},{fieldValue:"dos",totalCount:1},{fieldValue:"dotenv",totalCount:1},{fieldValue:"elasticsearch",totalCount:1},{fieldValue:"errors",totalCount:2},{fieldValue:"examples",totalCount:1},{fieldValue:"fails",totalCount:1},{fieldValue:"fetch",totalCount:1},{fieldValue:"functional",totalCount:1},{fieldValue:"functional river",totalCount:1},{fieldValue:"go",totalCount:1},{fieldValue:"google-cloud-engine",totalCount:1},{fieldValue:"gotchas",totalCount:1},{fieldValue:"growth",totalCount:2},{fieldValue:"guides",totalCount:1},{fieldValue:"haskell",totalCount:1},{fieldValue:"hoisting",totalCount:1},{fieldValue:"io",totalCount:1},{fieldValue:"javascript",totalCount:11},{fieldValue:"json-web-tokens",totalCount:1},{fieldValue:"languages",totalCount:1},{fieldValue:"lua",totalCount:1},{fieldValue:"models",totalCount:1},{fieldValue:"mongodb",totalCount:2},{fieldValue:"mysql",totalCount:1},{fieldValue:"naming",totalCount:1},{fieldValue:"nodejs",totalCount:3},{fieldValue:"opinion",totalCount:1},{fieldValue:"organization",totalCount:2},{fieldValue:"ovh.net",totalCount:1},{fieldValue:"packet.net",totalCount:1},{fieldValue:"patterns",totalCount:7},{fieldValue:"performance",totalCount:4},{fieldValue:"personal-development",totalCount:2},{fieldValue:"pipeline",totalCount:1},{fieldValue:"postgres",totalCount:1},{fieldValue:"programming",totalCount:10},{fieldValue:"promises",totalCount:8},{fieldValue:"python",totalCount:2},{fieldValue:"quiz",totalCount:2},{fieldValue:"regex",totalCount:1},{fieldValue:"remote-exploit",totalCount:1},{fieldValue:"resources",totalCount:1},{fieldValue:"rust",totalCount:1},{fieldValue:"scala",totalCount:1},{fieldValue:"scaling",totalCount:1},{fieldValue:"scoping",totalCount:1},{fieldValue:"secrets",totalCount:2},{fieldValue:"security",totalCount:4},{fieldValue:"self-driving cars",totalCount:1},{fieldValue:"server",totalCount:1},{fieldValue:"servers",totalCount:2},{fieldValue:"setup",totalCount:1},{fieldValue:"shell script",totalCount:1},{fieldValue:"smalltalk",totalCount:1},{fieldValue:"source code",totalCount:2},{fieldValue:"ssd",totalCount:1},{fieldValue:"stateful",totalCount:1},{fieldValue:"teams",totalCount:2},{fieldValue:"tokens",totalCount:2},{fieldValue:"tuning",totalCount:1},{fieldValue:"typescript",totalCount:1},{fieldValue:"visualizing",totalCount:1}]}},pathContext:{slug:"/linux-system-benchmark-scripts/"}}}});
//# sourceMappingURL=path---linux-system-benchmark-scripts-027368177da4903a9a5a.js.map