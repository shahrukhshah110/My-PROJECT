console.log('connected');

var secNode = document.getElementById('seconds')
var minNode = document.getElementById('minutes')
var hourNode = document.getElementById('hours')
var startWatch = false
var secCounter = 0
var minCounter = 0
var hourCounter = 0

var sectext = ""
var mintext = ""
var hourtext = ""

function stopwatch() {
    if (startWatch) {
        secCounter = secCounter + 1 //11

        if (secCounter == 20) { //60 sec = 1 min
            minCounter = minCounter + 1
            secCounter = 0
        }
        if (minCounter == 2) { // 60 min = 1 hr
            hourCounter = hourCounter + 1
            minCounter = 0
        }

        if(hourCounter === 24) {
            startWatch = false
            reset()
        }


        sectext = secCounter //11
        mintext = minCounter
        hourtext = hourCounter

        if (secCounter < 10) {
            sectext = "0" + secCounter //01
        }
        if (minCounter < 10) {
            mintext = "0" + minCounter
        }
        if (hourCounter < 10) {
            hourtext = "0" + hourCounter
        }

        hourNode.innerHTML = hourtext
        minNode.innerHTML = mintext
        secNode.innerHTML = sectext
        setTimeout(() => stopwatch(), 100)
        //Callback function first arg settimeout
    }
}


function start() {
    if(startWatch === false){
        startWatch = true
        stopwatch()
    }
}

function stop() {
    startWatch = false
}

function reset() {
    console.log("LOG")
    startWatch = false;



    secCounter = 0;
    minCounter = 0
    hourCounter = 0;

    hourtext = "0" + hourCounter
    mintext = "0" + minCounter
    sectext = "0" + secCounter

    hourNode.innerHTML = hourtext
    minNode.innerHTML = mintext
    secNode.innerHTML = sectext
}