const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId = null;

console.log(stopButton);
console.log(startButton);

startButton.addEventListener('click', () => {
    intervalId = setInterval(() => {
    const hexColor = getRandomHexColor();
    document.body.style.background = hexColor;
    startButton.setAttribute('disabled', true);
    if (intervalId){
      stopButton.removeAttribute('disabled');
    }
}, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startButton.removeAttribute('disabled');
  
    if (intervalId) {
      stopButton.setAttribute('disabled', true);
    }
  });



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }