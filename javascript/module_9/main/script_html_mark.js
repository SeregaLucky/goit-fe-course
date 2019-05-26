"use strict";
import arrayImages from "./gallery-items.js";

/*
 * Делаем разметку
 */
const gallery = document.querySelector(".js-gallery");

// Шаблон 1 ли
function creatItemMarkup({ preview, original, description }) {
  const itemMarkup = `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  />
    <img
      class="gallery__image"
      src=""
      data-smallsrc=${preview}
      data-source=${original}
      alt=${description}
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>
    `;

  return itemMarkup;
}

// Создает все ли с картинками
function creatAllItemMarkup(images) {
  return images.reduce(
    (allImages, image) => (allImages += creatItemMarkup(image)),
    ""
  );
}

const allMarkupLi = creatAllItemMarkup(arrayImages);

// Выводим фото
gallery.insertAdjacentHTML("beforeend", allMarkupLi);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

/*
 * Делаем взаимодействие с пользователем
 */
const modalOverlay = document.querySelector(".js-overlay");
const btnCloseModal = modalOverlay.querySelector(".js-content__button");
const nullImgModal = modalOverlay.querySelector("img");

gallery.addEventListener("click", handleClick);
modalOverlay.addEventListener("click", closeModalClickOverlay);
btnCloseModal.addEventListener("click", closeModal);

function handleClick(e) {
  e.preventDefault();
  const target = e.target;

  if (target === e.currentTarget) return;

  openModal();
  imgFullClick(target);
}

function openModal() {
  modalOverlay.classList.add("is-visible");
  window.addEventListener("keydown", handleKeyPress);
}

function imgFullClick(img) {
  const srcFullTarget = img.dataset.source;
  nullImgModal.src = srcFullTarget;
}

function closeModal() {
  modalOverlay.classList.remove("is-visible");
  nullImgModal.src = "";

  window.removeEventListener("keydown", handleKeyPress);
}

function closeModalClickOverlay(e) {
  if (e.target !== e.currentTarget) return;

  closeModal();
}

function handleKeyPress(e) {
  console.log(e);
  if (e.code !== "Escape") return;

  closeModal();
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

/*
 * Делаем "ленивую" загрузку картинок
 */

const lazyLoad = target => {
  const options = {
    rootMargin: "150px 0px"
  };

  const ioObs = new IntersectionObserver((entryes, observer) => {
    entryes.forEach(entry => {
      console.log(entry);

      if (entry.isIntersecting) {
        // console.log(entry);
        const img = entry.target;
        const smallSrc = img.dataset.smallsrc;
        img.src = smallSrc;

        observer.disconnect();
      }
    });
  }, options);

  ioObs.observe(target);
};

const allImages = document.querySelectorAll(".gallery__image");

allImages.forEach(image => lazyLoad(image));
