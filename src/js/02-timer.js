import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const input = document.querySelector('#datetime-picker');

const timer = document.querySelector('.timer');
    console.log(timer);
    timer.style.display = 'flex';
    timer.style.gap = '10px';
    timer.style.fontSize = '25px';

const startBtn = document.querySelector('button[data-start]');
    startBtn.setAttribute ('disabled',true);

const refs = {
    daysData: document.querySelector('span[data-days]'),
    hoursData: document.querySelector('span[data-hours]'),
    minutesData: document.querySelector('span[data-minutes]'),
    secondsData: document.querySelector('span[data-seconds]')
}

let intervalId = null;
let backTime = 0;

const currentDate = new Date();
    console.log(currentDate);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] - currentDate < 0) {
            Notify.failure('Please choose a date in the future', {
              position: 'center-top',
              clickToClose: true,
              width: '300px',
            });
          } else {
            startBtn.removeAttribute('disabled');
          }
    },
  };
  console.log(options);

  const flatPicker = flatpickr(input, options);
  
  startBtn.addEventListener('click', startTime);

  function startTime() {
    intervalId = setInterval(() => {
      backTime = flatPicker.selectedDates[0] - new Date();
      const updateTime = convertMs(backTime);
      updateClock(updateTime);
      console.log(backTime);
  
      if (backTime <= 900) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days =  addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours =  addLeadingZero (Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes =  addLeadingZero (Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds =  addLeadingZero (Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function updateClock({ days, hours, minutes, seconds }) {
    refs.daysData.textContent = days;
    refs.hoursData.textContent = hours;
    refs.minutesData.textContent = minutes;
    refs.secondsData.textContent = seconds;
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
