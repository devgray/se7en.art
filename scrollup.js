// Get the button

// When the user scrolls down 20px from the top of the document, show the button
var spinner = new Image();
spinner.src = 'img/loading.gif';
// console.log('url("' + spinner.src + '")');
// $('.img-wrap').css('background-image','url("' + spinner.src + '")');

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
  a = a.firstChild;
  //alert(a);
  or = a.getAttribute('or');
  x = document.getElementById("modal");
  if( or == 0){
    x.classList.remove('landscape');
    x.classList.remove('box');
    x.classList.add('portrait');
  }
  else if(or == 1){
    x.classList.remove('portrait');
    x.classList.remove('box');
    x.classList.add('landscape');
  }else{
    x.classList.remove('landscape');
    x.classList.remove('portrait');
    x.classList.add('box');
  }
  document.getElementById("popup-img").src=a.src;
  document.getElementById("popup-title").innerHTML=a.title;
  document.getElementById("popup-desc").innerHTML=a.alt;
  $('.modal').modal('show');
}
function fadeIn(a){
  
  op = 0.1;
  img = a.parentNode;
  // a.setAttribute('src', a.getAttribute('data-original-img'));
  a.style.opacity=1;
  
  
  
      // timer = setInterval(function () {
      //   if (op >= 1){
      //       clearInterval(timer);
      //   }
      //   img.style.opacity = op;
        
      // }, 10);
      
}
// $(document).ready(function() {
//   $(".img-test").each(function() {
//       op = 0;
//       var src = $(".img-test").data("src");
//       alert(src);
//       if (src) {
//           var img = new Image();
//           //img.style.display = "none";
//           img.onload = function() {
//               // $(this).fadeIn(1000);
//               img.style.opacity = op;
//               img.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//           };
//           $(this).append(img);            
//           img.src = src;
//       }
//   });
// });
