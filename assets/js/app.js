const names = document.querySelectorAll('.header-btn-Name');
const results = document.querySelectorAll('.h1');
const y = document.querySelector('.button');
console.log(results);

function random(math) {
  return Math.random() * math;
}

console.log(names[1]);



function assignClickHandlers() {
  names[0].onclick = () => {
    results[0].textContent = random(100).toFixed(0);
  };
  names[1].onclick = () => {
    results[1].textContent = random(100).toFixed(0);
  };
  names[2].onclick = () => {
    results.forEach((el) => {
      el.textContent = random(100).toFixed(0);
    });
  };
}

assignClickHandlers();

// y.style.color = 'red';

// results.forEach((el2) => {
//   results.style.color = 'red';
// });
