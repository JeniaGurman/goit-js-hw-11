import{i as d,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const c={key:"42331891-8a863af1b25a8d0e5dfa0d75b",image_type:"photo",orientation:"horizontal",safesearch:!0,q:""};h.addEventListener("submit",s=>{s.preventDefault(),a.style.display="block";const r=s.target.elements.input.value;c.q=r,p().then(n=>f(n)).catch(n=>console.log(n)),s.target.reset()});function p(){const s=new URLSearchParams(c);return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(r.ok)return r.json();throw new Error(r.status)})}function f(s){if(s.hits.length===0)d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),l.innerHTML="";else{const n=s.hits.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
         </a>
        <div class="img-content">
        <div>
        <h3>Likes</h3>
        <p>${o.likes}</p>
        </div>

        <div>
        <h3>Views</h3>
        <p>${o.views}</p>
        </div>

        <div>
        <h3>Comments</h3>
        <p>${o.comments}</p>
        </div>

        <div>
        <h3>Downloads</h3>
        <p>${o.downloads}</p>
        </div>
        </div>
        `).join("");l.innerHTML=n}new u(".gallery-link").refresh(),a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
