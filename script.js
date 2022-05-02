const WHITECLOCK = document.getElementById('white-clock')
const BLACKCLOCK = document.getElementById('black-clock')

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      startClock();
    }
  })

function startClock () {
    let count;
    var x = setInterval (function() {
        count = parseInt(WHITECLOCK.innerHTML) - 1;
        console.log(WHITECLOCK.innerHTML)
        WHITECLOCK.innerHTML = count.toString();
    }, 1000);
}