let modalMenu = document.getElementsByClassName('main-nav__modal-window')[0];
let buttonOpen = document.getElementById('toggle-menu-open');
let buttonClose = document.getElementById('toggle-menu-close');

buttonOpen.addEventListener('click', function() {
  buttonOpen.classList.add("toggle--close");
  buttonClose.classList.remove("toggle--close");
  modalMenu.classList.toggle("main-nav__modal-window-open");
})

buttonClose.addEventListener('click', function() {
  buttonClose.classList.add("toggle--close");
  buttonOpen.classList.remove("toggle--close");
  modalMenu.classList.toggle("main-nav__modal-window-open");
})
