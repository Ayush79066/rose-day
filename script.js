let km = 600;

let d = document.getElementById("distance");
let rose = document.getElementById("rose");
let msg = document.getElementById("msg");

let run = setInterval(()=>{

km -= 4;
d.innerHTML = km + " km";

if(km <= 0){
clearInterval(run);
d.innerHTML = "0 km";
rose.style.display = "block";
msg.style.display = "block";
}

},100);
