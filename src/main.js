import axios from 'axios';
import { renderGallery, clearGallery } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    searchForm: document.getElementById('searchForm'),
    imagesContainer: document.getElementById('gallery'),
    loaderContainer: document.querySelector('.loader-container'),
    loader: document.querySelector('.loader'),
    loadingMessage: document.querySelector('.loading-message'),
    loadMoreBtn: document.getElementById('loadMoreBtn')
};
const params = {
    q: "",
    page: 1,
    per_page: 15,
};
refs.searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event){
    event.preventDefault();
    refs.imagesContainer.innerHTML = "";
    params.page = 1;

    const form = event.currentTarget;
    params.q = form.elements.query.value.trim();
    if(!params.q){
        form.reset();
        return;
    }
    const loadMore = document.getElement('.load-more');

    params.totalHits = Math.ceil(totalResult/params.pageSize);
}



// document.getElementById('searchForm').addEventListener("submit", function(event) {
//     event.preventDefault();
//     const query = document.getElementById('searchInput').value.trim();

//     const gallery = document.getElementById('gallery');
//     clearGallery(gallery);
//     const loaderContainer = document.querySelector('.loader-container');
//     const loader = document.querySelector('.loader');
//     const loadingMessage = document.querySelector('.loading-message');

//     function showLoader() {
//         loader.classList.add('is-active');
//         loadingMessage.classList.add('is-active');
//         loaderContainer.style.display = 'block';
//     }
//     function hideLoader() {
//         loader.classList.remove('is-active');
//         loadingMessage.classList.remove('is-active');
//         loaderContainer.style.display = 'none';
//     }
//     showLoader();
//     fetchImages(query) 
//         .then(data => {
//             hideLoader();
//             if(data.hits.length > 0) {
//                 renderGallery(gallery, data.hits);
//             } else {
//                 iziToast.error({
//                 title: 'Error',
//                 message: 'Sorry, there are no images matching your search query. Please try again!',
//                 });
//             }
//         })
//         .catch(error => {
//             console.log('Error:', error);
//             iziToast.error({
//                 title: 'Error',
//                 message: 'Sorry, there are no images matching your search query. Please try again!',
//             });
//             hideLoader();
//         });
// });
