$(document).ready( function(){

    var serviciosPosition = document.getElementById('servicios').getBoundingClientRect();
    var tlfput = false;
    var tlf = document.getElementById('tlf');
    var nodo = document.createElement("a");
    var text = document.createTextNode("TELÉFONO DE RESERVAS : 914 21 66 17");
    nodo.appendChild(text);

    $("#tlf").hide();

    $(window).scroll(function() {

        if(!tlfput){
            if(window.scrollY >= serviciosPosition.top){
                $("#tlf").fadeIn('slow');
                tlfput = true;
            }
        }

        if(tlfput){
            if(window.scrollY < serviciosPosition.top){
                $("#tlf").fadeOut('slow');
                tlfput = false;
            }
        }
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

});

