   // number-counting
   $('.stat-number').each(function () {
      var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
      $(this).prop('Counter', 0).animate({
         Counter: $(this).text()
      }, {
         duration: 5000,
         step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
         }
      });
   });

   
$(document).ready(function(){



 // header-toggle-content

 $(".mobile-nav-bars button").click(function (){
   $(".floating-nav").slideDown(500)
 })
 $(".mobile-nav-close button").click(function (){
   $(".floating-nav").slideUp(300)
 })

});