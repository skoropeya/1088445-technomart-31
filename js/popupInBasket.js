const modalInBasket = document.querySelector(".modal-in-basket");
const goodInBasket = document.querySelectorAll(".btn-buy");
const goodInMarks = document.querySelectorAll(".btn-mark");
const closeInBasket = modalInBasket.querySelector(".close-modal-in-basket");
const moreShopping = modalInBasket.querySelector(".btn-more-shopping");

// корзина в header
const menuBasket = document.querySelector(".users-menu-basket");
const totalGoods = menuBasket.querySelector(".count-goods");
let counterGoods = Number(totalGoods.textContent);
// закладки в header
const menuMarks = document.querySelector(".users-menu-marks");
const totalMarks = menuMarks.querySelector(".count-marks");
let counterMarks = Number(totalMarks.textContent);


// добавление товара в корзину
for (let i=0; i < goodInBasket.length; i++) {
  goodInBasket[i].addEventListener("click", function() {
    modalInBasket.classList.add("open-modal");

    if (!menuBasket.classList.contains("users-menu-link-notempty")) {
      menuBasket.classList.add("users-menu-link-notempty");
    }
    counterGoods++;
    totalGoods.textContent = counterGoods;
  });
}

// добавление товара в закладки
for (let i=0; i < goodInMarks.length; i++) {
  goodInMarks[i].addEventListener("click", function() {

    if (!menuMarks.classList.contains("users-menu-link-notempty")) {
      menuMarks.classList.add("users-menu-link-notempty");
    }
    counterMarks++;
    totalMarks.textContent = counterMarks;
  });
}

// закрытие модального окна
closeInBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalInBasket.classList.remove("open-modal");
});
// окно так же закрывается при нажатии на кнопку "Продолжить покупки"
moreShopping.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalInBasket.classList.remove("open-modal");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalInBasket.classList.contains("open-modal")) {
      evt.preventDefault();
      modalInBasket.classList.remove("open-modal");
    }
  }
});
