import{S as f,a as y,i as d}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function h({webformatURL:e,largeImageURL:o,likes:r,views:i,comments:t,downloads:s}){return`
        <div class="photo-card">
            <a href="${o}">
                <img src="${e}" alt="${o}"  loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes:</b><span class="info-item-value">${r}</span>
                </p>
                <p class="info-item">
                    <b>Views:</b><span class="info-item-value">${i}</span>
                </p>
                <p class="info-item">
                    <b>Comments:</b><span class="info-item-value">${t}</span>
                </p>
                <p class="info-item"> 
                    <b>Downloads:</b><span class="info-item-value">${s}</span>
                </p>
            </div>
        </div>
    `}function b(e){e.innerHTML=""}function p(e,o){const r=o.map(h).join("");e.insertAdjacentHTML("beforeend",r),new f(".gallery a").refresh()}async function g(e,o,r){const t=`https://pixabay.com/api/?key=44883065-b38075931b52680ca8f625c61&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${r}`;return(await y.get(t)).data}function m(e,o,r){const i=Math.ceil(e/r);console.log(`Total Hits: ${e}`),console.log(`Current Page: ${o}`),console.log(`Per Page: ${r}`),console.log(`Total Pages: ${i}`),o>=i?(a.loadMoreBtn.style.display="none",iziToast.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):a.loadMoreBtn.style.display="block"}function v(){const{height:e}=a.imagesContainer.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const a={searchForm:document.getElementById("searchForm"),imagesContainer:document.getElementById("gallery"),loaderContainer:document.querySelector(".loader-container"),loader:document.querySelector(".loader"),loadingMessage:document.querySelector(".loading-message"),loadMoreBtn:document.getElementById("loadMoreBtn")},n={q:"",page:1,per_page:15};a.searchForm.addEventListener("submit",L);a.loadMoreBtn.addEventListener("click",M);async function L(e){e.preventDefault(),b(a.imagesContainer),a.loadMoreBtn.style.display="none",n.page=1;const o=e.currentTarget;if(n.q=o.elements.query.value.trim(),!n.q){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),o.reset();return}u();try{const r=await g(n.q,n.page,n.per_page);l(),r.hits.length>0?(p(a.imagesContainer,r.hits),a.loadMoreBtn.style.display="block",m(r.totalHits,n.page,n.per_page)):d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{l()}}async function M(){n.page+=1,u();try{const e=await g(n.q,n.page,n.per_page);l(),p(a.imagesContainer,e.hits),m(e.totalHits,n.page,n.per_page),v()}catch{l()}}function u(){a.loader.classList.add("is-active"),a.loadingMessage.classList.add("is-active"),a.loaderContainer.style.display="block"}function l(){a.loader.classList.remove("is-active"),a.loadingMessage.classList.remove("is-active"),a.loaderContainer.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
