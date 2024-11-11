import{S as h,a as g,i as v}from"./assets/vendor-BGz2EIcA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const q=document.querySelector(".gallery");function b(t){const o=t.map(({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:m,comments:f,downloads:y})=>`<li class="list-item">
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
    `).join("");q.insertAdjacentHTML("beforeend",o),new h(".list-item a",{captionsData:"alt",captionDelay:250}).refresh()}const L="https://pixabay.com/api/",S="46908572-03cf8a6fd9728954a0f037e03";async function x(t,o=1){const l={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await g(L,{params:l})).data}catch(r){console.log("catch",r)}}const P=document.querySelector(".form"),c=document.querySelector(".loader"),$=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");P.addEventListener("submit",D);i.addEventListener("click",w);let n=30,p="";const d=15;async function w(t){t.preventDefault(),i.style.display="none",await u(),n+=1,i.style.display="block"}function D(t){t.preventDefault();const o=t.target.elements.request.value;o!==""&&(p=o,$.innerHTML="",u(),n+=1)}async function u(){c.style.display="block";const t=await x(p,n);console.log(t),console.log(n),console.log(t.totalHits/d),i.style.display="block",t.hits.length===0?(i.style.display="none",v.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})):n>t.totalHits/d&&(i.style.display="none",c.style.display="none"),c.style.display="none",b(t.hits),document.querySelector(".form").reset()}
//# sourceMappingURL=index.js.map
