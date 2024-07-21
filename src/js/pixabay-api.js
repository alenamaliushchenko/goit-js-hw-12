import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from '../main';

async function fetchImages(query, page, perPage) {
    const apiKEY = '44883065-b38075931b52680ca8f625c61';
    const url = `https://pixabay.com/api/?key=${apiKEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    const response = await axios.get(url);
    return response.data;
}
function checkIfMoreImagesAvailable(totalHits, currentPage, perPage) {
    const totalPages = Math.ceil(totalHits / perPage);
    console.log(`Total Hits: ${totalHits}`);
    console.log(`Current Page: ${currentPage}`);
    console.log(`Per Page: ${perPage}`);
    console.log(`Total Pages: ${totalPages}`);
    if(currentPage >= totalPages) {
        refs.loadMoreBtn.style.display = 'none';
        iziToast.info({
            title: 'Info',
            message: "We're sorry, but you've reached the end of search results.",
        });
    } else {
        refs.loadMoreBtn.style.display = 'block';
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
