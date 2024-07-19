import axios from 'axios';
async function fetchImages(query, page, perPage) {
    const apiKEY = '44883065-b38075931b52680ca8f625c61';
    const url = `https://pixabay.com/api/?key=${apiKEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    const response = await axios.get(url);
    return response.data;
}
function checkIfMoreImagesAvailable(totalHits) {
    const totalPages = Math.ceil(totalHits / params.per_page);
    if(params.page >= totalPages) {
        refs.loadMoreBtn.style.display = 'none';
        iziToast.info({
            title: 'Info',
            message: "We're sorry, but you've reached the end of search results.",
            });
        }
    }
function smoothScroll () {
    const { height: cardHeight } = refs.imagesContainer.firstElementChild.getBoundingClientRect();
    window.scrollBy ({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
}
export { checkIfMoreImagesAvailable, smoothScroll, fetchImages };
