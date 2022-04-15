// form Validation
const form = document.getElementsByTagName('form')[0];
const emailError = form.getElementsByTagName('span');

form.addEventListener('submit', (e) => {
  const email = form.email.value;
  if (email.toLowerCase() !== email) {
    e.preventDefault();
    emailError[0].innerHTML = 'Please Entrer a valid email in lowercase';
  } else {
    form.action = 'https://formspree.io/f/mwkynqkg';
  }
});