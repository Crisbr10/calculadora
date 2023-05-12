//VARIABLES A UTILIZAR EN LAS OPERACIONES
let input='0';
let check=false;
let result='';




/*FUNCION QUE ASIGNA VALUE AL VALOR DE LOS DATOS ALMACENADOS EN LA PANTALLA PARA LUEGO SER ACTUALIZADOS EN OTRA FUNCION
DECLARADA COMO ADDNUMERO()*/
function updateDisplay(value){
    document.getElementById("pantalla").value=value;
};

//FUNCION QUE RESETEA LOS VALORES DE LA PANTALLA
function borrar(){
    pantalla.value='0';
    result='';
};

/* ESTA FUNCION PRIMERO EVALUA SI EL ULTIMO CARACTER DE LA PANTALLA ES UN OPERANDO O UN NUMERO
Y A PARTIR DE AHI MUESTRA EL RESULTADO O DEVUELVE UN ERROR SI ESTE ES UN OPERANDO*/
let btnIgual=document.getElementById('fondoVerde')
btnIgual.addEventListener('click',()=>{
    let error="Error";
    let str=document.getElementById("pantalla").value;
    let array= str.split('');
    let lastValue= array.pop();
    if(lastValue!='+' && lastValue!='*' && lastValue!='-' && lastValue!='/' && lastValue!='%'){
        pantalla.value = eval(document.getElementById("pantalla").value);
        check=true;  
        result=document.getElementById("pantalla").value;
    }
    else{
       borrar();
       pantalla.value=error;
    }
    
 
});

/*ESTA FUNCION EVALUA SI EXISTE ALGUN CARACTER EN PANTALLA DE UN RESULTADO ANTERIOR, SI ES ASI, 
LO ELIMINA PARA COMENZAR UNA NUEVA OPERACION */
function addNumero(value){
    if(check==true){
        pantalla.value='';
        pantalla.value+=value;
        check=false;
        
      
    }
     else{
        if(pantalla.value==='0'){
            pantalla.value='';
            pantalla.value+=value;
        }
        else{
            pantalla.value+=value;
        }
    }  
};

/*ESTA FUNCION ELIMINA UNO A UNO LOS CARACTERES DE LA PANTALLA EN FUNCION DE LAS NECESIDADES
DEL USUARIO O DE ERRORES COMETIDOS AL ESCRIBIR*/
function deleteChar(){
    let error="Error";
    let str=document.getElementById("pantalla").value;
    let array= str.split('');
    array.pop();
    str=array.join('');
    pantalla.value=str;

}

/*LA SIGUIENTE FUNCION EVALUA UNA VARIABLE BOOLEANA Y A PARTIR
DE AHI CAMBIA EL THEMA DE LA PAGINA A CLARO O OSCURO EN DEPENDECIA 
DEL VALOR DE LA VARIABLE  */

let theme=false;
function changeTheme(){
    
    if(theme==false){
        let dark=document.getElementById('css');
        dark.setAttribute('href','theme.css');
        theme=true
    }
    else{
        let dark=document.getElementById('css');
        dark.setAttribute('href','styles.css');
        theme=false;
    }       
}


   
function continuar(){
   document.getElementById("alerta").style.visibility='hidden'
}