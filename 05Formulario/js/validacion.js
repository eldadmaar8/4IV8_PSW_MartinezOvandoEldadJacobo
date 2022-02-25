/* 
java script es un lenguaje que posee un paradigma orientado a
objetos y funciones, por tal motivo presenta una particularidad
la cual es: 
no TIPADO

por lo que no existe  int, double float, string etc
dentro de JS no todo es VR -> variable 
 
de acuerdo al estandar de ES6 se manejan 3 tipos de variables 

VAR 
LET es una varibale de tipo protected 
CONST*/

function validar(formulario){

    if(formulario.nombre.value.length < 5){
        alert("escriba por los menos cinco caracteres para el nombre");
        formulario.nomnbre.focus();

        return false;
    }

    var checkOK ="ABCDEFGIJKLMNÑOPQRSTUVWXYZ"+"abcdefgihjklmnñopqrstuvwxyz";

    var checkSTR = formulario.nombre.value;

    var allvalido = true;
    
    for( var i = 0; i< checkSTR.length; i++){
        var ch =checkSTR .charAt(i);
        for(var j =0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;



        }
        if ( j == checkOK.length){
            allvalido =false;
            break;
        }

    }
    
    if(!allvalido){
        alert("escriba unicamente letras en el campo de nombre");
        formulario.edad.focus();
        return false;
    }

    var checkOK ="123456789";

    var checkSTR = formulario.nombre.value;

    var allvalido = true;
    
    for( var i = 0; i< checkSTR.length; i++){
        var ch =checkSTR .charAt(i);
        for(var j =0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;



        }
        if ( j == checkOK.length){
            allvalido =false;
            break;
        }

    }
    
    if(!allvalido){
        alert("escriba unicamente letras en el campo de nombre");
        formulario.edad.focus();
        return false;

    }
    /* es necsario que busquen como crear epresiones regulares para poder 
    validar la entrada de cualquier dato*/    

    var txt = formulario.email.valur;

    //crear mi expresion

    var b = /^[^@\s]+[^@\.]+(\.[^@\.\s]+)+$/;

    alert("email"+(b.test(txt)?" ":"no")+"valido");

    return b.test;

}