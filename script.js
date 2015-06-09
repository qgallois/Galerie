 function displayPics()
{
  var photos = document.getElementById('galerie_mini') ;
  var liens = photos.getElementsByTagName('a') ;
  var big_photo = document.getElementById('big_pictM') ;
  var big_photo = document.getElementById('big_pictA') ;
  var big_photo = document.getElementById('big_pictN') ;
  var big_photo = document.getElementById('big_pictP') ;
  var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0] ;
  for (var i = 0 ; i < liens.length ; ++i) {
    liens[i].onclick = function() {
      big_photo.src = this.href;
      big_photo.alt = this.title;
      titre_photo.firstChild.nodeValue = this.title;
      return false;
    };
  }
}
window.onload = displayPics;
 
