function insertNavbar(){
  var navbar = "<ul class = " + "nav"+ "><li class = " + "home" + "><a href='Landingpage.html'>Home</a></li><li class = 'nav_li'><a href='Jluch.html'>Жлъч</a></li><li class = 'nav_li'><a href='SoCalledCrew.html'>SoCalledCrew</a></li><li class = 'nav_li'><a href='Boro.html'>Боро Първи</a></li><li class = 'nav_li'><a href='Toshiba.html'>Григовор</a></li></ul>";
  var element = document.getElementById('nav');
  element.innerHTML = navbar;
  document.body.appendChild(element);
}
function swapText(text){
  var element = document.getElementById('song_txt');
  element.innerHTML = text;
  element.css("text-align", "center")
  document.body.appendChild(element);
}
//
// <ul class="nav">
// 	<li class="home" id = "navbar_li"><a href = "Landingpage">Home</a></li>
// </ul>
