const WHITECLOCK = document.getElementById('white-clock')
const BLACKCLOCK = document.getElementById('black-clock')
let turn = 'white';
let whiteTimer = new Date(0, 0, 0, 0, 10, 0);
let blackTimer = new Date(0, 0, 0, 0, 10, 0);
let whiteTurn;
let blackTurn;
let gameType = {
  Time: 10,
  Increment: 0,
};


//add game button event listeners
document.getElementById('start-btn').addEventListener("click", startGame);
document.getElementById('game-btn').addEventListener("click", openForm);
document.getElementById('reset-btn').addEventListener("click", resetClocks);
document.getElementById('stop-btn').addEventListener("click", stopTimers);
document.getElementById('cancel').addEventListener("click", closeForm);


//starts game with white going first
function startGame () {
  // Event Listener on the space bar to trigger turn change
  document.addEventListener('keydown', handleKeyDownEvent); 
  turn = "black";
  WHITECLOCK.style.borderColor = 'yellow';
  document.activeElement.blur()
  document.getElementById('start-btn').style.backgroundColor = 'yellow'
  document.getElementById('start-btn').removeEventListener("click", startGame)
  whiteTurn = setInterval(startWhiteTurn, 1000);
};

// timer that counts down whites clock by 1 second
function startWhiteTurn () {
  if (whiteTimer.getMinutes() == 0 && whiteTimer.getSeconds() == 0) {
    clearInterval(whiteTurn);
    WHITECLOCK.style.borderColor = 'red';
    WHITECLOCK.innerHTML = '00:00'
  } else {
      whiteTimer.setSeconds(whiteTimer.getSeconds() - 1);
      WHITECLOCK.innerHTML = whiteTimer.getMinutes().toString().padStart(2, "0") + ':' + whiteTimer.getSeconds().toString().padStart(2, "0");
  }
};

// adds increment to white timer after turn ends
function endWhiteTurn () {
  clearInterval(whiteTurn);
  whiteTimer.setSeconds(whiteTimer.getSeconds() + gameType.Increment);
  WHITECLOCK.innerHTML = whiteTimer.getMinutes().toString().padStart(2, "0") + ':' + whiteTimer.getSeconds().toString().padStart(2, "0");

};

// timer that counts down blacks clock by 1 second
function startBlackTurn () {
  if (blackTimer.getMinutes() == 0 && blackTimer.getSeconds() == 0) {
    clearInterval(blackClockTimer);
    BLACKCLOCK.style.borderColor = 'red';
    BLACKCLOCK.innerHTML = '00:00'
  } else {
    blackTimer.setSeconds(blackTimer.getSeconds() - 1);
    BLACKCLOCK.innerHTML = blackTimer.getMinutes().toString().padStart(2, "0") + ':' + blackTimer.getSeconds().toString().padStart(2, "0");
  }
};

// adds increment to black timer after turn ends
function endBlackTurn () {
  clearInterval(blackTurn);
  blackTimer.setSeconds(blackTimer.getSeconds() + gameType.Increment);
  BLACKCLOCK.innerHTML = blackTimer.getMinutes().toString().padStart(2, "0") + ':' + blackTimer.getSeconds().toString().padStart(2, "0");
};

//allows user to choose clock timer type
function setupGame(time, increment) {
  gameType.Time = time;
  gameType.Increment = increment
  resetClocks();
  closeForm();
};

//resets clock to original start time
function resetClocks() {
  stopTimers();
  document.removeEventListener("keydown", handleKeyDownEvent);
  whiteTimer.setMinutes(gameType.Time);
  whiteTimer.setSeconds(0);
  WHITECLOCK.innerHTML = whiteTimer.getMinutes().toString().padStart(2, "0") + ':' + whiteTimer.getSeconds().toString().padStart(2, "0");
  blackTimer.setMinutes(gameType.Time);
  blackTimer.setSeconds(0);
  BLACKCLOCK.innerHTML = blackTimer.getMinutes().toString().padStart(2, "0") + ':' + blackTimer.getSeconds().toString().padStart(2, "0");
  turn = "white";
  WHITECLOCK.style.borderColor = 'black';
  BLACKCLOCK.style.borderColor = 'black';
  document.getElementById('start-btn').style.backgroundColor = 'green'
  document.getElementById('start-btn').addEventListener("click", startGame);
};

//pauses both timers
function stopTimers() {
  clearInterval(whiteTurn);
  clearInterval(blackTurn);
  document.activeElement.blur()
};

//opens hidden form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// hides form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// handles action on space bar 
function handleKeyDownEvent (event) {
  if (event.code === 'Space') {
    if (turn == 'white') {
      endBlackTurn(blackTurn);
      WHITECLOCK.style.borderColor = 'yellow';
      BLACKCLOCK.style.borderColor = 'black';
      turn = "black";
      whiteTurn = setInterval(startWhiteTurn, 1000);
    } else {
        endWhiteTurn(whiteTurn);
        BLACKCLOCK.style.borderColor = 'yellow';
        WHITECLOCK.style.borderColor = 'black';
        turn = "white";
        blackTurn = setInterval(startBlackTurn, 1000);
    } 
  }
};

