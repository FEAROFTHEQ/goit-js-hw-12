import{a as q,S as x,i as d}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const y=async(r,t,a,o)=>{try{return(await q.get("https://pixabay.com/api/",{params:{key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o}})).data}catch(e){throw console.log(e),e}},h=(r,t)=>{const a=r.map(o=>`
        <li class="item">
  <a class="link" href="${o.largeImageURL}">
    <img
      class="image"
      src="${o.webformatURL}"
      alt="${o.tags}"
    />
  </a>
  <div class="desc-container">
  <p class="descr"><span class="descr-text">Likes </span>${o.likes}</p>
  <p class="descr"><span class="descr-text">Views </span>${o.views}</p>
  <p class="descr"><span class="descr-text">Comments </span>${o.comments}</p>
  <p class="descr"><span class="descr-text">Downloads </span>${o.downloads}</p>
  </div>
       </li>
        `).join("");t.insertAdjacentHTML("beforeend",a)},L="44686774-01236c387d1eefb9bce1c8eeb",P=document.querySelector(".form"),M=document.querySelector(".search-input"),c=document.querySelector(".images-container"),b=document.querySelector(".loader"),u=document.querySelector(".btn-load-more"),w=new x(".images-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});let n=1,f=15,i=[],p,g,v;P.addEventListener("submit",O);u.addEventListener("click",$);async function O(r){if(r.preventDefault(),p=E(),i=[],n=1,u.style.display="none",p){c.innerHTML="",S();try{const t=await y(L,p,n,f);if(i=t.hits,g=Math.ceil(t.totalHits/f),l(),i.length===0){c.innerHTML="",d.error({title:"No images",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}if(c.innerHTML="",h(i,c),n+=1,w.refresh(),v=document.querySelector(".item").getBoundingClientRect().height,n>g)return;n>1&&(u.style.display="block")}catch(t){l(),console.log(t),d.error({title:"Error!",message:"Failed to fetch images",position:"center"})}}}async function $(r){r.preventDefault(),S();try{if(i=(await y(L,p,n,f)).hits,l(),n>g){l(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"center"}),u.style.display="none";return}n+=1,h(i,c),I(v*2),w.refresh()}catch{l(),d.error({title:"Error!",message:"Failed to fetch images",position:"center"})}}function E(){const r=M.value;return r.trim()===""?(d.error({title:"Error",message:"Please enter word",position:"center"}),null):r}function S(){b.style.display="block"}function l(){b.style.display="none"}function I(r){window.scrollBy({top:r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
