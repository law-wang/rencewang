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
