//Modal menu
const refs = {
    openBtn: document.querySelector(".mobile-menu__openBtn"),
    closeBtn: document.querySelector(".mobile-menu__closeBtn"),
    containerEl: document.querySelector(".mobile-menu__container"),
    bodyEl: document.querySelector("body")
}

refs.openBtn.addEventListener('click', openMobileMenu);

function openMobileMenu(event) {
    refs.openBtn.removeEventListener('click', openMobileMenu);
    refs.containerEl.classList.add("is-open");
    refs.bodyEl.classList.add("not-scroll");
    refs.closeBtn.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu(event) {
    refs.closeBtn.removeEventListener('click', closeMobileMenu);
    refs.containerEl.classList.remove("is-open");
    refs.bodyEl.classList.remove("not-scroll");
    refs.openBtn.addEventListener('click', openMobileMenu);
}

//Button-Up
const arrowTop = document.querySelector(".arrowTop");

arrowTop.addEventListener('click', function () {
  window.scrollTo(window.pageXOffset, 0);
});

window.addEventListener('scroll', function() {
arrowTop.hidden = (window.pageYOffset < document.documentElement.clientHeight);
});