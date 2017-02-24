var time = document.querySelector('.h-m-s');
var start = document.querySelector('.start');
var clear = document.querySelector('.clear');
var msek = document.querySelector('.msek');
var ms = 0, s = 0, m = 0, h = 0, timerId, count = 0, z = 0;

start.addEventListener('click', startTimer);

function startTimer() {
  clear.addEventListener('click', clearTimer);
  start.removeEventListener('click', startTimer);
  start.innerHTML = 'Pause';
  start.addEventListener('click', pauseTimer);
  timerId = setInterval(function() {
    count+=10;
    z = count%100;
    ms = count%1000;
    s = Math.floor(count/1000)%60;
    if(s < 10) {s = '0'+s;}
    m = Math.floor(count/60000)%60;
    if(m < 10) {m = '0'+m;}
    h = Math.floor(count/360000)%24;
    if(h < 10) {h = '0'+h;}
    time.innerHTML = h + ':'+ m + ':'+ s;
    msek.innerHTML = ms/10+''+z/10;
  }, 10);
}

function pauseTimer() {
  start.removeEventListener('click', pauseTimer);
  start.innerHTML = 'Continue';
  start.addEventListener('click', contTimer);
  clearInterval(timerId);
}

function contTimer() {
  start.removeEventListener('click', contTimer);
  start.innerHTML = 'Pause';
  start.addEventListener('click', pauseTimer);
  startTimer();
}

function clearTimer() {
  clear.removeEventListener('click', clearTimer);
  start.removeEventListener('click', pauseTimer);
  start.addEventListener('click', startTimer);
  start.innerHTML = 'Start';
  start.className = 'start';
  time.innerHTML = '00:00:00';
  msek.innerHTML = '0';
  ms = s = m = h = count = 0;
  clearInterval(timerId);
}
