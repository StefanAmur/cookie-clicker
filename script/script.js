
let counter = parseInt(document.getElementById('total-money').textContent);

// increase total amount by 1 for each click
let increase = document.getElementById('increase');
increase.addEventListener('click', () => {
    counter = counter + multiplier;
    document.getElementById('total-money').textContent = counter;
})

// add multiplier button, price doubles each time it is used
let multiplier = 1;
let multiplierPrice = document.getElementById('multiplier-cost').textContent;
document.getElementById('multiply').addEventListener('click', () => {
    if (counter > multiplierPrice) {
        // multiplier = 5;
        multiplier = multiplier * 2;
        counter = counter - multiplierPrice;
        document.getElementById('total-money').textContent = counter;
        document.getElementById('multiply-by').textContent = `Multiply by ${multiplier * 2}`;
        multiplierPrice = multiplierPrice * 2;
        document.getElementById('multiplier-cost').textContent = multiplierPrice;
    } else {
        console.log(`You need ${multiplierPrice}`);
    }
})

// autoclicker, price doubles each time it's bought
let autoclickerPrice = document.getElementById('autoclick-cost').textContent;
document.getElementById('autoclick').addEventListener('click', () => {
    if (counter > autoclickerPrice) {
        counter = counter - autoclickerPrice;
        autoclickerPrice = autoclickerPrice * 2;
        document.getElementById('autoclick-cost').textContent = autoclickerPrice;
        setInterval(() => {
            autoClick();
        }, 1000);
    } else {
        console.log(`You need ${autoclickerPrice}`);
    }
})

// auto increases the total amount by value of multiplier after purchase of autoclicker
function autoClick() {
    counter = counter + multiplier;
    document.getElementById('total-money').textContent = counter;
}


// bonus part starts here - still work in progress
// atm it does not work correctly
let bonusPrice = document.getElementById('bonus-cost').textContent;
let bonusBtn = document.getElementById('bonus');
bonusBtn.addEventListener('click', () => {
    if (counter > bonusPrice) {
        counter = counter - bonusPrice;
        console.log(counter);
        doubleMultiplier();
        console.log(`The multiplier now is: ${multiplier}`);
        setTimeout(() => {
            normalMultiplier()
        }, 20000);
    } else {
        console.log('you need more money');
    }

})


// this function gets called when user clicks on bonus button
function doubleMultiplier() {
    multiplier = multiplier * 2;
    bonusBtn.setAttribute('disabled', 'true');
    let fiveMinutes = 60 * 1,
        display = document.getElementById('bonus-cost');
    startTimer(fiveMinutes, display);

}

function normalMultiplier() {
    multiplier = multiplier / 2;
    bonusBtn.removeAttribute('disabled');
}

// 5 minutes timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

