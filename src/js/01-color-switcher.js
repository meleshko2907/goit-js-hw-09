const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;

console.log(stopBtn);
console.log(startBtn);

startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
    const hexColor = getRandomHexColor();
    document.body.style.background = hexColor;
    startBtn.setAttribute('disabled', true);
    if (intervalId){
        stopBtn.removeAttribute('disabled');
    }
}, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled');
  
    if (intervalId) {
      stopBtn.setAttribute('disabled', true);
    }
  });



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }