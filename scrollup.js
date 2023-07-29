// Get the button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myBtn").style.display = "block";
    window.alert(mybutton);
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function popup(a){
  document.getElementById("popup-img").src=a.src;
  document.getElementById("popup-title").innerHTML=a.title;
  document.getElementById("popup-desc").innerHTML=a.alt;
  $('.modal').modal('show');
}
$(document).ready(function() {
  $(".fadeIn").each(function() {
      var src = $(this).data("src");
      if (src) {
          var img = new Image();
          img.style.display = "none";
          img.onload = function() {
              $(this).fadeIn(1000);
          };
          $(this).append(img);            
          img.src = src;
      }
  });
});