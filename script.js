const WHITECLOCK = document.getElementById('white-clock')
const BLACKCLOCK = document.getElementById('black-clock')
let turn = 'white';
let whiteClockTimer;
let blackClockTimer;
let count;
let minutes;
let seconds;


// Event Listener on the space bar to swap timers
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    if (turn == 'white') {
      clearInterval(blackClockTimer)
      WHITECLOCK.style.borderColor = 'yellow';
      BLACKCLOCK.style.borderColor = 'black';
      turn = "black";
      whiteClockTimer = setInterval(startWhiteClock, 1000);
    } else {
        clearInterval(whiteClockTimer)
        BLACKCLOCK.style.borderColor = 'yellow';
        WHITECLOCK.style.borderColor = 'black';
        turn = "white";
        blackClockTimer = setInterval(startBlackClock, 1000);
    } 
  }
})

//add game button event listeners
document.getElementById('game-btn').addEventListener("click", setGame);
document.getElementById('reset-btn').addEventListener("click", resetClocks);
document.getElementById('stop-btn').addEventListener("click", stopTimers);




function startWhiteClock () {
  count = WHITECLOCK.innerHTML;
  [minutes, seconds] = count.split(':');
  if (parseInt(minutes) == 0 && parseInt(seconds) == 0) {
    clearInterval(whiteClockTimer);
    WHITECLOCK.style.borderColor = 'red';
    WHITECLOCK.innerHTML = '00:00'
  } else {
    [minutes, seconds] = setTimer();
    WHITECLOCK.innerHTML = minutes + ':' + seconds;
  }
};

// timer countdown that repeats every 1 second
function startBlackClock () {
  count = BLACKCLOCK.innerHTML;
  [minutes, seconds] = count.split(':');
  if (parseInt(minutes) == 0 && parseInt(seconds) == 0) {
    clearInterval(blackClockTimer);
    BLACKCLOCK.style.borderColor = 'red';
    BLACKCLOCK.innerHTML = '00:00'
  } else {
    [minutes, seconds] = setTimer();
    BLACKCLOCK.innerHTML = minutes + ':' + seconds;
  }
};

// takes current time and ticks off 1 second
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

//allows user to choose clock timer type
function setGame() {

};

//resets clock to original start time
function resetClocks() {
  stopTimers();
  WHITECLOCK.innerHTML = "10:00";
  BLACKCLOCK.innerHTML = "10:00";
  turn = "white";
  WHITECLOCK.style.borderColor = 'black';
  BLACKCLOCK.style.borderColor = 'black';
};

//pauses both timers
function stopTimers() {
  clearInterval(whiteClockTimer);
  clearInterval(blackClockTimer);
};
