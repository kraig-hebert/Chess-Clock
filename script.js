const WHITECLOCK = document.getElementById('white-clock')
const BLACKCLOCK = document.getElementById('black-clock')
let turn = 'white';
let whiteClock;
let blackClock;
let count = 100000;


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      if (turn == 'white') {
        clearInterval(blackClock)
        whiteClock = setInterval(startWhiteClock, 1000);
      }
      else {
        clearInterval(whiteClock)
        blackClock = setInterval(startBlackClock, 1000);
      } 
    }
  })

function getTimeRemaining(count) {
  count = Date.parse(count);
  const seconds = Math.floor( (count/1000) % 60 );
  const minutes = Math.floor( (count/1000/60) % 60 ); 
}

function startWhiteClock () {
  turn = 'black'
  count = parseInt(WHITECLOCK.innerHTML) - 1;
  WHITECLOCK.innerHTML = count.toString();
}

function startBlackClock () {
  turn = 'white'
  count = parseInt(BLACKCLOCK.innerHTML) - 1;
  BLACKCLOCK.innerHTML = count.toString();
}