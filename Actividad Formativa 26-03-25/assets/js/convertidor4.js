function convertirvalor(n1){
    return n1*0.453592
}
$(document).ready(function(){
    $('.evento_convertir').click(function(){
        var n1=parseFloat($('.txt_n1').val());
        $('.resultadoConvertir').html("La conversión de "+n1+" LB a KG es: "+convertirvalor(n1));
    })
})