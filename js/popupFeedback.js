const modalFeedback = document.querySelector(".modal-feedback");
const openFeedback = document.querySelector(".open-modal-feedback");
const closeFeedback = modalFeedback.querySelector(".close-modal-feedback");
const formFeedback = modalFeedback.querySelector(".form-feedback");

const nameFeedback = modalFeedback.querySelector(".feedback-name");
const emailFeedback = modalFeedback.querySelector(".feedback-email");
const messageFeedback = modalFeedback.querySelector(".feedback-message");

// найти все поля в форме
const fieldsFormFeedback = modalFeedback.querySelectorAll(".feedback-field");

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

// поставить автофокус в первое пустое поле в форме
function putFocus(fields) {
  for (let i=0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].focus();
      return
    }
  }
return
};

// поменять цвет рамки у пустых полей
function markEmptyField(fields) {
  for (let i=0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].style.borderColor = "#BA2732";
    } else {
      fields[i].style.borderColor = "#C5C5C5";
    }
  }
return
};

openFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("open-modal");

  putFocus(fieldsFormFeedback);

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
  modalFeedback.classList.remove("error-form");
});

formFeedback.addEventListener("submit", function(evt) {
  if (!nameFeedback.value || !emailFeedback.value || !messageFeedback.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("error-form");
    modalFeedback.offsetWidth = formFeedback.offsetWidth;
    modalFeedback.classList.add("error-form");

    putFocus(fieldsFormFeedback);
    markEmptyField(fieldsFormFeedback);

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
      modalFeedback.classList.remove("error-form");
    }
  }
});
