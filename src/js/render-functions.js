import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createImageCard ({webformatURL, largeImageURL, likes, views, comments, downloads}) {
    return `
        <div class="photo-card">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${largeImageURL}"  loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes:</b><span class="info-item-value">${likes}</span>
                </p>
                <p class="info-item">
                    <b>Views:</b><span class="info-item-value">${views}</span>
                </p>
                <p class="info-item">
                    <b>Comments:</b><span class="info-item-value">${comments}</span>
                </p>
                <p class="info-item"> 
                    <b>Downloads:</b><span class="info-item-value">${downloads}</span>
                </p>
            </div>
        </div>
    `;
}
function clearGallery (galleryElement){
    galleryElement.innerHTML = '';
}
function renderGallery(galleryElement, images) {
    const markup = images
        .map(createImageCard)   
        .join('');
    galleryElement.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}

export{ clearGallery, renderGallery, createImageCard };