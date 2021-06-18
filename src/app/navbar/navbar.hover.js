$("nav ul li a").hover(
  function() {
   if ($(document).scrollTop() > 0) {
     $(this).css("color", "rgba(8, 5, 5, 0.842)");
   } else {
       if ($(window).width() > 992){
           $(this).css("color", "#94723c");
       }
       else{
       $(this).css("color", "rgba(8, 5, 5, 0.842)");
   }
 }
 },
  function() {
   if ($(document).scrollTop() > 0) {
     $(this).css("color", "#595959c9");
     $(".active a").css("color", "rgba(8, 5, 5, 0.842)");
   } else {
       if ($(window).width() > 992){
           $(this).css("color", "#fff");
       }
       else{
           $(this).css("color", "#595959c9");
     $(".active a").css("color", "rgba(8, 5, 5, 0.842)");
       }
   }
 }
);