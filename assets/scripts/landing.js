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

function show(_target, _upperLevel) {
  let x = document.getElementById(_target);
  let container = document.getElementById(_upperLevel);

  if (x.classList.contains('hidden')) {
    x.classList.remove('hidden');
    setTimeout( function () { x.classList.remove('visuallyhidden'); }, 20);
    container.classList.remove('back');
    container.classList.add('front');
  }
  else {
    x.classList.add('visuallyhidden');
    x.addEventListener('transitionend', function(e) { x.classList.add('hidden'); }, { capture: false, once: true, passive: false });
    if (_target == 'about') {
      let y = document.getElementById('spotify');
      let z = document.getElementById('mobile-playlist');

      y.classList.add('visuallyhidden');
      y.addEventListener('transitionend', function(e) { y.classList.add('hidden'); }, { capture: false, once: true, passive: false });
      z.classList.remove('front');
      z.classList.add('back');
    }
    container.classList.remove('front');
    container.classList.add('back');
  }
}

function showMobile(_target) {
  if (_target == 'about') {
    var x = document.getElementById('about');
    var y = document.getElementById('project');
  }
  else if (_target == 'project') {
    var x = document.getElementById('project');
    var y = document.getElementById('about');
  }
  if (x.classList.contains('hidden')) {
    x.classList.remove('hidden');
    x.classList.remove('visuallyhidden');
  }
  else {
    x.classList.add('visuallyhidden');
    x.classList.add('hidden');
  }
  if (y.classList.contains('hidden')) {
  }
  else {
    y.classList.add('visuallyhidden');
    y.classList.add('hidden');
  }
}

function greeting() {
  var day = new Date();
  var hr = day.getHours();
  if (hr == 0) { document.getElementById("note").innerHTML = "12AM: The waves come after midnight."; }
  if (hr == 1) { document.getElementById("note").innerHTML = "1AM: Let's fall asleep to revolution, then wake up next to a sad excuse"; }
  if (hr == 2) { document.getElementById("note").innerHTML = "2AM: We got our champagne dreams, in an endless drought"; }
  if (hr == 3) { document.getElementById("note").innerHTML = "3AM: Should we drink a little more of this Roman coke"; }
  if (hr == 4) { document.getElementById("note").innerHTML = "4AM: Wasted youth, always on the road"; }
  if (hr == 5) { document.getElementById("note").innerHTML = "5AM: Last of a dying breed"; }
  if (hr == 6) { document.getElementById("note").innerHTML = "6AM: the lies I weave are all so intricate"; }
  if (hr == 7) { document.getElementById("note").innerHTML = "7AM: Turn around and you’ll see what I see"; }
  if (hr == 8) { document.getElementById("note").innerHTML = "8AM: to be honest, what I liked, were the things we didn’t know"; }
  if (hr == 9) { document.getElementById("note").innerHTML = "9AM: Would you believe me now, if I say I got caught up in a wave, almost gave it away"; }
  if (hr == 10) { document.getElementById("note").innerHTML = "10AM: Our country, guess it was a lawless land"; }
  if (hr == 11) { document.getElementById("note").innerHTML = "11AM: Hang your head low in the glow of the vending machine I'm not dying"; }
  if (hr == 12) { document.getElementById("note").innerHTML = "12PM: What are you having for lunch?"; }
  if (hr == 13) { document.getElementById("note").innerHTML = "1PM: I guess you win some and lose some, 'long as the outcome's income. I want it all, and then some."; }
  if (hr == 14) { document.getElementById("note").innerHTML = "2PM: It’s a train wreck, but I won’t crash it"; }
  if (hr == 15) { document.getElementById("note").innerHTML = "3PM: tell me all your original sins"; }
  if (hr == 16) { document.getElementById("note").innerHTML = "4PM: I’ll start somewhere new, and let you have LA"; }
  if (hr == 17) { document.getElementById("note").innerHTML = "5PM: All the cigarette smoke, can't escape a closing window"; }
  if (hr == 18) { document.getElementById("note").innerHTML = "6PM: Have you thought it over, have you gotten what you deserved"; }
  if (hr == 19) { document.getElementById("note").innerHTML = "7PM: You are what you love not who loves you"; }
  if (hr == 20) { document.getElementById("note").innerHTML = "8PM: clear blue water, high tide, came and brought you in"; }
  if (hr == 21) { document.getElementById("note").innerHTML = "9PM: We're walking the wire, love."; }
  if (hr == 22) { document.getElementById("note").innerHTML = "10PM: Try to shine. Stay wild."; }
  if (hr == 23) { document.getElementById("note").innerHTML = "11PM: When it rains it pours, so stay thirsty like before"; }
}
