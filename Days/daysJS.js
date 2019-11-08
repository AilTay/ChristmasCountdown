// creating pop-ups to coonfirm the user is on the right day
var i ="1st" // currently only works for the 1st.
var prompt = prompt("Is it the " + i + " of December? Enter yes or no.");

if(prompt === "yes"){
  alert("You are on the right day!");
}else if(prompt === "no"){
  alert("You are on the wrong day! Go back to avoid spoinling the fun!");
}else{//want prompt to appear again in this case but can't work out how.
  alert("Sorry I do not understand.");
}
