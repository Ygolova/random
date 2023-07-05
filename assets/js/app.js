const names = document.querySelectorAll('.header-btn-Name');
const child = document.querySelectorAll('.results-back__grid__numbers');
const results = document.querySelectorAll('.h1');
const results2 = document.querySelectorAll('.color');
const randoms = document.querySelectorAll('.difference');
const butt = document.querySelector('.butt');
const y = document.querySelector('.button');
const ppp = document.getElementById('s');
const times = document.querySelectorAll('.times')[0];
const check = document.querySelectorAll('.check')[0];
const i1 = document.querySelectorAll('.i1')[0];
const i2 = document.querySelectorAll('.i2')[0];

let intervalId = null;

let n1 = 0;
let n2 = 0;

check.checked = true;

ttimes = setInterval(() => {
  displayCurrentTime();
}, 1000);

function displayCurrentTime() {
  const date = new Date();
  const date_str = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ].join('-');

  const date_num = [
    String(date.getHours()).padStart(2, '0'),
    String(date.getMinutes()).padStart(2, '0'),
    String(date.getSeconds()).padStart(2, '0'),
  ].join(':');

  times.innerHTML = `Текущее дата/время: ${date_str} <u>${date_num}</u>`;
  times.style.display = '';
  times.classList.add('show');
}

check.addEventListener('change', function () {
  if (this.checked == true) {
    displayCurrentTime();
    intervalId = setInterval(displayCurrentTime, 1000);
  } else {
    clearInterval(intervalId);
    clearInterval(ttimes);
    times.classList.remove('show');
  }
});

// console.log(results);

console.log(randoms);

// function random(min, max) {

// }

function on(min, max) {
  return Math.random() * (max - min) + min;
}

