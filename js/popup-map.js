const modalMap = document.querySelector(".modal-map");
const openMap = document.querySelector(".open-modal-map");
const closeMap = modalMap.querySelector(".close-modal-map");

openMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("open-modal");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("open-modal");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("open-modal")) {
      evt.preventDefault();
      modalMap.classList.remove("open-modal");
    }
  }
});
