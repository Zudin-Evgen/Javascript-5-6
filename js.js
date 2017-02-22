var start = document.querySelector('.start');
var clear = document.querySelector('.clear');
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var miliseconds = document.querySelector('.miliseconds');
var ms = 0, s = 0, m = 0, h = 0, timerId;

start.addEventListener('click', startTimer);

function startTimer() {
  clear.addEventListener('click', clearTimer);
  start.removeEventListener('click', startTimer);
  start.innerHTML = 'Pause';
  start.addEventListener('click', pauseTimer);
  timerId = setInterval(function() {
    s++;
    if(s < 10) {
      seconds.innerHTML = '0'+s;
    }
    else if(s > 9 && s != 60) {
      seconds.innerHTML = s;
    }
	else if(s === 60) {
		seconds.innerHTML = '00';
		s = 0;
		m++;
		if(m < 10) {
			minutes.innerHTML = '0'+m;	
		}
		else if (m > 9 && m != 60) {
			minutes.innerHTML = m;
		}
		else if (m === 60) {
			minutes.innerHTML = '00';
			m = 0;
			h++;
			if(h < 10) {
				hours.innerHTML = '0'+h;
			}
			else if(h > 9 && h != 24) {
				hours.innerHTML = h;
			}
			else if(h === 24) {
				hours.innerHTML = '00';
				h = 0;
			}
		}
	}
  }, 1000);
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
  hours.innerHTML = '00';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  ms = s = m = h = 0;
  clearInterval(timerId);
}
