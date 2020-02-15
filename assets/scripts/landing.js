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
}
function showContact() {
  document.getElementById("contact").innerHTML = "<a href='https://www.facebook.com/lawrencio.w'>FACEBOOK</a><br><a href='https://www.instagram.com/lawrencio.w/'>INSTAGRAM</a><br><a href='https://www.linkedin.com/in/lawrence-c-w/'>LINKEDIN</a><br><a href='https://open.spotify.com/user/2232mfikorkepi3hqhfpkgdhq?si=V1tFp8yNSGatvckEe4Ia8w'>SPOTIFY</a><br>";
  document.getElementById("ct").innerHTML = "王晨玮";

}
