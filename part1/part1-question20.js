function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var runner = setInterval(printTime, 1000);
setTimeout(clearTimeout, 5100, runner);
