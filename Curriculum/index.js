let tituloActual=document.title;

window.onblur=function(){
    document.title='No te vayas por favor'
}

window.onfocus=function(){
    document.title=tituloActual
}
/*tituloActual=document.title
window.addEventListener('blur',() => {

    tituloActual=document.title
    document.title='¡No te vayas, por favor!'
});

window.addEventListener('focus',() =>{
    document.title=tituloActual
});*/

/*document.addEventListener("visibilitychange", () => {

    document.title = document.visibilityState == "visible"
        ? "Pestaña activa"
        : "Pestaña inactiva";
});*/
const cambioColor=document.querySelector('.cambio');
const boton=document.querySelector('button');
let contador=1
boton.addEventListener('click',()=>{
   if(contador==0){
        cambioColor.classList.add('cambio')
        contador=1
   }
   else{
        cambioColor.classList.remove('cambio')
        contador=0;
   }
},true)

