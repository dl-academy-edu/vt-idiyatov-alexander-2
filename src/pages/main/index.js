var popup = document.querySelector(".modal-bg_js");
var buttonOpen = document.querySelector(".header-button_js");
var buttonClose = document.querySelector(".modal-close_js");
var input = document.querySelector(".form-input_js");

buttonOpen.addEventListener("click", function () {
  popup.classList.remove("modal-bg_close");
  input.focus();
});

buttonClose.addEventListener("click", function () {
  popup.classList.add("modal-bg_close");
  buttonOpen.focus();
});
// Escape
window.addEventListener("keydown", function (event) {
  if(!popup.classList.contains("modal-bg_close") && event.code === "Escape"){
    popup.classList.add("modal-bg_close");
    buttonOpen.focus();
  }
});