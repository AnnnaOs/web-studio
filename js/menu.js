(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    const isOpen = refs.modal.classList.toggle("is-open");
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  const menuLinks = refs.modal.querySelectorAll('a[href*="#"]');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
})();
