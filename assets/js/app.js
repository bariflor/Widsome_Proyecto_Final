$(document).ready(function(){
   //código a ejecutar cuando el DOM está listo para recibir instrucciones.
   $('.carousel').carousel()
});
$(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-inverse");
        } else {
            $("#menu").removeClass("bg-inverse");
        }
});