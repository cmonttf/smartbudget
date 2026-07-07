document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.menu-link');
  links.forEach(link => link.addEventListener('mouseenter', () => link.classList.add('is-hover')));
});
