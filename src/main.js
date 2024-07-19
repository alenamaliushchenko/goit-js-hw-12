import { clearGallery, renderGallery } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { smoothScroll, checkIfMoreImagesAvailable, fetchImages } from "./js/pixabay-api";

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
refs.loadMoreBtn.addEventListener("click", loadMoreImages);

async function handleSearch(event){
    event.preventDefault();
    clearGallery(refs.imagesContainer);
    refs.loadMoreBtn.style.display = 'none';
    params.page = 1;

    const form = event.currentTarget;
    params.q = form.elements.query.value.trim();
    if (!params.q) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        }); 
        form.reset();
        return;
    }
    showLoader();
    try {
        const data = await fetchImages(params.q, params.page, params.per_page);
        hideLoader();
        if (data.hits.length > 0) {
            renderGallery(refs.imagesContainer, data.hits);
            refs.loadMoreBtn.style.display = 'block';
            checkIfMoreImagesAvailable(data.totalHits);
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }    
    } catch (error) {
        hideLoader();
    }
}
async function loadMoreImages(){
    params.page += 1;
    showLoader();
    try {
        const data = await fetchImages(params.q, params.page, params.per_page);
        hideLoader();
        renderGallery (refs.imagesContainer, data.hits);
        checkIfMoreImagesAvailable (data.totalHits, params.page, params.per_page, refs.loadMoreBtn);
        smoothScroll();
    } catch (error) {
        hideLoader();
    }
}
function showLoader() {
    refs.loader.classList.add('is-active');
    refs.loadingMessage.classList.add('is-active');
    refs.loaderContainer.style.display = 'block';
}
function hideLoader() {
    refs.loader.classList.remove('is-active');
    refs.loadingMessage.classList.remove('is-active');
    refs.loaderContainer.style.display = 'none';
}
