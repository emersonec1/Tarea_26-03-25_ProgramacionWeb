function convertirvalor(n1){
    return n1*0.621371
}
$(document).ready(function(){
    $('.evento_convertir').click(function(){
        var n1=parseFloat($('.txt_n1').val());
        $('.resultadoConvertir').html("La conversión de "+n1+" Kilometros a Millas es: "+convertirvalor(n1));
    })
})