//Photogallery
const gallerySet = document.querySelector(".gallery__set");
const photoModal = document.querySelector(".photoModal");
const bigPhotoImg = document.querySelector(".photoModal__img");

gallerySet.addEventListener('click', openBigImg);

function openBigImg(event) {
    if (event.target.classList.contains('gallery__img')) {
        const imageLink = event.target.getAttribute("src");
        bigPhotoImg.setAttribute("src", imageLink);
        const imageAlt = event.target.getAttribute("alt");
        bigPhotoImg.setAttribute("alt", imageAlt);
        
        gallerySet.removeEventListener('click', openBigImg);
        photoModal.classList.add("is-open");
        refs.bodyEl.classList.add("not-scroll");
        photoModal.addEventListener('click', closeBigImg);
    }
    else {
        return;
    }
}

function closeBigImg(event) {
    photoModal.removeEventListener('click', closeBigImg);
    photoModal.classList.remove("is-open");
    refs.bodyEl.classList.remove("not-scroll");
    gallerySet.addEventListener('click', openBigImg);
}