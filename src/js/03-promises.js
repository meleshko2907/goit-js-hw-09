import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

const firstDelay = document.querySelector('[name = "delay"]');
const stepDelay = document.querySelector('[name = "step"]');
const amount = document.querySelector('[name = "amount"]');

form.addEventListener('submit', createOwnPromise);

function createOwnPromise(event){
  event.preventDefault();

  let delay = Number(firstDelay.value);
  const delayStepValue = Number(delay.value);
  console.log(delayStepValue);
  const amountValue = Number(amount.value);

for (let i = 1; i <= amountValue; i++) {
  createPromise(i, delay)
    .then(({position, delay}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
    });
    delay += delayStepValue;
}
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
  }, delay);
  });
}