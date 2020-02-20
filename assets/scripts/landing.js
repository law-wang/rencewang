function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
}
function display_ct() {
  var x = new Date();
  var hours = (x.getHours() < 10? '0' : '') + x.getHours();
  var minutes = (x.getMinutes() < 10? '0' : '') + x.getMinutes();
  var seconds = (x.getSeconds() < 10? '0' : '') + x.getSeconds();
  var time = hours + ":" +  minutes + ":" +  seconds;
  document.getElementById('ct').innerHTML = time;
  display_c();
}
function showAbout() {
  var x = document.getElementById("about");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
  var y = document.getElementById("project");
  if (y.style.display === "block") {
    y.style.display = "none";
  }
  else {
    y.style.display = "none";
  }
}
function showContact() {
  document.getElementById("contact").innerHTML = "<a href='https://www.facebook.com/lawrencio.w'>FACEBOOK</a><br><a href='https://www.instagram.com/lawrencio.w/'>INSTAGRAM</a><br><a href='https://www.linkedin.com/in/lawrence-c-w/'>LINKEDIN</a><br><a href='https://open.spotify.com/user/2232mfikorkepi3hqhfpkgdhq?si=V1tFp8yNSGatvckEe4Ia8w'>SPOTIFY</a><br>";
  //document.getElementById("ct").innerHTML = "王晨玮";
}
function showProject() {
  var x = document.getElementById("project");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
  var y = document.getElementById("about");
  if (y.style.display === "block") {
    y.style.display = "none";
  }
  else {
    y.style.display = "none";
  }
}
function greeting() {
  var day = new Date();
  var hr = day.getHours();
  if (hr == 0) { document.getElementById("note").innerHTML = "<h4>12AM: The waves come after midnight.</h4>"; }
  if (hr == 1) { document.getElementById("note").innerHTML = "<h4>1AM: Let's fall asleep to revolution, then wake up next to a sad excuse</h4>"; }
  if (hr == 2) { document.getElementById("note").innerHTML = "<h4>2AM: We got our champagne dreams, in an endless drought</h4>"; }
  if (hr == 3) { document.getElementById("note").innerHTML = "<h4>3AM: Should we drink a little more of this Roman coke</h4>"; }
  if (hr == 4) { document.getElementById("note").innerHTML = "<h4>4AM: Wasted youth, always on the road</h4>"; }
  if (hr == 5) { document.getElementById("note").innerHTML = "<h4>5AM: Last of a dying breed</h4>"; }
  if (hr == 6) { document.getElementById("note").innerHTML = "<h4>6AM: the lies I weave are all so intricate</h4>"; }
  if (hr == 7) { document.getElementById("note").innerHTML = "<h4>7AM: Turn around and you’ll see what I see</h4>"; }
  if (hr == 8) { document.getElementById("note").innerHTML = "<h4>8AM: to be honest, what I liked, were the things we didn’t know</h4>"; }
  if (hr == 9) { document.getElementById("note").innerHTML = "<h4>9AM: Would you believe me now, if I say I got caught up in a wave, almost gave it away</h4>"; }
  if (hr == 10) { document.getElementById("note").innerHTML = "<h4>10AM: Our country, guess it was a lawless land</h4>"; }
  if (hr == 11) { document.getElementById("note").innerHTML = "<h4>11AM: Hang your head low in the glow of the vending machine I'm not dying</h4>"; }
  if (hr == 12) { document.getElementById("note").innerHTML = "<h4>12PM: What are you having for lunch?</h4>"; }
  if (hr == 13) { document.getElementById("note").innerHTML = "<h4>1PM: I guess you win some and lose some, 'long as the outcome's income. I want it all, and then some.</h4>"; }
  if (hr == 14) { document.getElementById("note").innerHTML = "<h4>2PM: It’s a train wreck, but I won’t crash it</h4>"; }
  if (hr == 15) { document.getElementById("note").innerHTML = "<h4>3PM: tell me all your original sins</h4>"; }
  if (hr == 16) { document.getElementById("note").innerHTML = "<h4>4PM: I’ll start somewhere new, and let you have LA</h4>"; }
  if (hr == 17) { document.getElementById("note").innerHTML = "<h4>5PM: All the cigarette smoke, can't escape a closing window</h4>"; }
  if (hr == 18) { document.getElementById("note").innerHTML = "<h4>6PM: Have you thought it over, have you gotten what you deserved</h4>"; }
  if (hr == 19) { document.getElementById("note").innerHTML = "<h4>7PM: You are what you love not who loves you</h4>"; }
  if (hr == 20) { document.getElementById("note").innerHTML = "<h4>8PM: clear blue water, high tide, came and brought you in</h4>"; }
  if (hr == 21) { document.getElementById("note").innerHTML = "<h4>9PM: We're walking the wire, love.</h4>"; }
  if (hr == 22) { document.getElementById("note").innerHTML = "<h4>10PM: Try to shine. Stay wild.</h4>"; }
  if (hr == 23) { document.getElementById("note").innerHTML = "<h4>11PM: When it rains it pours, so stay thirsty like before<h4>"; }
}