function createClickHandlers() {
  butt.onclick = () => {
    const element = document.getElementsByClassName('results-back__footer')[0];
    element.classList.add('cant');

    const ys = document.querySelectorAll('.difference');

    ys.forEach((el) => {
      el.setAttribute('disabled', 'disabled');
      el.classList.add('opacity');
    });

    document.querySelectorAll('.h1').forEach((element) => element.remove());

    var resultsGrid = document.querySelectorAll('.results-back__grid__numbers');

    if (window.innerWidth < 576) {
      resultsGrid[0].innerHTML = `Нажми<br>"Назар"`;
      resultsGrid[1].innerHTML = `Нажми<br>"Юра"`;
    } else {
      resultsGrid[0].textContent = `Нажми "Назар"`;
      resultsGrid[1].textContent = `Нажми "Юра"`;
    }

    if (document.querySelector('.color')) {
      document.querySelectorAll('.color')[0].remove();
    }
    if (document.querySelector('.color2')) {
      document.querySelectorAll('.color2')[0].remove();
    }
    results[0].style.color = '';
    results[1].style.color = '';
    storedNumber = null; // Переменная для сохранения первого числа
    storedNumber2 = null; // Переменная для сохранения второго числа

    butt.value = 'accept';

    setInterval(() => {
      if (typeof storedNumber == 'number' && typeof storedNumber2 == 'number') {
        document.querySelectorAll('.difference').forEach((el) => {
          el.removeAttribute('disabled');
        });

        document.querySelectorAll('.opacity').forEach((el) => {
          el.classList.remove('opacity');
        });
      }
    }, 100);
  };

  let storedNumber = null; // Переменная для сохранения первого числа
  let storedNumber2 = null; // Переменная для сохранения второго числа

  function num1() {
    names[0].onclick = () => {
      if (!document.querySelectorAll('.h1')[0]) {
        if (!document.querySelector('.color')) {
          const randoms1 = +randoms[0].value;
          const randoms2 = +randoms[1].value;
          storedNumber = +on(randoms1, randoms2).toFixed(0);

          var table = document.querySelectorAll('.results-back__grid__numbers');
          table[0].textContent = '';

          results[0].textContent = storedNumber;
          results[0].className = 'color';
          child[0].prepend(results[0]);

          var wrapper = document.createElement('h1');
          wrapper.classList.add('color');

          butt.value = 'Заново';

          if (
            typeof storedNumber === 'number' &&
            typeof storedNumber2 === 'number'
          ) {
            if (storedNumber > storedNumber2) {
              results[0].style.color = 'green';
              results[1].style.color = 'red';
            } else if (storedNumber < storedNumber2) {
              results[0].style.color = 'red';
              results[1].style.color = 'green';
            } else if (storedNumber == storedNumber2) {
              results[0].style.color = 'grey';
              results[1].style.color = 'grey';
            }
          }

          if (
            typeof storedNumber == 'number' &&
            typeof storedNumber2 == 'number'
          ) {
            if (storedNumber > storedNumber2) {
              n1++;
              i1.textContent = n1;
            } else if (storedNumber < storedNumber2) {
              n2++;
              i2.textContent = n2;
            }
          }
          if (+i1.innerHTML > +i2.innerHTML) {
            i1.style.color = 'green';
            i2.style.color = 'red';
          } else if (+i1.innerHTML < +i2.innerHTML) {
            i1.style.color = 'red';
            i2.style.color = 'green';
          } else if (+i1.innerHTML == +i2.innerHTML) {
            i1.style.color = 'gray';
            i2.style.color = 'gray';
          }
        }
      }
    };
    return storedNumber;
  }

  num1();

  function num2() {
    names[1].onclick = () => {
      if (!document.querySelectorAll('.h1')[1]) {
        if (!document.querySelector('.color2')) {
          const randoms1 = +randoms[0].value;
          const randoms2 = +randoms[1].value;
          storedNumber2 = +on(randoms1, randoms2).toFixed(0);

          var table = document.querySelectorAll('.results-back__grid__numbers');
          table[1].textContent = '';

          results[1].textContent = storedNumber2;
          results[1].className = 'color2';
          child[1].prepend(results[1]);

          var wrapper2 = document.createElement('h1');
          wrapper2.classList.add('color2');
          console.log(results);
          butt.value = 'Заново';

          if (
            typeof storedNumber === 'number' &&
            typeof storedNumber2 === 'number'
          ) {
            if (storedNumber > storedNumber2) {
              results[0].style.color = 'green';
              results[1].style.color = 'red';
            } else if (storedNumber < storedNumber2) {
              results[0].style.color = 'red';
              results[1].style.color = 'green';
            } else if (storedNumber == storedNumber2) {
              results[0].style.color = 'grey';
              results[1].style.color = 'grey';
            }
          }

          if (
            typeof storedNumber == 'number' &&
            typeof storedNumber2 == 'number'
          ) {
            if (storedNumber > storedNumber2) {
              n1++;
              i1.textContent = n1;
            } else if (storedNumber < storedNumber2) {
              n2++;
              i2.textContent = n2;
            }
          }
          if (+i1.innerHTML > +i2.innerHTML) {
            i1.style.color = 'green';
            i2.style.color = 'red';
          } else if (+i1.innerHTML < +i2.innerHTML) {
            i1.style.color = 'red';
            i2.style.color = 'green';
          } else if (+i1.innerHTML == +i2.innerHTML) {
            i1.style.color = 'gray';
            i2.style.color = 'gray';
          }
        }
      }
    };
    return storedNumber2;
  }

  num2();

  console.log(null);

  names[2].onclick = () => {
    console.log(storedNumber, storedNumber2);

    if (typeof storedNumber == 'number' && typeof storedNumber2 == 'object') {
      return false;
    }
    if (typeof storedNumber == 'object' && typeof storedNumber2 == 'number') {
      return false;
    }

    if (storedNumber !== 999 && storedNumber2 !== 999) {
      if (!document.querySelectorAll('.h1')[1]) {
        document
          .querySelectorAll('.results-back__grid__numbers')
          .forEach((el) => (el.textContent = ''));

        const randoms1 = +randoms[0].value;
        const randoms2 = +randoms[1].value;

        storedNumber = +on(randoms1, randoms2);
        storedNumber2 = +on(randoms1, randoms2);

        results[0].textContent = storedNumber.toFixed(0);
        results[0].className = 'color';
        child[0].prepend(results[0]);

        results[1].textContent = storedNumber2.toFixed(0);
        results[1].className = 'color2';
        child[1].prepend(results[1]);

        if (
          typeof storedNumber === 'number' &&
          typeof storedNumber2 === 'number'
        ) {
          if (storedNumber > storedNumber2) {
            results[0].style.color = 'green';
            results[1].style.color = 'red';
          } else if (storedNumber === storedNumber2) {
            results[0].style.color = 'gray';
            results[1].style.color = 'gray';
          } else {
            results[0].style.color = 'red';
            results[1].style.color = 'green';
          }
        }
        butt.value = 'Заново';

        console.log(storedNumber.toFixed(0), storedNumber2.toFixed(0));

        // setInterval(() => {
        //   if (butt.value == 'Заново') {
        //     names[2].onclick = false
        //   }
        // }, 100);
      }
    }
    if (+i1.innerHTML > +i2.innerHTML) {
      i1.style.color = 'green';
      i2.style.color = 'red';
    } else if (+i1.innerHTML < +i2.innerHTML) {
      i1.style.color = 'red';
      i2.style.color = 'green';
    } else if (+i1.innerHTML == +i2.innerHTML) {
      i1.style.color = 'gray';
      i2.style.color = 'gray';
    }
    if (typeof storedNumber == 'number' && typeof storedNumber2 == 'number') {
      if (storedNumber > storedNumber2) {
        n1++;
        i1.textContent = n1;
      } else if (storedNumber < storedNumber2) {
        n2++;
        i2.textContent = n2;
      }
    }
  };
}
createClickHandlers();
// console.log(names[1]);

// function assignClickHandlers() {
//   names[0].onclick = function xxx(yyy) {
//     randoms1 = parseInt(randoms[0].value);
//     randoms2 = parseInt(randoms[1].value);
//     return results[0].textContent = on(randoms1, randoms2).toFixed(0);
//   };

//   names[1].onclick = function zzz(fff) {
//     randoms1 = parseInt(randoms[0].value);
//     randoms2 = parseInt(randoms[1].value);
//     return results[1].textContent = on(randoms1, randoms2).toFixed(0);
//   };

//   names[2].onclick = () => {
//     results.forEach((el) => {
//       randoms1 = parseInt(randoms[0].value);
//       randoms2 = parseInt(randoms[1].value);
//       el.textContent = on(randoms1, randoms2).toFixed(0);
//     });
//   };

//   console.log();
// }

// assignClickHandlers();

// y.style.color = 'red';

// results.forEach((el2) => {
//   results.style.color = 'red';
// });
