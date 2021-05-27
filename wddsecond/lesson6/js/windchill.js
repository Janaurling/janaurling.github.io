let s = document.querySelector("windspeed");
let t = document.querySelector("temperture");

function windchillcalc(t, s){

    if (t<=10||s>3){
    let wc = 35.74 + (0.6215*t) - (35.75*Math.pow(s,0.16)) + 0.4275*t*Math.pow(s,0.16);
    return wc;
}
    else{
        wc="N/A"
    }
   }

let wc= "windchill"