document.addEventListener("astro:page-load",function(){const s=new Set;document.querySelectorAll("astro-embed-gist:not([data-css-loaded])").forEach(n=>{n.dataset.cssLoaded="true";const e=n.dataset.cssurl;if(!e||s.has(e))return;s.add(e);const t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",document.head.appendChild(t)})});
