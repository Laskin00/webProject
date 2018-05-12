function insertNavbar(){
  var navbar = "<ul class = " + "nav"+ "><li class = " + "home" + "><a href='Landingpage.html'>Home</a></li><li class = 'nav_li'><a href='Jluch.html'>Жлъч</a></li><li class = 'nav_li'><a href='SoCalledCrew.html'>SoCalledCrew</a></li><li class = 'nav_li'><a href='Boro.html'>Боро Първи</a></li><li class = 'nav_li'><a href='Grigovor.html'>Григовор</a></li></ul>";
  var element = document.getElementById('nav');
  element.innerHTML = navbar;
  document.body.appendChild(element);
}

function swapText(text){
  var element = document.getElementById('song_txt');
   element.innerHTML = text;
   element.css("text-align", "center")
   document.body.appendChild(element);
  // var r = new FileReader();
  // r.onload = (function(text) {
  //     return function(e) {
  //         var contents = e.target.result;
  //     };
  // })(text);
  // var element = document.getElementById('song_txt');
  // element.innerText = r.readAsText(text);
  // element.css("text-align", "center");
  // document.body.appendChild(element);


}

function processFile(theFile){
  return function(e) {
    var theBytes = e.target.result;
    document.getElementById('file').innerText = theBytes;
  }
}
