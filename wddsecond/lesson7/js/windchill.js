
    let t=parseFloat(document.querySelector("#temperature").value);
    let s=parseFloat(document.querySelector("#windspeed").value);
    let output=windchill(t, s)
    document.getElementById('windchill').innerHTML = output;


function windchill(t, s){
if (t <= 50 && s > 3) {
    let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + 0.4275 * t * Math.pow(s, 0.16);
} 
else {
    let wc = "N/A";
 return wc;
}
}





//let t=parseFloat(document.querySelector("#temperature").value);
//let s=parseFloat(document.querySelector("#windspeed").value);
//document.getElementById('windchill').innerHTML = wc
//function windChill(t,s){
//if (t <= 50 && s > 3) {
  //  let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + 0.4275 * t * Math.pow(s, 0.16);
//} else {
  //  let wc = "N/A";
//}
//return wc
//}


//let wc=windChill(t,s);