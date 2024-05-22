
window.onload=function(){
    let minutes=0;
    let seconds=0;
    let tens=00;
    let appendMinutes=document.getElementById("minutes");
    let appendSeconds=document.getElementById("seconds");
    let appendTens=document.getElementById("tens");
    let startButton=document.getElementById("start-button");
    let stopButton=document.getElementById("stop-button");
    let restartButton=document.getElementById("reset-button");
          let interval;

const startTimer=()=>{
    tens++;
    if(tens<=9){
        appendTens.innerHTML='0'+tens; 
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++
        appendSeconds.innerHTML='0'+seconds;
        tens=0;
        appendTens.innerHTML='0'+0;
    }
    if(seconds>9){
        appendSeconds.innerHTML=seconds;

        
    }
    if(seconds>59){
        appendMinutes.innerHTML='0'+minutes;
        seconds=0;
        appendSeconds.innerHTML='0'+0;
    }
}
startButton.addEventListener("click",()=>{
    clearInterval(interval);
    interval=setInterval(startTimer,10);
});
stopButton.addEventListener("click",()=>{
    clearInterval(interval);

});
restartButton.addEventListener("click",()=>{
    clearInterval(interval);
    tens='00';
seconds='00';
minutes='00';
appendMinutes.innerText=minutes;
appendSeconds=innerText=seconds;
appendTens.innerText=tens;

});

}


// function showTime() {
//     const displayTime = new Date();
//     // Corrected string interpolation and method name
//     const timeDisplay = `${displayTime.getHours()}:${displayTime.getMinutes()}:${displayTime.getSeconds()}:${displayTime.getMilliseconds()}`;
//     const disTime = document.getElementById("display-time");
//     disTime.innerText = timeDisplay;
// }

// // Initialize the display once to show the time immediately
// showTime();


