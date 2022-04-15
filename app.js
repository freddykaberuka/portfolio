/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
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

// local storage

const store = (data) => {
  window.localStorage.setItem('dataForm', JSON.stringify(data));
  return data;
};
const readData = () => {
  const storedData = window.localStorage.getItem('dataForm');
  if (!storedData) return;
  const data = JSON.parse(storedData);
  document.getElementById('Names').value = data.Names;
  document.getElementById('email').value = data.email;
  document.getElementById('comments').value = data.comments;
};