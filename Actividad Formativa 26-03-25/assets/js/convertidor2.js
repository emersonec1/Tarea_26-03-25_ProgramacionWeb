function convertirvalor(n1){
    return n1/922.08
}
$(document).ready(function(){
    $('.evento_convertir').click(function(){
        var n1=parseFloat($('.txt_n1').val());
        $('.resultadoConvertir').html("La conversión de CLP: "+n1+" a USD es: "+convertirvalor(n1));
    })
})