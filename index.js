const hourE1 = document.getElementById("hour");
const minuteE2 = document.getElementById("minute");
const secondE3 = document.getElementById("second");
const ampmE4 = document.getElementById("ampm");

function digitaClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    // condtion for ampm
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }
    // ternary condtion for 00 digit setting
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE2.innerText = m;
    secondE3.innerText = s;
    ampmE4.innerText = ampm


    // serTimeout excutes every second 
    setTimeout(() => {
        digitaClock()
    }, 1000)
}

// function calling
digitaClock()