
function convertirvalor(n1){
    return n1*9/5+32
}
$(document).ready(function(){
    $('.evento_convertir').click(function(){
        var n1=parseFloat($('.txt_n1').val());
        $('.resultadoConvertir').html("La conversión de Celsius a Farenheit es: "+convertirvalor(n1));
    })
})