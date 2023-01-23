import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const pickedDate = new Date(selectedDates[0]);
      const nowDate = new Date(this.now);
      if (nowDate.getTime() > pickedDate.getTime()) { 
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtn.disabled = true;
        return;
      }
      startBtn.disabled = false;
    },
  };
  flatpickr(input, options);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };
  function pad(value) {
    return String(value).padStart(2, '0');
 }

 startBtn.addEventListener('click', onTimer);

function onTimer(){
  const timerId = setInterval(() => {
    let deltaTime = new Date(input.value) - new Date();
           startBtn.disabled = true;
           let timeComponents = convertMs(deltaTime);
           console.log(timeComponents);
           showTime(timeComponents);
           if (deltaTime <= 1000) {
               Notiflix.Notify.success('Sol lucet omnibus');
               startBtn.disabled = false;
               clearInterval(timerId); 
            } 
    }, 1000)
    } 

  function showTime({ days, hours, minutes, seconds }) { 
      daysSpan.textContent = days;
       hoursSpan.textContent = hours;
       minutesSpan.textContent = minutes;
       secondsSpan.textContent = seconds;
}  