// countdown created using instructions from https://www.developerdrive.com/build-countdown-timer-pure-javascript/
var endDate = new Date("Dec 25, 2019 00:00:00").getTime();
var timer = setInterval(function(){
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {

    let dates = new Date();

    document.getElementById("date").innerHTML = dates;
    
  } else {

    document.getElementById("timer").innerHTML = "The countdown is over!";

  }

}, 1000);
