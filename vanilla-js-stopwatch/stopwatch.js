window.onload = () => {
    //initial values
    var seconds = 00;
    var tens = 00;
    var interval;

    //html elements
    const secondsElement = document.getElementById("seconds");
    const tensElement = document.getElementById("tens");
    const buttonStart = document.getElementById("button-start")
    const buttonStop = document.getElementById("button-stop")
    const buttonReset = document.getElementById("button-reset")

    //functions

    function start(){
        clearInterval(interval)
        interval = setInterval(startTimer, 10);
    }

    function stop(){
        clearInterval(interval);
    }

    function reset(){
        clearInterval(interval);
        seconds = "00";
        tens = "00";
        secondsElement.innerHTML = seconds;
        tensElement.innerHTML = tens;
    }

    function startTimer(){
        tens++;
        
        if(tens <= 9){
            tensElement.innerHTML = "0" + tens;
        }

        if(tens > 9){
            tensElement.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            secondsElement.innerHTML = "0"+ seconds;
            tens = 0;
            tensElement.innerHTML = "0" + tens;
        }

        if(seconds > 9){
            secondsElement.innerHTML = seconds;
        }

    }

    //handlers
    buttonStart.addEventListener("click", start);
    buttonStop.addEventListener("click", stop);
    buttonReset.addEventListener("click", reset);
}