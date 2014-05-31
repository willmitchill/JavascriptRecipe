$(document).ready(function() {
  
   $('#hide').click(function() {
   	 $('img').fadeOut('slow');
       
       });

   $('li').click(function() {
   	   $(this).css("text-decoration", "line-through");

   });
});

