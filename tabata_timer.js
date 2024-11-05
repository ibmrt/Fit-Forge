var timer;
var restTimer;
var intervals = document.getElementById("numIntervals").value;
var minutes = 0;
var seconds = 0;
var timePerInterval = document.getElementById("intervalTime").value;;
var restTime = document.getElementById("restTime").value;;
var isStart = true;
var isWork = true;
var totalTime = 0;
var workCounter = 0;
var restCounter = 0;
var currentInterval = 0;
document.getElementById("startBtn").addEventListener("click", function(){
    if(isStart){
        timer = setInterval(startStopTimer, 1000);
        document.getElementById("startBtn").value = "Stop";
        document.getElementById("startBtn").style.backgroundColor = "red";
        if(!isWork){
            startEndRest();
        }
    }else{
        clearInterval(timer);
        clearInterval(startEndRest);
        clearInterval(restTimer);
        clearInterval(checkTime);
        document.getElementById("startBtn").value = "Start";
        document.getElementById("startBtn").style.backgroundColor = "green";
    }
    function startStopTimer(){
        totalTime++;
        if(isWork){
            workCounter++;
        }
                
    }
    function startEndRest(){
        document.getElementById("timer").style.backgroundColor = "red";
        document.getElementById("Status").innerHTML = "Rest"
        restTimer = setInterval(function(){
            restCounter++;
            if(restCounter == restTime){
                clearInterval(restTimer);
            }
        },1000);
    }
    var checkTime = setInterval(function(){
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime - (minutes * 60);
        if(minutes < 10){minutes = "0"+minutes;}
        if(seconds < 10){seconds = "0"+seconds;}
        document.getElementById("time").innerHTML = minutes+':'+seconds;
        if(isWork){
            document.getElementById("Status").innerHTML = "Work"
            document.getElementById("timer").style.backgroundColor = "green";
        }
        if((workCounter)%parseInt(timePerInterval) == 0 && workCounter != 0){
            isWork = false;
            workCounter = 0;
            startEndRest();
        }
        if(restCounter == restTime){
            restCounter = 0;
            isWork = true;
            currentInterval++;
            document.getElementById("interval").innerHTML = currentInterval + "/" + intervals;
        }
        if(currentInterval == intervals){
            clearInterval(timer);
            clearInterval(startEndRest);
            clearInterval(restTimer);
            clearInterval(checkTime);
        }
        if(currentInterval >= intervals){
            clearInterval(timer);
            clearInterval(startEndRest);
            clearInterval(restTimer);
            clearInterval(checkTime);
            document.getElementById("interval").innerHTML = intervals + "/" + intervals;
        }

    },1);
    isStart = !isStart;
});
document.getElementById("resetBtn").addEventListener("click", function(){
    totalTime = 0;
    currentInterval = 0;
    isStart = !isStart;
    clearInterval(timer);
    document.getElementById("startBtn").value = "Start";
    document.getElementById("startBtn").style.backgroundColor = "green";
    document.getElementById("time").innerHTML = "00:00";
    document.getElementById("interval").innerHTML = currentInterval + "/" + intervals;
    document.getElementById("timer").style.backgroundColor = "white";
});

document.getElementById("numIntervals").addEventListener("keyup", function(){
    intervals = document.getElementById("numIntervals").value;
    document.getElementById("interval").innerHTML = currentInterval + "/" + intervals;
});
document.getElementById("intervalTime").addEventListener("keyup", function(){
    timePerInterval = document.getElementById("intervalTime").value;
});
document.getElementById("restTime").addEventListener("keyup", function(){
    restTime = document.getElementById("restTime").value;
});