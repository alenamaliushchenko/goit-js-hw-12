


// import iziToast from "izitoast";

// export async function fetchImages(query){
//     const apiKEY = '44883065-b38075931b52680ca8f625c61';
//     const url = `https://pixabay.com/api/?key=${apiKEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

// return fetch(url)
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
//     .then(data => {
//         return data;
//     })
//     .catch(error => {
//         console.log('Error:', error);
//         iziToast.error({
//             title: 'Error',
//             message: 'Sorry, there are no images matching your search query. Please try again!',
//         });
//         throw error;
//     });
// }