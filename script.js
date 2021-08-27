const output = document.querySelector('#output');
const msg = document.querySelector('#message');

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  output.textContent = msg.value;
  msg.value = '';
});
