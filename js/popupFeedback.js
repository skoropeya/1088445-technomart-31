const modalFeedback = document.querySelector(".modal-feedback");
const openFeedback = document.querySelector(".open-modal-feedback");
const closeFeedback = modalFeedback.querySelector(".close-modal-feedback");
const formFeedback = modalFeedback.querySelector(".form-feedback");
const nameFeedback = modalFeedback.querySelector(".feedback-name");
const emailFeedback = modalFeedback.querySelector(".feedback-email");
const messageFeedback = modalFeedback.querySelector(".feedback-message");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let storageMessage = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
  storageMessage = localStorage.getItem("message");
} catch (err) {
  isStorageSupport = false;
}

openFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("open-modal");
  if (!nameFeedback.value) {
    nameFeedback.focus();
  } else if (!emailFeedback.value) {
    emailFeedback.focus();
  } else {
    messageFeedback.focus();
  }
  if (storageName) {
    nameFeedback.value = storageName;
  }
  if (storageEmail) {
    emailFeedback.value = storageEmail;
  }
  if (storageMessage) {
    messageFeedback.value = storageMessage;
  }
});

closeFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("open-modal");
  formFeedback.classList.remove("error-form");
});


formFeedback.addEventListener("submit", function(evt) {
  if (!nameFeedback.value || !emailFeedback.value || !messageFeedback.value) {
    evt.preventDefault();
    formFeedback.classList.remove("error-form");
    formFeedback.offsetWidth = formFeedback.offsetWidth;
    formFeedback.classList.add("error-form");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameFeedback.value);
      localStorage.setItem("email", emailFeedback.value);
      localStorage.setItem("message", messageFeedback.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("open-modal")) {
      evt.preventDefault();
      modalFeedback.classList.remove("open-modal");
      formFeedback.classList.remove("error-form");
    }
  }
});
