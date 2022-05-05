const WHITECLOCK = document.getElementById('white-clock')
const BLACKCLOCK = document.getElementById('black-clock')
let turn = 'white';
let increment  = 5;
let whiteClockTimer;
let blackClockTimer;
let count;
let minutes;
let seconds;
let gameType = '01:00';


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
document.getElementById('game-btn').addEventListener("click", openForm);
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
  if (parseInt(seconds) > 0 && parseInt(seconds) < 58) {
    seconds = (parseInt(seconds) - 1) + increment;
    console.log(seconds);

    return [minutes, seconds.toString().padStart(2, "0")];
  } else {
    minutes = parseInt(minutes) - 1;
    seconds = 59
    return[minutes.toString().padStart(2, "0"), seconds.toString().padStart(2, "0")]
  }
};

//allows user to choose clock timer type
function setupGame(time) {
  stopTimers();
  gameType = time;
  turn = "white";
  WHITECLOCK.style.borderColor = 'black';
  BLACKCLOCK.style.borderColor = 'black';
  WHITECLOCK.innerHTML = time;
  BLACKCLOCK.innerHTML = time;
  closeForm();
};

//resets clock to original start time
function resetClocks() {
  stopTimers();
  WHITECLOCK.innerHTML = gameType;
  BLACKCLOCK.innerHTML = gameType;
  turn = "white";
  WHITECLOCK.style.borderColor = 'black';
  BLACKCLOCK.style.borderColor = 'black';
};

//pauses both timers
function stopTimers() {
  clearInterval(whiteClockTimer);
  clearInterval(blackClockTimer);
};

//form functions
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
