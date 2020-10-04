function mostrar(){
    document.getElementById('resultado1').style.display = "block ";
}
function ocultar(){
    document.getElementById('resultado1').style.display = "none ";
}
function mostrar2(){
    document.getElementById('resultado2').style.display = "block ";
}
function ocultar2(){
    document.getElementById('resultado2').style.display = "none ";
}

/*FUNCION PARA EL HEADER*/
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').addClass('headerfijo');
        }else{
            $('header').removeClass('headerfijo');

        }
    });
});


