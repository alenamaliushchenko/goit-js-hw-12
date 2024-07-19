import{S as f,a as y,i as d}from"./assets/vendor-f144e563.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function h({webformatURL:e,largeImageURL:a,likes:s,views:i,comments:t,downloads:r}){return`
        <div class="photo-card">
            <a href="${a}">
                <img src="${e}" alt="${a}"  loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes:</b><span class="info-item-value">${s}</span>
                </p>
                <p class="info-item">
                    <b>Views:</b><span class="info-item-value">${i}</span>
                </p>
                <p class="info-item">
                    <b>Comments:</b><span class="info-item-value">${t}</span>
                </p>
                <p class="info-item"> 
                    <b>Downloads:</b><span class="info-item-value">${r}</span>
                </p>
            </div>
        </div>
    `}function b(e){e.innerHTML=""}function p(e,a){const s=a.map(h).join("");e.insertAdjacentHTML("beforeend",s),new f(".gallery a").refresh()}async function m(e,a,s){const t=`https://pixabay.com/api/?key=44883065-b38075931b52680ca8f625c61&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${s}`;return(await y.get(t)).data}function u(e){const a=Math.ceil(e/params.per_page);params.page>=a&&(refs.loadMoreBtn.style.display="none",iziToast.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}function v(){const{height:e}=refs.imagesContainer.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const o={searchForm:document.getElementById("searchForm"),imagesContainer:document.getElementById("gallery"),loaderContainer:document.querySelector(".loader-container"),loader:document.querySelector(".loader"),loadingMessage:document.querySelector(".loading-message"),loadMoreBtn:document.getElementById("loadMoreBtn")},n={q:"",page:1,per_page:15};o.searchForm.addEventListener("submit",L);o.loadMoreBtn.addEventListener("click",M);async function L(e){e.preventDefault(),b(o.imagesContainer),o.loadMoreBtn.style.display="none",n.page=1;const a=e.currentTarget;if(n.q=a.elements.query.value.trim(),!n.q){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset();return}g();try{const s=await m(n.q,n.page,n.per_page);l(),s.hits.length>0?(p(o.imagesContainer,s.hits),o.loadMoreBtn.style.display="block",u(s.totalHits)):d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{l()}}async function M(){n.page+=1,g();try{const e=await m(n.q,n.page,n.per_page);l(),p(o.imagesContainer,e.hits),u(e.totalHits,n.page,n.per_page,o.loadMoreBtn),v()}catch{l()}}function g(){o.loader.classList.add("is-active"),o.loadingMessage.classList.add("is-active"),o.loaderContainer.style.display="block"}function l(){o.loader.classList.remove("is-active"),o.loadingMessage.classList.remove("is-active"),o.loaderContainer.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
