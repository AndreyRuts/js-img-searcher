import{S as h,a as g,i as d}from"./assets/vendor-BGz2EIcA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const v=document.querySelector(".gallery");function q(t){const o=t.map(({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:m,comments:f,downloads:y})=>`<li class="list-item">
            <a href="${e}">
                <img class="list-item-img" src="${r}" alt="${s}">
            </a>
            <div class="info-container">
                <div class="list-item-container">
                    <h3 class="title">Likes</h3>
                    <p class="text">${a}</p>
                </div>
                <div class="list-item-container">
                    <h3 class="title">Views</h3>
                    <p class="text">${m}</p>
                </div>
                <div class="list-item-container">
                    <h3 class="title">Comments</h3>
                    <p class="text">${f}</p>
                </div>
                <div class="list-item-container">
                    <h3 class="title">Downloads</h3>
                    <p class="text">${y}</p>
                </div>
            </div>         
        </li>
    `).join("");v.insertAdjacentHTML("beforeend",o),new h(".list-item a",{captionsData:"alt",captionDelay:250}).refresh()}const b="https://pixabay.com/api/",S="46908572-03cf8a6fd9728954a0f037e03";async function L(t,o=1){const i={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await g(b,{params:i})).data}catch(r){console.log("catch",r)}}const x=document.querySelector(".form"),c=document.querySelector(".loader"),w=document.querySelector(".gallery"),n=document.querySelector(".load-more-btn");x.addEventListener("submit",D);n.addEventListener("click",$);let l=1,u="";const P=15;async function $(t){t.preventDefault(),l+=1,await p();const i=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"})}function D(t){t.preventDefault();const o=t.target.elements.request.value;o!==""&&(u=o,w.innerHTML="",p())}async function p(){c.style.display="block";const t=await L(u,l);t.hits.length===0&&(n.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})),l>=t.totalHits/P?(console.log("some text"),d.info({message:"We're sorry, but you've reached the end of search results."}),n.style.display="none",c.style.display="none"):n.style.display="block",c.style.display="none",q(t.hits),document.querySelector(".form").reset()}
//# sourceMappingURL=index.js.map
