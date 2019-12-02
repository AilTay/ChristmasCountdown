

function calc() {
    today = new Date();

    xmas = new Date("December 24, " + today.getFullYear());

    if (today > xmas) {
        xmas.setYear(today.getFullYear() + 1);
    }

    msPerDay = 24 * 60 * 60 * 1000;
    timeLeft = (xmas.getTime() - today.getTime());
    e_daysLeft = timeLeft / msPerDay;
    daysLeft = Math.floor(e_daysLeft);
    e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    hrsLeft = Math.floor(e_hrsLeft);
    e_minsLeft = (e_hrsLeft - hrsLeft) * 60;
    minsLeft = Math.floor(e_minsLeft);
    e_secsLeft = (e_minsLeft - minsLeft) * 60;
    secsLeft = Math.floor(e_secsLeft);

    var c = document.getElementsByClassName("xmas");
    var i;
    for (i = 0; i < c.length; i++) {

        c[i].innerHTML = "There are " + daysLeft + " days, " + hrsLeft + " hours, " + minsLeft + " minutes, and " + secsLeft + " seconds until Santa comes!";
    }
    
}
setInterval(calc, 0);
// help me out laid ease i can't figure out how to make this script (that i totally wrote myself 100% didn't just google it) work LOL like from what i can tell it *SHOULD* be working but it's just not and im so bad at this rIP