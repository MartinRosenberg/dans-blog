import{Q as u}from"./QuestionStore.DWFhWJsj.js";import"./hoisted.DTJXRIjw.js";import"./pathHelpers.DmToPstD.js";let n=null,i=0;window.__updateCounts=()=>{const e=document.querySelectorAll("main .challenge");if(!(e.length>0))return;const t=document.querySelectorAll(".score"),l=t[0],o=document.querySelector(".score-wrapper"),r=document.querySelector(".score label"),c=document.querySelectorAll("main .challenge.correct");if(t.length>=2&&console.error("Multiple score elements found"),!r)return console.error("Expected score label, not found");c.length>0&&t[0].classList.add("active"),e.length===c.length?(t[0].classList.add("all-correct"),r.innerHTML="All correct!",o?.classList.toggle("pulse"),l?.classList.add("success")):r.innerHTML=`${c.length} / ${e.length}`};function a(){const e=u(window.location.pathname);return e||null}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".quiz-ui");if(e){const s=a(),t=document.querySelector("button.reset-quiz");t&&t.addEventListener("click",()=>{console.log("Resetting quiz state for",location.pathname),s?.resetBySlug(),document.querySelectorAll("main .challenge").forEach(o=>o.classList.remove("correct","incorrect","answered")),window.__updateCounts()}),n=setInterval(()=>{if(i++,i>12){console.warn("Too many iterations, stopping interval"),clearInterval(n);return}window.__updateCounts()},100),e.addEventListener("mousedown",()=>{clearInterval(n)}),e.addEventListener("click",()=>{clearInterval(n),window.__updateCounts()})}});
