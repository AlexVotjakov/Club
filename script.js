let playbill = document.querySelector('.playbill__link');
let modalPlayBill = document.querySelector('#playbill');

let contact = document.querySelector('.contact__link');
let modalContact = document.querySelector('#contact');
let contactClose = document.querySelector('.contact__close');

let modalClose = document.querySelector('.modal__close');

playbill.onclick = function(){
	modalPlayBill.classList.add('show');
}

contact.addEventListener('click', function(event){
	event.preventDefault();
	modalContact.classList.add('show');
})


let gallery = document.querySelector('#gallery');
let imgLink = document.querySelector('.image-link');
imgLink.onclick = function(){
	gallery.classList.add('show');
}

let buttonVideo = document.querySelector('.btn');
let modalVideo = document.querySelector('#video');
buttonVideo.onclick = function(){
	modalVideo.classList.add('show');
}

//Close Modal Window
document.addEventListener('click', function(event){
	if (event.target.dataset.close != undefined){
		let show = event.target.closest('.show');
		show.classList.remove('show');
	}
})


//Slider
let imageGallery = document.querySelector('.image-gallery');
let galleryItem = document.querySelectorAll('.gallery__item');
let largeImg = document.querySelector('#large-img');
let prevSlide = document.querySelector('.arrow__prev');
let nextSlide = document.querySelector('.arrow__next');
let index = 0;
nextSlide.onclick = function(){
	if(index < galleryItem.length - 4){
		galleryItem[index++].style.display = 'none';
	}
}
prevSlide.onclick = function(){
	if (index > 0){
		galleryItem[--index].style.display = 'block';
	}
}
imageGallery.onclick = function(event){
	let thumbnail = event.target.closest('a');
	if (!thumbnail) return;
	showThumbnail(thumbnail.href, thumbnail.title);
	event.preventDefault();
}

function showThumbnail(href, title){
largeImg.src = href;
largeImg.alt = title;
}

/*thumbs.onclick = function(event) {
      let thumbnail = event.target.closest('a');

      if (!thumbnail) return;
      showThumbnail(thumbnail.href, thumbnail.title);
      event.preventDefault();
    }

    function showThumbnail(href, title) {
      largeImg.src = href;
      largeImg.alt = title;
    }*/