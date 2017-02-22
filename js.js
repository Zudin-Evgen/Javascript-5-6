var start = document.querySelector('.start');
var clear = document.querySelector('.clear');
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var miliseconds = document.querySelector('.miliseconds');
var ms = 0, s = 0, m = 0, h = 0, timerId, pause, cont;

start.addEventListener('click', startTimer);

function startTimer() {
  start.removeEventListener('click', startTimer);
  clear.addEventListener('click', clearTimer);
  start.innerHTML = 'Pause';
  start.className = 'pause';
  pause = document.querySelector('.pause');
  pause.addEventListener('click', pauseTimer);
  timerId = setInterval(function() {
    s++;
    if(s < 10) {
      seconds.innerHTML = '0'+s;
    }
    else if(s > 9) {
      seconds.innerHTML = s;
    }
  }, 1000);
}

function pauseTimer() {
  pause.removeEventListener('click', pauseTimer);
  start.innerHTML = 'Continue';
  start.className = 'cont';
  cont = document.querySelector('.cont');
  cont.addEventListener('click', contTimer);
  clearInterval(timerId);
}

function contTimer() {
  cont.removeEventListener('click', contTimer);
  cont.innerHTML = 'Pause';
  cont.className = 'pause';
  pause = document.querySelector('.pause');
  pause.addEventListener('click', pauseTimer);
  startTimer();
}

function clearTimer() {
  clear.removeEventListener('click', clearTimer);
  pause.removeEventListener('click', pauseTimer);
  start.addEventListener('click', startTimer);
  start.innerHTML = 'Start';
  start.className = 'start';
  hours.innerHTML = '00';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  ms = s = m = h = 0;
  clearInterval(timerId);
}
