function StopWatch() {
    
    let startTime, hr = 0, min = 0, sec = 0, isStarted = false, duration = `${hr}:${min}:${sec}`;
// creating the display elements
    const container = document.createElement("div");
    const display = document.createElement("h1");
    const lapDisplay = document.createElement("h5");
    const lapBtn = document.createElement("button");
    const startBtn = document.createElement("button");
    const stopBtn = document.createElement("button");
    const resetBtn = document.createElement("button");
// setting the element text
    display.innerHTML = duration;
    lapBtn.innerHTML = "Lap";
    startBtn.innerHTML = "Start";
    stopBtn.innerHTML = "Stop";
    resetBtn.innerHTML = "Reset";
// setting the element attribute's
    container.id = "container";
    display.id = "display";
    lapDisplay.id = "lapDisplay";
    lapBtn.id = "lap", lapBtn.className = "btn b", lapBtn.disabled = true;
    startBtn.id = "start", startBtn.className = "btn g";
    stopBtn.id = "stop", stopBtn.className = "btn r";
    resetBtn.id = "seset", resetBtn.className = "btn y";
// appending element
    container.append(display, lapDisplay, lapBtn, startBtn);
    document.querySelector("#main").append(container);
    
    let time = ()=>{
        duration = `${hr}:${min}:${sec}`;
        display.innerHTML = duration;
        ++sec;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                hr++;
                min = 0;
            }
        }
    }
    // starting the StopWatch
    this.start = ()=>{
        if (!isStarted) {
            startTime  = setInterval(time, 1000);
            isStarted = true;
        }
        lapBtn.disabled = false;

        startBtn.remove();
        resetBtn.remove();
        container.append(lapBtn);
        container.append(stopBtn);
    }
    // lap the StopWatch
    let lapNum = 1;
    this.lap = ()=>{
        const br = document.createElement("br");
        // let lapVaule = 5;
        // lapVaule -= duration;
        lapDisplay.append(`${lapNum}. ${duration}`,br);
        
        lapNum++;
    }
    // stoping the StopWatch
    this.stop = ()=>{
        if (isStarted) {
            clearInterval(startTime);
            isStarted = false;
        }

        lapBtn.remove();
        stopBtn.remove();
        container.append(resetBtn);
        container.append(startBtn);
    }
    // reset the StopWatch
    this.reset = ()=>{
        hr = 0, min = 0, sec = 0;
        display.innerHTML = `${hr}:${min}:${sec}`;
        lapBtn.disabled = true;
        lapDisplay.innerHTML = "";

        resetBtn.remove();
        container.append(lapBtn);
        container.append(startBtn);
    }

// setting Event Listener
    startBtn.addEventListener("click", this.start);
    lapBtn.addEventListener("click", this.lap);
    stopBtn.addEventListener("click", this.stop);
    resetBtn.addEventListener("click", this.reset);

    // Object.defineProperty(this, "duration", {
    //     get: ()=>{return duration}
    // });
}

const newST = document.querySelector("#new");

newST.addEventListener("click", ()=> new StopWatch());