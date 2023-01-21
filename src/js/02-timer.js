import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] <= new Date()) { 
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtn.disabled = true;
        return;
      }
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
    }, 1000)
    } 