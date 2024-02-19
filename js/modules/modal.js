function closeModal(modalSelector) {
  modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  // modal.classList.toggle('show') // Дві верхні строчки можна замінити цією(якщо цей код використовувати в проєкті, то удали цей рядок)
  document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
  modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  // modal.classList.toggle('show') // Дві верхні строчки можна замінити цією(якщо цей код використовувати в проєкті, то удали цей рядок)
  document.body.style.overflow = 'hidden';

  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId)
  }
}

function modal(triggerSelector, modalSelector, modalTimerId) {

  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  function ShowModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', ShowModalByScroll);
    }
  }

  window.addEventListener('scroll', ShowModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};