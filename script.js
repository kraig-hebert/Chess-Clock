const WHITECLOCK = document.getElementById('white-clock')
const BLACKCLOCK = document.getElementById('black-clock')
let turn = 'white';
let whiteClock;
let blackClock;
let count;
let minutes;
let seconds;


document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    if (turn == 'white') {
      clearInterval(blackClock)
      document.getElementById('white').style.borderColor = 'yellow';
      document.getElementById('black').style.borderColor = 'black';
      document.getElementById('white-clock').style.textDecoration = 'underline';
      document.getElementById('black-clock').style.textDecoration = 'none';

      whiteClock = setInterval(startWhiteClock, 1000);
    } else {
        clearInterval(whiteClock)
        document.getElementById('black').style.borderColor = 'yellow';
        document.getElementById('white').style.borderColor = 'black';
        document.getElementById('black-clock').style.textDecoration = 'underline';
        document.getElementById('white-clock').style.textDecoration = 'none';

        blackClock = setInterval(startBlackClock, 1000);
    } 
  }
})

function startWhiteClock () {
  turn = 'black'
  count = WHITECLOCK.innerHTML;
  [minutes, seconds] = count.split(':');
  if (parseInt(minutes) == 0 && parseInt(seconds) == 0) {
    clearInterval(whiteClock);
    document.getElementById('white').style.borderColor = 'red';
    WHITECLOCK.innerHTML = '00:00'
  } else {
    [minutes, seconds] = setTimer(count);
  }
  WHITECLOCK.innerHTML = minutes + ':' + seconds;
};

function startBlackClock () {
  turn = 'white'
  count = BLACKCLOCK.innerHTML;
  [minutes, seconds] = count.split(':');
  if (parseInt(minutes) == 0 && parseInt(seconds) == 0) {
    clearInterval(whiteClock);
    document.getElementById('white').style.borderColor = 'red';
    BLACKCLOCK.innerHTML = '00:00'
  } else {
    [minutes, seconds] = setTimer(count);
  }
  BLACKCLOCK.innerHTML = minutes + ':' + seconds;
};

function setTimer() {
  if (parseInt(seconds) > 0) {
    seconds = parseInt(seconds) - 1;
    return [minutes, seconds.toString().padStart(2, "0")];
  } else {
    minutes = parseInt(minutes) - 1;
    seconds = 59
    return[minutes.toString().padStart(2, "0"), seconds.toString().padStart(2, "0")]
  }
};
