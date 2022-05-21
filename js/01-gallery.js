import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
};

const createGallery = galleryItems.map(item => createGalleryItem(item)).join('');


gallery.insertAdjacentHTML('beforeend', createGallery);

gallery.addEventListener('click', handlerOpenImageClick);

function handlerOpenImageClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') { return };
    console.log(evt.target.dataset.source);
    
    
    const instance = basicLightbox.create(`
		<img width="1000" height="800" src="${evt.target.dataset.source}">
	`);
    
    instance.show();


    window.addEventListener('keydown', handleEscapeClick);

    function handleEscapeClick(evt) {
        console.log(evt.code);// Escape
        if (evt.code === 'Escape') {            
            instance.close();
      }
  }
};