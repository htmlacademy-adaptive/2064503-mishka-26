var modalMenu = document.getElementsByClassName('main-nav__modal-window')[0];
var buttonOpen = document.getElementById('toggle-menu-open');
var buttonClose = document.getElementById('toggle-menu-close');

buttonOpen.onclick = function () {
  buttonOpen.classList.add("toggle-close");
  buttonClose.classList.remove("toggle-close");
  modalMenu.classList.toggle("main-nav__modal-window-open");
}

buttonClose.onclick = function () {
  buttonClose.classList.add("toggle-close");
  buttonOpen.classList.remove("toggle-close");
  modalMenu.classList.toggle("main-nav__modal-window-open");
}
