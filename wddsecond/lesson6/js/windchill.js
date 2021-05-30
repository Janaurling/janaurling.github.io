let s = document.querySelector("windspeed");
let t = document.querySelector("temperture");

if (t <= 50 && s > 3) {
    let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + 0.4275 * t * Math.pow(s, 0.16);
} else {
    let wc = "N/A";
}

let wc = document.querySelector("windchill");