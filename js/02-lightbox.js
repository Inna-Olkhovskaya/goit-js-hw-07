import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/* Задание 2 - библиотека SimpleLightbox
Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox,
которая возьмет на себя обработку кликов по изображениям,
открытие и закрытие модального окна, а также пролистывание изображений
при помощи клавиатуры. 
Посмотри демо видео работы галереи с подключенной библиотекой.

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>

Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js.

---------------Разбей его на несколько подзадач:

Создание и рендер разметки по массиву данных galleryItems
и предоставленному шаблону элемента галереи. 
Используй готовый код из первого задания.

Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
Необходимо добавить ссылки на два файла: simple-lightbox.min.js
и simple-lightbox.min.css.
Инициализация библиотеки после того как элементы галереи созданы
и добавлены в div.gallery. 
Для этого ознакомься с документацией SimpleLightbox
- в первую очередь секции «Usage» и «Markup».
Посмотри в документации секцию «Options» и добавь отображение подписей
к изображениям из атрибута alt.
Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.*/

const SimpleLightbox = window.SimpleLightbox;
const galleryContainer = document.querySelector(".gallery");

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </li>
    `;
    })
    .join("");
}
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalImg = event.target.dataset.source;

  new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
}
