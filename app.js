const menu = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');
const closeNav = document.getElementById('close');
menu.addEventListener('click', () => {
  navContainer.style.display = 'block';
  menu.style.display = 'none';
});
closeNav.addEventListener('click', () => {
  menu.style.display= 'block';
  navContainer.style.display = 'none';
});