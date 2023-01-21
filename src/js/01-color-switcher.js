const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  btnStart.addEventListener('click', onStartClick);
  btnStop.addEventListener('click', onStopClick);

  let timerId = null;

  function onStartClick(){
    timer.start ();
    timerId = setTimeout(onStartClick, 2000);
    body.style.backgroundColor = getRandomHexColor();
  };
  function onStopClick() {
    timer.stop ();
    clearTimeout(timerId);
  };
  const timer = {
    start() {
        const startTime = Date.now;
        btnStart.disabled = true;
        btnStop.disabled = false;
    },
    stop() {
        btnStart.disabled = false;
        btnStop.disabled = true;
    }
  }