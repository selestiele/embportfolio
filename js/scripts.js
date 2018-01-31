/*   Javascript file for embportfolio   
     Filename: scripts.js
*/


function modalOpen(n) {
     var modalWindow = document.getElementById("modalWindow");
     var modalImages = document.getElementById("modalImages");
     var closeIcon = document.getElementById("closeIcon");
     var clickedImg = document.getElementById("pic"+ n).src;
     var imgAlt = document.getElementById("pic" + n).alt;
     var height = window.innerHeight;
     //var width = window.innerWidth;
     var caption = document.getElementById("captionTxt");

     modalImages.innerHTML = "<img src=\'" + clickedImg + "\' >";
     modalImages.style.maxHeight = "90%";
     modalWindow.style.display = "block";
     modalWindow.style.height = height * .8;
     //modalWindow.style.width = width;
     closeIcon.style.display = "inline-block";
     caption.innerHTML = imgAlt;
     
}

function modalClose() {
     var modalWindow = document.getElementById("modalWindow");
     var closeIcon = document.getElementById("closeIcon");
     
     modalWindow.style.display = "none";
     closeIcon.style.display = "none";
 
}

/* function hideNav() {
     var navBar = document.getElementById("navbar");
     var scrollStart = 0;
     
     
     if (){
          navBar.style.top = "-9999px";
     } else {
          navBar.style.top = "0";
     } 
}

if (window.addEventListener) {
     window.addEventListener("scrollDown", hideNav, false);
} else if (window.attachEvent) {
     window.attachEvent("onscroll", hideNav);
} */

var navBar = document.getElementById("navbar");
var lastScrollPosition = 0;
window.onscroll = function() {
    var newScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition){
          navBar.className = "";
    }else{
          navBar.className = "hide-nav";
    }
    lastScrollPosition = newScrollPosition;
}