$(function(){
    $('.product-card').hover(function() {
       $(this).find('.description').animate({
         height: "toggle",
         opacity: "toggle"
       }, 300);
     });
});