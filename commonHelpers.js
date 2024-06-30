import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const u=(n,r)=>fetch(`https://pixabay.com/api/?key=${n}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log(e)}),p=(n,r)=>{r.innerHTML="";const e=n.map(o=>`
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
        `).join("");r.insertAdjacentHTML("afterbegin",e)},f="44686774-01236c387d1eefb9bce1c8eeb",m=document.querySelector(".form"),h=document.querySelector(".search-input"),i=document.querySelector(".images-container"),l=document.querySelector(".loader"),g=new d(".images-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});m.addEventListener("submit",y);function y(n){n.preventDefault();const r=L();r&&(i.innerHTML="",b(),u(f,r).then(e=>{if(w(),e.length===0){i.innerHTML="",a.error({title:"No images",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e,i),g.refresh()}).catch(e=>{a.error({title:"Error!",message:"Failed to fetch images",position:"topRight"})}))}function L(){const n=h.value;return n.trim()===""?(a.error({title:"Error",message:"Please enter word"}),null):n}function b(){l.style.display="block"}function w(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
